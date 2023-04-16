import{V as t,_ as B,c as f,a as u,w as y,b as g,r as m,o as S,p as b,d as k,e as l,f as s}from"./app.ba466f21.js";const{defineComponent:x}=t,R=x({name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:a,openBlock:F,createBlock:r}=t;function D(o,e){const c=a("FScrollRank");return F(),r(c,{data:o.state.data,pageSize:5,togglePage:5,maxValue:3500,order:"reverse"},null,8,["data"])}const{defineComponent:p}=t,{reactive:n}=t;return{render:D,...p({setup(o,{expose:e}){e();const A={state:n({data:[{name:"\u540D\u79F0A",value:200},{name:"\u540D\u79F0B",value:1200},{name:"\u540D\u79F0C",value:3200},{name:"\u540D\u79F0D",value:100},{name:"\u540D\u79F0E",value:400},{name:"\u540D\u79F0F",value:300},{name:"\u540D\u79F0G",value:1e3},{name:"\u540D\u79F0H",value:500},{name:"\u540D\u79F0I",value:1500},{name:"\u540D\u79F0J",value:2500}]}),reactive:n};return Object.defineProperty(A,"__isScriptSetup",{enumerable:!1,value:!0}),A}})}}(),"render-demo-1":function(){const{resolveComponent:a,openBlock:F,createBlock:r}=t;function D(o,e){const c=a("FScrollRank");return F(),r(c,{data:o.state.data,pageSize:5,togglePage:5,valueFormatter:o.valueFormatter},null,8,["data","valueFormatter"])}const{defineComponent:p}=t,{reactive:n}=t;return{render:D,...p({setup(o,{expose:e}){e();const E={state:n({data:[{name:"\u540D\u79F0A",value:200},{name:"\u540D\u79F0B",value:1200},{name:"\u540D\u79F0C",value:3200},{name:"\u540D\u79F0D",value:100},{name:"\u540D\u79F0E",value:400},{name:"\u540D\u79F0F",value:300},{name:"\u540D\u79F0G",value:1e3},{name:"\u540D\u79F0H",value:500},{name:"\u540D\u79F0I",value:1500},{name:"\u540D\u79F0J",value:2500}]}),valueFormatter:({name:J,value:h,maxValue:G,index:H})=>{let v=(h+"").split("").reverse();if(v.length<=3)return h;let i="";for(;v.length;){const _=v.splice(0,3).join("");i+=_,_.length===3&&(i+=",")}return i.split("").reverse().join("")},reactive:n};return Object.defineProperty(E,"__isScriptSetup",{enumerable:!1,value:!0}),E}})}}()}}),O=JSON.parse('{"title":"ScrollRank \u8F6E\u64AD\u6392\u540D\u8868\u683C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5","link":"#\u57FA\u7840\u7528\u6CD5","children":[]},{"level":2,"title":"\u683C\u5F0F\u5316\u6570\u503C","slug":"\u683C\u5F0F\u5316\u6570\u503C","link":"#\u683C\u5F0F\u5316\u6570\u503C","children":[]},{"level":2,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":2,"title":"DataItem\u5C5E\u6027","slug":"dataitem\u5C5E\u6027","link":"#dataitem\u5C5E\u6027","children":[]}],"relativePath":"components/scrollRank.md","lastUpdated":null}');const C=a=>(b("data-v-4019c79c"),a=a(),k(),a),I=g('<h1 id="scrollrank-\u8F6E\u64AD\u6392\u540D\u8868\u683C" tabindex="-1" data-v-4019c79c>ScrollRank \u8F6E\u64AD\u6392\u540D\u8868\u683C <a class="header-anchor" href="#scrollrank-\u8F6E\u64AD\u6392\u540D\u8868\u683C" aria-hidden="true" data-v-4019c79c>#</a></h1><p data-v-4019c79c>\u7528\u4E8E\u5C55\u793A\u4EFB\u52A1\u5B8C\u6210\u7684\u767E\u5206\u6BD4\u4EE5\u53CA\u6570\u503C\u7684\u6392\u540D\u3002</p><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1" data-v-4019c79c>\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true" data-v-4019c79c>#</a></h2><p data-v-4019c79c><code data-v-4019c79c>data</code>\u5C5E\u6027\u4E3A\u6392\u540D\u8868\u683C\u7684\u6570\u636E\uFF0C\u63A5\u53D7<a href="#dataItem" data-v-4019c79c>DataItem</a>\u7C7B\u578B\uFF0C<code data-v-4019c79c>pageSize</code>\u6BCF\u9875\u5927\u5C0F\uFF0C<code data-v-4019c79c>togglePage</code>\u6BCF\u6B21\u7FFB\u9875\u5207\u6362\u591A\u5C11\u6761\u6570\u636E\uFF0C<code data-v-4019c79c>maxValue</code>\u6700\u5927\u503C\uFF0C\u5982\u679C\u4E0D\u586B\uFF0C\u9ED8\u8BA4\u53D6data\u4E2D\u7684\u6700\u5927value\uFF0C<code data-v-4019c79c>order</code>\u6392\u5E8F\u6A21\u5F0F</p>',4),V=C(()=>l("div",{class:"language-vue"},[l("pre",{"v-pre":"",class:"shiki"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#FFCB6B"}},"FScrollRank"),l("span",{style:{color:"#89DDFF"}}," :"),l("span",{style:{color:"#C792EA"}},"data"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#A6ACCD"}},"state"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"data"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," :"),l("span",{style:{color:"#C792EA"}},"pageSize"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#F78C6C"}},"5"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," :"),l("span",{style:{color:"#C792EA"}},"togglePage"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#F78C6C"}},"5"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," :"),l("span",{style:{color:"#C792EA"}},"maxValue"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#F78C6C"}},"3500"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"order"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"reverse"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},"></"),l("span",{style:{color:"#FFCB6B"}},"FScrollRank"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"lang"),l("span",{style:{color:"#A6ACCD"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"ts"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"setup"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"import"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"reactive"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"from"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"vue"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C792EA"}},"let"),l("span",{style:{color:"#A6ACCD"}}," state "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"reactive"),l("span",{style:{color:"#A6ACCD"}},"("),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#F07178"}},"data"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#A6ACCD"}},"[")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}},"name"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"\u540D\u79F0A"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F07178"}},"value"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F78C6C"}},"200"),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}},"name"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"\u540D\u79F0B"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F07178"}},"value"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F78C6C"}},"1200"),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}},"name"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"\u540D\u79F0C"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F07178"}},"value"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F78C6C"}},"3200"),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}},"name"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"\u540D\u79F0D"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F07178"}},"value"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F78C6C"}},"100"),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}},"name"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"\u540D\u79F0E"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F07178"}},"value"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F78C6C"}},"400"),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}},"name"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"\u540D\u79F0F"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F07178"}},"value"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F78C6C"}},"300"),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}},"name"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"\u540D\u79F0G"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F07178"}},"value"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F78C6C"}},"1000"),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}},"name"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"\u540D\u79F0H"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F07178"}},"value"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F78C6C"}},"500"),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}},"name"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"\u540D\u79F0I"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F07178"}},"value"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F78C6C"}},"1500"),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}},"name"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"\u540D\u79F0J"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F07178"}},"value"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F78C6C"}},"2500"),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#A6ACCD"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"})])])],-1)),N=C(()=>l("h2",{id:"\u683C\u5F0F\u5316\u6570\u503C",tabindex:"-1"},[s("\u683C\u5F0F\u5316\u6570\u503C "),l("a",{class:"header-anchor",href:"#\u683C\u5F0F\u5316\u6570\u503C","aria-hidden":"true"},"#")],-1)),P=C(()=>l("p",null,[l("code",null,"valueFormatter"),s("\u8FDB\u884C\u6570\u503C\u683C\u5F0F\u5316\uFF0C\u63A5\u53D7\u4E00\u4E2A\u51FD\u6570\uFF0C\u53C2\u6570\u4E3Aname,value,maxValue,index")],-1)),w=C(()=>l("div",{class:"language-vue"},[l("pre",{"v-pre":"",class:"shiki"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#FFCB6B"}},"FScrollRank"),l("span",{style:{color:"#89DDFF"}}," :"),l("span",{style:{color:"#C792EA"}},"data"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#A6ACCD"}},"state"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"data"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," :"),l("span",{style:{color:"#C792EA"}},"pageSize"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#F78C6C"}},"5"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," :"),l("span",{style:{color:"#C792EA"}},"togglePage"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#F78C6C"}},"5"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," :"),l("span",{style:{color:"#C792EA"}},"valueFormatter"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#A6ACCD"}},"valueFormatter"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},"></"),l("span",{style:{color:"#FFCB6B"}},"FScrollRank"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"lang"),l("span",{style:{color:"#A6ACCD"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"ts"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"setup"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"import"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"reactive"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"from"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"vue"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C792EA"}},"let"),l("span",{style:{color:"#A6ACCD"}}," state "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"reactive"),l("span",{style:{color:"#A6ACCD"}},"("),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#F07178"}},"data"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#A6ACCD"}},"[")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}},"name"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"\u540D\u79F0A"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F07178"}},"value"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F78C6C"}},"200"),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}},"name"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"\u540D\u79F0B"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F07178"}},"value"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F78C6C"}},"1200"),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}},"name"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"\u540D\u79F0C"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F07178"}},"value"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F78C6C"}},"3200"),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}},"name"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"\u540D\u79F0D"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F07178"}},"value"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F78C6C"}},"100"),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}},"name"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"\u540D\u79F0E"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F07178"}},"value"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F78C6C"}},"400"),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}},"name"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"\u540D\u79F0F"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F07178"}},"value"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F78C6C"}},"300"),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}},"name"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"\u540D\u79F0G"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F07178"}},"value"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F78C6C"}},"1000"),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}},"name"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"\u540D\u79F0H"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F07178"}},"value"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F78C6C"}},"500"),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}},"name"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"\u540D\u79F0I"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F07178"}},"value"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F78C6C"}},"1500"),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}},"name"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"\u540D\u79F0J"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F07178"}},"value"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F78C6C"}},"2500"),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#A6ACCD"}},")")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C792EA"}},"const"),l("span",{style:{color:"#A6ACCD"}}," valueFormatter "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"({"),l("span",{style:{color:"#A6ACCD"}},"name"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}},"value"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}},"maxValue"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}},"index"),l("span",{style:{color:"#89DDFF"}},"})"),l("span",{style:{color:"#C792EA"}},"=>"),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#C792EA"}},"let"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"reverseNumber"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}}," ("),l("span",{style:{color:"#A6ACCD"}},"value"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"+"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"''"),l("span",{style:{color:"#F07178"}},")"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"split"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#89DDFF"}},"''"),l("span",{style:{color:"#F07178"}},")"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"reverse"),l("span",{style:{color:"#F07178"}},"()")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF"}},"if"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#A6ACCD"}},"reverseNumber"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"length"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"<="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#F78C6C"}},"3"),l("span",{style:{color:"#F07178"}},")"),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"     "),l("span",{style:{color:"#89DDFF"}},"return"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"value")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#C792EA"}},"let"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"valueStr"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"''")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF"}},"while"),l("span",{style:{color:"#F07178"}}," ("),l("span",{style:{color:"#A6ACCD"}},"reverseNumber"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"length"),l("span",{style:{color:"#F07178"}},") "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#C792EA"}},"const"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"seg"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"reverseNumber"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"splice"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#F78C6C"}},"0"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#F78C6C"}},"3"),l("span",{style:{color:"#F07178"}},")"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"join"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#89DDFF"}},"''"),l("span",{style:{color:"#F07178"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#A6ACCD"}},"valueStr"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"+="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"seg")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#89DDFF"}},"if"),l("span",{style:{color:"#F07178"}}," ("),l("span",{style:{color:"#A6ACCD"}},"seg"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"length"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"==="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#F78C6C"}},"3"),l("span",{style:{color:"#F07178"}},") "),l("span",{style:{color:"#A6ACCD"}},"valueStr"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"+="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},","),l("span",{style:{color:"#89DDFF"}},"'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF"}},"return"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"valueStr"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"split"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#89DDFF"}},"''"),l("span",{style:{color:"#F07178"}},")"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"reverse"),l("span",{style:{color:"#F07178"}},"()"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"join"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#89DDFF"}},"''"),l("span",{style:{color:"#F07178"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"  "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"})])])],-1)),j=g('<h2 id="\u53C2\u6570" tabindex="-1" data-v-4019c79c>\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true" data-v-4019c79c>#</a></h2><table data-v-4019c79c><thead data-v-4019c79c><tr data-v-4019c79c><th data-v-4019c79c>\u53C2\u6570\u540D</th><th data-v-4019c79c>\u8BF4\u660E</th><th data-v-4019c79c>\u7C7B\u578B</th><th data-v-4019c79c>\u53EF\u9009\u503C</th><th data-v-4019c79c>\u9ED8\u8BA4\u503C</th></tr></thead><tbody data-v-4019c79c><tr data-v-4019c79c><td data-v-4019c79c>data</td><td data-v-4019c79c>\u6392\u540D\u8868\u683C\u7684\u6570\u636E</td><td data-v-4019c79c><a href="#dataItem" data-v-4019c79c>DataItem[]</a></td><td data-v-4019c79c>-</td><td data-v-4019c79c></td></tr><tr data-v-4019c79c><td data-v-4019c79c>pageSize</td><td data-v-4019c79c>\u6BCF\u9875\u7684\u5927\u5C0F</td><td data-v-4019c79c>number</td><td data-v-4019c79c>-</td><td data-v-4019c79c>5</td></tr><tr data-v-4019c79c><td data-v-4019c79c>togglePage</td><td data-v-4019c79c>\u6BCF\u6B21\u7FFB\u9875\u591A\u5C11\u6761\u6570\u636E</td><td data-v-4019c79c>number</td><td data-v-4019c79c>-</td><td data-v-4019c79c>3</td></tr><tr data-v-4019c79c><td data-v-4019c79c>toggleDur</td><td data-v-4019c79c>\u7FFB\u9875\u95F4\u9694(\u6BEB\u79D2)</td><td data-v-4019c79c>number</td><td data-v-4019c79c>-</td><td data-v-4019c79c>3 * 1000</td></tr><tr data-v-4019c79c><td data-v-4019c79c>toggleDuration</td><td data-v-4019c79c>\u7FFB\u9875\u52A8\u753B\u7684\u65F6\u957F(\u6BEB\u79D2)</td><td data-v-4019c79c>number</td><td data-v-4019c79c>-</td><td data-v-4019c79c>500</td></tr><tr data-v-4019c79c><td data-v-4019c79c>maxValue</td><td data-v-4019c79c>\u6700\u5927\u503C\uFF0C\u5982\u679C\u4E0D\u8BBE\u7F6E\uFF0C\u81EA\u52A8\u53D6data\u91CC\u7684\u6700\u5927\u503C</td><td data-v-4019c79c>number</td><td data-v-4019c79c>-</td><td data-v-4019c79c>500</td></tr><tr data-v-4019c79c><td data-v-4019c79c>valueFormatter</td><td data-v-4019c79c>\u5BF9data\u4E2D\u7684value\u6570\u503C\u683C\u5F0F\u5316\uFF0C\u53C2\u6570name,value,<br data-v-4019c79c>maxValue,index</td><td data-v-4019c79c>Function</td><td data-v-4019c79c>-</td><td data-v-4019c79c>500</td></tr><tr data-v-4019c79c><td data-v-4019c79c>order</td><td data-v-4019c79c>\u6392\u5217\u987A\u5E8F\uFF08normal\u6B63\u5E8F\uFF0Creverse\u5012\u5E8F,default\u4E0D\u6392\u5E8F\uFF09</td><td data-v-4019c79c>string</td><td data-v-4019c79c>default,reverse,normal</td><td data-v-4019c79c>reverse</td></tr><tr data-v-4019c79c><td data-v-4019c79c>showRank</td><td data-v-4019c79c>\u662F\u5426\u5C55\u793A\u6392\u540D</td><td data-v-4019c79c>boolean</td><td data-v-4019c79c>-</td><td data-v-4019c79c>true</td></tr><tr data-v-4019c79c><td data-v-4019c79c>showPercent</td><td data-v-4019c79c>\u662F\u5426\u5C55\u793A\u767E\u5206\u6BD4</td><td data-v-4019c79c>boolean</td><td data-v-4019c79c>-</td><td data-v-4019c79c>true</td></tr><tr data-v-4019c79c><td data-v-4019c79c>showRatio</td><td data-v-4019c79c>\u662F\u5426\u6BD4\u4F8B</td><td data-v-4019c79c>boolean</td><td data-v-4019c79c>-</td><td data-v-4019c79c>true</td></tr></tbody></table><p data-v-4019c79c><span id="dataItem" data-v-4019c79c></span></p><h2 id="dataitem\u5C5E\u6027" tabindex="-1" data-v-4019c79c>DataItem\u5C5E\u6027 <a class="header-anchor" href="#dataitem\u5C5E\u6027" aria-hidden="true" data-v-4019c79c>#</a></h2><table data-v-4019c79c><thead data-v-4019c79c><tr data-v-4019c79c><th data-v-4019c79c>\u53C2\u6570\u540D</th><th data-v-4019c79c>\u8BF4\u660E</th><th data-v-4019c79c>\u7C7B\u578B</th><th data-v-4019c79c>\u53EF\u9009\u503C</th><th data-v-4019c79c>\u9ED8\u8BA4\u503C</th></tr></thead><tbody data-v-4019c79c><tr data-v-4019c79c><td data-v-4019c79c>name</td><td data-v-4019c79c>\u7528\u4E8E\u5C55\u793A\u7684\u540D\u79F0</td><td data-v-4019c79c>string,number</td><td data-v-4019c79c>-</td><td data-v-4019c79c></td></tr><tr data-v-4019c79c><td data-v-4019c79c>value</td><td data-v-4019c79c>\u7528\u4E8E\u6392\u540D\u7684\u6570\u503C</td><td data-v-4019c79c>number</td><td data-v-4019c79c>-</td><td data-v-4019c79c></td></tr></tbody></table>',5);function z(a,F,r,D,p,n){const d=m("render-demo-0"),o=m("demo"),e=m("render-demo-1");return S(),f("div",null,[I,u(o,{customClass:"undefined",sourceCode:`<template>
  <FScrollRank :data="state.data" :pageSize="5" :togglePage="5" :maxValue="3500" order="reverse"></FScrollRank>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
let state = reactive({
  data:[
    {name:'\u540D\u79F0A', value:200},
    {name:'\u540D\u79F0B', value:1200},
    {name:'\u540D\u79F0C', value:3200},
    {name:'\u540D\u79F0D', value:100},
    {name:'\u540D\u79F0E', value:400},
    {name:'\u540D\u79F0F', value:300},
    {name:'\u540D\u79F0G', value:1000},
    {name:'\u540D\u79F0H', value:500},
    {name:'\u540D\u79F0I', value:1500},
    {name:'\u540D\u79F0J', value:2500},
  ]
})
<\/script>

`},{highlight:y(()=>[V]),default:y(()=>[u(d)]),_:1}),N,P,u(o,{customClass:"undefined",sourceCode:`<template>
  <FScrollRank :data="state.data" :pageSize="5" :togglePage="5" :valueFormatter="valueFormatter"></FScrollRank>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
let state = reactive({
  data:[
    {name:'\u540D\u79F0A', value:200},
    {name:'\u540D\u79F0B', value:1200},
    {name:'\u540D\u79F0C', value:3200},
    {name:'\u540D\u79F0D', value:100},
    {name:'\u540D\u79F0E', value:400},
    {name:'\u540D\u79F0F', value:300},
    {name:'\u540D\u79F0G', value:1000},
    {name:'\u540D\u79F0H', value:500},
    {name:'\u540D\u79F0I', value:1500},
    {name:'\u540D\u79F0J', value:2500},
  ]
})

const valueFormatter = ({name,value,maxValue,index})=>{
    let reverseNumber = (value + '').split('').reverse()
    if(reverseNumber.length <= 3){
     return value
    }
    let valueStr = ''
    while (reverseNumber.length) {
      const seg = reverseNumber.splice(0, 3).join('')
      valueStr += seg
      if (seg.length === 3) valueStr += ','
      }

    return valueStr.split('').reverse().join('')
  }
<\/script>

`},{highlight:y(()=>[w]),default:y(()=>[u(e)]),_:1}),j])}const T=B(R,[["render",z],["__scopeId","data-v-4019c79c"]]);export{O as __pageData,T as default};
