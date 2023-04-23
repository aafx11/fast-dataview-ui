import{V as c,_ as P,c as I,a as y,w as d,b as E,r as m,o as V,p as N,d as L,e as s,f as l}from"./app.2d5903d4.js";const{defineComponent:S}=c,$=S({name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:e,openBlock:r,createBlock:a}=c;function p(n,o){const t=e("FDynamicParticle");return r(),a(t,{width:400,height:400,src:"/fast-dataview-ui/tree.png"})}return{render:p,...{}}}(),"render-demo-1":function(){const{resolveComponent:e,createVNode:r,createElementVNode:a,renderList:p,Fragment:C,openBlock:n,createElementBlock:o}=c,t={class:"canvas-wrap"},A={class:"img-list"},B=["src","onClick"];function f(D,g){const F=e("FDynamicParticle");return n(),o("div",null,[a("div",t,[r(F,{ref:"dynamicParticle",width:400,height:400,src:D.img},null,8,["src"])]),a("div",A,[(n(!0),o(C,null,p(D.imgList,(i,b)=>(n(),o("img",{class:"img-list__item",src:i,onClick:k=>D.clickImg(i)},null,8,B))),256))])])}const{defineComponent:w}=c,{ref:v,reactive:h}=c;return{render:f,...w({setup(D,{expose:g}){g();const F=v();let i=v("/fast-dataview-ui/sun.png");const b=h(["/fast-dataview-ui/sun.png","/fast-dataview-ui/rain.png","/fast-dataview-ui/thunder.png","/fast-dataview-ui/snowflake.png"]),_={dynamicParticle:F,img:i,imgList:b,clickImg:x=>{F.value.toggleImg(x)},ref:v,reactive:h};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}})}}()}}),K=JSON.parse('{"title":"Particle \u7C92\u5B50\u52A8\u6548","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5","link":"#\u57FA\u7840\u7528\u6CD5","children":[]},{"level":2,"title":"\u5207\u6362\u56FE\u7247","slug":"\u5207\u6362\u56FE\u7247","link":"#\u5207\u6362\u56FE\u7247","children":[]},{"level":2,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":2,"title":"\u65B9\u6CD5","slug":"\u65B9\u6CD5","link":"#\u65B9\u6CD5","children":[]}],"relativePath":"components/particle.md","lastUpdated":1681743412000}');const u=e=>(N("data-v-16176b8e"),e=e(),L(),e),j=E('<h1 id="particle-\u7C92\u5B50\u52A8\u6548" tabindex="-1" data-v-16176b8e>Particle \u7C92\u5B50\u52A8\u6548 <a class="header-anchor" href="#particle-\u7C92\u5B50\u52A8\u6548" aria-hidden="true" data-v-16176b8e>#</a></h1><p data-v-16176b8e>\u8BE5\u7EC4\u4EF6\u662F\u5C06\u56FE\u7247\u901A\u8FC7canvas\u8F6C\u5316\u6210\u7C92\u5B50\u52A8\u6548\u3002</p><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1" data-v-16176b8e>\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true" data-v-16176b8e>#</a></h2><p data-v-16176b8e><code data-v-16176b8e>width</code>\u548C<code data-v-16176b8e>height</code>\u5C5E\u6027\u5B9A\u4E49canvas\u7684\u5BBD\u9AD8\uFF0C<code data-v-16176b8e>src</code>\u5C5E\u6027\u8BBE\u7F6E\u56FE\u7247\u5730\u5740</p>',4),z=u(()=>s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"FDynamicParticle"),s("span",{style:{color:"#89DDFF"}}," :"),s("span",{style:{color:"#C792EA"}},"width"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"400"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," :"),s("span",{style:{color:"#C792EA"}},"height"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"400"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"/fast-dataview-ui/tree.png"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},"></"),s("span",{style:{color:"#FFCB6B"}},"FDynamicParticle"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"})])])],-1)),O=u(()=>s("h2",{id:"\u5207\u6362\u56FE\u7247",tabindex:"-1"},[l("\u5207\u6362\u56FE\u7247 "),s("a",{class:"header-anchor",href:"#\u5207\u6362\u56FE\u7247","aria-hidden":"true"},"#")],-1)),J=u(()=>s("p",null,[l("\u70B9\u51FB\u56FE\u7247\uFF0C\u8C03\u7528"),s("a",{href:"#method"},"toggleImg"),l("\u65B9\u6CD5\uFF0C\u5207\u6362\u56FE\u7247")],-1)),T=u(()=>s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"canvas-wrap"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"FDynamicParticle"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"ref"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"dynamicParticle"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," :"),s("span",{style:{color:"#C792EA"}},"width"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"400"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," :"),s("span",{style:{color:"#C792EA"}},"height"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"400"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," :"),s("span",{style:{color:"#C792EA"}},"src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}},"img"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},"></"),s("span",{style:{color:"#FFCB6B"}},"FDynamicParticle"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"img-list"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"img"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"v-for"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"item"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}},"index"),s("span",{style:{color:"#89DDFF"}},") in "),s("span",{style:{color:"#A6ACCD"}},"imgList"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"img-list__item"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," :"),s("span",{style:{color:"#C792EA"}},"src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}},"item"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," @"),s("span",{style:{color:"#C792EA"}},"click"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#82AAFF"}},"clickImg"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"item"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#A6ACCD"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"ts"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"setup"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"ref"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}},"reactive"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"vue"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," dynamicParticle "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#A6ACCD"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"let"),s("span",{style:{color:"#A6ACCD"}}," img "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"/fast-dataview-ui/sun.png"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#A6ACCD"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," imgList "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"reactive"),s("span",{style:{color:"#A6ACCD"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"/fast-dataview-ui/sun.png"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"/fast-dataview-ui/rain.png"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"/fast-dataview-ui/thunder.png"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"/fast-dataview-ui/snowflake.png"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," clickImg "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"src"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#FFCB6B"}},"string"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#A6ACCD"}},"dynamicParticle"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"value"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"toggleImg"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#A6ACCD"}},"src"),s("span",{style:{color:"#F07178"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"style"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#FFCB6B"}},"canvas-wrap"),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#B2CCD6"}},"display"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}},"flex"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#B2CCD6"}},"justify-content"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," center"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#B2CCD6"}},"align-items"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," center"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#FFCB6B"}},"img-list"),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#B2CCD6"}},"display"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}},"flex"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#B2CCD6"}},"width"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F78C6C"}},"100%"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#FFCB6B"}},"img-list__item"),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#B2CCD6"}},"width"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F78C6C"}},"25%"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#B2CCD6"}},"border"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F78C6C"}},"1px"),s("span",{style:{color:"#A6ACCD"}}," solid white"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#B2CCD6"}},"cursor"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," pointer"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#B2CCD6"}},"box-sizing"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," border-box"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#FFCB6B"}},"img-list__item"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#C792EA"}},"not"),s("span",{style:{color:"#89DDFF"}},"(:"),s("span",{style:{color:"#C792EA"}},"last-child"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#B2CCD6"}},"border-right-width"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"style"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"})])])],-1)),U=E('<h2 id="\u53C2\u6570" tabindex="-1" data-v-16176b8e>\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true" data-v-16176b8e>#</a></h2><table data-v-16176b8e><thead data-v-16176b8e><tr data-v-16176b8e><th data-v-16176b8e>\u53C2\u6570\u540D</th><th data-v-16176b8e>\u8BF4\u660E</th><th data-v-16176b8e>\u7C7B\u578B</th><th data-v-16176b8e>\u53EF\u9009\u503C</th><th data-v-16176b8e>\u9ED8\u8BA4\u503C</th></tr></thead><tbody data-v-16176b8e><tr data-v-16176b8e><td data-v-16176b8e>width</td><td data-v-16176b8e>canvas\u7684\u5BBD\u5EA6</td><td data-v-16176b8e>number</td><td data-v-16176b8e>-</td><td data-v-16176b8e>400</td></tr><tr data-v-16176b8e><td data-v-16176b8e>height</td><td data-v-16176b8e>canvas\u9AD8\u5EA6</td><td data-v-16176b8e>number</td><td data-v-16176b8e>-</td><td data-v-16176b8e>400</td></tr><tr data-v-16176b8e><td data-v-16176b8e>radius</td><td data-v-16176b8e>\u7C92\u5B50\u534A\u5F84</td><td data-v-16176b8e>number</td><td data-v-16176b8e>-</td><td data-v-16176b8e>1.2</td></tr><tr data-v-16176b8e><td data-v-16176b8e>strength</td><td data-v-16176b8e>\u5438\u5F15\u548C\u6392\u65A5\u7684\u529B\u5EA6</td><td data-v-16176b8e>number</td><td data-v-16176b8e>-</td><td data-v-16176b8e>2</td></tr><tr data-v-16176b8e><td data-v-16176b8e>src</td><td data-v-16176b8e>\u56FE\u7247\u7684\u8DEF\u5F84</td><td data-v-16176b8e>string</td><td data-v-16176b8e>-</td><td data-v-16176b8e></td></tr></tbody></table><p data-v-16176b8e><span id="method" data-v-16176b8e></span></p><h2 id="\u65B9\u6CD5" tabindex="-1" data-v-16176b8e>\u65B9\u6CD5 <a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true" data-v-16176b8e>#</a></h2><table data-v-16176b8e><thead data-v-16176b8e><tr data-v-16176b8e><th data-v-16176b8e>\u65B9\u6CD5\u540D</th><th data-v-16176b8e>\u7C7B\u578B</th><th data-v-16176b8e>\u8BF4\u660E</th></tr></thead><tbody data-v-16176b8e><tr data-v-16176b8e><td data-v-16176b8e>toggleImg</td><td data-v-16176b8e>(src:string) =&gt; void</td><td data-v-16176b8e>\u7528\u4E8E\u5207\u6362\u56FE\u7247,\u53C2\u6570\u662F\u56FE\u7247\u7684\u5730\u5740</td></tr></tbody></table>',5);function q(e,r,a,p,C,n){const o=m("render-demo-0"),t=m("demo"),A=m("render-demo-1");return V(),I("div",null,[j,y(t,{customClass:"undefined",sourceCode:`<template>
  <FDynamicParticle :width="400" :height="400" src="/fast-dataview-ui/tree.png"></FDynamicParticle>
</template>
`},{highlight:d(()=>[z]),default:d(()=>[y(o)]),_:1}),O,J,y(t,{customClass:"undefined",sourceCode:`<template>
  <div>
    <div class="canvas-wrap">
      <FDynamicParticle ref="dynamicParticle" :width="400" :height="400" :src="img"></FDynamicParticle>
    </div>
    <div class="img-list">
      <img v-for="(item,index) in imgList" class="img-list__item" :src="item" @click="clickImg(item)">
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref,reactive } from 'vue';
const dynamicParticle = ref()
let img = ref('/fast-dataview-ui/sun.png')
 
const imgList = reactive([
  '/fast-dataview-ui/sun.png',
  '/fast-dataview-ui/rain.png',
  '/fast-dataview-ui/thunder.png',
  '/fast-dataview-ui/snowflake.png',
])
const clickImg = (src:string) =>{
  dynamicParticle.value.toggleImg(src)
}
<\/script>
<style>
.canvas-wrap{
  display:flex;
  justify-content: center;
  align-items: center;
}
.img-list{
  display:flex;
  width:100%;
}
.img-list__item{
  width:25%;
  border:1px solid white;
  cursor: pointer;
  box-sizing: border-box;
}
.img-list__item:not(:last-child) {
  border-right-width: 0;
}

</style>
`},{highlight:d(()=>[T]),default:d(()=>[y(A)]),_:1}),U])}const M=P($,[["render",q],["__scopeId","data-v-16176b8e"]]);export{K as __pageData,M as default};
