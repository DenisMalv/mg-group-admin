"use strict";(self.webpackChunkreact_homework=self.webpackChunkreact_homework||[]).push([[922],{4922:(e,s,a)=>{a.r(s),a.d(s,{default:()=>j});var r=a(184);const l=e=>{let{children:s}=e;return(0,r.jsx)("ul",{className:"list",children:s})};function t(e){const s=new Date(e),a=String(s.getUTCDate()).padStart(2,"0"),r=String(s.getUTCMonth()+1).padStart(2,"0"),l=s.getUTCFullYear();return"".concat(a,".").concat(r,".").concat(l)}var n=a(1191),i=a(3400);const c={owner:"\u0412\u043b\u0430\u0441\u043d\u0438\u043a \u0431\u0456\u0437\u043d\u0435\u0441\u0443",admin:"\u0410\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u043e\u0440",moderator:"\u041c\u043e\u0434\u0435\u0440\u0430\u0442\u043e\u0440",none:"\u041d\u0435 \u043d\u0430\u0434\u0430\u043d\u043e \u0440\u043e\u043b\u0456"},o=e=>{let{id:s,name:a="NewUser",email:l,role:o,lastLogined:d,verify:h,handleClick:m}=e;return(0,r.jsxs)("li",{className:"list-item",children:[(0,r.jsxs)("div",{className:"users-item-content",children:[(0,r.jsx)("h3",{className:"user-item-name",children:a}),(0,r.jsxs)("p",{className:"",style:{display:"flex",alignItems:"center",gap:"12px"},children:[l,!h&&(0,r.jsx)(i.Z,{classlist:"",id:"warning",name:"warning",color:"#DD7A02",width:"24",height:"24"})]})]}),(0,r.jsxs)("div",{className:"users-item-content",children:[(0,r.jsx)("p",{className:"",children:"\u0420\u043e\u043b\u044c"}),(0,r.jsx)("h4",{className:"users-item-role",children:c[o]})]}),(0,r.jsxs)("div",{className:"users-item-content",children:[(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("p",{className:"mb-12",children:"\u041e\u0441\u0442\u0430\u043d\u043d\u0454 \u0432\u0456\u0434\u0432\u0456\u0434\u0443\u0432\u0430\u043d\u043d\u044f"}),(0,r.jsx)("h4",{className:"users-item-date",children:"01.01.1970"===t(d)?"\u041d\u0456\u043a\u043e\u043b\u0438":t(d)})]}),(0,r.jsx)(n.Z,{iconName:"dots",stroke:"#171C1A",color:"transparent",handleClick:()=>m(s)})]})]})};var d=a(2791),h=a(5892),m=a(5048),u=a(6871),x=a(1360),g=a(1306);const j=()=>{const e=(0,m.I0)(),{data:s=[],isLoading:a,isError:t}=(0,g.zQ)(),n=(0,u.s0)(),i=s=>{e((0,x.fr)()),n("/users/".concat(s))};return(0,d.useEffect)((()=>{s&&e((0,x.HM)(s))}),[s,e]),(0,r.jsxs)(r.Fragment,{children:[a&&(0,r.jsx)(h.g4,{visible:!0,height:"80",width:"80",color:"#4fa94d",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:"loader-overlay ".concat(a?"loader-overlay-show":"")}),t&&(0,r.jsx)("h1",{children:"ErrorAPI !!! on UserPage"}),s&&(0,r.jsx)(l,{children:s.map((e=>{let{_id:s,name:a,email:l,role:t,lastLogined:n,verify:c}=e;return(0,r.jsx)(o,{id:s,name:a,email:l,role:t,verify:c,lastLogined:n,handleClick:i},s)}))})]})}}}]);
//# sourceMappingURL=922.32265155.chunk.js.map