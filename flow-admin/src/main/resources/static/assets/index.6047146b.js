import{B as e,a as t}from"./index.b444bbac.js";import{_ as o}from"./TableImg.f7de9836.js";import{f as s}from"./BasicForm.49b9f6b2.js";import{u as n}from"./useTable.948e93a8.js";import{g as a}from"./personal.d9bb19c1.js";import{P as i}from"./index.9f071deb.js";import r from"./OrgTree.fcebaf13.js";import{a1 as l,b2 as c,j as d,r as m,i as p,K as f,o as u,m as b,Q as x,n as j,V as g,ah as h,Y as w,q as S,N as v}from"./vendor.686fd1d4.js";/* empty css              */import"./index.0bb7f928.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./useForm.bcbbeb77.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.146ae02b.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.b52b2976.js";/* empty css              *//* empty css              *//* empty css              */import"./download.e39a543f.js";import"./base64Conver.bb012c73.js";import"./index.19c34870.js";import"./useContentViewHeight.099c9658.js";/* empty css              *//* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.b3cfc306.js";import"./useContextMenu.7d6ce859.js";import"./dept.71c9c08e.js";const y=[{title:"姓名",dataIndex:"name",width:80,align:"left"},{title:"工号",dataIndex:"code",width:80,align:"left"},{title:"性别",dataIndex:"sex",width:50,customRender:({record:e})=>{const t=1==~~e.sex,o=t?"男":"女";return l(c,{color:t?"green":"red"},(()=>o))}},{title:"公司",dataIndex:"companyName",width:120,align:"left"},{title:"部门",dataIndex:"deptName",width:120,align:"left"}],C=[{field:"keyword",label:"关键字",component:"Input",labelWidth:60,colProps:{span:12,lg:{span:12,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}},componentProps:{}}];var T=d({props:{title:{type:String,default:"人员选择"}},name:"PersonalSelector",components:{BasicModal:e,BasicTable:o,PageWrapper:i,OrgTree:r,TableAction:s,Tag:c},setup(e,{emit:o}){const s=m([]),i=m(!1),[r,{setModalProps:l,closeModal:c}]=t((e=>{return t=this,o=null,n=function*(){const{selectorProps:t}=e;s.value=t.selectedList,i.value=t.multiSelect,x(s.value.map((e=>e.code))),u({rowSelection:{type:t.multiSelect?"checkbox":"radio",columnWidth:30}}),l({wrapClassName:"selector-content"}),f()},new Promise(((e,s)=>{var a=e=>{try{r(n.next(e))}catch(t){s(t)}},i=e=>{try{r(n.throw(e))}catch(t){s(t)}},r=t=>t.done?e(t.value):Promise.resolve(t.value).then(a,i);r((n=n.apply(t,o)).next())}));var t,o,n}));C.forEach((e=>{e&&(e.componentProps.onkeypress=e=>{13===e.keyCode&&f()})}));const[d,{reload:f,setProps:u,getSelectRows:b,setSelectedRowKeys:x}]=n({title:"",api:a,columns:y,immediate:!1,rowSelection:{type:"checkbox",columnWidth:30},formConfig:{labelWidth:60,schemas:C,showResetButton:!1,showAdvancedButton:!1,autoSubmitOnEnter:!0},clickToRowSelect:!0,rowKey:"code",size:"small",canResize:!1,useSearchForm:!0,showTableSetting:!1,showIndexColumn:!1,bordered:!0,scroll:{y:280}});function j({rows:e}){s.value=e.map((e=>({id:e.id,code:e.code,name:e.name})))}return{registerTable:d,registerModal:r,getTitle:p((()=>"选择人员")),selectedList:s,removeSelectedItem:function(e){s.value.splice(s.value.findIndex((t=>t.code===e)),1),x(s.value.map((e=>e.code)))},rowClick:function(){j({rows:b()})},selectionChanged:j,handleSubmit:function(){const e=b();o("success",e),c()},handleSuccess:function(){f()},handleSelect:function(e){let t={};e&&"1"===e.sourceType?t={companyId:e.id}:e&&"2"===e.sourceType&&(t={deptId:e.id}),f({searchInfo:t})}}}});const I={class:"selected-items"};T.render=function(e,t,o,s,n,a){const i=f("Tag"),r=f("OrgTree"),l=f("BasicTable"),c=f("PageWrapper"),d=f("BasicModal");return u(),b(d,v({wrapClassName:"selector-body"},e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:x((()=>[j("div",I,[(u(!0),b(g,null,h(e.selectedList,(t=>(u(),b(i,{color:"processing",closable:"",onClose:o=>e.removeSelectedItem(t.code)},{default:x((()=>[w(S(t.name),1)])),_:2},1032,["onClose"])))),256))]),j(c,{dense:"",contentClass:"flex"},{default:x((()=>[j(r,{class:"w-1/4 xl:w-3/10",onSelect:e.handleSelect},null,8,["onSelect"]),j(l,{onRegister:e.registerTable,onSelectionChange:e.selectionChanged,onRowClick:e.rowClick,class:"w-3/4 xl:w-7/10"},null,8,["onRegister","onSelectionChange","onRowClick"])])),_:1})])),_:1},16,["onRegister","title","onOk"])};export default T;