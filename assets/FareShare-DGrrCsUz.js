import{r as m,a as qe,e as Ve,b as w,g as R,j as i,d as S,f as _e,h as Je,i as Ke,k as j,s as T,m as U,l as J,n as I,o as F,p as Xe,q as Qe,c as Ye,I as je,B as Ze}from"./index-Bsd9PXLH.js";import{i as et,g as tt,f as ot,u as rt,a as V,O as nt,F as st,I as it,b as at,S as lt,c as ct,B as $e}from"./Select-DHpUdZAV.js";import{u as dt,_ as Y}from"./lodash-BWcx1hgQ.js";import{T as _}from"./Typography-C61BWugB.js";import{C as pt}from"./Card-Dc8lpr5N.js";import{C as ut}from"./CardContent-0oMNh8ZE.js";const ft=(e,t)=>e.filter(o=>t.includes(o)),D=(e,t,o)=>{const n=e.keys[0];Array.isArray(t)?t.forEach((s,r)=>{o((l,a)=>{r<=e.keys.length-1&&(r===0?Object.assign(l,a):l[e.up(e.keys[r])]=a)},s)}):t&&typeof t=="object"?(Object.keys(t).length>e.keys.length?e.keys:ft(e.keys,Object.keys(t))).forEach(r=>{if(e.keys.includes(r)){const l=t[r];l!==void 0&&o((a,c)=>{n===r?Object.assign(a,c):a[e.up(r)]=c},l)}}):(typeof t=="number"||typeof t=="string")&&o((s,r)=>{Object.assign(s,r)},t)};function Z(e){return`--Grid-${e}Spacing`}function te(e){return`--Grid-parent-${e}Spacing`}const me="--Grid-columns",W="--Grid-parent-columns",gt=({theme:e,ownerState:t})=>{const o={};return D(e.breakpoints,t.size,(n,s)=>{let r={};s==="grow"&&(r={flexBasis:0,flexGrow:1,maxWidth:"100%"}),s==="auto"&&(r={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof s=="number"&&(r={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${s} / var(${W}) - (var(${W}) - ${s}) * (var(${te("column")}) / var(${W})))`}),n(o,r)}),o},mt=({theme:e,ownerState:t})=>{const o={};return D(e.breakpoints,t.offset,(n,s)=>{let r={};s==="auto"&&(r={marginLeft:"auto"}),typeof s=="number"&&(r={marginLeft:s===0?"0px":`calc(100% * ${s} / var(${W}) + var(${te("column")}) * ${s} / var(${W}))`}),n(o,r)}),o},bt=({theme:e,ownerState:t})=>{if(!t.container)return{};const o={[me]:12};return D(e.breakpoints,t.columns,(n,s)=>{const r=s??12;n(o,{[me]:r,"> *":{[W]:r}})}),o},ht=({theme:e,ownerState:t})=>{if(!t.container)return{};const o={};return D(e.breakpoints,t.rowSpacing,(n,s)=>{var l;const r=typeof s=="string"?s:(l=e.spacing)==null?void 0:l.call(e,s);n(o,{[Z("row")]:r,"> *":{[te("row")]:r}})}),o},xt=({theme:e,ownerState:t})=>{if(!t.container)return{};const o={};return D(e.breakpoints,t.columnSpacing,(n,s)=>{var l;const r=typeof s=="string"?s:(l=e.spacing)==null?void 0:l.call(e,s);n(o,{[Z("column")]:r,"> *":{[te("column")]:r}})}),o},yt=({theme:e,ownerState:t})=>{if(!t.container)return{};const o={};return D(e.breakpoints,t.direction,(n,s)=>{n(o,{flexDirection:s})}),o},vt=({ownerState:e})=>({minWidth:0,boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",...e.wrap&&e.wrap!=="wrap"&&{flexWrap:e.wrap},gap:`var(${Z("row")}) var(${Z("column")})`}}),Ct=e=>{const t=[];return Object.entries(e).forEach(([o,n])=>{n!==!1&&n!==void 0&&t.push(`grid-${o}-${String(n)}`)}),t},Tt=(e,t="xs")=>{function o(n){return n===void 0?!1:typeof n=="string"&&!Number.isNaN(Number(n))||typeof n=="number"&&n>0}if(o(e))return[`spacing-${t}-${String(e)}`];if(typeof e=="object"&&!Array.isArray(e)){const n=[];return Object.entries(e).forEach(([s,r])=>{o(r)&&n.push(`spacing-${s}-${String(r)}`)}),n}return[]},wt=e=>e===void 0?[]:typeof e=="object"?Object.entries(e).map(([t,o])=>`direction-${t}-${o}`):[`direction-xs-${String(e)}`],St=Ke(),jt=_e("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>t.root});function $t(e){return Je({props:e,name:"MuiGrid",defaultTheme:St})}function Rt(e={}){const{createStyledComponent:t=jt,useThemeProps:o=$t,componentName:n="MuiGrid"}=e,s=(c,d)=>{const{container:g,direction:u,spacing:b,wrap:p,size:h}=c,x={root:["root",g&&"container",p!=="wrap"&&`wrap-xs-${String(p)}`,...wt(u),...Ct(h),...g?Tt(b,d.breakpoints.keys[0]):[]]};return w(x,f=>R(n,f),{})};function r(c,d,g=()=>!0){const u={};return c===null||(Array.isArray(c)?c.forEach((b,p)=>{b!==null&&g(b)&&d.keys[p]&&(u[d.keys[p]]=b)}):typeof c=="object"?Object.keys(c).forEach(b=>{const p=c[b];p!=null&&g(p)&&(u[b]=p)}):u[d.keys[0]]=c),u}const l=t(bt,xt,ht,gt,yt,vt,mt),a=m.forwardRef(function(d,g){const u=qe(),b=o(d),p=Ve(b),{className:h,children:x,columns:f=12,container:y=!1,component:z="div",direction:A="row",wrap:$="wrap",size:B={},offset:re={},spacing:L=0,rowSpacing:ne=L,columnSpacing:se=L,unstable_level:P=0,...ie}=p,ae=r(B,u.breakpoints,v=>v!==!1),K=r(re,u.breakpoints),le=d.columns??(P?void 0:f),O=d.spacing??(P?void 0:L),E=d.rowSpacing??d.spacing??(P?void 0:ne),X=d.columnSpacing??d.spacing??(P?void 0:se),Q={...p,level:P,columns:le,container:y,direction:A,wrap:$,spacing:O,rowSpacing:E,columnSpacing:X,size:ae,offset:K},ce=s(Q,u);return i.jsx(l,{ref:g,as:z,ownerState:Q,className:S(ce.root,h),...ie,children:m.Children.map(x,v=>{var M;return m.isValidElement(v)&&et(v,["Grid"])&&y&&v.props.container?m.cloneElement(v,{unstable_level:((M=v.props)==null?void 0:M.unstable_level)??P+1}):v})})});return a.muiName="Grid",a}const zt=e=>{const{absolute:t,children:o,classes:n,flexItem:s,light:r,orientation:l,textAlign:a,variant:c}=e;return w({root:["root",t&&"absolute",c,r&&"light",l==="vertical"&&"vertical",s&&"flexItem",o&&"withChildren",o&&l==="vertical"&&"withChildrenVertical",a==="right"&&l!=="vertical"&&"textAlignRight",a==="left"&&l!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",l==="vertical"&&"wrapperVertical"]},tt,n)},Pt=T("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.absolute&&t.absolute,t[o.variant],o.light&&t.light,o.orientation==="vertical"&&t.vertical,o.flexItem&&t.flexItem,o.children&&t.withChildren,o.children&&o.orientation==="vertical"&&t.withChildrenVertical,o.textAlign==="right"&&o.orientation!=="vertical"&&t.textAlignRight,o.textAlign==="left"&&o.orientation!=="vertical"&&t.textAlignLeft]}})(U(({theme:e})=>({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin",variants:[{props:{absolute:!0},style:{position:"absolute",bottom:0,left:0,width:"100%"}},{props:{light:!0},style:{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:J(e.palette.divider,.08)}},{props:{variant:"inset"},style:{marginLeft:72}},{props:{variant:"middle",orientation:"horizontal"},style:{marginLeft:e.spacing(2),marginRight:e.spacing(2)}},{props:{variant:"middle",orientation:"vertical"},style:{marginTop:e.spacing(1),marginBottom:e.spacing(1)}},{props:{orientation:"vertical"},style:{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"}},{props:{flexItem:!0},style:{alignSelf:"stretch",height:"auto"}},{props:({ownerState:t})=>!!t.children,style:{display:"flex",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}}},{props:({ownerState:t})=>t.children&&t.orientation!=="vertical",style:{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,borderTopStyle:"inherit"}}},{props:({ownerState:t})=>t.orientation==="vertical"&&t.children,style:{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(e.vars||e).palette.divider}`,borderLeftStyle:"inherit"}}},{props:({ownerState:t})=>t.textAlign==="right"&&t.orientation!=="vertical",style:{"&::before":{width:"90%"},"&::after":{width:"10%"}}},{props:({ownerState:t})=>t.textAlign==="left"&&t.orientation!=="vertical",style:{"&::before":{width:"10%"},"&::after":{width:"90%"}}}]}))),kt=T("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.wrapper,o.orientation==="vertical"&&t.wrapperVertical]}})(U(({theme:e})=>({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`,whiteSpace:"nowrap",variants:[{props:{orientation:"vertical"},style:{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}}]}))),ee=m.forwardRef(function(t,o){const n=j({props:t,name:"MuiDivider"}),{absolute:s=!1,children:r,className:l,orientation:a="horizontal",component:c=r||a==="vertical"?"div":"hr",flexItem:d=!1,light:g=!1,role:u=c!=="hr"?"separator":void 0,textAlign:b="center",variant:p="fullWidth",...h}=n,x={...n,absolute:s,component:c,flexItem:d,light:g,orientation:a,role:u,textAlign:b,variant:p},f=zt(x);return i.jsx(Pt,{as:c,className:S(f.root,l),role:u,ref:o,ownerState:x,"aria-orientation":u==="separator"&&(c!=="hr"||a==="vertical")?a:void 0,...h,children:r?i.jsx(kt,{className:f.wrapper,ownerState:x,children:r}):null})});ee&&(ee.muiSkipListHighlight=!0);function Ft(e){return R("MuiFormHelperText",e)}const be=I("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]);var he;const It=e=>{const{classes:t,contained:o,size:n,disabled:s,error:r,filled:l,focused:a,required:c}=e,d={root:["root",s&&"disabled",r&&"error",n&&`size${F(n)}`,o&&"contained",a&&"focused",l&&"filled",c&&"required"]};return w(d,Ft,t)},Mt=T("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.size&&t[`size${F(o.size)}`],o.contained&&t.contained,o.filled&&t.filled]}})(U(({theme:e})=>({color:(e.vars||e).palette.text.secondary,...e.typography.caption,textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${be.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${be.error}`]:{color:(e.vars||e).palette.error.main},variants:[{props:{size:"small"},style:{marginTop:4}},{props:({ownerState:t})=>t.contained,style:{marginLeft:14,marginRight:14}}]}))),Ht=m.forwardRef(function(t,o){const n=j({props:t,name:"MuiFormHelperText"}),{children:s,className:r,component:l="p",disabled:a,error:c,filled:d,focused:g,margin:u,required:b,variant:p,...h}=n,x=dt(),f=ot({props:n,muiFormControl:x,states:["variant","size","disabled","error","filled","focused","required"]}),y={...n,component:l,contained:f.variant==="filled"||f.variant==="outlined",variant:f.variant,size:f.size,disabled:f.disabled,error:f.error,filled:f.filled,focused:f.focused,required:f.required};delete y.ownerState;const z=It(y);return i.jsx(Mt,{as:l,className:S(z.root,r),ref:o,...h,ownerState:y,children:s===" "?he||(he=i.jsx("span",{className:"notranslate",children:"​"})):s})}),C=Rt({createStyledComponent:T("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,t)=>t.root}),componentName:"MuiGrid2",useThemeProps:e=>j({props:e,name:"MuiGrid2"})}),Re=m.createContext();function Nt(e){return R("MuiTable",e)}I("MuiTable",["root","stickyHeader"]);const At=e=>{const{classes:t,stickyHeader:o}=e;return w({root:["root",o&&"stickyHeader"]},Nt,t)},Bt=T("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.stickyHeader&&t.stickyHeader]}})(U(({theme:e})=>({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":{...e.typography.body2,padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"},variants:[{props:({ownerState:t})=>t.stickyHeader,style:{borderCollapse:"separate"}}]}))),xe="table",Lt=m.forwardRef(function(t,o){const n=j({props:t,name:"MuiTable"}),{className:s,component:r=xe,padding:l="normal",size:a="medium",stickyHeader:c=!1,...d}=n,g={...n,component:r,padding:l,size:a,stickyHeader:c},u=At(g),b=m.useMemo(()=>({padding:l,size:a,stickyHeader:c}),[l,a,c]);return i.jsx(Re.Provider,{value:b,children:i.jsx(Bt,{as:r,role:r===xe?null:"table",ref:o,className:S(u.root,s),ownerState:g,...d})})}),oe=m.createContext();function Gt(e){return R("MuiTableBody",e)}I("MuiTableBody",["root"]);const Wt=e=>{const{classes:t}=e;return w({root:["root"]},Gt,t)},Ut=T("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),Dt={variant:"body"},ye="tbody",Ot=m.forwardRef(function(t,o){const n=j({props:t,name:"MuiTableBody"}),{className:s,component:r=ye,...l}=n,a={...n,component:r},c=Wt(a);return i.jsx(oe.Provider,{value:Dt,children:i.jsx(Ut,{className:S(c.root,s),as:r,ref:o,role:r===ye?null:"rowgroup",ownerState:a,...l})})});function Et(e){return R("MuiTableCell",e)}const qt=I("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),Vt=e=>{const{classes:t,variant:o,align:n,padding:s,size:r,stickyHeader:l}=e,a={root:["root",o,l&&"stickyHeader",n!=="inherit"&&`align${F(n)}`,s!=="normal"&&`padding${F(s)}`,`size${F(r)}`]};return w(a,Et,t)},_t=T("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`size${F(o.size)}`],o.padding!=="normal"&&t[`padding${F(o.padding)}`],o.align!=="inherit"&&t[`align${F(o.align)}`],o.stickyHeader&&t.stickyHeader]}})(U(({theme:e})=>({...e.typography.body2,display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?Xe(J(e.palette.divider,1),.88):Qe(J(e.palette.divider,1),.68)}`,textAlign:"left",padding:16,variants:[{props:{variant:"head"},style:{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium}},{props:{variant:"body"},style:{color:(e.vars||e).palette.text.primary}},{props:{variant:"footer"},style:{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)}},{props:{size:"small"},style:{padding:"6px 16px",[`&.${qt.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}}},{props:{padding:"checkbox"},style:{width:48,padding:"0 0 0 4px"}},{props:{padding:"none"},style:{padding:0}},{props:{align:"left"},style:{textAlign:"left"}},{props:{align:"center"},style:{textAlign:"center"}},{props:{align:"right"},style:{textAlign:"right",flexDirection:"row-reverse"}},{props:{align:"justify"},style:{textAlign:"justify"}},{props:({ownerState:t})=>t.stickyHeader,style:{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default}}]}))),k=m.forwardRef(function(t,o){const n=j({props:t,name:"MuiTableCell"}),{align:s="inherit",className:r,component:l,padding:a,scope:c,size:d,sortDirection:g,variant:u,...b}=n,p=m.useContext(Re),h=m.useContext(oe),x=h&&h.variant==="head";let f;l?f=l:f=x?"th":"td";let y=c;f==="td"?y=void 0:!y&&x&&(y="col");const z=u||h&&h.variant,A={...n,align:s,component:f,padding:a||(p&&p.padding?p.padding:"normal"),size:d||(p&&p.size?p.size:"medium"),sortDirection:g,stickyHeader:z==="head"&&p&&p.stickyHeader,variant:z},$=Vt(A);let B=null;return g&&(B=g==="asc"?"ascending":"descending"),i.jsx(_t,{as:f,ref:o,className:S($.root,r),"aria-sort":B,scope:y,ownerState:A,...b})});function Jt(e){return R("MuiTableContainer",e)}I("MuiTableContainer",["root"]);const Kt=e=>{const{classes:t}=e;return w({root:["root"]},Jt,t)},Xt=T("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),Qt=m.forwardRef(function(t,o){const n=j({props:t,name:"MuiTableContainer"}),{className:s,component:r="div",...l}=n,a={...n,component:r},c=Kt(a);return i.jsx(Xt,{ref:o,as:r,className:S(c.root,s),ownerState:a,...l})});function Yt(e){return R("MuiTableHead",e)}I("MuiTableHead",["root"]);const Zt=e=>{const{classes:t}=e;return w({root:["root"]},Yt,t)},eo=T("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),to={variant:"head"},ve="thead",oo=m.forwardRef(function(t,o){const n=j({props:t,name:"MuiTableHead"}),{className:s,component:r=ve,...l}=n,a={...n,component:r},c=Zt(a);return i.jsx(oe.Provider,{value:to,children:i.jsx(eo,{as:r,className:S(c.root,s),ref:o,role:r===ve?null:"rowgroup",ownerState:a,...l})})});function ro(e){return R("MuiTableRow",e)}const Ce=I("MuiTableRow",["root","selected","hover","head","footer"]),no=e=>{const{classes:t,selected:o,hover:n,head:s,footer:r}=e;return w({root:["root",o&&"selected",n&&"hover",s&&"head",r&&"footer"]},ro,t)},so=T("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.head&&t.head,o.footer&&t.footer]}})(U(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${Ce.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${Ce.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:J(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:J(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}}))),Te="tr",we=m.forwardRef(function(t,o){const n=j({props:t,name:"MuiTableRow"}),{className:s,component:r=Te,hover:l=!1,selected:a=!1,...c}=n,d=m.useContext(oe),g={...n,component:r,hover:l,selected:a,head:d&&d.variant==="head",footer:d&&d.variant==="footer"},u=no(g);return i.jsx(so,{as:r,ref:o,className:S(u.root,s),role:r===Te?null:"row",ownerState:g,...c})});function io(e){return R("MuiTextField",e)}I("MuiTextField",["root"]);const ao={standard:it,filled:st,outlined:nt},lo=e=>{const{classes:t}=e;return w({root:["root"]},io,t)},co=T(ct,{name:"MuiTextField",slot:"Root",overridesResolver:(e,t)=>t.root})({}),ue=m.forwardRef(function(t,o){const n=j({props:t,name:"MuiTextField"}),{autoComplete:s,autoFocus:r=!1,children:l,className:a,color:c="primary",defaultValue:d,disabled:g=!1,error:u=!1,FormHelperTextProps:b,fullWidth:p=!1,helperText:h,id:x,InputLabelProps:f,inputProps:y,InputProps:z,inputRef:A,label:$,maxRows:B,minRows:re,multiline:L=!1,name:ne,onBlur:se,onChange:P,onFocus:ie,placeholder:ae,required:K=!1,rows:le,select:O=!1,SelectProps:E,slots:X={},slotProps:Q={},type:ce,value:v,variant:M="outlined",...Ie}=n,H={...n,autoFocus:r,color:c,disabled:g,error:u,fullWidth:p,multiline:L,required:K,select:O,variant:M},Me=lo(H),N=rt(x),de=h&&N?`${N}-helper-text`:void 0,fe=$&&N?`${N}-label`:void 0,He=ao[M],G={slots:X,slotProps:{input:z,inputLabel:f,htmlInput:y,formHelperText:b,select:E,...Q}},q={},pe=G.slotProps.inputLabel;M==="outlined"&&(pe&&typeof pe.shrink<"u"&&(q.notched=pe.shrink),q.label=$),O&&((!E||!E.native)&&(q.id=void 0),q["aria-describedby"]=void 0);const[Ne,Ae]=V("input",{elementType:He,externalForwardedProps:G,additionalProps:q,ownerState:H}),[Be,Le]=V("inputLabel",{elementType:at,externalForwardedProps:G,ownerState:H}),[Ge,We]=V("htmlInput",{elementType:"input",externalForwardedProps:G,ownerState:H}),[Ue,De]=V("formHelperText",{elementType:Ht,externalForwardedProps:G,ownerState:H}),[Oe,Ee]=V("select",{elementType:lt,externalForwardedProps:G,ownerState:H}),ge=i.jsx(Ne,{"aria-describedby":de,autoComplete:s,autoFocus:r,defaultValue:d,fullWidth:p,multiline:L,name:ne,rows:le,maxRows:B,minRows:re,type:ce,value:v,id:N,inputRef:A,onBlur:se,onChange:P,onFocus:ie,placeholder:ae,inputProps:We,slots:{input:X.htmlInput?Ge:void 0},...Ae});return i.jsxs(co,{className:S(Me.root,a),disabled:g,error:u,fullWidth:p,ref:o,required:K,color:c,variant:M,ownerState:H,...Ie,children:[$!=null&&$!==""&&i.jsx(Be,{htmlFor:N,id:fe,...Le,children:$}),O?i.jsx(Oe,{"aria-describedby":de,id:N,labelId:fe,value:v,input:ge,...Ee,children:l}):ge,h&&i.jsx(Ue,{id:de,...De,children:h})]})}),ze=Ye(i.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear"),Pe=e=>{const{textFieldProps:t,value:o,onChange:n,onCommit:s,precision:r=2}=e,[l,a]=m.useState(o.toFixed(r));return i.jsx(ue,{value:l,onChange:c=>{a(c.target.value);const d=parseFloat(c.target.value);isNaN(d)||Se(o,d)||n==null||n(d)},onBlur:c=>{const d=parseFloat(c.target.value);isNaN(d)||Se(o,d)||s==null||s(d)},...t})},Se=(e,t)=>Math.abs(e-t)<.001,po=e=>{const{indent:t,lineItem:o,onChange:n,onDelete:s}=e;return i.jsxs(i.Fragment,{children:[i.jsx(C,{size:t}),i.jsx(C,{size:7,display:"flex",children:i.jsx(ue,{fullWidth:!0,value:o.itemName,onChange:r=>n({...o,itemName:r.target.value}),onFocus:r=>r.target.setSelectionRange(0,r.target.value.length),slotProps:{input:{startAdornment:i.jsx(je,{onClick:s,children:i.jsx(ze,{})})}}})}),i.jsx(C,{size:4,children:i.jsx(Pe,{textFieldProps:{fullWidth:!0,onFocus:r=>r.target.setSelectionRange(0,r.target.value.length)},value:o.cost,onChange:r=>n({...o,cost:r})})})]})},ke=e=>({id:crypto.randomUUID(),itemName:`Item #${e}`,cost:0}),Fe=e=>({id:crypto.randomUUID(),name:`Person #${e}`,itemizedContributions:[ke(1)]}),uo=[Fe(1)],fo=e=>{const{value:t,onChange:o,onDelete:n}=e,s=(a,c)=>{o({...t,itemizedContributions:t.itemizedContributions.map(d=>d.id===a?c:d)})},r=a=>{o({...t,itemizedContributions:t.itemizedContributions.filter(c=>c.id!==a)})},l=Y.sumBy(t.itemizedContributions,a=>a.cost);return i.jsxs(i.Fragment,{children:[i.jsx(C,{size:8,display:"flex",children:i.jsx(ue,{fullWidth:!0,label:"Name of Individual",value:t.name,slotProps:{input:{startAdornment:i.jsx(je,{onClick:n,children:i.jsx(ze,{})})}},onChange:a=>o({...t,name:a.target.value}),onFocus:a=>a.target.setSelectionRange(0,a.target.value.length)})}),i.jsxs(C,{size:4,display:"flex",alignItems:"center",gap:1,children:[i.jsx(_,{fontWeight:"bold",children:"Subtotal:"}),i.jsxs(_,{children:["$",l.toFixed(2)]})]}),t.itemizedContributions.map(a=>i.jsx(po,{indent:1,lineItem:a,onChange:c=>s(a.id,c),onDelete:()=>r(a.id)},`${t.id}-${a.id}`)),i.jsx(C,{size:1}),i.jsx(C,{size:11,pb:1,children:i.jsx($e,{variant:"outlined",fullWidth:!0,onClick:()=>o({...t,itemizedContributions:[...t.itemizedContributions,ke(t.itemizedContributions.length+1)]}),children:"Add Line Item"})}),i.jsx(C,{size:12,children:i.jsx(ee,{})})]})},go=e=>{const{itemizedBill:t,total:o}=e,n=Y.sum(t.map(s=>Y.sumBy(s.itemizedContributions,r=>r.cost)));return i.jsx(Qt,{children:i.jsxs(Lt,{children:[i.jsx(oo,{children:i.jsxs(we,{children:[i.jsx(k,{sx:{fontWeight:"bold"},children:"Person"}),i.jsx(k,{sx:{fontWeight:"bold"},children:"Personal Subtotal"}),i.jsx(k,{sx:{fontWeight:"bold"},children:"Percent of Subtotal"}),i.jsx(k,{sx:{fontWeight:"bold"},children:"Amount Owed"})]})}),i.jsx(Ot,{children:t.map(s=>{const r=Y.sumBy(s.itemizedContributions,l=>l.cost);return i.jsxs(we,{children:[i.jsx(k,{children:s.name}),i.jsxs(k,{children:["$",r.toFixed(2)]}),i.jsxs(k,{children:[(n===0?0:r/n*100).toFixed(2),"%"]}),i.jsxs(k,{children:["$",((n===0?0:r/n)*o).toFixed(2)]})]},s.id)})})]})})},Co=()=>{const[e,t]=m.useState(uo),[o,n]=m.useState(0),s=(r,l)=>{t(e.map(a=>a.id===r?l:a))};return i.jsx(Ze,{component:"main",width:"100%",alignItems:"center",justifyContent:"center",display:"flex",children:i.jsx(pt,{children:i.jsxs(ut,{sx:{maxWidth:600},children:[i.jsx(_,{variant:"h1",children:"Fare Share"}),i.jsx(_,{pb:1,children:"Split the bill based on how much each person bought. Those who bought less get to pay (proportionally) less! (e.g. If you are responsible for 50% of the cost, then you pay 50% of the final total)"}),i.jsx(ee,{}),i.jsxs(C,{container:!0,spacing:1,width:"100%",pt:1,children:[e.map(r=>i.jsx(fo,{value:r,onChange:l=>s(r.id,l),onDelete:()=>t(l=>l.filter(a=>a.id!==r.id))},r.id)),i.jsx(C,{size:8,display:"flex",alignItems:"center",children:i.jsx($e,{fullWidth:!0,variant:"contained",onClick:()=>t([...e,{...Fe(e.length+1)}]),children:"Add a Person"})}),i.jsx(C,{size:4,children:i.jsx(Pe,{value:o,onChange:n,textFieldProps:{label:"Total",size:"small",onFocus:r=>r.target.setSelectionRange(0,r.target.value.length)}})})]}),i.jsx(_,{variant:"h3",pt:2,children:"The Final Split"}),i.jsx(go,{itemizedBill:e,total:o})]})})})};export{Co as default};