"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[40850],{42692:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>r});const a=JSON.parse('{"id":"React.js/React Hooks","title":"React Hooks","description":"React Hooks\uc758 \uae30\ubcf8 \uac1c\ub150, \uc8fc\uc694 Hook\ub4e4\uc758 \uc0ac\uc6a9\ubc95, Custom Hook \uac1c\ubc1c \ubc0f \ubaa8\ubc94 \uc0ac\ub840 \uc124\uba85","source":"@site/docs/08. React.js/089902. React Hooks.md","sourceDirName":"08. React.js","slug":"/React.js/React Hooks","permalink":"/zora_story/en/docs/React.js/React Hooks","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"React","permalink":"/zora_story/en/docs/tags/react"},{"inline":true,"label":"Hooks","permalink":"/zora_story/en/docs/tags/hooks"},{"inline":true,"label":"JavaScript","permalink":"/zora_story/en/docs/tags/java-script"},{"inline":true,"label":"frontend","permalink":"/zora_story/en/docs/tags/frontend"}],"version":"current","sidebarPosition":89902,"frontMatter":{"title":"React Hooks","description":"React Hooks\uc758 \uae30\ubcf8 \uac1c\ub150, \uc8fc\uc694 Hook\ub4e4\uc758 \uc0ac\uc6a9\ubc95, Custom Hook \uac1c\ubc1c \ubc0f \ubaa8\ubc94 \uc0ac\ub840 \uc124\uba85","tags":["React","Hooks","JavaScript","frontend"],"keywords":["React Hooks","useState","useEffect","useRef","useContext","useMemo","useCallback","useReducer","Custom Hooks"]},"sidebar":"studySidebar","previous":{"title":"What is React","permalink":"/zora_story/en/docs/React.js/What is React"},"next":{"title":"onChange vs useEffect","permalink":"/zora_story/en/docs/React.js/onChange vs useEffect"}}');var c=e(74848),t=e(28453);const o={title:"React Hooks",description:"React Hooks\uc758 \uae30\ubcf8 \uac1c\ub150, \uc8fc\uc694 Hook\ub4e4\uc758 \uc0ac\uc6a9\ubc95, Custom Hook \uac1c\ubc1c \ubc0f \ubaa8\ubc94 \uc0ac\ub840 \uc124\uba85",tags:["React","Hooks","JavaScript","frontend"],keywords:["React Hooks","useState","useEffect","useRef","useContext","useMemo","useCallback","useReducer","Custom Hooks"]},l=void 0,i={},r=[{value:"What is React Hooks",id:"what-is-react-hooks",level:2},{value:"How to use React Hooks",id:"how-to-use-react-hooks",level:2},{value:"1. useState",id:"1-usestate",level:3},{value:"2. useEffect",id:"2-useeffect",level:3},{value:"3. useRef",id:"3-useref",level:3},{value:"4. useContext",id:"4-usecontext",level:3},{value:"5. useMemo",id:"5-usememo",level:3},{value:"6. useCallback",id:"6-usecallback",level:3},{value:"7. useReducer",id:"7-usereducer",level:3},{value:"Hook \uc0ac\uc6a9 \uc2dc \uc8fc\uc758\uc0ac\ud56d:",id:"hook-\uc0ac\uc6a9-\uc2dc-\uc8fc\uc758\uc0ac\ud56d",level:3},{value:"Custom Hook \uc608\uc2dc:",id:"custom-hook-\uc608\uc2dc",level:3}];function p(n){const s={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...(0,t.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"\uc791\uc131\uc77c : 2024.12.22"}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"what-is-react-hooks",children:"What is React Hooks"}),"\n",(0,c.jsx)(s.p,{children:"React Hooks\ub294 React 16.8 \ubc84\uc804\uc5d0\uc11c \ub3c4\uc785\ub41c \uae30\ub2a5\uc73c\ub85c, \ud568\uc218\ud615 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc0c1\ud0dc(state) \uad00\ub9ac\uc640 \uc0dd\uba85\uc8fc\uae30(lifecycle) \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ud574\uc8fc\ub294 \uae30\ub2a5\uc785\ub2c8\ub2e4."}),"\n",(0,c.jsx)(s.p,{children:"\uc8fc\uc694 Hook\ub4e4\uc744 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4:"}),"\n",(0,c.jsx)(s.h2,{id:"how-to-use-react-hooks",children:"How to use React Hooks"}),"\n",(0,c.jsx)(s.h3,{id:"1-usestate",children:"1. useState"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),"state",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," setState",(0,c.jsx)(s.span,{className:"token punctuation",children:"]"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token function",children:"useState"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"initialValue",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud560 \uc218 \uc788\uac8c \ud574\uc90d\ub2c8\ub2e4"}),"\n",(0,c.jsx)(s.li,{children:"initialValue\ub85c \ucd08\uae30\uac12\uc744 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"}),"\n",(0,c.jsx)(s.li,{children:"state\ub294 \ud604\uc7ac \uc0c1\ud0dc\uac12, setState\ub294 \uc0c1\ud0dc\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4"}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"\uc608\uc2dc:"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),"count",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," setCount",(0,c.jsx)(s.span,{className:"token punctuation",children:"]"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token function",children:"useState"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token number",children:"0"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"button onClick",(0,c.jsx)(s.span,{className:"token operator",children:"="}),(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token function",children:"setCount"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"count ",(0,c.jsx)(s.span,{className:"token operator",children:"+"})," ",(0,c.jsx)(s.span,{className:"token number",children:"1"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token operator",children:">"}),(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"Count"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"count",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token operator",children:"<"}),(0,c.jsx)(s.span,{className:"token operator",children:"/"}),"button",(0,c.jsx)(s.span,{className:"token operator",children:">"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,c.jsx)(s.h3,{id:"2-useeffect",children:"2. useEffect"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token function",children:"useEffect"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,c.jsx)(s.span,{className:"token comment",children:"// \uc2e4\ud589\ud560 \ud6a8\uacfc"}),"\n  ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token comment",children:"// \ud074\ub9b0\uc5c5 \ud568\uc218"}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),"dependencies",(0,c.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\ucef4\ud3ec\ub10c\ud2b8\uc758 \uc0dd\uba85\uc8fc\uae30\uc640 \uad00\ub828\ub41c \uc791\uc5c5\uc744 \uc218\ud589\ud569\ub2c8\ub2e4"}),"\n",(0,c.jsx)(s.li,{children:"\ucef4\ud3ec\ub10c\ud2b8\uac00 \ub80c\ub354\ub9c1\ub420 \ub54c\ub9c8\ub2e4 \ub610\ub294 \ud2b9\uc815 \uac12\uc774 \ubcc0\uacbd\ub420 \ub54c \uc2e4\ud589\ub429\ub2c8\ub2e4"}),"\n",(0,c.jsx)(s.li,{children:"dependencies \ubc30\uc5f4\uc5d0 \uc9c0\uc815\ub41c \uac12\uc774 \ubcc0\uacbd\ub420 \ub54c\ub9cc \uc2e4\ud589\ub418\ub3c4\ub85d \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"\uc608\uc2dc:"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token function",children:"useEffect"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,c.jsx)(s.span,{className:"token dom variable",children:"document"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"title"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsxs)(s.span,{className:"token template-string",children:[(0,c.jsx)(s.span,{className:"token template-punctuation string",children:"`"}),(0,c.jsx)(s.span,{className:"token string",children:"You clicked "}),(0,c.jsxs)(s.span,{className:"token interpolation",children:[(0,c.jsx)(s.span,{className:"token interpolation-punctuation punctuation",children:"${"}),"count",(0,c.jsx)(s.span,{className:"token interpolation-punctuation punctuation",children:"}"})]}),(0,c.jsx)(s.span,{className:"token string",children:" times"}),(0,c.jsx)(s.span,{className:"token template-punctuation string",children:"`"})]}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n  ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token dom variable",children:"document"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"title"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token string",children:'"React App"'}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"})," ",(0,c.jsx)(s.span,{className:"token comment",children:"// \ucef4\ud3ec\ub10c\ud2b8 \uc5b8\ub9c8\uc6b4\ud2b8 \uc2dc \uc2e4\ud589"}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),"count",(0,c.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"})," ",(0,c.jsx)(s.span,{className:"token comment",children:"// count\uac00 \ubcc0\uacbd\ub420 \ub54c\ub9cc \uc2e4\ud589"}),"\n"]})}),"\n",(0,c.jsx)(s.h3,{id:"3-useref",children:"3. useRef"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," refContainer ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token function",children:"useRef"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"initialValue",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"DOM \uc694\uc18c\uc5d0 \uc9c1\uc811 \uc811\uadfc\ud558\uac70\ub098 \ubcc0\uacbd \uac00\ub2a5\ud55c \uac12\uc744 \uc800\uc7a5\ud560 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4"}),"\n",(0,c.jsx)(s.li,{children:"\uac12\uc774 \ubcc0\uacbd\ub418\uc5b4\ub3c4 \ub9ac\ub80c\ub354\ub9c1\uc744 \ubc1c\uc0dd\uc2dc\ud0a4\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4"}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"\uc608\uc2dc:"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," inputRef ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token function",children:"useRef"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"\n  ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"input ref",(0,c.jsx)(s.span,{className:"token operator",children:"="}),(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"inputRef",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"/"}),(0,c.jsx)(s.span,{className:"token operator",children:">"}),"\n  ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"button onClick",(0,c.jsx)(s.span,{className:"token operator",children:"="}),(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," inputRef",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"current"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"focus"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token operator",children:">"}),"\n    ",(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"Focus"})," ",(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"Input"}),"\n  ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),(0,c.jsx)(s.span,{className:"token operator",children:"/"}),"button",(0,c.jsx)(s.span,{className:"token operator",children:">"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,c.jsx)(s.h3,{id:"4-usecontext",children:"4. useContext"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," value ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token function",children:"useContext"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"MyContext"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"Context API\ub97c \ud1b5\ud574 \uc804\uc5ed \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"}),"\n",(0,c.jsx)(s.li,{children:"\ucef4\ud3ec\ub10c\ud2b8 \ud2b8\ub9ac \uc804\uccb4\uc5d0 \ub370\uc774\ud130\ub97c \uc804\ub2ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"}),"\n"]}),"\n",(0,c.jsx)(s.h3,{id:"5-usememo",children:"5. useMemo"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," memoizedValue ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token function",children:"useMemo"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token function",children:"computeExpensiveValue"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"a",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," b",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),"a",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," b",(0,c.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\uacc4\uc0b0 \ube44\uc6a9\uc774 \ud070 \uac12\uc744 \uba54\ubaa8\uc774\uc81c\uc774\uc158\ud569\ub2c8\ub2e4"}),"\n",(0,c.jsx)(s.li,{children:"\uc758\uc874\uc131 \ubc30\uc5f4\uc758 \uac12\uc774 \ubcc0\uacbd\ub420 \ub54c\ub9cc \uc7ac\uacc4\uc0b0\ub429\ub2c8\ub2e4"}),"\n"]}),"\n",(0,c.jsx)(s.h3,{id:"6-usecallback",children:"6. useCallback"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," memoizedCallback ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token function",children:"useCallback"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,c.jsx)(s.span,{className:"token function",children:"doSomething"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"a",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," b",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),"a",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," b",(0,c.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\ud568\uc218\ub97c \uba54\ubaa8\uc774\uc81c\uc774\uc158\ud558\uc5ec \ubd88\ud544\uc694\ud55c \ub9ac\ub80c\ub354\ub9c1\uc744 \ubc29\uc9c0\ud569\ub2c8\ub2e4"}),"\n",(0,c.jsx)(s.li,{children:"\uc8fc\ub85c \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ucf5c\ubc31\uc744 \uc804\ub2ec\ud560 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4"}),"\n"]}),"\n",(0,c.jsx)(s.h3,{id:"7-usereducer",children:"7. useReducer"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),"state",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," dispatch",(0,c.jsx)(s.span,{className:"token punctuation",children:"]"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token function",children:"useReducer"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"reducer",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," initialState",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\ubcf5\uc7a1\ud55c \uc0c1\ud0dc \ub85c\uc9c1\uc744 \uad00\ub9ac\ud560 \ub54c useState \ub300\uc2e0 \uc0ac\uc6a9\ud569\ub2c8\ub2e4"}),"\n",(0,c.jsx)(s.li,{children:"Redux\uc640 \uc720\uc0ac\ud55c \ubc29\uc2dd\uc73c\ub85c \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"}),"\n",(0,c.jsx)(s.li,{children:"reducer \ud568\uc218\ub294 \ud604\uc7ac \uc0c1\ud0dc\uc640 \uc561\uc158\uc744 \ubc1b\uc544 \uc0c8\ub85c\uc6b4 \uc0c1\ud0dc\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4"}),"\n"]}),"\n",(0,c.jsx)(s.h3,{id:"hook-\uc0ac\uc6a9-\uc2dc-\uc8fc\uc758\uc0ac\ud56d",children:"Hook \uc0ac\uc6a9 \uc2dc \uc8fc\uc758\uc0ac\ud56d:"}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsx)(s.li,{children:"Hook\uc740 \ud56d\uc0c1 \ud568\uc218\ud615 \ucef4\ud3ec\ub10c\ud2b8 \ucd5c\uc0c1\uc704\uc5d0\uc11c\ub9cc \ud638\ucd9c\ud574\uc57c \ud569\ub2c8\ub2e4"}),"\n",(0,c.jsx)(s.li,{children:"\uc870\uac74\ubb38\uc774\ub098 \ubc18\ubcf5\ubb38 \uc548\uc5d0\uc11c Hook\uc744 \uc0ac\uc6a9\ud558\uba74 \uc548\ub429\ub2c8\ub2e4"}),"\n",(0,c.jsx)(s.li,{children:"Custom Hook\uc744 \ub9cc\ub4e4 \ub54c\ub294 \uc774\ub984\uc774 'use'\ub85c \uc2dc\uc791\ud574\uc57c \ud569\ub2c8\ub2e4"}),"\n"]}),"\n",(0,c.jsx)(s.h3,{id:"custom-hook-\uc608\uc2dc",children:"Custom Hook \uc608\uc2dc:"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token keyword",children:"function"})," ",(0,c.jsx)(s.span,{className:"token function",children:"useWindowSize"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),"size",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," setSize",(0,c.jsx)(s.span,{className:"token punctuation",children:"]"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token function",children:"useState"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token literal-property property",children:"width"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token dom variable",children:"window"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"innerWidth"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n    ",(0,c.jsx)(s.span,{className:"token literal-property property",children:"height"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token dom variable",children:"window"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"innerHeight"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n  ",(0,c.jsx)(s.span,{className:"token function",children:"useEffect"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,c.jsx)(s.span,{className:"token function-variable function",children:"handleResize"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n      ",(0,c.jsx)(s.span,{className:"token function",children:"setSize"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n        ",(0,c.jsx)(s.span,{className:"token literal-property property",children:"width"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token dom variable",children:"window"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"innerWidth"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n        ",(0,c.jsx)(s.span,{className:"token literal-property property",children:"height"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token dom variable",children:"window"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"innerHeight"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n      ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n    ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n    ",(0,c.jsx)(s.span,{className:"token dom variable",children:"window"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"addEventListener"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:'"resize"'}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," handleResize",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n    ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token dom variable",children:"window"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"removeEventListener"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:'"resize"'}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," handleResize",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),(0,c.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n  ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," size",(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,c.jsx)(s.p,{children:"\uc774\ub7ec\ud55c Hook\ub4e4\uc744 \ud65c\uc6a9\ud558\uba74 \ud074\ub798\uc2a4 \ucef4\ud3ec\ub10c\ud2b8\ubcf4\ub2e4 \ub354 \uac04\uacb0\ud558\uace0 \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud55c \ub85c\uc9c1\uc744 \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud2b9\ud788 \uc0c1\ud0dc \uad00\ub9ac\uc640 \uc0ac\uc774\ub4dc \uc774\ud399\ud2b8 \ucc98\ub9ac\ub97c \ub354\uc6b1 \ud6a8\uc728\uc801\uc73c\ub85c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})}function u(n={}){const{wrapper:s}={...(0,t.R)(),...n.components};return s?(0,c.jsx)(s,{...n,children:(0,c.jsx)(p,{...n})}):p(n)}},28453:(n,s,e)=>{e.d(s,{R:()=>o,x:()=>l});var a=e(96540);const c={},t=a.createContext(c);function o(n){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function l(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:o(n.components),a.createElement(t.Provider,{value:s},n.children)}}}]);