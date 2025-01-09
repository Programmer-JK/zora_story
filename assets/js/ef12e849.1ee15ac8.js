"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[5673],{33317:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>r});var a=e(74848),c=e(28453);const t={},l=void 0,o={id:"React.js/onChange vs useEffect",title:"onChange vs useEffect",description:"\uc791\uc131\uc77c : 2024.12.23",source:"@site/docs/08. React.js/089903. onChange vs useEffect.md",sourceDirName:"08. React.js",slug:"/React.js/onChange vs useEffect",permalink:"/zora_story/docs/React.js/onChange vs useEffect",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:89903,frontMatter:{},sidebar:"studySidebar",previous:{title:"react hook",permalink:"/zora_story/docs/React.js/react hook"},next:{title:"jotai",permalink:"/zora_story/docs/React.js/jotai"}},i={},r=[{value:"onChange",id:"onchange",level:2},{value:"useEffect",id:"useeffect",level:2},{value:"\uc0ac\uc6a9 \uc2dc\ub098\ub9ac\uc624 \ube44\uad50:",id:"\uc0ac\uc6a9-\uc2dc\ub098\ub9ac\uc624-\ube44\uad50",level:2},{value:"\uc131\ub2a5 \ucd5c\uc801\ud654 \uc608\uc2dc:",id:"\uc131\ub2a5-\ucd5c\uc801\ud654-\uc608\uc2dc",level:2}];function p(n){const s={blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,c.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"\uc791\uc131\uc77c : 2024.12.23"}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"onchange",children:"onChange"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsx)(s.li,{children:"\ud2b9\uc9d5:"}),"\n"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"\uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud560 \ub54c\ub9c8\ub2e4 \uc9c1\uc811\uc801\uc73c\ub85c \uc2e4\ud589"}),"\n",(0,a.jsx)(s.li,{children:"\uc0ac\uc6a9\uc790 \uc785\ub825\uc5d0 \uc989\uac01\uc801\uc778 \uc751\ub2f5 \uac00\ub2a5"}),"\n",(0,a.jsx)(s.li,{children:"\ub3d9\uae30\uc801\uc73c\ub85c \uc2e4\ud589"}),"\n"]}),"\n",(0,a.jsxs)(s.ol,{start:"2",children:["\n",(0,a.jsx)(s.li,{children:"\uc131\ub2a5 \uce21\uba74:"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{className:"language-typescript",children:(0,a.jsxs)(s.code,{className:"language-typescript",children:[(0,a.jsx)(s.span,{className:"token comment",children:"// \uc9c1\uc811 \uc2e4\ud589"}),"\n",(0,a.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,a.jsx)(s.span,{className:"token function-variable function",children:"handleChange"})," ",(0,a.jsx)(s.span,{className:"token operator",children:"="})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"e",(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsx)(s.span,{className:"token maybe-class-name",children:"React"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"."}),(0,a.jsx)(s.span,{className:"token property-access",children:(0,a.jsx)(s.span,{className:"token maybe-class-name",children:"ChangeEvent"})}),(0,a.jsx)(s.span,{className:"token operator",children:"<"}),(0,a.jsx)(s.span,{className:"token maybe-class-name",children:"HTMLInputElement"}),(0,a.jsx)(s.span,{className:"token operator",children:">"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,a.jsx)(s.span,{className:"token keyword",children:"const"})," newValue ",(0,a.jsx)(s.span,{className:"token operator",children:"="})," e",(0,a.jsx)(s.span,{className:"token punctuation",children:"."}),(0,a.jsx)(s.span,{className:"token property-access",children:"target"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"."}),(0,a.jsx)(s.span,{className:"token property-access",children:"value"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,a.jsx)(s.span,{className:"token function",children:"setValue"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"newValue",(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"  ",(0,a.jsx)(s.span,{className:"token comment",children:"// \uc0c1\ud0dc \uc5c5\ub370\uc774\ud2b8 1\ud68c"}),"\n  ",(0,a.jsx)(s.span,{className:"token function",children:"validateValue"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"newValue",(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"  ",(0,a.jsx)(s.span,{className:"token comment",children:"// \uc989\uc2dc \uac80\uc99d"}),"\n",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"\uc774\ubca4\ud2b8\ub2f9 \ud55c \ubc88\ub9cc \uc2e4\ud589"}),"\n",(0,a.jsx)(s.li,{children:"\ubd88\ud544\uc694\ud55c \ub80c\ub354\ub9c1 \uc5c6\uc74c"}),"\n",(0,a.jsx)(s.li,{children:"\uc989\uac01\uc801\uc778 \uc0c1\ud0dc \uc5c5\ub370\uc774\ud2b8 \uac00\ub2a5"}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"useeffect",children:"useEffect"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsx)(s.li,{children:"\ud2b9\uc9d5:"}),"\n"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"\uc758\uc874\uc131 \ubc30\uc5f4\uc758 \uac12\uc774 \ubcc0\uacbd\ub420 \ub54c\ub9c8\ub2e4 \uc2e4\ud589"}),"\n",(0,a.jsx)(s.li,{children:"\ub80c\ub354\ub9c1 \uc774\ud6c4\uc5d0 \ube44\ub3d9\uae30\uc801\uc73c\ub85c \uc2e4\ud589"}),"\n",(0,a.jsx)(s.li,{children:"\uc815\ub9ac(cleanup) \ud568\uc218\ub97c \ud1b5\ud55c \ubd80\uc218 \ud6a8\uacfc \ucc98\ub9ac \uac00\ub2a5"}),"\n"]}),"\n",(0,a.jsxs)(s.ol,{start:"2",children:["\n",(0,a.jsx)(s.li,{children:"\uc131\ub2a5 \uce21\uba74:"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{className:"language-typescript",children:(0,a.jsxs)(s.code,{className:"language-typescript",children:[(0,a.jsx)(s.span,{className:"token function",children:"useEffect"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,a.jsx)(s.span,{className:"token function",children:"validateValue"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"value",(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"  ",(0,a.jsx)(s.span,{className:"token comment",children:"// \uc758\uc874\uc131 \ubcc0\uacbd\ub9c8\ub2e4 \uc2e4\ud589"}),"\n  ",(0,a.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,a.jsx)(s.span,{className:"token comment",children:"// cleanup \ub85c\uc9c1"}),"\n  ",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"["}),"value",(0,a.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"  ",(0,a.jsx)(s.span,{className:"token comment",children:"// \uac12 \ubcc0\uacbd\uc2dc\ub9c8\ub2e4 \uc2e4\ud589"}),"\n"]})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"\uc758\uc874\uc131\uc774 \ubcc0\uacbd\ub420 \ub54c\ub9c8\ub2e4 \uc2e4\ud589\ub418\ubbc0\ub85c \uc5ec\ub7ec \ubc88 \uc2e4\ud589\ub420 \uc218 \uc788\uc74c"}),"\n",(0,a.jsx)(s.li,{children:"\ucd94\uac00\uc801\uc778 \ub80c\ub354\ub9c1 \uc0ac\uc774\ud074 \ubc1c\uc0dd \uac00\ub2a5"}),"\n",(0,a.jsx)(s.li,{children:"\ube44\ub3d9\uae30 \uc791\uc5c5\uc5d0 \uc801\ud569"}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"\uc0ac\uc6a9-\uc2dc\ub098\ub9ac\uc624-\ube44\uad50",children:"\uc0ac\uc6a9 \uc2dc\ub098\ub9ac\uc624 \ube44\uad50:"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsx)(s.li,{children:"onChange\uac00 \ub354 \uc801\ud569\ud55c \uacbd\uc6b0:"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{className:"language-typescript",children:(0,a.jsxs)(s.code,{className:"language-typescript",children:[(0,a.jsx)(s.span,{className:"token comment",children:"// \uc989\uac01\uc801\uc778 \uc785\ub825 \ucc98\ub9ac"}),"\n",(0,a.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,a.jsx)(s.span,{className:"token function-variable function",children:"handleChange"})," ",(0,a.jsx)(s.span,{className:"token operator",children:"="})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"e",(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,a.jsx)(s.span,{className:"token keyword",children:"const"})," value ",(0,a.jsx)(s.span,{className:"token operator",children:"="})," e",(0,a.jsx)(s.span,{className:"token punctuation",children:"."}),(0,a.jsx)(s.span,{className:"token property-access",children:"target"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"."}),(0,a.jsx)(s.span,{className:"token property-access",children:"value"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,a.jsx)(s.span,{className:"token function",children:"setInput"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"value",(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,a.jsx)(s.span,{className:"token function",children:"validateInput"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"value",(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"  ",(0,a.jsx)(s.span,{className:"token comment",children:"// \uc989\uc2dc \uac80\uc99d"}),"\n",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"\uc989\uac01\uc801\uc778 \uc720\ud6a8\uc131 \uac80\uc0ac"}),"\n",(0,a.jsx)(s.li,{children:"\ub2e8\uc21c\ud55c \uc0c1\ud0dc \uc5c5\ub370\uc774\ud2b8"}),"\n",(0,a.jsx)(s.li,{children:"\ub3d9\uae30\uc801 \uc791\uc5c5"}),"\n"]}),"\n",(0,a.jsxs)(s.ol,{start:"2",children:["\n",(0,a.jsx)(s.li,{children:"useEffect\uac00 \ub354 \uc801\ud569\ud55c \uacbd\uc6b0:"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{className:"language-typescript",children:(0,a.jsxs)(s.code,{className:"language-typescript",children:[(0,a.jsx)(s.span,{className:"token function",children:"useEffect"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,a.jsx)(s.span,{className:"token keyword",children:"const"})," timer ",(0,a.jsx)(s.span,{className:"token operator",children:"="})," ",(0,a.jsx)(s.span,{className:"token function",children:"setTimeout"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,a.jsx)(s.span,{className:"token function",children:"validateInput"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"input",(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"  ",(0,a.jsx)(s.span,{className:"token comment",children:"// \ub514\ubc14\uc6b4\uc2a4\ub41c \uac80\uc99d"}),"\n  ",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(s.span,{className:"token number",children:"500"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,a.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,a.jsx)(s.span,{className:"token function",children:"clearTimeout"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"timer",(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"["}),"input",(0,a.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"API \ud638\ucd9c"}),"\n",(0,a.jsx)(s.li,{children:"\ub514\ubc14\uc6b4\uc2f1/\uc4f0\ub85c\ud2c0\ub9c1"}),"\n",(0,a.jsx)(s.li,{children:"\uad6c\ub3c5 \uad00\ub9ac"}),"\n",(0,a.jsx)(s.li,{children:"\ud0c0\uc774\uba38 \uad00\ub9ac"}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"\uc131\ub2a5-\ucd5c\uc801\ud654-\uc608\uc2dc",children:"\uc131\ub2a5 \ucd5c\uc801\ud654 \uc608\uc2dc:"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsx)(s.li,{children:"onChange + useEffect \uc870\ud569:"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{className:"language-typescript",children:(0,a.jsxs)(s.code,{className:"language-typescript",children:[(0,a.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"["}),"input",(0,a.jsx)(s.span,{className:"token punctuation",children:","})," setInput",(0,a.jsx)(s.span,{className:"token punctuation",children:"]"})," ",(0,a.jsx)(s.span,{className:"token operator",children:"="})," ",(0,a.jsx)(s.span,{className:"token function",children:"useState"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token string",children:"''"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"["}),"debouncedValue",(0,a.jsx)(s.span,{className:"token punctuation",children:","})," setDebouncedValue",(0,a.jsx)(s.span,{className:"token punctuation",children:"]"})," ",(0,a.jsx)(s.span,{className:"token operator",children:"="})," ",(0,a.jsx)(s.span,{className:"token function",children:"useState"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token string",children:"''"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n",(0,a.jsx)(s.span,{className:"token comment",children:"// \uc989\uac01\uc801\uc778 UI \uc5c5\ub370\uc774\ud2b8"}),"\n",(0,a.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,a.jsx)(s.span,{className:"token function-variable function",children:"handleChange"})," ",(0,a.jsx)(s.span,{className:"token operator",children:"="})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"e",(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,a.jsx)(s.span,{className:"token function",children:"setInput"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"e",(0,a.jsx)(s.span,{className:"token punctuation",children:"."}),(0,a.jsx)(s.span,{className:"token property-access",children:"target"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"."}),(0,a.jsx)(s.span,{className:"token property-access",children:"value"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n",(0,a.jsx)(s.span,{className:"token comment",children:"// \ub514\ubc14\uc6b4\uc2a4\ub41c \uac80\uc99d"}),"\n",(0,a.jsx)(s.span,{className:"token function",children:"useEffect"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,a.jsx)(s.span,{className:"token keyword",children:"const"})," timer ",(0,a.jsx)(s.span,{className:"token operator",children:"="})," ",(0,a.jsx)(s.span,{className:"token function",children:"setTimeout"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,a.jsx)(s.span,{className:"token function",children:"setDebouncedValue"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"input",(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(s.span,{className:"token number",children:"500"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,a.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,a.jsx)(s.span,{className:"token function",children:"clearTimeout"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"timer",(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"["}),"input",(0,a.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n",(0,a.jsx)(s.span,{className:"token comment",children:"// API \ud638\ucd9c\uc774\ub098 \ubb34\uac70\uc6b4 \uac80\uc99d"}),"\n",(0,a.jsx)(s.span,{className:"token function",children:"useEffect"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,a.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"debouncedValue",(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,a.jsx)(s.span,{className:"token function",children:"validateWithAPI"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"debouncedValue",(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"["}),"debouncedValue",(0,a.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,a.jsx)(s.p,{children:"\uacb0\ub860\uc801\uc73c\ub85c:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"\ub2e8\uc21c \uc0c1\ud0dc \uc5c5\ub370\uc774\ud2b8\ub098 \uc989\uac01\uc801\uc778 \ubc18\uc751\uc774 \ud544\uc694\ud55c \uacbd\uc6b0 \u2192 onChange"}),"\n",(0,a.jsx)(s.li,{children:"\ube44\ub3d9\uae30 \uc791\uc5c5\uc774\ub098 \ubd80\uc218 \ud6a8\uacfc \uad00\ub9ac\uac00 \ud544\uc694\ud55c \uacbd\uc6b0 \u2192 useEffect"}),"\n",(0,a.jsxs)(s.li,{children:["\ub450 \uac00\uc9c0\ub97c \uc801\uc808\ud788 \uc870\ud569\ud558\uc5ec \uc0ac\uc6a9\ud558\uba74 \ub354 \ub098\uc740 \uc131\ub2a5\uacfc \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \uc81c\uacf5\ud560 \uc218 ",(0,a.jsx)(s.strong,{children:"\uc788\uc2b5\ub2c8\ub2e4"})]}),"\n"]})]})}function u(n={}){const{wrapper:s}={...(0,c.R)(),...n.components};return s?(0,a.jsx)(s,{...n,children:(0,a.jsx)(p,{...n})}):p(n)}},28453:(n,s,e)=>{e.d(s,{R:()=>l,x:()=>o});var a=e(96540);const c={},t=a.createContext(c);function l(n){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function o(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:l(n.components),a.createElement(t.Provider,{value:s},n.children)}}}]);