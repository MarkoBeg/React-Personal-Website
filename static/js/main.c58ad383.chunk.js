(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{70:function(e,t,c){},71:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},94:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),i=c(33),r=c.n(i),l=(c(70),c(71),c(7)),n=c(54),o=c.n(n),d=c(57),j=c.n(d),b=c(56),h=c.n(b),m=c(0),x=[{id:1,icon:Object(m.jsx)(o.a,{}),title:"Home",path:"Home"},{id:2,icon:Object(m.jsx)(h.a,{}),title:"Projects",path:"Projects"},{id:3,icon:Object(m.jsx)(j.a,{}),title:"About",path:"About"}],O=c(23),p=(c(85),c(58)),u=c.n(p),f=c(110),v=c(59),g=c.n(v),N=c(112),k=c.p+"static/media/avatar.258fd05e.jpg";function y(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)("div",{className:"logo",children:Object(m.jsx)("h4",{children:"Web Dev"})}),Object(m.jsxs)("div",{className:"header-right",children:[Object(m.jsx)("div",{className:"nav",children:x.map((function(e){return Object(m.jsxs)(O.Link,{className:"links",activeClass:"active",to:e.path,spy:!0,smooth:"true",offset:-70,duration:500,children:[Object(m.jsx)("span",{className:"icon",children:e.icon}),e.title]},e.id)}))}),Object(m.jsx)("button",{className:"btn-sidebar",onClick:function(){a(!c)},children:Object(m.jsx)(f.a,{children:Object(m.jsx)(u.a,{})})})]}),Object(m.jsx)("div",{className:c?"mobile-sidebar":"mobile-closed",children:Object(m.jsxs)("div",{className:"mobile-nav ",children:[x.map((function(e){return Object(m.jsx)(O.Link,{className:"links-mobile",activeClass:"active",to:e.path,spy:!0,smooth:"true",offset:-70,duration:750,onClick:function(){return a(!1)},children:e.title},e.id)})),Object(m.jsx)("a",{href:"https://github.com/MarkoBeg",children:Object(m.jsx)(N.a,{src:k,className:"avatar"})}),Object(m.jsx)("button",{className:"close-mobile",onClick:function(){return a(!1)},children:Object(m.jsx)(f.a,{children:Object(m.jsx)(g.a,{className:"close-btn"})})})]})})]})})}c(86);function w(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"hero",id:"Home",children:[Object(m.jsxs)("div",{className:"hero-banner",children:[Object(m.jsx)("h1",{children:"Front-End Web Developer"}),Object(m.jsxs)("h4",{children:["Code is the ",Object(m.jsx)("span",{children:"Future"}),". My name is Marko and I have a passion for creating creative content using new technologies"," ",Object(m.jsx)("span",{className:"header-emoji",children:"\ud83e\uddd1\ud83c\udffb"}),"."]}),Object(m.jsx)(O.Link,{className:"myData",to:"About",spy:!0,smooth:"true",offset:-70,duration:500,children:"CV"})]}),Object(m.jsxs)("div",{className:"hero-right",children:[Object(m.jsx)("div",{className:"hero-info",children:Object(m.jsx)("h3",{children:"Hi, I'm Marko"})}),Object(m.jsxs)("div",{className:"hero-avatar",children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"hero-avatar-bio",children:"React.js"})," Developer,"]}),Object(m.jsxs)("p",{children:["The most important thing about coding is",Object(m.jsx)("span",{className:"practice",children:" practice"}),", there is nothing like enough ",Object(m.jsx)("span",{className:"practice",children:"practice"})," and eventually it is the ",Object(m.jsx)("span",{className:"practice",children:"practice"})," that will make you perfect."]}),Object(m.jsx)("p",{children:"Down below you can check some of my projects \ud83d\udc47\ud83c\udffb, feel free to contact me."}),Object(m.jsx)("h3",{style:{paddingTop:"25px"},children:"\ud83d\udd0e Skills, I will let others to judge."})]})]})]})})}c(87);function M(e){var t=e.title,c=e.img,s=e.text,a=e.info,i=e.color,r=e.background,l=e.border,n=e.picture;return Object(m.jsx)("div",{className:"card-section",children:Object(m.jsx)("div",{className:"card-size",children:Object(m.jsxs)("div",{className:"card",children:[Object(m.jsxs)("div",{className:"front-card",style:{background:r,border:l,backgroundImage:"url( ".concat(n,")")},children:[c&&Object(m.jsx)("img",{src:c,alt:"project"}),Object(m.jsx)("h2",{style:{color:i},children:t})]}),Object(m.jsxs)("div",{className:"back-card",children:[Object(m.jsx)("h3",{children:a}),Object(m.jsx)("p",{children:s})]})]})})})}c(88);function R(e){var t=e.img,c=e.text,s=e.title;return Object(m.jsx)("div",{className:"picture-info",children:Object(m.jsxs)("div",{className:"info",children:[t&&Object(m.jsx)("img",{src:t,alt:""}),Object(m.jsx)("h4",{children:s}),Object(m.jsx)("p",{children:c})]})})}c(89);function F(e){var t=e.selected;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"main-body ".concat(t&&"reverse"),children:[Object(m.jsx)("div",{className:"left-side",children:Object(m.jsx)("div",{className:"space",children:Object(m.jsx)(R,{title:"Movies for everyone out there",text:"TMDB API used to create site for searching movies, check it out..."})})}),Object(m.jsx)("div",{className:"right-side",children:Object(m.jsx)("div",{className:"space",children:Object(m.jsx)("a",{rel:"opener",href:"https://markobeg.github.io/MoviesMark-React-Movie-App/",target:"_blank",children:Object(m.jsx)(M,{picture:"",color:"#fff",background:"var(--moviesmark-color)",info:"Technologies used in project",text:"Build with React.js, Firebase, Material-UI, Redux, TMDB",title:"MoviesMark build",img:""})})})})]}),Object(m.jsxs)("div",{className:"reversed-body",children:[Object(m.jsx)("div",{className:"left-side",children:Object(m.jsx)("div",{className:"space",children:Object(m.jsx)(R,{title:"Search for you favorite Apartment",text:"You can search for you favorite Apartment with few clicks is that easy check it out..."})})}),Object(m.jsx)("div",{className:"right-side",children:Object(m.jsx)("div",{className:"space",children:Object(m.jsx)("a",{rel:"opener",href:"https://markobeg.github.io/Tailwind-CSS-React-Apartments-site/",target:"_blank",children:Object(m.jsx)(M,{background:"var(--markapart-color)",color:"#fff",info:"Technologies used in project",text:"Build with React.js, Firebase, Material-UI, Tailwind CSS",title:"MarkApart build",img:""})})})})]}),Object(m.jsxs)("div",{className:"main-body ".concat(t&&"reverse"),children:[Object(m.jsx)("div",{className:"left-side",children:Object(m.jsx)("div",{className:"space",children:Object(m.jsx)(R,{title:"One and only Gmail",text:"App for sending gmails with a simple click hosted by powerful Firebase... check it out..."})})}),Object(m.jsx)("div",{className:"right-side",children:Object(m.jsx)("div",{className:"space",children:Object(m.jsx)("a",{rel:"opener",href:"https://me-f4341.web.app/",target:"_blank",children:Object(m.jsx)(M,{color:"#fff",background:"var(--gmail-color)",info:"Technologies used in project",text:"Build with React.js, Firebase, Material-UI, Redux",title:"Gmail build",img:""})})})})]}),Object(m.jsxs)("div",{className:"reversed-body",children:[Object(m.jsx)("div",{className:"left-side",children:Object(m.jsx)("div",{className:"space",children:Object(m.jsx)(R,{title:"Facebook, one and only social-media-app",text:"App created for posting text messages, connect to it via email, share some nice images, hosted by Firebase...  check it out..."})})}),Object(m.jsx)("div",{className:"right-side",children:Object(m.jsx)("div",{className:"space",children:Object(m.jsx)("a",{rel:"opener",href:"https://facebook-me-7ce43.web.app/",target:"_blank",children:Object(m.jsx)(M,{color:"#fff",background:"var(--facebook-color)",info:"Technologies used in project",text:"Build with React.js, Firebase, Material-UI, Redux",title:"Facebook build",img:""})})})})]}),Object(m.jsxs)("div",{className:"main-body ".concat(t&&"reverse"),children:[Object(m.jsx)("div",{className:"left-side",children:Object(m.jsx)("div",{className:"space",children:Object(m.jsx)(R,{title:"InstaMark is here",text:"Post your Pictures and comment them, also you have a little forum where you can send messages..."})})}),Object(m.jsx)("div",{className:"right-side",children:Object(m.jsx)("div",{className:"space",children:Object(m.jsx)("a",{rel:"opener",href:"https://instamark-me.web.app/",target:"_blank",children:Object(m.jsx)(M,{color:"#fff",background:"var(--instamark-color)",info:"Technologies used in project",text:"Build with React.js, Firebase, Material-UI, Redux",title:"InstaMark build",img:""})})})})]}),Object(m.jsxs)("div",{className:"reversed-body",children:[Object(m.jsx)("div",{className:"left-side",children:Object(m.jsx)("div",{className:"space",children:Object(m.jsx)(R,{title:"Make your favorite todo list",text:"Simple Todo build,  add, deleted and updated the list... check it out..."})})}),Object(m.jsx)("div",{className:"right-side",children:Object(m.jsx)("div",{className:"space",children:Object(m.jsx)("a",{rel:"opener",href:"https://todo-me-59494.web.app/",target:"_blank",children:Object(m.jsx)(M,{color:"#fff",background:"var(--todo-color)",info:"Technologies used in project",text:"Build with React.js, Firebase, Material-UI",title:"Todo app build"})})})})]}),Object(m.jsxs)("div",{className:"main-body ".concat(t&&"reverse"),children:[Object(m.jsx)("div",{className:"left-side",children:Object(m.jsx)("div",{className:"space",children:Object(m.jsx)(R,{title:"Weather app",text:"If you wanna now the weather in your city your are in the right place..."})})}),Object(m.jsx)("div",{className:"right-side",children:Object(m.jsx)("div",{className:"space",children:Object(m.jsx)("a",{rel:"opener",href:"https://markobeg.github.io/React-weather-app/",target:"_blank",children:Object(m.jsx)(M,{background:"var(--weatherapp-color)",info:"Technologies used in project",text:"Build with React.js, Material-UI,",title:"Weather app build",color:"#fff"})})})})]}),Object(m.jsxs)("div",{className:"reversed-body",children:[Object(m.jsx)("div",{className:"left-side",children:Object(m.jsx)("div",{className:"space",children:Object(m.jsx)(R,{title:"Whatsapp",text:"Send messages and create various channels for other people, connect to it via email... check it out... "})})}),Object(m.jsx)("div",{className:"right-side",children:Object(m.jsx)("div",{className:"space",children:Object(m.jsx)("a",{rel:"opener",href:"https://whatsapp-e1158.web.app/",target:"_blank",children:Object(m.jsx)(M,{color:"#fff",background:"var(--whatsapp-color)",info:"Technologies used in project",text:"Build with React.js, Firebase, Material-UI, Redux",title:"Whatsapp build",img:""})})})})]})]})}c(90);function I(){return Object(m.jsxs)("div",{className:"main",id:"Projects",children:[Object(m.jsx)("h1",{children:"My work "}),Object(m.jsx)(F,{})]})}c(91);var T=c(61),A=c.n(T),B=c(60),S=c.n(B),C=c.p+"static/media/Fake Resume.1edf6d93.pdf",D=c(62),_=c.n(D);function U(){return Object(m.jsxs)("div",{className:"bottom-section",id:"About",children:[Object(m.jsx)("h1",{children:"Download My Resume"}),Object(m.jsxs)("h4",{children:["With a simple click find more about me ",Object(m.jsx)("span",{className:"emoji",children:"\ud83e\uddd1\ud83c\udffb"}),"."]}),Object(m.jsx)("a",{className:"resume",download:C,href:C,children:"Download Resume \ud83d\udc48\ud83c\udffb"}),Object(m.jsxs)("div",{className:"bottom-links",children:[Object(m.jsx)("a",{href:"mailto:markobeg15@gmail.com",children:Object(m.jsx)(S.a,{className:"icons",fontSize:"large"})}),Object(m.jsx)("a",{href:"https://github.com/MarkoBeg",target:"_blank",children:Object(m.jsx)(A.a,{className:"icons",fontSize:"large"})})]}),Object(m.jsx)(O.Link,{className:"expand",to:"Home",spy:!0,smooth:"true",offset:-70,duration:500,children:Object(m.jsx)(_.a,{})})]})}c(92);function W(){return Object(m.jsx)("div",{className:"footer",children:Object(m.jsx)("p",{children:"All rights reserved \xa9 2021 by Marko"})})}var P=function(){return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)(y,{}),Object(m.jsxs)("div",{className:"body",children:[Object(m.jsx)(w,{}),Object(m.jsx)(I,{}),Object(m.jsx)(U,{}),Object(m.jsx)(W,{})]})]})};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(P,{})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.c58ad383.chunk.js.map