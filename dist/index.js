"use strict";var g=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var m=g(function(q,u){"use strict";var o=require("@stdlib/assert-is-collection"),f=require("@stdlib/assert-is-integer").isPrimitive,s=require("@stdlib/assert-is-string").isPrimitive,v=require("@stdlib/array-base-index-of-same-value"),a=require("@stdlib/string-format");function d(e,r,t){var n,i;if(n=s(e),!o(e)&&!n)throw new TypeError(a("invalid argument. First argument must be array-like. Value: `%s`.",e));if(arguments.length<2)throw new Error("insufficient arguments. Must provide a search value.");if(arguments.length>2){if(!f(t))throw new TypeError(a("invalid argument. Third argument must be an integer. Value: `%s`.",t));i=t,i<0&&(i=0)}else i=0;if(n){if(!s(r))throw new TypeError(a("invalid argument. Second argument must be a string. Value: `%s`.",r));return e.indexOf(r,i)!==-1}return v(e,r,i)!==-1}u.exports=d});var w=m();module.exports=w;
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
