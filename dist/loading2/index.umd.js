(function(n,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(n=typeof globalThis<"u"?globalThis:n||self,t(n.index=n.index||{},n.Vue))})(this,function(n,t){"use strict";const a=Object.assign,s=e=>Array.isArray(e)&&e.length,c=t.defineComponent({name:"FLoading2",props:{width:{type:String,default:"100px"},height:{type:String,default:"100px"},color:{type:Array,default:()=>[]},text:{type:String,default:""},duration:{type:Number,default:.8}},setup(e,{slots:r}){const o=["#d1d5db","#3b82f6","#3b82f6"];let d=t.computed(()=>s(e.color)?a(o,e.color):o);return{getLoadingStyle:t.computed(()=>({width:e.width,height:e.height,color:d.value[2],"--border-color":d.value[0],"--border-top-color":d.value[1],"--duration":`${e.duration}s`}))}}}),u=(e,r)=>{const o=e.__vccOpts||e;for(const[d,l]of r)o[d]=l;return o},f=t.createElementVNode("div",{class:"f-loading-round"},null,-1),g={class:"loading-text"};function p(e,r,o,d,l,m){return t.openBlock(),t.createElementBlock("div",{class:"f-loading-2",style:t.normalizeStyle(e.getLoadingStyle)},[f,t.createElementVNode("div",g,[t.renderSlot(e.$slots,"default",{},()=>[t.createElementVNode("div",null,t.toDisplayString(e.text),1)])])],4)}const i=u(c,[["render",p]]);i.install=function(e){e.component(i.name,i)};const y={title:"loading 加载",category:"加载",status:"20%",install(e){e.use(i)}};n.Loading2=i,n.default=y,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});