import{L as m,a as l,dA as c,b as d,aF as u,o as r,f as o,F as f,aI as C,p as a,b0 as _,m as k}from"./index.75df828b.js";import{b as h}from"./index.3b7ed894.js";import"./index.81c35c16.js";import"./FullscreenOutlined.bfc2b1fe.js";import"./index.56ecbfb8.js";import"./useWindowSizeFn.1b303f48.js";import"./uniqBy.dbe2d7f9.js";import"./_baseIteratee.a14bac2a.js";import"./get.84b8183b.js";import"./useContentViewHeight.1db0a346.js";import"./index.e72a2c0b.js";import"./useRefs.2caae181.js";import"./PlusOutlined.58f79c9c.js";import"./RedoOutlined.9808b698.js";import"./index.04511fa8.js";import"./lock.d3b16676.js";import"./ArrowLeftOutlined.ec67e314.js";import"./index.d37cd69d.js";const v=l({name:"ThemeColorPicker",components:{CheckOutlined:c},props:{colorList:{type:Array,default:()=>[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:i}=d("setting-theme-picker");function n(s){e.event&&h(e.event,s)}return{prefixCls:i,handleClick:n}}}),y=["onClick"];function $(e,i,n,s,b,g){const p=u("CheckOutlined");return r(),o("div",{class:a(e.prefixCls)},[(r(!0),o(f,null,C(e.colorList||[],t=>(r(),o("span",{key:t,onClick:L=>e.handleClick(t),class:a([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:_({background:t})},[k(p)],14,y))),128))],2)}var G=m(v,[["render",$]]);export{G as default};