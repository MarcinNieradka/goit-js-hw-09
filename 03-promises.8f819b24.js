function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");document.querySelector(".form").addEventListener("submit",(t=>{t.preventDefault();const o=Number(t.target.elements.delay.value),n=Number(t.target.elements.step.value),r=Number(t.target.elements.amount.value);for(let t=1;t<=r;t++)l(t,o+n*(t-1)).then((({position:t,delay:o})=>{e(i).Notify.success(`Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(i).Notify.failure(`Rejected promise ${t} in ${o}ms`)}))}));const l=(e,t)=>new Promise(((o,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?o({position:e,delay:t}):n({position:e,delay:t})}),t)}));
//# sourceMappingURL=03-promises.8f819b24.js.map
