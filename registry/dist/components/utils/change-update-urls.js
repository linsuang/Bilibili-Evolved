!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/change-update-urls"]=t():e["utils/change-update-urls"]=t()}(globalThis,(()=>(()=>{"use strict";var e={409:(e,t,o)=>{o.r(t),o.d(t,{default:()=>c});var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("DefaultWidget",{attrs:{name:"替换更新链接",icon:"mdi-file-replace-outline",disabled:e.busy},on:{click:function(t){return e.replaceBranch()}}})};n._withStripped=!0;const r=coreApis.settings,i=coreApis.toast,s=coreApis.utils.log,a=coreApis.ui;var l=function(e,t,o,n,r,i,s,a){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=o,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=l):r&&(l=a?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:e,options:c}}(Vue.extend({components:{DefaultWidget:a.DefaultWidget},data:()=>({busy:!1}),methods:{async replaceBranch(){const e=window.prompt("输入希望替换成的分支名称");if(e){this.busy=!0;try{const{options:t}=(0,r.getComponentSettings)("autoUpdate");Object.values(t.urls).forEach((t=>{Object.values(t).forEach((t=>{const o=/^(https:\/\/github\.com\/.+\/Bilibili-Evolved\/raw\/)(.+?)(\/)/;if(o.test(t.url))return void(t.url=t.url.replace(o,`$1${e}$3`));const n=/^(https:\/\/raw\.githubusercontent\.com\/.+\/Bilibili-Evolved\/)(.+?)(\/)/;if(n.test(t.url))return void(t.url=t.url.replace(n,`$1${e}$3`));const r=/^(https:\/\/cdn\.jsdelivr\.net\/gh\/.+\/Bilibili-Evolved@)(.+?)(\/)/;r.test(t.url)?t.url=t.url.replace(r,`$1${e}$3`):console.log("skip record",t)}))})),i.Toast.info("替换完成","替换更新链接",3e3)}catch(e){(0,s.logError)(e)}finally{this.busy=!1}}}}}),n,[],!1,null,null,null);l.options.__file="registry/lib/components/utils/change-update-urls/Widget.vue";const c=l.exports}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{o.d(n,{component:()=>e});const e=(0,coreApis.componentApis.define.defineComponentMetadata)({name:"changeUpdateUrls",displayName:"更新链接替换",description:"批量更换已安装功能的更新链接的分支, 对本地安装的功能无效.",entry:none,tags:[componentsTags.utils],widget:{component:()=>Promise.resolve().then(o.bind(o,409)).then((e=>e.default))},commitHash:"81aba0ace934e5de3d34e3f6c88ace8506a9f7ab",coreVersion:"2.7.2"})})(),n=n.component})()));