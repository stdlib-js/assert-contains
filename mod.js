// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=Math.floor;function r(r){return t(r)===r}function e(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&r(t.length)&&t.length>=0&&t.length<=9007199254740991}var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var o=Object.defineProperty,i=Object.prototype,u=i.toString,c=i.__defineGetter__,l=i.__defineSetter__,a=i.__lookupGetter__,f=i.__lookupSetter__;var p=function(){try{return n({},"x",{}),!0}catch(t){return!1}}()?o:function(t,r,e){var n,o,p,y;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(a.call(t,r)||f.call(t,r)?(n=t.__proto__,t.__proto__=i,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,y="set"in e,o&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&c&&c.call(t,r,e.get),y&&l&&l.call(t,r,e.set),t};function y(t,r,e){p(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function b(t){return"number"==typeof t}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return v&&"symbol"==typeof Symbol.toStringTag}var _=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;var m="function"==typeof Symbol?Symbol.toStringTag:"";var h=s()?function(t){var r,e,n,o,i;if(null==t)return _.call(t);e=t[m],i=m,r=null!=(o=t)&&g.call(o,i);try{t[m]=void 0}catch(r){return _.call(t)}return n=_.call(t),r?t[m]=e:delete t[m],n}:function(t){return _.call(t)},j=Number,d=j.prototype.toString;var w=s();function O(t){return"object"==typeof t&&(t instanceof j||(w?function(t){try{return d.call(t),!0}catch(t){return!1}}(t):"[object Number]"===h(t)))}function S(t){return b(t)||O(t)}y(S,"isPrimitive",b),y(S,"isObject",O);var I=Number.POSITIVE_INFINITY,T=j.NEGATIVE_INFINITY;function E(t){return t<I&&t>T&&r(t)}function P(t){return b(t)&&E(t)}function N(t){return O(t)&&E(t.valueOf())}function V(t){return P(t)||N(t)}function x(t){return"string"==typeof t}y(V,"isPrimitive",P),y(V,"isObject",N);var A=String.prototype.valueOf;var F=s();function G(t){return"object"==typeof t&&(t instanceof String||(F?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object String]"===h(t)))}function k(t){return x(t)||G(t)}function C(t){return t!=t}function M(t){return b(t)&&C(t)}function Y(t){return O(t)&&C(t.valueOf())}function B(t){return M(t)||Y(t)}function K(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}function L(t,r,n){var o,i,u;if(!e(t)&&!x(t))throw new TypeError(K("01I3K",t));if(arguments.length<2)throw new Error("insufficient arguments. Must provide a search value.");if(arguments.length>2){if(!P(n))throw new TypeError(K("01I3B",n));(i=n)<0&&(i=0)}else i=0;if(x(t)){if(!x(r))throw new TypeError(K("01I3L",r));return-1!==t.indexOf(r,i)}if(o=t.length,M(r)){for(u=i;u<o;u++)if(M(t[u]))return!0;return!1}for(u=i;u<o;u++)if(t[u]===r)return!0;return!1}y(k,"isPrimitive",x),y(k,"isObject",G),y(B,"isPrimitive",M),y(B,"isObject",Y);export{L as default};
//# sourceMappingURL=mod.js.map
