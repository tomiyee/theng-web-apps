import{g as h,a as C,r as m,u,c as j,j as t,s as d,b as g,d as y,B as e,e as f,S as v}from"./index-CmZLauxi.js";import{C as w}from"./Card-Cn-h24ja.js";import{T as c}from"./Typography-C50ZR9Wm.js";function M(s){return h("MuiCardContent",s)}C("MuiCardContent",["root"]);const R=s=>{const{classes:o}=s;return j({root:["root"]},M,o)},z=d("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(s,o)=>o.root})({padding:16,"&:last-child":{paddingBottom:24}}),S=m.forwardRef(function(o,n){const r=u({props:o,name:"MuiCardContent"}),{className:a,component:i="div",...p}=r,l={...r,component:i},x=R(l);return t.jsx(z,{as:i,className:g(x.root,a),ownerState:l,ref:n,...p})}),T=y(t.jsx("path",{d:"M22 7h-9v2h9zm0 8h-9v2h9zM5.54 11 2 7.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41zm0 8L2 15.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41z"}),"Checklist"),b=d("div")(({elementWidth:s})=>({display:"grid",width:"100%",gridTemplateColumns:`repeat(auto-fit, minmax(${s}px, 1fr))`,gap:16,padding:16})),N=()=>t.jsx(e,{component:"main",width:"100%",children:t.jsx(e,{display:"flex",flexWrap:"wrap",gap:2,children:t.jsxs(b,{elementWidth:360,children:[t.jsx(k,{title:"Rice Purity Test",Icon:T,path:"rice-purity-test",description:"The rice purity test except it remembers your selection, all stored locally in your browser."}),t.jsx(e,{}),t.jsx(e,{}),t.jsx(e,{}),t.jsx(e,{})]})})}),k=({title:s,Icon:o,path:n,description:r})=>{const a=f();return t.jsx(w,{sx:{cursor:"pointer"},onClick:()=>a(n),children:t.jsx(S,{children:t.jsxs(e,{width:"100%",display:"flex",gap:1,children:[t.jsx(e,{width:64,height:64,alignItems:"center",justifyContent:"center",children:t.jsx(o,{style:{fontSize:"64px"}})}),t.jsxs(v,{flex:1,children:[t.jsx(c,{fontWeight:"bold",children:s}),t.jsx(c,{children:r})]})]})})})};export{N as default};
