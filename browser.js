// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=Math.floor;function r(r){return e(r)===r}function t(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&r(e.length)&&e.length>=0&&e.length<=9007199254740991}var n="function"==typeof Object.defineProperty?Object.defineProperty:null,i=Object.defineProperty;function a(e){return"number"==typeof e}function o(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function c(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+o(i):o(i)+e,n&&(e="-"+e)),e}var u=String.prototype.toLowerCase,s=String.prototype.toUpperCase;function l(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!a(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=c(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=c(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===s.call(e.specifier)?s.call(t):u.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(e){return"string"==typeof e}var p=Math.abs,g=String.prototype.toLowerCase,d=String.prototype.toUpperCase,h=String.prototype.replace,b=/e\+(\d)$/,y=/e-(\d)$/,m=/^(\d+)$/,v=/^(\d+)e/,w=/\.0$/,_=/\.0*e/,S=/(\..*[^0])0*e/;function E(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!a(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=h.call(t,S,"$1e"),t=h.call(t,_,"e"),t=h.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=h.call(t,b,"e+0$1"),t=h.call(t,y,"e-0$1"),e.alternate&&(t=h.call(t,m,"$1."),t=h.call(t,v,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===d.call(e.specifier)?d.call(t):g.call(t)}function j(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function x(e,r,t){var n=r-e.length;return n<0?e:e=t?e+j(n):j(n)+e}var T=String.fromCharCode,k=isNaN,I=Array.isArray;function O(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,t,n,i,a,o,u,s,p;if(!I(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",u=1,s=0;s<e.length;s++)if(f(n=e[s]))o+=n;else{if(r=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,k(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,k(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=l(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!k(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=k(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=E(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=c(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=x(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function N(e){var r,t,n,i;for(t=[],i=0,n=F.exec(e);n;)(r=e.slice(i,F.lastIndex-n[0].length)).length&&t.push(r),t.push(P(n)),i=F.lastIndex,n=F.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function $(e){return"string"==typeof e}function A(e){var r,t,n;if(!$(e))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=N(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return V.apply(null,t)}var C=Object.prototype,R=C.toString,G=C.__defineGetter__,Z=C.__defineSetter__,W=C.__lookupGetter__,L=C.__lookupSetter__,M=function(){try{return n({},"x",{}),!0}catch(e){return!1}}()?i:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(W.call(e,r)||L.call(e,r)?(n=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&G&&G.call(e,r,t.get),o&&Z&&Z.call(e,r,t.set),e};function U(e,r,t){M(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function X(e){return"number"==typeof e}var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return Y&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString,B=Object.prototype.hasOwnProperty,D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"",J=z()?function(e){var r,t,n,i,a;if(null==e)return q.call(e);t=e[H],a=H,r=null!=(i=e)&&B.call(i,a);try{e[H]=void 0}catch(r){return q.call(e)}return n=q.call(e),r?e[H]=t:delete e[H],n}:function(e){return q.call(e)},K=Number,Q=K.prototype.toString,ee=z();function re(e){return"object"==typeof e&&(e instanceof K||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Number]"===J(e)))}function te(e){return X(e)||re(e)}U(te,"isPrimitive",X),U(te,"isObject",re);var ne=Number.POSITIVE_INFINITY,ie=K.NEGATIVE_INFINITY;function ae(e){return e<ne&&e>ie&&r(e)}function oe(e){return X(e)&&ae(e)}function ce(e){return re(e)&&ae(e.valueOf())}function ue(e){return oe(e)||ce(e)}function se(e){return"string"==typeof e}U(ue,"isPrimitive",oe),U(ue,"isObject",ce);var le=String.prototype.valueOf,fe=z();function pe(e){return"object"==typeof e&&(e instanceof String||(fe?function(e){try{return le.call(e),!0}catch(e){return!1}}(e):"[object String]"===J(e)))}function ge(e){return se(e)||pe(e)}function de(e){return e!=e}function he(e){return X(e)&&de(e)}function be(e){return re(e)&&de(e.valueOf())}function ye(e){return he(e)||be(e)}return U(ge,"isPrimitive",se),U(ge,"isObject",pe),U(ye,"isPrimitive",he),U(ye,"isObject",be),function(e,r,n){var i,a,o;if(!t(e)&&!se(e))throw new TypeError(A("invalid argument. First argument must be array-like. Value: `%s`.",e));if(arguments.length<2)throw new Error("insufficient arguments. Must provide a search value.");if(arguments.length>2){if(!oe(n))throw new TypeError(A("invalid argument. Third argument must be an integer. Value: `%s`.",n));(a=n)<0&&(a=0)}else a=0;if(se(e)){if(!se(r))throw new TypeError(A("invalid argument. Second argument must be a string. Value: `%s`.",r));return-1!==e.indexOf(r,a)}if(i=e.length,he(r)){for(o=a;o<i;o++)if(he(e[o]))return!0;return!1}for(o=a;o<i;o++)if(e[o]===r)return!0;return!1}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).contains=r();
//# sourceMappingURL=browser.js.map
