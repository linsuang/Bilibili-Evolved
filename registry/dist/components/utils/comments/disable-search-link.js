!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/comments/disable-search-link"]=t():e["utils/comments/disable-search-link"]=t()}(globalThis,(()=>(()=>{var e,t,o={767:(e,t,o)=>{var n=o(355)((function(e){return e[1]}));n.push([e.id,".search-word.icon {\n  display: none !important;\n}\n.reply-warp .reply-item .search-word.jump-link {\n  color: inherit !important;\n  cursor: text !important;\n}",""]),e.exports=n},355:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,o,n){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(n)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);n&&r[c[0]]||(o&&(c[2]?c[2]="".concat(o," and ").concat(c[2]):c[2]=o),t.push(c))}},t}},881:(e,t,o)=>{var n=o(767);n&&n.__esModule&&(n=n.default),e.exports="string"==typeof n?n:n.toString()},59:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=59,e.exports=t},629:e=>{"use strict";e.exports="禁用评论区的搜索词链接."}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={id:e,exports:{}};return o[e](i,i.exports,r),i.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"==typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"==typeof o.then)return o}var i=Object.create(null);r.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&n&&o;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>o[e]));return a.default=()=>o,r.d(i,a),i},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";r.d(i,{component:()=>s});const e=coreApis.componentApis.define,t=coreApis.componentApis.utils.commentApis,o=coreApis.utils,n="disableCommentsSearchLink";let a=!1;const s=(0,e.defineComponentMetadata)({name:n,displayName:"禁用评论区搜索词",instantStyles:[{name:n,style:()=>Promise.resolve().then(r.t.bind(r,881,23)),important:!0}],tags:[componentsTags.utils,componentsTags.style],entry:async()=>{a=!0,(0,t.forEachCommentArea)((e=>{(0,o.preventEvent)(e.element,"click",(e=>{if(!(e.target instanceof HTMLElement&&a))return!1;const t=e.target;return!![".jump-link.search-word",".icon.search-word"].some((e=>t.matches(e)))}))}))},reload:()=>{a=!0},unload:()=>{a=!1},commitHash:"81aba0ace934e5de3d34e3f6c88ace8506a9f7ab",coreVersion:"2.7.2",description:(()=>{const e=r(59);return{...Object.fromEntries(e.keys().map((t=>[t.match(/index\.(.+)\.md$/)[1],e(t)]))),"zh-CN":()=>Promise.resolve().then(r.t.bind(r,629,17)).then((e=>e.default))}})()})})(),i=i.component})()));