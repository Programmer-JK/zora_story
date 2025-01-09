"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[3595],{12694:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>i});var a=e(74848),t=e(28453);const c={},o=void 0,l={id:"Next.js/trouble-shooting/redirect \uad00\ub828 RuntimeError",title:"redirect \uad00\ub828 RuntimeError",description:"\uc791\uc131\uc77c : 2025.01.04",source:"@site/docs/09. Next.js/090100. trouble-shooting/090105. redirect \uad00\ub828 RuntimeError.md",sourceDirName:"09. Next.js/090100. trouble-shooting",slug:"/Next.js/trouble-shooting/redirect \uad00\ub828 RuntimeError",permalink:"/zora_story/en/docs/Next.js/trouble-shooting/redirect \uad00\ub828 RuntimeError",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:90105,frontMatter:{},sidebar:"studySidebar",previous:{title:"\ucef4\ud3ec\ub10c\ud2b8 Fetch \uc5d0\ub7ec (2)",permalink:"/zora_story/en/docs/next-fetch-error-2"},next:{title:"Next-Auth-\ub85c\uadf8\uc778 \uad6c\ud604 (1)",permalink:"/zora_story/en/docs/next-auth-1"}},r={},i=[{value:"\ubb38\uc81c \uc0c1\ud669",id:"\ubb38\uc81c-\uc0c1\ud669",level:2},{value:"\uc6d0\uc778",id:"\uc6d0\uc778",level:2},{value:"\ud574\uacb0 \ubc29\ubc95\ub4e4",id:"\ud574\uacb0-\ubc29\ubc95\ub4e4",level:2},{value:"1. Promise.reject \uc0ac\uc6a9",id:"1-promisereject-\uc0ac\uc6a9",level:3},{value:"2. navigation \ud568\uc218\ub97c \ud30c\ub77c\ubbf8\ud130\ub85c \ubc1b\uae30",id:"2-navigation-\ud568\uc218\ub97c-\ud30c\ub77c\ubbf8\ud130\ub85c-\ubc1b\uae30",level:3},{value:"3. throw redirect \uc0ac\uc6a9",id:"3-throw-redirect-\uc0ac\uc6a9",level:3},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}];function p(n){const s={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",...(0,t.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"\uc791\uc131\uc77c : 2025.01.04"}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"\ubb38\uc81c-\uc0c1\ud669",children:"\ubb38\uc81c \uc0c1\ud669"}),"\n",(0,a.jsx)(s.p,{children:"Next.js \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c 401 \uc0c1\ud0dc \ucf54\ub4dc\ub97c \ubc1b\uc558\uc744 \ub54c \ub85c\uadf8\uc778 \ud398\uc774\uc9c0\ub85c \ub9ac\ub2e4\uc774\ub809\uc158\ud558\ub294 \uc720\ud2f8\ub9ac\ud2f0 \ud568\uc218\ub97c \uad6c\ud604\ud558\ub358 \uc911 \ub2e4\uc74c\uacfc \uac19\uc740 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4:"}),"\n",(0,a.jsx)(s.pre,{className:"language-typescript",children:(0,a.jsxs)(s.code,{className:"language-typescript",children:[(0,a.jsx)(s.span,{className:"token comment",children:"// src/util/fetch.ts"}),"\n",(0,a.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"res",(0,a.jsx)(s.span,{className:"token punctuation",children:"."}),(0,a.jsx)(s.span,{className:"token property-access",children:"status"})," ",(0,a.jsx)(s.span,{className:"token operator",children:"==="})," ",(0,a.jsx)(s.span,{className:"token number",children:"401"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,a.jsx)(s.span,{className:"token keyword",children:"const"})," tokensRequest ",(0,a.jsx)(s.span,{className:"token operator",children:"="})," ",(0,a.jsx)(s.span,{className:"token keyword control-flow",children:"await"})," ",(0,a.jsx)(s.span,{className:"token function",children:"fetch"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token string",children:"'/api/reissue'"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","})," init",(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,a.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token operator",children:"!"}),"tokensRequest",(0,a.jsx)(s.span,{className:"token punctuation",children:"."}),(0,a.jsx)(s.span,{className:"token property-access",children:"ok"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,a.jsx)(s.span,{className:"token function",children:"redirect"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token string",children:"'/login'"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"  ",(0,a.jsx)(s.span,{className:"token comment",children:"// \uc5ec\uae30\uc11c \uc5d0\ub7ec \ubc1c\uc0dd"}),"\n  ",(0,a.jsx)(s.span,{className:"token spread operator",children:"..."}),"\n",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"Unhandled Runtime Error\nError: NEXT_REDIRECT\n"})}),"\n",(0,a.jsx)(s.h2,{id:"\uc6d0\uc778",children:"\uc6d0\uc778"}),"\n",(0,a.jsx)(s.p,{children:"\uc774 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c \uc8fc\uc694 \uc6d0\uc778\uc740:"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["Next.js\uc758 ",(0,a.jsx)(s.code,{children:"redirect"})," \ud568\uc218\ub97c \uc77c\ubc18 \uc720\ud2f8\ub9ac\ud2f0 \ud568\uc218\uc5d0\uc11c \uc0ac\uc6a9\ud588\uae30 \ub54c\ubb38"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"redirect"}),"\ub294 \uc11c\ubc84 \ucef4\ud3ec\ub10c\ud2b8\ub098 \ud398\uc774\uc9c0 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ub418\uc5b4\uc57c \ud568"]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"\ud574\uacb0-\ubc29\ubc95\ub4e4",children:"\ud574\uacb0 \ubc29\ubc95\ub4e4"}),"\n",(0,a.jsx)(s.h3,{id:"1-promisereject-\uc0ac\uc6a9",children:"1. Promise.reject \uc0ac\uc6a9"}),"\n",(0,a.jsx)(s.p,{children:"\uc720\ud2f8\ub9ac\ud2f0 \ud568\uc218\uc5d0\uc11c\ub294 \uc5d0\ub7ec\ub97c throw\ud558\uace0, \uc0c1\uc704 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c redirect\ub97c \ucc98\ub9ac:"}),"\n",(0,a.jsx)(s.pre,{className:"language-typescript",children:(0,a.jsxs)(s.code,{className:"language-typescript",children:[(0,a.jsx)(s.span,{className:"token comment",children:"// src/util/fetch.ts"}),"\n",(0,a.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token operator",children:"!"}),"tokensRequest",(0,a.jsx)(s.span,{className:"token punctuation",children:"."}),(0,a.jsx)(s.span,{className:"token property-access",children:"ok"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,a.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,a.jsx)(s.span,{className:"token known-class-name class-name",children:"Promise"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"."}),(0,a.jsx)(s.span,{className:"token method function property-access",children:"reject"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token keyword",children:"new"})," ",(0,a.jsx)(s.span,{className:"token class-name",children:(0,a.jsx)(s.span,{className:"token known-class-name class-name",children:"Error"})}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token string",children:"'UNAUTHORIZED'"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n\n",(0,a.jsx)(s.span,{className:"token comment",children:"// \uc0ac\uc6a9\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c"}),"\n",(0,a.jsx)(s.span,{className:"token keyword control-flow",children:"try"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,a.jsx)(s.span,{className:"token keyword control-flow",children:"await"})," ",(0,a.jsx)(s.span,{className:"token function",children:(0,a.jsx)(s.span,{className:"token maybe-class-name",children:"FetchWithJWT"})}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token string",children:"'/api/something'"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"})," ",(0,a.jsx)(s.span,{className:"token keyword control-flow",children:"catch"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"error",(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,a.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"error",(0,a.jsx)(s.span,{className:"token punctuation",children:"."}),(0,a.jsx)(s.span,{className:"token property-access",children:"message"})," ",(0,a.jsx)(s.span,{className:"token operator",children:"==="})," ",(0,a.jsx)(s.span,{className:"token string",children:"'UNAUTHORIZED'"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,a.jsx)(s.span,{className:"token function",children:"redirect"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token string",children:"'/login'"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,a.jsx)(s.h3,{id:"2-navigation-\ud568\uc218\ub97c-\ud30c\ub77c\ubbf8\ud130\ub85c-\ubc1b\uae30",children:"2. navigation \ud568\uc218\ub97c \ud30c\ub77c\ubbf8\ud130\ub85c \ubc1b\uae30"}),"\n",(0,a.jsx)(s.pre,{className:"language-typescript",children:(0,a.jsxs)(s.code,{className:"language-typescript",children:[(0,a.jsx)(s.span,{className:"token keyword module",children:"export"})," ",(0,a.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,a.jsx)(s.span,{className:"token function-variable function",children:(0,a.jsx)(s.span,{className:"token maybe-class-name",children:"FetchWithJWT"})})," ",(0,a.jsx)(s.span,{className:"token operator",children:"="})," ",(0,a.jsx)(s.span,{className:"token keyword",children:"async"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"\n  input",(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsx)(s.span,{className:"token maybe-class-name",children:"RequestInfo"})," ",(0,a.jsx)(s.span,{className:"token operator",children:"|"})," ",(0,a.jsx)(s.span,{className:"token constant",children:"URL"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","}),"\n  init",(0,a.jsx)(s.span,{className:"token operator",children:"?"}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsx)(s.span,{className:"token maybe-class-name",children:"RequestInit"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","}),"\n  navigation",(0,a.jsx)(s.span,{className:"token operator",children:"?"}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"path",(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsx)(s.span,{className:"token builtin",children:"string"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,a.jsx)(s.span,{className:"token keyword",children:"void"}),"\n",(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,a.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token operator",children:"!"}),"tokensRequest",(0,a.jsx)(s.span,{className:"token punctuation",children:"."}),(0,a.jsx)(s.span,{className:"token property-access",children:"ok"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,a.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"navigation",(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n      ",(0,a.jsx)(s.span,{className:"token function",children:"navigation"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token string",children:"'/login'"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n      ",(0,a.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,a.jsx)(s.span,{className:"token keyword",children:"new"})," ",(0,a.jsx)(s.span,{className:"token class-name",children:(0,a.jsx)(s.span,{className:"token maybe-class-name",children:"Response"})}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n    ",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n  ",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n",(0,a.jsx)(s.span,{className:"token comment",children:"// \uc0ac\uc6a9\ud560 \ub54c"}),"\n",(0,a.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,a.jsx)(s.span,{className:"token function-variable function",children:(0,a.jsx)(s.span,{className:"token maybe-class-name",children:"Component"})})," ",(0,a.jsx)(s.span,{className:"token operator",children:"="})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,a.jsx)(s.span,{className:"token keyword",children:"const"})," router ",(0,a.jsx)(s.span,{className:"token operator",children:"="})," ",(0,a.jsx)(s.span,{className:"token function",children:"useRouter"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,a.jsx)(s.span,{className:"token keyword control-flow",children:"await"})," ",(0,a.jsx)(s.span,{className:"token function",children:(0,a.jsx)(s.span,{className:"token maybe-class-name",children:"FetchWithJWT"})}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token string",children:"'/api/something'"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","})," router",(0,a.jsx)(s.span,{className:"token punctuation",children:"."}),(0,a.jsx)(s.span,{className:"token property-access",children:"push"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,a.jsx)(s.h3,{id:"3-throw-redirect-\uc0ac\uc6a9",children:"3. throw redirect \uc0ac\uc6a9"}),"\n",(0,a.jsx)(s.p,{children:"Next.js 13 \uc774\uc0c1\uc5d0\uc11c\ub294 redirect\ub97c throw\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"}),"\n",(0,a.jsx)(s.pre,{className:"language-typescript",children:(0,a.jsxs)(s.code,{className:"language-typescript",children:[(0,a.jsx)(s.span,{className:"token keyword module",children:"import"})," ",(0,a.jsxs)(s.span,{className:"token imports",children:[(0,a.jsx)(s.span,{className:"token punctuation",children:"{"})," redirect ",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"})]})," ",(0,a.jsx)(s.span,{className:"token keyword module",children:"from"})," ",(0,a.jsx)(s.span,{className:"token string",children:"'next/navigation'"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n",(0,a.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token operator",children:"!"}),"tokensRequest",(0,a.jsx)(s.span,{className:"token punctuation",children:"."}),(0,a.jsx)(s.span,{className:"token property-access",children:"ok"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,a.jsx)(s.span,{className:"token keyword control-flow",children:"throw"})," ",(0,a.jsx)(s.span,{className:"token function",children:"redirect"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token string",children:"'/login'"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,a.jsx)(s.h2,{id:"\uacb0\ub860",children:"\uacb0\ub860"}),"\n",(0,a.jsx)(s.p,{children:"Next.js\uc5d0\uc11c \ub9ac\ub2e4\uc774\ub809\uc158\uc744 \ucc98\ub9ac\ud560 \ub54c\ub294 \ud574\ub2f9 \uae30\ub2a5\uc774 \uc2e4\ud589\ub418\ub294 \ucee8\ud14d\uc2a4\ud2b8\ub97c \uc798 \uace0\ub824\ud574\uc57c \ud569\ub2c8\ub2e4. \uc77c\ubc18 \uc720\ud2f8\ub9ac\ud2f0 \ud568\uc218\uc5d0\uc11c\ub294 \uc9c1\uc811\uc801\uc778 \ub9ac\ub2e4\uc774\ub809\uc158\ubcf4\ub2e4\ub294 \uc5d0\ub7ec\ub97c throw\ud558\uace0, \uc0c1\uc704 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc801\uc808\ud788 \ucc98\ub9ac\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."})]})}function d(n={}){const{wrapper:s}={...(0,t.R)(),...n.components};return s?(0,a.jsx)(s,{...n,children:(0,a.jsx)(p,{...n})}):p(n)}},28453:(n,s,e)=>{e.d(s,{R:()=>o,x:()=>l});var a=e(96540);const t={},c=a.createContext(t);function o(n){const s=a.useContext(c);return a.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function l(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),a.createElement(c.Provider,{value:s},n.children)}}}]);