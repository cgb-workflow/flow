import{_ as e}from"./TableImg.5bb7b2c3.js";import{g as o}from"./BasicForm.3145f6c6.js";import{u as i}from"./useTable.4693838b.js";import{P as t}from"./index.22ff4fb2.js";import{getBasicColumns as n}from"./tableData.3f3da3f1.js";import{d as r}from"./table.0f80c388.js";import{y as s,Z as a,B as d,F as p,a2 as c,v as l,J as m}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.f6c4fcf0.js";import"./index.8bbed969.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./index.dcc0b3b8.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.9bed7e43.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.a0306c89.js";/* empty css              *//* empty css              *//* empty css              */import"./download.92b34d7b.js";import"./base64Conver.bb012c73.js";import"./index.adea3535.js";/* empty css              *//* empty css              */import"./useContentViewHeight.c0fc876b.js";var b=s({components:{BasicTable:e,TableAction:o,PageWrapper:t},setup(){const[e]=i({api:r,title:"可展开表格演示",titleHelpMessage:["已启用expandRowByClick","已启用stopButtonPropagation"],columns:n(),rowKey:"id",canResize:!1,expandRowByClick:!0,actionColumn:{width:160,title:"Action",slots:{customRender:"action"}}});return{registerTable:e,handleDelete:function(e){},handleOpen:function(e){}}}});b.render=function(e,o,i,t,n,r){const s=a("TableAction"),b=a("BasicTable"),f=a("PageWrapper");return d(),p(f,{title:"可展开表格",content:"不可与scroll共用。TableAction组件可配置stopButtonPropagation来阻止操作按钮的点击事件冒泡，以便配合Table组件的expandRowByClick"},{default:c((()=>[l(b,{onRegister:e.registerTable},{expandedRowRender:c((({record:e})=>[l("span",null,"No: "+m(e.no),1)])),action:c((({record:o})=>[l(s,{stopButtonPropagation:"",actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:e.handleDelete.bind(null,o)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:e.handleOpen.bind(null,o)}}]},null,8,["actions","dropDownActions"])])),_:1},8,["onRegister"])])),_:1})};export default b;