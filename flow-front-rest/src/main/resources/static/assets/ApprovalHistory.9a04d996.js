import{a as V,O as R,V as z,R as M,S as c,m as l,T as I,ap as q,ao as G,ak as U,a7 as W,L as X,C as Y,cM as Z,bQ as ee,v as F,h as te,J as oe,aF as D,o as ne,i as ae,z as v,l as x,B as k,t as A}from"./index.a19a7b59.js";import{L as E}from"./index.01b7133f.js";import"./index.5e1a3b76.js";import{A as ie}from"./index.e18493c9.js";import le from"./FlowDiagramModal.4d5292b3.js";import re from"./index.15b79a91.js";import{i as se}from"./process.10a62b0a.js";import{C as ce}from"./ClockCircleOutlined.fe7bf45c.js";import{A as me}from"./ApartmentOutlined.8d868539.js";import"./eagerComputed.2c84d538.js";import"./useFlexGapSupport.c0a56c4d.js";import"./useSize.0e83a8bb.js";import"./index.65b0d1ea.js";import"./useWindowSizeFn.c0064585.js";import"./FullscreenOutlined.13149b2b.js";import"./Viewer.91f06516.js";import"./index.49f22413.js";import"./index.21769bbf.js";import"./useContentViewHeight.491bd798.js";import"./ArrowLeftOutlined.be1e5adc.js";import"./index.1bddd824.js";import"./transButton.7523e23a.js";import"./index.886f7bb4.js";import"./index.b0bf0cb1.js";import"./index.d5d24438.js";import"./throttleByAnimationFrame.8cf43404.js";import"./index.1f075784.js";var ue=function(){return{prefixCls:String,color:String,dot:I.any,pending:{type:Boolean,default:void 0},position:I.oneOf(q("left","right","")).def(""),label:I.any}},O=V({compatConfig:{MODE:3},name:"ATimelineItem",props:R(ue(),{color:"blue",pending:!1}),slots:["dot","label"],setup:function(n,g){var o=g.slots,m=z("timeline",n),e=m.prefixCls;return function(){var d,u,a,i,s,t=n.color,_=t===void 0?"":t,p=n.pending,b=n.label,P=b===void 0?(d=o.label)===null||d===void 0?void 0:d.call(o):b,C=n.dot,L=C===void 0?(u=o.dot)===null||u===void 0?void 0:u.call(o):C,S=M((a={},c(a,"".concat(e.value,"-item"),!0),c(a,"".concat(e.value,"-item-pending"),p),a)),$=M((i={},c(i,"".concat(e.value,"-item-head"),!0),c(i,"".concat(e.value,"-item-head-custom"),L),c(i,"".concat(e.value,"-item-head-").concat(_),!0),i)),N=/blue|red|green|gray/.test(_||"")?void 0:_;return l("li",{class:S},[P&&l("div",{class:"".concat(e.value,"-item-label")},[P]),l("div",{class:"".concat(e.value,"-item-tail")},null),l("div",{class:$,style:{borderColor:N,color:N}},[L]),l("div",{class:"".concat(e.value,"-item-content")},[(s=o.default)===null||s===void 0?void 0:s.call(o)])])}}}),de=function(){return{prefixCls:String,pending:I.any,pendingDot:I.any,reverse:{type:Boolean,default:void 0},mode:I.oneOf(q("left","alternate","right",""))}},y=V({compatConfig:{MODE:3},name:"ATimeline",props:R(de(),{reverse:!1,mode:""}),slots:["pending","pendingDot"],setup:function(n,g){var o=g.slots,m=z("timeline",n),e=m.prefixCls,d=m.direction,u=function(i,s){var t=i.props||{};return n.mode==="alternate"?t.position==="right"?"".concat(e.value,"-item-right"):t.position==="left"||s%2===0?"".concat(e.value,"-item-left"):"".concat(e.value,"-item-right"):n.mode==="left"?"".concat(e.value,"-item-left"):n.mode==="right"||t.position==="right"?"".concat(e.value,"-item-right"):""};return function(){var a,i,s,t,_=n.pending,p=_===void 0?(a=o.pending)===null||a===void 0?void 0:a.call(o):_,b=n.pendingDot,P=b===void 0?(i=o.pendingDot)===null||i===void 0?void 0:i.call(o):b,C=n.reverse,L=n.mode,S=typeof p=="boolean"?null:p,$=G((s=o.default)===null||s===void 0?void 0:s.call(o)),N=p?l(O,{pending:!!p,dot:P||l(U,null,null)},{default:function(){return[S]}}):null;N&&$.push(N);var T=C?$.reverse():$,H=T.length,j="".concat(e.value,"-item-last"),J=T.map(function(h,f){var B=f===H-2?j:"",Q=f===H-1?j:"";return W(h,{class:M([!C&&!!p?B:Q,u(h,f)])})}),w=T.some(function(h){var f,B;return!!((f=h.props)!==null&&f!==void 0&&f.label||(B=h.children)!==null&&B!==void 0&&B.label)}),K=M(e.value,(t={},c(t,"".concat(e.value,"-pending"),!!p),c(t,"".concat(e.value,"-reverse"),!!C),c(t,"".concat(e.value,"-").concat(L),!!L&&!w),c(t,"".concat(e.value,"-label"),w),c(t,"".concat(e.value,"-rtl"),d.value==="rtl"),t));return l("ul",{class:K},[J])}}});y.Item=O;y.install=function(r){return r.component(y.name,y),r.component(O.name,O),r};const pe=V({name:"ApprovalHistory",components:{Button:Y,ApartmentOutlined:me,FlowDiagramModal:le,BpmnPreviewModal:re,Timeline:y,TimelineItem:y.Item,List:E,ListItem:E.Item,ListItemMeta:E.Item.Meta,ClockCircleOutlined:ce,CollapseContainer:Z,Avatar:ie},setup(r,{emit:n}){const{currentRoute:g}=ee(),o=F([]),m=F(!1),{params:{modelKey:e},query:{taskId:d,procInstId:u}}=te(g);return oe(()=>{m.value=!0,se({procInstId:u}).then(a=>{o.value=a}).finally(()=>{m.value=!1})}),{historyList:o,approvalHistoryLoading:m}}}),ve=x("div",{class:"font-bold"},"\u5BA1\u6279\u8BB0\u5F55",-1),fe=x("br",null,null,-1),ge={class:"font-bold"};function _e(r,n,g,o,m,e){const d=D("Avatar"),u=D("ListItemMeta"),a=D("ListItem"),i=D("List"),s=D("CollapseContainer");return ne(),ae(s,{canExpan:!0},{title:v(()=>[ve]),default:v(()=>[x("div",null,[l(i,{loading:r.approvalHistoryLoading,"item-layout":"horizontal",dataSource:r.historyList},{renderItem:v(({item:t})=>[l(a,null,{default:v(()=>[l(u,null,{description:v(()=>[k(A(t.message||"\u65E0"),1),fe]),title:v(()=>[x("span",ge,A(t.activityName),1),k(" "+A(t.time),1)]),avatar:v(()=>[l(d,null,{default:v(()=>[k(A(t.typeName),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1},8,["loading","dataSource"])])]),_:1})}var Je=X(pe,[["render",_e]]);export{Je as default};