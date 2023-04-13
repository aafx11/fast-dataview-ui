(function(p,o){typeof exports=="object"&&typeof module<"u"?o(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],o):(p=typeof globalThis<"u"?globalThis:p||self,o(p.index=p.index||{},p.Vue))})(this,function(p,o){"use strict";function N(e,n){const t=window.MutationObserver,r=new t(n);return r.observe(e,{attributes:!0,attributeFilter:["style"],attributeOldValue:!0}),r}var x;const I=typeof window<"u",W=e=>typeof e=="string",w=()=>{};I&&((x=window==null?void 0:window.navigator)!=null&&x.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function g(e){return typeof e=="function"?e():o.unref(e)}function S(e,n){function t(...r){return new Promise((u,s)=>{Promise.resolve(e(()=>n.apply(this,r),{fn:n,thisArg:this,args:r})).then(u).catch(s)})}return t}function k(e,n={}){let t,r,u=w;const s=c=>{clearTimeout(c),u(),u=w};return c=>{const a=g(e),l=g(n.maxWait);return t&&s(t),a<=0||l!==void 0&&l<=0?(r&&(s(r),r=null),Promise.resolve(c())):new Promise((i,d)=>{u=n.rejectOnCancel?d:i,l&&!r&&(r=setTimeout(()=>{t&&s(t),r=null,i(c())},l)),t=setTimeout(()=>{r&&s(r),r=null,i(c())},a)})}}function A(e){return e}function $(e){return o.getCurrentScope()?(o.onScopeDispose(e),!0):!1}function L(e,n=200,t={}){return S(k(n,t),e)}function F(e){var n;const t=g(e);return(n=t==null?void 0:t.$el)!=null?n:t}const Q=I?window:void 0;function D(...e){let n,t,r,u;if(W(e[0])||Array.isArray(e[0])?([t,r,u]=e,n=Q):[n,t,r,u]=e,!n)return w;Array.isArray(t)||(t=[t]),Array.isArray(r)||(r=[r]);const s=[],f=()=>{s.forEach(i=>i()),s.length=0},c=(i,d,y,b)=>(i.addEventListener(d,y,b),()=>i.removeEventListener(d,y,b)),a=o.watch(()=>[F(n),g(u)],([i,d])=>{f(),i&&s.push(...t.flatMap(y=>r.map(b=>c(i,y,b,d))))},{immediate:!0,flush:"post"}),l=()=>{a(),f()};return $(l),l}const C=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P="__vueuse_ssr_handlers__";C[P]=C[P]||{};var T;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(T||(T={}));var H=Object.defineProperty,E=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,B=(e,n,t)=>n in e?H(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,M=(e,n)=>{for(var t in n||(n={}))R.call(n,t)&&B(e,t,n[t]);if(E)for(var t of E(n))j.call(n,t)&&B(e,t,n[t]);return e};M({linear:A},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const V=(e,n,t,r)=>{const u=o.ref(0),s=o.ref(0),f=o.ref(0),c=o.ref(0);let a,l=null,i=null;const d=(v=!0)=>new Promise(_=>{o.nextTick(()=>{i=e.value,u.value=e.value?e.value.clientWidth:0,s.value=e.value?e.value.clientHeight:0,f.value=i?i.getBoundingClientRect().width:0,c.value=i?i.getBoundingClientRect().height:0,e.value?(!u.value||!s.value)&&console.warn("Component width or height is 0px"):console.warn("Failed to get dom node"),typeof n=="function"&&v&&n(),_(!0)})}),y=()=>{l=N(i,a),D(window,"resize",a)},b=()=>{l&&(l.disconnect(),l.takeRecords(),l=null)},O=async()=>{await d(!1),a=L(d,200),y(),typeof t=="function"&&t()};return o.onMounted(()=>{O()}),o.onUnmounted(()=>{b()}),{width:u,height:s,afterWidth:f,afterHeight:c,initWH:d}},U={color:{type:Array,default:()=>[]},backgroundColor:{type:String,default:"transparent"},strokeWidth:{type:Number},title:{type:String,default:""},duration:{type:Number,default:2},strokeDasharray:{type:String,default:"300 300"}},z=Object.assign,G=e=>Array.isArray(e)&&e.length,h=e=>e>=0?e:0,m=o.defineComponent({name:"FBorderBox2",props:U,setup(e,{slots:n}){const t=o.ref(null),r=["white"];let u=o.computed(()=>G(e.color)?z(r,e.color):r);const{width:s,height:f,initWH:c}=V(t);return{width:s,height:f,initWH:c,borderBox2:t,defaultColor:r,realColor:u}},render(){const{$slots:e,width:n,height:t,backgroundColor:r,strokeWidth:u,realColor:s,duration:f,strokeDasharray:c}=this;let a=u||3,l=h(a),i=h(a),d=h(n-a),y=h(a),b=h(n-a),O=h(t-a),v=h(a),_=h(t-a);return o.createVNode("div",{ref:"borderBox2",class:"f-border-box-2"},[o.createVNode("svg",{class:"f-svg-container",width:n,height:t},[o.createVNode("path",{class:"f-container-path",style:{"--duration":`${f}s`,"--border-stroke-dasharray":c},stroke:s[0],"stroke-width":a,fill:r,d:`M ${l} ${i}, L ${d} ${y}, L ${b} ${O}, L ${v} ${_}, Z`},null)]),o.createVNode("div",{class:"f-border-box-content"},[o.renderSlot(e,"default")])])}});m.install=function(e){e.component(m.name,m)};const Z={title:"border-02 边框",name:"border02",category:"边框",status:"100%",install(e){e.use(m)}};p.BorderBox2=m,p.default=Z,Object.defineProperties(p,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
