import{L as j,a as x,cM as L,eM as W,bA as S,v as r,bQ as k,h as t,ar as y,aF as p,o as A,f as N,m as c,z as f,l as u}from"./index.f3cc7ad7.js";import{D as $,a as J}from"./index.11e1e271.js";import{T as K}from"./index.b2ca6e7c.js";import"./index.3779cff5.js";import{T as M}from"./index.d4f1cd9f.js";import{D as U}from"./index.a56983fb.js";import V from"./index.5eecea9e.js";import{D as q,u as z}from"./index.4cbb0f8b.js";import{e as G,f as Q}from"./process.59d5edec.js";import{R as H,C as X}from"./index.c43829ae.js";import"./useFlexGapSupport.7ceb9daf.js";import"./transButton.89d72f2f.js";import"./CopyOutlined.fc1e0d80.js";import"./get.26f6b197.js";const Y=[{field:"createTime",label:"\u63D0\u4EA4\u65F6\u95F4"}],Z=x({name:"FormContainer",components:{Descriptions:$,DescriptionsItem:J,Tag:K,Row:H,Col:X,CollapseContainer:L,FramePage:V,Divider:U,TypographyTitle:M.Title,Description:q,Skeleton:W},props:{startorBaseInfo:{type:Object,default:null},formType:{type:Number,default:-1}},setup(s){const d=S();function F(){d("/process/launch")}const g=r({}),h=r(!1),D=r(null),m=r(""),{currentRoute:i}=k(),l=r(null),_=r(),a=r(),[v,{setDescProps:R}]=z({bordered:!1,schema:Y}),{path:se,params:{modelKey:C},query:{procInstId:I}}=t(i);y(()=>{m.value="/form-making/index.html#/?modelKey="+C+"&formType=custom"});function b(o){R({data:o})}function w(){B(),t(a).hideIframeLoading()}function B(){G({modelKey:C}).then(o=>{setTimeout(()=>{var n;const e=t(t(a).frameRef);e&&((n=e.contentWindow)!=null&&n.vueObj&&e.contentWindow.CustomForm.loadFormInfo({formJson:o.formJson,editData:null}),I&&Q({procInstId:I}).then(P=>{e.contentWindow.CustomForm.setFormData(JSON.parse(P.formData),!1)}))},0)})}function T(o){var n;const e=t(t(a).frameRef);return e&&((n=e.contentWindow)==null?void 0:n.vueObj)?e.contentWindow.CustomForm.geFormData(o):Promise.reject("\u8868\u5355\u52A0\u8F7D\u5F02\u5E38!")}function E(o){y(()=>{var n;const e=t(t(a).frameRef);debugger;return e&&((n=e.contentWindow)==null?void 0:n.vueObj)?e.contentWindow.CustomForm.seFormData(o):Promise.reject("\u8868\u5355\u52A0\u8F7D\u5F02\u5E38!")})}function O(o,e){return t(_).triggerEvent(o,e)}return{toLaunch:F,formUrl:m,framePageRef:D,baseFormInfo:g,showBaseFormInfo:h,setStartorBaseInfo:b,getFormData:T,setFormData:E,triggerEvent:O,handleOnLoad:w,generateFormRef:_,formRenderFrameRef:a,jsonData:l,registerFlowBaseInfo:v}}}),ee={class:""},oe=u("div",{class:"font-bold"},"\u57FA\u672C\u4FE1\u606F",-1),te={style:{padding:"0 16px"}},ne=u("div",{class:"font-bold"},"\u8868\u5355\u5185\u5BB9",-1),re={style:{"min-height":"300px"}};function ae(s,d,F,g,h,D){const m=p("Description"),i=p("CollapseContainer"),l=p("FramePage");return A(),N("div",ee,[c(i,{canExpan:!0,class:"mt-2"},{title:f(()=>[oe]),default:f(()=>[u("div",te,[c(m,{onRegister:s.registerFlowBaseInfo},null,8,["onRegister"])])]),_:1}),c(i,{canExpan:!0,class:"mt-2"},{title:f(()=>[ne]),default:f(()=>[u("div",re,[c(l,{ref:"formRenderFrameRef",frameSrc:s.formUrl,onOnLoad:s.handleOnLoad},null,8,["frameSrc","onOnLoad"])])]),_:1})])}var Ie=j(Z,[["render",ae]]);export{Ie as default};