import{_ as e}from"./TableImg.c9ed598a.js";import"./BasicForm.ae4250e1.js";import{u as i}from"./useTable.26f8956b.js";import{getBasicColumns as o,getTreeTableData as s}from"./tableData.3f3da3f1.js";import{z as t,Z as r,D as a,F as d,w as n,a3 as p,a9 as l}from"./vendor.11d66826.js";/* empty css              *//* empty css              */import"./useForm.213a5276.js";import"./index.514e05b1.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.9fecf134.js";import"./index.5b995397.js";import"./onMountedOrActivated.17f3c81d.js";/* empty css              */import"./useSortable.6a86578b.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.6b57f630.js";/* empty css              *//* empty css              *//* empty css              */import"./download.0adfd0af.js";import"./base64Conver.bb012c73.js";import"./index.ceaa815e.js";var m=t({components:{BasicTable:e},setup(){const[e,{expandAll:t,collapseAll:r}]=i({title:"树形表格",isTreeTable:!0,rowSelection:{type:"checkbox"},titleHelpMessage:"树形组件不能和序列号列同时存在",columns:o(),dataSource:s(),rowKey:"id"});return{register:e,expandAll:t,collapseAll:r}}});const c={class:"p-4"},f=l("展开全部"),j=l("折叠全部");m.render=function(e,i,o,s,t,l){const m=r("a-button"),b=r("BasicTable");return a(),d("div",c,[n(b,{onRegister:e.register},{toolbar:p((()=>[n(m,{type:"primary",onClick:e.expandAll},{default:p((()=>[f])),_:1},8,["onClick"]),n(m,{type:"primary",onClick:e.collapseAll},{default:p((()=>[j])),_:1},8,["onClick"])])),_:1},8,["onRegister"])])};export default m;