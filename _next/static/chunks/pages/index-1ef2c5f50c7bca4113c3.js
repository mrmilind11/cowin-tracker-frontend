(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7330:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return D}});var n=a(5893),i=a(6156),c=a(1120),r=a(3457),s=a(5834),l=a(5258),o=a(8358),d=a(2318),f=a(282),u=a(7395),p=a(9008),h=a(7294),x=a(5615),m=a(9895),y=a(6847),v=a(2302),j=a(3750),b=a(7394),_=a(8222),g=a(9613),w=a(1267),Z=a(642),N=a(5675),k=(0,c.Z)((function(){return{flexCenter:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},pad16:{padding:16},emptyBox:{padding:32,minWidth:300,width:"50%"}}})),C=function(e){var t=e.centreList,a=k(),i=(0,h.useState)([]),c=i[0],r=i[1],s=(0,h.useState)([]),l=s[0],o=s[1],f=(0,h.useState)(0),u=f[0],p=f[1],x=["available_capacity","vaccine","district_name","address","date","fee_type"],C={available_capacity:{displayName:"Available",type:"chip",width:100},district_name:{displayName:"District",type:"text",width:"auto"},address:{displayName:"Address",type:"text",width:"auto"},date:{displayName:"Date",type:"text",width:"auto"},pincode:{displayName:"Pincode",type:"text",width:"auto"},fee_type:{displayName:"Type",type:"text",width:100},vaccine:{displayName:"Vaccine",type:"text",width:"auto"},s_no:{displayName:"Serial No",type:"text",width:"auto"}};return(0,h.useEffect)((function(){var e=10*u,t=c.slice(e,e+10);o(t)}),[c,u]),(0,h.useEffect)((function(){t&&function(){var e=0,a=t.reduce((function(t,a){var n=a.sessions.map((function(t){var n=t.available_capacity,i=t.vaccine,c=t.date;return{s_no:++e,available_capacity:n,vaccine:i,date:c,fee_type:a.fee_type,address:a.address,blockName:a.block_name,pincode:a.pincode,district_name:a.district_name}}));return t.concat(n)}),[]);console.log(a),r(a),p(0)}()}),[t]),(0,n.jsx)("div",{className:"".concat(a.flexCenter," ").concat(a.pad16),children:0===t.length?(0,n.jsxs)(m.Z,{elevation:3,className:"".concat(a.emptyBox," ").concat(a.flexCenter),children:[(0,n.jsx)(N.default,{src:"/covid-data.svg",alt:"empty",width:"300",height:"300"}),(0,n.jsx)(d.Z,{variant:"h6",color:"textPrimary",children:"No Vaccine Found"}),(0,n.jsx)(d.Z,{variant:"subtitle1",children:"Keep Patience. We'll update as soon as vaccine are available"})]}):(0,n.jsxs)(y.Z,{component:m.Z,children:[(0,n.jsxs)(v.Z,{"aria-label":"Available Vaccine Table",children:[(0,n.jsx)(j.Z,{children:(0,n.jsx)(b.Z,{children:x.map((function(e,t){var a,i;return(0,n.jsx)(_.Z,{style:{width:null===(a=C[e])||void 0===a?void 0:a.width,minWidth:100},children:null===(i=C[e])||void 0===i?void 0:i.displayName},t)}))})}),(0,n.jsx)(g.Z,{children:l.map((function(e,t){return(0,n.jsx)(b.Z,{children:x.map((function(t,a){var i;return(0,n.jsxs)(_.Z,{style:{width:null===(i=C[t])||void 0===i?void 0:i.width,minWidth:100},children:["available_capacity"===t&&(0,n.jsx)(w.Z,{label:e[t],style:{backgroundColor:e[t]>10?"#a9d18e":"#ffbf00"}}),"fee_type"===t&&(0,n.jsx)(n.Fragment,{children:"FREE"===e[t].toUpperCase()?e[t]:(0,n.jsx)(w.Z,{style:{backgroundColor:"#e96565",color:"#ffffff"},label:e[t]})}),-1===["fee_type","available_capacity"].indexOf(t)&&(0,n.jsx)(n.Fragment,{children:"chip"===C[t].type?(0,n.jsx)(w.Z,{label:e[t]}):e[t]})]},a)}))},t)}))})]}),(0,n.jsx)(Z.Z,{component:"div",count:c.length,rowsPerPage:10,page:u,rowsPerPageOptions:[],onChangePage:function(e,t){p(t)}})]})})},E=a(1302),P={primary:{light:"#757ce8",main:"#3f50b5",dark:"#002884",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}},T={primary:{light:"#757ce8",main:"#3f50b5",dark:"#002884",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}},A=function(e){return{palette:e?P:T}},S=((0,E.Z)(A(!0)),(0,E.Z)(A(!1))),V=(0,c.Z)((function(e){return{container:(0,i.Z)({margin:"32px auto",width:"100%",maxWidth:"70%"},e.breakpoints.down("sm"),{maxWidth:"100%",margin:"16px"}),appBar:{display:"flex",flexDirection:"row"},toolbar:{display:"flex",flexDirection:"row",flex:1,justifyContent:"space-between"}}}));function D(){var e=(0,x.ZP)("http://localhost:5000"),t=V(),a=(0,h.useState)([]),i=a[0],c=a[1],m=(0,h.useState)([]),y=m[0],v=m[1],j=(0,h.useState)(!0),b=j[0],_=j[1],g=(0,h.useState)(!1),w=g[0],Z=g[1];return(0,h.useEffect)((function(){!i||!1!==w&&!0!==b||v(i)}),[i,w,b]),(0,h.useEffect)((function(){return e.connect(),e.on("AVAIL_DETAIL",(function(e){c(e),Z(!0)})),function(){var e=document.querySelector("#jss-server-side");e&&e.parentElement.removeChild(e)}(),function(){e.disconnect()}}),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(p.default,{children:[(0,n.jsx)("title",{children:"Cowin Vaccine Tracker"}),(0,n.jsx)("meta",{name:"description",content:"Track Vaccine Availability"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"})]}),(0,n.jsxs)(r.Z,{theme:S,children:[(0,n.jsx)(s.ZP,{}),(0,n.jsx)(l.Z,{position:"relative",className:t.appBar,children:(0,n.jsxs)(o.Z,{className:t.toolbar,children:[(0,n.jsx)(d.Z,{variant:"h6",color:"inherit",children:"Vaccine Availability Tracker"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(f.Z,{variant:"contained",color:"secondary",disabled:b||!w,onClick:function(){return Z(!1)},children:b?"Auto Refresh":"Refresh"}),(0,n.jsx)(u.Z,{color:"secondary",checked:b,onChange:function(e){return _(e.target.checked)}})]})]})}),(0,n.jsx)("main",{className:"basic-vertical",children:(0,n.jsx)("div",{className:"basic-vertical ".concat(t.container),children:(0,n.jsx)(C,{centreList:y})})})]})]})}},5301:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(7330)}])}},function(e){e.O(0,[774,912],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);