"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[58467],{48262:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>i});const a=JSON.parse('{"id":"React.js/useState vs useReducer vs useMemo","title":"useState vs useReducer vs useMemo","description":"\uc791\uc131\uc77c : 2025.01.19","source":"@site/docs/08. React.js/089909. useState vs useReducer vs useMemo.md","sourceDirName":"08. React.js","slug":"/React.js/useState vs useReducer vs useMemo","permalink":"/zora_story/docs/React.js/useState vs useReducer vs useMemo","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":89909,"frontMatter":{},"sidebar":"studySidebar","previous":{"title":"Redux vs Recoil vs Zustand","permalink":"/zora_story/docs/React.js/Redux vs Recoil vs Zustand"},"next":{"title":"React \uba74\uc811 \uc900\ube44","permalink":"/zora_story/docs/React.js/React \uba74\uc811 \uc900\ube44"}}');var t=e(74848),c=e(28453);const l={},o=void 0,r={},i=[{value:"useState vs useReducer",id:"usestate-vs-usereducer",level:3},{value:"useState/useReducer vs useMemo",id:"usestateusereducer-vs-usememo",level:3},{value:"\uc0ac\uc6a9 \uc608\uc2dc:",id:"\uc0ac\uc6a9-\uc608\uc2dc",level:3},{value:"\uc120\ud0dd \uae30\uc900:",id:"\uc120\ud0dd-\uae30\uc900",level:3}];function p(n){const s={blockquote:"blockquote",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,c.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"\uc791\uc131\uc77c : 2025.01.19"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"usestate-vs-usereducer",children:"useState vs useReducer"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"useState"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"\ub2e8\uc21c\ud55c \uc0c1\ud0dc \uad00\ub9ac\uc5d0 \uc801\ud569"}),"\n",(0,t.jsx)(s.li,{children:"\ub3c5\ub9bd\uc801\uc778 \uc0c1\ud0dc\uac12\ub4e4\uc744 \ub2e4\ub8f0 \ub54c \uc0ac\uc6a9"}),"\n",(0,t.jsx)(s.li,{children:"\uc0c1\ud0dc \uc5c5\ub370\uc774\ud2b8 \ub85c\uc9c1\uc774 \uac04\ub2e8\ud560 \ub54c \uc88b\uc74c"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{className:"language-javascript",children:(0,t.jsxs)(s.code,{className:"language-javascript",children:[(0,t.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"["}),"count",(0,t.jsx)(s.span,{className:"token punctuation",children:","})," setCount",(0,t.jsx)(s.span,{className:"token punctuation",children:"]"})," ",(0,t.jsx)(s.span,{className:"token operator",children:"="})," ",(0,t.jsx)(s.span,{className:"token function",children:"useState"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token number",children:"0"}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,t.jsx)(s.span,{className:"token comment",children:"// \ub2e8\uc21c \uc5c5\ub370\uc774\ud2b8"}),"\n",(0,t.jsx)(s.span,{className:"token function",children:"setCount"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),"count ",(0,t.jsx)(s.span,{className:"token operator",children:"+"})," ",(0,t.jsx)(s.span,{className:"token number",children:"1"}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"useReducer"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"\ubcf5\uc7a1\ud55c \uc0c1\ud0dc \ub85c\uc9c1\uc744 \ub2e4\ub8f0 \ub54c \uc801\ud569"}),"\n",(0,t.jsx)(s.li,{children:"\uc5ec\ub7ec \uc0c1\ud0dc\uac12\uc774 \uc11c\ub85c \uc5f0\uad00\ub418\uc5b4 \uc788\uc744 \ub54c \uc720\uc6a9"}),"\n",(0,t.jsx)(s.li,{children:"\uc0c1\ud0dc \uc5c5\ub370\uc774\ud2b8 \ud328\ud134\uc774 \uc77c\uad00\uc801\uc77c \ub54c \uc88b\uc74c"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{className:"language-javascript",children:(0,t.jsxs)(s.code,{className:"language-javascript",children:[(0,t.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"["}),"state",(0,t.jsx)(s.span,{className:"token punctuation",children:","})," dispatch",(0,t.jsx)(s.span,{className:"token punctuation",children:"]"})," ",(0,t.jsx)(s.span,{className:"token operator",children:"="})," ",(0,t.jsx)(s.span,{className:"token function",children:"useReducer"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),"reducer",(0,t.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"{"})," ",(0,t.jsx)(s.span,{className:"token literal-property property",children:"count"}),(0,t.jsx)(s.span,{className:"token operator",children:":"})," ",(0,t.jsx)(s.span,{className:"token number",children:"0"}),(0,t.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,t.jsx)(s.span,{className:"token literal-property property",children:"error"}),(0,t.jsx)(s.span,{className:"token operator",children:":"})," ",(0,t.jsx)(s.span,{className:"token keyword null nil",children:"null"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,t.jsx)(s.span,{className:"token comment",children:"// \uc561\uc158\uc744 \ud1b5\ud55c \uc5c5\ub370\uc774\ud2b8"}),"\n",(0,t.jsx)(s.span,{className:"token function",children:"dispatch"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token punctuation",children:"{"})," ",(0,t.jsx)(s.span,{className:"token literal-property property",children:"type"}),(0,t.jsx)(s.span,{className:"token operator",children:":"})," ",(0,t.jsx)(s.span,{className:"token string",children:"'increment'"}),(0,t.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,t.jsx)(s.span,{className:"token literal-property property",children:"payload"}),(0,t.jsx)(s.span,{className:"token operator",children:":"})," ",(0,t.jsx)(s.span,{className:"token number",children:"5"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,t.jsx)(s.h3,{id:"usestateusereducer-vs-usememo",children:"useState/useReducer vs useMemo"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"useState/useReducer"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"\uc0c1\ud0dc\ub97c \uad00\ub9ac\ud558\uace0 \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \ub370 \uc0ac\uc6a9"}),"\n",(0,t.jsx)(s.li,{children:"\uc0c1\ud0dc\uac00 \ubcc0\uacbd\ub418\uba74 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub9ac\ub80c\ub354\ub9c1\ub428"}),"\n",(0,t.jsx)(s.li,{children:"\uc9c1\uc811\uc801\uc778 \uc0c1\ud0dc \uad00\ub9ac \ub3c4\uad6c"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"useMemo"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"\uacc4\uc0b0 \ube44\uc6a9\uc774 \ud070 \uac12\uc744 \ucd5c\uc801\ud654\ud558\ub294 \ub370 \uc0ac\uc6a9"}),"\n",(0,t.jsx)(s.li,{children:"\uc758\uc874\uc131\uc774 \ubcc0\uacbd\ub420 \ub54c\ub9cc \uac12\uc744 \uc7ac\uacc4\uc0b0"}),"\n",(0,t.jsx)(s.li,{children:"\uc131\ub2a5 \ucd5c\uc801\ud654 \ub3c4\uad6c"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{className:"language-javascript",children:(0,t.jsxs)(s.code,{className:"language-javascript",children:[(0,t.jsx)(s.span,{className:"token comment",children:"// \ube44\uc6a9\uc774 \ud070 \uacc4\uc0b0\uc744 \uba54\ubaa8\uc774\uc81c\uc774\uc158"}),"\n",(0,t.jsx)(s.span,{className:"token keyword",children:"const"})," expensiveValue ",(0,t.jsx)(s.span,{className:"token operator",children:"="})," ",(0,t.jsx)(s.span,{className:"token function",children:"useMemo"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,t.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,t.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,t.jsx)(s.span,{className:"token function",children:"someExpensiveCalculation"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),"count",(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,t.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"["}),"count",(0,t.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,t.jsx)(s.h3,{id:"\uc0ac\uc6a9-\uc608\uc2dc",children:"\uc0ac\uc6a9 \uc608\uc2dc:"}),"\n",(0,t.jsx)(s.pre,{className:"language-javascript",children:(0,t.jsxs)(s.code,{className:"language-javascript",children:[(0,t.jsx)(s.span,{className:"token keyword",children:"function"})," ",(0,t.jsx)(s.span,{className:"token function",children:(0,t.jsx)(s.span,{className:"token maybe-class-name",children:"ShoppingCart"})}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,t.jsx)(s.span,{className:"token comment",children:"// \ub2e8\uc21c\ud55c \uc0c1\ud0dc - useState"}),"\n  ",(0,t.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"["}),"isOpen",(0,t.jsx)(s.span,{className:"token punctuation",children:","})," setIsOpen",(0,t.jsx)(s.span,{className:"token punctuation",children:"]"})," ",(0,t.jsx)(s.span,{className:"token operator",children:"="})," ",(0,t.jsx)(s.span,{className:"token function",children:"useState"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token boolean",children:"false"}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  \n  ",(0,t.jsx)(s.span,{className:"token comment",children:"// \ubcf5\uc7a1\ud55c \uc0c1\ud0dc \ub85c\uc9c1 - useReducer"}),"\n  ",(0,t.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"["}),"cartState",(0,t.jsx)(s.span,{className:"token punctuation",children:","})," dispatch",(0,t.jsx)(s.span,{className:"token punctuation",children:"]"})," ",(0,t.jsx)(s.span,{className:"token operator",children:"="})," ",(0,t.jsx)(s.span,{className:"token function",children:"useReducer"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),"cartReducer",(0,t.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,t.jsx)(s.span,{className:"token literal-property property",children:"items"}),(0,t.jsx)(s.span,{className:"token operator",children:":"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"["}),(0,t.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,t.jsx)(s.span,{className:"token punctuation",children:","}),"\n    ",(0,t.jsx)(s.span,{className:"token literal-property property",children:"total"}),(0,t.jsx)(s.span,{className:"token operator",children:":"})," ",(0,t.jsx)(s.span,{className:"token number",children:"0"}),(0,t.jsx)(s.span,{className:"token punctuation",children:","}),"\n    ",(0,t.jsx)(s.span,{className:"token literal-property property",children:"discount"}),(0,t.jsx)(s.span,{className:"token operator",children:":"})," ",(0,t.jsx)(s.span,{className:"token number",children:"0"}),"\n  ",(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  \n  ",(0,t.jsx)(s.span,{className:"token comment",children:"// \ube44\uc6a9\uc774 \ud070 \uacc4\uc0b0 - useMemo"}),"\n  ",(0,t.jsx)(s.span,{className:"token keyword",children:"const"})," totalWithTax ",(0,t.jsx)(s.span,{className:"token operator",children:"="})," ",(0,t.jsx)(s.span,{className:"token function",children:"useMemo"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,t.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,t.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,t.jsx)(s.span,{className:"token function",children:"calculateTotalWithTax"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),"cartState",(0,t.jsx)(s.span,{className:"token punctuation",children:"."}),(0,t.jsx)(s.span,{className:"token property-access",children:"total"}),(0,t.jsx)(s.span,{className:"token punctuation",children:","})," cartState",(0,t.jsx)(s.span,{className:"token punctuation",children:"."}),(0,t.jsx)(s.span,{className:"token property-access",children:"discount"}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,t.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"["}),"cartState",(0,t.jsx)(s.span,{className:"token punctuation",children:"."}),(0,t.jsx)(s.span,{className:"token property-access",children:"total"}),(0,t.jsx)(s.span,{className:"token punctuation",children:","})," cartState",(0,t.jsx)(s.span,{className:"token punctuation",children:"."}),(0,t.jsx)(s.span,{className:"token property-access",children:"discount"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  \n  ",(0,t.jsx)(s.span,{className:"token comment",children:"// ..."}),"\n",(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,t.jsx)(s.h3,{id:"\uc120\ud0dd-\uae30\uc900",children:"\uc120\ud0dd \uae30\uc900:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"\ub2e8\uc21c\ud55c \uc0c1\ud0dc \uad00\ub9ac \u2192 useState"}),"\n",(0,t.jsx)(s.li,{children:"\ubcf5\uc7a1\ud55c \uc0c1\ud0dc \ub85c\uc9c1\uc774\ub098 \uc5f0\uad00\ub41c \uc0c1\ud0dc\ub4e4 \u2192 useReducer"}),"\n",(0,t.jsx)(s.li,{children:"\ube44\uc6a9\uc774 \ud070 \uacc4\uc0b0 \uacb0\uacfc \uc7ac\uc0ac\uc6a9 \u2192 useMemo"}),"\n"]})]})}function u(n={}){const{wrapper:s}={...(0,c.R)(),...n.components};return s?(0,t.jsx)(s,{...n,children:(0,t.jsx)(p,{...n})}):p(n)}},28453:(n,s,e)=>{e.d(s,{R:()=>l,x:()=>o});var a=e(96540);const t={},c=a.createContext(t);function l(n){const s=a.useContext(c);return a.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function o(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),a.createElement(c.Provider,{value:s},n.children)}}}]);