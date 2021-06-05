import{_ as e}from"./TableImg.215d3df0.js";import{f as t}from"./BasicForm.df85bae6.js";import{u as o}from"./useTable.110df86b.js";import{g as n}from"./system.39227e92.js";import{_ as i}from"./PageWrapper.acc8d12f.js";import s from"./DeptTree.c83b3764.js";import{b as r}from"./useModal.fc795c66.js";import{_ as a,c as d,s as c}from"./AccountModal.795a62dd.js";import{k as l,K as m,o as p,n as f,Q as u,q as b,Y as j}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.a42bd52f.js";import"./index.3f4b0a4c.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.03f0b134.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.07d1a2fc.js";/* empty css              *//* empty css              */import"./download.42909391.js";import"./StrengthMeter.7f6a4ce0.js";import"./usePageContext.18bdf57b.js";/* empty css              *//* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.2b29f8be.js";import"./useContextMenu.8ef0a43f.js";var x=l({name:"AccountManagement",components:{BasicTable:e,PageWrapper:i,DeptTree:s,AccountModal:a,TableAction:t},setup(){const[e,{openModal:t}]=r(),[i,{reload:s}]=o({title:"账号列表",api:n,columns:d,formConfig:{labelWidth:120,schemas:c},useSearchForm:!0,showTableSetting:!0,bordered:!0,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:i,registerModal:e,handleCreate:function(){t(!0,{isUpdate:!1})},handleEdit:function(e){t(!0,{record:e,isUpdate:!0})},handleDelete:function(e){},handleSuccess:function(){s()},handleSelect:function(e=""){s({searchInfo:{deptId:e}})}}}});const g=j("新增账号");x.render=function(e,t,o,n,i,s){const r=m("DeptTree"),a=m("a-button"),d=m("TableAction"),c=m("BasicTable"),l=m("AccountModal"),j=m("PageWrapper");return p(),f(j,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:u((()=>[b(r,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),b(c,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:u((()=>[b(a,{type:"primary",onClick:e.handleCreate},{default:u((()=>[g])),_:1},8,["onClick"])])),action:u((({record:t})=>[b(d,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),b(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default x;