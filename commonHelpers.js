import{i as u,S as p}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function f(){return fetch(`https://pixabay.com/api/?key=44114689-8a541e952a98dbeee0dc95ac7&q=${l}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function d(o){a.innerHTML="";const t=o.hits;t.lenght||u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});const i=t.map(e=>`<li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img
            class="gallery-image"
            src="${e.webformatURL}"
            data-source="${e.largeImageURL}"
            alt="${e.tags}"
          />
          <ul class="gallery-description">
          <li><h3>Likes</h3><p>${e.likes}</p>
          </li>
          <li><h3>Views</h3><p>${e.views}</p>
            </li>
            <li><h3>Comments</h3><p>${e.comments}</p>
              </li>
              <li><h3>Downloads</h3><p>${e.downloads}</p>
                </li>
          </ul>
        </a>
      </li>`).join("");a.insertAdjacentHTML("beforeend",i),new p(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()}const a=document.querySelector(".gallery");let l="";const h=document.querySelector(".form-button"),c=document.querySelector(".form-input");c.addEventListener("input",()=>{l=c.value.trim()});h.addEventListener("click",o=>{o.preventDefault(),l&&(a.innerHTML='<span class="loader"></span>',f().then(t=>d(t)).catch(t=>{u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}))});
//# sourceMappingURL=commonHelpers.js.map
