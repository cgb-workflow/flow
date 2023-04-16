import{P as x}from"./index.6f4a9d56.js";import{az as U,a as w,ag as k,w as A,aB as m,o as s,k as D,B as a,p as e,C as _,i as l,l as O,n as i,G as P}from"./index.bbfb8c5d.js";import{U as M}from"./index.d0de3318.js";import"./index.21d11494.js";/* empty css               */import{B as S}from"./TableImg.3ff4c1b4.js";import{l as N}from"./BasicForm.bc1bc2ec.js";import{u as R}from"./useTable.dffabf3f.js";import{S as I,g as L,c as T,s as V,d as W}from"./SystemConfigModal.200fcdb3.js";import{b as $}from"./index.56ac9033.js";import{P as G}from"./PlusOutlined.72af47df.js";import{R as J,C as z}from"./index.5796c3bd.js";import"./index.b7fa4bcc.js";import"./index.8643b1cc.js";import"./useSize.2da926c0.js";import"./eagerComputed.2918d49d.js";import"./useWindowSizeFn.daa22200.js";import"./useContentViewHeight.ce579b14.js";import"./ArrowLeftOutlined.32f822b8.js";import"./index.40637d17.js";import"./transButton.15723253.js";import"./_baseIteratee.6836a2b9.js";import"./get.476f8b78.js";import"./DeleteOutlined.426a7a56.js";import"./Form.64d057a8.js";import"./Col.bf638c61.js";import"./useFlexGapSupport.ae09cf13.js";import"./useRefs.c946e576.js";import"./index.08f5b20b.js";import"./Checkbox.6b0f0619.js";import"./index.932444ce.js";import"./index.424465cb.js";import"./useForm.35a2e1b5.js";import"./index.e860cc21.js";import"./index.ba9876ed.js";import"./index.bd278e5f.js";import"./uuid.2b29000c.js";import"./index.eb776706.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.566a8b2c.js";import"./FullscreenOutlined.7b1f5985.js";import"./index.59bf1cba.js";import"./fromPairs.daf93cb7.js";import"./scrollTo.1bc5bfb7.js";import"./index.a824713f.js";/* empty css              */import"./index.53f3ac38.js";import"./index.dbc537d6.js";import"./index.1311bc71.js";import"./download.4c3fda74.js";import"./base64Conver.08b9f4ec.js";import"./index.5d0a6eed.js";import"./uniqBy.16bfb902.js";import"./constantEnum.bf6653fb.js";const j=w({name:"SystemConfig",components:{PlusOutlined:G,LoadingOutlined:k,Row:J,Col:z,Upload:M,BasicTable:S,TableAction:N,SystemConfigModal:I,PageWrapper:x},setup(){const[o,{openModal:d}]=$(),g=A(""),{createMessage:h}=P(),[C,{reload:c}]=R({title:"\u5217\u8868",api:L,columns:T,formConfig:{labelWidth:120,schemas:V,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!0,actionColumn:{width:100,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});function r(){d(!0,{isUpdate:!1})}function u(t){d(!0,{record:t,isUpdate:!0})}const n=(t,B)=>{const f=new FileReader;f.addEventListener("load",()=>B(f.result)),f.readAsDataURL(t)};function p(t){t={pid:t.id},d(!0,{record:t,isUpdate:!0})}function F(t){W([t.id]).then(()=>{c()})}const y=t=>t.type==="image/jpeg"||t.type==="image/png"?t.size/1024/1024<2?(n(t,E=>{g.value=E}),!1):(h.error("\u56FE\u7247\u4E0D\u80FD\u5927\u4E8E2MB\uFF01"),!1):(h.error("\u53EA\u5141\u8BB8\u4E0A\u4F20JPG\u56FE\u7247\uFF01"),!1);function b(){c()}function v(){setTimeout(()=>{c()},200)}return{beforeUpload:y,registerTable:C,registerModal:o,handleCreate:r,handleEdit:u,handleCreateChild:p,handleDelete:F,handleSuccess:v,doSearch:b,imageUrl:g}}}),q=["src"],H=["src"],K={key:1},Q=i("div",{class:"ant-upload-text"},"\u4E0A\u4F20ICON",-1),X=["src"],Y={key:1},Z=i("div",{class:"ant-upload-text"},"\u4E0A\u4F20ICON",-1),ee=["src"],te={key:1},oe=i("div",{class:"ant-upload-text"},"\u4E0A\u4F20ICON",-1),ae=i("br",null,null,-1),re=i("br",null,null,-1),se=i("br",null,null,-1);function le(o,d,g,h,C,c){const r=m("Col"),u=m("plus-outlined"),n=m("Upload"),p=m("Row"),F=m("PageWrapper");return s(),D(F,{title:"\u7CFB\u7EDF\u914D\u7F6E",contentBackground:"",content:"",contentClass:"p-4 "},{default:a(()=>[e(p,{type:"flex",style:{"flex-wrap":"nowrap"}},{default:a(()=>[e(r,{flex:"150px"},{default:a(()=>[_("\u7F51\u7AD9ICON\u8BBE\u7F6E\uFF1A")]),_:1}),e(r,{flex:"auto",class:"icon-box"},{default:a(()=>[o.imageUrl?(s(),l("img",{key:0,src:o.imageUrl,alt:"avatar"},null,8,q)):O("",!0),e(n,{style:{margin:"auto"},name:"avatar","list-type":"picture-card",class:"avatar-uploader","show-upload-list":!1,"before-upload":o.beforeUpload,multiple:!1},{default:a(()=>[o.imageUrl?(s(),l("img",{key:0,src:o.imageUrl,alt:"avatar"},null,8,H)):(s(),l("div",K,[e(u),Q]))]),_:1},8,["before-upload"])]),_:1})]),_:1}),e(p,{type:"flex",style:{"flex-wrap":"nowrap"}},{default:a(()=>[e(r,{flex:"150px"},{default:a(()=>[_("\u7CFB\u7EDFLOGO\u8BBE\u7F6E\uFF1A")]),_:1}),e(r,{flex:"auto",class:"icon-box"},{default:a(()=>[e(n,{style:{margin:"auto"},name:"avatar","list-type":"picture-card",class:"avatar-uploader","show-upload-list":!1,"before-upload":o.beforeUpload,multiple:!1},{default:a(()=>[o.imageUrl?(s(),l("img",{key:0,src:o.imageUrl,alt:"avatar"},null,8,X)):(s(),l("div",Y,[e(u),Z]))]),_:1},8,["before-upload"])]),_:1})]),_:1}),e(p,{type:"flex",style:{"flex-wrap":"nowrap"}},{default:a(()=>[e(r,{flex:"150px"},{default:a(()=>[_("\u767B\u5F55\u9875\u80CC\u666F\u8BBE\u7F6E\uFF1A")]),_:1}),e(r,{flex:"auto",class:"icon-box"},{default:a(()=>[e(n,{style:{margin:"auto"},name:"avatar","list-type":"picture-card",class:"avatar-uploader","show-upload-list":!1,"before-upload":o.beforeUpload,multiple:!1},{default:a(()=>[o.imageUrl?(s(),l("img",{key:0,src:o.imageUrl,alt:"avatar"},null,8,ee)):(s(),l("div",te,[e(u),oe]))]),_:1},8,["before-upload"])]),_:1})]),_:1}),ae,re,se,_(" \u7CFB\u7EDF\u540D\u79F0 ")]),_:1})}var it=U(j,[["render",le]]);export{it as default};