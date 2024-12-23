"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[1356],{6051:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>h,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>c,toc:()=>t});var i=l(4848),s=l(8453);const r={},d=void 0,c={id:"Node.js/What is REST",title:"What is REST",description:"REST\uc758 \ud575\uc2ec \uac1c\ub150\uacfc \uc6d0\uce59",source:"@site/docs/Node.js/What is REST.md",sourceDirName:"Node.js",slug:"/Node.js/What is REST",permalink:"/zora_story/docs/Node.js/What is REST",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"studySidebar",previous:{title:"Promise vs Async,Await",permalink:"/zora_story/docs/Node.js/Promise vs Async,Await"},next:{title:"Jotai",permalink:"/zora_story/docs/React/jotai"}},h={},t=[{value:"REST\uc758 \ud575\uc2ec \uac1c\ub150\uacfc \uc6d0\uce59",id:"rest\uc758-\ud575\uc2ec-\uac1c\ub150\uacfc-\uc6d0\uce59",level:2},{value:"1. \uc815\uc758",id:"1-\uc815\uc758",level:2},{value:"2. \uc8fc\uc694 \uc6d0\uce59",id:"2-\uc8fc\uc694-\uc6d0\uce59",level:2},{value:"2-1. \uade0\uc77c\ud55c \uc778\ud130\ud398\uc774\uc2a4",id:"2-1-\uade0\uc77c\ud55c-\uc778\ud130\ud398\uc774\uc2a4",level:4},{value:"a) \ub9ac\uc18c\uc2a4 \uc2dd\ubcc4",id:"a-\ub9ac\uc18c\uc2a4-\uc2dd\ubcc4",level:5},{value:"b) \ub9ac\uc18c\uc2a4 \uc870\uc791",id:"b-\ub9ac\uc18c\uc2a4-\uc870\uc791",level:5},{value:"c) \uc790\uccb4 \ud45c\ud604 \uad6c\uc870",id:"c-\uc790\uccb4-\ud45c\ud604-\uad6c\uc870",level:5},{value:"2-2. \ubb34\uc0c1\ud0dc\uc131",id:"2-2-\ubb34\uc0c1\ud0dc\uc131",level:4},{value:"2-3. \uacc4\uce35\ud654",id:"2-3-\uacc4\uce35\ud654",level:4},{value:"\uad6c\uc131 \uc694\uc18c:",id:"\uad6c\uc131-\uc694\uc18c",level:5},{value:"\uc7a5\uc810:",id:"\uc7a5\uc810",level:5},{value:"2-4. \uce90\uc2dc \uac00\ub2a5\uc131",id:"2-4-\uce90\uc2dc-\uac00\ub2a5\uc131",level:4},{value:"\uad6c\ud604 \ubc29\ubc95:",id:"\uad6c\ud604-\ubc29\ubc95",level:5},{value:"\uc7a5\uc810:",id:"\uc7a5\uc810-1",level:5},{value:"3. \uc120\ud0dd\uc801 \uae30\ub2a5",id:"3-\uc120\ud0dd\uc801-\uae30\ub2a5",level:2},{value:"4. REST API \uc751\ub2f5 \uc0c1\ud0dc \ucf54\ub4dc",id:"4-rest-api-\uc751\ub2f5-\uc0c1\ud0dc-\ucf54\ub4dc",level:2}];function x(n){const e={code:"code",h2:"h2",h4:"h4",h5:"h5",li:"li",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"rest\uc758-\ud575\uc2ec-\uac1c\ub150\uacfc-\uc6d0\uce59",children:"REST\uc758 \ud575\uc2ec \uac1c\ub150\uacfc \uc6d0\uce59"}),"\n",(0,i.jsx)(e.h2,{id:"1-\uc815\uc758",children:"1. \uc815\uc758"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0\uc744 \uc704\ud55c \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc544\ud0a4\ud14d\ucc98"}),"\n",(0,i.jsx)(e.li,{children:"RESTful API: REST \uc6d0\uce59\uc744 \ub530\ub974\ub294 API"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"2-\uc8fc\uc694-\uc6d0\uce59",children:"2. \uc8fc\uc694 \uc6d0\uce59"}),"\n",(0,i.jsx)(e.h4,{id:"2-1-\uade0\uc77c\ud55c-\uc778\ud130\ud398\uc774\uc2a4",children:"2-1. \uade0\uc77c\ud55c \uc778\ud130\ud398\uc774\uc2a4"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\ud45c\uc900\ud654\ub41c \uc815\ubcf4 \uc804\uc1a1 \ubc29\uc2dd"}),"\n",(0,i.jsx)(e.li,{children:"\ub9ac\uc18c\uc2a4 \uc2dd\ubcc4\uc774 \uac00\ub2a5\ud574\uc57c \ud568"}),"\n",(0,i.jsx)(e.li,{children:"\uc790\uccb4 \uc124\uba85\uc801\uc778 \uba54\uc2dc\uc9c0"}),"\n",(0,i.jsx)(e.li,{children:"\ud558\uc774\ud37c\ub9c1\ud06c\ub97c \ud1b5\ud55c \ub9ac\uc18c\uc2a4 \ud0d0\uc0c9"}),"\n"]}),"\n",(0,i.jsx)(e.h5,{id:"a-\ub9ac\uc18c\uc2a4-\uc2dd\ubcc4",children:"a) \ub9ac\uc18c\uc2a4 \uc2dd\ubcc4"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"URI\ub97c \ud1b5\ud55c \uace0\uc720 \uc2dd\ubcc4"}),"\n",(0,i.jsx)(e.li,{children:"\uc608: /users/123, /orders/456"}),"\n"]}),"\n",(0,i.jsx)(e.h5,{id:"b-\ub9ac\uc18c\uc2a4-\uc870\uc791",children:"b) \ub9ac\uc18c\uc2a4 \uc870\uc791"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"HTTP \uba54\uc11c\ub4dc \uc0ac\uc6a9"}),"\n",(0,i.jsx)(e.li,{children:"GET: \uc870\ud68c"}),"\n",(0,i.jsx)(e.li,{children:"POST: \uc0dd\uc131"}),"\n",(0,i.jsx)(e.li,{children:"PUT: \uc804\uccb4 \uc218\uc815"}),"\n",(0,i.jsx)(e.li,{children:"DELETE: \uc0ad\uc81c"}),"\n",(0,i.jsx)(e.li,{children:"PATCH: \ubd80\ubd84 \uc218\uc815"}),"\n"]}),"\n",(0,i.jsx)(e.h5,{id:"c-\uc790\uccb4-\ud45c\ud604-\uad6c\uc870",children:"c) \uc790\uccb4 \ud45c\ud604 \uad6c\uc870"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"JSON/XML \ub4f1 \ud45c\uc900 \ud615\uc2dd \uc0ac\uc6a9"}),"\n",(0,i.jsx)(e.li,{children:"\uba54\ud0c0\ub370\uc774\ud130 \ud3ec\ud568"}),"\n",(0,i.jsx)(e.li,{children:"\ub9ac\uc18c\uc2a4 \uc0c1\ud0dc \uc815\ubcf4 \uc81c\uacf5"}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"2-2-\ubb34\uc0c1\ud0dc\uc131",children:"2-2. \ubb34\uc0c1\ud0dc\uc131"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\uac01 \uc694\uccad\uc740 \ub3c5\ub9bd\uc801\uc73c\ub85c \ucc98\ub9ac"}),"\n",(0,i.jsx)(e.li,{children:"\uc138\uc158/\ucfe0\ud0a4 \uc815\ubcf4 \ubd88\ud544\uc694"}),"\n",(0,i.jsx)(e.li,{children:"\uc11c\ubc84 \ud655\uc7a5\uc131 \ud5a5\uc0c1"}),"\n",(0,i.jsx)(e.li,{children:"\uc694\uccad \uc790\uccb4\uc5d0 \ubaa8\ub4e0 \uc815\ubcf4 \ud3ec\ud568"}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"2-3-\uacc4\uce35\ud654",children:"2-3. \uacc4\uce35\ud654"}),"\n",(0,i.jsx)(e.h5,{id:"\uad6c\uc131-\uc694\uc18c",children:"\uad6c\uc131 \uc694\uc18c:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\ub85c\ub4dc \ubc38\ub7f0\uc11c"}),"\n",(0,i.jsx)(e.li,{children:"\uc778\uc99d \uc11c\ubc84"}),"\n",(0,i.jsx)(e.li,{children:"\uce90\uc2dc \uc11c\ubc84"}),"\n",(0,i.jsx)(e.li,{children:"API \uac8c\uc774\ud2b8\uc6e8\uc774"}),"\n"]}),"\n",(0,i.jsx)(e.h5,{id:"\uc7a5\uc810",children:"\uc7a5\uc810:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\ubcf4\uc548\uc131 \ud5a5\uc0c1"}),"\n",(0,i.jsx)(e.li,{children:"\uc720\uc5f0\ud55c \uad6c\uc870"}),"\n",(0,i.jsx)(e.li,{children:"\ud655\uc7a5\uc131 \ud655\ubcf4"}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"2-4-\uce90\uc2dc-\uac00\ub2a5\uc131",children:"2-4. \uce90\uc2dc \uac00\ub2a5\uc131"}),"\n",(0,i.jsx)(e.h5,{id:"\uad6c\ud604-\ubc29\ubc95",children:"\uad6c\ud604 \ubc29\ubc95:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Cache-Control \ud5e4\ub354 \uc0ac\uc6a9"}),"\n",(0,i.jsx)(e.li,{children:"ETag \ud65c\uc6a9"}),"\n",(0,i.jsx)(e.li,{children:"Last-Modified \ud655\uc778"}),"\n"]}),"\n",(0,i.jsx)(e.h5,{id:"\uc7a5\uc810-1",children:"\uc7a5\uc810:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\uc11c\ubc84 \ubd80\ud558 \uac10\uc18c"}),"\n",(0,i.jsx)(e.li,{children:"\uc751\ub2f5 \uc18d\ub3c4 \ud5a5\uc0c1"}),"\n",(0,i.jsx)(e.li,{children:"\ub124\ud2b8\uc6cc\ud06c \ud2b8\ub798\ud53d \uac10\uc18c"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"3-\uc120\ud0dd\uc801-\uae30\ub2a5",children:"3. \uc120\ud0dd\uc801 \uae30\ub2a5"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\uc628\ub514\ub9e8\ub4dc \ucf54\ub4dc: \uc11c\ubc84\uac00 \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0 \uc2e4\ud589 \ucf54\ub4dc \uc804\uc1a1 \uac00\ub2a5"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"4-rest-api-\uc751\ub2f5-\uc0c1\ud0dc-\ucf54\ub4dc",children:"4. REST API \uc751\ub2f5 \uc0c1\ud0dc \ucf54\ub4dc"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"2xx: \uc131\uacf5\n- 200: OK\n- 201: Created\n- 204: No Content\n\n4xx: \ud074\ub77c\uc774\uc5b8\ud2b8 \uc624\ub958\n- 400: Bad Request\n- 401: Unauthorized\n- 403: Forbidden\n- 404: Not Found\n\n5xx: \uc11c\ubc84 \uc624\ub958\n- 500: Internal Server Error\n- 502: Bad Gateway\n- 503: Service Unavailable\n"})})]})}function o(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(x,{...n})}):x(n)}},8453:(n,e,l)=>{l.d(e,{R:()=>d,x:()=>c});var i=l(6540);const s={},r=i.createContext(s);function d(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:d(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);