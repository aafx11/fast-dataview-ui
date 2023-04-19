(function(r,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(r=typeof globalThis<"u"?globalThis:r||self,e(r.index=r.index||{},r.Vue))})(this,function(r,e){"use strict";const D={data:{type:Array,default:()=>[]},estimatedItemSize:{type:Number,required:!0},bufferScale:{type:Number,default:1},height:{type:String,default:"100%"},autoScroll:{type:Boolean,default:!1},scrollRow:{type:Number},scrollDistance:{type:Number},scrollInterval:{type:Number,default:100}},M=["id"],h=e.defineComponent({__name:"index",props:D,setup(m){const i=m,a=e.ref(null),_=e.ref(null),S=e.ref(null),d=e.ref(null),t=e.reactive({positions:[],screenHeight:0,start:0,end:0,isMouseHover:!1,intervalID:null});e.onBeforeMount(()=>{b()}),e.onMounted(()=>{t.screenHeight=a.value.clientHeight,t.start=0,t.end=t.start+v.value,I(),N()}),e.onUpdated(()=>{e.nextTick(()=>{var o,s;if(!d.value||!((o=d.value)!=null&&o.length))return;T();let l=(s=t.positions.at(-1))==null?void 0:s.bottom;_.value.style.height=`${l}px`,y()})}),e.onBeforeUnmount(()=>{L()}),e.watch(()=>i.data,()=>{b()});const b=()=>{t.positions=i.data.map((l,o)=>({index:o,height:i.estimatedItemSize,top:o*i.estimatedItemSize,bottom:(o+1)*i.estimatedItemSize}))},x=(l=0)=>B(t.positions,l),B=(l,o)=>{let s=0,c=l.length-1,n=null;for(;s<=c;){let f=parseInt((s+c)/2+""),u=l[f].bottom;if(u===o)return f+1;u<o?s=f+1:u>o&&((n===null||n>f)&&(n=f),c=c-1)}return n},H=e.computed(()=>i.data.map((l,o)=>({_index_:o,...l}))),v=e.computed(()=>Math.ceil(t.screenHeight/i.estimatedItemSize)),g=e.computed(()=>Math.min(t.start,i.bufferScale*v.value)),E=e.computed(()=>Math.min(i.data.length-t.end,i.bufferScale*v.value)),z=e.computed(()=>{let l=t.start-g.value,o=t.end+E.value;return H.value.slice(l,o)}),y=()=>{let l=0;if(t.start>=1){let o=t.positions[t.start].top-(t.positions[t.start-g.value]?t.positions[t.start-g.value].top:0);l=t.positions[t.start-1].bottom-o}else l=0;S.value.style.transform=`translate3d(0,${l}px,0)`},T=()=>{if(d.value)for(let l=0;l<d.value.length;l++){let o=d.value[l],c=o.getBoundingClientRect().height,n=+o.id,u=t.positions[n].height-c;if(u){t.positions[n].bottom=t.positions[n].bottom-u,t.positions[n].height=c;for(let p=n+1;p<t.positions.length;p++)t.positions[p].top=t.positions[p-1].bottom,t.positions[p].bottom=t.positions[p].bottom-u}}},V=()=>{let l=a.value.scrollTop;t.start=x(l),t.end=t.start+v.value,y()},I=()=>{t.intervalID===null&&i.autoScroll&&!t.isMouseHover&&(console.log("添加自动滚动"),t.intervalID=setInterval(()=>{if(a.value){let l=i.scrollDistance||t.positions[t.start].height;if(i.scrollDistance&&(l=i.scrollDistance),i.scrollRow){let o=0;for(let s=0;s<i.scrollRow;s++);l=o}a.value.scrollTo({top:a.value.scrollTop+l,behavior:"smooth"})}},i.scrollInterval))},L=()=>{t.intervalID&&(clearInterval(t.intervalID),t.intervalID=null)},N=()=>{a.value&&(a.value.addEventListener("mouseenter",()=>{L(),t.isMouseHover=!0}),a.value.addEventListener("mouseleave",()=>{t.isMouseHover=!1,I()}))};return(l,o)=>(e.openBlock(),e.createElementBlock("div",{class:"f-virtual-list",ref_key:"virtualList",ref:a,style:e.normalizeStyle({height:l.height}),onScroll:o[0]||(o[0]=s=>V())},[e.createElementVNode("div",{class:"f-virtual-list__space",ref_key:"virtualList__space",ref:_},null,512),e.createElementVNode("div",{class:"f-virtual-list__content",ref_key:"virtualList__content",ref:S},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(z),s=>(e.openBlock(),e.createElementBlock("div",{class:"f-virtual-list__item",ref_for:!0,ref_key:"virtualList__item",ref:d,id:`${s._index_}`},[e.renderSlot(l.$slots,"default",{ref_for:!0,ref:"slot",item:s})],8,M))),256))],512)],36))}});h.install=function(m){m.component("FVirtualList",h)};const k={title:"virtualList 虚拟列表",name:"virtualList",category:"数据展示",status:"100%",install(m){m.use(h)}};r.VirtualList=h,r.default=k,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
