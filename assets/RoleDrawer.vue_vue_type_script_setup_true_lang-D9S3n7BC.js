var R=Object.defineProperty;var g=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var w=(t,a,e)=>a in t?R(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,b=(t,a)=>{for(var e in a||(a={}))C.call(a,e)&&w(t,e,a[e]);if(g)for(var e of g(a))N.call(a,e)&&w(t,e,a[e]);return t};var d=(t,a,e)=>new Promise((o,r)=>{var c=s=>{try{i(e.next(s))}catch(u){r(u)}},m=s=>{try{i(e.throw(s))}catch(u){r(u)}},i=s=>s.done?o(s.value):Promise.resolve(s.value).then(c,m);i((e=e.apply(t,a)).next())});import{_ as P}from"./BasicForm.vue_vue_type_script_setup_true_lang-DKt3O18b.js";import"./BasicForm.vue_vue_type_style_index_0_lang-Cmi6CZCN.js";import"./componentMap-BmwSzB9o.js";import{u as y}from"./useForm-OkXUGSOI.js";import{s as B,d as F}from"./system-DPTSvPp_.js";import{a as V}from"./entry/index-B5t2Y4Xi-1715134498584.js";import{l as L,d as U,f as _,c as M,u as n,Z as T,a8 as $,a9 as v,k as S,ac as q}from"./vue-COhTiP8A.js";import{ax as A}from"./antd-D1Pawy5U.js";import{a as G,B as O}from"./index-CBCPcxEk.js";import{_ as W}from"./index-COoXiVvR.js";const se=[{title:"角色名称",dataIndex:"roleName",width:200},{title:"角色值",dataIndex:"roleValue",width:180},{title:"排序",dataIndex:"orderNo",width:50},{title:"状态",dataIndex:"status",width:120,customRender:({record:t})=>(Reflect.has(t,"pendingStatus")||(t.pendingStatus=!1),L(A,{checked:t.status==="1",checkedChildren:"停用",unCheckedChildren:"启用",loading:t.pendingStatus,onChange(a){t.pendingStatus=!0;const e=a?"1":"0",{createMessage:o}=V();B(t.id,e).then(()=>{t.status=e,o.success("已成功修改角色状态")}).catch(()=>{o.error("修改角色状态失败")}).finally(()=>{t.pendingStatus=!1})}}))},{title:"创建时间",dataIndex:"createTime",width:180},{title:"备注",dataIndex:"remark"}],oe=[{field:"roleNme",label:"角色名称",component:"Input",colProps:{span:8}},{field:"status",label:"状态",component:"Select",componentProps:{options:[{label:"启用",value:"1"},{label:"停用",value:"0"}]},colProps:{span:8}}],Z=[{field:"roleName",label:"角色名称",required:!0,component:"Input"},{field:"roleValue",label:"角色值",required:!0,component:"Input"},{field:"status",label:"状态",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"启用",value:"1"},{label:"停用",value:"0"}]}},{label:"备注",field:"remark",component:"InputTextArea"},{label:" ",field:"menu",slot:"menu"}],ne=U({__name:"RoleDrawer",emits:["success","register"],setup(t,{emit:a}){const e=a,o=_(!0),r=_([]),[c,{resetFields:m,setFieldsValue:i,validate:s}]=y({labelWidth:90,baseColProps:{span:24},schemas:Z,showActionButtonGroup:!1}),[u,{setDrawerProps:p,closeDrawer:k}]=G(l=>d(this,null,function*(){m(),p({confirmLoading:!1}),n(r).length===0&&(r.value=yield F()),o.value=!!(l!=null&&l.isUpdate),n(o)&&i(b({},l.record))})),x=M(()=>n(o)?"编辑角色":"新增角色");function I(){return d(this,null,function*(){try{const l=yield s();p({confirmLoading:!0}),k(),e("success")}finally{p({confirmLoading:!1})}})}return(l,j)=>(T(),$(n(O),q(l.$attrs,{onRegister:n(u),showFooter:"",title:x.value,width:"500px",onOk:I}),{default:v(()=>[S(n(P),{onRegister:n(c)},{menu:v(({model:f,field:h})=>[S(n(W),{value:f[h],"onUpdate:value":D=>f[h]=D,treeData:r.value,fieldNames:{title:"menuName",key:"id"},checkable:"",toolbar:"",title:"菜单分配"},null,8,["value","onUpdate:value","treeData"])]),_:1},8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{ne as _,se as c,oe as s};
