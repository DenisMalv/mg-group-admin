"use strict";(self.webpackChunkreact_homework=self.webpackChunkreact_homework||[]).push([[255],{255:(e,s,a)=>{a.r(s),a.d(s,{default:()=>x});var r=a(791),t=a(400),l=a(184);const c=e=>{let{title:s,name:a,classList:c,type:i,value:o,handleInput:n,restore:d,area:m,data:h,updData:p,isShow:x,setIsShow:u,error:j,setError:b,errorMessage:f}=e;const g=(0,r.useRef)();return(0,l.jsxs)("div",{className:"input-label ".concat(c),children:[(0,l.jsx)("span",{className:"input-label-text",children:s}),(0,l.jsxs)("div",{className:"input-wrapper",children:[(0,l.jsx)("input",{value:o,onChange:e=>n(e,a),className:"form-input ".concat(j[a]?"error":""),type:i,placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c ".concat("email"===a?"email":"\u043f\u0430\u0440\u043e\u043b\u044c"),ref:g}),"email"===a&&(0,l.jsx)(t.Z,{classlist:"form-input-icon ".concat(j[a]?"error":"hide"),id:"warning",name:"warning",color:"#DD7A02",width:"24",height:"24"}),"password"===a&&(0,l.jsx)(t.Z,{classlist:"form-input-icon ".concat(j[a]?"error":"hide"),id:"warning",name:"eye-open",stroke:"#DD7A02",color:"#DD7A02",width:"24",height:"24",onClick:e=>{"password"===g.current.type?g.current.type="text":g.current.type="password"}})]}),"email"===a&&(0,l.jsx)("p",{className:"error-message ".concat(j[a]?"error":""),children:f}),"password"===a&&(0,l.jsxs)("ul",{className:"error-message list ".concat(j[a]?"error":""),children:[(0,l.jsx)("li",{children:"\u041f\u0430\u0440\u043e\u043b\u044c \u043c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u043c\u0456\u043d\u0456\u043c\u0443\u043c 8 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432"}),(0,l.jsx)("li",{children:"\u0412\u0435\u043b\u0438\u043a\u0456 \u0442\u0430 \u043c\u0430\u043b\u0456 \u043b\u0456\u0442\u0435\u0440\u0456"}),(0,l.jsx)("li",{children:"\u041c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u044f\u043a \u043c\u0456\u043d\u0456\u043c\u0443\u043c \u043e\u0434\u043d\u0443 \u0446\u0438\u0444\u0440\u0443"})]}),d&&(0,l.jsxs)("ul",{className:"error-message list restore",children:[(0,l.jsx)("li",{children:"\u041f\u0430\u0440\u043e\u043b\u044c \u043c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u043c\u0456\u043d\u0456\u043c\u0443\u043c 8 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432"}),(0,l.jsx)("li",{children:"\u0412\u0435\u043b\u0438\u043a\u0456 \u0442\u0430 \u043c\u0430\u043b\u0456 \u043b\u0456\u0442\u0435\u0440\u0456"}),(0,l.jsx)("li",{children:"\u041c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u044f\u043a \u043c\u0456\u043d\u0456\u043c\u0443\u043c \u043e\u0434\u043d\u0443 \u0446\u0438\u0444\u0440\u0443"})]})]})},i=e=>{let{title:s,name:a,classList:c,checked:i,handleChecked:o,error:n}=e;return(0,r.useEffect)((()=>{}),[]),(0,l.jsx)("div",{className:"checkbox-wrapper ".concat(c),children:(0,l.jsxs)("label",{htmlFor:a,className:"checkbox-label",children:[(0,l.jsxs)("div",{className:"checkbox-input-wrapper ".concat(i?"checked":""),children:[(0,l.jsx)("input",{type:"checkbox",name:a,id:a,className:"checkbox-input",checked:i,onChange:e=>o(e,a)}),(0,l.jsx)(t.Z,{classlist:"checkbox-input-icon ".concat(i?"checked":""),id:"arrow-correct",name:"arrow-correct",color:"transparent",stroke:"#f6f7f7",width:"24",height:"24"})]}),s]})})},o=e=>{let{title:s,type:a,data:r,classList:t}=e;return(0,l.jsx)("button",{type:a,className:"main-button br-20 ".concat(t),disabled:r&&""===r.email&&""===r.password,children:s})};const n=a.p+"static/media/apple.d3c612988de6366d42c5861f24e4e7c2.svg";const d=a.p+"static/media/google.7574645a5ddcf78350a2c0ed9b4c690e.svg",m=e=>{let{title:s,type:a,data:r,classList:t}=e;return(0,l.jsxs)("div",{className:"mb-32",children:[(0,l.jsx)("p",{className:"login-social-descr mb-16",children:"\u0430\u0431\u043e \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e"}),(0,l.jsxs)("div",{className:"login-social-links-wrapper flex ",children:[(0,l.jsx)("a",{href:"#1",children:(0,l.jsx)("img",{src:n,alt:""})}),(0,l.jsx)("a",{href:"#1",children:(0,l.jsx)("img",{src:d,alt:""})})]})]})};const h=a.p+"static/media/Check.737b3becb85eb3f4f9517bcb6dbd9691.svg",p=e=>{let{title:s}=e;const[a,n]=(0,r.useState)(1),[d,p]=(0,r.useState)({email:"",password:"",checked:!1}),[x,u]=(0,r.useState)({email:!1,password:!1}),j=(e,s)=>{console.log(e.target.value),""!==e.target.value&&u({...x,[s]:!1}),p({...d,[s]:e.target.value})},b=e=>{e.preventDefault(),""===d.email&&u({...x,email:!0}),""!==d.password||u({...x,password:!0})};return(0,l.jsxs)("div",{className:"form-container bg-card br-24",children:[1===a&&(0,l.jsxs)("form",{className:"form-login",action:"",onSubmit:b,children:[(0,l.jsx)("h3",{className:"form-title",children:s}),(0,l.jsx)(c,{title:"Email",name:"email",type:"email",classList:"mb-16",value:d.email,handleInput:j,error:x,errorMessage:"\u041f\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435  \u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0456\u0441\u0442\u044c \u0432\u0432\u0435\u0434\u0435\u043d\u043d\u044f email"}),(0,l.jsx)(c,{title:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",type:"password",classList:"mb-16",value:d.password,handleInput:j,error:x,errorMessage:""}),(0,l.jsx)(i,{title:"\u0417\u0430\u043f\u0430\u043c\u02bc\u044f\u0442\u0430\u0442\u0438 \u043f\u0430\u0440\u043e\u043b\u044c",classList:"mb-24",name:"checked",checked:d.checked,handleChecked:(e,s)=>{p({...d,[s]:e.target.checked})}}),(0,l.jsx)(o,{title:"\u0423\u0432\u0456\u0439\u0442\u0438",type:"submit",classList:"mb-16",data:d}),(0,l.jsx)(m,{}),(0,l.jsxs)("p",{className:"form-forgot-descr",children:["\u0417\u0430\u0431\u0443\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c? ",(0,l.jsx)("span",{className:"form-forgot-link",onClick:()=>n(2),children:"\u0412\u0456\u0434\u043d\u043e\u0432\u0438\u0442\u0438"})," "]})]}),2===a&&(0,l.jsxs)("form",{className:"form-login",action:"",onSubmit:b,children:[(0,l.jsx)("h3",{className:"form-title mb-32",children:"\u0412\u0456\u0434\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u043f\u0430\u0440\u043e\u043b\u044e"}),(0,l.jsx)("p",{className:"mb-32",children:"\u0412\u043a\u0430\u0436\u0456\u0442\u044c \u0432\u0430\u0448 email, \u0449\u043e\u0431 \u043f\u0456\u0434\u0432\u0435\u0440\u0434\u0438\u0442\u0438 \u0432\u0430\u0448\u0443 \u043e\u0441\u043e\u0431\u0443"}),(0,l.jsx)(c,{title:"Email",name:"email",type:"email",classList:"mb-24",value:d.email,handleInput:j,error:x,errorMessage:"\u041f\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435  \u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0456\u0441\u0442\u044c \u0432\u0432\u0435\u0434\u0435\u043d\u043d\u044f email"}),(0,l.jsx)(o,{title:"\u0412\u0456\u0434\u043d\u043e\u0432\u0438\u0442\u0438",type:"submit",classList:"mb-16",data:d}),(0,l.jsxs)("p",{className:"form-forgot-descr",children:["\u0417\u0433\u0430\u0434\u0430\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c? ",(0,l.jsx)("span",{className:"form-forgot-link",onClick:()=>n(1),children:"\u0423\u0432\u0456\u0439\u0442\u0438"})," "]})]}),3===a&&(0,l.jsxs)("form",{className:"form-login",action:"",onSubmit:b,children:[(0,l.jsx)("h3",{className:"form-title mb-32",children:"\u0412\u0456\u0434\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u043f\u0430\u0440\u043e\u043b\u044e"}),(0,l.jsx)(c,{title:"\u041d\u043e\u0432\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",name:"password",type:"text",classList:"mb-16",value:d.password,handleInput:j,error:x,errorMessage:""}),(0,l.jsx)(c,{title:"\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 \u043f\u0430\u0440\u043e\u043b\u044c",name:"password",type:"text",classList:"mb-32",value:d.password,handleInput:j,error:x,errorMessage:"",restore:!0}),(0,l.jsx)(o,{title:"\u0423\u0432\u0456\u0439\u0442\u0438",type:"submit",classList:"",data:d})]}),4===a&&(0,l.jsxs)("div",{className:"step-four",children:[(0,l.jsx)(t.Z,{classlist:"step-four-icon-close",id:"login-restore-close",name:"close",stroke:"#fff",width:"24",height:"24",onClick:()=>n(1)}),(0,l.jsx)("h3",{className:"",children:"\u0412\u0456\u0442\u0430\u044e!"}),(0,l.jsx)("h3",{className:"mb-32",children:"\u041f\u0430\u0440\u043e\u043b\u044c \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0432\u0456\u0434\u043d\u043e\u0432\u043b\u0435\u043d\u043e"}),(0,l.jsx)("img",{src:h,alt:"icon-check"})]})]})},x=()=>(0,l.jsx)("div",{children:(0,l.jsx)(p,{title:"\u0412\u0445\u0456\u0434 \u0432 \u0430\u043a\u0430\u0443\u043d\u0442"})})}}]);
//# sourceMappingURL=255.6ee7722a.chunk.js.map