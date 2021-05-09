(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5433:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return E}});var i=a(5893),n=a(6156),c=a(1120),s=a(5834),r=a(5258),l=a(8358),o=a(2318),d=a(282),u=a(7395),f=a(9008),p=a(7294),h=a(5615),x=a(9895),y=a(6847),m=a(2302),v=a(3750),j=a(7394),b=a(8222),_=a(9613),w=a(1267),Z=a(642),g=a(5675),N=(0,c.Z)((function(){return{flexCenter:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},emptyBox:{padding:32,minWidth:300,width:"50%"}}})),k=function(e){var t=e.centreList,a=N(),n=(0,p.useState)([]),c=n[0],s=n[1],r=(0,p.useState)([]),l=r[0],d=r[1],u=(0,p.useState)(0),f=u[0],h=u[1],k=["available_capacity","vaccine","district_name","address","date","fee_type"],C={available_capacity:{displayName:"Available",type:"chip",width:100},district_name:{displayName:"District",type:"text",width:"auto"},address:{displayName:"Address",type:"text",width:"auto"},date:{displayName:"Date",type:"text",width:"auto"},pincode:{displayName:"Pincode",type:"text",width:"auto"},fee_type:{displayName:"Type",type:"text",width:100},vaccine:{displayName:"Vaccine",type:"text",width:"auto"},s_no:{displayName:"Serial No",type:"text",width:"auto"}};return(0,p.useEffect)((function(){var e=10*f,t=c.slice(e,e+10);d(t)}),[c,f]),(0,p.useEffect)((function(){t&&function(){var e=0,a=t.reduce((function(t,a){var i=a.sessions.map((function(t){var i=t.available_capacity,n=t.vaccine,c=t.date;return{s_no:++e,available_capacity:i,vaccine:n,date:c,fee_type:a.fee_type,address:a.address,blockName:a.block_name,pincode:a.pincode,district_name:a.district_name}}));return t.concat(i)}),[]);console.log(a),s(a),h(0)}()}),[t]),(0,i.jsx)("div",{className:a.flexCenter,children:0===t.length?(0,i.jsxs)(x.Z,{elevation:3,className:"".concat(a.emptyBox," ").concat(a.flexCenter),children:[(0,i.jsx)(g.default,{src:"/covid-data.svg",alt:"empty",width:"300",height:"300"}),(0,i.jsx)(o.Z,{variant:"h6",color:"textPrimary",children:"No Vaccine Found"}),(0,i.jsx)(o.Z,{variant:"subtitle1",children:"Keep Patience. We'll update as soon as vaccine are available"})]}):(0,i.jsxs)(y.Z,{component:x.Z,children:[(0,i.jsxs)(m.Z,{"aria-label":"Available Vaccine Table",children:[(0,i.jsx)(v.Z,{children:(0,i.jsx)(j.Z,{children:k.map((function(e,t){var a,n;return(0,i.jsx)(b.Z,{style:{width:null===(a=C[e])||void 0===a?void 0:a.width},children:null===(n=C[e])||void 0===n?void 0:n.displayName},t)}))})}),(0,i.jsx)(_.Z,{children:l.map((function(e,t){return(0,i.jsx)(j.Z,{children:k.map((function(t,a){var n;return(0,i.jsxs)(b.Z,{style:{width:null===(n=C[t])||void 0===n?void 0:n.width},children:["available_capacity"===t&&(0,i.jsx)(w.Z,{label:e[t],style:{backgroundColor:e[t]>10?"#a9d18e":"#ffbf00"}}),"fee_type"===t&&(0,i.jsx)(i.Fragment,{children:"FREE"===e[t].toUpperCase()?e[t]:(0,i.jsx)(w.Z,{style:{backgroundColor:"#e96565",color:"#ffffff"},label:e[t]})}),-1===["fee_type","available_capacity"].indexOf(t)&&(0,i.jsx)(i.Fragment,{children:"chip"===C[t].type?(0,i.jsx)(w.Z,{label:e[t]}):e[t]})]},a)}))},t)}))})]}),(0,i.jsx)(Z.Z,{component:"div",count:c.length,rowsPerPage:10,page:f,rowsPerPageOptions:[],onChangePage:function(e,t){h(t)}})]})})},C=(0,c.Z)((function(e){return{container:(0,n.Z)({margin:"32px auto",width:"100%",maxWidth:"70%"},e.breakpoints.down("sm"),{maxWidth:"100%",margin:"16px"}),appBar:{display:"flex",flexDirection:"row"},toolbar:{display:"flex",flexDirection:"row",flex:1,justifyContent:"space-between"}}}));function E(){var e=(0,h.ZP)("http://localhost:5000"),t=C(),a=(0,p.useState)([]),n=a[0],c=a[1],x=(0,p.useState)([]),y=x[0],m=x[1],v=(0,p.useState)(!0),j=v[0],b=v[1],_=(0,p.useState)(!1),w=_[0],Z=_[1];return(0,p.useEffect)((function(){!n||!1!==w&&!0!==j||m(n)}),[n,w,j]),(0,p.useEffect)((function(){return e.connect(),e.on("AVAIL_DETAIL",(function(e){c(e),Z(!0)})),function(){e.disconnect()}}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(f.default,{children:[(0,i.jsx)("title",{children:"Cowin Vaccine Tracker"}),(0,i.jsx)("meta",{name:"description",content:"Track Vaccine Availability"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,i.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"}),(0,i.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"})]}),(0,i.jsx)(s.ZP,{}),(0,i.jsx)(r.Z,{position:"relative",className:t.appBar,children:(0,i.jsxs)(l.Z,{className:t.toolbar,children:[(0,i.jsx)(o.Z,{variant:"h6",color:"inherit",children:"Vaccine Availability Tracker"}),(0,i.jsxs)("div",{children:[(0,i.jsx)(d.Z,{variant:"contained",color:"secondary",disabled:j||!w,onClick:function(){return Z(!1)},children:j?"Auto Refresh":"Refresh"}),(0,i.jsx)(u.Z,{color:"secondary",checked:j,onChange:function(e){return b(e.target.checked)}})]})]})}),(0,i.jsx)("main",{className:"basic-vertical",children:(0,i.jsx)("div",{className:"basic-vertical ".concat(t.container),children:(0,i.jsx)(k,{centreList:y})})})]})}},5301:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(5433)}])}},function(e){e.O(0,[774,961],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);