import{c as e}from"./index.1bc1d740.js";import{b as i}from"./index.7ceb3563.js";import{z as s,bR as t,Z as r,D as o,F as n,a6 as a,ao as d,w as p}from"./vendor.11d66826.js";import"./index.9aaa1e13.js";/* empty css              *//* empty css              */import"./index.aeea9d58.js";import"./index.512d8a69.js";import"./useWindowSizeFn.9fecf134.js";import"./useFrameKeepAlive.01f37a1d.js";import"./useContentViewHeight.a8198af7.js";/* empty css              */import"./useSortable.072b7c77.js";import"./lock.ab923dbc.js";var c=s({name:"ThemeColorPicker",components:{CheckOutlined:t},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(s){const{prefixCls:t}=e("setting-theme-picker");return{prefixCls:t,handleClick:function(e){s.event&&i(s.event,e)}}}});c.render=function(e,i,s,t,c,l){const m=r("CheckOutlined");return o(),n("div",{class:e.prefixCls},[(o(!0),n(a,null,d(e.colorList||[],(i=>(o(),n("span",{key:i,onClick:s=>e.handleClick(i),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===i}],style:{background:i}},[p(m)],14,["onClick"])))),128))],2)};export default c;