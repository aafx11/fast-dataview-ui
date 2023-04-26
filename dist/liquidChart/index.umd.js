(function(m,o){typeof exports=="object"&&typeof module<"u"?o(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],o):(m=typeof globalThis<"u"?globalThis:m||self,o(m.index=m.index||{},m.Vue))})(this,function(m,o){"use strict";const D={currLevel:{type:Number,default:0},maxLevel:{type:Number},shape:{type:String,default:"rect"},waterShape:{type:String,default:"wave"},background:{type:String,default:"transparent"},borderWidth:{type:Number,default:10},borderColors:{type:Array,default:["#294d99","#294d99"]},showCenterCircle:{type:Boolean,default:!0},centerCircleRadius:{type:Number,default:50},lineOption:{type:Array,default:()=>[]},waveOption:{type:Array,default:()=>[{offestTop:0,waveScale:15,waveDirection:"right",waveDuration:1e4,begin:0,waveColor:"#4579e2"}]},textOption:{type:Object,default:()=>({show:!0,offest:[0,0],fontSize:22,color:"white"})}},T=Object.assign,A=(e,n,t,r,l)=>{let d=T({},{offestTop:0,waveScale:15,waveDirection:"right",waveDuration:1e4,begin:0,waveColor:"#4579e2"},n),i=d.waveScale,f=4*i,u=10*i,s=Math.ceil(t/u||0);if(!s||!l)return;let h=r-f,w=h*(1-l),a=3*i,p=1*i,v=8*i,b=4*i,g=`m 0 ${w+d.offestTop} c ${a} ${-p}, ${v} ${-b}, ${u} 0`,E=`s${v} ${-b}, ${u} 0`,$=`s ${u-a} ${p}, ${u} 0`,te=`v ${h*l+f} H 0`,_="";for(let k=0;k<s-1;k++)_=`${_}${E}${$}`;let ne=`${g}${$}${_}${te}`,re=d.waveDirection==="left"?"0 0":`${-(2*u)} 0`,ae=d.waveDirection==="left"?`${-(2*u)} 0`:"0 0";return o.createVNode("path",{class:e.e("wave"),d:ne,fill:d.waveColor},[o.createVNode("animateTransform",{attributeName:"transform",attributeType:"XML",type:"translate",begin:d.begin?`${d.begin}ms`:0,from:re,to:ae,dur:`${d.waveDuration}ms`,repeatCount:"indefinite"},null)])};function O(e,n,t){let r=e;return n&&(r+=`__${n}`),t&&(r+=`--${t}`),r}function H(e,n=!1){const t=n?`.f-${e}`:`f-${e}`;return{b:()=>O(t),e:i=>i?O(t,i):"",m:i=>i?O(t,"",i):"",em:(i,f)=>i&&f?O(t,i,f):""}}function F(e,n){const t=window.MutationObserver,r=new t(n);return r.observe(e,{attributes:!0,attributeFilter:["style"],attributeOldValue:!0}),r}var N;const S=typeof window<"u",M=e=>typeof e=="string",C=()=>{};S&&((N=window==null?void 0:window.navigator)!=null&&N.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function x(e){return typeof e=="function"?e():o.unref(e)}function R(e,n){function t(...r){return new Promise((l,c)=>{Promise.resolve(e(()=>n.apply(this,r),{fn:n,thisArg:this,args:r})).then(l).catch(c)})}return t}function q(e,n={}){let t,r,l=C;const c=i=>{clearTimeout(i),l(),l=C};return i=>{const f=x(e),u=x(n.maxWait);return t&&c(t),f<=0||u!==void 0&&u<=0?(r&&(c(r),r=null),Promise.resolve(i())):new Promise((s,h)=>{l=n.rejectOnCancel?h:s,u&&!r&&(r=setTimeout(()=>{t&&c(t),r=null,s(i())},u)),t=setTimeout(()=>{r&&c(r),r=null,s(i())},f)})}}function Q(e){return e}function j(e){return o.getCurrentScope()?(o.onScopeDispose(e),!0):!1}function z(e,n=200,t={}){return R(q(n,t),e)}function B(e){var n;const t=x(e);return(n=t==null?void 0:t.$el)!=null?n:t}const U=S?window:void 0;function X(...e){let n,t,r,l;if(M(e[0])||Array.isArray(e[0])?([t,r,l]=e,n=U):[n,t,r,l]=e,!n)return C;Array.isArray(t)||(t=[t]),Array.isArray(r)||(r=[r]);const c=[],d=()=>{c.forEach(s=>s()),c.length=0},i=(s,h,w,a)=>(s.addEventListener(h,w,a),()=>s.removeEventListener(h,w,a)),f=o.watch(()=>[B(n),x(l)],([s,h])=>{d(),s&&c.push(...t.flatMap(w=>r.map(a=>i(s,w,a,h))))},{immediate:!0,flush:"post"}),u=()=>{f(),d()};return j(u),u}const W=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L="__vueuse_ssr_handlers__";W[L]=W[L]||{};var I;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(I||(I={}));var G=Object.defineProperty,P=Object.getOwnPropertySymbols,Y=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,V=(e,n,t)=>n in e?G(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,J=(e,n)=>{for(var t in n||(n={}))Y.call(n,t)&&V(e,t,n[t]);if(P)for(var t of P(n))K.call(n,t)&&V(e,t,n[t]);return e};J({linear:Q},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const Z=(e,n,t,r)=>{const l=o.ref(0),c=o.ref(0),d=o.ref(0),i=o.ref(0);let f,u=null,s=null;const h=(v=!0)=>new Promise(b=>{o.nextTick(()=>{s=e.value,l.value=e.value?e.value.clientWidth:0,c.value=e.value?e.value.clientHeight:0,d.value=s?s.getBoundingClientRect().width:0,i.value=s?s.getBoundingClientRect().height:0,e.value?(!l.value||!c.value)&&console.warn("Component width or height is 0px"):console.warn("Failed to get dom node"),typeof n=="function"&&v&&n(),b(!0)})}),w=()=>{u=F(s,f),X(window,"resize",f)},a=()=>{u&&(u.disconnect(),u.takeRecords(),u=null)},p=async()=>{await h(!1),f=z(h,300),w(),typeof t=="function"&&t()};return o.onMounted(()=>{p()}),o.onUnmounted(()=>{a()}),{width:l,height:c,afterWidth:d,afterHeight:i,initWH:h}},y=o.defineComponent({name:"FLiquidChart",props:D,setup(e,n){const t=o.ref(),r=H("liquid-chart"),{width:l,height:c,initWH:d}=Z(t),i=()=>{let a=e.borderWidth/2,p=`${a},0`,v=`${a},${c.value-a}`,b=`${l.value-a},${c.value-a}`,g=`${l.value-a},0`;return o.createVNode("svg",{class:r.e("rect-wrap"),style:{background:e.background}},[Array.from({length:4}).map((E,$)=>o.createVNode("path",{class:r.e("top-border"),d:`M ${a},${0+$*4} ${l.value-a},${0+$*4}`,fill:"none","stroke-dasharray":"20 10",stroke:e.borderColors[1],"stroke-width":1},null)),o.createVNode("path",{d:`M ${p} ${v} ${b} ${g}`,fill:"none",stroke:e.borderColors[0],"stroke-width":e.borderWidth},null)])};let f=o.computed(()=>{let a=.5;return e.currLevel||(a=0),e.maxLevel?(a=e.currLevel/e.maxLevel,a>1?1:a):a});const u=o.computed(()=>({left:`${e.borderWidth}px`,width:`calc(100% - ${e.borderWidth*2}px)`,height:`calc(100% - ${e.borderWidth}px)`})),s=()=>o.createVNode("svg",{class:r.e("wave-wrap"),style:{...u.value}},[e.waveOption.map(a=>A(r,a,l.value,c.value,f.value)),w()]),h=()=>{let p=T({},{show:!0,offest:[0,0],fontSize:18,color:"white"},e.textOption);if(!p.show)return;let v=p.text,b=v?v.replace("{level}",String(e.currLevel)).replace("{percent}",String((f.value*100).toFixed(2))):e.currLevel,g=o.computed(()=>({color:p.color,fontSize:`${p.fontSize}px`,transform:`translate(calc(-50% + ${p.offest[0]}px), calc(-50% + ${p.offest[1]}px))`}));return o.createVNode("text",{class:r.e("center-text"),style:{...g.value}},[b])},w=()=>{if(e.maxLevel)return e.lineOption.map(a=>{let p=(1-a.level/e.maxLevel)*c.value,v=a.text?a.text.replace("{level}",String(a.level)):a.level;return o.createVNode(o.Fragment,null,[o.createVNode("path",{class:r.e("line"),d:`M 0 ${p},H ${l.value}`,fill:"none","stroke-dasharray":"20 10",stroke:a.color,"stroke-width":1},null),o.createVNode("text",{class:r.e("line-text"),x:l.value/2,y:p,fill:a.color},[v])])})};return n.expose({resize:d}),()=>o.createVNode("div",{ref:t,class:r.b()},[e.shape==="rect"?i():o.createVNode("div",null,null),e.waterShape==="wave"?s():o.createVNode("div",null,null),h()])}});y.install=function(e){e.component(y.name,y)};const ee={title:"liquidChart 水位图",name:"liquidChart",category:"图表",status:"100%",install(e){e.use(y)}};m.LiquidChart=y,m.default=ee,Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
