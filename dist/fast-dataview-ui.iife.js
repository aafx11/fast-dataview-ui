(function($,t){"use strict";const ee={size:{type:Number},color:{type:String}},S=t.defineComponent({name:"FIcon",props:ee,setup(e,{slots:n}){return t.computed(()=>!e.size&&!e.color?{}:{...e.size?{"font-size":e.size+"px"}:{},...e.color?{color:e.color}:{}}),()=>t.createVNode("div",{class:"f-icon",style:{border:"1px solid black"}},[t.renderSlot(n,"default")])}});S.install=function(e){e.component(S.name,S)};const te={title:"Icon 图标",category:"装饰",status:"20%",install(e){e.use(S)}};function ne(e,n){const l=window.MutationObserver,r=new l(n);return r.observe(e,{attributes:!0,attributeFilter:["style"],attributeOldValue:!0}),r}var M;const Q=typeof window<"u",le=e=>typeof e=="string",W=()=>{};Q&&((M=window==null?void 0:window.navigator)!=null&&M.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function L(e){return typeof e=="function"?e():t.unref(e)}function re(e,n){function l(...r){return new Promise((a,c)=>{Promise.resolve(e(()=>n.apply(this,r),{fn:n,thisArg:this,args:r})).then(a).catch(c)})}return l}function oe(e,n={}){let l,r,a=W;const c=o=>{clearTimeout(o),a(),a=W};return o=>{const i=L(e),s=L(n.maxWait);return l&&c(l),i<=0||s!==void 0&&s<=0?(r&&(c(r),r=null),Promise.resolve(o())):new Promise((d,g)=>{a=n.rejectOnCancel?g:d,s&&!r&&(r=setTimeout(()=>{l&&c(l),r=null,d(o())},s)),l=setTimeout(()=>{r&&c(r),r=null,d(o())},i)})}}function ie(e){return e}function ae(e){return t.getCurrentScope()?(t.onScopeDispose(e),!0):!1}function se(e,n=200,l={}){return re(oe(n,l),e)}function ce(e){var n;const l=L(e);return(n=l==null?void 0:l.$el)!=null?n:l}const de=Q?window:void 0;function ue(...e){let n,l,r,a;if(le(e[0])||Array.isArray(e[0])?([l,r,a]=e,n=de):[n,l,r,a]=e,!n)return W;Array.isArray(l)||(l=[l]),Array.isArray(r)||(r=[r]);const c=[],u=()=>{c.forEach(d=>d()),c.length=0},o=(d,g,f)=>(d.addEventListener(g,f,a),()=>d.removeEventListener(g,f,a)),i=t.watch(()=>ce(n),d=>{u(),d&&c.push(...l.flatMap(g=>r.map(f=>o(d,g,f))))},{immediate:!0,flush:"post"}),s=()=>{i(),u()};return ae(s),s}const H=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F="__vueuse_ssr_handlers__";H[F]=H[F]||{},H[F];var U;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(U||(U={}));var ge=Object.defineProperty,G=Object.getOwnPropertySymbols,he=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable,q=(e,n,l)=>n in e?ge(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,me=(e,n)=>{for(var l in n||(n={}))he.call(n,l)&&q(e,l,n[l]);if(G)for(var l of G(n))fe.call(n,l)&&q(e,l,n[l]);return e};me({linear:ie},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const T=(e,n,l,r)=>{const a=t.ref(0),c=t.ref(0),u=t.ref(0),o=t.ref(0);let i,s=null,d=null;const g=(m=!0)=>new Promise(y=>{t.nextTick(()=>{d=e.value,a.value=e.value?e.value.clientWidth:0,c.value=e.value?e.value.clientHeight:0,u.value=d?d.getBoundingClientRect().width:0,o.value=d?d.getBoundingClientRect().height:0,e.value?(!a.value||!c.value)&&console.warn("Component width or height is 0px"):console.warn("Failed to get dom node"),typeof n=="function"&&m&&n(),y(!0)})}),f=()=>{s=ne(d,i),ue(window,"resize",i)},p=()=>{s&&(s.disconnect(),s.takeRecords(),s=null)},h=async()=>{await g(!1),i=se(g,200),f(),typeof l=="function"&&l()};return t.onMounted(()=>{h()}),t.onUnmounted(()=>{p()}),{width:a,height:c,afterWidth:u,afterHeight:o,initWH:g}},Z={color:{type:Array,default:()=>[]},backgroundColor:{type:String,default:"transparent"},strokeWidth:{type:Number},title:{type:String,default:""},duration:{type:Number,default:2}},k=Object.assign,P=e=>Array.isArray(e)&&e.length,pe=e=>Array.isArray(e)&&e||[],C=e=>e>=0?e:0,K=(e,n=new WeakMap)=>{if(e===null)return e;if(e instanceof Date)return new Date(e);if(e instanceof RegExp)return new RegExp(e);if(typeof e!="object")return e;if(n.get(e))return n.get(e);let l=new e.constructor;n.set(e,l);for(let r in e)e.hasOwnProperty(r)&&(l[r]=K(e[r],n));return l},B=t.defineComponent({name:"FBorderBox1",props:Z,setup(e,{slots:n}){const l=t.ref(null),r=["rgba(46, 96, 153,0.85)","rgba(71, 196, 245,0.85)"];let a=t.computed(()=>P(e.color)?k(r,e.color):r);const{width:c,height:u,initWH:o}=T(l);return{width:c,height:u,initWH:o,borderBox1:l,defaultColor:r,realColor:a}},render(){const{$slots:e,width:n,height:l,backgroundColor:r,strokeWidth:a,realColor:c,title:u}=this,o=20;let i=a||2,s=C(n-i-2),d=C(l-i-2);return t.createVNode("div",{ref:"borderBox1",class:"f-border-box-1"},[t.createVNode("svg",{class:"f-svg-container",width:s,height:d},[t.createVNode("polygon",{fill:r,stroke:c[0],"stroke-width":i,points:`
            ${o} ${i}, ${s-o} ${i}, ${s-i} ${o}, ${s-i} ${d-o}, ${s-o} ${d},
            ${o} ${d}, ${i} ${d-o}, ${i} ${o}
          `},null),t.createVNode("polyline",{stroke:c[1],"stroke-width":i+1,points:`
            ${o-8} 0,0 ${o-8}
          `},null),t.createVNode("polyline",{stroke:c[1],"stroke-width":i+1,points:`
            ${s} ${d-o+8}, ${s-o+8+i} ${d}
          `},null),t.createVNode("polyline",{fill:"none",stroke:c[1],"stroke-width":i+2,points:`
            ${i} ${o+15}, ${i} ${o}, ${o} ${i} , ${o+15} ${i}
          `},null),t.createVNode("polyline",{fill:"none",stroke:c[1],"stroke-width":i+2,points:`
           ${o+15} ${d}, ${o}  ${d}, ${i} ${d-o}, ${i} ${d-o-15}
          `},null),t.createVNode("polyline",{fill:"none",stroke:c[1],"stroke-width":i+2,points:`
           ${s-o-15} ${i}, ${s-o} ${i}, ${s-i} ${o}, ${s-i} ${o+15}
          `},null),t.createVNode("polyline",{fill:"none",stroke:c[1],"stroke-width":i+2,points:`
          ${s-o-15} ${d}, ${s-o} ${d}, ${s-i} ${d-o}, ${s-i} ${d-o-15}
          `},null),u?t.createVNode("polygon",{fill:"rgba(33, 173, 238,0.1)",points:`
            ${o} ${i}, ${s-o} ${i}, ${s-i} ${o}, ${s-i} ${o+15}, ${i} ${o+15},
            ${i} ${o}
          `},null):null,u?t.createVNode("text",{x:"30",y:"25","font-size":"16","font-weight":"bold",fill:"#279fc7"},[u]):null]),t.createVNode("div",{class:"f-border-box-content"},[t.createVNode("div",null,[t.renderSlot(e,"default")])])])}});B.install=function(e){e.component(B.name,B)};const ye={title:"border 边框",category:"边框",status:"20%",install(e){e.use(B)}},N=t.defineComponent({name:"FBorderBox2",props:Z,setup(e,{slots:n}){const l=t.ref(null),r=["white"];let a=t.computed(()=>P(e.color)?k(r,e.color):r);const{width:c,height:u,initWH:o}=T(l);return{width:c,height:u,initWH:o,borderBox2:l,defaultColor:r,realColor:a}},render(){const{$slots:e,width:n,height:l,backgroundColor:r,strokeWidth:a,realColor:c,duration:u}=this;let o=a||3,i=C(o),s=C(o),d=C(n-o),g=C(o),f=C(n-o),p=C(l-o),h=C(o),m=C(l-o);return t.createVNode("div",{ref:"borderBox2",class:"f-border-box-2"},[t.createVNode("svg",{class:"f-svg-container",width:n,height:l},[t.createVNode("path",{class:"f-container-path",style:{"--duration":`${u}s`},stroke:c[0],"stroke-width":o,fill:r,d:`M ${i} ${s}, L ${d} ${g}, L ${f} ${p}, L ${h} ${m}, Z`},null)]),t.createVNode("div",{class:"f-border-box-content"},[t.renderSlot(e,"default")])])}});N.install=function(e){e.component(N.name,N)};const we={title:"border 边框",category:"边框",status:"20%",install(e){e.use(N)}},I=t.defineComponent({name:"FLoading1",props:{width:{type:String,default:"100px"},height:{type:String,default:"100px"},color:{type:Array,default:()=>[]},text:{type:String,default:""},duration:{type:Number,default:2}},setup(e,{slots:n}){const l=t.ref(null),r=["#4f29f0","#c3c8de","#414856"];let a=t.computed(()=>P(e.color)?k(r,e.color):r);const{width:c,height:u,initWH:o}=T(l);return{width:c,height:u,initWH:o,loading1:l,defaultColor:r,realColor:a}},render(){const{$slots:e,realColor:n,text:l,duration:r}=this;return t.createVNode("div",{ref:"loading1",class:"f-loading-1",style:{"--front-color":n[0],"--back-color":n[1],"--text-color":n[2],"--duration":`${r}s`}},[t.createVNode("svg",{class:"f-circle-outer",viewBox:"0 0 86 86"},[t.createVNode("circle",{class:"f-back",cx:"43",cy:"43",r:"40"},null),t.createVNode("circle",{class:"f-front",cx:"43",cy:"43",r:"40"},null)]),t.createVNode("svg",{class:"f-circle-middle",viewBox:"0 0 60 60"},[t.createVNode("circle",{class:"f-back",cx:"30",cy:"30",r:"27"},null),t.createVNode("circle",{class:"f-front",cx:"30",cy:"30",r:"27"},null)]),t.createVNode("svg",{class:"f-circle-inner",viewBox:"0 0 34 34"},[t.createVNode("circle",{class:"f-back",cx:"17",cy:"17",r:"14"},null),t.createVNode("circle",{class:"f-front",cx:"17",cy:"17",r:"14"},null)]),l?t.createVNode("div",{class:"f-loading-text","data-text":l},null):null])}});I.install=function(e){e.component(I.name,I)};const $e={title:"loading 加载",category:"加载",status:"20%",install(e){e.use(I)}},be=t.defineComponent({name:"FLoading2",props:{width:{type:String,default:"100px"},height:{type:String,default:"100px"},color:{type:Array,default:()=>[]},text:{type:String,default:""},duration:{type:Number,default:.8}},setup(e,{slots:n}){const l=["#d1d5db","#3b82f6","#3b82f6"];let r=t.computed(()=>P(e.color)?k(l,e.color):l);return{getLoadingStyle:t.computed(()=>({width:e.width,height:e.height,color:r.value[2],"--border-color":r.value[0],"--border-top-color":r.value[1],"--duration":`${e.duration}s`}))}}}),J=(e,n)=>{const l=e.__vccOpts||e;for(const[r,a]of n)l[r]=a;return l},Ce=t.createElementVNode("div",{class:"f-loading-round"},null,-1),_e={class:"loading-text"};function xe(e,n,l,r,a,c){return t.openBlock(),t.createElementBlock("div",{class:"f-loading-2",style:t.normalizeStyle(e.getLoadingStyle)},[Ce,t.createElementVNode("div",_e,[t.renderSlot(e.$slots,"default",{},()=>[t.createElementVNode("div",null,t.toDisplayString(e.text),1)])])],4)}const E=J(be,[["render",xe]]);E.install=function(e){e.component(E.name,E)};const Se={title:"loading 加载",category:"加载",status:"20%",install(e){e.use(E)}},ke={width:{type:Number,default:1920},height:{type:Number,default:1080},onAfterResize:{type:Function,default:()=>{}}},Pe={class:"f-screen-container"},z=t.defineComponent({name:"index",props:ke,setup(e){const n=e,l=t.ref(null),r=t.reactive({width:0,height:0,screenWidth:0,screenHeight:0,scaleX:1,scaleY:1,isReady:!1});let a=t.ref(1),c=t.ref(1);t.provide("scaleX",a),t.provide("scaleY",c);const u=()=>{n.width&&n.height?(r.width=n.width,r.height=n.height):(r.width=l.value.clientWidth,r.height=l.value.clientHeight);const{width:g,height:f}=window.screen;r.screenWidth=g,r.screenHeight=f},o=()=>{r.width&&r.height?(l.value.style.width=`${r.width}px`,l.value.style.height=`${r.height}px`):(l.value.style.width=`${r.screenWidth}px`,l.value.style.height=`${r.screenHeight}px`)},i=()=>{const g=document.body.clientWidth,f=document.body.clientHeight,p=r.width||r.screenWidth,h=r.height||r.screenHeight,m=g/+p,y=f/+h;a.value=m,c.value=y,l.value.style.transform=`scale(${m}, ${y})`};return T(l,()=>{i()},()=>{u(),o(),i(),n.onAfterResize(),r.isReady=!0}),(g,f)=>(t.openBlock(),t.createElementBlock("div",Pe,[t.createElementVNode("div",{class:"f-screen-inner",ref_key:"screenContainer",ref:l},[r.isReady?t.renderSlot(g.$slots,"default",{key:0}):t.createCommentVNode("",!0)],512)]))}}),Ke="";z.install=function(e){e.component("FScreenContainer",z)};const Be={title:"container 容器",category:"容器",status:"20%",install(e){e.use(z)}},Ne={width:{type:Number,default:400},height:{type:Number,default:400},radius:{type:Number,default:1.2},strength:{type:Number,default:2},src:{type:String}},Ie=1/30;class X{constructor(n,l,r,a,c,u,o){this.x=Math.random()*n>>0,this.y=Math.random()*l>>0,this.targetX=r,this.targetY=a,this.time=c,this.radius=u,this.colors=o,this.opacity=0}draw(n){n.fillStyle=`${this.colors}`,n.fillRect(this.x,this.y,this.radius*2,this.radius*2),n.fill()}update(n,l,r,a){if(this.distanceX=this.targetX-this.x,this.distanceY=this.targetY-this.y,this.velocityX=this.distanceX/this.time,this.velocityY=this.distanceY/this.time,r&&a){let c=r-this.x,u=a-this.y,o=Math.sqrt(c**2+u**2),i=n/o;i=i>7?7:i;let s=Math.atan2(u,c),d=Math.cos(s),g=Math.sin(s),f=d*i*-l,p=g*i*-l;this.velocityX+=f,this.velocityY+=p}this.x+=this.velocityX,this.y+=this.velocityY,this.opacity<1&&(this.opacity+=Ie)}change(n,l,r){this.targetX=n,this.targetY=l,this.colors=r}}const j=30;class Ee{constructor(n,l,r){this.radius=l,this.strength=r,this.canvasEle=n,this.ctx=n.getContext("2d"),this.width=n.width,this.height=n.height,this.particleArr=[],this.canvasEle.onmouseleave=()=>{this.mouseX=0,this.mouseY=0}}changeImg(n){if(this.particleArr.length){let l=n.particleData,r=l.length,a=this.particleArr,c=a.length;for(let o=0;o<r;o++){const{targetX:i,targetY:s,colors:d}=l[o];a[o]?a[o].change(i,s,d):a[o]=new X(this.width,this.height,i,s,j,this.radius,d)}r<c&&(this.particleArr=a.splice(0,r)),a=this.particleArr;let u=a.length;for(;u;){let o=~~(Math.random()*u--),i=a[o],{targetX:s,targetY:d,colors:g}=i;i.targetX=a[u].targetX,i.targetY=a[u].targetY,i.colors=a[u].colors,a[u].targetX=s,a[u].targetY=d,a[u].colors=g}}else this.particleArr=n.particleData.map(l=>new X(this.width,this.height,l.targetX,l.targetY,j,this.radius,l.colors))}drawCanvas(){this.ctx.clearRect(0,0,this.width,this.height),this.particleArr.forEach(n=>{n.update(30,this.strength,this.mouseX,this.mouseY),n.draw(this.ctx)}),this.requestID=window.requestAnimationFrame(()=>this.drawCanvas())}}const De=30;class v{constructor(n,l,r,a){this.src=n,this.width=l,this.height=r,this.particleData=[],this.radius=a}createParticleData(n=this.src){return new Promise((l,r)=>{let a=new Image;a.crossOrigin="",a.src=decodeURI(new URL(n,document.currentScript&&document.currentScript.src||new URL("fast-dataview-ui.iife.js",document.baseURI).href).href),a.onload=()=>{const c=document.createElement("canvas"),u=c.getContext("2d"),o=this.width,i=this.height;c.width=o,c.height=i,u==null||u.drawImage(a,0,0,o,i);const s=u==null?void 0:u.getImageData(0,0,o,i).data;u==null||u.clearRect(0,0,this.width,this.height);for(let d=0;d<i;d+=5)for(let g=0;g<o;g+=5){const f=(g+d*o)*4,p=s[f+3];if(p==0)continue;const h=s[f],m=s[f+1],y=s[f+2];if(h+m+y+p){const V=new X(this.width,this.height,g,d,De,this.radius,`rgba(${h},${m},${y},${p})`);this.particleData.push(V)}}l(this.particleData)},a.onerror=()=>{r("图片转化成粒子失败")}})}}const Ve=["width","height"],O=t.defineComponent({name:"index",props:Ne,setup(e,{expose:n}){const l=e;let r=t.inject("scaleX",t.ref(1)),a=t.inject("scaleY",t.ref(1));const c=t.ref(null),u=t.ref(null);let o=t.ref(),i=t.ref();const s=async g=>{i.value=new v(g,l.width,l.height,l.radius),await i.value.createParticleData(),o.value.changeImg(i.value)},d=async()=>{i.value=new v(l.src,l.width,l.height,l.radius),await i.value.createParticleData(),c.value&&(u.value=c.value.getContext("2d"),o.value=new Ee(c.value,l.radius,l.strength),c.value.addEventListener("mousemove",g=>{const{left:f,top:p}=c.value.getBoundingClientRect(),{clientX:h,clientY:m}=g;o.value.mouseX=(h-f)*(1/r.value),o.value.mouseY=(m-p)*(1/a.value)}),o.value.drawCanvas(),o.value.changeImg(i.value))};return t.onMounted(()=>{d()}),n({toggleImg:s}),(g,f)=>(t.openBlock(),t.createElementBlock("div",null,[t.createElementVNode("canvas",{ref_key:"canvasRef",ref:c,width:l.width,height:l.height},null,8,Ve)]))}});O.install=function(e){e.component("FDynamicParticle",O)};const Te={title:"particle 粒子",category:"粒子",status:"20%",install(e){e.use(O)}};function ze(e){return{handleToggle:l=>{e.emit("handleToggle",l)}}}function Oe(e,n,l){const{handleToggle:r}=ze(l),a=h=>{let m=pe(h);return K(m)},c=t.computed(()=>{if(n.mode==="page")return e.pageData[e.currPage-1]||[];if(n.mode==="single")return e.currData||[]}),u=()=>{if(n.mode==="page")if(e.tableData.length){let h=[],m=Math.ceil(e.tableData.length/n.pageSize);for(let y=1;y<=m;y++){let b=e.tableData.slice(y*n.pageSize-n.pageSize,y*n.pageSize);h.push(b)}e.pageData=h,h[e.currPage-1]||(e.currPage=1,e.toggleCount+=1,e.toggleCount>=n.emitCondition&&r(n.name))}else e.pageData=[[]],e.currPage=1,e.toggleCount=0,r(n.name)},o=()=>{e.intervalId===null&&!e.isStopToggle&&n.mode==="page"&&(e.intervalId=setInterval(()=>{e.pageData[e.currPage]?e.currPage+=1:(e.currPage=1,e.toggleCount+=1,e.toggleCount>=n.emitCondition&&r(n.name))},n.toggleDur))},i=(h=1)=>{f(),e.currPage=h,o()},s=async(h,m=1,y=[])=>{console.log("shiftLen",m),console.log("arr",h),h.push(...y),await new Promise(b=>setTimeout(b,300));for(let b=0;b<m;b++)h[b]={};h.splice(0,m)},d=async()=>{if(n.mode==="single")if(e.tableData.length){const h=Math.ceil((e.tableData.length-n.pageSize)/n.togglePage)+1;if(h===1&&(console.log("1"),e.currPage=1,e.toggleCount+=1,s(e.currData,n.pageSize,e.tableData.slice()),e.toggleCount>=n.emitCondition&&r(n.name)),h!==1&&e.currPage<=h&&(console.log("2"),e.currPage===1?(console.log("2-1"),e.currData=e.tableData.slice(0,n.pageSize)):(console.log("2-2"),console.log("start",n.pageSize-1+(e.currPage-2)*n.togglePage+1),console.log("end",n.pageSize-1+(e.currPage-1)*n.togglePage+1),s(e.currData,n.togglePage,e.tableData.slice(n.pageSize-1+(e.currPage-2)*n.togglePage+1,n.pageSize-1+(e.currPage-1)*n.togglePage+1)))),e.currPage>h){console.log("3"),e.currPage=1,e.toggleCount+=1,e.toggleCount>=n.emitCondition&&r(n.name),d();return}}else e.rowsHeight=[],e.currData=[],e.currPage=1,e.toggleCount=0,r(n.name)},g=()=>{e.intervalId===null&&!e.isStopToggle&&n.mode==="single"&&(e.intervalId=setInterval(()=>{e.currPage+=1,d()},n.toggleDur))},f=()=>{e.intervalId&&(clearInterval(e.intervalId),e.intervalId=null)};return{deepCloneArr:a,getCurrData:c,setPageData:u,setPageTimer:o,setPage:i,setCurrData:d,setToggleTimer:g,clearTimer:f,setIndex:h=>{h.map((m,y)=>m._index_=y+1)}}}function Ae(e,n){const l=t.computed(()=>function(o,i){const s=["f-scroll-table_row"];return n.stripe&&i%2===1&&s.push("f-scroll-table_row--striped"),n.wrap&&s.push("f-scroll-table_row--nowrap"),s}),r=t.computed(()=>{const o=["cell"];return n.wrap||o.push("cell--nowrap"),o}),a=t.computed(()=>({})),c=t.computed(()=>function(o){return{"max-height":e.rowsHeight[o]||"auto"}}),u=t.computed(()=>function(o,i,s,d){return typeof n.cellStyle=="function"?n.cellStyle.call(null,{rowIndex:s,columnIndex:d,row:o,column:i}):n.cellStyle||{}});return{getRowClass:l,getCellClass:r,getBodyStyle:a,getRowStyle:c,getCellStyle:u}}const Re={class:"f-scroll-table_header-wrapper"},We={class:"f-scroll-table_header",cellspacing:"0",cellpadding:"0",border:"0"},Le=["width"],He={class:"cell"},Fe={class:"f-scroll-table_body",cellspacing:"0",cellpadding:"0",border:"0"},Xe=["width"],A=t.defineComponent({name:"index",props:{name:{default:""},data:{default:()=>[]},columns:{default:()=>[]},border:{type:Boolean,default:!0},stripe:{type:Boolean,default:!0},wrap:{type:Boolean,default:!0},maxHeight:{default:"auto"},cellStyle:null,mode:{default:"single"},pageSize:{default:5},togglePage:{default:1},toggleDur:{default:5*1e3},emitCondition:{default:2}},setup(e,{expose:n}){const l=e,r=t.reactive({tableData:[],currData:[],pageData:[],currPage:1,toggleCount:0,intervalId:null,isStopToggle:!1,isAnimate:!1,rowsHeight:[]}),a=t.getCurrentInstance(),{deepCloneArr:c,getCurrData:u,setPageData:o,setPageTimer:i,setCurrData:s,setToggleTimer:d,setPage:g,setIndex:f}=Oe(r,l,a),{getRowClass:p,getCellClass:h,getBodyStyle:m,getRowStyle:y,getCellStyle:b}=Ae(r,l);return t.watch(()=>l.data,V=>{r.tableData=c(V),f(r.tableData),o(),i(),s(),d()}),n({setPage:g}),(V,ve)=>(t.openBlock(),t.createElementBlock("div",{ref:"scrollTable",class:t.normalizeClass(["f-scroll-table",{"f-scroll-table--border":l.border}])},[t.createElementVNode("div",Re,[t.createElementVNode("table",We,[t.createElementVNode("colgroup",null,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(l.columns,(w,_)=>(t.openBlock(),t.createElementBlock("col",{width:w.width,key:_},null,8,Le))),128))]),t.createElementVNode("thead",null,[t.createElementVNode("tr",null,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(l.columns,(w,_)=>(t.openBlock(),t.createElementBlock("td",{class:"f-scroll-table_cell",style:t.normalizeStyle({"max-width":w.width}),key:_},[t.createElementVNode("div",He,t.toDisplayString(w.label),1)],4))),128))])])])]),t.createElementVNode("div",{class:"f-scroll-table_body-wrapper is-hidden-scrollbar",ref:"bodyWrapper",style:t.normalizeStyle(t.unref(m))},[t.createElementVNode("table",Fe,[t.createElementVNode("colgroup",null,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(l.columns,(w,_)=>(t.openBlock(),t.createElementBlock("col",{width:w.width,key:_},null,8,Xe))),128))]),t.createVNode(t.TransitionGroup,{tag:"tbody",name:"fade",class:"f-scroll-table_body-inner"},{default:t.withCtx(()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(u),(w,_)=>(t.openBlock(),t.createElementBlock("tr",{class:t.normalizeClass(t.unref(p)(w,_)),key:w},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(l.columns,(x,Y)=>(t.openBlock(),t.createElementBlock("td",{class:"f-scroll-table_cell is-hidden-scrollbar",style:t.normalizeStyle({width:x.width,"max-width":x.width}),key:Y},[x.slot?(t.openBlock(),t.createElementBlock("div",{key:0,class:t.normalizeClass(t.unref(h))},[t.renderSlot(V.$slots,x.slot,{params:{row:w,column:x.prop,$index:_}})],2)):x.type=="index"?(t.openBlock(),t.createElementBlock("div",{key:1,class:t.normalizeClass(t.unref(h)),style:t.normalizeStyle(t.unref(b)(w,x.prop,_,Y))},t.toDisplayString(w._index_),7)):(t.openBlock(),t.createElementBlock("div",{key:2,class:t.normalizeClass(t.unref(h)),style:t.normalizeStyle(t.unref(b)(w,x.prop,_,Y))},t.toDisplayString(w[x.prop]),7))],4))),128))],2))),128))]),_:3})])],4)],2))}});A.install=function(e){e.component("FScrollTable",A)};const Ye={title:"scrollTable 滚动表格",category:"数据展示",status:"20%",install(e){e.use(A)}},R=t.defineComponent({name:"index",props:{type:{default:"default"},direction:{default:"up"},speed:{default:60}},setup(e){const n=e,l=t.ref(),r=t.ref(),a=t.computed(()=>{var f,p,h,m;let c=((f=l.value)==null?void 0:f.offsetWidth)||0,u=((p=l.value)==null?void 0:p.offsetHeight)||0,o=((h=r.value)==null?void 0:h.offsetWidth)||0,i=((m=r.value)==null?void 0:m.offsetHeight)||0,s,d,g;return["up","down"].includes(n.direction)&&(s=u+i,d=s/n.speed||0,g=`up-scroll linear ${d}s infinite ${n.direction==="down"?"reverse":""}`),["left","right"].includes(n.direction)&&(s=c+o,d=s/n.speed||0,g=`left-scroll linear ${d}s infinite ${n.direction==="right"?"reverse":""}`),{"--text-scroll-width":`${c}px`,"--text-scroll-height":`${u}px`,animation:g}});return(c,u)=>(t.openBlock(),t.createElementBlock("div",{ref_key:"scrollText",ref:l,class:t.normalizeClass(["f-scroll-text",`f-scroll-text--${n.type}`])},[t.createElementVNode("div",{ref_key:"textContent",ref:r,class:"text-content",style:t.normalizeStyle(t.unref(a))},[t.renderSlot(c.$slots,"default")],4)],2))}});R.install=function(e){e.component("FScrollText",R)};const Me={title:"border 边框",category:"边框",status:"20%",install(e){e.use(R)}},Qe=t.defineComponent({name:"FProgress",props:{percent:{type:Number,default:0},color:{type:Array,default:()=>[]},duration:{type:Number,default:.5}},setup(e,{slots:n}){const l=["#d1d5db","#3b82f6","white"];let r=t.computed(()=>P(e.color)?k(l,e.color):l);return{getProgressStyle:t.computed(()=>({"--bgc":r.value[0],"--progress-color":r.value[1],"--progress-text-color":r.value[2],"--duration":`${e.duration}s`}))}}});function Ue(e,n,l,r,a,c){return t.openBlock(),t.createElementBlock("div",{class:"f-progress",style:t.normalizeStyle(e.getProgressStyle)},[t.createElementVNode("div",{class:"progress-inner",style:t.normalizeStyle({width:`${e.percent}%`})},[t.renderSlot(e.$slots,"default",{percent:e.percent},()=>[t.createElementVNode("span",null,t.toDisplayString(e.percent?`${e.percent}%`:""),1)])],4)],4)}const D=J(Qe,[["render",Ue]]);D.install=function(e){e.component(D.name,D)};const Ge=[te,ye,we,$e,Se,Be,Te,Ye,Me,{title:"progress 进度条",category:"进度条",status:"20%",install(e){e.use(D)}}],qe={version:"1.0.12",install(e){Ge.forEach(n=>e.use(n))}};$.BorderBox1=B,$.BorderBox2=N,$.DynamicParticle=O,$.Icon=S,$.Loading1=I,$.Loading2=E,$.Progress=D,$.ScreenContainer=z,$.ScrollTable=A,$.ScrollText=R,$.default=qe,Object.defineProperties($,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})(this["fast-dataview-ui"]=this["fast-dataview-ui"]||{},Vue);
