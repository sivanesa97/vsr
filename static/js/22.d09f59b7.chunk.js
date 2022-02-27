(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[22],{1396:function(e,t,a){"use strict";var r=a(1);const o=r.createContext(void 0);t.a=o},1416:function(e,t,a){"use strict";var r=a(2),o=a(4),n=a(1),s=(a(9),a(686)),c=a(34),i=a(154),l=a(1396),d=a(175),b=a(0);const u=["actions","children","defaultValue","name","onChange","value"],j=n.forwardRef((function(e,t){const{actions:a,children:j,defaultValue:m,name:h,onChange:O,value:p}=e,x=Object(o.a)(e,u),f=n.useRef(null),[g,v]=Object(i.a)({controlled:p,default:m,name:"RadioGroup"});n.useImperativeHandle(a,(()=>({focus:()=>{let e=f.current.querySelector("input:not(:disabled):checked");e||(e=f.current.querySelector("input:not(:disabled)")),e&&e.focus()}})),[]);const C=Object(c.a)(t,f),w=Object(d.a)(h);return Object(b.jsx)(l.a.Provider,{value:{name:w,onChange:e=>{v(e.target.value),O&&O(e,e.target.value)},value:g},children:Object(b.jsx)(s.a,Object(r.a)({role:"radiogroup",ref:C},x,{children:j}))})}));t.a=j},1417:function(e,t,a){"use strict";var r=a(4),o=a(2),n=a(1),s=(a(9),a(46)),c=a(74),i=a(294),l=a(12),d=a(36),b=a(0),u=Object(d.a)(Object(b.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),j=Object(d.a)(Object(b.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),m=a(5);const h=Object(m.a)("span")({position:"relative",display:"flex"}),O=Object(m.a)(u,{skipSx:!0})({transform:"scale(1)"}),p=Object(m.a)(j,{skipSx:!0})((e=>{let{theme:t,ownerState:a}=e;return Object(o.a)({left:0,position:"absolute",transform:"scale(0)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeIn,duration:t.transitions.duration.shortest})},a.checked&&{transform:"scale(1)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.shortest})})}));var x=function(e){const{checked:t=!1,classes:a={},fontSize:r}=e,n=Object(o.a)({},e,{checked:t});return Object(b.jsxs)(h,{className:a.root,ownerState:n,children:[Object(b.jsx)(O,{fontSize:r,className:a.background,ownerState:n}),Object(b.jsx)(p,{fontSize:r,className:a.dot,ownerState:n})]})},f=a(7),g=a(489),v=a(1396);var C=a(31),w=a(32);function S(e){return Object(C.a)("MuiRadio",e)}var k=Object(w.a)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]);const y=["checked","checkedIcon","color","icon","name","onChange","size"],M=Object(m.a)(i.a,{shouldForwardProp:e=>Object(m.b)(e)||"classes"===e,name:"MuiRadio",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t["color".concat(Object(f.a)(a.color))]]}})((e=>{let{theme:t,ownerState:a}=e;return Object(o.a)({color:t.palette.text.secondary,"&:hover":{backgroundColor:Object(c.a)("default"===a.color?t.palette.action.active:t.palette[a.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==a.color&&{["&.".concat(k.checked)]:{color:t.palette[a.color].main}},{["&.".concat(k.disabled)]:{color:t.palette.action.disabled}})}));const q=Object(b.jsx)(x,{checked:!0}),R=Object(b.jsx)(x,{}),z=n.forwardRef((function(e,t){var a,c;const i=Object(l.a)({props:e,name:"MuiRadio"}),{checked:d,checkedIcon:u=q,color:j="primary",icon:m=R,name:h,onChange:O,size:p="medium"}=i,x=Object(r.a)(i,y),C=Object(o.a)({},i,{color:j,size:p}),w=(e=>{const{classes:t,color:a}=e,r={root:["root","color".concat(Object(f.a)(a))]};return Object(o.a)({},t,Object(s.a)(r,S,t))})(C),k=n.useContext(v.a);let z=d;const P=Object(g.a)(O,k&&k.onChange);let F=h;var N,V;return k&&("undefined"===typeof z&&(N=k.value,z="object"===typeof(V=i.value)&&null!==V?N===V:String(N)===String(V)),"undefined"===typeof F&&(F=k.name)),Object(b.jsx)(M,Object(o.a)({type:"radio",icon:n.cloneElement(m,{fontSize:null!=(a=R.props.fontSize)?a:p}),checkedIcon:n.cloneElement(u,{fontSize:null!=(c=q.props.fontSize)?c:p}),ownerState:C,classes:w,name:F,checked:z,onChange:P,ref:t},x))}));t.a=z},1478:function(e,t,a){"use strict";var r=a(709),o=a(1416),n=a(685),s=a(1417),c=a(704),i=a(382),l=a(95),d=a(21),b=a(35),u=a(1),j=a(195),m=a(1380),h=a(1320),O=a(1382),p=a(0);const x=Object(d.a)(j.TextValidator)((()=>({width:"100%",marginBottom:"16px"})));t.a=()=>{const[e,t]=Object(u.useState)({date:new Date});Object(u.useEffect)((()=>(j.ValidatorForm.addValidationRule("isPasswordMatch",(t=>(console.log(t),t===e.password))),()=>j.ValidatorForm.removeValidationRule("isPasswordMatch"))),[e.password]);const a=a=>{a.persist(),t({...e,[a.target.name]:a.target.value})},{username:d,firstName:f,creditCard:g,mobile:v,password:C,confirmPassword:w,gender:S,date:k,email:y}=e;return Object(p.jsx)("div",{children:Object(p.jsxs)(j.ValidatorForm,{onSubmit:e=>{},onError:()=>null,children:[Object(p.jsxs)(r.a,{container:!0,spacing:6,children:[Object(p.jsxs)(r.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:2},children:[Object(p.jsx)(x,{type:"text",name:"username",id:"standard-basic",onChange:a,value:d||"",validators:["required","minStringLength: 4","maxStringLength: 9"],label:"Username (Min length 4, Max length 9)",errorMessages:["this field is required"]}),Object(p.jsx)(x,{label:"First Name",onChange:a,type:"text",name:"firstName",value:f||"",validators:["required"],errorMessages:["this field is required"]}),Object(p.jsx)(x,{label:"Email",onChange:a,type:"email",name:"email",value:y||"",validators:["required","isEmail"],errorMessages:["this field is required","email is not valid"]}),Object(p.jsx)(h.b,{dateAdapter:m.a,children:Object(p.jsx)(O.a,{value:k,onChange:a=>{t({...e,date:a})},renderInput:e=>Object(p.jsx)(x,{...e,id:"mui-pickers-date",label:"Date picker",sx:{mb:2,width:"100%"}})})}),Object(p.jsx)(x,{sx:{mb:4},label:"Credit Card",onChange:a,type:"number",name:"creditCard",value:g||"",validators:["required","minStringLength:16","maxStringLength: 16"],errorMessages:["this field is required"]})]}),Object(p.jsxs)(r.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:2},children:[Object(p.jsx)(x,{label:"Mobile Nubmer",onChange:a,type:"text",name:"mobile",value:v||"",validators:["required"],errorMessages:["this field is required"]}),Object(p.jsx)(x,{label:"Password",onChange:a,name:"password",type:"password",value:C||"",validators:["required"],errorMessages:["this field is required"]}),Object(p.jsx)(x,{label:"Confirm Password",onChange:a,name:"confirmPassword",type:"password",value:w||"",validators:["required","isPasswordMatch"],errorMessages:["this field is required","password didn't match"]}),Object(p.jsxs)(o.a,{sx:{mb:2},value:S||"",name:"gender",onChange:a,row:!0,children:[Object(p.jsx)(n.a,{value:"Male",control:Object(p.jsx)(s.a,{color:"secondary"}),label:"Male",labelPlacement:"end"}),Object(p.jsx)(n.a,{value:"Female",control:Object(p.jsx)(s.a,{color:"secondary"}),label:"Female",labelPlacement:"end"}),Object(p.jsx)(n.a,{value:"Others",control:Object(p.jsx)(s.a,{color:"secondary"}),label:"Others",labelPlacement:"end"})]}),Object(p.jsx)(n.a,{control:Object(p.jsx)(c.a,{}),label:"I have read and agree to the terms of service."})]})]}),Object(p.jsxs)(i.a,{color:"primary",variant:"contained",type:"submit",children:[Object(p.jsx)(l.a,{children:"send"}),Object(p.jsx)(b.i,{sx:{pl:1,textTransform:"capitalize"},children:"Submit"})]})]})})}},1753:function(e,t,a){"use strict";a.r(t);var r=a(739),o=a(1),n=a(75),s=a(1478),c=a(21),i=a(0);const l=Object(c.a)("div")((e=>{let{theme:t}=e;return{margin:"30px",[t.breakpoints.down("sm")]:{margin:"16px"},"& .breadcrumb":{marginBottom:"30px",[t.breakpoints.down("sm")]:{marginBottom:"16px"}}}}));class d extends o.Component{render(){return Object(i.jsxs)(l,{children:[Object(i.jsx)("div",{className:"breadcrumb",children:Object(i.jsx)(n.b,{routeSegments:[{name:"Forms",path:"/forms"},{name:"Basic"}]})}),Object(i.jsx)(r.a,{sx:{px:3,pt:1,pb:2},children:Object(i.jsx)(s.a,{})})]})}}t.default=d}}]);