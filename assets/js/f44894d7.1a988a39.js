"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[7201],{94974:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>i,contentTitle:()=>t,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var a=e(74848),c=e(28453);const l={slug:"/target-number"},t="\ud0c0\uac9f \ub118\ubc84 \ubb38\uc81c",r={id:"\ucf54\ub529\ud14c\uc2a4\ud2b8 \uc900\ube44/DFS , BFS/\ud0c0\ucf13 \ub118\ubc84",title:"\ud0c0\ucf13 \ub118\ubc84",description:"\uc791\uc131\uc77c : 2024.11.04",source:"@site/docs/20. \ucf54\ub529\ud14c\uc2a4\ud2b8 \uc900\ube44/200500. DFS , BFS/200509. \ud0c0\ucf13 \ub118\ubc84.md",sourceDirName:"20. \ucf54\ub529\ud14c\uc2a4\ud2b8 \uc900\ube44/200500. DFS , BFS",slug:"/target-number",permalink:"/zora_story/docs/target-number",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:200509,frontMatter:{slug:"/target-number"},sidebar:"studySidebar",previous:{title:"\uc5ec\ud589 \uacbd\ub85c",permalink:"/zora_story/docs/travel-route"},next:{title:"\ud53c\ub85c\ub3c4",permalink:"/zora_story/docs/fatigue-level"}},i={},o=[{value:"\ubb38\uc81c \uc124\uba85",id:"\ubb38\uc81c-\uc124\uba85",level:2},{value:"\uc608\uc2dc",id:"\uc608\uc2dc",level:3},{value:"\uc81c\ud55c \uc870\uac74",id:"\uc81c\ud55c-\uc870\uac74",level:2},{value:"\ud574\uacb0 \ucf54\ub4dc",id:"\ud574\uacb0-\ucf54\ub4dc",level:2},{value:"\uc54c\uace0\ub9ac\uc998 \uc124\uba85",id:"\uc54c\uace0\ub9ac\uc998-\uc124\uba85",level:2},{value:"\ud575\uc2ec \ubb38\ubc95 \uc694\uc18c",id:"\ud575\uc2ec-\ubb38\ubc95-\uc694\uc18c",level:2},{value:"\uc2dc\uac04 \ubcf5\uc7a1\ub3c4",id:"\uc2dc\uac04-\ubcf5\uc7a1\ub3c4",level:2},{value:"\uacf5\uac04 \ubcf5\uc7a1\ub3c4",id:"\uacf5\uac04-\ubcf5\uc7a1\ub3c4",level:2}];function d(n){const s={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...(0,c.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"\uc791\uc131\uc77c : 2024.11.04"}),"\n"]}),"\n",(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"\ud0c0\uac9f-\ub118\ubc84-\ubb38\uc81c",children:"\ud0c0\uac9f \ub118\ubc84 \ubb38\uc81c"})}),"\n",(0,a.jsx)(s.h2,{id:"\ubb38\uc81c-\uc124\uba85",children:"\ubb38\uc81c \uc124\uba85"}),"\n",(0,a.jsx)(s.p,{children:"n\uac1c\uc758 \uc74c\uc774 \uc544\ub2cc \uc815\uc218\ub85c \uc774\ub8e8\uc5b4\uc9c4 \uc218\uc5f4\uc774 \uc8fc\uc5b4\uc84c\uc744 \ub54c, \uc22b\uc790\ub4e4\uc744 \uc21c\uc11c\ub300\ub85c \ub354\ud558\uac70\ub098 \ube7c\uc11c \ud0c0\uac9f \ub118\ubc84\ub97c \ub9cc\ub4dc\ub294 \ubaa8\ub4e0 \ubc29\ubc95\uc758 \uc218\ub97c \uad6c\ud558\ub294 \ubb38\uc81c\uc785\ub2c8\ub2e4."}),"\n",(0,a.jsx)(s.h3,{id:"\uc608\uc2dc",children:"\uc608\uc2dc"}),"\n",(0,a.jsx)(s.p,{children:"numbers = [1, 1, 1, 1, 1], target = 3\uc778 \uacbd\uc6b0\uc758 \ubc29\ubc95\ub4e4:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"-1+1+1+1+1 = 3\n+1-1+1+1+1 = 3\n+1+1-1+1+1 = 3\n+1+1+1-1+1 = 3\n+1+1+1+1-1 = 3\n"})}),"\n",(0,a.jsx)(s.p,{children:"\ucd1d 5\uac00\uc9c0 \ubc29\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,a.jsx)(s.h2,{id:"\uc81c\ud55c-\uc870\uac74",children:"\uc81c\ud55c \uc870\uac74"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"numbers \ubc30\uc5f4 \uc81c\ud55c"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"\uc22b\uc790 \uac1c\uc218: 2\uac1c \uc774\uc0c1 20\uac1c \uc774\ud558"}),"\n",(0,a.jsx)(s.li,{children:"\uac01 \uc22b\uc790\uc758 \ubc94\uc704: 1 \uc774\uc0c1 50 \uc774\ud558\uc758 \uc790\uc5f0\uc218"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"target \uc81c\ud55c"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"\ubc94\uc704: 1 \uc774\uc0c1 1000 \uc774\ud558\uc758 \uc790\uc5f0\uc218"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"\ud574\uacb0-\ucf54\ub4dc",children:"\ud574\uacb0 \ucf54\ub4dc"}),"\n",(0,a.jsx)(s.pre,{className:"language-javascript",children:(0,a.jsxs)(s.code,{className:"language-javascript",children:[(0,a.jsx)(s.span,{className:"token keyword",children:"function"})," ",(0,a.jsx)(s.span,{className:"token function",children:"solution"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsxs)(s.span,{className:"token parameter",children:["numbers",(0,a.jsx)(s.span,{className:"token punctuation",children:","})," target"]}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,a.jsx)(s.span,{className:"token keyword",children:"let"})," answer ",(0,a.jsx)(s.span,{className:"token operator",children:"="})," ",(0,a.jsx)(s.span,{className:"token number",children:"0"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,a.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,a.jsx)(s.span,{className:"token function-variable function",children:"dfs"})," ",(0,a.jsx)(s.span,{className:"token operator",children:"="})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsxs)(s.span,{className:"token parameter",children:["num",(0,a.jsx)(s.span,{className:"token punctuation",children:","})," index"]}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,a.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"index ",(0,a.jsx)(s.span,{className:"token operator",children:"=="})," numbers",(0,a.jsx)(s.span,{className:"token punctuation",children:"."}),(0,a.jsx)(s.span,{className:"token property-access",children:"length"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n      ",(0,a.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"num ",(0,a.jsx)(s.span,{className:"token operator",children:"=="})," target",(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," answer",(0,a.jsx)(s.span,{className:"token operator",children:"++"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n      ",(0,a.jsx)(s.span,{className:"token keyword control-flow",children:"return"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n    ",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n    ",(0,a.jsx)(s.span,{className:"token function",children:"dfs"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"num ",(0,a.jsx)(s.span,{className:"token operator",children:"+"})," numbers",(0,a.jsx)(s.span,{className:"token punctuation",children:"["}),"index",(0,a.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","})," index ",(0,a.jsx)(s.span,{className:"token operator",children:"+"})," ",(0,a.jsx)(s.span,{className:"token number",children:"1"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n    ",(0,a.jsx)(s.span,{className:"token function",children:"dfs"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"num ",(0,a.jsx)(s.span,{className:"token operator",children:"-"})," numbers",(0,a.jsx)(s.span,{className:"token punctuation",children:"["}),"index",(0,a.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","})," index ",(0,a.jsx)(s.span,{className:"token operator",children:"+"})," ",(0,a.jsx)(s.span,{className:"token number",children:"1"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,a.jsx)(s.span,{className:"token function",children:"dfs"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token number",children:"0"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(s.span,{className:"token number",children:"0"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,a.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," answer",(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,a.jsx)(s.h2,{id:"\uc54c\uace0\ub9ac\uc998-\uc124\uba85",children:"\uc54c\uace0\ub9ac\uc998 \uc124\uba85"}),"\n",(0,a.jsx)(s.p,{children:"\uc774 \ubb38\uc81c\ub294 DFS(\uae4a\uc774 \uc6b0\uc120 \ud0d0\uc0c9)\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud574\uacb0\ud569\ub2c8\ub2e4:"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"DFS \ud568\uc218 \uc815\uc758"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\ub9e4\uac1c\ubcc0\uc218","\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"num: \ud604\uc7ac\uae4c\uc9c0\uc758 \uacc4\uc0b0 \uacb0\uacfc"}),"\n",(0,a.jsx)(s.li,{children:"index: \ud604\uc7ac \ucc98\ub9ac \uc911\uc778 \uc22b\uc790\uc758 \uc778\ub371\uc2a4"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"\uc885\ub8cc \uc870\uac74"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"index\uac00 numbers \ubc30\uc5f4\uc758 \uae38\uc774\uc640 \uac19\uc544\uc84c\uc744 \ub54c"}),"\n",(0,a.jsx)(s.li,{children:"\ud604\uc7ac\uae4c\uc9c0\uc758 \uacc4\uc0b0 \uacb0\uacfc(num)\uac00 target\uacfc \uac19\uc73c\uba74 answer \uc99d\uac00"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"\uc7ac\uadc0 \ud638\ucd9c"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"\ud604\uc7ac \uc22b\uc790\ub97c \ub354\ud558\ub294 \uacbd\uc6b0\uc640 \ube7c\ub294 \uacbd\uc6b0 \ub450 \uac00\uc9c0\ub85c \ubd84\uae30"}),"\n",(0,a.jsx)(s.li,{children:"\uac01\uac01\uc758 \uacbd\uc6b0\uc5d0 \ub300\ud574 \ub2e4\uc74c \uc778\ub371\uc2a4\ub85c \uc7ac\uadc0 \ud638\ucd9c"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"\ud575\uc2ec-\ubb38\ubc95-\uc694\uc18c",children:"\ud575\uc2ec \ubb38\ubc95 \uc694\uc18c"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsx)(s.li,{children:"\ud654\uc0b4\ud45c \ud568\uc218\ub97c \uc774\uc6a9\ud55c DFS \uad6c\ud604"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{className:"language-javascript",children:(0,a.jsxs)(s.code,{className:"language-javascript",children:[(0,a.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,a.jsx)(s.span,{className:"token function-variable function",children:"dfs"})," ",(0,a.jsx)(s.span,{className:"token operator",children:"="})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsxs)(s.span,{className:"token parameter",children:["num",(0,a.jsx)(s.span,{className:"token punctuation",children:","})," index"]}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,a.jsx)(s.span,{className:"token comment",children:"// \ud568\uc218 \ub0b4\uc6a9"}),"\n",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,a.jsxs)(s.ol,{start:"2",children:["\n",(0,a.jsx)(s.li,{children:"\uc7ac\uadc0 \ud638\ucd9c\uc744 \ud1b5\ud55c \ubaa8\ub4e0 \uacbd\uc6b0\uc758 \uc218 \ud0d0\uc0c9"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{className:"language-javascript",children:(0,a.jsxs)(s.code,{className:"language-javascript",children:[(0,a.jsx)(s.span,{className:"token function",children:"dfs"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"num ",(0,a.jsx)(s.span,{className:"token operator",children:"+"})," numbers",(0,a.jsx)(s.span,{className:"token punctuation",children:"["}),"index",(0,a.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","})," index ",(0,a.jsx)(s.span,{className:"token operator",children:"+"})," ",(0,a.jsx)(s.span,{className:"token number",children:"1"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(s.span,{className:"token function",children:"dfs"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"num ",(0,a.jsx)(s.span,{className:"token operator",children:"-"})," numbers",(0,a.jsx)(s.span,{className:"token punctuation",children:"["}),"index",(0,a.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","})," index ",(0,a.jsx)(s.span,{className:"token operator",children:"+"})," ",(0,a.jsx)(s.span,{className:"token number",children:"1"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,a.jsxs)(s.ol,{start:"3",children:["\n",(0,a.jsx)(s.li,{children:"\uc870\uac74\ubb38\uc744 \ud1b5\ud55c \ubaa9\ud45c\uac12 \ub3c4\ub2ec \ud655\uc778"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{className:"language-javascript",children:(0,a.jsxs)(s.code,{className:"language-javascript",children:[(0,a.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"num ",(0,a.jsx)(s.span,{className:"token operator",children:"=="})," target",(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," answer",(0,a.jsx)(s.span,{className:"token operator",children:"++"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,a.jsx)(s.h2,{id:"\uc2dc\uac04-\ubcf5\uc7a1\ub3c4",children:"\uc2dc\uac04 \ubcf5\uc7a1\ub3c4"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"O(2^n): \uac01 \uc22b\uc790\ub9c8\ub2e4 \ub354\ud558\uae30/\ube7c\uae30 \ub450 \uac00\uc9c0 \uacbd\uc6b0\ub97c \uace0\ub824"}),"\n",(0,a.jsx)(s.li,{children:"n\uc740 numbers \ubc30\uc5f4\uc758 \uae38\uc774"}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"\uacf5\uac04-\ubcf5\uc7a1\ub3c4",children:"\uacf5\uac04 \ubcf5\uc7a1\ub3c4"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"O(n): \uc7ac\uadc0 \ud638\ucd9c\ub85c \uc778\ud55c \ucf5c \uc2a4\ud0dd \uc0ac\uc6a9"}),"\n",(0,a.jsx)(s.li,{children:"n\uc740 numbers \ubc30\uc5f4\uc758 \uae38\uc774"}),"\n"]})]})}function p(n={}){const{wrapper:s}={...(0,c.R)(),...n.components};return s?(0,a.jsx)(s,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},28453:(n,s,e)=>{e.d(s,{R:()=>t,x:()=>r});var a=e(96540);const c={},l=a.createContext(c);function t(n){const s=a.useContext(l);return a.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function r(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:t(n.components),a.createElement(l.Provider,{value:s},n.children)}}}]);