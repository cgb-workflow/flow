import e from"./index.31fc04fa.js";import{u as a}from"./useFrameKeepAlive.0bf54865.js";import{k as r,a as t,u as m,r as n,I as s,f as o,K as f,o as i,n as l,q as u}from"./vendor.56d2c57f.js";import{X as d}from"./index.407e4786.js";import{a as c}from"./modelInfo.69fac861.js";import"./useWindowSizeFn.d0559e60.js";var p=r({name:"BpmnDesigner",components:{FramePage:e},setup(){const{currentRoute:e}=t(),{query:{modelId:r}}=m(e),f=n(""),i=n({}),l=d(),u=t(),p=l.getTabList.find((e=>e.fullPath===u.currentRoute.value.fullPath));s((()=>{0!==p.meta.title.indexOf("设计流程-")&&c(r).then((e=>{p.meta.title&&-1===p.meta.title.indexOf("-"+e.name)&&(p.meta.title=p.meta.title+"-"+e.name)})).catch((()=>{}))})),f.value="/flow-bpmn/index.html/#/bpmn/designer?modelId="+r;const{getFramePages:h,hasRenderFrame:g,showIframe:F}=a(),j=o((()=>m(h).length>0));return{getFramePages:h,hasRenderFrame:g,showIframe:F,showFrame:j,url:f,frame:i}}});p.render=function(e,a,r,t,m,n){const s=f("FramePage");return i(),l("div",null,[u(s,{frameSrc:e.url},null,8,["frameSrc"])])};export default p;