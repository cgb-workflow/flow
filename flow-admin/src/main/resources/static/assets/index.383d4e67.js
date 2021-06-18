import{_ as e}from"./TableImg.72bfe0c2.js";import{f as o}from"./BasicForm.66d503e8.js";import{u as i}from"./useTable.78c29fd1.js";import{g as t,d as n}from"./account.3fac994f.js";import{_ as s}from"./PageWrapper.75f0cc87.js";import{b as a}from"./useModal.5417216c.js";import r from"./AccountModal.7616714b.js";import d from"./PasswordModal.c2b1cdbc.js";import c from"./SetGroupModal.9729faaa.js";import{c as l,s as u}from"./account.data.05af2890.js";import{k as p,bp as m,bw as f,cf as g,r as b,K as j,o as h,n as w,q as S,Q as v,Y as M}from"./vendor.56d2c57f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./useForm.4f5ed9fc.js";import"./index.90af2bb9.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.d0559e60.js";import"./onMountedOrActivated.1a8745f8.js";/* empty css              */import"./useSortable.886b9f44.js";import"./useExpose.46777d04.js";/* empty css              *//* empty css              */import"./CountdownInput.d660d8a6.js";/* empty css              *//* empty css              */import"./download.73f6ecc9.js";import"./StrengthMeter.c038c542.js";import"./usePageContext.765b9a25.js";/* empty css              */import"./group.e5107716.js";var x=p({name:"Account",components:{BasicTable:e,PageWrapper:s,AccountModal:r,PasswordModal:d,SetGroupModal:c,TableAction:o,Avatar:m,Image:f,UserOutlined:g},setup(){const[e,{openModal:o}]=a(),[s,{openModal:r}]=a(),[d,{openModal:c}]=a(),p=b(""),m=b(!1),[f,{reload:g}]=i({title:"列表",api:t,columns:l,formConfig:{labelWidth:120,schemas:u,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:160,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:f,registerModal:e,registerPasswordModal:s,registerSetGroupModal:d,previewImage:p,previewImageVisible:m,previewImageHandle:function(e){e&&(p.value=e,m.value=!0)},previewImageVisibleChange:function(e,o){m.value=e},handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleSetPassword:function(e){r(!0,{record:e,isUpdate:!0})},handleSetGroup:function(e){c(!0,{record:e,isUpdate:!0})},handleDelete:function(e){n([e.id]).then((e=>{g()}))},handleSuccess:function(){g()},handlePasswordSuccess:function(){g()},handleSetGroupSuccess:function(){g()}}}});const C=M(" 新增 "),I={style:{width:"0",height:"0",overflow:"hidden"}};x.render=function(e,o,i,t,n,s){const a=j("a-button"),r=j("TableAction"),d=j("UserOutlined"),c=j("Avatar"),l=j("BasicTable"),u=j("Image"),p=j("AccountModal"),m=j("PasswordModal"),f=j("SetGroupModal");return h(),w("div",null,[S(l,{onRegister:e.registerTable},{toolbar:v((()=>[S(a,{type:"primary",onClick:e.handleCreate},{default:v((()=>[C])),_:1},8,["onClick"])])),action:v((({record:o})=>[S(r,{actions:[{title:"分配组",icon:"ant-design:usergroup-add",onClick:e.handleSetGroup.bind(null,o)},{title:"设置密码",icon:"ant-design:setting-outlined",onClick:e.handleSetPassword.bind(null,o)},{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),imageRender:v((({record:o})=>[S(c,{src:o.image,onClick:i=>e.previewImageHandle(o.image)},{icon:v((()=>[S(d)])),_:2},1032,["src","onClick"])])),_:1},8,["onRegister"]),S("div",I,[S(u,{width:0,height:0,src:e.previewImage,preview:{visible:e.previewImageVisible,onVisibleChange:e.previewImageVisibleChange}},null,8,["src","preview"])]),S(p,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),S(m,{onRegister:e.registerPasswordModal,onSuccess:e.handlePasswordSuccess},null,8,["onRegister","onSuccess"]),S(f,{onRegister:e.registerSetGroupModal,onSuccess:e.handleSetGroupSuccess},null,8,["onRegister","onSuccess"])])};export default x;