import{L as f,a as _,v as u,aF as r,o as g,i as I,z as y,l as t,m as e}from"./index.a19a7b59.js";import{C}from"./index.af972ef5.js";import"./index.d1b1d25a.js";import"./index.5e1a3b76.js";import{P as v}from"./index.49f22413.js";import P from"./CommonProcess.8d10bc95.js";import w from"./ProjectCard.5a5372fa.js";import h from"./PerformanceRecord.86f5c222.js";import R from"./AttendanceRecord.2e7674b8.js";import B from"./QuickNav.321d47c5.js";import N from"./DynamicInfo.4e6e2571.js";import S from"./ProcessCard.a953f18a.js";import T from"./RecruitTrainCard.b74941a6.js";import $ from"./SaleRadar.af580f90.js";import{d as b}from"./data.93390901.js";import k from"./BannerInfo.9d250405.js";import A from"./UserInfo.dc01f7aa.js";import U from"./NoticeInfo.b282bb48.js";import{bannerList as W,noticeInfoItems as L}from"./data.0db16612.js";import"./index.7a2dfd59.js";import"./index.822cef18.js";import"./useRefs.4b0733e6.js";import"./useFlexGapSupport.c0a56c4d.js";import"./index.21769bbf.js";import"./index.e18493c9.js";import"./useSize.0e83a8bb.js";import"./eagerComputed.2c84d538.js";import"./useWindowSizeFn.c0064585.js";import"./useContentViewHeight.491bd798.js";import"./ArrowLeftOutlined.be1e5adc.js";import"./index.1bddd824.js";import"./transButton.7523e23a.js";import"./index.b0bf0cb1.js";import"./header.d801b988.js";import"./useECharts.656bf9fd.js";import"./index.01b7133f.js";import"./TableImg.951f2ffe.js";import"./useForm.ebcd2e1a.js";import"./index.39a4ceb4.js";import"./_baseIteratee.6fe1627e.js";import"./get.435241c6.js";import"./index.55df64f0.js";import"./index.10ca13d5.js";import"./index.886f7bb4.js";import"./index.8cc5a7e5.js";import"./index.7218c1c9.js";import"./index.3dc33b8f.js";import"./index.65b0d1ea.js";import"./FullscreenOutlined.13149b2b.js";import"./download.8d1045a0.js";import"./index.6012ca43.js";import"./ClockCircleOutlined.fe7bf45c.js";import"./uniqBy.381d7c18.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.f135b163.js";import"./scrollTo.6e219298.js";import"./index.6525164e.js";import"./useTable.aa0ea94d.js";import"./process.10a62b0a.js";import"./index.0bec4bfc.js";const V=_({components:{PageWrapper:v,CommonProcess:P,ProjectCard:w,QuickNav:B,DynamicInfo:N,ProcessCard:S,RecruitTrainCard:T,BannerInfo:k,UserInfo:A,NoticeInfo:U,SaleRadar:$,Card:C,PerformanceRecord:h,AttendanceRecord:R},setup(){const o=u(!0);return setTimeout(()=>{o.value=!1},1500),{loading:o,items:b,bannerInfoItems:W,noticeInfoItems:L}}}),j={class:"flex w-full enter-y"},z={class:"w-1/4 mr-4"},D={class:"w-1/2"},F={class:"w-1/4 pl-4"},Q={class:"md:flex enter-y mt-4"},q={class:"lg:flex !mt-4"},x={class:"lg:w-5/10 w-full !mr-4 enter-y"},E={class:"lg:w-5/10 w-full enter-y"};function G(o,H,J,K,M,O){const n=r("UserInfo"),i=r("BannerInfo"),m=r("NoticeInfo"),a=r("CommonProcess"),s=r("AttendanceRecord"),p=r("PerformanceRecord"),c=r("ProcessCard"),l=r("RecruitTrainCard"),d=r("PageWrapper");return g(),I(d,null,{default:y(()=>[t("div",j,[t("div",z,[e(n,{class:"!my-4 enter-y"})]),t("div",D,[e(i,{dataSource:o.bannerInfoItems,height:"264",class:"!my-4 enter-y",loading:o.loading},null,8,["dataSource","loading"])]),t("div",F,[e(m,{dataSource:o.noticeInfoItems,loading:o.loading,class:"!my-4 enter-y"},null,8,["dataSource","loading"])])]),t("div",null,[e(a)]),t("div",Q,[e(s,{class:"lg:w-5/10 w-full !mr-4 enter-y",loading:o.loading},null,8,["loading"]),e(p,{class:"lg:w-5/10 w-full enter-y",loading:o.loading},null,8,["loading"])]),t("div",q,[t("div",x,[e(c,{loading:o.loading,class:"enter-y"},null,8,["loading"])]),t("div",E,[e(l,{loading:o.loading,class:"enter-y"},null,8,["loading"])])])]),_:1})}var nr=f(V,[["render",G]]);export{nr as default};