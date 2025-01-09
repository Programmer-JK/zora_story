"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[3668],{20357:(n,s,a)=>{a.r(s),a.d(s,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>p});var e=a(74848),c=a(28453);const t={slug:"/maze-escape"},o=void 0,l={id:"\ucf54\ub529\ud14c\uc2a4\ud2b8 \uc900\ube44/DFS , BFS/\ubbf8\ub85c \ud0c8\ucd9c",title:"\ubbf8\ub85c \ud0c8\ucd9c",description:"\uc791\uc131\uc77c : 2024.11.09",source:"@site/docs/20. \ucf54\ub529\ud14c\uc2a4\ud2b8 \uc900\ube44/200500. DFS , BFS/200505. \ubbf8\ub85c \ud0c8\ucd9c.md",sourceDirName:"20. \ucf54\ub529\ud14c\uc2a4\ud2b8 \uc900\ube44/200500. DFS , BFS",slug:"/maze-escape",permalink:"/zora_story/en/docs/maze-escape",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:200505,frontMatter:{slug:"/maze-escape"},sidebar:"studySidebar",previous:{title:"\ubaa8\uc74c \uc0ac\uc804",permalink:"/zora_story/en/docs/vowel-dictionary"},next:{title:"\ubd88\ub7c9 \uc0ac\uc6a9\uc790",permalink:"/zora_story/en/docs/malicious-users"}},r={},p=[{value:"1. \ubb38\uc81c \ud30c\uc545",id:"1-\ubb38\uc81c-\ud30c\uc545",level:3},{value:"2. \ub0b4 \ud480\uc774",id:"2-\ub0b4-\ud480\uc774",level:4},{value:"\ud480\uc774 \ubc29\uc2dd",id:"\ud480\uc774-\ubc29\uc2dd",level:5},{value:"\ub290\ub080 \uc810",id:"\ub290\ub080-\uc810",level:5}];function i(n){const s={blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...(0,c.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(s.blockquote,{children:["\n",(0,e.jsx)(s.p,{children:"\uc791\uc131\uc77c : 2024.11.09"}),"\n"]}),"\n",(0,e.jsx)(s.h3,{id:"1-\ubb38\uc81c-\ud30c\uc545",children:"1. \ubb38\uc81c \ud30c\uc545"}),"\n",(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsx)(s.li,{children:"\ubb38\uc81c\uc758 \uc694\uc810 : \ub108\ube44\uc6b0\uc120\ud0d0\uc0c9 BFS\ubc29\uc2dd\uc744 \ud1b5\ud574 \ucd5c\ub2e8\uac70\ub9ac\ub97c \uad6c\ud558\ub294 \ubc29\uc2dd"}),"\n"]}),"\n",(0,e.jsx)(s.h4,{id:"2-\ub0b4-\ud480\uc774",children:"2. \ub0b4 \ud480\uc774"}),"\n",(0,e.jsx)(s.pre,{className:"language-javascript",children:(0,e.jsxs)(s.code,{className:"language-javascript",children:[(0,e.jsx)(s.span,{className:"token keyword",children:"function"})," ",(0,e.jsx)(s.span,{className:"token function",children:"findDistance"}),(0,e.jsx)(s.span,{className:"token punctuation",children:"("}),(0,e.jsxs)(s.span,{className:"token parameter",children:["maps",(0,e.jsx)(s.span,{className:"token punctuation",children:","})," start",(0,e.jsx)(s.span,{className:"token punctuation",children:","})," target"]}),(0,e.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,e.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,e.jsx)(s.span,{className:"token keyword",children:"var"})," moveCount ",(0,e.jsx)(s.span,{className:"token operator",children:"="})," ",(0,e.jsx)(s.span,{className:"token number",children:"0"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,e.jsx)(s.span,{className:"token keyword",children:"let"})," moveX ",(0,e.jsx)(s.span,{className:"token operator",children:"="})," ",(0,e.jsx)(s.span,{className:"token punctuation",children:"["}),(0,e.jsx)(s.span,{className:"token number",children:"1"}),(0,e.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,e.jsx)(s.span,{className:"token operator",children:"-"}),(0,e.jsx)(s.span,{className:"token number",children:"1"}),(0,e.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,e.jsx)(s.span,{className:"token number",children:"0"}),(0,e.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,e.jsx)(s.span,{className:"token number",children:"0"}),(0,e.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,e.jsx)(s.span,{className:"token keyword",children:"let"})," moveY ",(0,e.jsx)(s.span,{className:"token operator",children:"="})," ",(0,e.jsx)(s.span,{className:"token punctuation",children:"["}),(0,e.jsx)(s.span,{className:"token number",children:"0"}),(0,e.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,e.jsx)(s.span,{className:"token number",children:"0"}),(0,e.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,e.jsx)(s.span,{className:"token number",children:"1"}),(0,e.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,e.jsx)(s.span,{className:"token operator",children:"-"}),(0,e.jsx)(s.span,{className:"token number",children:"1"}),(0,e.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n  ",(0,e.jsx)(s.span,{className:"token keyword",children:"var"})," goX ",(0,e.jsx)(s.span,{className:"token operator",children:"="})," ",(0,e.jsx)(s.span,{className:"token number",children:"0"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,e.jsx)(s.span,{className:"token keyword",children:"var"})," goY ",(0,e.jsx)(s.span,{className:"token operator",children:"="})," ",(0,e.jsx)(s.span,{className:"token number",children:"0"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n  maps",(0,e.jsx)(s.span,{className:"token punctuation",children:"["}),"start",(0,e.jsx)(s.span,{className:"token punctuation",children:"["}),(0,e.jsx)(s.span,{className:"token number",children:"0"}),(0,e.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,e.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,e.jsx)(s.span,{className:"token punctuation",children:"["}),"start",(0,e.jsx)(s.span,{className:"token punctuation",children:"["}),(0,e.jsx)(s.span,{className:"token number",children:"1"}),(0,e.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,e.jsx)(s.span,{className:"token punctuation",children:"]"})," ",(0,e.jsx)(s.span,{className:"token operator",children:"="})," ",(0,e.jsx)(s.span,{className:"token string",children:'"X"'}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n  ",(0,e.jsx)(s.span,{className:"token keyword",children:"var"})," queue ",(0,e.jsx)(s.span,{className:"token operator",children:"="})," ",(0,e.jsx)(s.span,{className:"token punctuation",children:"["}),"start",(0,e.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n  ",(0,e.jsx)(s.span,{className:"token keyword control-flow",children:"while"})," ",(0,e.jsx)(s.span,{className:"token punctuation",children:"("}),"queue",(0,e.jsx)(s.span,{className:"token punctuation",children:"."}),(0,e.jsx)(s.span,{className:"token property-access",children:"length"})," ",(0,e.jsx)(s.span,{className:"token operator",children:">"})," ",(0,e.jsx)(s.span,{className:"token number",children:"0"}),(0,e.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,e.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,e.jsx)(s.span,{className:"token keyword",children:"var"})," size ",(0,e.jsx)(s.span,{className:"token operator",children:"="})," queue",(0,e.jsx)(s.span,{className:"token punctuation",children:"."}),(0,e.jsx)(s.span,{className:"token property-access",children:"length"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"}),"\n    ",(0,e.jsx)(s.span,{className:"token keyword control-flow",children:"for"})," ",(0,e.jsx)(s.span,{className:"token punctuation",children:"("}),(0,e.jsx)(s.span,{className:"token keyword",children:"var"})," i ",(0,e.jsx)(s.span,{className:"token operator",children:"="})," ",(0,e.jsx)(s.span,{className:"token number",children:"0"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"})," i ",(0,e.jsx)(s.span,{className:"token operator",children:"<"})," size",(0,e.jsx)(s.span,{className:"token punctuation",children:";"})," i",(0,e.jsx)(s.span,{className:"token operator",children:"++"}),(0,e.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,e.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n      ",(0,e.jsx)(s.span,{className:"token keyword",children:"let"})," ",(0,e.jsx)(s.span,{className:"token punctuation",children:"["}),"x",(0,e.jsx)(s.span,{className:"token punctuation",children:","})," y",(0,e.jsx)(s.span,{className:"token punctuation",children:"]"})," ",(0,e.jsx)(s.span,{className:"token operator",children:"="})," queue",(0,e.jsx)(s.span,{className:"token punctuation",children:"."}),(0,e.jsx)(s.span,{className:"token method function property-access",children:"shift"}),(0,e.jsx)(s.span,{className:"token punctuation",children:"("}),(0,e.jsx)(s.span,{className:"token punctuation",children:")"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"}),"\n      ",(0,e.jsx)(s.span,{className:"token keyword control-flow",children:"for"})," ",(0,e.jsx)(s.span,{className:"token punctuation",children:"("}),(0,e.jsx)(s.span,{className:"token keyword",children:"var"})," k ",(0,e.jsx)(s.span,{className:"token operator",children:"="})," ",(0,e.jsx)(s.span,{className:"token number",children:"0"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"})," k ",(0,e.jsx)(s.span,{className:"token operator",children:"<"})," ",(0,e.jsx)(s.span,{className:"token number",children:"4"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"})," k",(0,e.jsx)(s.span,{className:"token operator",children:"++"}),(0,e.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,e.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n        goX ",(0,e.jsx)(s.span,{className:"token operator",children:"="})," x ",(0,e.jsx)(s.span,{className:"token operator",children:"+"})," moveX",(0,e.jsx)(s.span,{className:"token punctuation",children:"["}),"k",(0,e.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"}),"\n        goY ",(0,e.jsx)(s.span,{className:"token operator",children:"="})," y ",(0,e.jsx)(s.span,{className:"token operator",children:"+"})," moveY",(0,e.jsx)(s.span,{className:"token punctuation",children:"["}),"k",(0,e.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"}),"\n        ",(0,e.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,e.jsx)(s.span,{className:"token punctuation",children:"("}),"\n          goX ",(0,e.jsx)(s.span,{className:"token operator",children:">="})," ",(0,e.jsx)(s.span,{className:"token number",children:"0"})," ",(0,e.jsx)(s.span,{className:"token operator",children:"&&"}),"\n          goX ",(0,e.jsx)(s.span,{className:"token operator",children:"<"})," maps",(0,e.jsx)(s.span,{className:"token punctuation",children:"."}),(0,e.jsx)(s.span,{className:"token property-access",children:"length"})," ",(0,e.jsx)(s.span,{className:"token operator",children:"&&"}),"\n          goY ",(0,e.jsx)(s.span,{className:"token operator",children:">="})," ",(0,e.jsx)(s.span,{className:"token number",children:"0"})," ",(0,e.jsx)(s.span,{className:"token operator",children:"&&"}),"\n          goY ",(0,e.jsx)(s.span,{className:"token operator",children:"<"})," maps",(0,e.jsx)(s.span,{className:"token punctuation",children:"["}),(0,e.jsx)(s.span,{className:"token number",children:"0"}),(0,e.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,e.jsx)(s.span,{className:"token punctuation",children:"."}),(0,e.jsx)(s.span,{className:"token property-access",children:"length"})," ",(0,e.jsx)(s.span,{className:"token operator",children:"&&"}),"\n          maps",(0,e.jsx)(s.span,{className:"token punctuation",children:"["}),"goX",(0,e.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,e.jsx)(s.span,{className:"token punctuation",children:"["}),"goY",(0,e.jsx)(s.span,{className:"token punctuation",children:"]"})," ",(0,e.jsx)(s.span,{className:"token operator",children:"!=="})," ",(0,e.jsx)(s.span,{className:"token string",children:'"X"'}),"\n        ",(0,e.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,e.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n          ",(0,e.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,e.jsx)(s.span,{className:"token punctuation",children:"("}),"maps",(0,e.jsx)(s.span,{className:"token punctuation",children:"["}),"goX",(0,e.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,e.jsx)(s.span,{className:"token punctuation",children:"["}),"goY",(0,e.jsx)(s.span,{className:"token punctuation",children:"]"})," ",(0,e.jsx)(s.span,{className:"token operator",children:"==="})," target",(0,e.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,e.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n            ",(0,e.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," moveCount ",(0,e.jsx)(s.span,{className:"token operator",children:"+"})," ",(0,e.jsx)(s.span,{className:"token number",children:"1"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"}),"\n          ",(0,e.jsx)(s.span,{className:"token punctuation",children:"}"})," ",(0,e.jsx)(s.span,{className:"token keyword control-flow",children:"else"})," ",(0,e.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n            queue",(0,e.jsx)(s.span,{className:"token punctuation",children:"."}),(0,e.jsx)(s.span,{className:"token method function property-access",children:"push"}),(0,e.jsx)(s.span,{className:"token punctuation",children:"("}),(0,e.jsx)(s.span,{className:"token punctuation",children:"["}),"goX",(0,e.jsx)(s.span,{className:"token punctuation",children:","})," goY",(0,e.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,e.jsx)(s.span,{className:"token punctuation",children:")"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"}),"\n            maps",(0,e.jsx)(s.span,{className:"token punctuation",children:"["}),"goX",(0,e.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,e.jsx)(s.span,{className:"token punctuation",children:"["}),"goY",(0,e.jsx)(s.span,{className:"token punctuation",children:"]"})," ",(0,e.jsx)(s.span,{className:"token operator",children:"="})," ",(0,e.jsx)(s.span,{className:"token string",children:'"X"'}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"}),"\n          ",(0,e.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n        ",(0,e.jsx)(s.span,{className:"token punctuation",children:"}"})," ",(0,e.jsx)(s.span,{className:"token keyword control-flow",children:"else"})," ",(0,e.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n          ",(0,e.jsx)(s.span,{className:"token keyword control-flow",children:"continue"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"}),"\n        ",(0,e.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n      ",(0,e.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n    ",(0,e.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n    moveCount",(0,e.jsx)(s.span,{className:"token operator",children:"++"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,e.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n\n  ",(0,e.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,e.jsx)(s.span,{className:"token operator",children:"-"}),(0,e.jsx)(s.span,{className:"token number",children:"1"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,e.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n\n",(0,e.jsx)(s.span,{className:"token keyword",children:"function"})," ",(0,e.jsx)(s.span,{className:"token function",children:"solution"}),(0,e.jsx)(s.span,{className:"token punctuation",children:"("}),(0,e.jsx)(s.span,{className:"token parameter",children:"maps"}),(0,e.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,e.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,e.jsx)(s.span,{className:"token keyword",children:"var"})," answer ",(0,e.jsx)(s.span,{className:"token operator",children:"="})," ",(0,e.jsx)(s.span,{className:"token number",children:"0"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,e.jsx)(s.span,{className:"token keyword",children:"var"})," findLever ",(0,e.jsx)(s.span,{className:"token operator",children:"="})," ",(0,e.jsx)(s.span,{className:"token operator",children:"-"}),(0,e.jsx)(s.span,{className:"token number",children:"1"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,e.jsx)(s.span,{className:"token keyword",children:"var"})," findExit ",(0,e.jsx)(s.span,{className:"token operator",children:"="})," ",(0,e.jsx)(s.span,{className:"token operator",children:"-"}),(0,e.jsx)(s.span,{className:"token number",children:"1"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n  ",(0,e.jsx)(s.span,{className:"token keyword",children:"var"})," start ",(0,e.jsx)(s.span,{className:"token operator",children:"="})," ",(0,e.jsx)(s.span,{className:"token punctuation",children:"["}),(0,e.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,e.jsx)(s.span,{className:"token keyword",children:"var"})," lever ",(0,e.jsx)(s.span,{className:"token operator",children:"="})," ",(0,e.jsx)(s.span,{className:"token punctuation",children:"["}),(0,e.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n  ",(0,e.jsx)(s.span,{className:"token comment",children:"// Find Start Point, Lever Point (Starting Point)"}),"\n  ",(0,e.jsx)(s.span,{className:"token keyword control-flow",children:"for"})," ",(0,e.jsx)(s.span,{className:"token punctuation",children:"("}),(0,e.jsx)(s.span,{className:"token keyword",children:"let"})," i ",(0,e.jsx)(s.span,{className:"token operator",children:"="})," ",(0,e.jsx)(s.span,{className:"token number",children:"0"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"})," i ",(0,e.jsx)(s.span,{className:"token operator",children:"<"})," maps",(0,e.jsx)(s.span,{className:"token punctuation",children:"."}),(0,e.jsx)(s.span,{className:"token property-access",children:"length"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"})," i",(0,e.jsx)(s.span,{className:"token operator",children:"++"}),(0,e.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,e.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,e.jsx)(s.span,{className:"token keyword control-flow",children:"for"})," ",(0,e.jsx)(s.span,{className:"token punctuation",children:"("}),(0,e.jsx)(s.span,{className:"token keyword",children:"let"})," k ",(0,e.jsx)(s.span,{className:"token operator",children:"="})," ",(0,e.jsx)(s.span,{className:"token number",children:"0"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"})," k ",(0,e.jsx)(s.span,{className:"token operator",children:"<"})," maps",(0,e.jsx)(s.span,{className:"token punctuation",children:"["}),"i",(0,e.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,e.jsx)(s.span,{className:"token punctuation",children:"."}),(0,e.jsx)(s.span,{className:"token property-access",children:"length"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"})," k",(0,e.jsx)(s.span,{className:"token operator",children:"++"}),(0,e.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,e.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n      ",(0,e.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,e.jsx)(s.span,{className:"token punctuation",children:"("}),"maps",(0,e.jsx)(s.span,{className:"token punctuation",children:"["}),"i",(0,e.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,e.jsx)(s.span,{className:"token punctuation",children:"["}),"k",(0,e.jsx)(s.span,{className:"token punctuation",children:"]"})," ",(0,e.jsx)(s.span,{className:"token operator",children:"==="})," ",(0,e.jsx)(s.span,{className:"token string",children:'"S"'}),(0,e.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,e.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n        start ",(0,e.jsx)(s.span,{className:"token operator",children:"="})," ",(0,e.jsx)(s.span,{className:"token punctuation",children:"["}),"i",(0,e.jsx)(s.span,{className:"token punctuation",children:","})," k",(0,e.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"}),"\n      ",(0,e.jsx)(s.span,{className:"token punctuation",children:"}"})," ",(0,e.jsx)(s.span,{className:"token keyword control-flow",children:"else"})," ",(0,e.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,e.jsx)(s.span,{className:"token punctuation",children:"("}),"maps",(0,e.jsx)(s.span,{className:"token punctuation",children:"["}),"i",(0,e.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,e.jsx)(s.span,{className:"token punctuation",children:"["}),"k",(0,e.jsx)(s.span,{className:"token punctuation",children:"]"})," ",(0,e.jsx)(s.span,{className:"token operator",children:"==="})," ",(0,e.jsx)(s.span,{className:"token string",children:'"L"'}),(0,e.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,e.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n        lever ",(0,e.jsx)(s.span,{className:"token operator",children:"="})," ",(0,e.jsx)(s.span,{className:"token punctuation",children:"["}),"i",(0,e.jsx)(s.span,{className:"token punctuation",children:","})," k",(0,e.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"}),"\n      ",(0,e.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n    ",(0,e.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n  ",(0,e.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n\n  ",(0,e.jsx)(s.span,{className:"token keyword",children:"let"})," mapsLever ",(0,e.jsx)(s.span,{className:"token operator",children:"="})," maps",(0,e.jsx)(s.span,{className:"token punctuation",children:"."}),(0,e.jsx)(s.span,{className:"token method function property-access",children:"map"}),(0,e.jsx)(s.span,{className:"token punctuation",children:"("}),(0,e.jsx)(s.span,{className:"token punctuation",children:"("}),(0,e.jsx)(s.span,{className:"token parameter",children:"item"}),(0,e.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,e.jsx)(s.span,{className:"token arrow operator",children:"=>"})," item",(0,e.jsx)(s.span,{className:"token punctuation",children:"."}),(0,e.jsx)(s.span,{className:"token method function property-access",children:"split"}),(0,e.jsx)(s.span,{className:"token punctuation",children:"("}),(0,e.jsx)(s.span,{className:"token string",children:'""'}),(0,e.jsx)(s.span,{className:"token punctuation",children:")"}),(0,e.jsx)(s.span,{className:"token punctuation",children:")"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,e.jsx)(s.span,{className:"token keyword",children:"let"})," mapsExit ",(0,e.jsx)(s.span,{className:"token operator",children:"="})," maps",(0,e.jsx)(s.span,{className:"token punctuation",children:"."}),(0,e.jsx)(s.span,{className:"token method function property-access",children:"map"}),(0,e.jsx)(s.span,{className:"token punctuation",children:"("}),(0,e.jsx)(s.span,{className:"token punctuation",children:"("}),(0,e.jsx)(s.span,{className:"token parameter",children:"item"}),(0,e.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,e.jsx)(s.span,{className:"token arrow operator",children:"=>"})," item",(0,e.jsx)(s.span,{className:"token punctuation",children:"."}),(0,e.jsx)(s.span,{className:"token method function property-access",children:"split"}),(0,e.jsx)(s.span,{className:"token punctuation",children:"("}),(0,e.jsx)(s.span,{className:"token string",children:'""'}),(0,e.jsx)(s.span,{className:"token punctuation",children:")"}),(0,e.jsx)(s.span,{className:"token punctuation",children:")"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  findLever ",(0,e.jsx)(s.span,{className:"token operator",children:"="})," ",(0,e.jsx)(s.span,{className:"token function",children:"findDistance"}),(0,e.jsx)(s.span,{className:"token punctuation",children:"("}),"mapsLever",(0,e.jsx)(s.span,{className:"token punctuation",children:","})," start",(0,e.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,e.jsx)(s.span,{className:"token string",children:'"L"'}),(0,e.jsx)(s.span,{className:"token punctuation",children:")"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  findExit ",(0,e.jsx)(s.span,{className:"token operator",children:"="})," ",(0,e.jsx)(s.span,{className:"token function",children:"findDistance"}),(0,e.jsx)(s.span,{className:"token punctuation",children:"("}),"mapsExit",(0,e.jsx)(s.span,{className:"token punctuation",children:","})," lever",(0,e.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,e.jsx)(s.span,{className:"token string",children:'"E"'}),(0,e.jsx)(s.span,{className:"token punctuation",children:")"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n  ",(0,e.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,e.jsx)(s.span,{className:"token punctuation",children:"("}),"findLever ",(0,e.jsx)(s.span,{className:"token operator",children:"!=="})," ",(0,e.jsx)(s.span,{className:"token operator",children:"-"}),(0,e.jsx)(s.span,{className:"token number",children:"1"})," ",(0,e.jsx)(s.span,{className:"token operator",children:"&&"})," findExit ",(0,e.jsx)(s.span,{className:"token operator",children:"!=="})," ",(0,e.jsx)(s.span,{className:"token operator",children:"-"}),(0,e.jsx)(s.span,{className:"token number",children:"1"}),(0,e.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,e.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    answer ",(0,e.jsx)(s.span,{className:"token operator",children:"="})," findLever ",(0,e.jsx)(s.span,{className:"token operator",children:"+"})," findExit",(0,e.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,e.jsx)(s.span,{className:"token punctuation",children:"}"})," ",(0,e.jsx)(s.span,{className:"token keyword control-flow",children:"else"})," ",(0,e.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    answer ",(0,e.jsx)(s.span,{className:"token operator",children:"="})," ",(0,e.jsx)(s.span,{className:"token operator",children:"-"}),(0,e.jsx)(s.span,{className:"token number",children:"1"}),(0,e.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,e.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n\n  ",(0,e.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," answer",(0,e.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,e.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,e.jsx)(s.h5,{id:"\ud480\uc774-\ubc29\uc2dd",children:"\ud480\uc774 \ubc29\uc2dd"}),"\n",(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsx)(s.li,{children:"\uc6b0\uc120\uc801\uc73c\ub85c start\ud3ec\uc778\ud2b8, lever\ud3ec\uc778\ud2b8\ub97c \ucc3e\uc544\uc57c \ud55c\ub2e4\uace0 \uc0dd\uac01\ud588\ub2e4."}),"\n",(0,e.jsx)(s.li,{children:"\uadf8\ub807\uac8c \uc7a1\uc740 start\ud3ec\uc778\ud2b8\uc640 lever\ud3ec\uc778\ud2b8\ub97c \uc0ac\uc6a9\ud558\uc5ec, start -> lever , lever -> end\uae4c\uc9c0\uc758 \ub450\ubc88\uc758 \ucd5c\ub2e8\uac70\ub9ac\ub97c \ucc3e\uc544, \ucc3e\uc740 \ub450\uac1c\uc758 \ucd5c\ub2e8\uac70\ub9ac\ub97c \ub354\ud574 \ucd5c\uc885\uac12\uc744 \ubc18\ud658\ud558\ub294 \uad6c\uc870\ub85c \uc124\uacc4\ud588\ub2e4."}),"\n",(0,e.jsx)(s.li,{children:"javascript\uc5d0\uc11c \ud568\uc218\ub85c \uc778\uc790\uac12\uc744 \ubcf4\ub0bc \uacbd\uc6b0, \ud30c\ub77c\ubbf8\ud130\uc758 \uac12\uc774 \ubcc0\uacbd\ub418\ub294 \ubb38\uc81c\uac00 \ubc1c\uacac\ud574, mapsLever, mapsExit \ub450\uac1c\uc758 map\uc744 \uad6c\uc131\ud558\uc5ec \uc9c4\ud589\ud558\uc600\ub2e4."}),"\n",(0,e.jsx)(s.li,{children:"\ucd5c\ub2e8\uac70\ub9ac\ub97c \uad6c\ud558\ub294 \uc54c\uace0\ub9ac\uc998\uc73c\ub85c BFS\ub97c \uc0ac\uc6a9\ud558\uc600\uc73c\uba70, queue\uc758 \uac12\uc774 \ubaa8\ub450 \uc5c6\uc5b4\uc9c8 \ub54c\uae4c\uc9c0 \ubb34\ud55c\ub8e8\ud504\ub97c \ub3cc\uba74\uc11c, \ub9cc\uc57d target\uc774 \ubc1c\uacac\ub418\uc5b4 \ud69f\uc218\ub97c return \ud558\uc5ec \ud0c8\ucd9c\ud558\uac70\ub098 \ubaa8\ub450 \uc5c6\uc5b4\uc84c\uc74c\uc5d0\ub3c4 target\uc744 \ubc1c\uacac\ud558\uc9c0 \ubabb\ud55c \uacbd\uc6b0\uc5d0\ub294 \ud0c8\ucd9c \ubd88\uac00\ub2a5\uc73c\ub85c \uac04\uc8fc\ud558\uc5ec -1\uc744 \ubc18\ud658\ud558\ub294 \ub85c\uc9c1\uc73c\ub85c \uc124\uacc4\ud588\ub2e4."}),"\n"]}),"\n",(0,e.jsx)(s.h5,{id:"\ub290\ub080-\uc810",children:"\ub290\ub080 \uc810"}),"\n",(0,e.jsx)(s.p,{children:"\ucf54\ub529\ud14c\uc2a4\ud2b8 lv2\ub97c \uc774\ubc88\uc5d0 \ubcf8\uaca9\uc801\uc73c\ub85c \ucc98\uc74c \uc811\ud574\ubd24\ub294\ub370, \ud655\uc2e4\ud788 \uc790\ub8cc\uad6c\uc870\uc758 \uad6c\ud604 \ubc29\ubc95\uc5d0 \ub300\ud574 \uacf5\ubd80 \ubc0f \uc5f0\uad6c\ud560 \ud544\uc694\uc131\uc744 \ub290\uaf08\ub2e4. \ud2b9\ud788 \uc774\ubc88 \ubb38\uc81c\ub294 BFS\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc73c\uba74 \ud0c0\uc784\uc544\uc6c3\uc73c\ub85c \uc2e4\ud328\ub97c \ub72c \uac83\uc744 \ud655\uc778\ud558\uc5ec, \uc774\ub97c \ud574\uacb0\ud558\uace0\uc790 javascript\ub85c BFS\ub97c \uacf5\ubd80 \ubc0f \uad6c\ud604\ud558\ub294 \ub370\uc5d0 \uc9d1\uc911\uc744 \ud558\uc5ec \ud574\uacb0\ud558\uc600\ub2e4. \uc774\ub97c \ud1b5\ud574 \uc790\ub8cc\uad6c\uc870 \uacf5\ubd80\uc758 \ud544\uc694\uc131\uc744 \ub290\uaf08\uace0, \uc774\ub97c \ud65c\uc6a9\ud558\uba74 \ud611\uc5c5\uc5d0\uc11c \uc131\ub2a5 \uac1c\uc120\uc5d0 \ud070 \ub3c4\uc6c0\uc744 \uc904 \uac83\uc73c\ub85c \uc0dd\uac01\uc774 \ub418\uc5c8\ub2e4."})]})}function u(n={}){const{wrapper:s}={...(0,c.R)(),...n.components};return s?(0,e.jsx)(s,{...n,children:(0,e.jsx)(i,{...n})}):i(n)}},28453:(n,s,a)=>{a.d(s,{R:()=>o,x:()=>l});var e=a(96540);const c={},t=e.createContext(c);function o(n){const s=e.useContext(t);return e.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function l(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:o(n.components),e.createElement(t.Provider,{value:s},n.children)}}}]);