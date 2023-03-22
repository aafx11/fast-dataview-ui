(function(h,r){typeof exports=="object"&&typeof module<"u"?r(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],r):(h=typeof globalThis<"u"?globalThis:h||self,r(h.index=h.index||{},h.Vue))})(this,function(h,r){"use strict";const T={width:{type:Number,default:1920},height:{type:Number,default:1080},onAfterResize:{type:Function,default:()=>{}}};function E(e,i){const t=window.MutationObserver,n=new t(i);return n.observe(e,{attributes:!0,attributeFilter:["style"],attributeOldValue:!0}),n}var I;const x=typeof window<"u",H=e=>typeof e=="string",m=()=>{};x&&((I=window==null?void 0:window.navigator)!=null&&I.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function _(e){return typeof e=="function"?e():r.unref(e)}function S(e,i){function t(...n){return new Promise((o,a)=>{Promise.resolve(e(()=>i.apply(this,n),{fn:i,thisArg:this,args:n})).then(o).catch(a)})}return t}function A(e,i={}){let t,n,o=m;const a=c=>{clearTimeout(c),o(),o=m};return c=>{const d=_(e),l=_(i.maxWait);return t&&a(t),d<=0||l!==void 0&&l<=0?(n&&(a(n),n=null),Promise.resolve(c())):new Promise((s,u)=>{o=i.rejectOnCancel?u:s,l&&!n&&(n=setTimeout(()=>{t&&a(t),n=null,s(c())},l)),t=setTimeout(()=>{n&&a(n),n=null,s(c())},d)})}}function N(e){return e}function z(e){return r.getCurrentScope()?(r.onScopeDispose(e),!0):!1}function F(e,i=200,t={}){return S(A(i,t),e)}function Q(e){var i;const t=_(e);return(i=t==null?void 0:t.$el)!=null?i:t}const $=x?window:void 0;function k(...e){let i,t,n,o;if(H(e[0])||Array.isArray(e[0])?([t,n,o]=e,i=$):[i,t,n,o]=e,!i)return m;Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]);const a=[],p=()=>{a.forEach(s=>s()),a.length=0},c=(s,u,f)=>(s.addEventListener(u,f,o),()=>s.removeEventListener(u,f,o)),d=r.watch(()=>Q(i),s=>{p(),s&&a.push(...t.flatMap(u=>n.map(f=>c(s,u,f))))},{immediate:!0,flush:"post"}),l=()=>{d(),p()};return z(l),l}const v=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O="__vueuse_ssr_handlers__";v[O]=v[O]||{},v[O];var P;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(P||(P={}));var B=Object.defineProperty,R=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,W=(e,i,t)=>i in e?B(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,D=(e,i)=>{for(var t in i||(i={}))L.call(i,t)&&W(e,t,i[t]);if(R)for(var t of R(i))j.call(i,t)&&W(e,t,i[t]);return e};D({linear:N},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const M=(e,i,t,n)=>{const o=r.ref(0),a=r.ref(0),p=r.ref(0),c=r.ref(0);let d,l=null,s=null;const u=(w=!0)=>new Promise(y=>{r.nextTick(()=>{s=e.value,o.value=e.value?e.value.clientWidth:0,a.value=e.value?e.value.clientHeight:0,p.value=s?s.getBoundingClientRect().width:0,c.value=s?s.getBoundingClientRect().height:0,e.value?(!o.value||!a.value)&&console.warn("Component width or height is 0px"):console.warn("Failed to get dom node"),typeof i=="function"&&w&&i(),y(!0)})}),f=()=>{l=E(s,d),k(window,"resize",d)},b=()=>{l&&(l.disconnect(),l.takeRecords(),l=null)},C=async()=>{await u(!1),d=F(u,200),f(),typeof t=="function"&&t()};return r.onMounted(()=>{C()}),r.onUnmounted(()=>{b()}),{width:o,height:a,afterWidth:p,afterHeight:c,initWH:u}},V={class:"f-screen-container"},g=r.defineComponent({name:"index",props:T,setup(e){const i=e,t=r.ref(null),n=r.reactive({width:0,height:0,screenWidth:0,screenHeight:0,scaleX:1,scaleY:1,isReady:!1});let o=r.ref(1),a=r.ref(1);r.provide("scaleX",o),r.provide("scaleY",a);const p=()=>{i.width&&i.height?(n.width=i.width,n.height=i.height):(n.width=t.value.clientWidth,n.height=t.value.clientHeight);const{width:u,height:f}=window.screen;n.screenWidth=u,n.screenHeight=f},c=()=>{n.width&&n.height?(t.value.style.width=`${n.width}px`,t.value.style.height=`${n.height}px`):(t.value.style.width=`${n.screenWidth}px`,t.value.style.height=`${n.screenHeight}px`)},d=()=>{const u=document.body.clientWidth,f=document.body.clientHeight,b=n.width||n.screenWidth,C=n.height||n.screenHeight,w=u/+b,y=f/+C;o.value=w,a.value=y,t.value.style.transform=`scale(${w}, ${y})`};return M(t,()=>{d()},()=>{p(),c(),d(),i.onAfterResize(),n.isReady=!0}),(u,f)=>(r.openBlock(),r.createElementBlock("div",V,[r.createElementVNode("div",{class:"f-screen-inner",ref_key:"screenContainer",ref:t},[n.isReady?r.renderSlot(u.$slots,"default",{key:0}):r.createCommentVNode("",!0)],512)]))}}),Y="";g.install=function(e){e.component("FScreenContainer",g)};const U={title:"container 容器",category:"容器",status:"20%",install(e){e.use(g)}};h.ScreenContainer=g,h.default=U,Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
