import{_ as e}from"./TableImg.72bfe0c2.js";import"./BasicForm.66d503e8.js";import"./index.65e00ae5.js";import{c as t,d as o,j as a}from"./data.53818107.js";import{_ as s}from"./PageWrapper.75f0cc87.js";import{k as i,K as r,o as d,n,Q as m,q as c,Y as p}from"./vendor.56d2c57f.js";/* empty css              *//* empty css              */import"./useForm.4f5ed9fc.js";import"./index.90af2bb9.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.d0559e60.js";import"./useModal.5417216c.js";import"./onMountedOrActivated.1a8745f8.js";/* empty css              */import"./useSortable.886b9f44.js";import"./useExpose.46777d04.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.d660d8a6.js";/* empty css              *//* empty css              */import"./download.73f6ecc9.js";import"./StrengthMeter.c038c542.js";import"./createAsyncComponent.6b5c9ec6.js";import"./usePageContext.765b9a25.js";/* empty css              *//* empty css              */var f=i({components:{BasicTable:e,PageWrapper:s},setup:()=>({defaultHeader:function(){a({data:o,filename:"使用key作为默认头部.xlsx"})},customHeader:function(){a({data:o,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},filename:"自定义头部.xlsx",json2sheetOpts:{header:["name","id"]}})},columns:t,data:o})});const j=p(" 导出：默认头部 "),u=p(" 导出：自定义头部 ");f.render=function(e,t,o,a,s,i){const p=r("a-button"),f=r("BasicTable"),l=r("PageWrapper");return d(),n(l,{title:"导出示例",content:"根据JSON格式的数据进行导出"},{default:m((()=>[c(f,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:m((()=>[c(p,{onClick:e.defaultHeader},{default:m((()=>[j])),_:1},8,["onClick"]),c(p,{onClick:e.customHeader},{default:m((()=>[u])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default f;