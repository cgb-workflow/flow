import{B as _}from"./TableImg.3ff4c1b4.js";import{l as B}from"./BasicForm.bc1bc2ec.js";import{u as P}from"./useTable.dffabf3f.js";import{a as T,d as F}from"./positionInfo.c8ad18b9.js";import{P as E}from"./index.6f4a9d56.js";import w from"./PositionSeqTree.c31bb39d.js";import{b as M}from"./index.56ac9033.js";import{P as I,c as k,s as y}from"./PositionInfoModal.eaf9b120.js";import{az as D,a as q,fB as x,w as v,aB as i,o as b,k as S,B as a,p as s,C as A,l as R,j as C,G as N}from"./index.bbfb8c5d.js";import"./index.08f5b20b.js";import"./Checkbox.6b0f0619.js";import"./index.932444ce.js";import"./index.424465cb.js";import"./eagerComputed.2918d49d.js";import"./useForm.35a2e1b5.js";import"./index.e860cc21.js";import"./index.ba9876ed.js";import"./index.bd278e5f.js";import"./uuid.2b29000c.js";import"./index.d0de3318.js";import"./_baseIteratee.6836a2b9.js";import"./get.476f8b78.js";import"./DeleteOutlined.426a7a56.js";import"./index.21d11494.js";import"./useRefs.c946e576.js";import"./Form.64d057a8.js";import"./Col.bf638c61.js";import"./useFlexGapSupport.ae09cf13.js";import"./useSize.2da926c0.js";import"./useWindowSizeFn.daa22200.js";import"./index.eb776706.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.566a8b2c.js";import"./FullscreenOutlined.7b1f5985.js";import"./index.59bf1cba.js";import"./fromPairs.daf93cb7.js";import"./scrollTo.1bc5bfb7.js";import"./index.a824713f.js";/* empty css              *//* empty css               */import"./index.53f3ac38.js";import"./transButton.15723253.js";import"./index.dbc537d6.js";import"./index.1311bc71.js";import"./download.4c3fda74.js";import"./base64Conver.08b9f4ec.js";import"./index.5d0a6eed.js";import"./index.5796c3bd.js";import"./uniqBy.16bfb902.js";import"./index.b7fa4bcc.js";import"./index.8643b1cc.js";import"./useContentViewHeight.ce579b14.js";import"./ArrowLeftOutlined.32f822b8.js";import"./index.40637d17.js";import"./index.6f678a8f.js";import"./useContextMenu.b34fb2fb.js";import"./positionSeq.1e9620a2.js";import"./constantEnum.bf6653fb.js";const{createMessage:W}=N(),$=q({name:"PositionInfo",components:{BasicTable:_,PageWrapper:E,PositionSeqTree:w,PositionInfoModal:I,TableAction:B,Popconfirm:x},setup(){const[o,{openModal:p,setModalProps:l}]=M(),t=v({}),[g,{reload:m,setProps:u}]=P({title:"\u5217\u8868",api:T,columns:k,formConfig:{labelWidth:120,schemas:y,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:100,title:"\u64CD\u4F5C",dataIndex:"action",fixed:!1}});function c(){if(!C(t).id){W.warning("\u8BF7\u9009\u62E9\u5C97\u4F4D\u5E8F\u5217\uFF01",2);return}l({title:"\u65B0\u589E\u5C97\u4F4D"}),p(!0,{record:{positionSeqId:C(t).id,positionSeqCode:C(t).code},isUpdate:!0})}function d(e){l({title:"\u4FEE\u6539\u5C97\u4F4D"}),p(!0,{record:e,isUpdate:!0})}function f(e){F([e.id]).then(()=>{m()})}function h(){setTimeout(()=>{n(t.value)},200)}function n(e){t.value=e;let r={positionSeqId:e?e.id:""};u({searchInfo:r}),m({searchInfo:r})}return{registerTable:g,registerModal:o,handleCreate:c,handleEdit:d,handleDelete:f,handleSuccess:h,handleSelect:n}}});function V(o,p,l,t,g,m){const u=i("PositionSeqTree"),c=i("a-button"),d=i("TableAction"),f=i("BasicTable"),h=i("PositionInfoModal"),n=i("PageWrapper");return b(),S(n,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:a(()=>[s(u,{class:"w-1/4 xl:w-1/5",onSelect:o.handleSelect},null,8,["onSelect"]),s(f,{onRegister:o.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:a(()=>[s(c,{type:"primary",onClick:o.handleCreate},{default:a(()=>[A("\u65B0\u589E")]),_:1},8,["onClick"])]),bodyCell:a(({column:e,record:r})=>[e.key==="action"?(b(),S(d,{key:0,actions:[{tooltip:"\u4FEE\u6539",icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,r)},{tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:o.handleDelete.bind(null,r),placement:"left"}}]},null,8,["actions"])):R("",!0)]),_:1},8,["onRegister"]),s(h,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}var Oo=D($,[["render",V]]);export{Oo as default};