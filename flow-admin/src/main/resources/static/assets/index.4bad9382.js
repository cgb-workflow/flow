import{_ as y}from"./index.6f678a8f.js";import{t as C}from"./data.ec134722.js";import{P as k}from"./index.6f4a9d56.js";import{az as E,a as h,b4 as A,w as p,aB as r,o as v,k as K,B as a,p as e,C as D,aj as T,an as R,j as _}from"./index.bbfb8c5d.js";import{C as $}from"./index.e017e1a2.js";import"./index.6a88c2ae.js";/* empty css               */import{R as L,C as w}from"./index.5796c3bd.js";import"./fromPairs.daf93cb7.js";import"./index.424465cb.js";import"./eagerComputed.2918d49d.js";import"./useContextMenu.b34fb2fb.js";import"./index.eb776706.js";import"./get.476f8b78.js";import"./index.b7fa4bcc.js";import"./index.8643b1cc.js";import"./useSize.2da926c0.js";import"./useWindowSizeFn.daa22200.js";import"./useContentViewHeight.ce579b14.js";import"./ArrowLeftOutlined.32f822b8.js";import"./index.40637d17.js";import"./transButton.15723253.js";import"./index.573f6427.js";import"./useRefs.c946e576.js";import"./PlusOutlined.72af47df.js";import"./Col.bf638c61.js";import"./useFlexGapSupport.ae09cf13.js";const b=h({components:{BasicTree:y,PageWrapper:k,Card:$,Row:L,Col:w,Spin:A},setup(){const t=p(null),d=p(null),F=p(null),c=p([]),l=p(!1);function B(n,i){}function o(){l.value=!0,setTimeout(()=>{c.value=T(C),l.value=!1,R(()=>{var n;_(d),(n=_(d))==null||n.expandAll(!0)})},2e3)}function u(){l.value=!0,setTimeout(()=>{c.value=T(C),l.value=!1},2e3)}const m=p([{title:"parent ",key:"0-0"}]);function f(n){return new Promise(i=>{if(!n.children){i();return}setTimeout(()=>{const s=_(t);if(s){const g=[{title:`Child Node ${n.eventKey}-0`,key:`${n.eventKey}-0`},{title:`Child Node ${n.eventKey}-1`,key:`${n.eventKey}-1`}];s.updateNodeByKey(n.eventKey,{children:g}),s.setExpandedKeys([n.eventKey,...s.getExpandedKeys()])}i()},1e3)})}return{treeData:C,handleCheck:B,tree:m,onLoadData:f,asyncTreeRef:t,asyncExpandTreeRef:d,loadTreeRef:F,tree2:c,loadTreeData:o,treeLoading:l,loadTreeData2:u}}});function P(t,d,F,c,l,B){const o=r("BasicTree"),u=r("Col"),m=r("a-button"),f=r("Spin"),n=r("Card"),i=r("Row"),s=r("PageWrapper");return v(),K(s,{title:"Tree\u57FA\u7840\u793A\u4F8B"},{default:a(()=>[e(i,{gutter:[16,16]},{default:a(()=>[e(u,{span:8},{default:a(()=>[e(o,{title:"\u57FA\u7840\u793A\u4F8B\uFF0C\u9ED8\u8BA4\u5C55\u5F00\u7B2C\u4E00\u5C42",treeData:t.treeData,defaultExpandLevel:"1"},{title:a(()=>[D(" 123123 ")]),_:1},8,["treeData"])]),_:1}),e(u,{span:8},{default:a(()=>[e(o,{title:"\u53EF\u52FE\u9009\uFF0C\u9ED8\u8BA4\u5168\u90E8\u5C55\u5F00",treeData:t.treeData,checkable:!0,defaultExpandAll:"",onCheck:t.handleCheck},null,8,["treeData","onCheck"])]),_:1}),e(u,{span:8},{default:a(()=>[e(o,{title:"\u6307\u5B9A\u9ED8\u8BA4\u5C55\u5F00/\u52FE\u9009\u793A\u4F8B",treeData:t.treeData,checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"]},null,8,["treeData"])]),_:1}),e(u,{span:8},{default:a(()=>[e(o,{title:"\u61D2\u52A0\u8F7D\u5F02\u6B65\u6811",ref:"asyncTreeRef",treeData:t.tree,"load-data":t.onLoadData},null,8,["treeData","load-data"])]),_:1}),e(u,{span:8},{default:a(()=>[e(n,{title:"\u5F02\u6B65\u6570\u636E\uFF0C\u9ED8\u8BA4\u5C55\u5F00"},{extra:a(()=>[e(m,{onClick:t.loadTreeData,loading:t.treeLoading},{default:a(()=>[D("\u52A0\u8F7D\u6570\u636E")]),_:1},8,["onClick","loading"])]),default:a(()=>[e(f,{spinning:t.treeLoading},{default:a(()=>[e(o,{ref:"asyncExpandTreeRef",treeData:t.tree2},null,8,["treeData"])]),_:1},8,["spinning"])]),_:1})]),_:1}),e(u,{span:8},{default:a(()=>[e(n,{title:"BasicTree\u5185\u7F6E\u52A0\u8F7D"},{extra:a(()=>[e(m,{onClick:t.loadTreeData2,loading:t.treeLoading},{default:a(()=>[D("\u8BF7\u6C42\u6570\u636E")]),_:1},8,["onClick","loading"])]),default:a(()=>[e(o,{ref:"loadTreeRef",treeData:t.tree2,loading:t.treeLoading},null,8,["treeData","loading"])]),_:1})]),_:1})]),_:1})]),_:1})}var ie=E(b,[["render",P]]);export{ie as default};