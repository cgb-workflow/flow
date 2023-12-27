import{az as M,a as $,cI as U,ba as C,bv as D,aJ as b,c as N,e as O,v as S,h as A,aB as t,o as n,i as B,p as r,B as d,k as f,l as _,n as a,r as s,t as x,F as E,aQ as P}from"./index.741c5d36.js";import{D as R}from"./siteSetting.136c2269.js";import{c as y,u as V}from"./index.9cfe730d.js";import{b as T}from"./index.ef1baeca.js";import{h as z}from"./header.d801b988.js";import"./FullscreenOutlined.d8f1076a.js";import"./index.260a512e.js";import"./useWindowSizeFn.54947215.js";import"./useContentViewHeight.1814e20c.js";import"./useFrameKeepAlive.bc2bf6e8.js";import"./uniqBy.c3dbbda0.js";import"./_baseIteratee.9655ef6b.js";import"./get.9f08d1a5.js";import"./index.1cbe5b78.js";import"./index.97f32770.js";import"./useRefs.31b824e4.js";import"./PlusOutlined.5bbe1aad.js";import"./RedoOutlined.d982c887.js";import"./index.8f63e937.js";import"./lock.0db9de73.js";const F=$({name:"UserDropdown",components:{Dropdown:U,Menu:C,MenuItem:y(()=>D(()=>import("./DropMenuItem.c91317fb.js"),["assets/DropMenuItem.c91317fb.js","assets/index.741c5d36.js","assets/index.f0ae4520.css"])),MenuDivider:C.Divider,LockAction:y(()=>D(()=>import("./LockModal.cb48885a.js"),["assets/LockModal.cb48885a.js","assets/LockModal.0068f88c.css","assets/index.755a9be8.css","assets/index.a18cc309.css","assets/index.741c5d36.js","assets/index.f0ae4520.css","assets/index.ef1baeca.js","assets/index.5fe377f2.css","assets/useWindowSizeFn.54947215.js","assets/FullscreenOutlined.d8f1076a.js","assets/BasicForm.35bf3188.js","assets/BasicForm.d409dfd8.css","assets/index.d23d5e7f.js","assets/index.3a3c1369.css","assets/index.d4ff1276.js","assets/index.bf52b4a9.css","assets/Checkbox.2841bc84.js","assets/index.5fb5b3b2.js","assets/index.251bd2e0.css","assets/index.abe396df.js","assets/index.0c83dcde.css","assets/index.73bb7fa2.js","assets/index.76b3b2f6.css","assets/index.5fd79f94.js","assets/index.494fc9a0.css","assets/index.249616b7.js","assets/index.7b8b5e30.css","assets/get.9f08d1a5.js","assets/index.4960ebac.js","assets/index.0a761085.css","assets/eagerComputed.1e0895dc.js","assets/index.46c568bc.js","assets/index.a57b6a38.css","assets/_baseIteratee.9655ef6b.js","assets/DeleteOutlined.d4d5ebae.js","assets/index.0f0cf900.js","assets/index.be76bb82.css","assets/useRefs.31b824e4.js","assets/Form.41e509ff.js","assets/Col.ba611277.js","assets/useFlexGapSupport.28e961f9.js","assets/useSize.aa4022ca.js","assets/transButton.76f8f88c.js","assets/index.7b2c1cea.js","assets/index.cd256673.css","assets/index.847bc6c1.js","assets/index.16ebb72a.css","assets/index.ae783029.js","assets/index.0ec4bbd2.css","assets/uuid.2b29000c.js","assets/download.102dd35e.js","assets/base64Conver.08b9f4ec.js","assets/index.2f746864.js","assets/index.88b1d373.css","assets/index.196769f5.js","assets/uniqBy.c3dbbda0.js","assets/useForm.8dec0b63.js","assets/lock.0db9de73.js","assets/header.d801b988.js"]))},props:{theme:b.oneOf(["dark","light"])},setup(){const{prefixCls:e}=N("header-user-dropdown"),{t:g}=O(),{getShowDoc:k,getUseLockPage:h}=V(),i=S(),v=A(()=>{const{realName:u="",image:I,desc:L}=i.getUserInfo||{};return{realName:u,avatar:I||z,desc:L}}),[o,{openModal:l}]=T();function c(){l(!0)}function p(){i.confirmLoginOut()}function m(){P(R)}function w(u){switch(u.key){case"logout":p();break;case"doc":m();break;case"lock":c();break}}return{prefixCls:e,t:g,getUserInfo:v,handleMenuClick:w,getShowDoc:k,register:o,getUseLockPage:h}}}),H=["src"];function J(e,g,k,h,i,v){const o=t("MenuItem"),l=t("MenuDivider"),c=t("Menu"),p=t("Dropdown"),m=t("LockAction");return n(),B(E,null,[r(p,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:d(()=>[r(c,{onClick:e.handleMenuClick},{default:d(()=>[e.getShowDoc?(n(),f(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):_("",!0),e.getShowDoc?(n(),f(l,{key:1})):_("",!0),e.getUseLockPage?(n(),f(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):_("",!0),r(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:d(()=>[a("span",{class:s([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[a("img",{class:s(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,H),a("span",{class:s(`${e.prefixCls}__info hidden md:block`)},[a("span",{class:s([`${e.prefixCls}__name  `,"truncate"])},x(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),r(m,{onRegister:e.register},null,8,["onRegister"])],64)}var me=M(F,[["render",J]]);export{me as default};