!function(t,i){"object"==typeof exports&&"object"==typeof module?module.exports=i():"function"==typeof define&&define.amd?define([],i):"object"==typeof exports?exports["style/special-danmaku"]=i():t["style/special-danmaku"]=i()}(globalThis,(()=>(()=>{var t,i,e={667:(t,i,e)=>{var n=e(355)((function(t){return t[1]}));n.push([t.id,"body.disable-highlight-danmaku-style .bili-dm.bili-high,\nbody.disable-highlight-danmaku-style .b-danmaku-high {\n  display: block !important;\n  padding: 0 !important;\n  line-height: 1.125 !important;\n}\nbody.disable-highlight-danmaku-style .bili-dm.bili-high .bili-high-icon,\nbody.disable-highlight-danmaku-style .bili-dm.bili-high .b-danmaku-high-icon,\nbody.disable-highlight-danmaku-style .b-danmaku-high .bili-high-icon,\nbody.disable-highlight-danmaku-style .b-danmaku-high .b-danmaku-high-icon {\n  display: none !important;\n}\nbody.disable-highlight-danmaku-style .bili-dm.bili-high .bili-high-text,\nbody.disable-highlight-danmaku-style .bili-dm.bili-high .b-danmaku-high-text,\nbody.disable-highlight-danmaku-style .b-danmaku-high .bili-high-text,\nbody.disable-highlight-danmaku-style .b-danmaku-high .b-danmaku-high-text {\n  margin: 0 !important;\n  text-shadow: inherit;\n}\n\nbody.disable-up-danmaku-style .bili-dm.bili-up,\nbody.disable-up-danmaku-style .b-danmaku-up {\n  padding: 0 !important;\n  line-height: 1.125 !important;\n  background-color: transparent !important;\n  border-radius: 0 !important;\n}\nbody.disable-up-danmaku-style .bili-dm.bili-up .bili-up-tip,\nbody.disable-up-danmaku-style .bili-dm.bili-up .b-danmaku-up-tip,\nbody.disable-up-danmaku-style .b-danmaku-up .bili-up-tip,\nbody.disable-up-danmaku-style .b-danmaku-up .b-danmaku-up-tip {\n  display: none !important;\n}",""]),t.exports=n},355:t=>{"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var i=[];return i.toString=function(){return this.map((function(i){var e=t(i);return i[2]?"@media ".concat(i[2]," {").concat(e,"}"):e})).join("")},
// eslint-disable-next-line func-names
i.i=function(t,e,n){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var a={};if(n)for(var o=0;o<this.length;o++){
// eslint-disable-next-line prefer-destructuring
var d=this[o][0];null!=d&&(a[d]=!0)}for(var l=0;l<t.length;l++){var r=[].concat(t[l]);n&&a[r[0]]||(e&&(r[2]?r[2]="".concat(e," and ").concat(r[2]):r[2]=e),i.push(r))}},i}},383:(t,i,e)=>{var n=e(667);n&&n.__esModule&&(n=n.default),t.exports="string"==typeof n?n:n.toString()}},n={};function a(t){var i=n[t];if(void 0!==i)return i.exports;var o=n[t]={id:t,exports:{}};return e[t](o,o.exports,a),o.exports}i=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,a.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);a.r(o);var d={};t=t||[null,i({}),i([]),i(i)];for(var l=2&n&&e;"object"==typeof l&&!~t.indexOf(l);l=i(l))Object.getOwnPropertyNames(l).forEach((t=>d[t]=()=>e[t]));return d.default=()=>e,a.d(o,d),o},a.d=(t,i)=>{for(var e in i)a.o(i,e)&&!a.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:i[e]})},a.o=(t,i)=>Object.prototype.hasOwnProperty.call(t,i),a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};return(()=>{"use strict";a.d(o,{component:()=>l});const t=coreApis.componentApis.define,i=coreApis.utils.urls,e=coreApis.settings,n=(0,t.defineOptionsMetadata)({highlight:{displayName:"禁用高赞弹幕",defaultValue:!0},up:{displayName:"禁用UP主弹幕",defaultValue:!0}}),d="disableSpecialDanmaku",l=(0,t.defineComponentMetadata)({name:d,entry:t=>{let{metadata:i,settings:n}=t;Object.keys(n.options).forEach((t=>{(0,e.addComponentListener)(`${i.name}.${t}`,(i=>{document.body.classList.toggle(`disable-${t}-danmaku-style`,i)}),!0)}))},displayName:"禁用特殊弹幕样式",tags:[componentsTags.style],instantStyles:[{name:d,style:()=>Promise.resolve().then(a.t.bind(a,383,23))}],urlInclude:i.playerUrls,description:{"zh-CN":"移除高赞弹幕或 UP 主弹幕的特殊样式, 弹幕内容不会移除."},options:n,commitHash:"702d02d6ccd0aaf052d01da5339c0a0fcd2e3aaa",coreVersion:"2.6.0"})})(),o=o.component})()));