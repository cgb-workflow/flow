import{y as e,ac as t,Z as o,B as n,F as a,a2 as r,v as s}from"./vendor.880b4c6c.js";import i from"./TargetContent.a0810b68.js";import{aV as d}from"./index.8bbed969.js";import{P as m}from"./index.22ff4fb2.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./onMountedOrActivated.8f899bfb.js";import"./useWindowSizeFn.564cf32e.js";import"./useContentViewHeight.c0fc876b.js";var p=e({components:{LazyContainer:d,PageWrapper:m,TargetContent:i,Skeleton:t}});const f={class:"lazy-base-demo-wrap"},c=s("h1",null,"向下滚动",-1),l={class:"lazy-base-demo-box"};p.render=function(e,t,i,d,m,p){const b=o("TargetContent"),j=o("Skeleton"),u=o("LazyContainer"),x=o("PageWrapper");return n(),a(x,{title:"懒加载基础示例",content:"向下滚动到可见区域才会加载组件"},{default:r((()=>[s("div",f,[c,s("div",l,[s(u,null,{skeleton:r((()=>[s(j,{rows:10})])),default:r((()=>[s(b)])),_:1})])])])),_:1})};export default p;