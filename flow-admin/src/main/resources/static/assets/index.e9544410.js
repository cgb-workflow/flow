import{B as k}from"./TableImg.8ad498cd.js";import{l as x}from"./BasicForm.027cbf67.js";import{u as R}from"./useTable.7536e350.js";import{b as $,d as W,p as H,c as N}from"./modelInfo.ab994ee5.js";import{P as O}from"./index.c79f76d5.js";import U from"./FlowCategoryTree.10d9dd4d.js";import{b as S}from"./index.a492e5cd.js";import{M as V,c as z,s as K}from"./ModelInfoModal.7ce48d70.js";import q from"./index.72f43610.js";import{az as G,a as L,fD as j,b0 as J,x as C,an as Q,aB as r,bT as Y,z as Z,i as T,l as F,C as p,q as s,D as ee,m as oe,k as P,H as te}from"./index.e61ad282.js";import{T as ne}from"./index.6e0a0264.js";import{A as ie}from"./index.f6c9d1b9.js";import{B as re}from"./index.ba1457ae.js";import{a as ae}from"./app.d217a613.js";import{A as le}from"./index.b897f1a2.js";import{D as se}from"./DeleteOutlined.3b47e95d.js";import"./index.ce1ab63a.js";import"./Checkbox.bb68ead3.js";import"./index.99ef178c.js";import"./index.d92fc3ac.js";import"./eagerComputed.d3c262c3.js";import"./useForm.81406efc.js";import"./index.8f86dec4.js";import"./index.9f299dd3.js";import"./uuid.2b29000c.js";import"./index.6749d186.js";import"./_baseIteratee.7ece590b.js";import"./get.bca7403a.js";import"./index.114515de.js";import"./useRefs.0c428178.js";import"./Form.8b25370b.js";import"./Col.f72eb8d0.js";import"./useFlexGapSupport.ed2a5fc1.js";import"./useSize.5a37866d.js";import"./useWindowSizeFn.27de1b1b.js";import"./index.9f50e000.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.5bbc1139.js";import"./FullscreenOutlined.3a424424.js";import"./index.e8295ad9.js";import"./fromPairs.84aabb58.js";import"./scrollTo.e9bc7999.js";/* empty css              *//* empty css               */import"./index.9233793b.js";import"./transButton.2c723edc.js";import"./index.8ba0bfed.js";import"./index.dbdde179.js";import"./download.810571da.js";import"./base64Conver.08b9f4ec.js";import"./index.ebd81f61.js";import"./index.6d7de824.js";import"./uniqBy.8c214189.js";import"./index.769e0bcb.js";import"./useContentViewHeight.34702d2a.js";import"./ArrowLeftOutlined.0e95a5b3.js";import"./index.5621adef.js";import"./index.0ba11515.js";import"./useContextMenu.87346ca1.js";import"./category.9da8b5d0.js";import"./index.17aa5270.js";import"./throttleByAnimationFrame.7312e722.js";import"./index.3bbc96fb.js";import"./index.esm.01aeab01.js";const{createMessage:A}=te(),pe=L({name:"Bpmn",components:{BasicTable:k,PageWrapper:O,FlowCategoryTree:U,ModelInfoModal:V,TableAction:x,Avatar:ie,Badge:re,Popconfirm:j,Tag:ne,DeleteOutlined:se,Authority:le,BpmnPreviewModal:q},setup(){const o=J(),[B,{openModal:m}]=S(),[_,{openModal:w,setModalProps:v}]=S();C({});const a=C({}),t=C(!1),[u,{getForm:c,reload:n}]=R({title:"\u5217\u8868",api:$,columns:z,formConfig:{labelWidth:120,schemas:K,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},searchInfo:{modelType:0},useSearchForm:!0,showIndexColumn:!1,bordered:!0,actionColumn:{width:210,align:"left",title:"\u64CD\u4F5C",dataIndex:"action"}});Q(()=>{const{updateSchema:e}=c();ae().then(i=>{e([{field:"appSn",componentProps:{options:i,labelField:"id"}}])})});function d(){if(!P(a).code){A.warning("\u8BF7\u9009\u62E9\u5206\u7C7B\uFF01",2);return}m(!0,{record:{categoryCode:P(a).code},isUpdate:!0})}function f(e,i){const{status:b}=e;return[{icon:"ant-design:eye",tooltip:"\u6D41\u7A0B\u56FE\u9884\u89C8",label:"",onClick:g.bind(null,e)},{icon:"ant-design:play-circle-filled",tooltip:"\u53D1\u5E03",label:"",popConfirm:{title:"\u786E\u8BA4\u53D1\u5E03\u5417?",confirm:X.bind(null,e),placement:"left"},ifShow:b===2},{icon:"ant-design:stop-twotone",tooltip:"\u505C\u7528",label:"",popConfirm:{title:"\u786E\u8BA4\u505C\u7528\u5417?",confirm:M.bind(null,e),placement:"left"},ifShow:b===3||b===2},{icon:"clarity:note-edit-line",tooltip:"\u4FEE\u6539",label:"",onClick:l.bind(null,e)},{icon:"ant-design:delete-outlined",color:"error",tooltip:"\u5220\u9664",label:"",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:y.bind(null,e),placement:"left"}}]}function g(e){w(!0,{modelKey:e.modelKey,isUpdate:!0}),v({title:`\u9884\u89C8-${e.name}`,bodyStyle:{padding:"0px",margin:"0px"},width:900,height:400,showOkBtn:!1,showCancelBtn:!0,cancelText:"\u5173\u95ED"})}function l(e){m(!0,{record:e,isUpdate:!0})}function h(){o("/flowable/bpmn/designer?modelId=XXXXXXXXXXXXXXXXXXXXXXXX")}function y(e){W([e.id]).then(i=>{n()})}function X(e){t.value=!0,H(e.modelId).then(i=>{n(),A.success("\u53D1\u5E03\u6210\u529F\uFF01",2)}).finally(()=>{t.value=!1})}function M(e){t.value=!0,N(e.modelId).then(i=>{n()}).finally(()=>{t.value=!1})}function D(){n()}function E(){}function I(e){a.value=e;let i={categoryCode:e?e.code:""};n({searchInfo:i})}return{loadingRef:t,registerTable:u,registerBpmnPreviewModal:_,registerModal:B,handlePublish:X,handleStop:M,createActions:f,handleCreate:d,handleEdit:l,cancelDeleteRole:E,handleDelete:y,handleSuccess:D,openTab:h,handleSelect:I}}});function me(o,B,m,_,w,v){const a=r("FlowCategoryTree"),t=r("a-button"),u=r("TableAction"),c=r("BasicTable"),n=r("ModelInfoModal"),d=r("BpmnPreviewModal"),f=r("PageWrapper"),g=Y("loading");return Z((T(),F(f,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:p(()=>[s(a,{class:"w-1/4 xl:w-1/5",onSelect:o.handleSelect},null,8,["onSelect"]),s(c,{onRegister:o.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:p(()=>[s(t,{type:"primary",onClick:o.handleCreate},{default:p(()=>[ee(" \u65B0\u589E ")]),_:1},8,["onClick"])]),bodyCell:p(({column:l,record:h})=>[l.key==="action"?(T(),F(u,{key:0,actions:o.createActions(h,l)},null,8,["actions"])):oe("",!0)]),_:1},8,["onRegister"]),s(n,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"]),s(d,{onRegister:o.registerBpmnPreviewModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})),[[g,o.loadingRef]])}var yo=G(pe,[["render",me],["__scopeId","data-v-4cf22f29"]]);export{yo as default};