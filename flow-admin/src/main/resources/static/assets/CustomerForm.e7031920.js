import{_ as e}from"./BasicForm.3145f6c6.js";import{u as o}from"./useForm.f6c4fcf0.js";import{ag as s,h as i}from"./index.8bbed969.js";import{y as r,ak as t,af as n,Z as a,B as d,F as p,a2 as l,v as m}from"./vendor.880b4c6c.js";import{P as f}from"./index.22ff4fb2.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.a0306c89.js";/* empty css              *//* empty css              *//* empty css              */import"./index.dcc0b3b8.js";import"./useWindowSizeFn.564cf32e.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.92b34d7b.js";import"./base64Conver.bb012c73.js";import"./index.adea3535.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.8f899bfb.js";import"./useContentViewHeight.c0fc876b.js";const c=[{field:"field1",component:"Input",label:"render方式",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:o})=>n(t,{placeholder:"请输入",value:e[o],onChange:s=>{e[o]=s.target.value}})},{field:"field2",component:"Input",label:"render组件slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"自定义Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}];var u=r({components:{BasicForm:e,CollapseContainer:s,PageWrapper:f,[t.name]:t},setup(){const{createMessage:e}=i(),[s,{setProps:r}]=o({labelWidth:120,schemas:c,actionColOptions:{span:24}});return{register:s,schemas:c,handleSubmit:o=>{e.success("click search,values:"+JSON.stringify(o))},setProps:r}}});u.render=function(e,o,s,i,r,t){const n=a("a-input"),f=a("BasicForm"),c=a("CollapseContainer"),u=a("PageWrapper");return d(),p(u,{title:"自定义组件示例"},{default:l((()=>[m(c,{title:"自定义表单"},{default:l((()=>[m(f,{onRegister:e.register,onSubmit:e.handleSubmit},{f3:l((({model:e,field:o})=>[m(n,{value:e[o],"onUpdate:value":s=>e[o]=s,placeholder:"自定义slot"},null,8,["value","onUpdate:value"])])),_:1},8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default u;