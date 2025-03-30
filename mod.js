// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;function e(e){return r(e)===e}var t=9007199254740991;var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var i=Object.defineProperty;function o(r){return"number"==typeof r}function a(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function c(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+a(i):a(i)+r,n&&(r="-"+r)),r}var u=String.prototype.toLowerCase,l=String.prototype.toUpperCase;function s(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!o(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=c(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=c(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===l.call(r.specifier)?l.call(t):u.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var p=Math.abs,f=String.prototype.toLowerCase,g=String.prototype.toUpperCase,h=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,d=/^(\d+)$/,m=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,E=/(\..*[^0])0*e/;function _(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!o(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":p(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=h.call(t,E,"$1e"),t=h.call(t,w,"e"),t=h.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=h.call(t,y,"e+0$1"),t=h.call(t,b,"e-0$1"),r.alternate&&(t=h.call(t,d,"$1."),t=h.call(t,m,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===g.call(r.specifier)?g.call(t):f.call(t)}function S(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var T=String.fromCharCode,F=Array.isArray;function j(r){return r!=r}function A(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,i,o,a,u,l,p,f,g,h,y;if(!F(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)a+=n;else{if(e=void 0!==n.precision,!(n=A(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,j(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,j(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!j(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=j(o)?String(n.arg):T(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=_(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=c(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(f=n.arg,g=n.width,h=n.padRight,y=void 0,(y=g-f.length)<0?f:f=h?f+S(y):S(y)+f)),a+=n.arg||"",u+=1}return a}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function O(r){var e,t,n,i;for(t=[],i=0,n=k.exec(r);n;)(e=r.slice(i,k.lastIndex-n[0].length)).length&&t.push(e),t.push(I(n)),i=k.lastIndex,n=k.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function V(r){var e,t;if("string"!=typeof r)throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[O(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return x.apply(null,e)}var N=Object.prototype,P=N.toString,R=N.__defineGetter__,C=N.__defineSetter__,$=N.__lookupGetter__,L=N.__lookupSetter__;var M=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?i:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&($.call(r,e)||L.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&R&&R.call(r,e,t.get),a&&C&&C.call(r,e,t.set),r};function Y(r,e,t){M(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(r){return"number"==typeof r}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return Z&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString;var U=Object.prototype.hasOwnProperty;var z="function"==typeof Symbol?Symbol:void 0,J="function"==typeof z?z.toStringTag:"";var X=B()?function(r){var e,t,n,i,o;if(null==r)return W.call(r);t=r[J],o=J,e=null!=(i=r)&&U.call(i,o);try{r[J]=void 0}catch(e){return W.call(r)}return n=W.call(r),e?r[J]=t:delete r[J],n}:function(r){return W.call(r)},q=Number,D=q.prototype.toString;var H=B();function K(r){return"object"==typeof r&&(r instanceof q||(H?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Number]"===X(r)))}function Q(r){return G(r)||K(r)}Y(Q,"isPrimitive",G),Y(Q,"isObject",K);var rr=Number.POSITIVE_INFINITY,er=q.NEGATIVE_INFINITY;function tr(r){return r<rr&&r>er&&e(r)}function nr(r){return G(r)&&tr(r)}function ir(r){return K(r)&&tr(r.valueOf())}function or(r){return nr(r)||ir(r)}function ar(r){return"string"==typeof r}Y(or,"isPrimitive",nr),Y(or,"isObject",ir);var cr=String.prototype.valueOf;var ur=B();function lr(r){return"object"==typeof r&&(r instanceof String||(ur?function(r){try{return cr.call(r),!0}catch(r){return!1}}(r):"[object String]"===X(r)))}function sr(r){return ar(r)||lr(r)}function pr(r,e){return r===e?0!==r||1/r==1/e:r!=r&&e!=e}Y(sr,"isPrimitive",ar),Y(sr,"isObject",lr);var fr="function"==typeof Float64Array;var gr="function"==typeof Float64Array?Float64Array:null;var hr="function"==typeof Float64Array?Float64Array:void 0;var yr=function(){var r,e,t;if("function"!=typeof gr)return!1;try{e=new gr([1,3.14,-3.14,NaN]),t=e,r=(fr&&t instanceof Float64Array||"[object Float64Array]"===X(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};function br(r){var e=new yr(2);return e[0]=r.re,e[1]=r.im,e}function dr(r,e){if(!(this instanceof dr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!G(r))throw new TypeError(V("invalid argument. Real component must be a number. Value: `%s`.",r));if(!G(e))throw new TypeError(V("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return M(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),M(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}Y(dr,"BYTES_PER_ELEMENT",8),Y(dr.prototype,"BYTES_PER_ELEMENT",8),Y(dr.prototype,"byteLength",16),Y(dr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),Y(dr.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var mr="function"==typeof Math.fround?Math.fround:null,vr="function"==typeof Float32Array;var wr="function"==typeof Float32Array?Float32Array:null;var Er="function"==typeof Float32Array?Float32Array:void 0;var _r=new(function(){var r,e,t;if("function"!=typeof wr)return!1;try{e=new wr([1,3.14,-3.14,5e40]),t=e,r=(vr&&t instanceof Float32Array||"[object Float32Array]"===X(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===rr}catch(e){r=!1}return r}()?Er:function(){throw new Error("not implemented")})(1);var Sr="function"==typeof mr?mr:function(r){return _r[0]=r,_r[0]};function Tr(r,e){if(!(this instanceof Tr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!G(r))throw new TypeError(V("invalid argument. Real component must be a number. Value: `%s`.",r));if(!G(e))throw new TypeError(V("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return M(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Sr(r)}),M(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Sr(e)}),this}function Fr(r){return r instanceof dr||r instanceof Tr||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function jr(r,e){return r===e?0!==r||1/r==1/e:r!=r&&e!=e||!(!Fr(r)||!Fr(e))&&(t=e,n=br(r),i=br(t),pr(n[0],i[0])&&pr(n[1],i[1]));var t,n,i}function Ar(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}function xr(r,n,i){var o,a,c,u;if(o=ar(r),!function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&e(r.length)&&r.length>=0&&r.length<=t}(r)&&!o)throw new TypeError(Ar("02b38",r));if(arguments.length<2)throw new Error(Ar("02b0A"));if(arguments.length>2){if(!nr(i))throw new TypeError(Ar("02b2z",i));(c=i)<0&&(c=0)}else c=0;if(o){if(!ar(n))throw new TypeError(Ar("02b39",n));return-1!==r.indexOf(n,c)}for(a=r.length,u=c;u<a;u++)if(jr(r[u],n))return!0;return!1}Y(Tr,"BYTES_PER_ELEMENT",4),Y(Tr.prototype,"BYTES_PER_ELEMENT",4),Y(Tr.prototype,"byteLength",8),Y(Tr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),Y(Tr.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));export{xr as default};
//# sourceMappingURL=mod.js.map
