// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.2-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.2-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.2-esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function n(n,o,m){var d,f,l;if(!r(n)&&!t(n))throw new TypeError(i("02b38",n));if(arguments.length<2)throw new Error(i("02b0A"));if(arguments.length>2){if(!s(m))throw new TypeError(i("02b2z",m));(f=m)<0&&(f=0)}else f=0;if(t(n)){if(!t(o))throw new TypeError(i("02b39",o));return-1!==n.indexOf(o,f)}if(d=n.length,e(o)){for(l=f;l<d;l++)if(e(n[l]))return!0;return!1}for(l=f;l<d;l++)if(n[l]===o)return!0;return!1}export{n as default};
//# sourceMappingURL=index.mjs.map
