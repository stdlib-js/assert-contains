"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var g=o(function(h,m){
var v=require('@stdlib/assert-is-collection/dist'),w=require('@stdlib/assert-is-integer/dist').isPrimitive,s=require('@stdlib/assert-is-string/dist').isPrimitive,f=require('@stdlib/assert-is-nan/dist').isPrimitive,a=require('@stdlib/error-tools-fmtprodmsg/dist');function d(r,e,n){var u,t,i;if(!v(r)&&!s(r))throw new TypeError(a('02b38',r));if(arguments.length<2)throw new Error(a('02b0A'));if(arguments.length>2){if(!w(n))throw new TypeError(a('02b2z',n));t=n,t<0&&(t=0)}else t=0;if(s(r)){if(!s(e))throw new TypeError(a('02b39',e));return r.indexOf(e,t)!==-1}if(u=r.length,f(e)){for(i=t;i<u;i++)if(f(r[i]))return!0;return!1}for(i=t;i<u;i++)if(r[i]===e)return!0;return!1}m.exports=d
});var l=g();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
