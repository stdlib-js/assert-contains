"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=o(function(c,g){"use strict";var v=require("@stdlib/assert-is-collection"),l=require("@stdlib/assert-is-integer").isPrimitive,m=require("@stdlib/assert-is-string").isPrimitive,w=require("@stdlib/assert-is-same-value"),s=require("@stdlib/string-format");function d(e,r,n){var a,u,i,t;if(a=m(e),!v(e)&&!a)throw new TypeError(s("invalid argument. First argument must be array-like. Value: `%s`.",e));if(arguments.length<2)throw new Error("insufficient arguments. Must provide a search value.");if(arguments.length>2){if(!l(n))throw new TypeError(s("invalid argument. Third argument must be an integer. Value: `%s`.",n));i=n,i<0&&(i=0)}else i=0;if(a){if(!m(r))throw new TypeError(s("invalid argument. Second argument must be a string. Value: `%s`.",r));return e.indexOf(r,i)!==-1}for(u=e.length,t=i;t<u;t++)if(w(e[t],r))return!0;return!1}g.exports=d});var h=f();module.exports=h;
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
