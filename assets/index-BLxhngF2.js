(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e,t){for(let n of t){let t=n.path.split(`/`).filter(Boolean),r=e.split(`/`).filter(Boolean);if(t.length!==r.length&&n.path!==`/`||n.path===`/`&&e!==`/`)continue;if(n.path===`/`&&e===`/`)return{id:n.id,params:{}};let i={},a=!0;for(let e=0;e<t.length;e++)if(t[e].startsWith(`:`))i[t[e].slice(1)]=decodeURIComponent(r[e]);else if(t[e]!==r[e]){a=!1;break}if(a)return{id:n.id,params:i}}return null}var t=class{constructor(e,t){this.routes=e,this.mount=t,window.addEventListener(`popstate`,()=>this.render()),document.addEventListener(`click`,e=>{let t=e.target.closest(`a[data-link]`);t&&(e.preventDefault(),this.navigate(t.getAttribute(`href`)))})}navigate(e){history.pushState({},``,e),this.render()}render(){let t=window.location.pathname,n=e(t,this.routes);if(!n){this.mount.innerHTML=`<h1>404</h1>`;return}this.routes.find(e=>e.id===n.id).handler(n.params,this.mount)}};function n(){return`
    <header class="site-header">
      <a href="/" data-link class="brand">Back on the Menu</a>
      <nav>
        <a href="/recipes" data-link>Browse</a>
        <a href="/favorites" data-link>Favorites</a>
        <a href="/week" data-link>Week</a>
        <a href="/shopping" data-link>Shopping</a>
      </nav>
    </header>
  `}var r=[{id:`spaghetti-carbonara`,title:`Spaghetti Carbonara`,description:`Classic Roman pasta with eggs, pecorino, and guanciale.`,image:`/images/spaghetti-carbonara.svg`,servings:4,prepTime:10,cookTime:15,totalTime:25,ingredients:[{quantity:1,unit:null,name:`spaghetti`,original:`1 lb spaghetti`},{quantity:4,unit:null,name:`egg`,original:`4 large eggs`},{quantity:1,unit:`cup`,name:`pecorino romano`,original:`1 cup grated pecorino`},{quantity:8,unit:null,name:`guanciale`,original:`8 oz guanciale, diced`}],instructions:[`Boil pasta in well-salted water until al dente.`,`Render guanciale in a wide pan until crisp.`,`Whisk eggs and cheese together off heat.`,`Toss pasta with guanciale, then off-heat with egg mixture, adding pasta water as needed.`],categories:{meal:`Dinner`,cuisine:`Italian`,dietary:[`nut-free`]},source:{type:`scraped`,site:`—`,url:``,attribution:``}},{id:`weeknight-chicken-tacos`,title:`Weeknight Chicken Tacos`,description:`Fast skillet chicken tacos with lime and cilantro.`,image:`/images/weeknight-chicken-tacos.svg`,servings:4,prepTime:10,cookTime:15,totalTime:25,ingredients:[{quantity:1,unit:null,name:`chicken breast`,original:`1 lb chicken breast`},{quantity:8,unit:null,name:`corn tortilla`,original:`8 corn tortillas`},{quantity:1,unit:null,name:`onion`,original:`1 yellow onion`},{quantity:2,unit:null,name:`garlic clove`,original:`2 garlic cloves`}],instructions:[`Slice chicken thin, season with cumin, salt, and pepper.`,`Sear in a hot skillet with oil until cooked through.`,`Warm tortillas. Top with chicken, onion, cilantro, and lime.`],categories:{meal:`Dinner`,cuisine:`Mexican`,dietary:[`dairy-free`,`nut-free`,`egg-free`]},source:{type:`scraped`,site:`—`,url:``,attribution:``}},{id:`brown-butter-chocolate-chip-cookies`,title:`Brown Butter Chocolate Chip Cookies`,description:`Nutty brown butter cookies with dark chocolate chips.`,image:`/images/brown-butter-chocolate-chip-cookies.svg`,servings:24,prepTime:20,cookTime:12,totalTime:32,ingredients:[{quantity:1,unit:`cup`,name:`all-purpose flour`,original:`1 cup all-purpose flour`},{quantity:2,unit:null,name:`egg`,original:`2 eggs`}],instructions:[`Brown the butter and let cool.`,`Whisk wet ingredients, fold in dry, fold in chocolate.`,`Bake at 375°F for 11-13 min.`],categories:{meal:`Dessert`,cuisine:`American`,dietary:[`vegetarian`]},source:{type:`scraped`,site:`—`,url:``,attribution:``}}];function i(e){return String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}function a(e){let t=(e.categories?.dietary??[]).map(e=>`<span class="chip">${i(e)}</span>`).join(``);return`
    <a class="recipe-card" href="/recipe/${e.id}" data-link>
      <img src="${e.image}" alt="" loading="lazy" />
      <div class="recipe-card__body">
        <h3>${i(e.title)}</h3>
        <p>${e.totalTime} min</p>
        <div class="recipe-card__chips">${t}</div>
      </div>
    </a>
  `}function o(e,t){t.innerHTML=`
    <main class="page-home">
      <section class="hero">
        <h1>Back on the Menu</h1>
        <p class="tagline">Ad-free recipes. Save favorites. Plan your week. Get a shopping list.</p>
        <a href="/recipes" class="cta" data-link>Browse all recipes</a>
      </section>
      <section>
        <h2>Featured</h2>
        <div class="card-grid">
          ${r.slice(0,3).map(a).join(``)}
        </div>
      </section>
    </main>
  `}var s=[`Breakfast`,`Lunch`,`Dinner`,`Dessert`,`Snack`,`Side`,`Sauce`],c=[`American`,`Italian`,`Mexican`,`Asian`,`Mediterranean`,`Indian`,`French`,`Other`],l=[`vegan`,`vegetarian`,`gluten-free`,`dairy-free`,`nut-free`,`low-sugar`];function u(e,t){t.innerHTML=`
    <main class="page-recipes">
      <h1>Recipes</h1>
      <input id="q" type="search" placeholder="Search recipes or ingredients" />
      <div class="filters">
        <select id="meal"><option value="">Any meal</option>${s.map(e=>`<option>${e}</option>`).join(``)}</select>
        <select id="cuisine"><option value="">Any cuisine</option>${c.map(e=>`<option>${e}</option>`).join(``)}</select>
        <div id="dietary">${l.map(e=>`<label><input type="checkbox" value="${e}"/>${e}</label>`).join(``)}</div>
        <input id="maxtime" type="number" placeholder="Max minutes" min="0" />
      </div>
      <div id="results" class="card-grid"></div>
    </main>
  `;let n=()=>{let e=t.querySelector(`#q`).value.trim().toLowerCase(),n=t.querySelector(`#meal`).value,i=t.querySelector(`#cuisine`).value,o=[...t.querySelectorAll(`#dietary input:checked`)].map(e=>e.value),s=parseInt(t.querySelector(`#maxtime`).value,10),c=r.filter(t=>{if(n&&t.categories.meal!==n||i&&t.categories.cuisine!==i)return!1;for(let e of o)if(!t.categories.dietary.includes(e))return!1;return!(!isNaN(s)&&t.totalTime>s||e&&!(t.title+` `+t.ingredients.map(e=>e.name).join(` `)).toLowerCase().includes(e))});t.querySelector(`#results`).innerHTML=c.map(a).join(``)};t.addEventListener(`input`,n),n()}var d=`botm:v1:`,f={favorites:[],week:[],shopping:{},settings:{}},p={get(e){let t=localStorage.getItem(d+e);if(t===null)return structuredClone(f[e]??null);try{return JSON.parse(t)}catch{return structuredClone(f[e]??null)}},set(e,t){localStorage.setItem(d+e,JSON.stringify(t))}};p.favorites={has(e){return p.get(`favorites`).includes(e)},toggle(e){let t=p.get(`favorites`),n=t.indexOf(e);n===-1?t.push(e):t.splice(n,1),p.set(`favorites`,t)}},p.week={has(e){return p.get(`week`).some(t=>t.id===e)},add(e){let t=p.get(`week`);t.some(t=>t.id===e)||(t.push({id:e,servingsOverride:null}),p.set(`week`,t))},remove(e){let t=p.get(`week`).filter(t=>t.id!==e);p.set(`week`,t)},setServings(e,t){let n;if(t==null)n=null;else{let e=Number(t);n=Number.isFinite(e)?e<1?1:Math.floor(e):null}let r=p.get(`week`).map(t=>t.id===e?{...t,servingsOverride:n}:t);p.set(`week`,r)}};function m(e,t){let n=r.find(t=>t.id===e.slug);if(!n){t.innerHTML=`<main><h1>Not found</h1><a href="/recipes" data-link>Browse recipes</a></main>`;return}let a=p.favorites.has(n.id),o=p.week.has(n.id);t.innerHTML=`
    <main class="page-recipe">
      <img class="hero" src="${n.image}" alt="" />
      <h1>${i(n.title)}</h1>
      <p>${i(n.description)}</p>
      <p>${n.totalTime} min · serves ${n.servings}</p>
      <div class="chips">${n.categories.dietary.map(e=>`<span class="chip">${i(e)}</span>`).join(``)}</div>

      <section class="recipe-body">
        <div>
          <h2>Ingredients</h2>
          <ul>${n.ingredients.map(e=>`<li>${i(e.original)}</li>`).join(``)}</ul>
        </div>
        <div>
          <h2>Instructions</h2>
          <ol>${n.instructions.map(e=>`<li>${i(e)}</li>`).join(``)}</ol>
        </div>
      </section>

      <p class="disclaimer">Always double-check ingredients for allergies.</p>

      <div class="sticky-bar">
        <button id="fav">${a?`★ Favorited`:`☆ Favorite`}</button>
        <button id="week">${o?`✓ In this week`:`+ Cook this week`}</button>
      </div>
    </main>
  `,t.querySelector(`#fav`).addEventListener(`click`,()=>{p.favorites.toggle(n.id),m(e,t)}),t.querySelector(`#week`).addEventListener(`click`,()=>{p.week.has(n.id)?p.week.remove(n.id):p.week.add(n.id),m(e,t)})}function h(e,t){let n=p.get(`favorites`),i=r.filter(e=>n.includes(e.id));t.innerHTML=`
    <main class="page-favorites">
      <h1>Favorites</h1>
      ${i.length===0?`<p>Heart a recipe to save it here. <a href="/recipes" data-link>Browse →</a></p>`:`<div class="card-grid">${i.map(a).join(``)}</div>`}
    </main>
  `}function g(e,t){let n=()=>{let e=p.get(`week`).map(e=>({entry:e,recipe:r.find(t=>t.id===e.id)})).filter(e=>e.recipe);t.innerHTML=`
      <main class="page-week">
        <h1>Cook This Week</h1>
        ${e.length===0?`<p>Add recipes from <a href="/recipes" data-link>Browse</a>.</p>`:`
            <ul class="week-list">
              ${e.map(({entry:e,recipe:t})=>`
                <li>
                  <a href="/recipe/${t.id}" data-link>${i(t.title)}</a>
                  <label>Servings:
                    <input type="number" min="1" data-id="${t.id}"
                      value="${e.servingsOverride??t.servings}" />
                  </label>
                  <button data-remove="${t.id}">Remove</button>
                </li>
              `).join(``)}
            </ul>
            <button id="clear">Clear week</button>
            <a href="/shopping" class="cta" data-link>View Shopping List →</a>
          `}
      </main>
    `,t.querySelectorAll(`input[data-id]`).forEach(e=>{e.addEventListener(`change`,e=>{let t=e.target.dataset.id,n=parseInt(e.target.value,10);p.week.setServings(t,isNaN(n)?null:n)})}),t.querySelectorAll(`[data-remove]`).forEach(e=>{e.addEventListener(`click`,()=>{p.week.remove(e.dataset.remove),n()})});let a=t.querySelector(`#clear`);a&&a.addEventListener(`click`,()=>{p.set(`week`,[]),n()})};n()}var _={synonyms:{egg:[`eggs`,`large egg`,`large eggs`],onion:[`yellow onion`,`white onion`,`onions`],"garlic clove":[`garlic cloves`,`cloves of garlic`],"olive oil":[`extra virgin olive oil`,`evoo`]},sections:{egg:`Dairy & Eggs`,onion:`Produce`,"garlic clove":`Produce`,"olive oil":`Pantry`,milk:`Dairy & Eggs`,"chicken breast":`Meat & Seafood`,"all-purpose flour":`Pantry`},unitConversions:{volume:{tsp:1,tbsp:3,"fl oz":6,cup:48,ml:.2029,l:202.9}},canonicalUnits:{"olive oil":`tbsp`,milk:`cup`}};function v(e,t){let n=e.trim().toLowerCase();for(let[e,r]of Object.entries(t.synonyms))if(n===e||r.map(e=>e.toLowerCase()).includes(n))return e;return n}function y(e,t,n){let r=n.unitConversions.volume[t.toLowerCase()];return r===void 0?null:e*r}function b(e,t){let n=new Map;for(let r of e)for(let e of r.ingredients){let r=v(e.name,t),i=e.unit?y(e.quantity,e.unit,t):null;n.has(r)||n.set(r,{name:r,section:t.sections[r]??`Other`,countable:{qty:0,used:!1},volumeBase:0,incompatibles:[]});let a=n.get(r);e.unit===null||e.unit===void 0?(a.countable.qty+=e.quantity,a.countable.used=!0):i===null?a.incompatibles.push(e.original):a.volumeBase+=i}let r=[];for(let e of n.values()){if(e.countable.used)r.push({name:e.name,section:e.section,canonicalUnit:null,displayQuantity:e.countable.qty,totalInBase:null});else if(e.volumeBase>0){let n=t.canonicalUnits[e.name]??`cup`,i=t.unitConversions.volume[n];r.push({name:e.name,section:e.section,canonicalUnit:n,displayQuantity:x(e.volumeBase/i),totalInBase:e.volumeBase})}for(let t of e.incompatibles)r.push({name:e.name,section:e.section,canonicalUnit:null,displayQuantity:t,totalInBase:null})}return r}function x(e){return Math.round(e*100)/100}function S(e,t){if(t===null||t===e.servings)return e;let n=t/e.servings;return{...e,servings:t,ingredients:e.ingredients.map(e=>({...e,quantity:e.quantity*n}))}}function C(e,t){let n=b(p.get(`week`).map(e=>{let t=r.find(t=>t.id===e.id);return t?S(t,e.servingsOverride):null}).filter(Boolean),_),a={};for(let e of n)a[e.section]=a[e.section]||[],a[e.section].push(e);let o=p.get(`shopping`);t.innerHTML=`
    <main class="page-shopping">
      <h1>Shopping List</h1>
      ${n.length===0?`<p>Add recipes to <a href="/week" data-link>Cook This Week</a> first.</p>`:`
          ${Object.entries(a).map(([e,t])=>`
            <h2>${i(e)}</h2>
            <ul>${t.map(t=>{let n=`${e}::${t.name}`,r=o[n]?.checked?`checked`:``,a=t.canonicalUnit?`${t.displayQuantity} ${t.canonicalUnit}`:`${t.displayQuantity}`;return`<li>
                <label>
                  <input type="checkbox" data-key="${i(n)}" ${r}/>
                  ${a} ${i(t.name)}
                </label>
              </li>`}).join(``)}</ul>
          `).join(``)}
          <button id="print">Print</button>
        `}
    </main>
  `,t.querySelectorAll(`input[type=checkbox]`).forEach(e=>{e.addEventListener(`change`,()=>{let t=p.get(`shopping`);t[e.dataset.key]={checked:e.checked},p.set(`shopping`,t)})});let s=t.querySelector(`#print`);s&&s.addEventListener(`click`,()=>window.print())}var w=[{path:`/`,id:`home`,handler:o},{path:`/recipes`,id:`recipes`,handler:u},{path:`/recipe/:slug`,id:`recipe`,handler:m},{path:`/favorites`,id:`favorites`,handler:h},{path:`/week`,id:`week`,handler:g},{path:`/shopping`,id:`shopping`,handler:C}];document.body.insertAdjacentHTML(`afterbegin`,n()),new t(w,document.getElementById(`app`)).render(),`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`/service-worker.js`).catch(console.error)});