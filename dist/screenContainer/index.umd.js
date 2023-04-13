(function(h,r){typeof exports=="object"&&typeof module<"u"?r(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],r):(h=typeof globalThis<"u"?globalThis:h||self,r(h.index=h.index||{},h.Vue))})(this,function(h,r){"use strict";const T={width:{type:Number,default:1920},height:{type:Number,default:1080},onAfterResize:{type:Function,default:()=>{}}};function E(e,i){const t=window.MutationObserver,n=new t(i);return n.observe(e,{attributes:!0,attributeFilter:["style"],attributeOldValue:!0}),n}var b;const C=typeof window<"u",H=e=>typeof e=="string",v=()=>{};C&&((b=window==null?void 0:window.navigator)!=null&&b.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function m(e){return typeof e=="function"?e():r.unref(e)}function S(e,i){function t(...n){return new Promise((a,o)=>{Promise.resolve(e(()=>i.apply(this,n),{fn:i,thisArg:this,args:n})).then(a).catch(o)})}return t}function A(e,i={}){let t,n,a=v;const o=c=>{clearTimeout(c),a(),a=v};return c=>{const d=m(e),u=m(i.maxWait);return t&&o(t),d<=0||u!==void 0&&u<=0?(n&&(o(n),n=null),Promise.resolve(c())):new Promise((s,l)=>{a=i.rejectOnCancel?l:s,u&&!n&&(n=setTimeout(()=>{t&&o(t),n=null,s(c())},u)),t=setTimeout(()=>{n&&o(n),n=null,s(c())},d)})}}function N(e){return e}function z(e){return r.getCurrentScope()?(r.onScopeDispose(e),!0):!1}function F(e,i=200,t={}){return S(A(i,t),e)}function Q(e){var i;const t=m(e);return(i=t==null?void 0:t.$el)!=null?i:t}const $=C?window:void 0;function k(...e){let i,t,n,a;if(H(e[0])||Array.isArray(e[0])?([t,n,a]=e,i=$):[i,t,n,a]=e,!i)return v;Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]);const o=[],p=()=>{o.forEach(s=>s()),o.length=0},c=(s,l,f,g)=>(s.addEventListener(l,f,g),()=>s.removeEventListener(l,f,g)),d=r.watch(()=>[Q(i),m(a)],([s,l])=>{p(),s&&o.push(...t.flatMap(f=>n.map(g=>c(s,f,g,l))))},{immediate:!0,flush:"post"}),u=()=>{d(),p()};return z(u),u}const I=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x="__vueuse_ssr_handlers__";I[x]=I[x]||{};var P;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(P||(P={}));var B=Object.defineProperty,R=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,W=(e,i,t)=>i in e?B(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,D=(e,i)=>{for(var t in i||(i={}))L.call(i,t)&&W(e,t,i[t]);if(R)for(var t of R(i))j.call(i,t)&&W(e,t,i[t]);return e};D({linear:N},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const M=(e,i,t,n)=>{const a=r.ref(0),o=r.ref(0),p=r.ref(0),c=r.ref(0);let d,u=null,s=null;const l=(y=!0)=>new Promise(_=>{r.nextTick(()=>{s=e.value,a.value=e.value?e.value.clientWidth:0,o.value=e.value?e.value.clientHeight:0,p.value=s?s.getBoundingClientRect().width:0,c.value=s?s.getBoundingClientRect().height:0,e.value?(!a.value||!o.value)&&console.warn("Component width or height is 0px"):console.warn("Failed to get dom node"),typeof i=="function"&&y&&i(),_(!0)})}),f=()=>{u=E(s,d),k(window,"resize",d)},g=()=>{u&&(u.disconnect(),u.takeRecords(),u=null)},O=async()=>{await l(!1),d=F(l,200),f(),typeof t=="function"&&t()};return r.onMounted(()=>{O()}),r.onUnmounted(()=>{g()}),{width:a,height:o,afterWidth:p,afterHeight:c,initWH:l}},V={class:"f-screen-container"},w=r.defineComponent({__name:"index",props:T,setup(e){const i=e,t=r.ref(null),n=r.reactive({width:0,height:0,screenWidth:0,screenHeight:0,scaleX:1,scaleY:1,isReady:!1});let a=r.ref(1),o=r.ref(1);r.provide("scaleX",a),r.provide("scaleY",o);const p=()=>{i.width&&i.height?(n.width=i.width,n.height=i.height):(n.width=t.value.clientWidth,n.height=t.value.clientHeight);const{width:l,height:f}=window.screen;n.screenWidth=l,n.screenHeight=f},c=()=>{n.width&&n.height?(t.value.style.width=`${n.width}px`,t.value.style.height=`${n.height}px`):(t.value.style.width=`${n.screenWidth}px`,t.value.style.height=`${n.screenHeight}px`)},d=()=>{const l=document.body.clientWidth,f=document.body.clientHeight,g=n.width||n.screenWidth,O=n.height||n.screenHeight,y=l/+g,_=f/+O;a.value=y,o.value=_,t.value.style.transform=`scale(${y}, ${_})`};return M(t,()=>{d()},()=>{p(),c(),d(),i.onAfterResize(),n.isReady=!0}),(l,f)=>(r.openBlock(),r.createElementBlock("div",V,[r.createElementVNode("div",{class:"f-screen-inner",ref_key:"screenContainer",ref:t},[n.isReady?r.renderSlot(l.$slots,"default",{key:0}):r.createCommentVNode("v-if",!0),r.createCommentVNode(" <slot></slot> ")],512)]))}}),Y="";w.install=function(e){e.component("FScreenContainer",w)};const U={title:"container 容器",name:"container",category:"容器",status:"100%",install(e){e.use(w)}};h.ScreenContainer=w,h.default=U,Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
