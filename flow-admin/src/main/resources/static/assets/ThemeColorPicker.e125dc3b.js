import{c as e}from"./index.f9173908.js";import{b as i}from"./index.3a7fe7e0.js";import{j as s,bQ as t,K as r,o as n,m as o,V as a,ah as p,n as d}from"./vendor.686fd1d4.js";import"./index.8d19647b.js";/* empty css              *//* empty css              */import"./index.55abb400.js";import"./index.5a2454ef.js";import"./useWindowSizeFn.d82e06bf.js";import"./useFrameKeepAlive.e47eafb1.js";import"./useContentViewHeight.1a732a79.js";/* empty css              */import"./useSortable.77b911cf.js";import"./lock.ffb7c980.js";var f=s({name:"ThemeColorPicker",components:{CheckOutlined:t},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(s){const{prefixCls:t}=e("setting-theme-picker");return{prefixCls:t,handleClick:function(e){s.event&&i(s.event,e)}}}});f.render=function(e,i,s,t,f,l){const m=r("CheckOutlined");return n(),o("div",{class:e.prefixCls},[(n(!0),o(a,null,p(e.colorList||[],(i=>(n(),o("span",{key:i,onClick:s=>e.handleClick(i),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===i}],style:{background:i}},[d(m)],14,["onClick"])))),128))],2)};export default f;