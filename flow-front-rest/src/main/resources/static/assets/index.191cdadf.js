import{m as u,r as $,aA as j,a as I,V as H,v as R,w as N,K as U,ar as O,J as M,cI as z,f9 as W,Y as J,_ as T,S as w,d0 as X,x as Y,y as q,cm as G,da as Q,L as Z,c2 as D,br as K,fa as tt,b as et,e as E,h as _,cj as L,aF as S,o as b,f as ot,i as P,j as B,p as nt,F as rt}from"./index.75df828b.js";import{c as V,u as at}from"./index.81c35c16.js";import it from"./SessionTimeoutLogin.bdb64c5d.js";import{s as st,g as ct}from"./scrollTo.70c0406c.js";import{t as lt}from"./throttleByAnimationFrame.9c05ab18.js";import"./FullscreenOutlined.bfc2b1fe.js";import"./index.56ecbfb8.js";import"./useWindowSizeFn.1b303f48.js";import"./uniqBy.dbe2d7f9.js";import"./_baseIteratee.a14bac2a.js";import"./get.84b8183b.js";import"./useContentViewHeight.1db0a346.js";import"./index.e72a2c0b.js";import"./useRefs.2caae181.js";import"./PlusOutlined.58f79c9c.js";import"./RedoOutlined.9808b698.js";import"./index.04511fa8.js";import"./lock.d3b16676.js";import"./Login.10c0710d.js";import"./LoginForm.c401b47c.js";import"./index.56275832.js";import"./index.c9469de7.js";import"./index.4ae6698d.js";import"./useFlexGapSupport.4972a32f.js";import"./useSize.f8b8ed9e.js";import"./index.d37cd69d.js";import"./LoginFormTitle.054ad441.js";import"./GithubFilled.bd064fe2.js";import"./index.9f5ee9cb.js";import"./ForgetPasswordForm.ed6d620f.js";import"./index.0b1a59fd.js";import"./RegisterForm.923ba0e8.js";import"./index.7b123a8b.js";import"./MobileForm.32719197.js";import"./QrCodeForm.65bab889.js";import"./download.434cc58b.js";var ut={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"},pt=ut;function x(t){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(r){return Object.getOwnPropertyDescriptor(o,r).enumerable}))),n.forEach(function(r){mt(t,r,o[r])})}return t}function mt(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var A=function(e,o){var n=x({},e,o.attrs);return u($,x({},n,{icon:pt}),null)};A.displayName="VerticalAlignTopOutlined";A.inheritAttrs=!1;var gt=A,vt=function(){return{visibilityHeight:{type:Number,default:400},duration:{type:Number,default:450},target:Function,prefixCls:String,onClick:Function}},ft=I({compatConfig:{MODE:3},name:"ABackTop",inheritAttrs:!1,props:vt(),setup:function(e,o){var n=o.slots,r=o.attrs,d=o.emit,p=H("back-top",e),c=p.prefixCls,g=p.direction,i=R(),v=N({visible:!1,scrollEvent:null}),C=function(){return i.value&&i.value.ownerDocument?i.value.ownerDocument:window},F=function(s){var l=e.target,m=l===void 0?C:l,f=e.duration;st(0,{getContainer:m,duration:f}),d("click",s)},h=lt(function(a){var s=e.visibilityHeight,l=ct(a.target,!0);v.visible=l>s}),y=function(){var s=e.target,l=s||C,m=l();v.scrollEvent=Q(m,"scroll",function(f){h(f)}),h({target:m})},k=function(){v.scrollEvent&&v.scrollEvent.remove(),h.cancel()};return U(function(){return e.target},function(){k(),O(function(){y()})}),M(function(){O(function(){y()})}),z(function(){O(function(){y()})}),W(function(){k()}),J(function(){k()}),function(){var a,s,l=u("div",{class:"".concat(c.value,"-content")},[u("div",{class:"".concat(c.value,"-icon")},[u(gt,null,null)])]),m=T(T({},r),{},{onClick:F,class:(a={},w(a,"".concat(c.value),!0),w(a,"".concat(r.class),r.class),w(a,"".concat(c.value,"-rtl"),g.value==="rtl"),a)}),f=X("fade");return u(G,f,{default:function(){return[Y(u("div",T(T({},m),{},{ref:i}),[((s=n.default)===null||s===void 0?void 0:s.call(n))||l]),[[q,v.visible]])]}})}}}),dt=j(ft);const Tt=I({name:"LayoutFeatures",components:{BackTop:dt,LayoutLockPage:V(()=>D(()=>import("./index.ef20e18a.js"),["assets/index.ef20e18a.js","assets/index.75df828b.js","assets/index.269e233e.css","assets/LockPage.7a9865e6.js","assets/LockPage.ad5cabd1.css","assets/lock.d3b16676.js","assets/header.d801b988.js"])),SettingDrawer:V(()=>D(()=>import("./index.3b7ed894.js").then(function(t){return t.i}),["assets/index.3b7ed894.js","assets/index.fbe1d78d.css","assets/index.75df828b.js","assets/index.269e233e.css","assets/index.81c35c16.js","assets/index.e590ad8d.css","assets/FullscreenOutlined.bfc2b1fe.js","assets/index.56ecbfb8.js","assets/index.fbb444ab.css","assets/useWindowSizeFn.1b303f48.js","assets/uniqBy.dbe2d7f9.js","assets/_baseIteratee.a14bac2a.js","assets/get.84b8183b.js","assets/useContentViewHeight.1db0a346.js","assets/index.e72a2c0b.js","assets/index.729371a4.css","assets/useRefs.2caae181.js","assets/PlusOutlined.58f79c9c.js","assets/RedoOutlined.9808b698.js","assets/index.04511fa8.js","assets/lock.d3b16676.js","assets/ArrowLeftOutlined.ec67e314.js","assets/index.d37cd69d.js","assets/index.3a3c1369.css"])),SessionTimeoutLogin:it},setup(){const{getUseOpenBackTop:t,getShowSettingButton:e,getSettingButtonPosition:o,getFullContent:n}=K(),r=tt(),{prefixCls:d}=et("setting-drawer-feature"),{getShowHeader:p}=at(),c=E(()=>r.getSessionTimeout),g=E(()=>{if(!_(e))return!1;const i=_(o);return i===L.AUTO?!_(p)||_(n):i===L.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:t,getIsFixedSettingDrawer:g,prefixCls:d,getIsSessionTimeout:c}}});function _t(t,e,o,n,r,d){const p=S("LayoutLockPage"),c=S("BackTop"),g=S("SettingDrawer"),i=S("SessionTimeoutLogin");return b(),ot(rt,null,[u(p),t.getUseOpenBackTop?(b(),P(c,{key:0,target:t.getTarget},null,8,["target"])):B("",!0),t.getIsFixedSettingDrawer?(b(),P(g,{key:1,class:nt(t.prefixCls)},null,8,["class"])):B("",!0),t.getIsSessionTimeout?(b(),P(i,{key:2})):B("",!0)],64)}var oe=Z(Tt,[["render",_t]]);export{oe as default};