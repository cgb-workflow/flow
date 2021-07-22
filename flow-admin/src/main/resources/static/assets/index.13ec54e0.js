import{_ as e}from"./TableImg.fd7646bb.js";import{f as t}from"./BasicForm.5fbfb734.js";import{u as o}from"./useTable.3ae035a0.js";import{g as n,d as i}from"./dept.8ff79e2e.js";import{P as a}from"./index.e083521e.js";import r from"./CompanyTree.0a320b29.js";import{h as s}from"./index.eb9d6ed9.js";import{b as d}from"./index.2bb7e54d.js";import{_ as l,c,s as p}from"./DeptModal.38b5656c.js";import{j as m,r as f,u,K as b,o as j,m as h,Q as x,n as g,Y as C}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.1ee1a774.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.28b3aabe.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.2aa1bf44.js";/* empty css              *//* empty css              *//* empty css              */import"./download.6cc0299c.js";import"./base64Conver.bb012c73.js";import"./index.cab36059.js";import"./useContentViewHeight.2141a994.js";/* empty css              *//* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.2783998c.js";import"./useContextMenu.1accf34c.js";import"./company.8289dc23.js";import"./index.4802bfad.js";import"./personal.82eb01b7.js";import"./OrgTree.0aaf9778.js";const{createMessage:w}=s();var S=m({name:"DeptManagement",components:{BasicTable:e,PageWrapper:a,CompanyTree:r,DeptModal:l,TableAction:t},setup(){const[e,{openModal:t,setModalProps:a}]=d(),r=f({}),[s,{reload:l}]=o({title:"列表",api:n,columns:c,formConfig:{labelWidth:120,schemas:p,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,useSearchForm:!0,showIndexColumn:!1,bordered:!0,pagination:!1,actionColumn:{width:150,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:s,registerModal:e,handleCreate:function(){var e;a({title:"新增部门"}),t(!0,{record:{companyId:null==(e=u(r))?void 0:e.id},isUpdate:!1})},handleEdit:function(e,o){o.stopPropagation(),a({title:"修改部门"}),t(!0,{record:e,isUpdate:!0})},handleCreateChild:function(e,o){o.stopPropagation(),a({title:"新增【"+e.name+"】的子部门"}),e={pid:e.id},t(!0,{record:e,isUpdate:!0})},handleDelete:function(e){e.children&&e.children.length>0?w.warning("有子节点，不能删除！"):i([e.id]).then((e=>{l()}))},handleSuccess:function(){l()},handleSelect:function(e){r.value=e,l({searchInfo:{companyId:e?e.id:""}})},doSearch:function(){l()}}}});const T=C("新增");S.render=function(e,t,o,n,i,a){const r=b("CompanyTree"),s=b("a-button"),d=b("TableAction"),l=b("BasicTable"),c=b("DeptModal"),p=b("PageWrapper");return j(),h(p,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:x((()=>[g(r,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),g(l,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:x((()=>[g(s,{type:"primary",onClick:e.handleCreate},{default:x((()=>[T])),_:1},8,["onClick"])])),action:x((({record:t})=>[g(d,{actions:[{title:"添加子部门",icon:"ant-design:plus-outlined",onClick:e.handleCreateChild.bind(null,t)},{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),g(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default S;