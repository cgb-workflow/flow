import{B as D}from"./TableImg.b1f3ef3e.js";import{l as T}from"./BasicForm.d2fa120b.js";import{u as y}from"./useTable.08d16777.js";import{g as b,d as g}from"./dept.b4db6272.js";import{P as _}from"./index.432b4215.js";import w from"./DictTypeTree.bf93eb24.js";import B from"./DictionaryTable.88881d56.js";import S from"./DictionaryItemTable.27f3e696.js";import{az as C,a as x,w as f,aB as i,o as F,k as v,B as I,p as c,G as R}from"./index.0280002f.js";import{b as M}from"./index.0e48118d.js";import{k,l as P}from"./dictionary.a715f535.js";import"./index.5c81bb10.js";import"./Checkbox.61b53ada.js";import"./index.c68c747e.js";import"./index.86a12b41.js";import"./eagerComputed.832d624f.js";import"./useForm.431e5593.js";import"./index.6db63b77.js";import"./index.81d6e7a6.js";import"./index.3486105d.js";import"./uuid.2b29000c.js";import"./index.9aa048a5.js";import"./_baseIteratee.9e690663.js";import"./get.742319ba.js";import"./DeleteOutlined.1c34c6c1.js";import"./index.a1c94158.js";import"./useRefs.f68e97c5.js";import"./Form.227e5499.js";import"./Col.32e8fee0.js";import"./useFlexGapSupport.f92812e7.js";import"./useSize.71621680.js";import"./useWindowSizeFn.c0eea5f2.js";import"./index.498da238.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.59857f8a.js";import"./FullscreenOutlined.d5490f36.js";import"./index.3dcb35e5.js";import"./fromPairs.84aabb58.js";import"./scrollTo.37a57864.js";import"./index.e5c4a097.js";/* empty css              *//* empty css               */import"./index.46b96662.js";import"./transButton.fa31f1ed.js";import"./index.85e9aa1e.js";import"./index.1d3f95d6.js";import"./download.f8a78464.js";import"./base64Conver.08b9f4ec.js";import"./index.e42b0536.js";import"./index.619bca12.js";import"./uniqBy.facde3d1.js";import"./index.4266ca8e.js";import"./index.02c8bfe1.js";import"./useContentViewHeight.084217e3.js";import"./ArrowLeftOutlined.e9ea5e65.js";import"./index.e0f520b3.js";import"./index.02f82ac6.js";import"./useContextMenu.802fa51b.js";import"./dicType.f04cf3ed.js";import"./DictionaryModal.fccfe75a.js";import"./constantEnum.bf6653fb.js";import"./DictionaryItemModal.0a27df2b.js";const{createMessage:W}=R(),$=x({components:{BasicTable:D,PageWrapper:_,DictTypeTree:w,DictionaryTable:B,DictionaryItemTable:S,TableAction:T},setup(){const[o,{openModal:a}]=M(),r=f(),e=f(),[u,{reload:n}]=y({title:"\u5217\u8868",api:b,columns:k,formConfig:{labelWidth:120,schemas:P,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},useSearchForm:!0,showIndexColumn:!1,bordered:!0,pagination:!1,actionColumn:{width:150,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"}}});function m(){a(!0,{isUpdate:!1})}function p(t){a(!0,{record:t,isUpdate:!0})}function l(t){if(t.children&&t.children.length>0){W.warning("\u6709\u5B50\u8282\u70B9\uFF0C\u4E0D\u80FD\u5220\u9664\uFF01");return}g([t.id]).then(()=>{n()})}function s(){n()}function d(t=""){t?(r.value.filterByDictType(t),e.value.cleanTableData()):r.value.cleanTableData()}function h(t){t?e.value.filterByDict(t):e.value.cleanTableData()}return{dictionaryRef:r,dictionaryItemRef:e,registerTable:u,registerModal:o,handleCreate:m,handleEdit:p,handleDictSelect:h,handleDelete:l,handleSuccess:s,handleDictTypeSelect:d}}});function E(o,a,r,e,u,n){const m=i("DictTypeTree"),p=i("DictionaryTable"),l=i("DictionaryItemTable"),s=i("PageWrapper");return F(),v(s,{dense:"",contentFullHeight:"",contentClass:"flex",class:"p-4"},{default:I(()=>[c(m,{class:"w-1/5 xl:w-1/5",onSelect:o.handleDictTypeSelect},null,8,["onSelect"]),c(p,{ref:"dictionaryRef",onHandleSelect:o.handleDictSelect,class:"w-2/5 xl:w-2/5 ml-2 mr-2"},null,8,["onHandleSelect"]),c(l,{ref:"dictionaryItemRef",class:"w-2/5 xl:w-2/5"},null,512)]),_:1})}var jt=C($,[["render",E]]);export{jt as default};