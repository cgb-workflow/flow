import{a as m,b1 as _,cV as h,cW as f,L as g,aF as s,o as r,i as y,z as a,m as n,l as o,f as i,F as C,aI as v,b0 as b,t as w,aG as $}from"./index.a19a7b59.js";import{C as l}from"./index.af972ef5.js";import"./index.d1b1d25a.js";import"./index.5e1a3b76.js";import{C as k}from"./index.0bec4bfc.js";import"./index.7a2dfd59.js";import"./index.822cef18.js";import"./useRefs.4b0733e6.js";import"./useFlexGapSupport.c0a56c4d.js";const x=m({props:{dataSource:Array,height:{type:Number,default:200}},components:{Card:l,CardGrid:l.Grid,Icon:_,Carousel:k,LeftOutlined:h,RightOutlined:f},setup(e){return{items:e.dataSource,height:e.height}}}),B={class:"custom-slick-arrow",style:{left:"0","z-index":"8"}},O={class:"custom-slick-arrow",style:{right:"0"}},L=["title"],S={class:"banner-text"};function I(e,z,A,F,G,N){const c=s("LeftOutlined"),d=s("RightOutlined"),u=s("Carousel"),p=s("Card");return r(),y(p,$({class:"banner-box",title:"",style:`height:${e.height}px;`,"body-style":"padding:0;"},e.$attrs),{default:a(()=>[n(u,{arrows:"",dots:!1,class:"!h-full !w-full"},{prevArrow:a(()=>[o("div",B,[n(c)])]),nextArrow:a(()=>[o("div",O,[n(d)])]),default:a(()=>[(r(!0),i(C,null,v(e.items,t=>(r(),i("div",{class:"!w-full carousel-item",key:t.id,title:t.title},[o("div",{class:"banner",style:b(`height: ${e.height}px; background-image: url('${t.imgSrc}')`)},[o("div",S,w(t.title),1)],4)],8,L))),128))]),_:1})]),_:1},16,["style"])}var J=g(x,[["render",I]]);export{J as default};