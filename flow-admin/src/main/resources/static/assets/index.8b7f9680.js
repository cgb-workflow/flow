import{_ as e}from"./PageWrapper.92431b9d.js";import{_ as r}from"./BasicForm.de2d0bb0.js";import{u as s}from"./useForm.906ec90d.js";import{k as t,K as o,o as i,n,Q as a,q as d,Y as c}from"./vendor.9d9efc92.js";import"./index.1f477f84.js";import"./usePageContext.69aad0be.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.ed12ce5f.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              */import"./useModal.0a504584.js";import"./useWindowSizeFn.0534066c.js";/* empty css              *//* empty css              */import"./download.d21b7c84.js";import"./StrengthMeter.f927a9c9.js";const l=[{field:"passwordOld",label:"当前密码",component:"InputPassword",required:!0},{field:"passwordNew",label:"新密码",component:"StrengthMeter",componentProps:{placeholder:"新密码"},rules:[{required:!0,message:"请输入新密码"}]},{field:"confirmPassword",label:"确认密码",component:"InputPassword",dynamicRules:({values:e})=>[{required:!0,validator:(r,s)=>s?s!==e.passwordNew?Promise.reject("两次输入的密码不一致!"):Promise.resolve():Promise.reject("不能为空")}]}];var p=t({name:"ChangePassword",components:{BasicForm:r,PageWrapper:e},setup(){const[e,{validate:r,resetFields:t}]=s({size:"large",labelWidth:100,showActionButtonGroup:!1,schemas:l});return{register:e,resetFields:t,handleSubmit:function(){return e=this,s=null,t=function*(){try{const e=yield r(),{passwordOld:s,passwordNew:t}=e}catch(e){}},new Promise(((r,o)=>{var i=e=>{try{a(t.next(e))}catch(r){o(r)}},n=e=>{try{a(t.throw(e))}catch(r){o(r)}},a=e=>e.done?r(e.value):Promise.resolve(e.value).then(i,n);a((t=t.apply(e,s)).next())}));var e,s,t}}}});const m={class:"py-8 bg-white flex flex-col justify-center items-center"},u={class:"flex justify-center"},f=c(" 重置 "),j=c(" 确认 ");p.render=function(e,r,s,t,c,l){const p=o("BasicForm"),b=o("a-button"),x=o("PageWrapper");return i(),n(x,{title:"修改当前用户密码",content:"修改成功后会自动退出当前登录！"},{default:a((()=>[d("div",m,[d(p,{onRegister:e.register},null,8,["onRegister"]),d("div",u,[d(b,{onClick:e.resetFields},{default:a((()=>[f])),_:1},8,["onClick"]),d(b,{class:"!ml-4",type:"primary",onClick:e.handleSubmit},{default:a((()=>[j])),_:1},8,["onClick"])])])])),_:1})};export default p;