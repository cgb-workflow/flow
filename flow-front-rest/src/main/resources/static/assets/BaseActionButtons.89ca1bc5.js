import{L as B,a as _,C as f,bX as w,bQ as h,h as g,aF as o,o as v,f as P,m as t,z as s,B as M,F as C}from"./index.54e75e3e.js";import{u as k}from"./index.d4677f89.js";import A from"./index.f6da764c.js";import{A as F}from"./ApartmentOutlined.72d44b75.js";import"./useWindowSizeFn.42b5da8d.js";import"./FullscreenOutlined.88a2731c.js";import"./index.065426b6.js";import"./index.5c6125f6.js";import"./index.c5343d42.js";import"./useSize.5174038b.js";import"./eagerComputed.e474cd0d.js";import"./useContentViewHeight.027863b0.js";import"./ArrowLeftOutlined.e237c43c.js";import"./index.24ba8bad.js";import"./transButton.f88255e1.js";import"./index.0ff17afb.js";import"./index.39b3ae58.js";import"./useFlexGapSupport.f9214675.js";import"./index.86da1d02.js";import"./throttleByAnimationFrame.d15f38b9.js";import"./index.22b16c3f.js";import"./Viewer.ca2e1abd.js";import"./process.0c905273.js";const x=_({name:"BaseActionButtons",components:{Button:f,Tooltip:w,ApartmentOutlined:F,BpmnPreviewModal:A},setup(e,{emit:u}){const{currentRoute:a}=h(),{params:{modelKey:m},query:{taskId:c,procInstId:l}}=g(a),[n,{openModal:r,setModalProps:i}]=k();function p(){r(!0,{modelKey:m,procInstId:l||"",isUpdate:!0}),i({bodyStyle:{padding:"0px",margin:"0px"},width:900,height:400,showOkBtn:!1,showCancelBtn:!0,cancelText:"\u5173\u95ED"})}function d(){return Promise.resolve(!0)}return{registerBpmnPreviewModal:n,handleCloseFunc:d,showFlowDiagram:p}}});function y(e,u,a,m,c,l){const n=o("ApartmentOutlined"),r=o("Button"),i=o("Tooltip"),p=o("BpmnPreviewModal");return v(),P(C,null,[t(i,null,{title:s(()=>[M("\u67E5\u770B\u6D41\u7A0B\u56FE")]),default:s(()=>[t(r,{type:"link",onClick:e.showFlowDiagram},{icon:s(()=>[t(n)]),_:1},8,["onClick"])]),_:1}),t(p,{onRegister:e.registerBpmnPreviewModal},null,8,["onRegister"])],64)}var Y=B(x,[["render",y]]);export{Y as default};