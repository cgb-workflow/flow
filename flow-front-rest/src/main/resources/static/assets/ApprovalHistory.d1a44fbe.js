import{y as e,aM as t,bY as a,b_ as i,bw as s,b$ as o,br as r,a as n,r as d,u as l,X as m,Z as p,B as u,F as c,a1 as f,v as j,a8 as v,J as b}from"./vendor.3dc066e5.js";/* empty css              *//* empty css              *//* empty css              */import{ag as x}from"./index.b41e2c0e.js";import I from"./FlowDiagramModal.cd13b740.js";import y from"./index.f13e7c38.js";import{d as L}from"./process.424afad8.js";import"./index.b437b00c.js";import"./useWindowSizeFn.308e6090.js";import"./Viewer.06f57865.js";import"./index.3e5e5108.js";/* empty css              */import"./onMountedOrActivated.c01d8630.js";import"./useContentViewHeight.16e0f08b.js";/* empty css              *//* empty css              *//* empty css              */import"./index.60785bf0.js";var g=e({name:"ApprovalHistory",components:{Button:t,ApartmentOutlined:a,FlowDiagramModal:I,BpmnPreviewModal:y,Timeline:i,TimelineItem:i.Item,List:s,ListItem:s.Item,ListItemMeta:s.Item.Meta,ClockCircleOutlined:o,CollapseContainer:x,Avatar:r},setup(e,{emit:t}){const{currentRoute:a}=n(),i=d([]),s=d(!1),{params:{modelKey:o},query:{taskId:r,procInstId:p}}=l(a);return m((()=>{s.value=!0,L({procInstId:p}).then((e=>{i.value=e})).finally((()=>{s.value=!1}))})),{historyList:i,approvalHistoryLoading:s}}});const M=j("div",{class:"font-bold"},"审批记录",-1),w=j("br",null,null,-1),C={class:"font-bold"};g.render=function(e,t,a,i,s,o){const r=p("Avatar"),n=p("ListItemMeta"),d=p("ListItem"),l=p("List"),m=p("CollapseContainer");return u(),c(m,{canExpan:!0},{title:f((()=>[M])),default:f((()=>[j("div",null,[j(l,{loading:e.approvalHistoryLoading,"item-layout":"horizontal",dataSource:e.historyList},{renderItem:f((({item:e})=>[j(d,null,{default:f((()=>[j(n,null,{description:f((()=>[v(b(e.message||"无"),1),w])),title:f((()=>[j("span",C,b(e.activityName),1),v(" "+b(e.time),1)])),avatar:f((()=>[j(r,null,{default:f((()=>[v(b(e.typeName),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:1},8,["loading","dataSource"])])])),_:1})};export default g;