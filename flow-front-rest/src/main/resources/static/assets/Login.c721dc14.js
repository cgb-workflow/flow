import{a as f,u as h,b as g,c as w,e as y,o as a,f as v,h as e,i as m,A as k,j as c,k as b,l as t,m as s,n as p,t as x,p as _,q as T}from"./index.d7db7941.js";import L from"./LoginForm.3ebb1da0.js";import S from"./ForgetPasswordForm.ab1ce549.js";import $ from"./RegisterForm.e06573ca.js";import B from"./MobileForm.99446512.js";import A from"./QrCodeForm.f37f61fa.js";import"./index.c7a70ca5.js";import"./index.9d45aba3.js";import"./index.b9d775df.js";import"./useFlexGapSupport.0c54ffc5.js";import"./_baseIteratee.89f1a18c.js";import"./get.558ce533.js";import"./useSize.03a1e437.js";import"./index.cf18845b.js";import"./LoginFormTitle.f3358a8b.js";import"./GithubFilled.b18590d3.js";import"./index.3c9af19b.js";import"./index.7dc62294.js";import"./index.bf2dcf62.js";import"./download.f78a3e1c.js";var C="/assets/login-box-bg.9027741f.svg";const D={class:"-enter-x xl:hidden"},I={class:"container relative h-full py-2 mx-auto sm:px-10"},N={class:"flex h-full"},V={class:"hidden min-h-full pl-4 mr-4 xl:flex xl:flex-col xl:w-6/12"},P={class:"my-auto"},j=["alt"],q={class:"mt-10 font-medium text-white -enter-x"},z={class:"inline-block mt-4 text-3xl"},E={class:"mt-5 font-normal text-white text-md dark:text-gray-500 -enter-x"},G={class:"flex w-full h-full py-5 xl:h-auto xl:py-0 xl:my-0 xl:w-6/12"},mt=f({__name:"Login",props:{sessionTimeout:{type:Boolean}},setup(i){const o=h(),{prefixCls:n}=g("login"),{t:r}=T(),d=w().getShowPicker,u=y(()=>{var l;return(l=o==null?void 0:o.title)!=null?l:""});return(l,F)=>(a(),v("div",{class:_([e(n),"relative w-full h-full px-4"])},[!i.sessionTimeout&&e(d)?(a(),m(e(k),{key:0,class:"absolute text-white top-4 right-4 enter-x xl:text-gray-600",showText:!1})):c("",!0),i.sessionTimeout?c("",!0):(a(),m(e(b),{key:1,class:"absolute top-3 right-7 enter-x"})),t("span",D,[s(e(p),{alwaysShowTitle:!0})]),t("div",I,[t("div",N,[t("div",V,[s(e(p),{class:"-enter-x"}),t("div",P,[t("img",{alt:e(u),src:C,class:"w-1/2 -mt-16 -enter-x"},null,8,j),t("div",q,[t("span",z,x(e(r)("sys.login.signInTitle")),1)]),t("div",E,x(e(r)("sys.login.signInDesc")),1)])]),t("div",G,[t("div",{class:_([`${e(n)}-form`,"relative w-full px-5 py-8 mx-auto my-auto rounded-md shadow-md xl:ml-16 xl:bg-transparent sm:px-8 xl:p-4 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto enter-x"])},[s(L),s(S),s($),s(B),s(A)],2)])])])],2))}});export{mt as default};