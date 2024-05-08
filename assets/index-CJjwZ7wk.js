var K=Object.defineProperty;var _=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var E=(o,n,t)=>n in o?K(o,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[n]=t,$=(o,n)=>{for(var t in n||(n={}))L.call(n,t)&&E(o,t,n[t]);if(_)for(var t of _(n))N.call(n,t)&&E(o,t,n[t]);return o};var A=(o,n)=>{var t={};for(var r in o)L.call(o,r)&&n.indexOf(r)<0&&(t[r]=o[r]);if(o!=null&&_)for(var r of _(o))n.indexOf(r)<0&&N.call(o,r)&&(t[r]=o[r]);return t};var k=(o,n,t)=>new Promise((r,g)=>{var d=a=>{try{c(t.next(a))}catch(i){g(i)}},F=a=>{try{c(t.throw(a))}catch(i){g(i)}},c=a=>a.done?r(a.value):Promise.resolve(a.value).then(d,F);c((t=t.apply(o,n)).next())});import Q from"./FormRender-Cqi5sDwA.js";import{a2 as W,br as B,f as D,e as O,U as H,V as T,o as X}from"./antd-D1Pawy5U.js";import{g as Y,J as I,d as x,f as oo,c as w,p as q,u as eo,a7 as R,Z as V,_ as z,k as J,a9 as y,F as to,aa as no,a8 as so,ad as ro,ae as ao,aj as io,ak as mo,ac as lo}from"./vue-COhTiP8A.js";import{b as fo,f as U}from"./index-DDVkWObG.js";import{b0 as co,c as uo}from"./entry/index-B5t2Y4Xi-1715134498584.js";import"./index-BMtgVsL5.js";import"./formItemConfig--oP7GqI_.js";import"./componentMap-BmwSzB9o.js";import"./useFormItem-BQ20sB9v.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-UY_JMF8t.js";import"./index-YuOsOkv4.js";import"./useWindowSizeFn-XkyYhxEb.js";import"./uuid-D0SLUWHI.js";import"./useSortable-B-sZph6E.js";import"./download-BMoW1tQd.js";import"./base64Conver-bBv-IO2K.js";import"./index-kRnjCmQk.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-ij2mkGsg.js";import"./copyTextToClipboard-hMH5xuO5.js";import"./index-Dhyll8Fe.js";import"./index-Cu1Ld-BY.js";import"./useFormDesignState-CD9GraNJ.js";function po(o,n,t,r){(()=>{const u=Y(),C=u==null?void 0:u.parent;C&&o.formConfig.schemas.forEach(m=>{B(m.componentProps,(M,e)=>{O(M)&&(m.componentProps[e]=M.bind(C))}),B(m.on,(M,e)=>{O(M)&&(m.componentProps[e]=M.bind(C))})})})();const{emit:d}=t,F=W.useForm,{resetFields:c,validate:a,clearValidate:i,validateField:h}=F(n,[]);return{validate:a,validateField:h,resetFields:c,clearValidate:i,submit:()=>k(this,null,function*(){var C,m;const u=D(I(n.value));return d==null||d("submit",u),(m=(C=o.formConfig).submit)==null||m.call(C,u),u})}}function go(o,n,t,r){const g=e=>fo(o.formConfig.schemas,s=>s.field===e),d=(e,s,l)=>{const f=g(e);f&&(f[s]=l)},F=(e,s,l)=>{const f=g(e);f!=null&&f.componentProps&&(["options","treeData"].includes(s)&&c(e,void 0),f.componentProps[s]=l)},c=(e,s)=>{var l;typeof e=="string"?(o.formModel[e]=s,(l=t.value)==null||l.validateField(e,s,[])):Object.keys(e).forEach(p=>{var b;o.formModel[p]=e[p],(b=t.value)==null||b.validateField(p,e[p],[])})},a=(e,s)=>{o.formConfig[e]=s},i=e=>D(o.formModel)[e],h=()=>k(this,null,function*(){return D(o.formModel)}),v=e=>{d(e,"hidden",!0)},u=e=>{typeof e=="string"?F(e,"disabled",!0):a("disabled",e!==!1)},C=e=>{d(e,"hidden",!1)},m={};return(e=>{U(e,s=>{U(e,l=>{var f;m[l.field]||(m[l.field]=new Set),(f=s.link)!=null&&f.includes(l.field)&&O(s.update)&&m[l.field].add(s)}),m[s.field].add(s)})})(o.formConfig.schemas),$({linkOn:m,setValue:c,getValue:i,hidden:v,show:C,set:d,get:g,setProps:F,getData:h,disable:u},r)}const Fo=x({name:"VFormCreate",components:{FormRender:Q,Form:W,Row:H},props:{fApi:{type:Object},formModel:{type:Object,default:()=>({})},formConfig:{type:Object,required:!0}},emits:["submit","change","update:fApi","update:formModel"],setup(o,n){const t=o.formConfig.layout=="vertical"?T:H,{emit:r}=n,g=oo(null),d=w({get:()=>o.formModel,set:p=>r("update:formModel",p)}),F=w(()=>o.formConfig.schemas&&o.formConfig.schemas.filter(p=>p.hidden!==!0)),c=co(o,"fApi",r),{submit:a,validate:i,clearValidate:h,resetFields:v,validateField:u}=po(o,d,n),f=go({formConfig:o.formConfig,formData:o.formModel},n,g,{submit:a,validate:i,validateField:u,resetFields:v,clearValidate:h}),{linkOn:C}=f,m=A(f,["linkOn"]);c.value=m;const M=p=>{var S;const{schema:b,value:Z}=p,{field:G}=eo(b);(S=C[G])==null||S.forEach(P=>{var j;(j=P.update)==null||j.call(P,Z,P,c.value)})},e=w(()=>X(o.formConfig,["disabled","labelWidth","schemas"])),s=()=>{a()};q("formModel",d);const l=(p,b)=>{d.value[p]=b};return q("setFormModelMethod",l),{eFormModel:g,submit:a,validate:i,validateField:u,resetFields:v,clearValidate:h,handleChange:M,formModelProps:e,handleSubmit:s,setFormModel:l,formModelNew:d,wrapperComp:t,noHiddenList:F}}}),Co={class:"v-form-container"};function ho(o,n,t,r,g,d){const F=R("FormRender"),c=R("Row"),a=R("Form");return V(),z("div",Co,[J(a,lo({class:"v-form-model",ref:"eFormModel",model:o.formModel},o.formModelProps),{default:y(()=>[J(c,null,{default:y(()=>[(V(!0),z(to,null,no(o.noHiddenList,(i,h)=>(V(),so(F,{key:h,schema:i,formConfig:o.formConfig,formData:o.formModelNew,onChange:o.handleChange,setFormModel:o.setFormModel,onSubmit:o.handleSubmit,onReset:o.resetFields},ro({_:2},[i&&i.componentProps?{name:"schema.componentProps!.slotName",fn:y(()=>[ao(o.$slots,i.componentProps.slotName,io(mo({formModel:o.formModel,field:i.field,schema:i})),void 0,!0)]),key:"0"}:void 0]),1032,["schema","formConfig","formData","onChange","setFormModel","onSubmit","onReset"]))),128))]),_:3})]),_:3},16,["model"])])}const Jo=uo(Fo,[["render",ho],["__scopeId","data-v-06441f85"]]);export{Jo as default};
