!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequire7bc7;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequire7bc7=o),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}}));var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e){return i.default(e)||a.default(e)||f.default(e)||l.default()};var i=s(o("kMC0W")),a=s(o("7AJDX")),l=s(o("8CtQK")),f=s(o("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}var c=o("h6c0i");document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();var r=Number(t.target.delay.value),n=Number(t.target.step.value),o=Number(t.target.amount.value);e(u)(Array(o).keys()).map((function(e){return++e})).map((function(e){return t=e,o=n*(e-1)+r,new Promise((function(e,r){var n=Math.random()>.3;setTimeout((function(){n?e({position:t,delay:o}):r({position:t,delay:o})}),o)}));var t,o})).forEach((function(e){return e.then((function(e){var t=e.position,r=e.delay;c.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(r,"ms"))})).catch((function(e){var t=e.position,r=e.delay;c.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(r,"ms"))}))}))}))}();
//# sourceMappingURL=03-promises.827a3d6a.js.map
