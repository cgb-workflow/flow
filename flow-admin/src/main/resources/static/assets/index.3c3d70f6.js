import{az as $,a as P,b9 as k,aB as a,i as l,l as u,C as e,s as r,p as s,q as i,j as d,aE as w,G as A,fk as y,fl as L,m,t as c,D as f}from"./index.e61ad282.js";import{P as S}from"./index.114515de.js";/* empty css               */import{cardList as N}from"./data.04444808.js";import{P as V}from"./index.c79f76d5.js";import{L as p}from"./index.b6575784.js";import{R as v,C}from"./index.6d7de824.js";import"./useRefs.0c428178.js";import"./index.769e0bcb.js";import"./index.f6c9d1b9.js";import"./useSize.5a37866d.js";import"./eagerComputed.d3c262c3.js";import"./useWindowSizeFn.27de1b1b.js";import"./useContentViewHeight.34702d2a.js";import"./ArrowLeftOutlined.0e95a5b3.js";import"./index.5621adef.js";import"./transButton.2c723edc.js";import"./Col.f72eb8d0.js";import"./useFlexGapSupport.ed2a5fc1.js";const z=P({components:{Icon:k,Progress:S,PageWrapper:V,[p.name]:p,[p.Item.name]:p.Item,AListItemMeta:p.Item.Meta,[v.name]:v,[C.name]:C},setup(){return{prefixCls:"list-basic",list:N,pagination:{show:!0,pageSize:3}}}}),n=t=>(y("data-v-091ccf36"),t=t(),L(),t),W=n(()=>s("div",null,"\u6211\u7684\u5F85\u529E",-1)),b=n(()=>s("p",null,"8\u4E2A\u4EFB\u52A1",-1)),D=n(()=>s("div",null,"\u672C\u5468\u4EFB\u52A1\u5E73\u5747\u5904\u7406\u65F6\u95F4",-1)),M=n(()=>s("p",null,"32\u5206\u949F",-1)),R=n(()=>s("div",null,"\u672C\u5468\u5B8C\u6210\u4EFB\u52A1\u6570",-1)),j=n(()=>s("p",null,"24\u4E2A\u4EFB\u52A1",-1)),q={key:0,class:"extra"},G={class:"description"},O={class:"info"},T=n(()=>s("span",null,"Owner",-1)),H=n(()=>s("span",null,"\u5F00\u59CB\u65F6\u95F4",-1)),J={class:"progress"};function K(t,Q,U,X,Y,Z){const _=a("a-col"),h=a("a-row"),g=a("Icon"),F=a("Progress"),B=a("a-list-item-meta"),I=a("a-list-item"),x=a("a-list"),E=a("PageWrapper");return l(),u(E,{class:r(t.prefixCls),title:"\u6807\u51C6\u5217\u8868"},{default:e(()=>[s("div",{class:r(`${t.prefixCls}__top`)},[i(h,{gutter:12},{default:e(()=>[i(_,{span:8,class:r(`${t.prefixCls}__top-col`)},{default:e(()=>[W,b]),_:1},8,["class"]),i(_,{span:8,class:r(`${t.prefixCls}__top-col`)},{default:e(()=>[D,M]),_:1},8,["class"]),i(_,{span:8,class:r(`${t.prefixCls}__top-col`)},{default:e(()=>[R,j]),_:1},8,["class"])]),_:1})],2),s("div",{class:r(`${t.prefixCls}__content`)},[i(x,{pagination:t.pagination},{default:e(()=>[(l(!0),d(A,null,w(t.list,o=>(l(),u(I,{key:o.id,class:"list"},{default:e(()=>[i(B,null,{avatar:e(()=>[o.icon?(l(),u(g,{key:0,class:"icon",icon:o.icon,color:o.color},null,8,["icon","color"])):m("",!0)]),title:e(()=>[s("span",null,c(o.title),1),o.extra?(l(),d("div",q,c(o.extra),1)):m("",!0)]),description:e(()=>[s("div",G,c(o.description),1),s("div",O,[s("div",null,[T,f(c(o.author),1)]),s("div",null,[H,f(c(o.datetime),1)])]),s("div",J,[i(F,{percent:o.percent,status:"active"},null,8,["percent"])])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["pagination"])],2)]),_:1},8,["class"])}var gs=$(z,[["render",K],["__scopeId","data-v-091ccf36"]]);export{gs as default};