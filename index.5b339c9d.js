var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("9dxg1");const d=document.querySelector(".loader"),c=document.querySelector(".error"),l=document.querySelector("#breed-select"),i=document.querySelector(".cat-info"),a=document.getElementById("cat-image"),s=document.getElementById("breed-name"),u=document.getElementById("breed-description"),m=document.getElementById("breed-temperament");function f(){d.style.display="block"}function p(){d.style.display="none"}function y(){c.style.display="block",i.style.display="none",c.style.display="block"}l.addEventListener("change",(()=>{const e=l.value;f(),(0,r.fetchCatByBreed)(e).then((e=>{!function(e){a.src=e.url,s.textContent=e.breeds[0].name,u.textContent=e.breeds[0].description,m.textContent=`Temperament: ${e.breeds[0].temperament}`,i.style.display="block"}(e),p()})).catch((()=>{console.error("Error fetching cat:",c),p(),y()}))})),document.addEventListener("DOMContentLoaded",(()=>{f(),(0,r.fetchBreeds)().then((e=>{!function(e){e.forEach((e=>{const t=document.createElement("option");t.value=e.id,t.textContent=e.name,l.appendChild(t)})),new SlimSelect({select:l,showSearch:!0})}(e),p()})).catch((()=>{console.error("Error fetching breeds:",c),p(),y()}))}));
//# sourceMappingURL=index.5b339c9d.js.map