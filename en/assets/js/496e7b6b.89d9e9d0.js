"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[40914],{78697:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>r});const a=JSON.parse('{"id":"Next.js/trouble-shooting/CORS \ubb38\uc81c \ud574\uacb0\uacfc URL \uad00\ub9ac","title":"CORS \ubb38\uc81c \ud574\uacb0\uacfc URL \uad00\ub9ac","description":"\uc791\uc131\uc77c : 2024.12.22","source":"@site/docs/09. Next.js/090100. trouble-shooting/090103. CORS \ubb38\uc81c \ud574\uacb0\uacfc URL \uad00\ub9ac.md","sourceDirName":"09. Next.js/090100. trouble-shooting","slug":"/Next.js/trouble-shooting/CORS \ubb38\uc81c \ud574\uacb0\uacfc URL \uad00\ub9ac","permalink":"/zora_story/en/docs/Next.js/trouble-shooting/CORS \ubb38\uc81c \ud574\uacb0\uacfc URL \uad00\ub9ac","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":90103,"frontMatter":{},"sidebar":"studySidebar","previous":{"title":"Next.js Hydration \uc5d0\ub7ec","permalink":"/zora_story/en/docs/Next.js/trouble-shooting/Next.js Hydration \uc5d0\ub7ec"},"next":{"title":"\ucef4\ud3ec\ub10c\ud2b8 Fetch \uc5d0\ub7ec (1)","permalink":"/zora_story/en/docs/next-fetch-error-1"}}');var c=e(74848),t=e(28453);const l={},i=void 0,o={},r=[{value:"\ubaa9\ucc28",id:"\ubaa9\ucc28",level:2},{value:"\ud604\uc7ac \uc0c1\ud669 \ubd84\uc11d",id:"\ud604\uc7ac-\uc0c1\ud669-\ubd84\uc11d",level:2},{value:"Next.js Rewrite \uc124\uc815",id:"nextjs-rewrite-\uc124\uc815",level:3},{value:"\ud604\uc7ac Fetch \uad6c\ud604",id:"\ud604\uc7ac-fetch-\uad6c\ud604",level:3},{value:"API \ud638\ucd9c \uccb4\uc778",id:"api-\ud638\ucd9c-\uccb4\uc778",level:3},{value:"\ubb38\uc81c\uc810 \ud30c\uc545",id:"\ubb38\uc81c\uc810-\ud30c\uc545",level:2},{value:"1. URL \uc911\ubcf5 \ubb38\uc81c",id:"1-url-\uc911\ubcf5-\ubb38\uc81c",level:3},{value:"2. Rewrite \uae30\ub2a5 \ubb34\ub825\ud654",id:"2-rewrite-\uae30\ub2a5-\ubb34\ub825\ud654",level:3},{value:"\ud574\uacb0 \ubc29\uc548",id:"\ud574\uacb0-\ubc29\uc548",level:2},{value:"1. Fetch \ud568\uc218 \ucd5c\uc801\ud654",id:"1-fetch-\ud568\uc218-\ucd5c\uc801\ud654",level:3},{value:"\ubc29\ubc95 1: getURL \uc81c\uac70",id:"\ubc29\ubc95-1-geturl-\uc81c\uac70",level:4},{value:"\ubc29\ubc95 2: URL \ud0c0\uc785 \uccb4\ud06c \ucd94\uac00",id:"\ubc29\ubc95-2-url-\ud0c0\uc785-\uccb4\ud06c-\ucd94\uac00",level:4},{value:"2. FetchWithCookie \uad6c\ud604 \uc720\uc9c0",id:"2-fetchwithcookie-\uad6c\ud604-\uc720\uc9c0",level:3},{value:"3. API \ud568\uc218 \ucd5c\uc801\ud654",id:"3-api-\ud568\uc218-\ucd5c\uc801\ud654",level:3},{value:"\ub3d9\uc791 \ud504\ub85c\uc138\uc2a4",id:"\ub3d9\uc791-\ud504\ub85c\uc138\uc2a4",level:2},{value:"\uad6c\ud604\uc758 \uc7a5\uc810",id:"\uad6c\ud604\uc758-\uc7a5\uc810",level:2},{value:"\uc8fc\uc758\uc0ac\ud56d",id:"\uc8fc\uc758\uc0ac\ud56d",level:2},{value:"1. \uacbd\ub85c \uc0ac\uc6a9 \uaddc\uce59",id:"1-\uacbd\ub85c-\uc0ac\uc6a9-\uaddc\uce59",level:3},{value:"2. \ud658\uacbd \uc124\uc815",id:"2-\ud658\uacbd-\uc124\uc815",level:3},{value:"3. \ud14c\uc2a4\ud2b8 \uace0\ub824\uc0ac\ud56d",id:"3-\ud14c\uc2a4\ud2b8-\uace0\ub824\uc0ac\ud56d",level:3},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}];function p(n){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...(0,t.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"\uc791\uc131\uc77c : 2024.12.22"}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"\ubaa9\ucc28",children:"\ubaa9\ucc28"}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"#%ED%98%84%EC%9E%AC-%EC%83%81%ED%99%A9-%EB%B6%84%EC%84%9D",children:"\ud604\uc7ac \uc0c1\ud669 \ubd84\uc11d"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"#%EB%AC%B8%EC%A0%9C%EC%A0%90-%ED%8C%8C%EC%95%85",children:"\ubb38\uc81c\uc810 \ud30c\uc545"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"#%ED%95%B4%EA%B2%B0-%EB%B0%A9%EC%95%88",children:"\ud574\uacb0 \ubc29\uc548"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"#%EB%8F%99%EC%9E%91-%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4",children:"\ub3d9\uc791 \ud504\ub85c\uc138\uc2a4"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"#%EA%B5%AC%ED%98%84%EC%9D%98-%EC%9E%A5%EC%A0%90",children:"\uad6c\ud604\uc758 \uc7a5\uc810"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"#%EC%A3%BC%EC%9D%98%EC%82%AC%ED%95%AD",children:"\uc8fc\uc758\uc0ac\ud56d"})}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"\ud604\uc7ac-\uc0c1\ud669-\ubd84\uc11d",children:"\ud604\uc7ac \uc0c1\ud669 \ubd84\uc11d"}),"\n",(0,c.jsx)(s.h3,{id:"nextjs-rewrite-\uc124\uc815",children:"Next.js Rewrite \uc124\uc815"}),"\n",(0,c.jsx)(s.p,{children:"\ud604\uc7ac next.config.js\uc5d0\uc11c\ub294 \ubaa8\ub4e0 API \uc694\uccad\uc744 \ud2b9\uc815 \uc11c\ubc84\ub85c \ub9ac\ub2e4\uc774\ub809\ud2b8\ud558\ub3c4\ub85d \uc124\uc815\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4:"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token comment",children:"// next.config.js"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,c.jsx)(s.span,{className:"token keyword",children:"async"})," ",(0,c.jsx)(s.span,{className:"token function",children:"rewrites"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),"\n      ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n        ",(0,c.jsx)(s.span,{className:"token literal-property property",children:"source"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token string",children:"'/api/:path*'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n        ",(0,c.jsx)(s.span,{className:"token literal-property property",children:"destination"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token string",children:"'http://15.164.142.195/api/:path*'"}),"\n      ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n    ",(0,c.jsx)(s.span,{className:"token punctuation",children:"]"}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,c.jsx)(s.h3,{id:"\ud604\uc7ac-fetch-\uad6c\ud604",children:"\ud604\uc7ac Fetch \uad6c\ud604"}),"\n",(0,c.jsx)(s.p,{children:"\uae30\uc874\uc758 Fetch \ud568\uc218\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \uad6c\ud604\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4:"}),"\n",(0,c.jsx)(s.pre,{className:"language-typescript",children:(0,c.jsxs)(s.code,{className:"language-typescript",children:[(0,c.jsx)(s.span,{className:"token keyword module",children:"export"})," ",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,c.jsx)(s.span,{className:"token function-variable function",children:(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"Fetch"})})," ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token keyword",children:"async"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"input",(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"RequestInfo"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"|"})," ",(0,c.jsx)(s.span,{className:"token constant",children:"URL"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," init",(0,c.jsx)(s.span,{className:"token operator",children:"?"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"RequestInit"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,c.jsx)(s.span,{className:"token function",children:"fetch"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsxs)(s.span,{className:"token template-string",children:[(0,c.jsx)(s.span,{className:"token template-punctuation string",children:"`"}),(0,c.jsxs)(s.span,{className:"token interpolation",children:[(0,c.jsx)(s.span,{className:"token interpolation-punctuation punctuation",children:"${"}),(0,c.jsx)(s.span,{className:"token function",children:"getURL"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token interpolation-punctuation punctuation",children:"}"})]}),(0,c.jsx)(s.span,{className:"token string",children:"/"}),(0,c.jsxs)(s.span,{className:"token interpolation",children:[(0,c.jsx)(s.span,{className:"token interpolation-punctuation punctuation",children:"${"}),"input",(0,c.jsx)(s.span,{className:"token interpolation-punctuation punctuation",children:"}"})]}),(0,c.jsx)(s.span,{className:"token template-punctuation string",children:"`"})]}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," init",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,c.jsx)(s.h3,{id:"api-\ud638\ucd9c-\uccb4\uc778",children:"API \ud638\ucd9c \uccb4\uc778"}),"\n",(0,c.jsx)(s.p,{children:"\ud604\uc7ac\uc758 \ud638\ucd9c \uccb4\uc778\uc740 \ub2e4\uc74c\uacfc \uac19\uc740 \uacfc\uc815\uc744 \uac70\uce69\ub2c8\ub2e4:"}),"\n",(0,c.jsx)(s.pre,{className:"language-typescript",children:(0,c.jsxs)(s.code,{className:"language-typescript",children:[(0,c.jsx)(s.span,{className:"token function",children:"handleLogout"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n\u2192 ",(0,c.jsx)(s.span,{className:"token function",children:(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"FetchWithCookie"})}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'api/auth/logout'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n\u2192 ",(0,c.jsx)(s.span,{className:"token function",children:(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"Fetch"})}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'api/auth/logout'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n\u2192 ",(0,c.jsx)(s.span,{className:"token function",children:"fetch"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'http://15.164.142.195/api/api/auth/logout'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"  ",(0,c.jsx)(s.span,{className:"token comment",children:"// URL \uc911\ubcf5 \ubc1c\uc0dd!"}),"\n"]})}),"\n",(0,c.jsx)(s.h2,{id:"\ubb38\uc81c\uc810-\ud30c\uc545",children:"\ubb38\uc81c\uc810 \ud30c\uc545"}),"\n",(0,c.jsx)(s.h3,{id:"1-url-\uc911\ubcf5-\ubb38\uc81c",children:"1. URL \uc911\ubcf5 \ubb38\uc81c"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"input\uc73c\ub85c 'api/auth/logout' \uc804\ub2ec"}),"\n",(0,c.jsxs)(s.li,{children:["getURL()\uc774 '",(0,c.jsx)(s.a,{href:"http://15.164.142.195/api",children:"http://15.164.142.195/api"}),"' \ubc18\ud658"]}),"\n",(0,c.jsxs)(s.li,{children:["\ucd5c\uc885 URL: '",(0,c.jsx)(s.a,{href:"http://15.164.142.195/api/api/auth/logout",children:"http://15.164.142.195/api/api/auth/logout"}),"'"]}),"\n",(0,c.jsx)(s.li,{children:"'api'\uac00 \uacbd\ub85c\uc5d0 \uc911\ubcf5\uc73c\ub85c \ud3ec\ud568\ub418\ub294 \ubb38\uc81c \ubc1c\uc0dd"}),"\n"]}),"\n",(0,c.jsx)(s.h3,{id:"2-rewrite-\uae30\ub2a5-\ubb34\ub825\ud654",children:"2. Rewrite \uae30\ub2a5 \ubb34\ub825\ud654"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"Next.js\uc758 rewrite\ub294 \uc0c1\ub300 \uacbd\ub85c \uc694\uccad\uc5d0\ub9cc \ub3d9\uc791"}),"\n",(0,c.jsx)(s.li,{children:"\uc804\uccb4 URL \uc0ac\uc6a9 \uc2dc rewrite \ub3d9\uc791\ud558\uc9c0 \uc54a\uc74c"}),"\n",(0,c.jsx)(s.li,{children:"\uacb0\uacfc\uc801\uc73c\ub85c CORS \uc5d0\ub7ec \ubc1c\uc0dd"}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"\ud574\uacb0-\ubc29\uc548",children:"\ud574\uacb0 \ubc29\uc548"}),"\n",(0,c.jsx)(s.h3,{id:"1-fetch-\ud568\uc218-\ucd5c\uc801\ud654",children:"1. Fetch \ud568\uc218 \ucd5c\uc801\ud654"}),"\n",(0,c.jsx)(s.p,{children:"\ub450 \uac00\uc9c0 \uc811\uadfc \ubc29\uc2dd\uc744 \uace0\ub824\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"}),"\n",(0,c.jsx)(s.h4,{id:"\ubc29\ubc95-1-geturl-\uc81c\uac70",children:"\ubc29\ubc95 1: getURL \uc81c\uac70"}),"\n",(0,c.jsx)(s.pre,{className:"language-typescript",children:(0,c.jsxs)(s.code,{className:"language-typescript",children:[(0,c.jsx)(s.span,{className:"token keyword module",children:"export"})," ",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,c.jsx)(s.span,{className:"token function-variable function",children:(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"Fetch"})})," ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token keyword",children:"async"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"input",(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"RequestInfo"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"|"})," ",(0,c.jsx)(s.span,{className:"token constant",children:"URL"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," init",(0,c.jsx)(s.span,{className:"token operator",children:"?"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"RequestInit"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,c.jsx)(s.span,{className:"token function",children:"fetch"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"input",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," init",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,c.jsx)(s.h4,{id:"\ubc29\ubc95-2-url-\ud0c0\uc785-\uccb4\ud06c-\ucd94\uac00",children:"\ubc29\ubc95 2: URL \ud0c0\uc785 \uccb4\ud06c \ucd94\uac00"}),"\n",(0,c.jsx)(s.pre,{className:"language-typescript",children:(0,c.jsxs)(s.code,{className:"language-typescript",children:[(0,c.jsx)(s.span,{className:"token keyword module",children:"export"})," ",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,c.jsx)(s.span,{className:"token function-variable function",children:(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"Fetch"})})," ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token keyword",children:"async"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"input",(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"RequestInfo"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"|"})," ",(0,c.jsx)(s.span,{className:"token constant",children:"URL"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," init",(0,c.jsx)(s.span,{className:"token operator",children:"?"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"RequestInit"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," url ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," input",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"toString"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"startsWith"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:'"http"'}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n    ",(0,c.jsx)(s.span,{className:"token operator",children:"?"})," input\n    ",(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsxs)(s.span,{className:"token template-string",children:[(0,c.jsx)(s.span,{className:"token template-punctuation string",children:"`"}),(0,c.jsx)(s.span,{className:"token string",children:"/"}),(0,c.jsxs)(s.span,{className:"token interpolation",children:[(0,c.jsx)(s.span,{className:"token interpolation-punctuation punctuation",children:"${"}),"input",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"toString"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"replace"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsxs)(s.span,{className:"token regex",children:[(0,c.jsx)(s.span,{className:"token regex-delimiter",children:"/"}),(0,c.jsx)(s.span,{className:"token regex-source language-regex",children:"^\\/"}),(0,c.jsx)(s.span,{className:"token regex-delimiter",children:"/"})]}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token string",children:'""'}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token interpolation-punctuation punctuation",children:"}"})]}),(0,c.jsx)(s.span,{className:"token template-punctuation string",children:"`"})]}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"})," ",(0,c.jsx)(s.span,{className:"token comment",children:"// \uc55e\ucabd \uc2ac\ub798\uc2dc \uc815\uaddc\ud654"}),"\n  ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,c.jsx)(s.span,{className:"token function",children:"fetch"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"url",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," init",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,c.jsx)(s.h3,{id:"2-fetchwithcookie-\uad6c\ud604-\uc720\uc9c0",children:"2. FetchWithCookie \uad6c\ud604 \uc720\uc9c0"}),"\n",(0,c.jsx)(s.p,{children:"\uc11c\ubc84 \uc0ac\uc774\ub4dc \ub80c\ub354\ub9c1\uacfc \ucfe0\ud0a4 \ucc98\ub9ac\ub97c \uc704\ud55c \uad6c\ud604:"}),"\n",(0,c.jsx)(s.pre,{className:"language-typescript",children:(0,c.jsxs)(s.code,{className:"language-typescript",children:[(0,c.jsx)(s.span,{className:"token keyword module",children:"export"})," ",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,c.jsx)(s.span,{className:"token function-variable function",children:(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"FetchWithCookie"})})," ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token keyword",children:"async"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"\n  input",(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"RequestInfo"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"|"})," ",(0,c.jsx)(s.span,{className:"token constant",children:"URL"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n  init",(0,c.jsx)(s.span,{className:"token operator",children:"?"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"RequestInit"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"process",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"env"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token constant",children:"NODE_ENV"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"==="})," ",(0,c.jsx)(s.span,{className:"token string",children:'"production"'})," ",(0,c.jsx)(s.span,{className:"token operator",children:"&&"})," isServer",(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," cookies ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"await"})," ",(0,c.jsx)(s.span,{className:"token function",children:"getServerCookies"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n    ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,c.jsx)(s.span,{className:"token function",children:(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"Fetch"})}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"input",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n      ",(0,c.jsx)(s.span,{className:"token spread operator",children:"..."}),"init",(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n      headers",(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n        ",(0,c.jsx)(s.span,{className:"token spread operator",children:"..."}),"init",(0,c.jsx)(s.span,{className:"token operator",children:"?."}),"headers",(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n        ",(0,c.jsx)(s.span,{className:"token string-property property",children:'"Content-Type"'}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token string",children:'"application/json"'}),(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n        ",(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"Cookie"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token function",children:"cookies"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"toString"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n      ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n      credentials",(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token string",children:'"include"'}),(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n    ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n  ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,c.jsx)(s.span,{className:"token function",children:(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"Fetch"})}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"input",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token spread operator",children:"..."}),"init",(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n    credentials",(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token string",children:'"include"'}),(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,c.jsx)(s.h3,{id:"3-api-\ud568\uc218-\ucd5c\uc801\ud654",children:"3. API \ud568\uc218 \ucd5c\uc801\ud654"}),"\n",(0,c.jsx)(s.p,{children:"\uc0c1\ub300 \uacbd\ub85c\ub97c \uc0ac\uc6a9\ud558\ub294 API \ud568\uc218 \uad6c\ud604:"}),"\n",(0,c.jsx)(s.pre,{className:"language-typescript",children:(0,c.jsxs)(s.code,{className:"language-typescript",children:[(0,c.jsx)(s.span,{className:"token keyword module",children:"export"})," ",(0,c.jsx)(s.span,{className:"token keyword",children:"async"})," ",(0,c.jsx)(s.span,{className:"token keyword",children:"function"})," ",(0,c.jsx)(s.span,{className:"token function",children:"handleLogout"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token known-class-name class-name",children:"Promise"}),(0,c.jsx)(s.span,{className:"token operator",children:"<"}),(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"APIResult"}),(0,c.jsx)(s.span,{className:"token operator",children:"<"}),(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"SignupResponse"}),(0,c.jsx)(s.span,{className:"token operator",children:">>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," response ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"await"})," ",(0,c.jsx)(s.span,{className:"token function",children:(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"FetchWithCookie"})}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:'"api/auth/logout"'}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"})," ",(0,c.jsx)(s.span,{className:"token comment",children:"// \uc0c1\ub300 \uacbd\ub85c \uc0ac\uc6a9"}),"\n  ",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," result ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"await"})," response",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"json"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n  ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"response",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"status"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"<"})," ",(0,c.jsx)(s.span,{className:"token number",children:"400"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"})," code",(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token number",children:"200"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," message",(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token string",children:'""'})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n  ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    code",(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token number",children:"400"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n    message",(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token constant",children:"SERVER_RESPONSE"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),"result",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"code"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"]"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"||"})," ",(0,c.jsx)(s.span,{className:"token string",children:'"\uc11c\ubc84 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4"'}),(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,c.jsx)(s.h2,{id:"\ub3d9\uc791-\ud504\ub85c\uc138\uc2a4",children:"\ub3d9\uc791 \ud504\ub85c\uc138\uc2a4"}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"API \ud568\uc218 \ud638\ucd9c"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"handleLogout()"}),"\uc774 ",(0,c.jsx)(s.code,{children:"api/auth/logout"})," \uacbd\ub85c\ub85c \uc694\uccad"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"Rewrite \ucc98\ub9ac"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"Next.js rewrite\uac00 \uc694\uccad\uc744 \uac10\uc9c0"}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"http://15.164.142.195/api/auth/logout"}),"\ub85c \ubcc0\ud658"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"\uc11c\ubc84 \ud1b5\uc2e0"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\ubcc0\ud658\ub41c URL\ub85c \uc11c\ubc84\uc5d0 \uc694\uccad"}),"\n",(0,c.jsx)(s.li,{children:"CORS \uc5d0\ub7ec \uc5c6\uc774 \uc751\ub2f5 \uc218\uc2e0"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"\uad6c\ud604\uc758-\uc7a5\uc810",children:"\uad6c\ud604\uc758 \uc7a5\uc810"}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"URL \uad00\ub9ac \ub2e8\uc21c\ud654"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\uc911\ubcf5 \uc81c\uac70"}),"\n",(0,c.jsx)(s.li,{children:"\uc77c\uad00\ub41c \uacbd\ub85c \uad6c\uc870 \uc720\uc9c0"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"Next.js \uae30\ub2a5 \ud65c\uc6a9"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"Rewrite \uae30\ub2a5 \uc644\ubcbd \ud65c\uc6a9"}),"\n",(0,c.jsx)(s.li,{children:"\ub0b4\uc7a5 \uae30\ub2a5\uc73c\ub85c CORS \ud574\uacb0"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"\ud658\uacbd \ub3c5\ub9bd\uc131"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\uac1c\ubc1c/\uc6b4\uc601 \ud658\uacbd\uc5d0\uc11c \ub3d9\uc77c\ud558\uac8c \ub3d9\uc791"}),"\n",(0,c.jsx)(s.li,{children:"\ud658\uacbd\ubcc4 \ubd84\uae30 \ucc98\ub9ac \uc6a9\uc774"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"\uc720\uc9c0\ubcf4\uc218\uc131"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"URL \uad6c\uc131\uc758 \uc911\ubcf5 \uc81c\uac70"}),"\n",(0,c.jsx)(s.li,{children:"\ucf54\ub4dc \uad6c\uc870 \ub2e8\uc21c\ud654"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"\uc8fc\uc758\uc0ac\ud56d",children:"\uc8fc\uc758\uc0ac\ud56d"}),"\n",(0,c.jsx)(s.h3,{id:"1-\uacbd\ub85c-\uc0ac\uc6a9-\uaddc\uce59",children:"1. \uacbd\ub85c \uc0ac\uc6a9 \uaddc\uce59"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"API \ud638\ucd9c \uc2dc \ud56d\uc0c1 \uc0c1\ub300 \uacbd\ub85c \uc0ac\uc6a9"}),"\n",(0,c.jsx)(s.li,{children:"\uc804\uccb4 URL \uc9c1\uc811 \uc0ac\uc6a9 \uc9c0\uc591"}),"\n"]}),"\n",(0,c.jsx)(s.h3,{id:"2-\ud658\uacbd-\uc124\uc815",children:"2. \ud658\uacbd \uc124\uc815"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\ud658\uacbd\ubcc4 URL \ubd84\uae30\ub294 next.config.js\uc5d0\uc11c \ucc98\ub9ac"}),"\n",(0,c.jsx)(s.li,{children:"\ud658\uacbd \ubcc0\uc218 \ud65c\uc6a9 \uad8c\uc7a5"}),"\n"]}),"\n",(0,c.jsx)(s.h3,{id:"3-\ud14c\uc2a4\ud2b8-\uace0\ub824\uc0ac\ud56d",children:"3. \ud14c\uc2a4\ud2b8 \uace0\ub824\uc0ac\ud56d"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\ubaa8\ub4e0 \ud658\uacbd\uc5d0\uc11c \ub3d9\uc791 \ud14c\uc2a4\ud2b8 \ud544\uc694"}),"\n",(0,c.jsx)(s.li,{children:"CORS \uc815\ucc45 \ud655\uc778"}),"\n",(0,c.jsx)(s.li,{children:"\ucfe0\ud0a4 \ucc98\ub9ac \uac80\uc99d"}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"\uacb0\ub860",children:"\uacb0\ub860"}),"\n",(0,c.jsx)(s.p,{children:"\uc774\ub7ec\ud55c \ucd5c\uc801\ud654\ub97c \ud1b5\ud574 \ub2e4\uc74c\uacfc \uac19\uc740 \uc774\uc810\uc744 \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"CORS \ubb38\uc81c \ud574\uacb0"}),"\n",(0,c.jsx)(s.li,{children:"URL \uad00\ub9ac \ud6a8\uc728\ud654"}),"\n",(0,c.jsx)(s.li,{children:"\ucf54\ub4dc \uc720\uc9c0\ubcf4\uc218\uc131 \ud5a5\uc0c1"}),"\n",(0,c.jsx)(s.li,{children:"\uac1c\ubc1c \uc0dd\uc0b0\uc131 \uc99d\uac00"}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"Next.js\uc758 \uae30\ub2a5\uc744 \ucd5c\ub300\ud55c \ud65c\uc6a9\ud558\uba74\uc11c\ub3c4 \uae54\ub054\ud55c \ucf54\ub4dc \uad6c\uc870\ub97c \uc720\uc9c0\ud560 \uc218 \uc788\ub294 \uc774\uc0c1\uc801\uc778 \uad6c\ud604 \ubc29\uc2dd\uc785\ub2c8\ub2e4."})]})}function d(n={}){const{wrapper:s}={...(0,t.R)(),...n.components};return s?(0,c.jsx)(s,{...n,children:(0,c.jsx)(p,{...n})}):p(n)}},28453:(n,s,e)=>{e.d(s,{R:()=>l,x:()=>i});var a=e(96540);const c={},t=a.createContext(c);function l(n){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function i(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:l(n.components),a.createElement(t.Provider,{value:s},n.children)}}}]);