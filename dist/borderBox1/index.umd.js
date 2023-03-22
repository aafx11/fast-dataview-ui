(function(p,s){typeof exports=="object"&&typeof module<"u"?s(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],s):(p=typeof globalThis<"u"?globalThis:p||self,s(p.index=p.index||{},p.Vue))})(this,function(p,s){"use strict";function I(e,r){const o=window.MutationObserver,a=new o(r);return a.observe(e,{attributes:!0,attributeFilter:["style"],attributeOldValue:!0}),a}var m;const O=typeof window<"u",C=e=>typeof e=="string",y=()=>{};O&&((m=window==null?void 0:window.navigator)!=null&&m.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function g(e){return typeof e=="function"?e():s.unref(e)}function v(e,r){function o(...a){return new Promise((c,u)=>{Promise.resolve(e(()=>r.apply(this,a),{fn:r,thisArg:this,args:a})).then(c).catch(u)})}return o}function P(e,r={}){let o,a,c=y;const u=t=>{clearTimeout(t),c(),c=y};return t=>{const n=g(e),l=g(r.maxWait);return o&&u(o),n<=0||l!==void 0&&l<=0?(a&&(u(a),a=null),Promise.resolve(t())):new Promise((i,f)=>{c=r.rejectOnCancel?f:i,l&&!a&&(a=setTimeout(()=>{o&&u(o),a=null,i(t())},l)),o=setTimeout(()=>{a&&u(a),a=null,i(t())},n)})}}function T(e){return e}function E(e){return s.getCurrentScope()?(s.onScopeDispose(e),!0):!1}function V(e,r=200,o={}){return v(P(r,o),e)}function W(e){var r;const o=g(e);return(r=o==null?void 0:o.$el)!=null?r:o}const B=O?window:void 0;function A(...e){let r,o,a,c;if(C(e[0])||Array.isArray(e[0])?([o,a,c]=e,r=B):[r,o,a,c]=e,!r)return y;Array.isArray(o)||(o=[o]),Array.isArray(a)||(a=[a]);const u=[],d=()=>{u.forEach(i=>i()),u.length=0},t=(i,f,$)=>(i.addEventListener(f,$,c),()=>i.removeEventListener(f,$,c)),n=s.watch(()=>W(r),i=>{d(),i&&u.push(...o.flatMap(f=>a.map($=>t(i,f,$))))},{immediate:!0,flush:"post"}),l=()=>{n(),d()};return E(l),l}const w=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},b="__vueuse_ssr_handlers__";w[b]=w[b]||{},w[b];var _;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(_||(_={}));var S=Object.defineProperty,N=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,x=(e,r,o)=>r in e?S(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,Q=(e,r)=>{for(var o in r||(r={}))F.call(r,o)&&x(e,o,r[o]);if(N)for(var o of N(r))H.call(r,o)&&x(e,o,r[o]);return e};Q({linear:T},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const L=(e,r,o,a)=>{const c=s.ref(0),u=s.ref(0),d=s.ref(0),t=s.ref(0);let n,l=null,i=null;const f=(G=!0)=>new Promise(q=>{s.nextTick(()=>{i=e.value,c.value=e.value?e.value.clientWidth:0,u.value=e.value?e.value.clientHeight:0,d.value=i?i.getBoundingClientRect().width:0,t.value=i?i.getBoundingClientRect().height:0,e.value?(!c.value||!u.value)&&console.warn("Component width or height is 0px"):console.warn("Failed to get dom node"),typeof r=="function"&&G&&r(),q(!0)})}),$=()=>{l=I(i,n),A(window,"resize",n)},z=()=>{l&&(l.disconnect(),l.takeRecords(),l=null)},U=async()=>{await f(!1),n=V(f,200),$(),typeof o=="function"&&o()};return s.onMounted(()=>{U()}),s.onUnmounted(()=>{z()}),{width:c,height:u,afterWidth:d,afterHeight:t,initWH:f}},R={color:{type:Array,default:()=>[]},backgroundColor:{type:String,default:"transparent"},strokeWidth:{type:Number},title:{type:String,default:""},duration:{type:Number,default:2}},j=Object.assign,D=e=>Array.isArray(e)&&e.length,k=e=>e>=0?e:0,h=s.defineComponent({name:"FBorderBox1",props:R,setup(e,{slots:r}){const o=s.ref(null),a=["rgba(46, 96, 153,0.85)","rgba(71, 196, 245,0.85)"];let c=s.computed(()=>D(e.color)?j(a,e.color):a);const{width:u,height:d,initWH:t}=L(o);return{width:u,height:d,initWH:t,borderBox1:o,defaultColor:a,realColor:c}},render(){const{$slots:e,width:r,height:o,backgroundColor:a,strokeWidth:c,realColor:u,title:d}=this,t=20;let n=c||2,l=k(r-n-2),i=k(o-n-2);return s.createVNode("div",{ref:"borderBox1",class:"f-border-box-1"},[s.createVNode("svg",{class:"f-svg-container",width:l,height:i},[s.createVNode("polygon",{fill:a,stroke:u[0],"stroke-width":n,points:`
            ${t} ${n}, ${l-t} ${n}, ${l-n} ${t}, ${l-n} ${i-t}, ${l-t} ${i},
            ${t} ${i}, ${n} ${i-t}, ${n} ${t}
          `},null),s.createVNode("polyline",{stroke:u[1],"stroke-width":n+1,points:`
            ${t-8} 0,0 ${t-8}
          `},null),s.createVNode("polyline",{stroke:u[1],"stroke-width":n+1,points:`
            ${l} ${i-t+8}, ${l-t+8+n} ${i}
          `},null),s.createVNode("polyline",{fill:"none",stroke:u[1],"stroke-width":n+2,points:`
            ${n} ${t+15}, ${n} ${t}, ${t} ${n} , ${t+15} ${n}
          `},null),s.createVNode("polyline",{fill:"none",stroke:u[1],"stroke-width":n+2,points:`
           ${t+15} ${i}, ${t}  ${i}, ${n} ${i-t}, ${n} ${i-t-15}
          `},null),s.createVNode("polyline",{fill:"none",stroke:u[1],"stroke-width":n+2,points:`
           ${l-t-15} ${n}, ${l-t} ${n}, ${l-n} ${t}, ${l-n} ${t+15}
          `},null),s.createVNode("polyline",{fill:"none",stroke:u[1],"stroke-width":n+2,points:`
          ${l-t-15} ${i}, ${l-t} ${i}, ${l-n} ${i-t}, ${l-n} ${i-t-15}
          `},null),d?s.createVNode("polygon",{fill:"rgba(33, 173, 238,0.1)",points:`
            ${t} ${n}, ${l-t} ${n}, ${l-n} ${t}, ${l-n} ${t+15}, ${n} ${t+15},
            ${n} ${t}
          `},null):null,d?s.createVNode("text",{x:"30",y:"25","font-size":"16","font-weight":"bold",fill:"#279fc7"},[d]):null]),s.createVNode("div",{class:"f-border-box-content"},[s.createVNode("div",null,[s.renderSlot(e,"default")])])])}});h.install=function(e){e.component(h.name,h)};const M={title:"border 边框",category:"边框",status:"20%",install(e){e.use(h)}};p.BorderBox1=h,p.default=M,Object.defineProperties(p,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
