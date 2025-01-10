"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[9111],{708:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"React.js/Zustand vs Redux","title":"Zustand vs Redux","description":"\uc791\uc131\uc77c : 2025.01.08","source":"@site/docs/08. React.js/089906. Zustand vs Redux.md","sourceDirName":"08. React.js","slug":"/React.js/Zustand vs Redux","permalink":"/zora_story/docs/React.js/Zustand vs Redux","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":89906,"frontMatter":{},"sidebar":"studySidebar","previous":{"title":"React Query\uc640 Redux\uc758 \ud611\ub825 \uad00\uacc4","permalink":"/zora_story/docs/React.js/React Query\uc640 Redux\uc758 \ud611\ub825 \uad00\uacc4"},"next":{"title":"key\uc5d0 \ubc30\uc5f4 \uc778\ub371\uc2a4\ub97c \uc0ac\uc6a9\ud558\uba74 \uc548\ub418\ub294 \uc774\uc720","permalink":"/zora_story/docs/React.js/key\uc5d0 \ubc30\uc5f4 \uc778\ub371\uc2a4\ub97c \uc0ac\uc6a9\ud558\uba74 \uc548\ub418\ub294 \uc774\uc720"}}');var t=e(74848),c=e(28453);const o={},l=void 0,r={},p=[{value:"\uae30\ubcf8 \ucee8\uc149\uacfc \ucca0\ud559",id:"\uae30\ubcf8-\ucee8\uc149\uacfc-\ucca0\ud559",level:3},{value:"\uc8fc\uc694 \ucc28\uc774\uc810",id:"\uc8fc\uc694-\ucc28\uc774\uc810",level:3},{value:"\uc5b8\uc81c \uc5b4\ub5a4 \uac83\uc744 \uc120\ud0dd\ud574\uc57c \ud560\uae4c?",id:"\uc5b8\uc81c-\uc5b4\ub5a4-\uac83\uc744-\uc120\ud0dd\ud574\uc57c-\ud560\uae4c",level:3},{value:"\uc2e4\uc81c \uc0ac\uc6a9 \uc608\uc2dc",id:"\uc2e4\uc81c-\uc0ac\uc6a9-\uc608\uc2dc",level:3}];function i(n){const s={blockquote:"blockquote",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,c.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"\uc791\uc131\uc77c : 2025.01.08"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"\uae30\ubcf8-\ucee8\uc149\uacfc-\ucca0\ud559",children:"\uae30\ubcf8 \ucee8\uc149\uacfc \ucca0\ud559"}),"\n",(0,t.jsx)(s.p,{children:"Redux\ub294 \uc804\ud1b5\uc801\uc778 Flux \uc544\ud0a4\ud14d\ucc98\ub97c \ub530\ub974\uba70, \uc608\uce21 \uac00\ub2a5\ud55c \uc0c1\ud0dc \uad00\ub9ac\ub97c \uc704\ud574 \uc5c4\uaca9\ud55c \uaddc\uce59\uc744 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ubc18\uba74 Zustand\ub294 \ub354 \ud604\ub300\uc801\uc774\uace0 \uc720\uc5f0\ud55c \uc811\uadfc \ubc29\uc2dd\uc744 \ucde8\ud569\ub2c8\ub2e4. \ucf54\ub4dc\ub85c \ube44\uad50\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Redux \uc608\uc2dc:"})}),"\n",(0,t.jsx)(s.pre,{className:"language-javascript",children:(0,t.jsxs)(s.code,{className:"language-javascript",children:[(0,t.jsx)(s.span,{className:"token comment",children:"// Redux - \uc0c1\ud0dc \uad00\ub9ac"}),"\n",(0,t.jsx)(s.span,{className:"token keyword",children:"const"})," initialState ",(0,t.jsx)(s.span,{className:"token operator",children:"="})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"{"})," ",(0,t.jsx)(s.span,{className:"token literal-property property",children:"count"}),(0,t.jsx)(s.span,{className:"token operator",children:":"})," ",(0,t.jsx)(s.span,{className:"token number",children:"0"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n",(0,t.jsx)(s.span,{className:"token comment",children:"// \ub9ac\ub4c0\uc11c \uc815\uc758"}),"\n",(0,t.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,t.jsx)(s.span,{className:"token function-variable function",children:"reducer"})," ",(0,t.jsx)(s.span,{className:"token operator",children:"="})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsxs)(s.span,{className:"token parameter",children:["state ",(0,t.jsx)(s.span,{className:"token operator",children:"="})," initialState",(0,t.jsx)(s.span,{className:"token punctuation",children:","})," action"]}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,t.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,t.jsx)(s.span,{className:"token keyword control-flow",children:"switch"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),"action",(0,t.jsx)(s.span,{className:"token punctuation",children:"."}),(0,t.jsx)(s.span,{className:"token property-access",children:"type"}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,t.jsx)(s.span,{className:"token keyword",children:"case"})," ",(0,t.jsx)(s.span,{className:"token string",children:"'INCREMENT'"}),(0,t.jsx)(s.span,{className:"token operator",children:":"}),"\n      ",(0,t.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"{"})," ",(0,t.jsx)(s.span,{className:"token literal-property property",children:"count"}),(0,t.jsx)(s.span,{className:"token operator",children:":"})," state",(0,t.jsx)(s.span,{className:"token punctuation",children:"."}),(0,t.jsx)(s.span,{className:"token property-access",children:"count"})," ",(0,t.jsx)(s.span,{className:"token operator",children:"+"})," ",(0,t.jsx)(s.span,{className:"token number",children:"1"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n    ",(0,t.jsx)(s.span,{className:"token keyword module",children:"default"}),(0,t.jsx)(s.span,{className:"token operator",children:":"}),"\n      ",(0,t.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," state",(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n",(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n",(0,t.jsx)(s.span,{className:"token comment",children:"// \uc2a4\ud1a0\uc5b4 \uc0dd\uc131"}),"\n",(0,t.jsx)(s.span,{className:"token keyword",children:"const"})," store ",(0,t.jsx)(s.span,{className:"token operator",children:"="})," ",(0,t.jsx)(s.span,{className:"token function",children:"createStore"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),"reducer",(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n",(0,t.jsx)(s.span,{className:"token comment",children:"// \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc0ac\uc6a9"}),"\n",(0,t.jsx)(s.span,{className:"token keyword",children:"function"})," ",(0,t.jsx)(s.span,{className:"token function",children:(0,t.jsx)(s.span,{className:"token maybe-class-name",children:"Counter"})}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,t.jsx)(s.span,{className:"token keyword",children:"const"})," count ",(0,t.jsx)(s.span,{className:"token operator",children:"="})," ",(0,t.jsx)(s.span,{className:"token function",children:"useSelector"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token parameter",children:"state"})," ",(0,t.jsx)(s.span,{className:"token arrow operator",children:"=>"})," state",(0,t.jsx)(s.span,{className:"token punctuation",children:"."}),(0,t.jsx)(s.span,{className:"token property-access",children:"count"}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,t.jsx)(s.span,{className:"token keyword",children:"const"})," dispatch ",(0,t.jsx)(s.span,{className:"token operator",children:"="})," ",(0,t.jsx)(s.span,{className:"token function",children:"useDispatch"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n  ",(0,t.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),"\n    ",(0,t.jsx)(s.span,{className:"token operator",children:"<"}),"button onClick",(0,t.jsx)(s.span,{className:"token operator",children:"="}),(0,t.jsx)(s.span,{className:"token punctuation",children:"{"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,t.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,t.jsx)(s.span,{className:"token function",children:"dispatch"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token punctuation",children:"{"})," ",(0,t.jsx)(s.span,{className:"token literal-property property",children:"type"}),(0,t.jsx)(s.span,{className:"token operator",children:":"})," ",(0,t.jsx)(s.span,{className:"token string",children:"'INCREMENT'"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,t.jsx)(s.span,{className:"token operator",children:">"}),"\n      ",(0,t.jsx)(s.span,{className:"token literal-property property",children:"Count"}),(0,t.jsx)(s.span,{className:"token operator",children:":"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"{"}),"count",(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n    ",(0,t.jsx)(s.span,{className:"token operator",children:"<"}),(0,t.jsx)(s.span,{className:"token operator",children:"/"}),"button",(0,t.jsx)(s.span,{className:"token operator",children:">"}),"\n  ",(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Zustand \uc608\uc2dc:"})}),"\n",(0,t.jsx)(s.pre,{className:"language-javascript",children:(0,t.jsxs)(s.code,{className:"language-javascript",children:[(0,t.jsx)(s.span,{className:"token comment",children:"// Zustand - \uc0c1\ud0dc \uad00\ub9ac"}),"\n",(0,t.jsx)(s.span,{className:"token keyword",children:"const"})," useStore ",(0,t.jsx)(s.span,{className:"token operator",children:"="})," ",(0,t.jsx)(s.span,{className:"token function",children:"create"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token parameter",children:(0,t.jsx)(s.span,{className:"token keyword",children:"set"})}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,t.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,t.jsx)(s.span,{className:"token literal-property property",children:"count"}),(0,t.jsx)(s.span,{className:"token operator",children:":"})," ",(0,t.jsx)(s.span,{className:"token number",children:"0"}),(0,t.jsx)(s.span,{className:"token punctuation",children:","}),"\n  ",(0,t.jsx)(s.span,{className:"token function-variable function",children:"increment"}),(0,t.jsx)(s.span,{className:"token operator",children:":"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,t.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,t.jsx)(s.span,{className:"token function",children:"set"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token parameter",children:"state"}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,t.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token punctuation",children:"{"})," ",(0,t.jsx)(s.span,{className:"token literal-property property",children:"count"}),(0,t.jsx)(s.span,{className:"token operator",children:":"})," state",(0,t.jsx)(s.span,{className:"token punctuation",children:"."}),(0,t.jsx)(s.span,{className:"token property-access",children:"count"})," ",(0,t.jsx)(s.span,{className:"token operator",children:"+"})," ",(0,t.jsx)(s.span,{className:"token number",children:"1"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),"\n",(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n",(0,t.jsx)(s.span,{className:"token comment",children:"// \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc0ac\uc6a9"}),"\n",(0,t.jsx)(s.span,{className:"token keyword",children:"function"})," ",(0,t.jsx)(s.span,{className:"token function",children:(0,t.jsx)(s.span,{className:"token maybe-class-name",children:"Counter"})}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,t.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"{"})," count",(0,t.jsx)(s.span,{className:"token punctuation",children:","})," increment ",(0,t.jsx)(s.span,{className:"token punctuation",children:"}"})," ",(0,t.jsx)(s.span,{className:"token operator",children:"="})," ",(0,t.jsx)(s.span,{className:"token function",children:"useStore"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n  ",(0,t.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),"\n    ",(0,t.jsx)(s.span,{className:"token operator",children:"<"}),"button onClick",(0,t.jsx)(s.span,{className:"token operator",children:"="}),(0,t.jsx)(s.span,{className:"token punctuation",children:"{"}),"increment",(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,t.jsx)(s.span,{className:"token operator",children:">"}),"\n      ",(0,t.jsx)(s.span,{className:"token literal-property property",children:"Count"}),(0,t.jsx)(s.span,{className:"token operator",children:":"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"{"}),"count",(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n    ",(0,t.jsx)(s.span,{className:"token operator",children:"<"}),(0,t.jsx)(s.span,{className:"token operator",children:"/"}),"button",(0,t.jsx)(s.span,{className:"token operator",children:">"}),"\n  ",(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,t.jsx)(s.h3,{id:"\uc8fc\uc694-\ucc28\uc774\uc810",children:"\uc8fc\uc694 \ucc28\uc774\uc810"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"\ubcf5\uc7a1\uc131\uacfc \ubcf4\uc77c\ub7ec\ud50c\ub808\uc774\ud2b8"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Redux\ub294 \uc561\uc158, \ub9ac\ub4c0\uc11c, \ub514\uc2a4\ud328\uce58 \ub4f1 \uc5ec\ub7ec \uac1c\ub150\uc744 \uc774\ud574\ud574\uc57c \ud558\uace0, \uae30\ubcf8 \uc124\uc815\uc5d0 \ub9ce\uc740 \ucf54\ub4dc\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(s.li,{children:"Zustand\ub294 \ud6e8\uc52c \ub2e8\uc21c\ud558\uba70, React Hooks\ucc98\ub7fc \uc9c1\uad00\uc801\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"\uc131\ub2a5\uacfc \ucd5c\uc801\ud654"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Redux\ub294 \uc0c1\ud0dc\uac00 \ubcc0\uacbd\ub420 \ub54c\ub9c8\ub2e4 \uc804\uccb4 \uc2a4\ud1a0\uc5b4\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\ubbc0\ub85c, \uc131\ub2a5 \ucd5c\uc801\ud654\ub97c \uc704\ud574 \ucd94\uac00\uc801\uc778 \uc791\uc5c5\uc774 \ud544\uc694\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(s.li,{children:"Zustand\ub294 \uc790\ub3d9 \uba54\ubaa8\uc774\uc81c\uc774\uc158\uacfc \uc138\ubc00\ud55c \uc5c5\ub370\uc774\ud2b8\ub97c \uc9c0\uc6d0\ud558\uc5ec \uae30\ubcf8\uc801\uc73c\ub85c \ub354 \ub098\uc740 \uc131\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"\ubbf8\ub4e4\uc6e8\uc5b4\uc640 \ud655\uc7a5\uc131"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{className:"language-javascript",children:(0,t.jsxs)(s.code,{className:"language-javascript",children:[(0,t.jsx)(s.span,{className:"token comment",children:"// Redux \ubbf8\ub4e4\uc6e8\uc5b4 \uc608\uc2dc"}),"\n",(0,t.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,t.jsx)(s.span,{className:"token function-variable function",children:"logger"})," ",(0,t.jsx)(s.span,{className:"token operator",children:"="})," ",(0,t.jsx)(s.span,{className:"token parameter",children:"store"})," ",(0,t.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,t.jsx)(s.span,{className:"token parameter",children:"next"})," ",(0,t.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,t.jsx)(s.span,{className:"token parameter",children:"action"})," ",(0,t.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,t.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"."}),(0,t.jsx)(s.span,{className:"token method function property-access",children:"log"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token string",children:"'dispatching'"}),(0,t.jsx)(s.span,{className:"token punctuation",children:","})," action",(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,t.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,t.jsx)(s.span,{className:"token function",children:"next"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),"action",(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n",(0,t.jsx)(s.span,{className:"token comment",children:"// Zustand \ubbf8\ub4e4\uc6e8\uc5b4 \uc608\uc2dc"}),"\n",(0,t.jsx)(s.span,{className:"token keyword",children:"const"})," useStore ",(0,t.jsx)(s.span,{className:"token operator",children:"="})," ",(0,t.jsx)(s.span,{className:"token function",children:"create"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),"\n  ",(0,t.jsx)(s.span,{className:"token function",children:"devtools"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),"\n    ",(0,t.jsx)(s.span,{className:"token function",children:"persist"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),"\n      ",(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token parameter",children:(0,t.jsx)(s.span,{className:"token keyword",children:"set"})}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,t.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n        ",(0,t.jsx)(s.span,{className:"token literal-property property",children:"count"}),(0,t.jsx)(s.span,{className:"token operator",children:":"})," ",(0,t.jsx)(s.span,{className:"token number",children:"0"}),(0,t.jsx)(s.span,{className:"token punctuation",children:","}),"\n        ",(0,t.jsx)(s.span,{className:"token function-variable function",children:"increment"}),(0,t.jsx)(s.span,{className:"token operator",children:":"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,t.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,t.jsx)(s.span,{className:"token function",children:"set"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token parameter",children:"state"}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,t.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token punctuation",children:"{"})," ",(0,t.jsx)(s.span,{className:"token literal-property property",children:"count"}),(0,t.jsx)(s.span,{className:"token operator",children:":"})," state",(0,t.jsx)(s.span,{className:"token punctuation",children:"."}),(0,t.jsx)(s.span,{className:"token property-access",children:"count"})," ",(0,t.jsx)(s.span,{className:"token operator",children:"+"})," ",(0,t.jsx)(s.span,{className:"token number",children:"1"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),"\n      ",(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),(0,t.jsx)(s.span,{className:"token punctuation",children:","}),"\n      ",(0,t.jsx)(s.span,{className:"token punctuation",children:"{"})," ",(0,t.jsx)(s.span,{className:"token literal-property property",children:"name"}),(0,t.jsx)(s.span,{className:"token operator",children:":"})," ",(0,t.jsx)(s.span,{className:"token string",children:"'counter-storage'"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n    ",(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),"\n  ",(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),"\n",(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,t.jsxs)(s.ol,{start:"4",children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"\ud559\uc2b5 \uace1\uc120"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Redux\ub294 \uc0c1\ub300\uc801\uc73c\ub85c \uac00\ud30c\ub978 \ud559\uc2b5 \uace1\uc120\uc744 \uac00\uc9c0\uace0 \uc788\uc73c\uba70, \uc5ec\ub7ec \uac1c\ub150\uc744 \uc774\ud574\ud574\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(s.li,{children:"Zustand\ub294 React Hooks\uc640 \uc720\uc0ac\ud55c API\ub97c \uc81c\uacf5\ud558\uc5ec \ud559\uc2b5\uc774 \uc27d\uc2b5\ub2c8\ub2e4."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"\uc5b8\uc81c-\uc5b4\ub5a4-\uac83\uc744-\uc120\ud0dd\ud574\uc57c-\ud560\uae4c",children:"\uc5b8\uc81c \uc5b4\ub5a4 \uac83\uc744 \uc120\ud0dd\ud574\uc57c \ud560\uae4c?"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Redux\ub97c \uc120\ud0dd\ud558\uba74 \uc88b\uc740 \uacbd\uc6b0:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"\ud070 \uaddc\ubaa8\uc758 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ubcf5\uc7a1\ud55c \uc0c1\ud0dc \ub85c\uc9c1\uc774 \ud544\uc694\ud560 \ub54c"}),"\n",(0,t.jsx)(s.li,{children:"\uc5c4\uaca9\ud55c \uaddc\uce59\uacfc \uc608\uce21 \uac00\ub2a5\ud55c \uc0c1\ud0dc \ud750\ub984\uc774 \uc911\uc694\ud560 \ub54c"}),"\n",(0,t.jsx)(s.li,{children:"\uae30\uc874\uc758 Redux \uc0dd\ud0dc\uacc4\uc640 \ub3c4\uad6c\ub4e4\uc744 \ud65c\uc6a9\ud558\uace0 \uc2f6\uc744 \ub54c"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Zustand\ub97c \uc120\ud0dd\ud558\uba74 \uc88b\uc740 \uacbd\uc6b0:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"\uc791\uac70\ub098 \uc911\uac04 \uaddc\ubaa8\uc758 \ud504\ub85c\uc81d\ud2b8"}),"\n",(0,t.jsx)(s.li,{children:"\ube60\ub978 \uac1c\ubc1c\uacfc \uac04\ub2e8\ud55c \uc124\uc815\uc774 \ud544\uc694\ud560 \ub54c"}),"\n",(0,t.jsx)(s.li,{children:"\uc131\ub2a5\uc774 \uc911\uc694\ud558\uace0 \ubcf4\uc77c\ub7ec\ud50c\ub808\uc774\ud2b8\ub97c \ucd5c\uc18c\ud654\ud558\uace0 \uc2f6\uc744 \ub54c"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"\uc2e4\uc81c-\uc0ac\uc6a9-\uc608\uc2dc",children:"\uc2e4\uc81c \uc0ac\uc6a9 \uc608\uc2dc"}),"\n",(0,t.jsx)(s.p,{children:"\uac04\ub2e8\ud55c \ud22c\ub450 \ub9ac\uc2a4\ud2b8\ub97c \ub9cc\ub4e4\uc5b4 \ub450 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc758 \ucc28\uc774\ub97c \ubcf4\uc5ec\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Redux \ubc84\uc804:"})}),"\n",(0,t.jsx)(s.pre,{className:"language-javascript",children:(0,t.jsxs)(s.code,{className:"language-javascript",children:[(0,t.jsx)(s.span,{className:"token comment",children:"// \uc561\uc158 \ud0c0\uc785 \uc815\uc758"}),"\n",(0,t.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,t.jsx)(s.span,{className:"token constant",children:"ADD_TODO"})," ",(0,t.jsx)(s.span,{className:"token operator",children:"="})," ",(0,t.jsx)(s.span,{className:"token string",children:"'ADD_TODO'"}),(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,t.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,t.jsx)(s.span,{className:"token constant",children:"TOGGLE_TODO"})," ",(0,t.jsx)(s.span,{className:"token operator",children:"="})," ",(0,t.jsx)(s.span,{className:"token string",children:"'TOGGLE_TODO'"}),(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n",(0,t.jsx)(s.span,{className:"token comment",children:"// \ub9ac\ub4c0\uc11c"}),"\n",(0,t.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,t.jsx)(s.span,{className:"token function-variable function",children:"todoReducer"})," ",(0,t.jsx)(s.span,{className:"token operator",children:"="})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsxs)(s.span,{className:"token parameter",children:["state ",(0,t.jsx)(s.span,{className:"token operator",children:"="})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"["}),(0,t.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,t.jsx)(s.span,{className:"token punctuation",children:","})," action"]}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,t.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,t.jsx)(s.span,{className:"token keyword control-flow",children:"switch"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),"action",(0,t.jsx)(s.span,{className:"token punctuation",children:"."}),(0,t.jsx)(s.span,{className:"token property-access",children:"type"}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,t.jsx)(s.span,{className:"token keyword",children:"case"})," ",(0,t.jsx)(s.span,{className:"token constant",children:"ADD_TODO"}),(0,t.jsx)(s.span,{className:"token operator",children:":"}),"\n      ",(0,t.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"["}),(0,t.jsx)(s.span,{className:"token spread operator",children:"..."}),"state",(0,t.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"{"})," ",(0,t.jsx)(s.span,{className:"token literal-property property",children:"text"}),(0,t.jsx)(s.span,{className:"token operator",children:":"})," action",(0,t.jsx)(s.span,{className:"token punctuation",children:"."}),(0,t.jsx)(s.span,{className:"token property-access",children:"text"}),(0,t.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,t.jsx)(s.span,{className:"token literal-property property",children:"completed"}),(0,t.jsx)(s.span,{className:"token operator",children:":"})," ",(0,t.jsx)(s.span,{className:"token boolean",children:"false"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n    ",(0,t.jsx)(s.span,{className:"token keyword",children:"case"})," ",(0,t.jsx)(s.span,{className:"token constant",children:"TOGGLE_TODO"}),(0,t.jsx)(s.span,{className:"token operator",children:":"}),"\n      ",(0,t.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," state",(0,t.jsx)(s.span,{className:"token punctuation",children:"."}),(0,t.jsx)(s.span,{className:"token method function property-access",children:"map"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsxs)(s.span,{className:"token parameter",children:["todo",(0,t.jsx)(s.span,{className:"token punctuation",children:","})," index"]}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,t.jsx)(s.span,{className:"token arrow operator",children:"=>"}),"\n        index ",(0,t.jsx)(s.span,{className:"token operator",children:"==="})," action",(0,t.jsx)(s.span,{className:"token punctuation",children:"."}),(0,t.jsx)(s.span,{className:"token property-access",children:"index"}),"\n          ",(0,t.jsx)(s.span,{className:"token operator",children:"?"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"{"})," ",(0,t.jsx)(s.span,{className:"token spread operator",children:"..."}),"todo",(0,t.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,t.jsx)(s.span,{className:"token literal-property property",children:"completed"}),(0,t.jsx)(s.span,{className:"token operator",children:":"})," ",(0,t.jsx)(s.span,{className:"token operator",children:"!"}),"todo",(0,t.jsx)(s.span,{className:"token punctuation",children:"."}),(0,t.jsx)(s.span,{className:"token property-access",children:"completed"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n          ",(0,t.jsx)(s.span,{className:"token operator",children:":"})," todo\n      ",(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n    ",(0,t.jsx)(s.span,{className:"token keyword module",children:"default"}),(0,t.jsx)(s.span,{className:"token operator",children:":"}),"\n      ",(0,t.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," state",(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n",(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Zustand \ubc84\uc804:"})}),"\n",(0,t.jsx)(s.pre,{className:"language-javascript",children:(0,t.jsxs)(s.code,{className:"language-javascript",children:[(0,t.jsx)(s.span,{className:"token keyword",children:"const"})," useTodoStore ",(0,t.jsx)(s.span,{className:"token operator",children:"="})," ",(0,t.jsx)(s.span,{className:"token function",children:"create"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token parameter",children:(0,t.jsx)(s.span,{className:"token keyword",children:"set"})}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,t.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,t.jsx)(s.span,{className:"token literal-property property",children:"todos"}),(0,t.jsx)(s.span,{className:"token operator",children:":"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"["}),(0,t.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,t.jsx)(s.span,{className:"token punctuation",children:","}),"\n  ",(0,t.jsx)(s.span,{className:"token function-variable function",children:"addTodo"}),(0,t.jsx)(s.span,{className:"token operator",children:":"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token parameter",children:"text"}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,t.jsx)(s.span,{className:"token arrow operator",children:"=>"})," \n    ",(0,t.jsx)(s.span,{className:"token function",children:"set"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token parameter",children:"state"}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,t.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n      ",(0,t.jsx)(s.span,{className:"token literal-property property",children:"todos"}),(0,t.jsx)(s.span,{className:"token operator",children:":"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"["}),(0,t.jsx)(s.span,{className:"token spread operator",children:"..."}),"state",(0,t.jsx)(s.span,{className:"token punctuation",children:"."}),(0,t.jsx)(s.span,{className:"token property-access",children:"todos"}),(0,t.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"{"})," text",(0,t.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,t.jsx)(s.span,{className:"token literal-property property",children:"completed"}),(0,t.jsx)(s.span,{className:"token operator",children:":"})," ",(0,t.jsx)(s.span,{className:"token boolean",children:"false"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"]"}),"\n    ",(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),(0,t.jsx)(s.span,{className:"token punctuation",children:","}),"\n  ",(0,t.jsx)(s.span,{className:"token function-variable function",children:"toggleTodo"}),(0,t.jsx)(s.span,{className:"token operator",children:":"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token parameter",children:"index"}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,t.jsx)(s.span,{className:"token arrow operator",children:"=>"}),"\n    ",(0,t.jsx)(s.span,{className:"token function",children:"set"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token parameter",children:"state"}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,t.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n      ",(0,t.jsx)(s.span,{className:"token literal-property property",children:"todos"}),(0,t.jsx)(s.span,{className:"token operator",children:":"})," state",(0,t.jsx)(s.span,{className:"token punctuation",children:"."}),(0,t.jsx)(s.span,{className:"token property-access",children:"todos"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"."}),(0,t.jsx)(s.span,{className:"token method function property-access",children:"map"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsxs)(s.span,{className:"token parameter",children:["todo",(0,t.jsx)(s.span,{className:"token punctuation",children:","})," i"]}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,t.jsx)(s.span,{className:"token arrow operator",children:"=>"}),"\n        i ",(0,t.jsx)(s.span,{className:"token operator",children:"==="})," index ",(0,t.jsx)(s.span,{className:"token operator",children:"?"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"{"})," ",(0,t.jsx)(s.span,{className:"token spread operator",children:"..."}),"todo",(0,t.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,t.jsx)(s.span,{className:"token literal-property property",children:"completed"}),(0,t.jsx)(s.span,{className:"token operator",children:":"})," ",(0,t.jsx)(s.span,{className:"token operator",children:"!"}),"todo",(0,t.jsx)(s.span,{className:"token punctuation",children:"."}),(0,t.jsx)(s.span,{className:"token property-access",children:"completed"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"}"})," ",(0,t.jsx)(s.span,{className:"token operator",children:":"})," todo\n      ",(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),"\n    ",(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),"\n",(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,t.jsx)(s.p,{children:"\uc774\ucc98\ub7fc Zustand\ub294 \ub354 \uac04\ub2e8\ud558\uace0 \uc9c1\uad00\uc801\uc778 API\ub97c \uc81c\uacf5\ud558\uc9c0\ub9cc, Redux\ub294 \ub354 \uad6c\uc870\ud654\ub41c \uc811\uadfc \ubc29\uc2dd\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \ud504\ub85c\uc81d\ud2b8\uc758 \uc694\uad6c\uc0ac\ud56d\uacfc \ud300\uc758 \uc120\ud638\ub3c4\uc5d0 \ub530\ub77c \uc801\uc808\ud55c \ub3c4\uad6c\ub97c \uc120\ud0dd\ud558\uc2dc\uba74 \ub429\ub2c8\ub2e4."})]})}function d(n={}){const{wrapper:s}={...(0,c.R)(),...n.components};return s?(0,t.jsx)(s,{...n,children:(0,t.jsx)(i,{...n})}):i(n)}},28453:(n,s,e)=>{e.d(s,{R:()=>o,x:()=>l});var a=e(96540);const t={},c=a.createContext(t);function o(n){const s=a.useContext(c);return a.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function l(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),a.createElement(c.Provider,{value:s},n.children)}}}]);