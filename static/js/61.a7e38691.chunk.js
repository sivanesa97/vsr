(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[61],{1785:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),c=n(75),o=n(382),l=n(737),r=n(1385),s=n(1543),d=n(1828),j=n(687),b=n(1776),u=n(1319),h=n(1701),x=n.n(h),O=n(1702),p=n.n(O),m=n(171),g=n(190),f=n(0);const v=["username@gmail.com","user02@gmail.com"];function C(e){const{onClose:t,selectedValue:n,...i}=e;function a(e){t(e)}return Object(f.jsxs)(u.a,{onClose:function(){t(n)},"aria-labelledby":"simple-dialog-title",...i,children:[Object(f.jsx)(b.a,{id:"simple-dialog-title",children:"Set backup account"}),Object(f.jsxs)(r.a,{children:[v.map((e=>Object(f.jsxs)(s.a,{button:!0,onClick:()=>a(e),children:[Object(f.jsx)(d.a,{children:Object(f.jsx)(l.a,{sx:{backgroundColor:g.a[100],color:g.a[600]},children:Object(f.jsx)(x.a,{})})}),Object(f.jsx)(j.a,{primary:e})]},e))),Object(f.jsxs)(s.a,{button:!0,onClick:()=>a("addAccount"),children:[Object(f.jsx)(d.a,{children:Object(f.jsx)(l.a,{children:Object(f.jsx)(p.a,{})})}),Object(f.jsx)(j.a,{primary:"add account"})]})]})]})}function y(){const[e,t]=a.a.useState(!1),[n,i]=a.a.useState(v[1]);return Object(f.jsxs)("div",{children:[Object(f.jsxs)(m.a,{variant:"subtitle1",children:["Selected: ",n]}),Object(f.jsx)("br",{}),Object(f.jsx)(o.a,{variant:"outlined",color:"primary",onClick:function(){t(!0)},children:"Open simple dialog"}),Object(f.jsx)(C,{selectedValue:n,open:e,onClose:e=>{t(!1),i(e)}})]})}var k=n(1392),S=n(1391),w=n(1829);function T(){const[e,t]=a.a.useState(!1);function n(){t(!1)}return Object(f.jsxs)("div",{children:[Object(f.jsx)(o.a,{variant:"outlined",color:"primary",onClick:function(){t(!0)},children:"Open alert dialog"}),Object(f.jsxs)(u.a,{open:e,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(f.jsx)(b.a,{id:"alert-dialog-title",children:"Use Google's location service?"}),Object(f.jsx)(S.a,{children:Object(f.jsx)(w.a,{id:"alert-dialog-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),Object(f.jsxs)(k.a,{children:[Object(f.jsx)(o.a,{onClick:n,color:"primary",children:"Disagree"}),Object(f.jsx)(o.a,{onClick:n,color:"primary",autoFocus:!0,children:"Agree"})]})]})]})}var D=n(1502);const G=a.a.forwardRef((function(e,t){return Object(f.jsx)(D.a,{direction:"up",ref:t,...e})}));function P(){const[e,t]=a.a.useState(!1);function n(){t(!1)}return Object(f.jsxs)("div",{children:[Object(f.jsx)(o.a,{variant:"outlined",color:"primary",onClick:function(){t(!0)},children:"Slide in alert dialog"}),Object(f.jsxs)(u.a,{open:e,TransitionComponent:G,keepMounted:!0,onClose:n,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(f.jsx)(b.a,{id:"alert-dialog-slide-title",children:"Use Google's location service?"}),Object(f.jsx)(S.a,{children:Object(f.jsx)(w.a,{id:"alert-dialog-slide-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),Object(f.jsxs)(k.a,{children:[Object(f.jsx)(o.a,{onClick:n,color:"primary",children:"Disagree"}),Object(f.jsx)(o.a,{onClick:n,color:"primary",children:"Agree"})]})]})]})}var W=n(463);function B(){const[e,t]=a.a.useState(!1);function n(){t(!1)}return Object(f.jsxs)("div",{children:[Object(f.jsx)(o.a,{variant:"outlined",color:"primary",onClick:function(){t(!0)},children:"Open form dialog"}),Object(f.jsxs)(u.a,{open:e,onClose:n,"aria-labelledby":"form-dialog-title",children:[Object(f.jsx)(b.a,{id:"form-dialog-title",children:"Subscribe"}),Object(f.jsxs)(S.a,{children:[Object(f.jsx)(w.a,{children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),Object(f.jsx)(W.a,{autoFocus:!0,margin:"dense",id:"name",label:"Email Address",type:"email",fullWidth:!0})]}),Object(f.jsxs)(k.a,{children:[Object(f.jsx)(o.a,{variant:"outlined",color:"secondary",onClick:n,children:"Cancel"}),Object(f.jsx)(o.a,{onClick:n,color:"primary",children:"Subscribe"})]})]})]})}var A=n(21),L=n(746),z=n.n(L),N=n(172);const F=Object(A.a)(b.a)((e=>{let{theme:t}=e;return{margin:0,padding:t.spacing(2),"& .closeButton":{position:"absolute",right:t.spacing(1),top:t.spacing(1),color:t.palette.grey[500]}}})),M=e=>{const{children:t,onClose:n}=e;return Object(f.jsxs)(F,{disableTypography:!0,children:[Object(f.jsx)(m.a,{variant:"h6",children:t}),n?Object(f.jsx)(N.a,{"aria-label":"Close",className:"closeButton",onClick:n,children:Object(f.jsx)(z.a,{})}):null]})},R=Object(A.a)(S.a)((e=>{let{theme:t}=e;return{"&.root":{padding:t.spacing(2)}}})),E=Object(A.a)(k.a)((e=>{let{theme:t}=e;return{"&.root":{margin:0,padding:t.spacing(1)}}}));class U extends a.a.Component{constructor(){super(...arguments),this.state={open:!1},this.handleClickOpen=()=>{this.setState({open:!0})},this.handleClose=()=>{this.setState({open:!1})}}render(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(o.a,{variant:"outlined",color:"secondary",onClick:this.handleClickOpen,children:"Open dialog"}),Object(f.jsxs)(u.a,{onClose:this.handleClose,"aria-labelledby":"customized-dialog-title",open:this.state.open,children:[Object(f.jsx)(M,{id:"customized-dialog-title",onClose:this.handleClose,children:"Modal title"}),Object(f.jsxs)(R,{dividers:!0,children:[Object(f.jsx)(m.a,{gutterBottom:!0,children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),Object(f.jsx)(m.a,{gutterBottom:!0,children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),Object(f.jsx)(m.a,{gutterBottom:!0,children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})]}),Object(f.jsx)(E,{children:Object(f.jsx)(o.a,{onClick:this.handleClose,color:"primary",children:"Save changes"})})]})]})}}var V=U,q=n(1313),H=n(1718),J=n(689),I=n(35),K=n(121);const Y=a.a.forwardRef((function(e,t){return Object(f.jsx)(D.a,{direction:"up",ref:t,...e})}));function Q(){const e=Object(K.a)(),[t,n]=a.a.useState(!1);function i(){n(!1)}return Object(f.jsxs)("div",{children:[Object(f.jsx)(o.a,{variant:"outlined",color:"primary",onClick:function(){n(!0)},children:"Open full-screen dialog"}),Object(f.jsxs)(u.a,{fullScreen:!0,open:t,onClose:i,TransitionComponent:Y,children:[Object(f.jsx)(H.a,{sx:{position:"relative"},children:Object(f.jsxs)(J.a,{children:[Object(f.jsx)(N.a,{edge:"start",color:"inherit",onClick:i,"aria-label":"Close",children:Object(f.jsx)(z.a,{})}),Object(f.jsx)(I.f,{sx:{flex:1,marginLeft:e.spacing(2)},children:"Sound"}),Object(f.jsx)(o.a,{color:"inherit",onClick:i,children:"save"})]})}),Object(f.jsxs)(r.a,{children:[Object(f.jsx)(s.a,{button:!0,children:Object(f.jsx)(j.a,{primary:"Phone ringtone",secondary:"Titania"})}),Object(f.jsx)(q.a,{}),Object(f.jsx)(s.a,{button:!0,children:Object(f.jsx)(j.a,{primary:"Default notification ringtone",secondary:"Tethys"})})]})]})]})}var X=n(472),Z=n(1393),$=n(633),_=n(466),ee=n(465),te=n(685);const ne=Object(A.a)("div")((e=>{let{theme:t}=e;return{"& form":{display:"flex",flexDirection:"column",margin:"auto",width:"fit-content"},"& .formControl":{marginTop:t.spacing(2),minWidth:120},"& .formControlLabel":{marginTop:t.spacing(1)}}}));function ie(){const[e,t]=a.a.useState(!1),[n,i]=a.a.useState(!0),[c,l]=a.a.useState("sm");function r(){t(!1)}return Object(f.jsxs)(ne,{children:[Object(f.jsx)(o.a,{variant:"outlined",color:"primary",onClick:function(){t(!0)},children:"Open max-width dialog"}),Object(f.jsxs)(u.a,{fullWidth:n,maxWidth:c,open:e,onClose:r,"aria-labelledby":"max-width-dialog-title",children:[Object(f.jsx)(b.a,{id:"max-width-dialog-title",children:"Optional sizes"}),Object(f.jsxs)(S.a,{children:[Object(f.jsx)(w.a,{children:"You can set my maximum width and whether to adapt or not."}),Object(f.jsxs)("form",{noValidate:!0,children:[Object(f.jsxs)(ee.a,{className:"formControl",children:[Object(f.jsx)(_.a,{htmlFor:"max-width",children:"maxWidth"}),Object(f.jsxs)(X.a,{value:c,onChange:function(e){l(e.target.value)},inputProps:{name:"max-width",id:"max-width"},children:[Object(f.jsx)($.a,{value:!1,children:"false"}),Object(f.jsx)($.a,{value:"xs",children:"xs"}),Object(f.jsx)($.a,{value:"sm",children:"sm"}),Object(f.jsx)($.a,{value:"md",children:"md"}),Object(f.jsx)($.a,{value:"lg",children:"lg"}),Object(f.jsx)($.a,{value:"xl",children:"xl"})]})]}),Object(f.jsx)(te.a,{className:"formControlLabel",control:Object(f.jsx)(Z.a,{checked:n,onChange:function(e){i(e.target.checked)},value:"fullWidth"}),label:"Full width"})]})]}),Object(f.jsx)(k.a,{children:Object(f.jsx)(o.a,{onClick:r,color:"primary",children:"Close"})})]})]})}var ae=n(1304);function ce(){const[e,t]=a.a.useState(!1),n=Object(K.a)(),i=Object(ae.a)(n.breakpoints.down("sm"));function c(){t(!1)}return Object(f.jsxs)("div",{children:[Object(f.jsx)(o.a,{variant:"outlined",color:"primary",onClick:function(){t(!0)},children:"Open responsive dialog"}),Object(f.jsxs)(u.a,{fullScreen:i,open:e,onClose:c,"aria-labelledby":"responsive-dialog-title",children:[Object(f.jsx)(b.a,{id:"responsive-dialog-title",children:"Use Google's location service?"}),Object(f.jsx)(S.a,{children:Object(f.jsx)(w.a,{children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),Object(f.jsxs)(k.a,{children:[Object(f.jsx)(o.a,{onClick:c,color:"primary",children:"Disagree"}),Object(f.jsx)(o.a,{onClick:c,color:"primary",autoFocus:!0,children:"Agree"})]})]})]})}var oe=n(1416),le=n(1417);const re=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"];function se(e){const{onClose:t,value:n,open:i,...c}=e,[l,r]=a.a.useState(n),s=a.a.useRef(null);return a.a.useEffect((()=>{i||r(n)}),[n,i]),Object(f.jsxs)(u.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,maxWidth:"xs",onEntering:function(){null!=s.current&&s.current.focus()},"aria-labelledby":"confirmation-dialog-title",open:i,...c,children:[Object(f.jsx)(b.a,{id:"confirmation-dialog-title",children:"Phone Ringtone"}),Object(f.jsx)(S.a,{dividers:!0,children:Object(f.jsx)(oe.a,{ref:s,"aria-label":"Ringtone",name:"ringtone",value:l,onChange:function(e,t){r(t)},children:re.map((e=>Object(f.jsx)(te.a,{value:e,control:Object(f.jsx)(le.a,{}),label:e},e)))})}),Object(f.jsxs)(k.a,{children:[Object(f.jsx)(o.a,{variant:"outlined",color:"secondary",onClick:function(){t()},children:"Cancel"}),Object(f.jsx)(o.a,{onClick:function(){t(l)},color:"primary",children:"Ok"})]})]})}const de=Object(A.a)("div")((e=>{let{theme:t}=e;return{width:"100%",maxWidth:360,backgroundColor:t.palette.background.paper,"& .paper":{width:"80%",maxHeight:435}}}));function je(){const[e,t]=a.a.useState(!1),[n,i]=a.a.useState("Dione");return Object(f.jsx)(de,{children:Object(f.jsxs)(r.a,{component:"div",role:"list",children:[Object(f.jsx)(s.a,{button:!0,divider:!0,disabled:!0,role:"listitem",children:Object(f.jsx)(j.a,{primary:"Interruptions"})}),Object(f.jsx)(s.a,{button:!0,divider:!0,"aria-controls":"ringtone-menu","aria-label":"Phone ringtone",onClick:function(){t(!0)},role:"listitem",children:Object(f.jsx)(j.a,{primary:"Phone ringtone",secondary:n})}),Object(f.jsx)(s.a,{button:!0,divider:!0,disabled:!0,role:"listitem",children:Object(f.jsx)(j.a,{primary:"Default notification ringtone",secondary:"Tethys"})}),Object(f.jsx)(se,{keepMounted:!0,open:e,value:n,className:"paper",id:"ringtone-menu",onClose:function(e){t(!1),e&&i(e)}})]})})}var be=n(68);const ue=Object(A.a)("div")((e=>{let{theme:t}=e;return{margin:"30px",[t.breakpoints.down("sm")]:{margin:"16px"},"& .breadcrumb":{marginBottom:"30px",[t.breakpoints.down("sm")]:{marginBottom:"16px"}}}}));t.default=()=>Object(f.jsxs)(ue,{children:[Object(f.jsx)("div",{className:"breadcrumb",children:Object(f.jsx)(c.b,{routeSegments:[{name:"Material",path:"/material"},{name:"Dialog"}]})}),Object(f.jsx)(c.o,{title:"simple Dialog",children:Object(f.jsx)(y,{})}),Object(f.jsx)(be.a,{py:"12px"}),Object(f.jsx)(c.o,{title:"alert dialog",children:Object(f.jsx)(T,{})}),Object(f.jsx)(be.a,{py:"12px"}),Object(f.jsx)(c.o,{title:"transition",children:Object(f.jsx)(P,{})}),Object(f.jsx)(be.a,{py:"12px"}),Object(f.jsx)(c.o,{title:"form dialog",children:Object(f.jsx)(B,{})}),Object(f.jsx)(be.a,{py:"12px"}),Object(f.jsx)(c.o,{title:"customized dialog",children:Object(f.jsx)(V,{})}),Object(f.jsx)(be.a,{py:"12px"}),Object(f.jsx)(c.o,{title:"full-screen dialog",children:Object(f.jsx)(Q,{})}),Object(f.jsx)(be.a,{py:"12px"}),Object(f.jsx)(c.o,{title:"optimized size dialog",children:Object(f.jsx)(ie,{})}),Object(f.jsx)(be.a,{py:"12px"}),Object(f.jsx)(c.o,{title:"responsive dialog",children:Object(f.jsx)(ce,{})}),Object(f.jsx)(be.a,{py:"12px"}),Object(f.jsx)(c.o,{title:"confirmation dialog",children:Object(f.jsx)(je,{})})]})}}]);