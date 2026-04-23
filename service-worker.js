/*
 * Back on the Menu — Service Worker
 *
 * Strategy:
 *   - Network-first for HTML (navigation requests, index.html). Returning
 *     visitors always get the latest shell — fixes the "stale cache" bug
 *     where users would see an old version for days after a deploy.
 *   - Cache-first for hashed assets (JS, CSS, fonts, images). Vite cache-busts
 *     these via content-hash filenames, so updates produce new URLs that
 *     naturally miss cache and get fetched fresh.
 *
 * Bump CACHE_VERSION when the shape of cached resources changes (rare).
 * Otherwise the SW handles updates transparently — bump unnecessary.
 */

const CACHE_VERSION = "v2";
const CACHE_NAME = `botm-${CACHE_VERSION}`;
const PRECACHE = ["/", "/index.html"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE))
  );
  // Activate this SW immediately on install — don't wait for all tabs to close.
  // Combined with clients.claim() in activate, new deploys reach users on the
  // very next page load instead of "sometime later when all tabs are closed."
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([
      self.clients.claim(),
      // Clean up any caches from previous CACHE_VERSION values
      caches.keys().then((keys) =>
        Promise.all(
          keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
        )
      ),
    ])
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  // Don't intercept cross-origin requests (no analytics or third-party
  // resources currently, but defensive against future ones).
  if (url.origin !== self.location.origin) return;

  // Detect navigation / HTML requests
  const isHTML =
    event.request.mode === "navigate" ||
    (event.request.headers.get("accept") || "").includes("text/html");

  if (isHTML) {
    // Network-first: always try fresh, fall back to cache only when offline
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() =>
          caches.match(event.request).then((hit) => hit || caches.match("/"))
        )
    );
    return;
  }

  // Cache-first for assets (JS, CSS, fonts, images, JSON)
  // Hashed filenames mean cached entries are immutable for their content.
  event.respondWith(
    caches.match(event.request).then((hit) => {
      if (hit) return hit;
      return fetch(event.request).then((response) => {
        if (!response.ok) return response;  // don't cache errors
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      });
    })
  );
});
