// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.1.0-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.0-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function n(n,m,a){var d,o,l;if(!e(n)&&!t(n))throw new TypeError(s("invalid argument. First argument must be array-like. Value: `%s`.",n));if(arguments.length<2)throw new Error("insufficient arguments. Must provide a search value.");if(arguments.length>2){if(!r(a))throw new TypeError(s("invalid argument. Third argument must be an integer. Value: `%s`.",a));(o=a)<0&&(o=0)}else o=0;if(t(n)){if(!t(m))throw new TypeError(s("invalid argument. Second argument must be a string. Value: `%s`.",m));return-1!==n.indexOf(m,o)}if(d=n.length,i(m)){for(l=o;l<d;l++)if(i(n[l]))return!0;return!1}for(l=o;l<d;l++)if(n[l]===m)return!0;return!1}export{n as default};
//# sourceMappingURL=index.mjs.map
