var x=(s,l,p)=>new Promise((_,m)=>{var d=t=>{try{u(p.next(t))}catch(o){m(o)}},n=t=>{try{u(p.throw(t))}catch(o){m(o)}},u=t=>t.done?_(t.value):Promise.resolve(t.value).then(d,n);u((p=p.apply(s,l)).next())});import{_ as b}from"./BasicForm.vue_vue_type_script_setup_true_lang-DKt3O18b.js";import"./BasicForm.vue_vue_type_style_index_0_lang-Cmi6CZCN.js";import"./componentMap-BmwSzB9o.js";import{u as y}from"./useForm-OkXUGSOI.js";import{step1Schemas as B}from"./data-CaNweXRQ.js";import{E as I,W as h,a4 as w}from"./antd-D1Pawy5U.js";import{d as C,a7 as O,Z as U,_ as g,$ as i,k as e,a9 as r,u as a,G as S,a2 as k,a3 as F}from"./vue-COhTiP8A.js";import{c as N}from"./entry/index-B5t2Y4Xi-1715134498584.js";import"./FormItem.vue_vue_type_script_lang-DrKYpcTP.js";import"./helper-CBbAr-Gf.js";import"./index-YuOsOkv4.js";import"./useWindowSizeFn-XkyYhxEb.js";import"./useFormItem-BQ20sB9v.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-UY_JMF8t.js";import"./uuid-D0SLUWHI.js";import"./useSortable-B-sZph6E.js";import"./download-BMoW1tQd.js";import"./base64Conver-bBv-IO2K.js";import"./index-kRnjCmQk.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-ij2mkGsg.js";import"./copyTextToClipboard-hMH5xuO5.js";import"./index-Dhyll8Fe.js";import"./index-Cu1Ld-BY.js";const c=s=>(k("data-v-b0796100"),s=s(),F(),s),R={class:"step1"},V={class:"step1-form"},E=c(()=>i("h3",null,"说明",-1)),G=c(()=>i("h4",null,"转账到支付宝账户",-1)),W=c(()=>i("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1)),$=c(()=>i("h4",null,"转账到银行卡",-1)),z=c(()=>i("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1)),D=C({__name:"Step1",emits:["next"],setup(s,{emit:l}){const p=l,[_,{validate:m}]=y({labelWidth:100,schemas:B,actionColOptions:{span:14},showResetButton:!1,submitButtonOptions:{text:"下一步"},submitFunc:d});function d(){return x(this,null,function*(){try{const n=yield m();p("next",n)}catch(n){}})}return(n,u)=>{const t=O("a-input");return U(),g("div",R,[i("div",V,[e(a(b),{onRegister:a(_)},{fac:r(({model:o,field:v})=>[e(a(I).Group,{compact:""},{default:r(()=>[e(a(h),{value:o.pay,"onUpdate:value":f=>o.pay=f,class:"pay-select"},{default:r(()=>[e(a(h).Option,{value:"zfb"},{default:r(()=>[S(" 支付宝 ")]),_:1}),e(a(h).Option,{value:"yl"},{default:r(()=>[S(" 银联 ")]),_:1})]),_:2},1032,["value","onUpdate:value"]),e(t,{class:"pay-input",value:o[v],"onUpdate:value":f=>o[v]=f},null,8,["value","onUpdate:value"])]),_:2},1024)]),_:1},8,["onRegister"])]),e(a(w)),E,G,W,$,z])}}}),mt=N(D,[["__scopeId","data-v-b0796100"]]);export{mt as default};
