import{_ as e}from"./TableImg.fd7646bb.js";import"./BasicForm.5fbfb734.js";import"./index.6f817243.js";import{c as i,d as a,j as o}from"./data.5e129ae4.js";import{P as t}from"./index.e083521e.js";import{j as d,K as s,o as r,m as n,Q as m,n as p,Y as c}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.1ee1a774.js";import"./index.eb9d6ed9.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.2bb7e54d.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.28b3aabe.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.2aa1bf44.js";/* empty css              *//* empty css              *//* empty css              */import"./download.6cc0299c.js";import"./base64Conver.bb012c73.js";import"./index.cab36059.js";import"./useContentViewHeight.2141a994.js";/* empty css              *//* empty css              */var f=d({components:{BasicTable:e,PageWrapper:t},setup:()=>({defaultHeader:function(){o({data:a,filename:"使用key作为默认头部.xlsx"})},customHeader:function(){o({data:a,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},filename:"自定义头部.xlsx",json2sheetOpts:{header:["name","id"]}})},columns:i,data:a})});const j=c(" 导出：默认头部 "),b=c(" 导出：自定义头部 ");f.render=function(e,i,a,o,t,d){const c=s("a-button"),f=s("BasicTable"),u=s("PageWrapper");return r(),n(u,{title:"导出示例",content:"根据JSON格式的数据进行导出"},{default:m((()=>[p(f,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:m((()=>[p(c,{onClick:e.defaultHeader},{default:m((()=>[j])),_:1},8,["onClick"]),p(c,{onClick:e.customHeader},{default:m((()=>[b])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default f;