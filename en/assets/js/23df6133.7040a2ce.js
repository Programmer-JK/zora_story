"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[8737],{51892:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>t,toc:()=>l});var i=n(74848),r=n(28453);const s={title:"Promise\uc640 async/await\uc758 \uc774\ud574",description:"Promise\uc758 \uac1c\ub150, async/await \ubb38\ubc95, \ube44\ub3d9\uae30 \ucc98\ub9ac \ubc29\uc2dd\uc758 \ubc1c\uc804 \uacfc\uc815\uc5d0 \ub300\ud55c \uc124\uba85",tags:["javascript","promise","async-await","asynchronous-programming","error-handling","callback","promise-chaining","es6"],keywords:["Promise","async/await","\ube44\ub3d9\uae30 \ud504\ub85c\uadf8\ub798\ubc0d","\ucf5c\ubc31 \ud568\uc218","\ud504\ub85c\ubbf8\uc2a4 \uccb4\uc774\ub2dd","\uc5d0\ub7ec \ud578\ub4e4\ub9c1","\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ube44\ub3d9\uae30","ES6"]},o=void 0,t={id:"Fronted \uc9c0\uc2dd/Promise\uc640 async-await",title:"Promise\uc640 async/await\uc758 \uc774\ud574",description:"Promise\uc758 \uac1c\ub150, async/await \ubb38\ubc95, \ube44\ub3d9\uae30 \ucc98\ub9ac \ubc29\uc2dd\uc758 \ubc1c\uc804 \uacfc\uc815\uc5d0 \ub300\ud55c \uc124\uba85",source:"@site/docs/01. Fronted \uc9c0\uc2dd/019909. Promise\uc640 async-await.md",sourceDirName:"01. Fronted \uc9c0\uc2dd",slug:"/Fronted \uc9c0\uc2dd/Promise\uc640 async-await",permalink:"/zora_story/en/docs/Fronted \uc9c0\uc2dd/Promise\uc640 async-await",draft:!1,unlisted:!1,tags:[{inline:!0,label:"javascript",permalink:"/zora_story/en/docs/tags/javascript"},{inline:!0,label:"promise",permalink:"/zora_story/en/docs/tags/promise"},{inline:!0,label:"async-await",permalink:"/zora_story/en/docs/tags/async-await"},{inline:!0,label:"asynchronous-programming",permalink:"/zora_story/en/docs/tags/asynchronous-programming"},{inline:!0,label:"error-handling",permalink:"/zora_story/en/docs/tags/error-handling"},{inline:!0,label:"callback",permalink:"/zora_story/en/docs/tags/callback"},{inline:!0,label:"promise-chaining",permalink:"/zora_story/en/docs/tags/promise-chaining"},{inline:!0,label:"es6",permalink:"/zora_story/en/docs/tags/es-6"}],version:"current",sidebarPosition:19909,frontMatter:{title:"Promise\uc640 async/await\uc758 \uc774\ud574",description:"Promise\uc758 \uac1c\ub150, async/await \ubb38\ubc95, \ube44\ub3d9\uae30 \ucc98\ub9ac \ubc29\uc2dd\uc758 \ubc1c\uc804 \uacfc\uc815\uc5d0 \ub300\ud55c \uc124\uba85",tags:["javascript","promise","async-await","asynchronous-programming","error-handling","callback","promise-chaining","es6"],keywords:["Promise","async/await","\ube44\ub3d9\uae30 \ud504\ub85c\uadf8\ub798\ubc0d","\ucf5c\ubc31 \ud568\uc218","\ud504\ub85c\ubbf8\uc2a4 \uccb4\uc774\ub2dd","\uc5d0\ub7ec \ud578\ub4e4\ub9c1","\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ube44\ub3d9\uae30","ES6"]},sidebar:"studySidebar",previous:{title:"CORS\uc640 preflight \uac1c\ub150",permalink:"/zora_story/en/docs/Fronted \uc9c0\uc2dd/CORS\uc640 preflight \uac1c\ub150"},next:{title:"JavaScript \ud638\uc774\uc2a4\ud305\uc758 \uc774\ud574",permalink:"/zora_story/en/docs/Fronted \uc9c0\uc2dd/JavaScript \ud638\uc774\uc2a4\ud305\uc758 \uc774\ud574"}},c={},l=[{value:"Promise\uc758 \uac1c\ub150\uc5d0 \ub300\ud574 \uc124\uba85\ud574\uc8fc\uc138\uc694",id:"promise\uc758-\uac1c\ub150\uc5d0-\ub300\ud574-\uc124\uba85\ud574\uc8fc\uc138\uc694",level:4},{value:"Promise \ub4f1\uc7a5 \uc774\uc804\uc5d0\ub294 \uc5b4\ub5a4 \ubc29\uc2dd\uc73c\ub85c \ube44\ub3d9\uae30 \ucc98\ub9ac\ub97c \ud588\ub294\uc9c0 \uc124\uba85",id:"promise-\ub4f1\uc7a5-\uc774\uc804\uc5d0\ub294-\uc5b4\ub5a4-\ubc29\uc2dd\uc73c\ub85c-\ube44\ub3d9\uae30-\ucc98\ub9ac\ub97c-\ud588\ub294\uc9c0-\uc124\uba85",level:4},{value:"async-await\uc5d0 \ub300\ud574 \uc124\uba85\ud574\uc8fc\uc138\uc694.",id:"async-await\uc5d0-\ub300\ud574-\uc124\uba85\ud574\uc8fc\uc138\uc694",level:4},{value:"async-await\ub97c \uc0ac\uc6a9\ud560 \ub54c \uc8fc\uc758\ud574\uc57c\ud560 \uc810",id:"async-await\ub97c-\uc0ac\uc6a9\ud560-\ub54c-\uc8fc\uc758\ud574\uc57c\ud560-\uc810",level:4}];function d(e){const a={blockquote:"blockquote",h4:"h4",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsx)(a.p,{children:"\uc791\uc131\uc77c : 2024.11.24"}),"\n"]}),"\n",(0,i.jsx)(a.h4,{id:"promise\uc758-\uac1c\ub150\uc5d0-\ub300\ud574-\uc124\uba85\ud574\uc8fc\uc138\uc694",children:"Promise\uc758 \uac1c\ub150\uc5d0 \ub300\ud574 \uc124\uba85\ud574\uc8fc\uc138\uc694"}),"\n",(0,i.jsx)(a.p,{children:"Promise\ub294 \ube44\ub3d9\uae30 \uc5f0\uc0b0\uc758 \uc0c1\ud0dc\ub97c \ub098\ud0c0\ub0b4\ub294 \uac1d\uccb4\uc785\ub2c8\ub2e4.\n\ube44\ub3d9\uae30 \ucc98\ub9ac\uac00 \uc9c4\ud589\uc911\uc774\uba74 pending, \uc131\uacf5\uc774\uba74 fulfilled, \uc2e4\ud328\uba74 rejected\ub77c\ub294 \uc0c1\ud0dc\uac12\uc744 \uac00\uc9d1\ub2c8\ub2e4.\nPromise\ub294 \ube44\ub3d9\uae30 \ud504\ub85c\uadf8\ub7a8\uc744 then\uacfc catch\uc758 \uccb4\uc774\ub2dd\uc744 \ud1b5\ud574, \ubcf4\ub2e4 \uac04\uacb0\ud558\uac8c \ud45c\ud604\ud560 \uc218 \uc788\ub3c4\ub85d ES6\uc5d0\uc11c \uc0c8\ub85c \ub3c4\uc785\ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(a.h4,{id:"promise-\ub4f1\uc7a5-\uc774\uc804\uc5d0\ub294-\uc5b4\ub5a4-\ubc29\uc2dd\uc73c\ub85c-\ube44\ub3d9\uae30-\ucc98\ub9ac\ub97c-\ud588\ub294\uc9c0-\uc124\uba85",children:"Promise \ub4f1\uc7a5 \uc774\uc804\uc5d0\ub294 \uc5b4\ub5a4 \ubc29\uc2dd\uc73c\ub85c \ube44\ub3d9\uae30 \ucc98\ub9ac\ub97c \ud588\ub294\uc9c0 \uc124\uba85"}),"\n",(0,i.jsx)(a.p,{children:"Promise \ub4f1\uc7a5 \uc774\uc804\uc5d0\ub294 \ube44\ub3d9\uae30 \uc791\uc5c5\uc744 \ucc98\ub9ac\ud558\ub294 \ud568\uc218\uc5d0 \uc131\uacf5 \ucf5c\ubc31\uacfc, \uc2e4\ud328 \ucf5c\ubc31\uc744 \uac01\uac01 \ub118\uaca8\uc11c \uc644\ub8cc \uc0c1\ud0dc\uc5d0 \ub530\ub978 \ucc98\ub9ac\ub97c \ud588\uc2b5\ub2c8\ub2e4.\n\uc774\ub7f0 \ubc29\uc2dd\uc774\ub2e4 \ubcf4\ub2c8, \ub450\uac1c \uc774\uc0c1\uc758 \ube44\ub3d9\uae30 \uc791\uc5c5\uc774 \uc21c\uc11c\ub97c \uac16\uace0 \uc2e4\ud589\ub418\uc5b4\uc57c \ud560 \ub54c, \ucf5c\ubc31 \ud568\uc218 \uc548\uc5d0 \ub610\ub2e4\ub978 \ucf5c\ubc31 \ud568\uc218\uac00 \uc810\uc810 \uc911\ucca9\ub418\ub294 callback hell \ud604\uc0c1\uc774 \ubc1c\uc0dd\ud558\uc5ec, \ucf54\ub4dc \uac00\ub3c5\uc131 \ubc0f \uc720\uc9c0\ubcf4\uc218\uc131 \uc800\ud558\uc758 \uc694\uc778\uc774 \ub418\uace4 \ud588\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(a.h4,{id:"async-await\uc5d0-\ub300\ud574-\uc124\uba85\ud574\uc8fc\uc138\uc694",children:"async-await\uc5d0 \ub300\ud574 \uc124\uba85\ud574\uc8fc\uc138\uc694."}),"\n",(0,i.jsx)(a.p,{children:"Promise\uc758 \uc644\ub8cc\ub97c \uae30\ub2e4\ub9ac\uae30 \uc704\ud55c \ubb38\ubc95\uc73c\ub85c, async \ud0a4\uc6cc\ub4dc\ub85c \uc815\uc758\ud55c \ud568\uc218 \ub0b4\uc5d0\uc11c \ud638\ucd9c\ub418\ub294 Promise  \uc55e\uc5d0 await \ud0a4\uc6cc\ub4dc\ub97c \uc4f0\uba74, \ud574\ub2f9 Promise\uac00 \uc644\ub8cc\ub420 \ub54c\uae4c\uc9c0 \ucf54\ub4dc\uc758 \uc2e4\ud589\uc744 \uc77c\uc2dc \uc911\ub2e8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc774\ub97c \ud1b5\ud574 \ube44\ub3d9\uae30 \ucf54\ub4dc\ub97c \ub9c8\uce58 \ub3d9\uae30 \ucf54\ub4dc\ucc98\ub7fc \uc27d\uac8c \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(a.h4,{id:"async-await\ub97c-\uc0ac\uc6a9\ud560-\ub54c-\uc8fc\uc758\ud574\uc57c\ud560-\uc810",children:"async-await\ub97c \uc0ac\uc6a9\ud560 \ub54c \uc8fc\uc758\ud574\uc57c\ud560 \uc810"}),"\n",(0,i.jsx)(a.p,{children:"await\uc758 \uc5d0\ub7ec \ud578\ub4e4\ub9c1\uc740 \ubc18\ub4dc\uc2dc try-catch \ube14\ub85d\uc5d0\uc11c \ud574\uc57c\ud569\ub2c8\ub2e4. \ub610\ud55c await\ub294 Promise\uac00 \uc644\ub8cc\ub420 \ub54c\uae4c\uc9c0 \ud568\uc218\uc758 \uc2e4\ud589\uc744 \uc911\ub2e8\ud558\uae30 \ub54c\ubb38\uc5d0, \uc2e4\ud589\ud750\ub984\uc744 \uc798 \uace0\ub824\ud558\uc5ec \uc801\uc7ac\uc801\uc18c\uc5d0 \uc368\uc57c\ud569\ub2c8\ub2e4.\n\uc608\ub97c \ub4e4\uc5b4, \uc5ec\ub7ec \ube44\ub3d9\uae30 \uc791\uc5c5\uc774 \uc21c\ucc28\uc801\uc73c\ub85c \uc9c4\ud589\ub420 \ud544\uc694\uac00 \uc5c6\ub294 \uacbd\uc6b0, await \ub300\uc2e0 Promise.all \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \ubc14\ub78c\uc9c1\ud569\ub2c8\ub2e4."})]})}function m(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>t});var i=n(96540);const r={},s=i.createContext(r);function o(e){const a=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:a},e.children)}}}]);