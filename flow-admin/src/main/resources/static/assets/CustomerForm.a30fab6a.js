import{B as C}from"./BasicForm.bc1bc2ec.js";import{u as B}from"./useForm.35a2e1b5.js";import{az as E,a as g,cE as F,I as n,aB as e,o as h,k as b,B as p,p as i,bU as v,G as A}from"./index.bbfb8c5d.js";import{P}from"./index.6f4a9d56.js";/* empty css              *//* empty css               */import"./index.eb776706.js";import"./index.08f5b20b.js";import"./Checkbox.6b0f0619.js";import"./index.932444ce.js";import"./index.bd278e5f.js";import"./index.e860cc21.js";import"./index.ba9876ed.js";import"./index.53f3ac38.js";import"./get.476f8b78.js";import"./index.424465cb.js";import"./eagerComputed.2918d49d.js";import"./index.d0de3318.js";import"./_baseIteratee.6836a2b9.js";import"./DeleteOutlined.426a7a56.js";import"./index.21d11494.js";import"./useRefs.c946e576.js";import"./Form.64d057a8.js";import"./Col.bf638c61.js";import"./useFlexGapSupport.ae09cf13.js";import"./useSize.2da926c0.js";import"./transButton.15723253.js";import"./index.dbc537d6.js";import"./index.56ac9033.js";import"./useWindowSizeFn.daa22200.js";import"./FullscreenOutlined.7b1f5985.js";import"./index.1311bc71.js";import"./index.59bf1cba.js";import"./uuid.2b29000c.js";import"./download.4c3fda74.js";import"./base64Conver.08b9f4ec.js";import"./index.5d0a6eed.js";import"./index.5796c3bd.js";import"./uniqBy.16bfb902.js";import"./index.b7fa4bcc.js";import"./index.8643b1cc.js";import"./useContentViewHeight.ce579b14.js";import"./ArrowLeftOutlined.32f822b8.js";import"./index.40637d17.js";const u=[{field:"field1",component:"Input",label:"render\u65B9\u5F0F",colProps:{span:8},rules:[{required:!0}],render:({model:o,field:t})=>v(n,{placeholder:"\u8BF7\u8F93\u5165",value:o[t],onChange:r=>{o[t]=r.target.value}})},{field:"field2",component:"Input",label:"render\u7EC4\u4EF6slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"\u81EA\u5B9A\u4E49Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}],S=g({components:{BasicForm:C,CollapseContainer:F,PageWrapper:P,[n.name]:n},setup(){const{createMessage:o}=A(),[t,{setProps:r}]=B({labelWidth:120,schemas:u,actionColOptions:{span:24}});return{register:t,schemas:u,handleSubmit:a=>{o.success("click search,values:"+JSON.stringify(a))},setProps:r}}});function I(o,t,r,a,k,x){const l=e("a-input"),c=e("BasicForm"),d=e("CollapseContainer"),f=e("PageWrapper");return h(),b(f,{title:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u793A\u4F8B"},{default:p(()=>[i(d,{title:"\u81EA\u5B9A\u4E49\u8868\u5355"},{default:p(()=>[i(c,{onRegister:o.register,onSubmit:o.handleSubmit},{f3:p(({model:s,field:m})=>[i(l,{value:s[m],"onUpdate:value":_=>s[m]=_,placeholder:"\u81EA\u5B9A\u4E49slot"},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var ho=E(S,[["render",I]]);export{ho as default};