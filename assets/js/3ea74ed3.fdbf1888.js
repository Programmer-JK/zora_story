"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[62709],{2466:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>i});const a=JSON.parse('{"id":"Native/trouble-shooting/Storage \uad00\ub828 \uc774\uc288 \ubd84\uc11d\uacfc \ud574\uacb0\ubc29\uc548","title":"Storage \uad00\ub828 \uc774\uc288 \ubd84\uc11d\uacfc \ud574\uacb0\ubc29\uc548","description":"\uc791\uc131\uc77c: 2025.01.22","source":"@site/docs/13. Native/130100. trouble-shooting/Storage \uad00\ub828 \uc774\uc288 \ubd84\uc11d\uacfc \ud574\uacb0\ubc29\uc548.md","sourceDirName":"13. Native/130100. trouble-shooting","slug":"/Native/trouble-shooting/Storage \uad00\ub828 \uc774\uc288 \ubd84\uc11d\uacfc \ud574\uacb0\ubc29\uc548","permalink":"/zora_story/docs/Native/trouble-shooting/Storage \uad00\ub828 \uc774\uc288 \ubd84\uc11d\uacfc \ud574\uacb0\ubc29\uc548","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"studySidebar","previous":{"title":"Tailwind CSS\uc758 \ub808\uc774\uc5b4 \uc2dc\uc2a4\ud15c","permalink":"/zora_story/docs/CSS/Tailwind CSS\uc758 \ub808\uc774\uc5b4 \uc2dc\uc2a4\ud15c"},"next":{"title":"\ucf54\ub529\ud14c\uc2a4\ud2b8 \uae30\ubcf8 \uc219\uc9c0 (JS)","permalink":"/zora_story/docs/code-test-prepare"}}');var c=e(74848),t=e(28453);const l={},o=void 0,r={},i=[{value:"\ubb38\uc81c \uc0c1\ud669",id:"\ubb38\uc81c-\uc0c1\ud669",level:2},{value:"\uc99d\uc0c1",id:"\uc99d\uc0c1",level:3},{value:"\uc6d0\uc778 \ubd84\uc11d",id:"\uc6d0\uc778-\ubd84\uc11d",level:2},{value:"1. \ube44\ub3d9\uae30 \ucc98\ub9ac \uc774\uc288",id:"1-\ube44\ub3d9\uae30-\ucc98\ub9ac-\uc774\uc288",level:3},{value:"2. Race Condition",id:"2-race-condition",level:3},{value:"\ud574\uacb0 \ubc29\uc548",id:"\ud574\uacb0-\ubc29\uc548",level:2},{value:"1. \ubc29\uc5b4\uc801 \ud504\ub85c\uadf8\ub798\ubc0d \uc801\uc6a9",id:"1-\ubc29\uc5b4\uc801-\ud504\ub85c\uadf8\ub798\ubc0d-\uc801\uc6a9",level:3},{value:"2. \ube44\ub3d9\uae30 \ucc98\ub9ac \uac1c\uc120",id:"2-\ube44\ub3d9\uae30-\ucc98\ub9ac-\uac1c\uc120",level:3},{value:"3. \uc5d0\ub7ec \ubaa8\ub2c8\ud130\ub9c1 \uac15\ud654",id:"3-\uc5d0\ub7ec-\ubaa8\ub2c8\ud130\ub9c1-\uac15\ud654",level:3},{value:"\uc7a5\uae30\uc801 \uac1c\uc120 \ubc29\uc548",id:"\uc7a5\uae30\uc801-\uac1c\uc120-\ubc29\uc548",level:2},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}];function p(n){const s={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"\uc791\uc131\uc77c: 2025.01.22"}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"\ubb38\uc81c-\uc0c1\ud669",children:"\ubb38\uc81c \uc0c1\ud669"}),"\n",(0,c.jsx)(s.p,{children:"\uc791\ub144 \ud68c\uc0ac\ub97c \ub2e4\ub2d0 \ub2f9\uc2dc, \ud558\uc774\ube0c\ub9ac\ub4dc \uc571\uc5d0\uc11c Storage \uad00\ub828 \uc774\uc288\uac00 \ubc1c\uacac\ub41c \uc801\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ud2b9\ud788 iOS \ubc0f \uad6c\ud615 \uc548\ub4dc\ub85c\uc774\ub4dc \ub514\ubc14\uc774\uc2a4\uc5d0\uc11c SecureStorage\ub098 LocalStorage \uc0ac\uc6a9 \uc2dc \uac04\ud5d0\uc801\uc73c\ub85c undefined \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\ub294 \ud604\uc0c1\uc774 \uc790\uc8fc \ubc1c\uacac\ub418\uc5c8\uace0, \uc624\ub298\uc740 \uadf8\ub2f9\uc2dc \uc0c1\ud669\uc5d0 \uae30\ubc18\ud558\uc5ec \uc5b4\ub5bb\uac8c \ud574\uacb0\ud588\ub294\uc9c0\uc5d0 \ub300\ud574 \uc815\ub9ac\ud574\ubcf4\ub824\uace0 \ud569\ub2c8\ub2e4."}),"\n",(0,c.jsx)(s.h3,{id:"\uc99d\uc0c1",children:"\uc99d\uc0c1"}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsx)(s.li,{children:"Storage\uc5d0\uc11c \ud0a4 \uac12\uc744 \uac00\uc838\uc62c \ub54c undefined \uc5d0\ub7ec \ubc1c\uc0dd"}),"\n",(0,c.jsx)(s.li,{children:"Storage \ub370\uc774\ud130 \uc0ad\uc81c \uc2dc undefined \uc5d0\ub7ec \ubc1c\uc0dd"}),"\n",(0,c.jsx)(s.li,{children:"\ud2b9\ud788 \uad6c\ud615 \ub514\ubc14\uc774\uc2a4\ub098 \uc800\uc0ac\uc591 \ud658\uacbd\uc5d0\uc11c \ube48\ubc88\ud558\uac8c \ubc1c\uc0dd"}),"\n",(0,c.jsx)(s.li,{children:"\ud654\uba74 \ub80c\ub354\ub9c1 \uc2e4\ud328\ub098 \uc571 \ud06c\ub798\uc2dc\ub85c \uc774\uc5b4\uc9c0\ub294 \uacbd\uc6b0 \ubc1c\uc0dd"}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"\uc6d0\uc778-\ubd84\uc11d",children:"\uc6d0\uc778 \ubd84\uc11d"}),"\n",(0,c.jsx)(s.h3,{id:"1-\ube44\ub3d9\uae30-\ucc98\ub9ac-\uc774\uc288",children:"1. \ube44\ub3d9\uae30 \ucc98\ub9ac \uc774\uc288"}),"\n",(0,c.jsx)(s.p,{children:"\uc6f9\ubdf0\ub97c \uc0ac\uc6a9\ud558\ub294 \ud558\uc774\ube0c\ub9ac\ub4dc \uc571\uc5d0\uc11c SecureStorage\ub294 \ub124\uc774\ud2f0\ube0c \ube0c\ub9ac\uc9c0\ub97c \ud1b5\ud574 \ub514\ubc14\uc774\uc2a4\uc758 \ubcf4\uc548 \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \uc811\uadfc\ud569\ub2c8\ub2e4. \uc774 \uacfc\uc815\uc5d0\uc11c \ubc1c\uc0dd\ud560 \uc218 \uc788\ub294 \ubb38\uc81c\ub4e4\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4:"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token comment",children:"// \uc7a0\uc7ac\uc801 \ubb38\uc81c\uac00 \uc788\ub294 \ucf54\ub4dc"}),"\n",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," value ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"Storage"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"get"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'userToken'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"})," ",(0,c.jsx)(s.span,{className:"token comment",children:"// \ube44\ub3d9\uae30 \uc791\uc5c5"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"processUserData"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"value",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"})," ",(0,c.jsx)(s.span,{className:"token comment",children:"// value\uac00 \uc900\ube44\ub418\uc9c0 \uc54a\uc740 \uc0c1\ud0dc\uc5d0\uc11c \uc2e4\ud589\ub420 \uc218 \uc788\uc74c"}),"\n"]})}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\ub124\uc774\ud2f0\ube0c \ube0c\ub9ac\uc9c0 \ud1b5\uc2e0 \uc9c0\uc5f0"}),"\n",(0,c.jsx)(s.li,{children:"\ub514\ubc14\uc774\uc2a4 \ub9ac\uc18c\uc2a4 \ubd80\uc871\uc73c\ub85c \uc778\ud55c \uc751\ub2f5 \uc9c0\uc5f0"}),"\n",(0,c.jsx)(s.li,{children:"\ube44\ub3d9\uae30 \uc791\uc5c5\uc758 \ub3d9\uae30\uc801 \ucc98\ub9ac \uc2dc\ub3c4"}),"\n"]}),"\n",(0,c.jsx)(s.h3,{id:"2-race-condition",children:"2. Race Condition"}),"\n",(0,c.jsx)(s.p,{children:"Storage \uc811\uadfc\uacfc \ub370\uc774\ud130 \uc0ac\uc6a9 \uc2dc\uc810\uc758 \ucc28\uc774\ub85c \uc778\ud55c \ud0c0\uc774\ubc0d \uc774\uc288\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"Storage \ub370\uc774\ud130 \uc811\uadfc \uc804\uc5d0 \ud6c4\uc18d \ucf54\ub4dc \uc2e4\ud589"}),"\n",(0,c.jsx)(s.li,{children:"\ub370\uc774\ud130 \uc0ad\uc81c \uc791\uc5c5\uacfc \uc77d\uae30 \uc791\uc5c5\uc758 \uc21c\uc11c \ubcf4\uc7a5 \uc2e4\ud328"}),"\n",(0,c.jsx)(s.li,{children:"\ucee8\ud14d\uc2a4\ud2b8 \uc804\ud658\uc73c\ub85c \uc778\ud55c \ub370\uc774\ud130 \uc815\ud569\uc131 \ubb38\uc81c"}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"\ud574\uacb0-\ubc29\uc548",children:"\ud574\uacb0 \ubc29\uc548"}),"\n",(0,c.jsx)(s.h3,{id:"1-\ubc29\uc5b4\uc801-\ud504\ub85c\uadf8\ub798\ubc0d-\uc801\uc6a9",children:"1. \ubc29\uc5b4\uc801 \ud504\ub85c\uadf8\ub798\ubc0d \uc801\uc6a9"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token comment",children:"// Storage \uc791\uc5c5\uc744 \uc704\ud55c \uc720\ud2f8\ub9ac\ud2f0 \ud568\uc218"}),"\n",(0,c.jsx)(s.span,{className:"token keyword",children:"function"})," ",(0,c.jsx)(s.span,{className:"token function",children:"removeFromStorage"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token parameter",children:"key"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"key ",(0,c.jsx)(s.span,{className:"token operator",children:"==="})," ",(0,c.jsx)(s.span,{className:"token keyword nil",children:"undefined"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"||"})," key ",(0,c.jsx)(s.span,{className:"token operator",children:"==="})," ",(0,c.jsx)(s.span,{className:"token keyword null nil",children:"null"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n        ",(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"warn"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'Invalid key provided to removeFromStorage'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n        ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,c.jsx)(s.span,{className:"token boolean",children:"false"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n    ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n    ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"try"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n        ",(0,c.jsx)(s.span,{className:"token dom variable",children:"localStorage"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"removeItem"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"key",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n        ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,c.jsx)(s.span,{className:"token boolean",children:"true"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n    ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"})," ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"catch"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"error",(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n        ",(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"error"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'Error removing from storage:'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," error",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n        ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,c.jsx)(s.span,{className:"token boolean",children:"false"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n    ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"// Storage \ub370\uc774\ud130 \uc811\uadfc \ud568\uc218"}),"\n",(0,c.jsx)(s.span,{className:"token keyword",children:"function"})," ",(0,c.jsx)(s.span,{className:"token function",children:"getFromStorage"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token parameter",children:"key"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"key ",(0,c.jsx)(s.span,{className:"token operator",children:"==="})," ",(0,c.jsx)(s.span,{className:"token keyword nil",children:"undefined"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"||"})," key ",(0,c.jsx)(s.span,{className:"token operator",children:"==="})," ",(0,c.jsx)(s.span,{className:"token keyword null nil",children:"null"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n        ",(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"warn"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'Invalid key provided to getFromStorage'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n        ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,c.jsx)(s.span,{className:"token keyword null nil",children:"null"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n    ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n    ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"try"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n        ",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," value ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token dom variable",children:"localStorage"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"getItem"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"key",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n        ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," value ",(0,c.jsx)(s.span,{className:"token operator",children:"?"})," ",(0,c.jsx)(s.span,{className:"token known-class-name class-name",children:"JSON"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"parse"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"value",(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token keyword null nil",children:"null"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n    ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"})," ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"catch"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"error",(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n        ",(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"error"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'Error reading from storage:'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," error",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n        ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,c.jsx)(s.span,{className:"token keyword null nil",children:"null"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n    ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,c.jsx)(s.h3,{id:"2-\ube44\ub3d9\uae30-\ucc98\ub9ac-\uac1c\uc120",children:"2. \ube44\ub3d9\uae30 \ucc98\ub9ac \uac1c\uc120"}),"\n",(0,c.jsx)(s.p,{children:"Promise\ub098 async/await\ub97c \ud65c\uc6a9\ud55c \uc548\uc815\uc801\uc778 \ube44\ub3d9\uae30 \ucc98\ub9ac:"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token keyword",children:"class"})," ",(0,c.jsx)(s.span,{className:"token class-name",children:"StorageService"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token keyword",children:"async"})," ",(0,c.jsx)(s.span,{className:"token function",children:"get"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"key",(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n        ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"try"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n            ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"await"})," ",(0,c.jsx)(s.span,{className:"token keyword",children:"this"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"secureStorage"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"get"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"key",(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"??"})," ",(0,c.jsx)(s.span,{className:"token keyword null nil",children:"null"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n        ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"})," ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"catch"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"error",(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n            ",(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"error"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'Storage access error:'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," error",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n            ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,c.jsx)(s.span,{className:"token keyword null nil",children:"null"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n        ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n    ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n\n    ",(0,c.jsx)(s.span,{className:"token keyword",children:"async"})," ",(0,c.jsx)(s.span,{className:"token function",children:"set"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"key",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," value",(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n        ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"try"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n            ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"await"})," ",(0,c.jsx)(s.span,{className:"token keyword",children:"this"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"secureStorage"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"set"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"key",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," value",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n            ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,c.jsx)(s.span,{className:"token boolean",children:"true"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n        ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"})," ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"catch"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"error",(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n            ",(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"error"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'Storage write error:'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," error",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n            ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,c.jsx)(s.span,{className:"token boolean",children:"false"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n        ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n    ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"// \uc0ac\uc6a9 \uc608\uc2dc"}),"\n",(0,c.jsx)(s.span,{className:"token keyword",children:"async"})," ",(0,c.jsx)(s.span,{className:"token keyword",children:"function"})," ",(0,c.jsx)(s.span,{className:"token function",children:"handleUserData"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," storage ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token keyword",children:"new"})," ",(0,c.jsx)(s.span,{className:"token class-name",children:"StorageService"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n    ",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," userData ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"await"})," storage",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"get"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'userData'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n    ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"userData",(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n        ",(0,c.jsx)(s.span,{className:"token comment",children:"// \ub370\uc774\ud130 \ucc98\ub9ac"}),"\n    ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,c.jsx)(s.h3,{id:"3-\uc5d0\ub7ec-\ubaa8\ub2c8\ud130\ub9c1-\uac15\ud654",children:"3. \uc5d0\ub7ec \ubaa8\ub2c8\ud130\ub9c1 \uac15\ud654"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token keyword",children:"class"})," ",(0,c.jsx)(s.span,{className:"token class-name",children:"StorageMonitor"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token keyword",children:"static"})," ",(0,c.jsx)(s.span,{className:"token function",children:"logError"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsxs)(s.span,{className:"token parameter",children:["operation",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," key",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," error"]}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n        ",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," errorContext ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n            ",(0,c.jsx)(s.span,{className:"token literal-property property",children:"timestamp"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token keyword",children:"new"})," ",(0,c.jsx)(s.span,{className:"token class-name",children:"Date"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"toISOString"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n            operation",(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n            key",(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n            ",(0,c.jsx)(s.span,{className:"token literal-property property",children:"error"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," error",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"message"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n            ",(0,c.jsx)(s.span,{className:"token literal-property property",children:"deviceInfo"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n                ",(0,c.jsx)(s.span,{className:"token literal-property property",children:"userAgent"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token dom variable",children:"navigator"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"userAgent"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n                ",(0,c.jsx)(s.span,{className:"token literal-property property",children:"platform"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token dom variable",children:"navigator"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"platform"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n                ",(0,c.jsx)(s.span,{className:"token comment",children:"// \ucd94\uac00 \ub514\ubc14\uc774\uc2a4 \uc815\ubcf4"}),"\n            ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n        ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n        \n        ",(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"error"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'Storage operation failed:'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," errorContext",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n        ",(0,c.jsx)(s.span,{className:"token comment",children:"// \uc5d0\ub7ec \ub85c\uae45 \uc2dc\uc2a4\ud15c\uc73c\ub85c \uc804\uc1a1"}),"\n    ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,c.jsx)(s.h2,{id:"\uc7a5\uae30\uc801-\uac1c\uc120-\ubc29\uc548",children:"\uc7a5\uae30\uc801 \uac1c\uc120 \ubc29\uc548"}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"\uce90\uc2f1 \uba54\ucee4\ub2c8\uc998 \ub3c4\uc785"})}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\uba54\ubaa8\ub9ac \uce90\uc2dc \ub808\uc774\uc5b4 \ucd94\uac00"}),"\n",(0,c.jsx)(s.li,{children:"\ube48\ubc88\ud55c Storage \uc811\uadfc \ucd5c\uc18c\ud654"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"\ud14c\uc2a4\ud2b8 \uac15\ud654"})}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\ub2e4\uc591\ud55c \ub514\ubc14\uc774\uc2a4 \ud658\uacbd\uc5d0\uc11c\uc758 \ud14c\uc2a4\ud2b8 \ucf00\uc774\uc2a4 \ucd94\uac00"}),"\n",(0,c.jsx)(s.li,{children:"\uc2a4\ud2b8\ub808\uc2a4 \ud14c\uc2a4\ud2b8 \uc2dc\ub098\ub9ac\uc624 \uad6c\ud604"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"\ubaa8\ub2c8\ud130\ub9c1 \uc2dc\uc2a4\ud15c \uad6c\ucd95"})}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\uc2e4\uc2dc\uac04 \uc5d0\ub7ec \ubaa8\ub2c8\ud130\ub9c1"}),"\n",(0,c.jsx)(s.li,{children:"\ub514\ubc14\uc774\uc2a4\ubcc4 \uc131\ub2a5 \uba54\ud2b8\ub9ad \uc218\uc9d1"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"\uacb0\ub860",children:"\uacb0\ub860"}),"\n",(0,c.jsx)(s.p,{children:"Storage \uad00\ub828 \uc774\uc288\ub294 \ud558\uc774\ube0c\ub9ac\ub4dc \uc571 \uac1c\ubc1c\uc5d0\uc11c \uc790\uc8fc \ub9c8\uc8fc\uce58\ub294 \ubb38\uc81c\uc785\ub2c8\ub2e4. \ub2e8\uc21c\ud788 undefined \uccb4\ud06c\ub9cc\uc73c\ub85c\ub294 \uadfc\ubcf8\uc801\uc778 \ud574\uacb0\uc774 \uc5b4\ub824\uc6b0\uba70, \ub2e4\uc74c\uacfc \uac19\uc740 \uc885\ud569\uc801\uc778 \uc811\uadfc\uc774 \ud544\uc694\ud569\ub2c8\ub2e4:"}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsx)(s.li,{children:"\ucca0\uc800\ud55c \ubc29\uc5b4\uc801 \ud504\ub85c\uadf8\ub798\ubc0d"}),"\n",(0,c.jsx)(s.li,{children:"\ube44\ub3d9\uae30 \ucc98\ub9ac\uc5d0 \ub300\ud55c \uc2e0\uc911\ud55c \uc124\uacc4"}),"\n",(0,c.jsx)(s.li,{children:"\uc801\uc808\ud55c \uce90\uc2f1 \uc804\ub7b5"}),"\n",(0,c.jsx)(s.li,{children:"\uccb4\uacc4\uc801\uc778 \uc5d0\ub7ec \ucc98\ub9ac\uc640 \ubaa8\ub2c8\ud130\ub9c1"}),"\n",(0,c.jsx)(s.li,{children:"\ub2e4\uc591\ud55c \ud658\uacbd\uc5d0\uc11c\uc758 \ud14c\uc2a4\ud2b8"}),"\n"]})]})}function d(n={}){const{wrapper:s}={...(0,t.R)(),...n.components};return s?(0,c.jsx)(s,{...n,children:(0,c.jsx)(p,{...n})}):p(n)}},28453:(n,s,e)=>{e.d(s,{R:()=>l,x:()=>o});var a=e(96540);const c={},t=a.createContext(c);function l(n){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function o(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:l(n.components),a.createElement(t.Provider,{value:s},n.children)}}}]);