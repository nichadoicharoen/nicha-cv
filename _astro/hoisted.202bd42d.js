const f=document.querySelector("#primary-nav"),P=document.querySelector("#nav-toggle"),w=document.querySelector("#nav-toggle input");P.addEventListener("change",()=>{f.getAttribute("data-visible")==="false"?(f.setAttribute("data-visible","true"),f.setAttribute("aria-expanded","true")):f.getAttribute("data-visible")==="true"&&(f.setAttribute("data-visible","false"),f.setAttribute("aria-expanded","false"))});document.querySelector("main").addEventListener("click",()=>{f.getAttribute("data-visible")==="true"&&(f.setAttribute("data-visible","false"),f.setAttribute("aria-expanded","false"),w.checked=!w.checked)});const b=document.querySelector("#scrollButton");b.addEventListener("click",()=>{window.scroll({top:0,left:0,behavior:"smooth"})});window.addEventListener("scroll",()=>{document.documentElement.scrollTop>window.innerHeight/4?b.style.display="block":b.style.display="none"});function S(){const n=localStorage.theme||document.querySelector("html").getAttribute("data-theme");document.querySelector("html").setAttribute("data-theme",n),n==="cmyk"?document.querySelector("#themeSetting > input").checked=!0:document.querySelector("#themeSetting > input").checked=!1}function k(){document.querySelector("#themeSetting").addEventListener("click",()=>{const n=document.querySelector("#themeSetting > input");n.checked=!n.checked,n.checked?localStorage.theme="cmyk":localStorage.theme="night",S()})}k();S();document.addEventListener("astro:after-swap",S);document.addEventListener("astro:after-swap",k);const Y=n=>history.state&&history.replaceState(n,""),T=!!document.startViewTransition,g=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),x=n=>document.dispatchEvent(new Event(n)),L=()=>x("astro:page-load"),h="data-astro-transition-persist";let m=0;history.state?(m=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):g()&&history.replaceState({index:m,scrollX,scrollY},"");const I=(n,t)=>{let e=!1,r=!1;return(...l)=>{if(e){r=!0;return}n(...l),e=!0,setTimeout(()=>{r&&(r=!1,n(...l)),e=!1},t)}};async function X(n){try{const t=await fetch(n),e=await t.text();return{ok:t.ok,html:e,redirected:t.redirected?t.url:void 0,mediaType:t.headers.get("content-type")?.replace(/;.*$/,"")}}catch{return{ok:!1}}}function q(){const n=document.querySelector('[name="astro-view-transitions-fallback"]');return n?n.getAttribute("content"):"animate"}function R(){for(const n of document.scripts)n.dataset.astroExec=""}function $(){let n=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const e=document.createElement("script");e.innerHTML=t.innerHTML;for(const r of t.attributes){if(r.name==="src"){const l=new Promise(p=>{e.onload=p});n=n.then(()=>l)}e.setAttribute(r.name,r.value)}e.dataset.astroExec="",t.replaceWith(e)}return n}function M(n){const t=n.effect;return!t||!(t instanceof KeyframeEffect)||!t.target?!1:window.getComputedStyle(t.target,t.pseudoElement).animationIterationCount==="infinite"}const H=new DOMParser;async function v(n,t,e,r){const l=o=>{const i=o.getAttribute(h),c=i&&n.head.querySelector(`[${h}="${i}"]`);if(c)return c;if(o.matches("link[rel=stylesheet]")){const a=o.getAttribute("href");return n.head.querySelector(`link[rel=stylesheet][href="${a}"]`)}if(o.tagName==="SCRIPT"){let a=o;for(const d of n.scripts)if(a.textContent&&a.textContent===d.textContent||a.type===d.type&&a.src===d.src)return d}return null},p=()=>{n.querySelectorAll("head noscript").forEach(s=>s.remove());const o=document.documentElement,i=[...o.attributes].filter(({name:s})=>(o.removeAttribute(s),s.startsWith("data-astro-")));[...n.documentElement.attributes,...i].forEach(({name:s,value:u})=>o.setAttribute(s,u));for(const s of Array.from(document.head.children)){const u=l(s);u?u.remove():s.remove()}document.head.append(...n.head.children);const c=document.body;document.body.replaceWith(n.body);for(const s of c.querySelectorAll(`[${h}]`)){const u=s.getAttribute(h),E=document.querySelector(`[${h}="${u}"]`);E&&E.replaceWith(s)}scrollTo({left:0,top:0,behavior:"instant"});let a=0,d=0;if(!e&&t.hash){const s=decodeURIComponent(t.hash.slice(1)),u=document.getElementById(s);u&&(u.scrollIntoView(),a=Math.max(0,u.offsetLeft+u.offsetWidth-document.documentElement.clientWidth),d=u.offsetTop)}else e&&scrollTo(e.scrollX,e.scrollY);!e&&history.pushState({index:++m,scrollX:a,scrollY:d},"",t.href),x("astro:after-swap")},y=[];for(const o of n.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${h}="${o.getAttribute(h)}"], link[rel=stylesheet]`)){const i=document.createElement("link");i.setAttribute("rel","preload"),i.setAttribute("as","style"),i.setAttribute("href",o.getAttribute("href")),y.push(new Promise(c=>{["load","error"].forEach(a=>i.addEventListener(a,c)),document.head.append(i)}))}if(y.length&&await Promise.all(y),r==="animate"){const o=document.getAnimations();document.documentElement.dataset.astroTransitionFallback="old";const i=document.getAnimations().filter(d=>!o.includes(d)&&!M(d)),c=Promise.all(i.map(d=>d.finished)),a=()=>{p(),document.documentElement.dataset.astroTransitionFallback="new"};await c,a()}else p()}async function A(n,t,e){let r;const l=t.href,{html:p,ok:y,mediaType:o,redirected:i}=await X(l);if(i&&(t=new URL(i)),!y||!(o==="text/html"||o==="application/xhtml+xml")){location.href=l;return}const c=H.parseFromString(p,o);if(!c.querySelector('[name="astro-view-transitions-enabled"]')){location.href=l;return}!e&&history.replaceState({index:m,scrollX,scrollY},""),document.documentElement.dataset.astroTransition=n,T?r=document.startViewTransition(()=>v(c,t,e)).finished:r=v(c,t,e,q());try{await r}finally{await $(),R(),L()}}function C(n){if(document.querySelector(`link[rel=prefetch][href="${n}"]`))return;if(navigator.connection){let e=navigator.connection;if(e.saveData||/(2|3)g/.test(e.effectiveType||""))return}let t=document.createElement("link");t.setAttribute("rel","prefetch"),t.setAttribute("href",n),document.head.append(t)}if(T||q()!=="none"){R(),document.addEventListener("click",t=>{let e=t.target;if(e instanceof Element&&e.tagName!=="A"&&(e=e.closest("a")),!(!e||!(e instanceof HTMLAnchorElement)||e.dataset.astroReload!==void 0||e.hasAttribute("download")||!e.href||e.target&&e.target!=="_self"||e.origin!==location.origin||t.button!==0||t.metaKey||t.ctrlKey||t.altKey||t.shiftKey||t.defaultPrevented||!g())){if(location.pathname===e.pathname&&location.search===e.search){if(e.hash)return;if(t.preventDefault(),location.hash){history.replaceState({index:m,scrollX,scrollY:-(scrollY+1)},"");const r={index:++m,scrollX:0,scrollY:0};history.pushState(r,"",e.href)}scrollTo({left:0,top:0,behavior:"instant"});return}t.preventDefault(),A("forward",new URL(e.href))}}),addEventListener("popstate",t=>{if(!g()&&t.state){history.scrollRestoration&&(history.scrollRestoration="manual"),location.reload();return}if(t.state===null){history.scrollRestoration&&(history.scrollRestoration="auto");return}history.scrollRestoration&&(history.scrollRestoration="manual");const e=history.state,r=e.index,l=r>m?"forward":"back";m=r,e.scrollY<0?scrollTo(e.scrollX,-(e.scrollY+1)):A(l,new URL(location.href),e)}),["mouseenter","touchstart","focus"].forEach(t=>{document.addEventListener(t,e=>{if(e.target instanceof HTMLAnchorElement){let r=e.target;r.origin===location.origin&&r.pathname!==location.pathname&&g()&&C(r.pathname)}},{passive:!0,capture:!0})}),addEventListener("load",L);const n=()=>{Y({...history.state,scrollX,scrollY})};"onscrollend"in window?addEventListener("scrollend",n):addEventListener("scroll",I(n,300))}