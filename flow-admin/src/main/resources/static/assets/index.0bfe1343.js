import{V as q,am as z,a as J,J as c,L as R,x as m,c9 as g,T as U,U as t,q as o,ca as G,a1 as K,cn as Q,d$ as W,z as X,B as Y,_ as P,bR as Z,ad as ee,e4 as ae,af as ne,ae as oe,e5 as le,e6 as te,e7 as se,e8 as ce}from"./index.ef013507.js";var ie={success:ee,info:ae,error:ne,warning:oe},re={success:le,info:te,error:se,warning:ce},ue=z("success","info","warning","error"),de=function(){return{type:c.oneOf(ue),closable:{type:Boolean,default:void 0},closeText:c.any,message:c.any,description:c.any,afterClose:Function,showIcon:{type:Boolean,default:void 0},prefixCls:String,banner:{type:Boolean,default:void 0},icon:c.any,closeIcon:c.any,onClose:Function}},ve=J({compatConfig:{MODE:3},name:"AAlert",inheritAttrs:!1,props:de(),setup:function(n,v){var s=v.slots,L=v.emit,y=v.attrs,_=v.expose,I=R("alert",n),H=I.prefixCls,N=I.direction,i=m(!1),b=m(!1),w=m(),S=function(a){a.preventDefault();var l=w.value;l.style.height="".concat(l.offsetHeight,"px"),l.style.height="".concat(l.offsetHeight,"px"),i.value=!0,L("close",a)},T=function(){var a;i.value=!1,b.value=!0,(a=n.afterClose)===null||a===void 0||a.call(n)};_({animationEnd:T});var $=m({});return function(){var r,a,l=n.banner,A=n.closeIcon,E=A===void 0?(r=s.closeIcon)===null||r===void 0?void 0:r.call(s):A,h=n.closable,u=n.type,d=n.showIcon,x=g(s,n,"closeText"),f=g(s,n,"description"),O=g(s,n,"message"),p=g(s,n,"icon");d=l&&d===void 0?!0:d,u=l&&u===void 0?"warning":u||"info";var V=(f?re:ie)[u]||null;x&&(h=!0);var e=H.value,j=U(e,(a={},t(a,"".concat(e,"-").concat(u),!0),t(a,"".concat(e,"-closing"),i.value),t(a,"".concat(e,"-with-description"),!!f),t(a,"".concat(e,"-no-icon"),!d),t(a,"".concat(e,"-banner"),!!l),t(a,"".concat(e,"-closable"),h),t(a,"".concat(e,"-rtl"),N.value==="rtl"),a)),k=h?o("button",{type:"button",onClick:S,class:"".concat(e,"-close-icon"),tabindex:0},[x?o("span",{class:"".concat(e,"-close-text")},[x]):E===void 0?o(G,null,null):E]):null,D=p&&(K(p)?Q(p,{class:"".concat(e,"-icon")}):o("span",{class:"".concat(e,"-icon")},[p]))||o(V,{class:"".concat(e,"-icon")},null),M=W("".concat(e,"-motion"),{appear:!1,css:!0,onAfterLeave:T,onBeforeLeave:function(C){C.style.maxHeight="".concat(C.offsetHeight,"px")},onLeave:function(C){C.style.maxHeight="0px"}});return b.value?null:o(Z,M,{default:function(){return[X(o("div",P(P({role:"alert"},y),{},{style:[y.style,$.value],class:[y.class,j],"data-show":!i.value,ref:w}),[d?D:null,o("div",{class:"".concat(e,"-content")},[O?o("div",{class:"".concat(e,"-message")},[O]):null,f?o("div",{class:"".concat(e,"-description")},[f]):null]),k]),[[Y,!i.value]])]}})}}}),pe=q(ve);export{pe as A};