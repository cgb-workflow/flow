import e from"./TargetContent.a0810b68.js";import{aV as t}from"./index.8bbed969.js";import{P as o}from"./index.22ff4fb2.js";import{y as a,Z as n,B as r,F as s,a2 as i,v as d}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./onMountedOrActivated.8f899bfb.js";import"./useWindowSizeFn.564cf32e.js";import"./useContentViewHeight.c0fc876b.js";var m=a({components:{LazyContainer:t,TargetContent:e,PageWrapper:o}});const p={class:"lazy-base-demo-wrap"},f=d("h1",null,"向下滚动",-1),c={class:"lazy-base-demo-box"};m.render=function(e,t,o,a,m,b){const j=n("TargetContent"),l=n("LazyContainer"),u=n("PageWrapper");return r(),s(u,{title:"懒加载自定义动画示例",content:"懒加载组件显示动画"},{default:i((()=>[d("div",p,[f,d("div",c,[d(l,{transitionName:"custom"},{default:i((()=>[d(j)])),_:1})])])])),_:1})};export default m;