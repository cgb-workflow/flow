import{_ as e}from"./TableImg.5453971a.js";import{f as t}from"./BasicForm.f252c294.js";import{u as i}from"./useTable.da9f7dda.js";import{d as o}from"./table.6b4349a4.js";import{k as n,K as d,o as a,n as s,q as r,Q as l}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.7c89f4ac.js";import"./index.6992208b.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./useModal.11986c6c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.e73ef165.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.14e97884.js";/* empty css              *//* empty css              */import"./download.f95f58dd.js";import"./StrengthMeter.505415db.js";const c=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"姓名",dataIndex:"name",width:260},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",width:300},{title:"开始时间",width:200,dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}];var m=n({components:{BasicTable:e,TableAction:t},setup(){const[e]=i({title:"TableAction组件及固定列示例",api:o,columns:c,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:e,handleDelete:function(e){},handleOpen:function(e){}}}});const p={class:"p-4"};m.render=function(e,t,i,o,n,c){const m=d("TableAction"),b=d("BasicTable");return a(),s("div",p,[r(b,{onRegister:e.registerTable},{action:l((({record:t})=>[r(m,{actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:e.handleDelete.bind(null,t)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:e.handleOpen.bind(null,t)}}]},null,8,["actions","dropDownActions"])])),_:1},8,["onRegister"])])};export default m;