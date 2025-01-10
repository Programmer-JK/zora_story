"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[4310],{24965:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"JavaScript/Proper Type Definition","title":"Proper Type Definition","description":"TypeScript\uc5d0\uc11c\uc758 \uc62c\ubc14\ub978 \ud0c0\uc785 \uc815\uc758 \ubc29\ubc95\uacfc any \ud0c0\uc785 \uc0ac\uc6a9\uc744 \uc9c0\uc591\ud558\ub294 \uc774\uc720\uc5d0 \ub300\ud55c \uc124\uba85","source":"@site/docs/06. JavaScript/069910. Proper Type Definition.md","sourceDirName":"06. JavaScript","slug":"/JavaScript/Proper Type Definition","permalink":"/zora_story/docs/JavaScript/Proper Type Definition","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"typescript","permalink":"/zora_story/docs/tags/typescript"},{"inline":true,"label":"type-definition","permalink":"/zora_story/docs/tags/type-definition"},{"inline":true,"label":"type-safety","permalink":"/zora_story/docs/tags/type-safety"},{"inline":true,"label":"interface","permalink":"/zora_story/docs/tags/interface"}],"version":"current","sidebarPosition":69910,"frontMatter":{"title":"Proper Type Definition","description":"TypeScript\uc5d0\uc11c\uc758 \uc62c\ubc14\ub978 \ud0c0\uc785 \uc815\uc758 \ubc29\ubc95\uacfc any \ud0c0\uc785 \uc0ac\uc6a9\uc744 \uc9c0\uc591\ud558\ub294 \uc774\uc720\uc5d0 \ub300\ud55c \uc124\uba85","tags":["typescript","type-definition","type-safety","interface"],"keywords":["\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8","\ud0c0\uc785\uc815\uc758","\ud0c0\uc785\uc548\uc804\uc131","any\ud0c0\uc785","\uc778\ud130\ud398\uc774\uc2a4","proper-type-definition"]},"sidebar":"studySidebar","previous":{"title":"\uac1d\uccb4 \ub9ac\ud130\ub7f4","permalink":"/zora_story/docs/JavaScript/\uac1d\uccb4\ub9ac\ud130\ub7f4"},"next":{"title":"\uc0dd\uc131\uc790 \ud568\uc218\uc5d0 \uc758\ud55c \uac1d\uccb4 \uc0dd\uc131","permalink":"/zora_story/docs/JavaScript/\uc0dd\uc131\uc790 \ud568\uc218\uc5d0 \uc758\ud55c \uac1d\uccb4 \uc0dd\uc131"}}');var t=s(74848),i=s(28453);const o={title:"Proper Type Definition",description:"TypeScript\uc5d0\uc11c\uc758 \uc62c\ubc14\ub978 \ud0c0\uc785 \uc815\uc758 \ubc29\ubc95\uacfc any \ud0c0\uc785 \uc0ac\uc6a9\uc744 \uc9c0\uc591\ud558\ub294 \uc774\uc720\uc5d0 \ub300\ud55c \uc124\uba85",tags:["typescript","type-definition","type-safety","interface"],keywords:["\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8","\ud0c0\uc785\uc815\uc758","\ud0c0\uc785\uc548\uc804\uc131","any\ud0c0\uc785","\uc778\ud130\ud398\uc774\uc2a4","proper-type-definition"]},c=void 0,r={},l=[];function p(n){const e={blockquote:"blockquote",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"\uc791\uc131\uc77c : 2024.12.16"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:'"Proper Type Definition"\uc740 "\uc801\uc808\ud55c/\uc62c\ubc14\ub978 \ud0c0\uc785 \uc815\uc758"\ub77c\ub294 \ub73b\uc785\ub2c8\ub2e4.'}),"\n",(0,t.jsxs)(e.p,{children:["TypeScript\uc5d0\uc11c ",(0,t.jsx)(e.code,{children:"any"})," \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83 \ub300\uc2e0, \uad6c\uccb4\uc801\uc774\uace0 \uc815\ud655\ud55c \ud0c0\uc785\uc744 \uc815\uc758\ud558\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(e.p,{children:"\uc608\ub97c \ub4e4\uc5b4:"}),"\n",(0,t.jsx)(e.pre,{className:"language-typescript",children:(0,t.jsxs)(e.code,{className:"language-typescript",children:[(0,t.jsx)(e.span,{className:"token comment",children:"// BAD: any \uc0ac\uc6a9"}),"\n",(0,t.jsx)(e.span,{className:"token keyword",children:"interface"})," ",(0,t.jsx)(e.span,{className:"token class-name",children:(0,t.jsx)(e.span,{className:"token maybe-class-name",children:"Window"})})," ",(0,t.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n  ",(0,t.jsx)(e.span,{className:"token maybe-class-name",children:"Kakao"}),(0,t.jsx)(e.span,{className:"token operator",children:":"})," ",(0,t.jsx)(e.span,{className:"token builtin",children:"any"}),(0,t.jsx)(e.span,{className:"token punctuation",children:";"}),"  ",(0,t.jsx)(e.span,{className:"token comment",children:"// \ubaa8\ub4e0 \ud0c0\uc785\uc744 \ud5c8\uc6a9 = \ud0c0\uc785 \uc548\uc815\uc131\uc774 \ub5a8\uc5b4\uc9d0"}),"\n",(0,t.jsx)(e.span,{className:"token punctuation",children:"}"}),"\n\n",(0,t.jsx)(e.span,{className:"token comment",children:"// GOOD: proper type definition"}),"\n",(0,t.jsx)(e.span,{className:"token keyword",children:"interface"})," ",(0,t.jsx)(e.span,{className:"token class-name",children:(0,t.jsx)(e.span,{className:"token maybe-class-name",children:"Window"})})," ",(0,t.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n  ",(0,t.jsx)(e.span,{className:"token maybe-class-name",children:"Kakao"}),(0,t.jsx)(e.span,{className:"token operator",children:":"})," ",(0,t.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n    ",(0,t.jsx)(e.span,{className:"token function-variable function",children:"init"}),(0,t.jsx)(e.span,{className:"token operator",children:":"})," ",(0,t.jsx)(e.span,{className:"token punctuation",children:"("}),"key",(0,t.jsx)(e.span,{className:"token operator",children:":"})," ",(0,t.jsx)(e.span,{className:"token builtin",children:"string"}),(0,t.jsx)(e.span,{className:"token punctuation",children:")"})," ",(0,t.jsx)(e.span,{className:"token arrow operator",children:"=>"})," ",(0,t.jsx)(e.span,{className:"token keyword",children:"void"}),(0,t.jsx)(e.span,{className:"token punctuation",children:";"}),"\n    ",(0,t.jsx)(e.span,{className:"token maybe-class-name",children:"Auth"}),(0,t.jsx)(e.span,{className:"token operator",children:":"})," ",(0,t.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n      ",(0,t.jsx)(e.span,{className:"token function-variable function",children:"authorize"}),(0,t.jsx)(e.span,{className:"token operator",children:":"})," ",(0,t.jsx)(e.span,{className:"token punctuation",children:"("}),"options",(0,t.jsx)(e.span,{className:"token operator",children:":"})," ",(0,t.jsx)(e.span,{className:"token punctuation",children:"{"})," redirectUri",(0,t.jsx)(e.span,{className:"token operator",children:":"})," ",(0,t.jsx)(e.span,{className:"token builtin",children:"string"})," ",(0,t.jsx)(e.span,{className:"token punctuation",children:"}"}),(0,t.jsx)(e.span,{className:"token punctuation",children:")"})," ",(0,t.jsx)(e.span,{className:"token arrow operator",children:"=>"})," ",(0,t.jsx)(e.span,{className:"token keyword",children:"void"}),(0,t.jsx)(e.span,{className:"token punctuation",children:";"}),"\n    ",(0,t.jsx)(e.span,{className:"token punctuation",children:"}"}),(0,t.jsx)(e.span,{className:"token punctuation",children:";"}),"\n    ",(0,t.jsx)(e.span,{className:"token function-variable function",children:"isInitialized"}),(0,t.jsx)(e.span,{className:"token operator",children:":"})," ",(0,t.jsx)(e.span,{className:"token punctuation",children:"("}),(0,t.jsx)(e.span,{className:"token punctuation",children:")"})," ",(0,t.jsx)(e.span,{className:"token arrow operator",children:"=>"})," ",(0,t.jsx)(e.span,{className:"token builtin",children:"boolean"}),(0,t.jsx)(e.span,{className:"token punctuation",children:";"}),"\n  ",(0,t.jsx)(e.span,{className:"token punctuation",children:"}"}),"\n",(0,t.jsx)(e.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,t.jsx)(e.p,{children:"Proper Type Definition\uc744 \uc0ac\uc6a9\ud558\uba74:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"\ucf54\ub4dc \uc790\ub3d9\uc644\uc131 \uc9c0\uc6d0"}),"\n",(0,t.jsx)(e.li,{children:"\ud0c0\uc785 \uad00\ub828 \uc624\ub958\ub97c \ubbf8\ub9ac \uc7a1\uc744 \uc218 \uc788\uc74c"}),"\n",(0,t.jsx)(e.li,{children:"\ucf54\ub4dc\uc758 \uc758\ub3c4\uac00 \uba85\ud655\ud574\uc9d0"}),"\n",(0,t.jsx)(e.li,{children:"\uc2e4\uc218\ub97c \uc904\uc77c \uc218 \uc788\uc74c"}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(p,{...n})}):p(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>o,x:()=>c});var a=s(96540);const t={},i=a.createContext(t);function o(n){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),a.createElement(i.Provider,{value:e},n.children)}}}]);