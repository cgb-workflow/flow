import{k as o,S as t,ca as e,a as n,f as r,K as a,o as s,n as i,Q as u,q as c}from"./vendor.9d9efc92.js";/* empty css              */import{j as l,d,aY as f,P as m}from"./index.5e2cac4f.js";var p=o({name:"ErrorAction",components:{Icon:l,Tooltip:t,Badge:e},setup(){const{t:o}=d(),{push:t}=n(),e=f();return{t:o,getCount:r((()=>e.getErrorLogListCount)),handleToErrorList:function(){t(m.ERROR_LOG_PAGE).then((()=>{e.setErrorLogListCount(0)}))}}}});p.render=function(o,t,e,n,r,l){const d=a("Icon"),f=a("Badge"),m=a("Tooltip");return s(),i(m,{title:o.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:o.handleToErrorList},{default:u((()=>[c(f,{count:o.getCount,offset:[0,10],overflowCount:99},{default:u((()=>[c(d,{icon:"ion:bug-outline"})])),_:1},8,["count"])])),_:1},8,["title","mouseEnterDelay","onClick"])};export default p;