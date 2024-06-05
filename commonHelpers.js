import"./assets/vendor-b20c67ea.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function u(){return fetch(`https://pixabay.com/api/?key=44114689-8a541e952a98dbeee0dc95ac7&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function d(o){c.innerHTML="";const i=o.hits.map(t=>`<li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img
            class="gallery-image"
            src="${t.webformatURL}"
            data-source="${t.largeImageURL}"
            alt="${t.tags}"
          />
          <ul class="gallery-description">
          <li><h3>Likes</h3><p>${t.likes}</p>
          </li>
          <li><h3>Views</h3><p>${t.views}</p>
            </li>
            <li><h3>Comments</h3><p>${t.comments}</p>
              </li>
              <li><h3>Downloads</h3><p>${t.downloads}</p>
                </li>
          </ul>
        </a>
      </li>`).join("");c.insertAdjacentHTML("beforeend",i)}const c=document.querySelector(".gallery");let s="";const f=document.querySelector(".form-button"),a=document.querySelector(".form-input");a.addEventListener("input",()=>{s=a.value.trim()});f.addEventListener("click",o=>{o.preventDefault(),s&&u().then(n=>d(n)).catch(n=>console.log(n))});
//# sourceMappingURL=commonHelpers.js.map
