import{L as l,a as f,b1 as I,aF as o,o as L,i as C,z as t,m as e,B as s,t as i,l as h,aG as y}from"./index.54e75e3e.js";import{C as M}from"./index.e86f36de.js";import"./index.2167587e.js";import"./index.4c5a4512.js";import{L as r}from"./index.1d2ce225.js";import{dynamicInfoItems as B}from"./data.eacce5d6.js";import{h as $}from"./header.d801b988.js";import"./index.49848cb6.js";import"./index.4d74564a.js";import"./useRefs.ab942c9d.js";import"./useFlexGapSupport.f9214675.js";import"./eagerComputed.e474cd0d.js";import"./index.5a03476b.js";const v=f({props:{dataSource:Array},components:{Card:M,List:r,ListItem:r.Item,ListItemMeta:r.Item.Meta,Icon:I},setup(n){return{items:B,headerImg:$}}}),x=["innerHTML"];function z(n,b,g,k,A,N){const m=o("a-button"),p=o("Icon"),c=o("ListItemMeta"),_=o("ListItem"),u=o("List"),d=o("Card");return L(),C(d,y({title:"\u6700\u65B0\u52A8\u6001"},n.$attrs),{extra:t(()=>[e(m,{type:"link",size:"small"},{default:t(()=>[s("\u66F4\u591A")]),_:1})]),default:t(()=>[e(u,{"item-layout":"horizontal","data-source":n.items},{renderItem:t(({item:a})=>[e(_,null,{default:t(()=>[e(c,null,{description:t(()=>[s(i(a.date),1)]),title:t(()=>[s(i(a.name)+" ",1),h("span",{innerHTML:a.desc},null,8,x)]),avatar:t(()=>[e(p,{icon:a.avatar,size:30},null,8,["icon"])]),_:2},1024)]),_:2},1024)]),_:1},8,["data-source"])]),_:1},16)}var K=l(v,[["render",z]]);export{K as default};