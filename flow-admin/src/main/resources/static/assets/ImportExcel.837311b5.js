import{I as e}from"./index.cb4eca9c.js";import{_ as t}from"./TableImg.ed458e7b.js";import"./BasicForm.60d248ec.js";import{P as s}from"./index.afc4f308.js";import{j as o,r as a,K as i,o as r,m as d,Q as c,n,V as m,ah as p,Y as f}from"./vendor.686fd1d4.js";import"./index.91fd9f50.js";import"./index.ae3ca81c.js";import"./useWindowSizeFn.d82e06bf.js";import"./useForm.cb0c17a2.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.a91eed20.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.262ea813.js";/* empty css              *//* empty css              *//* empty css              */import"./download.7e240992.js";import"./base64Conver.bb012c73.js";import"./index.11164cc8.js";import"./useContentViewHeight.e0805dfb.js";/* empty css              *//* empty css              */var u=o({components:{BasicTable:t,ImpExcel:e,PageWrapper:s},setup(){const e=a([]);return{loadDataSuccess:function(t){e.value=[];for(const s of t){const{header:t,results:o,meta:{sheetName:a}}=s,i=[];for(const e of t)i.push({title:e,dataIndex:e});e.value.push({title:a,dataSource:o,columns:i})}},tableListRef:e}}});const l=f(" 导入Excel ");u.render=function(e,t,s,o,a,f){const u=i("a-button"),j=i("ImpExcel"),x=i("BasicTable"),b=i("PageWrapper");return r(),d(b,{title:"excel数据导入示例"},{default:c((()=>[n(j,{onSuccess:e.loadDataSuccess},{default:c((()=>[n(u,{class:"m-3"},{default:c((()=>[l])),_:1})])),_:1},8,["onSuccess"]),(r(!0),d(m,null,p(e.tableListRef,((e,t)=>(r(),d(x,{key:t,title:e.title,columns:e.columns,dataSource:e.dataSource},null,8,["title","columns","dataSource"])))),128))])),_:1})};export default u;