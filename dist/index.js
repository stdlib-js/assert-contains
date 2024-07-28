"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var g=o(function(h,m){"use strict";var v=require("@stdlib/assert-is-collection"),w=require("@stdlib/assert-is-integer").isPrimitive,s=require("@stdlib/assert-is-string").isPrimitive,f=require("@stdlib/assert-is-nan").isPrimitive,a=require("@stdlib/string-format");function d(r,e,n){var u,t,i;if(!v(r)&&!s(r))throw new TypeError(a("invalid argument. First argument must be array-like. Value: `%s`.",r));if(arguments.length<2)throw new Error("insufficient arguments. Must provide a search value.");if(arguments.length>2){if(!w(n))throw new TypeError(a("invalid argument. Third argument must be an integer. Value: `%s`.",n));t=n,t<0&&(t=0)}else t=0;if(s(r)){if(!s(e))throw new TypeError(a("invalid argument. Second argument must be a string. Value: `%s`.",e));return r.indexOf(e,t)!==-1}if(u=r.length,f(e)){for(i=t;i<u;i++)if(f(r[i]))return!0;return!1}for(i=t;i<u;i++)if(r[i]===e)return!0;return!1}m.exports=d});var l=g();module.exports=l;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
