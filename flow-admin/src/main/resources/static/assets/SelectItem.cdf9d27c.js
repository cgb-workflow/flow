import{az as i,a as r,cY as l,c as p,h as m,aB as d,i as c,j as u,p as f,t as g,q as _,aC as v,s as C}from"./index.e61ad282.js";import{b}from"./index.603bbce5.js";import"./index.e8c40a81.js";import"./index.cd444a78.js";import"./ArrowLeftOutlined.0e95a5b3.js";import"./index.9f50e000.js";import"./index.d9aea20d.js";import"./FullscreenOutlined.3a424424.js";import"./index.5f71bdf9.js";import"./useWindowSizeFn.27de1b1b.js";import"./useContentViewHeight.34702d2a.js";import"./useFrameKeepAlive.63b5b436.js";import"./uniqBy.8c214189.js";import"./_baseIteratee.7ece590b.js";import"./get.bca7403a.js";import"./index.f066cc44.js";import"./useRefs.0c428178.js";import"./PlusOutlined.e602ccf2.js";import"./RedoOutlined.5bbc1139.js";import"./index.8e210a09.js";import"./lock.d310358f.js";const y=r({name:"SelectItem",components:{Select:l},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(e){const{prefixCls:t}=p("setting-select-item"),a=m(()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{});function o(n){e.event&&b(e.event,n)}return{prefixCls:t,handleChange:o,getBindValue:a}}});function S(e,t,a,o,n,h){const s=d("Select");return c(),u("div",{class:C(e.prefixCls)},[f("span",null,g(e.title),1),_(s,v(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}var L=i(y,[["render",S],["__scopeId","data-v-2dba4940"]]);export{L as default};