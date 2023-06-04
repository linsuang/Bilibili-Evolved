!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["live/badge-helper"]=n():e["live/badge-helper"]=n()}(globalThis,(()=>(()=>{var e,n,t={742:(e,n,t)=>{"use strict";t.d(n,{j9:()=>d,Dx:()=>p,KK:()=>c,eB:()=>u});const o=coreApis.ajax;var l=t(605);const a=coreApis.utils.log;function i(e,n,t){return(n=function(e){var n=function(e,n){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,n||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==typeof n?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}const r=(e,n)=>{if(0!==e.code){const t=`${n} 错误码:${e.code} ${e.message||""}`;return(0,a.logError)(t),!1}return!0};class s{constructor(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.isActive=e,this.id=n}static parseJson(e,n){const t=JSON.parse(e);return 0!==t.code?((0,a.logError)(`${n.errorMessage} 错误码:${t.code} ${t.message||""}`),n.errorAction(t)):n.successAction(t)}}class d extends s{constructor(e){const{medal:{medal_id:n,level:t,medal_name:o,wearing_status:l,is_lighted:a},anchor_info:{nick_name:r},room_info:{room_id:s}}=e;super(1===l,n),i(this,"level",void 0),i(this,"name",void 0),i(this,"upName",void 0),i(this,"roomID",void 0),i(this,"isLighted",void 0),this.level=t,this.name=o,this.upName=r,this.roomID=s,this.isLighted=a}async activate(){const e=await(0,o.postTextWithCredentials)("https://api.live.bilibili.com/xlive/web-room/v1/fansMedal/wear",(0,l.formData)({medal_id:this.id,csrf_token:(0,l.getCsrf)(),csrf:(0,l.getCsrf)()})),n=r(JSON.parse(e),"佩戴勋章失败.");return this.isActive=!0,n}async deactivate(){const e=await(0,o.postTextWithCredentials)("https://api.live.bilibili.com/xlive/web-room/v1/fansMedal/take_off",(0,l.formData)({csrf_token:(0,l.getCsrf)(),csrf:(0,l.getCsrf)()})),n=r(JSON.parse(e),"卸下勋章失败.");return this.isActive=!1,n}}const c=async()=>(await(0,o.getPages)({api:e=>(0,o.getJsonWithCredentials)(`https://api.live.bilibili.com/xlive/app-ucenter/v1/fansMedal/panel?page=${e}&page_size=50`),getList:e=>(r(e,"无法获取勋章列表."),[...lodash.get(e,"data.list",[]),...lodash.get(e,"data.special_list",[])]),getTotal:e=>lodash.get(e,"data.total_number",0)})).map((e=>new d(e)));class p extends s{constructor(e){const{id:n,cid:t,wear:o,css:l,name:a,source:r}=e;super(o,l),i(this,"tid",void 0),i(this,"cid",void 0),i(this,"name",void 0),i(this,"source",void 0),i(this,"imageUrl",void 0),this.tid=n,this.cid=t,this.name=a,this.source=r,p.getImageMap().then((e=>{this.imageUrl=e[this.id]}))}static async getImageMap(){return void 0===p.imageMap?s.parseJson(await(0,o.getTextWithCredentials)("https://api.live.bilibili.com/rc/v1/Title/webTitles"),{successAction:e=>(p.imageMap={},e.data.forEach((e=>{p.imageMap[e.identification]=e.web_pic_url})),p.imageMap),errorAction:()=>({}),errorMessage:"获取头衔图片失败."}):p.imageMap}async activate(){return s.parseJson(await(0,o.postTextWithCredentials)("https://api.live.bilibili.com/i/ajaxWearTitle",`id=${this.tid}&cid=${this.cid}&csrf=${(0,l.getCsrf)()}&csrf_token=${(0,l.getCsrf)()}`),{successAction:()=>(this.isActive=!0,!0),errorAction:()=>!1,errorMessage:"佩戴头衔失败."})}async deactivate(){return s.parseJson(await(0,o.postTextWithCredentials)("https://api.live.bilibili.com/i/ajaxCancelWearTitle",`csrf=${(0,l.getCsrf)()}&csrf_token=${(0,l.getCsrf)()}`),{successAction:()=>(this.isActive=!1,!0),errorAction:()=>!1,errorMessage:"卸下头衔失败."})}}i(p,"imageMap",void 0);const u=async()=>s.parseJson(await(0,o.getTextWithCredentials)("https://api.live.bilibili.com/i/api/ajaxTitleInfo?page=1&pageSize=256&had=1"),{successAction:e=>lodash.get(e,"data.list",[]).map((e=>new p(e))),errorAction:()=>[],errorMessage:"无法获取头衔列表."})},702:(e,n,t)=>{var o=t(355)((function(e){return e[1]}));o.push([e.id,".badge-popup {\n  top: 50%;\n  left: calc(100% + 8px);\n  transform: scale(0.9) translateY(-50%);\n  transform-origin: left;\n  padding: 4px;\n  max-height: calc(100vh - 150px);\n  background-color: #fff;\n  color: black;\n  border-radius: 8px;\n  border: 1px solid rgba(136, 136, 136, 0.1333333333);\n  box-sizing: border-box;\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);\n  overflow: auto;\n  scrollbar-width: none !important;\n  overscroll-behavior: contain;\n  border-radius: 4px;\n}\nbody.dark .badge-popup {\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);\n}\nbody.dark .badge-popup {\n  background-color: #282828;\n  color: #eee;\n}\n.badge-popup::-webkit-scrollbar {\n  height: 0 !important;\n  width: 0 !important;\n}\n.badge-popup.open {\n  transform: scale(1) translateY(-50%);\n}\nbody.settings-panel-dock-right .badge-popup {\n  right: calc(100% + 8px);\n  left: unset;\n  transform-origin: right;\n}\n.badge-popup, .badge-popup * {\n  transition: 0.2s ease-out;\n}\n.badge-popup ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n.badge-popup ul li {\n  border-radius: 4px;\n  cursor: pointer;\n  padding: 6px 8px;\n  display: flex;\n  justify-content: center;\n}\n.badge-popup ul li:hover {\n  background-color: rgba(136, 136, 136, 0.1333333333);\n}\n.badge-popup ul li.active {\n  box-shadow: 0 0 0px 1px var(--theme-color), 0 0 0px 3px var(--theme-color-20);\n}\n.badge-popup ul li.gray:not(:hover) {\n  filter: grayscale(1);\n}\n.badge-popup ul li .title-image {\n  display: inline-block;\n  vertical-align: middle;\n  height: 20px;\n}\n.badge-popup ul li .fans-medal-item {\n  display: flex !important;\n  height: 14px;\n  line-height: 14px;\n  color: #fff;\n  border: 1px solid #f6be18;\n  background-color: #f6be18;\n  border-left: 0;\n  white-space: nowrap;\n  border-radius: 2px;\n  flex-shrink: 0;\n  font-size: 12px;\n}\n.badge-popup ul li .fans-medal-item .label {\n  width: 40px;\n  text-align: center;\n  padding: 0 2px;\n  color: #fff;\n  border-radius: 1px 0 0 1px;\n  background-color: #f6be18;\n}\n.badge-popup ul li .fans-medal-item .level {\n  width: 16px;\n  background-color: #fff;\n  text-align: center;\n  color: #f6be18;\n  border-radius: 0 1px 1px 0;\n}\n.badge-popup ul li .fans-medal-item .label,\n.badge-popup ul li .fans-medal-item .level {\n  cursor: pointer;\n  position: relative;\n  display: block;\n  float: left;\n}\n.badge-popup ul li .level-1 {\n  border-color: #48b6a5;\n  background-color: #48b6a5;\n}\n.badge-popup ul li .level-1 .label {\n  background-color: #48b6a5;\n}\n.badge-popup ul li .level-1 .level {\n  color: #48b6a5;\n}\n.badge-popup ul li .level-2 {\n  border-color: #48b6a5;\n  background-color: #48b6a5;\n}\n.badge-popup ul li .level-2 .label {\n  background-color: #48b6a5;\n}\n.badge-popup ul li .level-2 .level {\n  color: #48b6a5;\n}\n.badge-popup ul li .level-3 {\n  border-color: #48b6a5;\n  background-color: #48b6a5;\n}\n.badge-popup ul li .level-3 .label {\n  background-color: #48b6a5;\n}\n.badge-popup ul li .level-3 .level {\n  color: #48b6a5;\n}\n.badge-popup ul li .level-4 {\n  border-color: #48b6a5;\n  background-color: #48b6a5;\n}\n.badge-popup ul li .level-4 .label {\n  background-color: #48b6a5;\n}\n.badge-popup ul li .level-4 .level {\n  color: #48b6a5;\n}\n.badge-popup ul li .level-5 {\n  border-color: #5896de;\n  background-color: #5896de;\n}\n.badge-popup ul li .level-5 .label {\n  background-color: #5896de;\n}\n.badge-popup ul li .level-5 .level {\n  color: #5896de;\n}\n.badge-popup ul li .level-6 {\n  border-color: #5896de;\n  background-color: #5896de;\n}\n.badge-popup ul li .level-6 .label {\n  background-color: #5896de;\n}\n.badge-popup ul li .level-6 .level {\n  color: #5896de;\n}\n.badge-popup ul li .level-7 {\n  border-color: #5896de;\n  background-color: #5896de;\n}\n.badge-popup ul li .level-7 .label {\n  background-color: #5896de;\n}\n.badge-popup ul li .level-7 .level {\n  color: #5896de;\n}\n.badge-popup ul li .level-8 {\n  border-color: #5896de;\n  background-color: #5896de;\n}\n.badge-popup ul li .level-8 .label {\n  background-color: #5896de;\n}\n.badge-popup ul li .level-8 .level {\n  color: #5896de;\n}\n.badge-popup ul li .level-9 {\n  border-color: #a068f1;\n  background-color: #a068f1;\n}\n.badge-popup ul li .level-9 .label {\n  background-color: #a068f1;\n}\n.badge-popup ul li .level-9 .level {\n  color: #a068f1;\n}\n.badge-popup ul li .level-10 {\n  border-color: #a068f1;\n  background-color: #a068f1;\n}\n.badge-popup ul li .level-10 .label {\n  background-color: #a068f1;\n}\n.badge-popup ul li .level-10 .level {\n  color: #a068f1;\n}\n.badge-popup ul li .level-11 {\n  border-color: #a068f1;\n  background-color: #a068f1;\n}\n.badge-popup ul li .level-11 .label {\n  background-color: #a068f1;\n}\n.badge-popup ul li .level-11 .level {\n  color: #a068f1;\n}\n.badge-popup ul li .level-12 {\n  border-color: #a068f1;\n  background-color: #a068f1;\n}\n.badge-popup ul li .level-12 .label {\n  background-color: #a068f1;\n}\n.badge-popup ul li .level-12 .level {\n  color: #a068f1;\n}\n.badge-popup ul li .level-13 {\n  border-color: #ff86b2;\n  background-color: #ff86b2;\n}\n.badge-popup ul li .level-13 .label {\n  background-color: #ff86b2;\n}\n.badge-popup ul li .level-13 .level {\n  color: #ff86b2;\n}\n.badge-popup ul li .level-14 {\n  border-color: #ff86b2;\n  background-color: #ff86b2;\n}\n.badge-popup ul li .level-14 .label {\n  background-color: #ff86b2;\n}\n.badge-popup ul li .level-14 .level {\n  color: #ff86b2;\n}\n.badge-popup ul li .level-15 {\n  border-color: #ff86b2;\n  background-color: #ff86b2;\n}\n.badge-popup ul li .level-15 .label {\n  background-color: #ff86b2;\n}\n.badge-popup ul li .level-15 .level {\n  color: #ff86b2;\n}\n.badge-popup ul li .level-16 {\n  border-color: #ff86b2;\n  background-color: #ff86b2;\n}\n.badge-popup ul li .level-16 .label {\n  background-color: #ff86b2;\n}\n.badge-popup ul li .level-16 .level {\n  color: #ff86b2;\n}\n.badge-popup ul li .level-17 {\n  border-color: #f6be18;\n  background-color: #f6be18;\n}\n.badge-popup ul li .level-17 .label {\n  background-color: #f6be18;\n}\n.badge-popup ul li .level-17 .level {\n  color: #f6be18;\n}\n.badge-popup ul li .level-18 {\n  border-color: #f6be18;\n  background-color: #f6be18;\n}\n.badge-popup ul li .level-18 .label {\n  background-color: #f6be18;\n}\n.badge-popup ul li .level-18 .level {\n  color: #f6be18;\n}\n.badge-popup ul li .level-19 {\n  border-color: #f6be18;\n  background-color: #f6be18;\n}\n.badge-popup ul li .level-19 .label {\n  background-color: #f6be18;\n}\n.badge-popup ul li .level-19 .level {\n  color: #f6be18;\n}\n.badge-popup ul li .level-20 {\n  border-color: #f6be18;\n  background-color: #f6be18;\n}\n.badge-popup ul li .level-20 .label {\n  background-color: #f6be18;\n}\n.badge-popup ul li .level-20 .level {\n  color: #f6be18;\n}\n.badge-popup.medal ul {\n  grid-template-columns: repeat(var(--medal-columns, 2), 1fr);\n}\n.badge-popup.title ul {\n  grid-template-columns: repeat(var(--title-columns, 2), 1fr);\n}",""]),e.exports=o},355:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},
// eslint-disable-next-line func-names
n.i=function(e,t,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var l={};if(o)for(var a=0;a<this.length;a++){
// eslint-disable-next-line prefer-destructuring
var i=this[a][0];null!=i&&(l[i]=!0)}for(var r=0;r<e.length;r++){var s=[].concat(e[r]);o&&l[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},648:(e,n,t)=>{"use strict";var o,l=function(){return void 0===o&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function r(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},o=[],l=0;l<e.length;l++){var a=e[l],s=n.base?a[0]+n.base:a[0],d=t[s]||0,c="".concat(s," ").concat(d);t[s]=d+1;var p=r(c),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(i[p].references++,i[p].updater(u)):i.push({identifier:c,updater:v(u,n),references:1}),o.push(c)}return o}function d(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var l=t.nc;l&&(o.nonce=l)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var c,p=(c=[],function(e,n){return c[e]=n,c.filter(Boolean).join("\n")});function u(e,n,t,o){var l=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=p(n,l);else{var a=document.createTextNode(l),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function b(e,n,t){var o=t.css,l=t.media,a=t.sourceMap;if(l?e.setAttribute("media",l):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,g=0;function v(e,n){var t,o,l;if(n.singleton){var a=g++;t=f||(f=d(n)),o=u.bind(null,t,a,!1),l=u.bind(null,t,a,!0)}else t=d(n),o=b.bind(null,t,n),l=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else l()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=l());var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var l=r(t[o]);i[l].references--}for(var a=s(e,n),d=0;d<t.length;d++){var c=r(t[d]);0===i[c].references&&(i[c].updater(),i.splice(c,1))}t=a}}}},649:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>v});var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"multiple-widgets"},[t("VPopup",{ref:"medalPopup",staticClass:"badge-popup widgets-popup medal",attrs:{"trigger-element":e.$refs.medalButton},model:{value:e.medalOpen,callback:function(n){e.medalOpen=n},expression:"medalOpen"}},[t("ul",e._l(e.medalList,(function(n){return t("li",{key:n.id,class:{active:n.isActive,gray:e.grayEffect&&!n.isLighted},attrs:{"data-id":n.id,title:n.upName},on:{click:function(t){return e.toggleBadge(n,e.medalList)}}},[t("div",{staticClass:"fans-medal-item",class:["level-"+n.level]},[t("span",{staticClass:"label"},[e._v(e._s(n.name))]),e._v(" "),t("span",{staticClass:"level"},[e._v(e._s(n.level))])])])})),0)]),e._v(" "),t("DefaultWidget",{ref:"medalButton",attrs:{icon:"mdi-medal"},on:{click:function(n){e.medalOpen=!e.medalOpen}}},[t("span",[e._v("更换勋章")])]),e._v(" "),t("VPopup",{ref:"titlePopup",staticClass:"badge-popup widgets-popup title",attrs:{"trigger-element":e.$refs.titleButton},model:{value:e.titleOpen,callback:function(n){e.titleOpen=n},expression:"titleOpen"}},[t("ul",e._l(e.titleList,(function(n){return t("li",{key:n.id,class:{active:n.isActive},attrs:{"data-id":n.id},on:{click:function(t){return e.toggleBadge(n,e.titleList)}}},[t("img",{staticClass:"title-image",attrs:{src:n.imageUrl}})])})),0)]),e._v(" "),t("DefaultWidget",{ref:"titleButton",attrs:{icon:"mdi-script-outline"},on:{click:function(n){e.titleOpen=!e.titleOpen}}},[t("span",[e._v("更换头衔")])])],1)};o._withStripped=!0;var l=t(986);const a=coreApis.utils.sort,i=coreApis.ui;var r=t(742);const{options:s}=(0,l.getComponentSettings)("badgeHelper"),d=Vue.extend({components:{DefaultWidget:i.DefaultWidget,VPopup:i.VPopup},data:()=>({medalList:[],titleList:[],medalOpen:!1,titleOpen:!1,grayEffect:!0}),async mounted(){(0,l.addComponentListener)("badgeHelper.grayEffect",(e=>{this.grayEffect=e}),!0);await(async()=>{const e=this.loadMedalList();await r.Dx.getImageMap();const n=this.loadTitleList();return Promise.all([e,n])})(),this.updateColumnsCount()},methods:{updateColumnsCount(){const e=this.$el,n=Math.min(Math.ceil(this.medalList.length/18),15);e.style.setProperty("--medal-columns",n.toString());const t=Math.min(Math.ceil(this.titleList.length/18),15);e.style.setProperty("--title-columns",t.toString())},async loadMedalList(){this.medalList=(await(0,r.KK)()).sort((0,a.descendingSort)((e=>e.level))).slice(0,s.maxBadgeCount)},async loadTitleList(){this.titleList=(await(0,r.eB)()).slice(0,s.maxBadgeCount)},async toggleBadge(e,n){if(console.log(e),e.isActive)e.isActive=!1,await e.deactivate();else{const t=n.find((e=>e.isActive));t&&(t.isActive=!1),e.isActive=!0,await e.activate(),e instanceof r.j9&&(s.defaultMedalID=e.id)}e instanceof r.j9?await this.loadMedalList():e instanceof r.Dx&&await this.loadTitleList()}}});var c=t(648),p=t.n(c),u=t(702),b=t.n(u),f={insert:"head",singleton:!1};p()(b(),f);b().locals;var g=function(e,n,t,o,l,a,i,r){var s,d="function"==typeof e?e.options:e;if(n&&(d.render=n,d.staticRenderFns=t,d._compiled=!0),o&&(d.functional=!0),a&&(d._scopeId="data-v-"+a),i?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),l&&l.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},d._ssrRegister=s):l&&(s=r?function(){l.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:l),s)if(d.functional){d._injectStyles=s;var c=d.render;d.render=function(e,n){return s.call(n),c(e,n)}}else{var p=d.beforeCreate;d.beforeCreate=p?[].concat(p,s):[s]}return{exports:e,options:d}}(d,o,[],!1,null,null,null);g.options.__file="registry/lib/components/live/badge-helper/BadgeHelper.vue";const v=g.exports},986:e=>{"use strict";e.exports=coreApis.settings},605:e=>{"use strict";e.exports=coreApis.utils}},o={};function l(e){var n=o[e];if(void 0!==n)return n.exports;var a=o[e]={id:e,exports:{}};return t[e](a,a.exports,l),a.exports}l.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return l.d(n,{a:n}),n},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(t,o){if(1&o&&(t=this(t)),8&o)return t;if("object"==typeof t&&t){if(4&o&&t.__esModule)return t;if(16&o&&"function"==typeof t.then)return t}var a=Object.create(null);l.r(a);var i={};e=e||[null,n({}),n([]),n(n)];for(var r=2&o&&t;"object"==typeof r&&!~e.indexOf(r);r=n(r))Object.getOwnPropertyNames(r).forEach((e=>i[e]=()=>t[e]));return i.default=()=>t,l.d(a,i),a},l.d=(e,n)=>{for(var t in n)l.o(n,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},l.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{"use strict";l.d(a,{component:()=>o});const e=coreApis.componentApis.define;var n=l(605),t=l(742);const o=(0,e.defineComponentMetadata)({name:"badgeHelper",displayName:"直播勋章快速更换",description:{"zh-CN":"在直播区中, 可从功能面板中直接切换勋章和头衔. 默认显示 256 个 (同时也是上限), 可在选项中修改."},entry:()=>(async()=>{const{getUID:e}=await Promise.resolve().then(l.t.bind(l,605,23));if(!e())return;const{getComponentSettings:n}=await Promise.resolve().then(l.t.bind(l,986,23)),{options:o}=n("badgeHelper");if(!o.autoMatchMedal)return;const a=document.URL.match(/^https:\/\/live\.bilibili\.com\/(blanc\/)?([\d]+)/);if(!a)return;const i=parseInt(a[2]);if(Number.isNaN(i))return void console.warn("roomID not found");const r=await(0,t.KK)();if(!o.defaultMedalID){const e=r.find((e=>e.isActive));e&&(o.defaultMedalID=e.id,console.log(`set defaultMedalID to activeMedal (${e.id})`))}const s=o.defaultMedalID?r.find((e=>e.id===o.defaultMedalID)):r.find((e=>e.isActive)),d=r.find((e=>e.roomID===i));d?(await d.activate(),console.log(`activated matchMedal (${d.id})`)):s&&(await s.activate(),console.log(`no matchMedal, fallback to defaultMedal (${s.id})`))})(),reload:n.none,unload:n.none,tags:[componentsTags.live],widget:{component:()=>Promise.resolve().then(l.bind(l,649)).then((e=>e.default)),condition:()=>Boolean((0,n.getUID)())},options:{autoMatchMedal:{defaultValue:!0,displayName:"自动佩戴当前直播间勋章"},maxBadgeCount:{defaultValue:256,displayName:"最大显示数量",validator:(0,n.getNumberValidator)(1,256)},defaultMedalID:{displayName:"默认勋章ID",hidden:!0,defaultValue:0},grayEffect:{displayName:"显示勋章的未点亮状态",defaultValue:!0}},urlInclude:["//live.bilibili.com"],commitHash:"81aba0ace934e5de3d34e3f6c88ace8506a9f7ab",coreVersion:"2.7.2"})})(),a=a.component})()));