import{az as P,a as C,a$ as $,b0 as A,x as y,bZ as D,aB as s,i as c,l as I,C as t,q as r,D as b,p as i,j as f,G as _,aE as k,t as g,m as v}from"./index.ef013507.js";import{P as N}from"./index.4dfdb4ab.js";import{T as B}from"./index.09ae92e2.js";import"./index.1eabbb9a.js";import"./index.0210df95.js";import"./useSize.55446702.js";import"./eagerComputed.487f958f.js";import"./useWindowSizeFn.37be93ea.js";import"./useContentViewHeight.d02bb685.js";import"./ArrowLeftOutlined.5616a4a1.js";import"./index.412dcca9.js";import"./transButton.750f7635.js";import"./useRefs.5ed2b70f.js";import"./PlusOutlined.95fc7300.js";const V=C({name:"AccountDetail",components:{PageWrapper:N,ATabs:B,ATabPane:B.TabPane},setup(){var a;const e=$(),n=A(),p=y((a=e.params)==null?void 0:a.id),u=y("detail"),{setTitle:m}=D();m("\u8BE6\u60C5\uFF1A\u7528\u6237"+p.value);function d(){n("/system/account")}return{userId:p,currentKey:u,goBack:d}}}),W={class:"pt-4 m-4 desc-wrap"};function w(e,n,p,u,m,d){const a=s("a-button"),l=s("a-tab-pane"),T=s("a-tabs"),K=s("PageWrapper");return c(),I(K,{title:"\u7528\u6237"+e.userId+"\u7684\u8D44\u6599",content:"\u8FD9\u662F\u7528\u6237\u8D44\u6599\u8BE6\u60C5\u9875\u9762\u3002\u672C\u9875\u9762\u4EC5\u7528\u4E8E\u6F14\u793A\u76F8\u540C\u8DEF\u7531\u5728tab\u4E2D\u6253\u5F00\u591A\u4E2A\u9875\u9762\u5E76\u4E14\u663E\u793A\u4E0D\u540C\u7684\u6570\u636E",contentBackground:"",onBack:e.goBack},{extra:t(()=>[r(a,{type:"primary",danger:""},{default:t(()=>[b(" \u7981\u7528\u8D26\u53F7 ")]),_:1}),r(a,{type:"primary"},{default:t(()=>[b(" \u4FEE\u6539\u5BC6\u7801 ")]),_:1})]),footer:t(()=>[r(T,{"default-active-key":"detail",activeKey:e.currentKey,"onUpdate:activeKey":n[0]||(n[0]=o=>e.currentKey=o)},{default:t(()=>[r(l,{key:"detail",tab:"\u7528\u6237\u8D44\u6599"}),r(l,{key:"logs",tab:"\u64CD\u4F5C\u65E5\u5FD7"})]),_:1},8,["activeKey"])]),default:t(()=>[i("div",W,[e.currentKey=="detail"?(c(),f(_,{key:0},k(10,o=>i("div",{key:o},"\u8FD9\u662F\u7528\u6237"+g(e.userId)+"\u8D44\u6599Tab",1)),64)):v("",!0),e.currentKey=="logs"?(c(),f(_,{key:1},k(10,o=>i("div",{key:o},"\u8FD9\u662F\u7528\u6237"+g(e.userId)+"\u64CD\u4F5C\u65E5\u5FD7Tab",1)),64)):v("",!0)])]),_:1},8,["title","onBack"])}var M=P(V,[["render",w]]);export{M as default};