var b=Object.defineProperty,h=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var u=(e,t,o)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,m=(e,t)=>{for(var o in t||(t={}))x.call(t,o)&&u(e,o,t[o]);if(p)for(var o of p(t))k.call(t,o)&&u(e,o,t[o]);return e},f=(e,t)=>h(e,J(t));import{C as $,M as g}from"./index-B_7TcIs1.js";import{c as w}from"./copyTextToClipboard-hMH5xuO5.js";import{a as M,c as B}from"./entry/index-B5t2Y4Xi-1715134498584.js";import{d as D,r as F,I as N,a7 as _,Z as A,_ as I,$ as C,k as r,a9 as v,G as y}from"./vue-COhTiP8A.js";import"./antd-D1Pawy5U.js";import"./useWindowSizeFn-XkyYhxEb.js";const O=D({name:"PreviewCode",components:{CodeEditor:$},props:{fileFormat:{type:String,default:"json"},editorJson:{type:String,default:""}},setup(e){const t=F({visible:!1}),o=(a,n=`file.${e.fileFormat}`)=>{let l="data:text/csv;charset=utf-8,";l+=a;const E=encodeURI(l),s=document.createElement("a");s.setAttribute("href",E),s.setAttribute("download",n),s.click()},c=()=>{o(e.editorJson)},{createMessage:d}=M(),i=()=>{const a=e.editorJson;if(!a){d.warning("代码为空！");return}w(a)};return f(m({},N(t)),{exportData:o,handleCopyJson:i,handleExportJson:c,MODE:g})}}),S={class:"v-json-box"},V={class:"copy-btn-box"};function j(e,t,o,c,d,i){const a=_("CodeEditor"),n=_("a-button");return A(),I("div",null,[C("div",S,[r(a,{value:e.editorJson,ref:"myEditor",mode:e.MODE.JSON},null,8,["value","mode"])]),C("div",V,[r(n,{onClick:e.handleCopyJson,type:"primary",class:"copy-btn","data-clipboard-action":"copy","data-clipboard-text":e.editorJson},{default:v(()=>[y(" 复制数据 ")]),_:1},8,["onClick","data-clipboard-text"]),r(n,{onClick:e.handleExportJson,type:"primary"},{default:v(()=>[y("导出代码")]),_:1},8,["onClick"])])])}const z=B(O,[["render",j],["__scopeId","data-v-a69efe87"]]);export{z as default};
