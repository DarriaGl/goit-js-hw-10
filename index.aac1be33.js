function e(e,r,t,n){Object.defineProperty(e,r,{get:t,set:n,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=r.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){n[e]=r},r.parcelRequired7c6=o),o.register("9dxg1",(function(r,t){function n(){return fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_FvRQgJL9vTDdRpd5ZZVXa3VWL1xKe1KodLRa2GlW14WRnM5oUPoJ7rk67UOM1rFS"}}).then((e=>e.json())).then((e=>e.map((e=>({id:e.id,name:e.name}))))).catch((e=>{throw console.error("Error fetching breeds:",e),e}))}function o(e){return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}`,{headers:{"x-api-key":"live_FvRQgJL9vTDdRpd5ZZVXa3VWL1xKe1KodLRa2GlW14WRnM5oUPoJ7rk67UOM1rFS"}}).then((e=>e.json())).then((e=>e[0])).catch((e=>{throw console.error("Error fetching cat by breed:",e),e}))}e(r.exports,"fetchBreeds",(function(){return n})),e(r.exports,"fetchCatByBreed",(function(){return o}))})),o("9dxg1");
//# sourceMappingURL=index.aac1be33.js.map
