import{az as m,a as l,e2 as c,c as d,aB as u,o as r,i as o,F as C,aE as _,r as p,bp as f,p as k}from"./index.0280002f.js";import{b as h}from"./index.fde961c6.js";import"./index.31de9a37.js";import"./index.a1683432.js";import"./ArrowLeftOutlined.e9ea5e65.js";import"./index.498da238.js";import"./index.145ab061.js";import"./FullscreenOutlined.d5490f36.js";import"./index.6685c61f.js";import"./useWindowSizeFn.c0eea5f2.js";import"./useContentViewHeight.084217e3.js";import"./useFrameKeepAlive.91c86d6b.js";import"./uniqBy.facde3d1.js";import"./_baseIteratee.9e690663.js";import"./get.742319ba.js";import"./index.c9a8317c.js";import"./useRefs.f68e97c5.js";import"./PlusOutlined.32429b44.js";import"./RedoOutlined.59857f8a.js";import"./index.c99d26d2.js";import"./lock.c59855a3.js";const v=l({name:"ThemeColorPicker",components:{CheckOutlined:c},props:{colorList:{type:Array,default:()=>[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:i}=d("setting-theme-picker");function n(s){e.event&&h(e.event,s)}return{prefixCls:i,handleClick:n}}}),y=["onClick"];function $(e,i,n,s,g,b){const a=u("CheckOutlined");return r(),o("div",{class:p(e.prefixCls)},[(r(!0),o(C,null,_(e.colorList||[],t=>(r(),o("span",{key:t,onClick:z=>e.handleClick(t),class:p([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:f({background:t})},[k(a)],14,y))),128))],2)}var M=m(v,[["render",$]]);export{M as default};