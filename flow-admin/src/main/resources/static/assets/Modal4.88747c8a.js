import{B as l,a as c}from"./index.e8eb4b57.js";import{B as d}from"./BasicForm.51e3eb56.js";import{u}from"./useForm.d201bd46.js";import{a as f,w as B,az as g,an as h,aB as p,o as _,k as C,B as b,n as R,p as V,aC as v}from"./index.da587afe.js";import"./useWindowSizeFn.3fdab581.js";import"./FullscreenOutlined.3d903e0f.js";/* empty css              *//* empty css               */import"./index.a64c8a60.js";import"./index.492229cd.js";import"./Checkbox.9d75a86f.js";import"./index.5aab84c4.js";import"./index.9d0fc194.js";import"./index.447b3242.js";import"./index.d7c8b760.js";import"./index.b3a5d1df.js";import"./get.40c34cfc.js";import"./index.a85fa86f.js";import"./eagerComputed.3bbb876f.js";import"./index.3c9c3a6f.js";import"./_baseIteratee.78d8c020.js";import"./DeleteOutlined.690086a4.js";import"./index.d1cda802.js";import"./useRefs.1aead304.js";import"./Form.f8b72655.js";import"./Col.4ac749bb.js";import"./useFlexGapSupport.caa26b6d.js";import"./useSize.dbee3c08.js";import"./transButton.1d3b575b.js";import"./index.5d1da0c4.js";import"./index.72d53e09.js";import"./index.813f510f.js";import"./uuid.2b29000c.js";import"./download.75f04d3f.js";import"./base64Conver.08b9f4ec.js";import"./index.9912aa68.js";import"./index.36675b6e.js";import"./uniqBy.f906dabc.js";const n=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:24},defaultValue:"111"},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:24}}],F=f({components:{BasicModal:l,BasicForm:d},props:{userData:{type:Object}},setup(e){const t=B({}),[i,{}]=u({labelWidth:120,schemas:n,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=c(o=>{o&&r(o)});function r(o){t.value={field2:o.data,field1:o.info}}function a(o){o&&e.userData&&h(()=>r(e.userData))}return{register:s,schemas:n,registerForm:i,model:t,handleVisibleChange:a}}}),M={class:"pt-3px pr-3px"};function D(e,t,i,s,r,a){const o=p("BasicForm"),m=p("BasicModal");return _(),C(m,v(e.$attrs,{onRegister:e.register,title:"Modal Title",onVisibleChange:e.handleVisibleChange}),{default:b(()=>[R("div",M,[V(o,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])]),_:1},16,["onRegister","onVisibleChange"])}var co=g(F,[["render",D]]);export{co as default};