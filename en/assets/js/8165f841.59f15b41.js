"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[506],{2454:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>i});const a=JSON.parse('{"id":"Next.js/trouble-shooting/\ucef4\ud3ec\ub10c\ud2b8 Fetch \uc5d0\ub7ec (2)","title":"\ucef4\ud3ec\ub10c\ud2b8 Fetch \uc5d0\ub7ec (2)","description":"\uc791\uc131\uc77c: 2025.01.04","source":"@site/docs/09. Next.js/090100. trouble-shooting/090104. \ucef4\ud3ec\ub10c\ud2b8 Fetch \uc5d0\ub7ec (2).md","sourceDirName":"09. Next.js/090100. trouble-shooting","slug":"/next-fetch-error-2","permalink":"/zora_story/en/docs/next-fetch-error-2","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":90104,"frontMatter":{"slug":"/next-fetch-error-2"},"sidebar":"studySidebar","previous":{"title":"\ucef4\ud3ec\ub10c\ud2b8 Fetch \uc5d0\ub7ec (1)","permalink":"/zora_story/en/docs/next-fetch-error-1"},"next":{"title":"redirect \uad00\ub828 RuntimeError","permalink":"/zora_story/en/docs/Next.js/trouble-shooting/redirect \uad00\ub828 RuntimeError"}}');var c=e(74848),t=e(28453);const o={slug:"/next-fetch-error-2"},l=void 0,r={},i=[{value:"\ubc30\uacbd",id:"\ubc30\uacbd",level:2},{value:"1. \uae30\ubcf8 \uac1c\ub150",id:"1-\uae30\ubcf8-\uac1c\ub150",level:2},{value:"\uc11c\ubc84 \ucef4\ud3ec\ub10c\ud2b8\uc640 \ud074\ub77c\uc774\uc5b8\ud2b8 \ucef4\ud3ec\ub10c\ud2b8\uc758 \ucc28\uc774",id:"\uc11c\ubc84-\ucef4\ud3ec\ub10c\ud2b8\uc640-\ud074\ub77c\uc774\uc5b8\ud2b8-\ucef4\ud3ec\ub10c\ud2b8\uc758-\ucc28\uc774",level:3},{value:"fetch \uc694\uccad \ucc98\ub9ac\uc758 \ucc28\uc774",id:"fetch-\uc694\uccad-\ucc98\ub9ac\uc758-\ucc28\uc774",level:3},{value:"2. \uc2e4\uc81c \ud574\uacb0 \ubc29\uc548",id:"2-\uc2e4\uc81c-\ud574\uacb0-\ubc29\uc548",level:2},{value:"\ud658\uacbd \ubd84\ub9ac\ub97c \ud1b5\ud55c URL \ucc98\ub9ac",id:"\ud658\uacbd-\ubd84\ub9ac\ub97c-\ud1b5\ud55c-url-\ucc98\ub9ac",level:3},{value:"\ucfe0\ud0a4 \ucc98\ub9ac",id:"\ucfe0\ud0a4-\ucc98\ub9ac",level:3},{value:"JWT \ud1a0\ud070 \uc7ac\ubc1c\uae09 \ucc98\ub9ac",id:"jwt-\ud1a0\ud070-\uc7ac\ubc1c\uae09-\ucc98\ub9ac",level:3},{value:"3. \uc8fc\uc694 \ud3ec\uc778\ud2b8",id:"3-\uc8fc\uc694-\ud3ec\uc778\ud2b8",level:2},{value:"\ud658\uacbd\ubcc4 \ucc98\ub9ac\uac00 \ud544\uc694\ud55c \uc774\uc720",id:"\ud658\uacbd\ubcc4-\ucc98\ub9ac\uac00-\ud544\uc694\ud55c-\uc774\uc720",level:3},{value:"\ud575\uc2ec \uace0\ub824\uc0ac\ud56d",id:"\ud575\uc2ec-\uace0\ub824\uc0ac\ud56d",level:3},{value:"4. \uacb0\ub860",id:"4-\uacb0\ub860",level:2}];function p(n){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"\uc791\uc131\uc77c: 2025.01.04"}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"\ubc30\uacbd",children:"\ubc30\uacbd"}),"\n",(0,c.jsxs)(s.p,{children:["Next.js\uc5d0\uc11c \uc11c\ubc84 \ucef4\ud3ec\ub10c\ud2b8\uc640 \ud074\ub77c\uc774\uc5b8\ud2b8 \ucef4\ud3ec\ub10c\ud2b8\uc758 fetch \ub3d9\uc791 \ubc29\uc2dd\uc774 \ub2e4\ub974\ub2e4\ub294 \uac83\uc744 \ubc1c\uacac\ud588\uc2b5\ub2c8\ub2e4. \ucc98\uc74c\uc5d0\ub294 \ub2e8\uc21c\ud788 ",(0,c.jsx)(s.code,{children:"serverFetch"}),"\uc640 \uac19\uc740 \ubcc4\ub3c4\uc758 \ud568\uc218\ub97c \ub9cc\ub4e4\uc5b4 \ud574\uacb0\ud558\ub824 \ud588\uc73c\ub098, \uc774\ub294 \uac1c\ubc1c\uc790\uac00 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc720\ud615\uc5d0 \ub530\ub77c \ub2e4\ub978 \ud568\uc218\ub97c \uc0ac\uc6a9\ud574\uc57c \ud558\ub294 \ubd88\ud3b8\ud568\uc774 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."]}),"\n",(0,c.jsx)(s.p,{children:"\uc774\uc5d0 \uc11c\ubc84\uc640 \ud074\ub77c\uc774\uc5b8\ud2b8 \ud658\uacbd\uc744 \uc790\ub3d9\uc73c\ub85c \uac10\uc9c0\ud558\uace0, \uac01 \ud658\uacbd\uc5d0 \ub9de\ub294 \ucc98\ub9ac\ub97c \uc218\ud589\ud558\ub294 \ud1b5\ud569 fetch \uc720\ud2f8\ub9ac\ud2f0\ub97c \uac1c\ubc1c\ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"/zora_story/en/docs/next-fetch-error-1",children:"\uc774\uc804 \uae00 \ub2e4\uc2dc\ubcf4\uae30"})}),"\n",(0,c.jsx)(s.h2,{id:"1-\uae30\ubcf8-\uac1c\ub150",children:"1. \uae30\ubcf8 \uac1c\ub150"}),"\n",(0,c.jsx)(s.h3,{id:"\uc11c\ubc84-\ucef4\ud3ec\ub10c\ud2b8\uc640-\ud074\ub77c\uc774\uc5b8\ud2b8-\ucef4\ud3ec\ub10c\ud2b8\uc758-\ucc28\uc774",children:"\uc11c\ubc84 \ucef4\ud3ec\ub10c\ud2b8\uc640 \ud074\ub77c\uc774\uc5b8\ud2b8 \ucef4\ud3ec\ub10c\ud2b8\uc758 \ucc28\uc774"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.strong,{children:"\uc11c\ubc84 \ucef4\ud3ec\ub10c\ud2b8"}),": Node.js \ud658\uacbd\uc5d0\uc11c \uc2e4\ud589, rewrites \uc124\uc815 \ubbf8\uc801\uc6a9"]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.strong,{children:"\ud074\ub77c\uc774\uc5b8\ud2b8 \ucef4\ud3ec\ub10c\ud2b8"}),": \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc2e4\ud589, rewrites \uc124\uc815 \uc801\uc6a9"]}),"\n"]}),"\n",(0,c.jsx)(s.h3,{id:"fetch-\uc694\uccad-\ucc98\ub9ac\uc758-\ucc28\uc774",children:"fetch \uc694\uccad \ucc98\ub9ac\uc758 \ucc28\uc774"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.strong,{children:"\uc11c\ubc84 \ucef4\ud3ec\ub10c\ud2b8"}),": \uc804\uccb4 URL \ud544\uc694, \ucfe0\ud0a4/\ud5e4\ub354 \uc218\ub3d9 \ucc98\ub9ac \ud544\uc694"]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.strong,{children:"\ud074\ub77c\uc774\uc5b8\ud2b8 \ucef4\ud3ec\ub10c\ud2b8"}),": \uc0c1\ub300 \uacbd\ub85c \uc0ac\uc6a9 \uac00\ub2a5, \ube0c\ub77c\uc6b0\uc800\uac00 \uc790\ub3d9\uc73c\ub85c \ucfe0\ud0a4/\ud5e4\ub354 \ucc98\ub9ac"]}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"2-\uc2e4\uc81c-\ud574\uacb0-\ubc29\uc548",children:"2. \uc2e4\uc81c \ud574\uacb0 \ubc29\uc548"}),"\n",(0,c.jsx)(s.h3,{id:"\ud658\uacbd-\ubd84\ub9ac\ub97c-\ud1b5\ud55c-url-\ucc98\ub9ac",children:"\ud658\uacbd \ubd84\ub9ac\ub97c \ud1b5\ud55c URL \ucc98\ub9ac"}),"\n",(0,c.jsx)(s.pre,{className:"language-typescript",children:(0,c.jsxs)(s.code,{className:"language-typescript",children:[(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,c.jsx)(s.span,{className:"token function-variable function",children:"getURL"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,c.jsx)(s.span,{className:"token comment",children:"// \ud504\ub85c\ub355\uc158 + \uc11c\ubc84\uc0ac\uc774\ub4dc"}),"\n  ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"process",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"env"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token constant",children:"NODE_ENV"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"==="})," ",(0,c.jsx)(s.span,{className:"token string",children:"'production'"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"&&"})," isServer",(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,c.jsx)(s.span,{className:"token string",children:"'http://localhost:8080'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n  ",(0,c.jsx)(s.span,{className:"token comment",children:"// \uac1c\ubc1c\ud658\uacbd + \ud074\ub77c\uc774\uc5b8\ud2b8\uc0ac\uc774\ub4dc"}),"\n  ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"process",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"env"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token constant",children:"NODE_ENV"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"==="})," ",(0,c.jsx)(s.span,{className:"token string",children:"'development'"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"&&"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"!"}),"isServer",(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,c.jsx)(s.span,{className:"token string",children:"''"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n  ",(0,c.jsx)(s.span,{className:"token comment",children:"// \uae30\ud0c0 \ud658\uacbd"}),"\n  ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,c.jsx)(s.span,{className:"token constant",children:"API_URL"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,c.jsx)(s.h3,{id:"\ucfe0\ud0a4-\ucc98\ub9ac",children:"\ucfe0\ud0a4 \ucc98\ub9ac"}),"\n",(0,c.jsx)(s.pre,{className:"language-typescript",children:(0,c.jsxs)(s.code,{className:"language-typescript",children:[(0,c.jsx)(s.span,{className:"token keyword module",children:"export"})," ",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,c.jsx)(s.span,{className:"token function-variable function",children:(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"FetchWithCookie"})})," ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token keyword",children:"async"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"\n  input",(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"RequestInfo"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"|"})," ",(0,c.jsx)(s.span,{className:"token constant",children:"URL"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n  init",(0,c.jsx)(s.span,{className:"token operator",children:"?"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"RequestInit"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,c.jsx)(s.span,{className:"token comment",children:"// \ud504\ub85c\ub355\uc158 \uc11c\ubc84\uc0ac\uc774\ub4dc\uc5d0\uc11c\ub9cc \uc218\ub3d9\uc73c\ub85c \ucfe0\ud0a4 \ucc98\ub9ac"}),"\n  ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"process",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"env"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token constant",children:"NODE_ENV"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"==="})," ",(0,c.jsx)(s.span,{className:"token string",children:"'production'"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"&&"})," isServer",(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," cookies ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"await"})," ",(0,c.jsx)(s.span,{className:"token function",children:"getServerCookies"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n    ",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," cookieString ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token function",children:"cookies"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"toString"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n    \n    ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,c.jsx)(s.span,{className:"token function",children:(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"Fetch"})}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"input",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n      ",(0,c.jsx)(s.span,{className:"token spread operator",children:"..."}),"init",(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n      headers",(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n        ",(0,c.jsx)(s.span,{className:"token spread operator",children:"..."}),"init",(0,c.jsx)(s.span,{className:"token operator",children:"?."}),"headers",(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n        ",(0,c.jsx)(s.span,{className:"token string-property property",children:"'Content-Type'"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token string",children:"'application/json'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n        ",(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"Cookie"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," cookieString",(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n      ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n      credentials",(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token string",children:"'include'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n    ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n\n  ",(0,c.jsx)(s.span,{className:"token comment",children:"// \uadf8 \uc678 \ud658\uacbd\uc5d0\uc11c\ub294 \uae30\ubcf8 \ucc98\ub9ac"}),"\n  ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,c.jsx)(s.span,{className:"token function",children:(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"Fetch"})}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"input",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token spread operator",children:"..."}),"init",(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n    credentials",(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token string",children:"'include'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,c.jsx)(s.h3,{id:"jwt-\ud1a0\ud070-\uc7ac\ubc1c\uae09-\ucc98\ub9ac",children:"JWT \ud1a0\ud070 \uc7ac\ubc1c\uae09 \ucc98\ub9ac"}),"\n",(0,c.jsx)(s.pre,{className:"language-typescript",children:(0,c.jsxs)(s.code,{className:"language-typescript",children:[(0,c.jsx)(s.span,{className:"token keyword module",children:"export"})," ",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,c.jsx)(s.span,{className:"token function-variable function",children:(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"FetchWithJWT"})})," ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token keyword",children:"async"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"\n  input",(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"RequestInfo"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"|"})," ",(0,c.jsx)(s.span,{className:"token constant",children:"URL"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n  init",(0,c.jsx)(s.span,{className:"token operator",children:"?"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"RequestInit"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," res ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"await"})," ",(0,c.jsx)(s.span,{className:"token function",children:(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"FetchWithCookie"})}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"input",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," init",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n  ",(0,c.jsx)(s.span,{className:"token comment",children:"// 401 \uc5d0\ub7ec \uc2dc \ud1a0\ud070 \uc7ac\ubc1c\uae09"}),"\n  ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"res",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"status"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"==="})," ",(0,c.jsx)(s.span,{className:"token number",children:"401"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," tokensRequest ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"await"})," ",(0,c.jsx)(s.span,{className:"token function",children:"fetch"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'/api/reissue'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," init",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n    ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token operator",children:"!"}),"tokensRequest",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"ok"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," tokensRequest",(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n    ",(0,c.jsx)(s.span,{className:"token comment",children:"// \ud504\ub85c\ub355\uc158 \uc11c\ubc84\uc0ac\uc774\ub4dc\uc5d0\uc11c \uc0c8 \ucfe0\ud0a4 \uc124\uc815"}),"\n    ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"process",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"env"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token constant",children:"NODE_ENV"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"==="})," ",(0,c.jsx)(s.span,{className:"token string",children:"'production'"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"&&"})," isServer",(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n      ",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," cookies ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"await"})," ",(0,c.jsx)(s.span,{className:"token function",children:"getServerCookies"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n      ",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," newCookies ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," tokensRequest",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"headers"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"getSetCookie"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n      newCookies",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"forEach"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"cookie",(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n        ",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),"name",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," value",(0,c.jsx)(s.span,{className:"token punctuation",children:"]"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," cookie",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"split"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'='"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n        ",(0,c.jsx)(s.span,{className:"token function",children:"cookies"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"set"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"name",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," value",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n      ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n    ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n\n    ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,c.jsx)(s.span,{className:"token function",children:(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"FetchWithCookie"})}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"input",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," init",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n  \n  ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," res",(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,c.jsx)(s.h2,{id:"3-\uc8fc\uc694-\ud3ec\uc778\ud2b8",children:"3. \uc8fc\uc694 \ud3ec\uc778\ud2b8"}),"\n",(0,c.jsx)(s.h3,{id:"\ud658\uacbd\ubcc4-\ucc98\ub9ac\uac00-\ud544\uc694\ud55c-\uc774\uc720",children:"\ud658\uacbd\ubcc4 \ucc98\ub9ac\uac00 \ud544\uc694\ud55c \uc774\uc720"}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"\ud504\ub85c\ub355\uc158 \uc11c\ubc84\uc0ac\uc774\ub4dc"})}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\uc9c1\uc811 API \uc11c\ubc84 \ud638\ucd9c \ud544\uc694"}),"\n",(0,c.jsx)(s.li,{children:"\ucfe0\ud0a4/\ud5e4\ub354 \uc218\ub3d9 \ucc98\ub9ac \ud544\uc694"}),"\n",(0,c.jsx)(s.li,{children:"rewrites \uc124\uc815 \uc801\uc6a9 \uc548\ub428"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"\uac1c\ubc1c\ud658\uacbd \ud074\ub77c\uc774\uc5b8\ud2b8\uc0ac\uc774\ub4dc"})}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"rewrites \uc124\uc815 \ud65c\uc6a9 \uac00\ub2a5"}),"\n",(0,c.jsx)(s.li,{children:"\ube0c\ub77c\uc6b0\uc800\uac00 \uc790\ub3d9\uc73c\ub85c \ucfe0\ud0a4/\ud5e4\ub354 \ucc98\ub9ac"}),"\n",(0,c.jsx)(s.li,{children:"\uc0c1\ub300 \uacbd\ub85c \uc0ac\uc6a9 \uac00\ub2a5"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(s.h3,{id:"\ud575\uc2ec-\uace0\ub824\uc0ac\ud56d",children:"\ud575\uc2ec \uace0\ub824\uc0ac\ud56d"}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"URL \ucc98\ub9ac"})}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\ud658\uacbd\uc5d0 \ub530\ub978 \uc801\uc808\ud55c URL \uc120\ud0dd"}),"\n",(0,c.jsx)(s.li,{children:"rewrites \uc124\uc815 \ud65c\uc6a9 \uc5ec\ubd80 \uacb0\uc815"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"\uc778\uc99d \ucc98\ub9ac"})}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\ucfe0\ud0a4 \uc790\ub3d9/\uc218\ub3d9 \ucc98\ub9ac"}),"\n",(0,c.jsx)(s.li,{children:"JWT \ud1a0\ud070 \uc7ac\ubc1c\uae09 \ub85c\uc9c1"}),"\n",(0,c.jsx)(s.li,{children:"\ud658\uacbd\ubcc4 \ucfe0\ud0a4 \uc124\uc815 \ubc29\uc2dd"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"\uc5d0\ub7ec \ucc98\ub9ac"})}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"401 \uc5d0\ub7ec \uc2dc \ud1a0\ud070 \uc7ac\ubc1c\uae09"}),"\n",(0,c.jsx)(s.li,{children:"\ucfe0\ud0a4 \ud68d\ub4dd \uc2e4\ud328 \uc2dc \ud3f4\ubc31 \ucc98\ub9ac"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"4-\uacb0\ub860",children:"4. \uacb0\ub860"}),"\n",(0,c.jsx)(s.p,{children:"Next.js\uc5d0\uc11c fetch\ub97c \uc62c\ubc14\ub974\uac8c \ucc98\ub9ac\ud558\uae30 \uc704\ud574\uc11c\ub294:"}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsx)(s.li,{children:"\uc11c\ubc84/\ud074\ub77c\uc774\uc5b8\ud2b8 \ud658\uacbd\uc758 \ucc28\uc774 \uc774\ud574"}),"\n",(0,c.jsx)(s.li,{children:"\ud658\uacbd\ubcc4 \uc801\uc808\ud55c URL \ucc98\ub9ac \ubc29\uc2dd \uc120\ud0dd"}),"\n",(0,c.jsx)(s.li,{children:"\uc778\uc99d\uacfc \ucfe0\ud0a4 \ucc98\ub9ac\uc758 \uc790\ub3d9\ud654"}),"\n",(0,c.jsx)(s.li,{children:"\uc5d0\ub7ec \uc0c1\ud669\uc5d0 \ub300\ud55c \uc801\uc808\ud55c \ub300\uc751"}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"\uc774\ub7ec\ud55c \uc694\uc18c\ub4e4\uc744 \ubaa8\ub450 \uace0\ub824\ud55c fetch \uc720\ud2f8\ub9ac\ud2f0\ub97c \ub9cc\ub4e4\uba74, \uc11c\ubc84\uc640 \ud074\ub77c\uc774\uc5b8\ud2b8 \ubaa8\ub450\uc5d0\uc11c \uc548\uc815\uc801\uc73c\ub85c \uc791\ub3d9\ud558\ub294 API \ud638\ucd9c\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."})]})}function d(n={}){const{wrapper:s}={...(0,t.R)(),...n.components};return s?(0,c.jsx)(s,{...n,children:(0,c.jsx)(p,{...n})}):p(n)}},28453:(n,s,e)=>{e.d(s,{R:()=>o,x:()=>l});var a=e(96540);const c={},t=a.createContext(c);function o(n){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function l(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:o(n.components),a.createElement(t.Provider,{value:s},n.children)}}}]);