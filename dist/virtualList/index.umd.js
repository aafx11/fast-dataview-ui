(function(e,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(e=typeof globalThis<"u"?globalThis:e||self,t(e.index=e.index||{},e.Vue))})(this,function(e,t){"use strict";const l={data:{type:Array,default:()=>[]},estimatedItemSize:{type:Number,required:!0},bufferScale:{type:Number,default:1},height:{type:String,default:"100%"}},a={class:"f-virtual-list__space",ref:"virtualList__space"},d={class:"f-virtual-list__content",ref:"virtualList__content"},u=[t.createElementVNode("div",null,null,-1)],n=t.defineComponent({__name:"index",props:l,setup(s){const o=s,f=t.ref(),m=t.reactive({positions:[],screenHeight:0,start:0,end:0});t.onBeforeMount(()=>{p()});const p=()=>{m.positions=o.data.map((r,i)=>({index:i,height:o.estimatedItemSize,top:i*o.estimatedItemSize,bottom:(i+1)*o.estimatedItemSize}))},_=()=>{};return(r,i)=>(t.openBlock(),t.createElementBlock("div",{class:"f-virtual-list",ref_key:"virtualList",ref:f,style:t.normalizeStyle({height:r.height}),onScroll:i[0]||(i[0]=y=>_())},[t.createElementVNode("div",a,null,512),t.createElementVNode("div",d,u,512)],36))}});n.install=function(s){s.component("FVirtualList",n)};const c={title:"VirtualList 虚拟列表",name:"virtualList",category:"数据展示",status:"100%",install(s){s.use(n)}};e.VirtualList=n,e.default=c,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
