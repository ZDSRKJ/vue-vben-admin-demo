import{_ as h}from"./BasicTable.vue_vue_type_script_setup_true_lang-CBRNK-hc.js";import"./TableImg.vue_vue_type_style_index_0_lang-COU7NEtL.js";import{a as b}from"./componentMap-BmwSzB9o.js";import{u as g}from"./useTable-D5CBLK_Y.js";import{c as C}from"./system-DPTSvPp_.js";import{u as k}from"./index-CBCPcxEk.js";import{_ as x,c as w,s as y}from"./RoleDrawer.vue_vue_type_script_setup_true_lang-D9S3n7BC.js";import{d as R,a7 as S,Z as n,_ as B,k as o,a9 as r,G as D,a8 as T,u as e,ab as v}from"./vue-COhTiP8A.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-DKt3O18b.js";import"./FormItem.vue_vue_type_script_lang-DrKYpcTP.js";import"./entry/index-B5t2Y4Xi-1715134498584.js";import"./antd-D1Pawy5U.js";import"./helper-CBbAr-Gf.js";import"./BasicForm.vue_vue_type_style_index_0_lang-Cmi6CZCN.js";import"./index-YuOsOkv4.js";import"./useWindowSizeFn-XkyYhxEb.js";import"./useForm-OkXUGSOI.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-UY_JMF8t.js";import"./useFormItem-BQ20sB9v.js";import"./onMountedOrActivated-GpUdBAv_.js";import"./useSortable-B-sZph6E.js";import"./download-BMoW1tQd.js";import"./base64Conver-bBv-IO2K.js";import"./index-kRnjCmQk.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-ij2mkGsg.js";import"./copyTextToClipboard-hMH5xuO5.js";import"./index-Dhyll8Fe.js";import"./index-Cu1Ld-BY.js";import"./index-COoXiVvR.js";import"./useContextMenu-DtmRqV5V.js";const pe=R({name:"RoleManagement",__name:"index",setup(N){const[m,{openDrawer:i}]=k(),[s,{reload:l}]=g({title:"角色列表",api:C,columns:w,formConfig:{labelWidth:120,schemas:y},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",fixed:void 0}});function p(){i(!0,{isUpdate:!1})}function c(t){i(!0,{record:t,isUpdate:!0})}function u(t){}function d(){l()}return(t,V)=>{const f=S("a-button");return n(),B("div",null,[o(e(h),{onRegister:e(s)},{toolbar:r(()=>[o(f,{type:"primary",onClick:p},{default:r(()=>[D(" 新增角色 ")]),_:1})]),bodyCell:r(({column:_,record:a})=>[_.key==="action"?(n(),T(e(b),{key:0,actions:[{icon:"clarity:note-edit-line",onClick:c.bind(null,a)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",placement:"left",confirm:u.bind(null,a)}}]},null,8,["actions"])):v("",!0)]),_:1},8,["onRegister"]),o(x,{onRegister:e(m),onSuccess:d},null,8,["onRegister"])])}}});export{pe as default};
