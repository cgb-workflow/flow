var A=Object.defineProperty,I=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var B=(u,t,e)=>t in u?A(u,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[t]=e,E=(u,t)=>{for(var e in t||(t={}))C.call(t,e)&&B(u,e,t[e]);if(h)for(var e of h(t))P.call(t,e)&&B(u,e,t[e]);return u},b=(u,t)=>I(u,q(t));var F=(u,t,e)=>new Promise((n,a)=>{var c=o=>{try{r(e.next(o))}catch(l){a(l)}},i=o=>{try{r(e.throw(o))}catch(l){a(l)}},r=o=>o.done?n(o.value):Promise.resolve(o.value).then(c,i);r((e=e.apply(u,t)).next())});import{B as M,a as S}from"./index.30115123.js";import{B as j}from"./BasicForm.6afa01de.js";import{u as v}from"./useForm.1fd322f5.js";import{z as y,ba as k,A as N,r as R,u as p,j as $,a0 as w,B as T,a1 as V,a6 as O,w as z,a4 as L}from"./vendor.7bee64cc.js";/* empty css               */import{c as U,s as W}from"./positionSeq.df87a519.js";import{_ as G}from"./index.9eb02b52.js";const ae=[{title:"\u540D\u79F0",dataIndex:"name",align:"left"},{title:"\u7F16\u7801",dataIndex:"code",align:"left"},{title:"\u72B6\u6001",dataIndex:"status",width:80,customRender:({record:u})=>{const e=~~u.status==1,n=e?"green":"red",a=e?"\u542F\u7528":"\u505C\u7528";return y(k,{color:n},()=>a)}},{title:"\u6392\u5E8F\u7F16\u53F7",dataIndex:"orderNo",width:100,align:"left"},{title:"\u5907\u6CE8",dataIndex:"note",align:"left"}],re=[{field:"keyword",label:"\u5173\u952E\u5B57",component:"Input",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0/\u7F16\u7801"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],Z=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"name",label:"\u540D\u79F0",required:!0,component:"Input",show:!0,rules:[{required:!0,whitespace:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{max:80,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E80\uFF01"}]},{field:"code",label:"\u7F16\u7801",required:!0,component:"Input",show:!0},{field:"pid",label:"\u7236\u7EA7\u7F16\u7801",required:!1,component:"Input",show:!1},{field:"orderNo",label:"\u6392\u5E8F\u7F16\u53F7",required:!1,component:"InputNumber",show:!0},{field:"status",label:"\u72B6\u6001",required:!1,component:"Switch",defaultValue:!0,componentProps:{checkedChildren:"\u542F\u7528",unCheckedChildren:"\u505C\u7528"}},{field:"note",label:"\u5907\u6CE8",required:!1,component:"InputTextArea",show:!0,rules:[{max:255,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E255\uFF01"}]}],H=N({name:"PositionSeqModal",components:{BasicModal:M,BasicForm:j},emits:["success","register"],setup(u,{emit:t}){const e=R(!0),[n,{resetFields:a,updateSchema:c,setFieldsValue:i,validate:r}]=v({labelWidth:100,schemas:Z,showActionButtonGroup:!1}),o=s=>[{trigger:"blur",validator:(d,g)=>g?U({id:s.id,field:s.field,fieldValue:g,fieldName:s.fieldName}).then(f=>f?Promise.resolve():Promise.reject(s.fieldName+"\u5DF2\u5B58\u5728\uFF0C\u8BF7\u4FEE\u6539\uFF01")).catch(f=>Promise.reject(f)):Promise.resolve()}],[l,{setModalProps:m,closeModal:D}]=S(s=>F(this,null,function*(){yield a(),m({confirmLoading:!1}),e.value=!!(s==null?void 0:s.isUpdate);let d=s.record;yield c([{field:"code",dynamicRules:()=>[{required:!0,whitespace:!0,message:"\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"\u8BF7\u8F93\u5165\u82F1\u6587\u6216\u6570\u5B57\uFF01"},{max:40,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E40\uFF01"},...o({id:p(e)&&d&&d.id||"",field:"code",fieldValue:"",fieldName:"\u6807\u8BC6"})]}]),p(e)&&i(b(E({},d),{status:d.status===1}))})),_=$(()=>p(e)?"\u4FEE\u6539":"\u65B0\u589E");function x(){return F(this,null,function*(){try{m({confirmLoading:!0});const s=yield r();s.status=s.status?1:0,yield W(s),D(),t("success")}finally{m({confirmLoading:!1})}})}return{registerModal:l,registerForm:n,getTitle:_,handleSubmit:x}}});function J(u,t,e,n,a,c){const i=w("BasicForm"),r=w("BasicModal");return T(),V(r,L(u.$attrs,{onRegister:u.registerModal,title:u.getTitle,onOk:u.handleSubmit}),{default:O(()=>[z(i,{onRegister:u.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var K=G(H,[["render",J]]),ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:K});export{K as P,ne as a,ae as c,re as s};