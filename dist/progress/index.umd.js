(function(r,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(r=typeof globalThis<"u"?globalThis:r||self,t(r.index=r.index||{},r.Vue))})(this,function(r,t){"use strict";const c=Object.assign,d=e=>Array.isArray(e)&&e.length,a=t.defineComponent({name:"FProgress",props:{percent:{type:Number,default:0},color:{type:Array,default:()=>[]},duration:{type:Number,default:.5}},setup(e,{slots:l}){const n=["#d1d5db","#3b82f6","white"];let o=t.computed(()=>d(e.color)?c(n,e.color):n);return{getProgressStyle:t.computed(()=>({"--bgc":o.value[0],"--progress-color":o.value[1],"--progress-text-color":o.value[2],"--duration":`${e.duration}s`}))}}}),u=(e,l)=>{const n=e.__vccOpts||e;for(const[o,i]of l)n[o]=i;return n};function p(e,l,n,o,i,y){return t.openBlock(),t.createElementBlock("div",{class:"f-progress",style:t.normalizeStyle(e.getProgressStyle)},[t.createElementVNode("div",{class:"progress-inner",style:t.normalizeStyle({width:`${e.percent}%`})},[t.renderSlot(e.$slots,"default",{percent:e.percent},()=>[t.createElementVNode("span",null,t.toDisplayString(e.percent?`${e.percent}%`:""),1)])],4)],4)}const s=u(a,[["render",p]]);s.install=function(e){e.component(s.name,s)};const f={title:"progress 进度条",category:"进度条",status:"20%",install(e){e.use(s)}};r.Progress=s,r.default=f,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
