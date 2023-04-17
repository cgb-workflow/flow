import{az as M,a as $,cI as U,ba as C,bv as D,aJ as b,c as N,e as O,v as S,h as A,aB as t,o as n,i as B,p as r,B as d,k as f,l as _,n as a,r as s,t as x,F as E,aQ as P}from"./index.da587afe.js";import{D as R}from"./siteSetting.136c2269.js";import{c as y,u as V}from"./index.ba5e1116.js";import{b as T}from"./index.e8eb4b57.js";import{h as z}from"./header.d801b988.js";import"./FullscreenOutlined.3d903e0f.js";import"./index.a912e0ed.js";import"./useWindowSizeFn.3fdab581.js";import"./useContentViewHeight.f2db75e2.js";import"./useFrameKeepAlive.ec663918.js";import"./uniqBy.f906dabc.js";import"./_baseIteratee.78d8c020.js";import"./get.40c34cfc.js";import"./index.f277a2c9.js";import"./index.77df2807.js";import"./useRefs.1aead304.js";import"./PlusOutlined.3b3e37c8.js";import"./RedoOutlined.46184af0.js";import"./index.4b69e39b.js";import"./lock.25b84ca8.js";const F=$({name:"UserDropdown",components:{Dropdown:U,Menu:C,MenuItem:y(()=>D(()=>import("./DropMenuItem.1e0fb08d.js"),["assets/DropMenuItem.1e0fb08d.js","assets/index.da587afe.js","assets/index.f0ae4520.css"])),MenuDivider:C.Divider,LockAction:y(()=>D(()=>import("./LockModal.7832890f.js"),["assets/LockModal.7832890f.js","assets/LockModal.0068f88c.css","assets/index.755a9be8.css","assets/index.a18cc309.css","assets/index.da587afe.js","assets/index.f0ae4520.css","assets/index.e8eb4b57.js","assets/index.5fe377f2.css","assets/useWindowSizeFn.3fdab581.js","assets/FullscreenOutlined.3d903e0f.js","assets/BasicForm.51e3eb56.js","assets/BasicForm.d409dfd8.css","assets/index.a64c8a60.js","assets/index.3a3c1369.css","assets/index.492229cd.js","assets/index.bf52b4a9.css","assets/Checkbox.9d75a86f.js","assets/index.5aab84c4.js","assets/index.251bd2e0.css","assets/index.9d0fc194.js","assets/index.0c83dcde.css","assets/index.447b3242.js","assets/index.76b3b2f6.css","assets/index.d7c8b760.js","assets/index.494fc9a0.css","assets/index.b3a5d1df.js","assets/index.7b8b5e30.css","assets/get.40c34cfc.js","assets/index.a85fa86f.js","assets/index.0a761085.css","assets/eagerComputed.3bbb876f.js","assets/index.3c9c3a6f.js","assets/index.a57b6a38.css","assets/_baseIteratee.78d8c020.js","assets/DeleteOutlined.690086a4.js","assets/index.d1cda802.js","assets/index.be76bb82.css","assets/useRefs.1aead304.js","assets/Form.f8b72655.js","assets/Col.4ac749bb.js","assets/useFlexGapSupport.caa26b6d.js","assets/useSize.dbee3c08.js","assets/transButton.1d3b575b.js","assets/index.5d1da0c4.js","assets/index.cd256673.css","assets/index.72d53e09.js","assets/index.16ebb72a.css","assets/index.813f510f.js","assets/index.0ec4bbd2.css","assets/uuid.2b29000c.js","assets/download.75f04d3f.js","assets/base64Conver.08b9f4ec.js","assets/index.9912aa68.js","assets/index.88b1d373.css","assets/index.36675b6e.js","assets/uniqBy.f906dabc.js","assets/useForm.d201bd46.js","assets/lock.25b84ca8.js","assets/header.d801b988.js"]))},props:{theme:b.oneOf(["dark","light"])},setup(){const{prefixCls:e}=N("header-user-dropdown"),{t:g}=O(),{getShowDoc:k,getUseLockPage:h}=V(),i=S(),v=A(()=>{const{realName:u="",image:I,desc:L}=i.getUserInfo||{};return{realName:u,avatar:I||z,desc:L}}),[o,{openModal:l}]=T();function c(){l(!0)}function p(){i.confirmLoginOut()}function m(){P(R)}function w(u){switch(u.key){case"logout":p();break;case"doc":m();break;case"lock":c();break}}return{prefixCls:e,t:g,getUserInfo:v,handleMenuClick:w,getShowDoc:k,register:o,getUseLockPage:h}}}),H=["src"];function J(e,g,k,h,i,v){const o=t("MenuItem"),l=t("MenuDivider"),c=t("Menu"),p=t("Dropdown"),m=t("LockAction");return n(),B(E,null,[r(p,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:d(()=>[r(c,{onClick:e.handleMenuClick},{default:d(()=>[e.getShowDoc?(n(),f(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):_("",!0),e.getShowDoc?(n(),f(l,{key:1})):_("",!0),e.getUseLockPage?(n(),f(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):_("",!0),r(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:d(()=>[a("span",{class:s([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[a("img",{class:s(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,H),a("span",{class:s(`${e.prefixCls}__info hidden md:block`)},[a("span",{class:s([`${e.prefixCls}__name  `,"truncate"])},x(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),r(m,{onRegister:e.register},null,8,["onRegister"])],64)}var me=M(F,[["render",J]]);export{me as default};