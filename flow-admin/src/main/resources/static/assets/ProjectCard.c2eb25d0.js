import{k as s,b3 as a,K as e,o as t,n as l,Q as n,q as o,V as d,ah as r,s as i,N as c,Y as f}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              *//* empty css              */import{j as m}from"./index.5e2cac4f.js";import{g as p}from"./data.8ddc77c3.js";var u=s({components:{Card:a,CardGrid:a.Grid,Icon:m},setup:()=>({items:p})});const x=f("更多"),j={class:"flex"},b={class:"text-lg ml-4"},y={class:"flex mt-2 h-10 text-secondary"},v={class:"flex justify-between text-secondary"};u.render=function(s,a,f,m,p,u){const C=e("a-button"),g=e("Icon"),k=e("CardGrid"),w=e("Card");return t(),l(w,c({title:"项目"},s.$attrs),{extra:n((()=>[o(C,{type:"link",size:"small"},{default:n((()=>[x])),_:1})])),default:n((()=>[(t(!0),l(d,null,r(s.items,(s=>(t(),l(k,{key:s,class:"!md:w-1/3 !w-full"},{default:n((()=>[o("span",j,[o(g,{icon:s.icon,color:s.color,size:"30"},null,8,["icon","color"]),o("span",b,i(s.title),1)]),o("div",y,i(s.desc),1),o("div",v,[o("span",null,i(s.group),1),o("span",null,i(s.date),1)])])),_:2},1024)))),128))])),_:1},16)};export default u;