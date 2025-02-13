"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[87163],{64149:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>r});const a=JSON.parse('{"id":"Vue.js/Composition API\uc758 \uc0dd\uba85\uc8fc\uae30","title":"Composition API\uc758 \uc0dd\uba85\uc8fc\uae30","description":"\uc791\uc131\uc77c : 2025.02.12","source":"@site/docs/07. Vue.js/079910. Composition API\uc758 \uc0dd\uba85\uc8fc\uae30.md","sourceDirName":"07. Vue.js","slug":"/Vue.js/Composition API\uc758 \uc0dd\uba85\uc8fc\uae30","permalink":"/zora_story/en/docs/Vue.js/Composition API\uc758 \uc0dd\uba85\uc8fc\uae30","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":79910,"frontMatter":{},"sidebar":"studySidebar","previous":{"title":"Options API vs Composition API","permalink":"/zora_story/en/docs/Vue.js/Options API vs Composition API"},"next":{"title":"Vite vs Webpack","permalink":"/zora_story/en/docs/Vue.js/Vite vs Webpack"}}');var c=e(74848),l=e(28453);const t={},o=void 0,i={},r=[{value:"1. setup()",id:"1-setup",level:2},{value:"2. onBeforeMount()",id:"2-onbeforemount",level:2},{value:"3. onMounted()",id:"3-onmounted",level:2},{value:"4. onBeforeUpdate()",id:"4-onbeforeupdate",level:2},{value:"5. onUpdated()",id:"5-onupdated",level:2},{value:"6. onBeforeUnmount()",id:"6-onbeforeunmount",level:2},{value:"7. onUnmounted()",id:"7-onunmounted",level:2},{value:"8. onErrorCaptured()",id:"8-onerrorcaptured",level:2},{value:"\uc0dd\uba85\uc8fc\uae30 \ud6c5 \uc0ac\uc6a9 \uc2dc \uc8fc\uc758\uc0ac\ud56d",id:"\uc0dd\uba85\uc8fc\uae30-\ud6c5-\uc0ac\uc6a9-\uc2dc-\uc8fc\uc758\uc0ac\ud56d",level:2},{value:"\uc2e4\uc81c \uc0ac\uc6a9 \uc608\uc81c",id:"\uc2e4\uc81c-\uc0ac\uc6a9-\uc608\uc81c",level:2}];function p(n){const s={blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"\uc791\uc131\uc77c : 2025.02.12"}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"Composition API\uc758 \uac01 \uc0dd\uba85\uc8fc\uae30 \ud6c5\uc740 \ucef4\ud3ec\ub10c\ud2b8\uc758 \ud2b9\uc815 \uc2dc\uc810\uc5d0\uc11c \uc2e4\ud589\ub418\ub294 \ud568\uc218\uc785\ub2c8\ub2e4. \uac01 \ud6c5\uc758 \ud2b9\uc9d5\uacfc \uc0ac\uc6a9 \uc0ac\ub840\ub97c \uc790\uc138\ud788 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,c.jsx)(s.h2,{id:"1-setup",children:"1. setup()"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token keyword module",children:"import"})," ",(0,c.jsxs)(s.span,{className:"token imports",children:[(0,c.jsx)(s.span,{className:"token punctuation",children:"{"})," defineComponent ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"})]})," ",(0,c.jsx)(s.span,{className:"token keyword module",children:"from"})," ",(0,c.jsx)(s.span,{className:"token string",children:"'vue'"}),"\n\n",(0,c.jsx)(s.span,{className:"token keyword module",children:"export"})," ",(0,c.jsx)(s.span,{className:"token keyword module",children:"default"})," ",(0,c.jsx)(s.span,{className:"token function",children:"defineComponent"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,c.jsx)(s.span,{className:"token function",children:"setup"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token comment",children:"// \ucef4\ud3ec\ub10c\ud2b8 \ucd08\uae30\ud654 \ub85c\uc9c1"}),"\n    ",(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"log"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'setup \uc2e4\ud589'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n    ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n"]})}),"\n",(0,c.jsx)(s.p,{children:"setup() \ud568\uc218\ub294 Composition API\uc758 \uc9c4\uc785\uc810\uc785\ub2c8\ub2e4."}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"Composition API\uc758 \ubaa8\ub4e0 \ub85c\uc9c1\uc774 \uc774\uacf3\uc5d0\uc11c \uc2dc\uc791\ub429\ub2c8\ub2e4"}),"\n",(0,c.jsx)(s.li,{children:"props\uac00 \ud574\uc11d\ub418\uace0 \ub09c \uc9c1\ud6c4 \uc2e4\ud589\ub429\ub2c8\ub2e4"}),"\n",(0,c.jsx)(s.li,{children:"\ucef4\ud3ec\ub10c\ud2b8 \uc778\uc2a4\ud134\uc2a4\uac00 \uc0dd\uc131\ub418\uae30 \uc804\uc5d0 \uc2e4\ud589\ub429\ub2c8\ub2e4"}),"\n",(0,c.jsx)(s.li,{children:"this\uc5d0 \uc811\uadfc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"\uc8fc\uc694 \uc0ac\uc6a9 \uc0ac\ub840:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\ubc18\uc751\ud615 \ub370\uc774\ud130 \uc815\uc758"}),"\n",(0,c.jsx)(s.li,{children:"\uacc4\uc0b0\ub41c \uc18d\uc131 \uc124\uc815"}),"\n",(0,c.jsx)(s.li,{children:"\uba54\uc11c\ub4dc \uc815\uc758"}),"\n",(0,c.jsx)(s.li,{children:"\uc0dd\uba85\uc8fc\uae30 \ud6c5 \ub4f1\ub85d"}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"2-onbeforemount",children:"2. onBeforeMount()"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token keyword module",children:"import"})," ",(0,c.jsxs)(s.span,{className:"token imports",children:[(0,c.jsx)(s.span,{className:"token punctuation",children:"{"})," onBeforeMount ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"})]})," ",(0,c.jsx)(s.span,{className:"token keyword module",children:"from"})," ",(0,c.jsx)(s.span,{className:"token string",children:"'vue'"}),"\n\n",(0,c.jsx)(s.span,{className:"token function",children:"setup"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,c.jsx)(s.span,{className:"token function",children:"onBeforeMount"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"log"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'DOM\uc774 \ub9c8\uc6b4\ud2b8\ub418\uae30 \uc804 \uc2e4\ud589'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,c.jsx)(s.p,{children:"\ucef4\ud3ec\ub10c\ud2b8\uac00 DOM\uc5d0 \ub9c8\uc6b4\ud2b8\ub418\uae30 \uc9c1\uc804\uc5d0 \ud638\ucd9c\ub429\ub2c8\ub2e4."}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\ud15c\ud50c\ub9bf\uc774 \ucef4\ud30c\uc77c\ub41c \ud6c4 \uc2e4\ud589\ub429\ub2c8\ub2e4"}),"\n",(0,c.jsx)(s.li,{children:"\uac00\uc0c1 DOM\uc774 \uc0dd\uc131\ub418\uc5c8\uc9c0\ub9cc \uc2e4\uc81c DOM\uc5d0\ub294 \uc544\uc9c1 \ubc18\uc601\ub418\uc9c0 \uc54a\uc740 \uc2dc\uc810\uc785\ub2c8\ub2e4"}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"\uc8fc\uc694 \uc0ac\uc6a9 \uc0ac\ub840:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"DOM \uc870\uc791 \uc804 \ud544\uc694\ud55c \ub370\uc774\ud130 \uc900\ube44"}),"\n",(0,c.jsx)(s.li,{children:"\uc11c\ubc84 \uc0ac\uc774\ub4dc \ub80c\ub354\ub9c1 \uad00\ub828 \ub85c\uc9c1 \ucc98\ub9ac"}),"\n",(0,c.jsx)(s.li,{children:"\ucef4\ud3ec\ub10c\ud2b8 \ub9c8\uc6b4\ud2b8 \uc804 \uc0ac\uc804 \uc791\uc5c5"}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"3-onmounted",children:"3. onMounted()"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token keyword module",children:"import"})," ",(0,c.jsxs)(s.span,{className:"token imports",children:[(0,c.jsx)(s.span,{className:"token punctuation",children:"{"})," onMounted ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"})]})," ",(0,c.jsx)(s.span,{className:"token keyword module",children:"from"})," ",(0,c.jsx)(s.span,{className:"token string",children:"'vue'"}),"\n\n",(0,c.jsx)(s.span,{className:"token function",children:"setup"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,c.jsx)(s.span,{className:"token function",children:"onMounted"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"log"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'\ucef4\ud3ec\ub10c\ud2b8\uac00 \ub9c8\uc6b4\ud2b8\ub41c \ud6c4 \uc2e4\ud589'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,c.jsx)(s.p,{children:"\ucef4\ud3ec\ub10c\ud2b8\uac00 \uc2e4\uc81c DOM\uc5d0 \ub9c8\uc6b4\ud2b8\ub41c \ud6c4 \ud638\ucd9c\ub429\ub2c8\ub2e4."}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\ubaa8\ub4e0 \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\ub3c4 \ub9c8\uc6b4\ud2b8\uac00 \uc644\ub8cc\ub41c \uc0c1\ud0dc\uc785\ub2c8\ub2e4"}),"\n",(0,c.jsx)(s.li,{children:"DOM\uc5d0 \uc9c1\uc811 \uc811\uadfc\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4"}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"\uc8fc\uc694 \uc0ac\uc6a9 \uc0ac\ub840:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"DOM \uc694\uc18c \uc811\uadfc \ubc0f \uc870\uc791"}),"\n",(0,c.jsx)(s.li,{children:"\uc678\ubd80 \ub77c\uc774\ube0c\ub7ec\ub9ac \ucd08\uae30\ud654"}),"\n",(0,c.jsx)(s.li,{children:"API \ud638\ucd9c"}),"\n",(0,c.jsx)(s.li,{children:"\uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108 \ub4f1\ub85d"}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"4-onbeforeupdate",children:"4. onBeforeUpdate()"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token keyword module",children:"import"})," ",(0,c.jsxs)(s.span,{className:"token imports",children:[(0,c.jsx)(s.span,{className:"token punctuation",children:"{"})," onBeforeUpdate ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"})]})," ",(0,c.jsx)(s.span,{className:"token keyword module",children:"from"})," ",(0,c.jsx)(s.span,{className:"token string",children:"'vue'"}),"\n\n",(0,c.jsx)(s.span,{className:"token function",children:"setup"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,c.jsx)(s.span,{className:"token function",children:"onBeforeUpdate"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"log"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'\ucef4\ud3ec\ub10c\ud2b8\uac00 \uc5c5\ub370\uc774\ud2b8\ub418\uae30 \uc804 \uc2e4\ud589'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,c.jsx)(s.p,{children:"\ucef4\ud3ec\ub10c\ud2b8\uc758 \ub370\uc774\ud130\uac00 \ubcc0\uacbd\ub418\uc5b4 \uc5c5\ub370\uc774\ud2b8\uac00 \uc2dc\uc791\ub418\uae30 \uc804\uc5d0 \ud638\ucd9c\ub429\ub2c8\ub2e4."}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\uac00\uc0c1 DOM\uc774 \ub9ac\ub80c\ub354\ub9c1\ub418\uae30 \uc804 \uc2dc\uc810\uc785\ub2c8\ub2e4"}),"\n",(0,c.jsx)(s.li,{children:"\ubcc0\uacbd \uc804\uc758 DOM \uc0c1\ud0dc\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"\uc8fc\uc694 \uc0ac\uc6a9 \uc0ac\ub840:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"DOM \uc5c5\ub370\uc774\ud2b8 \uc804 \ub370\uc774\ud130 \uc2a4\ub0c5\uc0f7 \uc0dd\uc131"}),"\n",(0,c.jsx)(s.li,{children:"\uc5c5\ub370\uc774\ud2b8 \uc804 \uc0c1\ud0dc \uc800\uc7a5"}),"\n",(0,c.jsx)(s.li,{children:"\ub514\ubc84\uae45\uc6a9 \ub85c\uae45"}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"5-onupdated",children:"5. onUpdated()"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token keyword module",children:"import"})," ",(0,c.jsxs)(s.span,{className:"token imports",children:[(0,c.jsx)(s.span,{className:"token punctuation",children:"{"})," onUpdated ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"})]})," ",(0,c.jsx)(s.span,{className:"token keyword module",children:"from"})," ",(0,c.jsx)(s.span,{className:"token string",children:"'vue'"}),"\n\n",(0,c.jsx)(s.span,{className:"token function",children:"setup"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,c.jsx)(s.span,{className:"token function",children:"onUpdated"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"log"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'\ucef4\ud3ec\ub10c\ud2b8\uac00 \uc5c5\ub370\uc774\ud2b8\ub41c \ud6c4 \uc2e4\ud589'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,c.jsx)(s.p,{children:"\ucef4\ud3ec\ub10c\ud2b8\uac00 \uc5c5\ub370\uc774\ud2b8\ub41c \ud6c4 \ud638\ucd9c\ub429\ub2c8\ub2e4."}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\uc2e4\uc81c DOM\uc774 \uc5c5\ub370\uc774\ud2b8\ub41c \ud6c4 \uc2e4\ud589\ub429\ub2c8\ub2e4"}),"\n",(0,c.jsx)(s.li,{children:"\ubaa8\ub4e0 \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\ub3c4 \uc5c5\ub370\uc774\ud2b8\uac00 \uc644\ub8cc\ub41c \uc0c1\ud0dc\uc785\ub2c8\ub2e4"}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"\uc8fc\uc694 \uc0ac\uc6a9 \uc0ac\ub840:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\uc5c5\ub370\uc774\ud2b8\ub41c DOM\uc5d0 \uc811\uadfc"}),"\n",(0,c.jsx)(s.li,{children:"\ubcc0\uacbd\ub41c \ub370\uc774\ud130\uc5d0 \ub530\ub978 \ubd80\uac00 \uc791\uc5c5"}),"\n",(0,c.jsx)(s.li,{children:"\uc678\ubd80 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc640\uc758 \ub3d9\uae30\ud654"}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"6-onbeforeunmount",children:"6. onBeforeUnmount()"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token keyword module",children:"import"})," ",(0,c.jsxs)(s.span,{className:"token imports",children:[(0,c.jsx)(s.span,{className:"token punctuation",children:"{"})," onBeforeUnmount ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"})]})," ",(0,c.jsx)(s.span,{className:"token keyword module",children:"from"})," ",(0,c.jsx)(s.span,{className:"token string",children:"'vue'"}),"\n\n",(0,c.jsx)(s.span,{className:"token function",children:"setup"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,c.jsx)(s.span,{className:"token function",children:"onBeforeUnmount"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"log"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'\ucef4\ud3ec\ub10c\ud2b8\uac00 \uc81c\uac70\ub418\uae30 \uc804 \uc2e4\ud589'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,c.jsx)(s.p,{children:"\ucef4\ud3ec\ub10c\ud2b8\uac00 \uc81c\uac70\ub418\uae30 \uc9c1\uc804\uc5d0 \ud638\ucd9c\ub429\ub2c8\ub2e4."}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\ucef4\ud3ec\ub10c\ud2b8\uac00 \uc544\uc9c1 \uc644\uc804\ud788 \ub3d9\uc791\ud558\ub294 \uc0c1\ud0dc\uc785\ub2c8\ub2e4"}),"\n",(0,c.jsx)(s.li,{children:"\ubaa8\ub4e0 \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\ub3c4 \uc544\uc9c1 \ud65c\uc131\ud654\ub41c \uc0c1\ud0dc\uc785\ub2c8\ub2e4"}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"\uc8fc\uc694 \uc0ac\uc6a9 \uc0ac\ub840:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108 \uc81c\uac70"}),"\n",(0,c.jsx)(s.li,{children:"\ud0c0\uc774\uba38 \uc815\ub9ac"}),"\n",(0,c.jsx)(s.li,{children:"\uc678\ubd80 \ub9ac\uc18c\uc2a4 \ud574\uc81c \uc900\ube44"}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"7-onunmounted",children:"7. onUnmounted()"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token keyword module",children:"import"})," ",(0,c.jsxs)(s.span,{className:"token imports",children:[(0,c.jsx)(s.span,{className:"token punctuation",children:"{"})," onUnmounted ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"})]})," ",(0,c.jsx)(s.span,{className:"token keyword module",children:"from"})," ",(0,c.jsx)(s.span,{className:"token string",children:"'vue'"}),"\n\n",(0,c.jsx)(s.span,{className:"token function",children:"setup"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,c.jsx)(s.span,{className:"token function",children:"onUnmounted"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"log"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'\ucef4\ud3ec\ub10c\ud2b8\uac00 \uc81c\uac70\ub41c \ud6c4 \uc2e4\ud589'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,c.jsx)(s.p,{children:"\ucef4\ud3ec\ub10c\ud2b8\uac00 \uc81c\uac70\ub41c \ud6c4 \ud638\ucd9c\ub429\ub2c8\ub2e4."}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\ubaa8\ub4e0 \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\ub3c4 \uc81c\uac70\ub41c \uc0c1\ud0dc\uc785\ub2c8\ub2e4"}),"\n",(0,c.jsx)(s.li,{children:"\ubaa8\ub4e0 \ubc18\uc751\ud615 \uc774\ud399\ud2b8\uac00 \uc911\uc9c0\ub41c \uc0c1\ud0dc\uc785\ub2c8\ub2e4"}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"\uc8fc\uc694 \uc0ac\uc6a9 \uc0ac\ub840:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\uba54\ubaa8\ub9ac \uc815\ub9ac"}),"\n",(0,c.jsx)(s.li,{children:"\uad6c\ub3c5 \ud574\uc81c"}),"\n",(0,c.jsx)(s.li,{children:"\uc5f0\uacb0\ub41c \uc678\ubd80 \ub9ac\uc18c\uc2a4 \uc644\uc804 \ud574\uc81c"}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"8-onerrorcaptured",children:"8. onErrorCaptured()"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token keyword module",children:"import"})," ",(0,c.jsxs)(s.span,{className:"token imports",children:[(0,c.jsx)(s.span,{className:"token punctuation",children:"{"})," onErrorCaptured ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"})]})," ",(0,c.jsx)(s.span,{className:"token keyword module",children:"from"})," ",(0,c.jsx)(s.span,{className:"token string",children:"'vue'"}),"\n\n",(0,c.jsx)(s.span,{className:"token function",children:"setup"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,c.jsx)(s.span,{className:"token function",children:"onErrorCaptured"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsxs)(s.span,{className:"token parameter",children:["err",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," instance",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," info"]}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"log"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'\uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc5d0\ub7ec \ubc1c\uc0dd:'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," err",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n    ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,c.jsx)(s.span,{className:"token boolean",children:"false"})," ",(0,c.jsx)(s.span,{className:"token comment",children:"// \uc5d0\ub7ec \uc804\ud30c \ubc29\uc9c0"}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,c.jsx)(s.p,{children:"\uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud588\uc744 \ub54c \ud638\ucd9c\ub429\ub2c8\ub2e4."}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\uc5d0\ub7ec, \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c \ucef4\ud3ec\ub10c\ud2b8 \uc778\uc2a4\ud134\uc2a4, \uc5d0\ub7ec \uc815\ubcf4\ub97c \ubc1b\uc2b5\ub2c8\ub2e4"}),"\n",(0,c.jsx)(s.li,{children:"false\ub97c \ubc18\ud658\ud558\uba74 \uc5d0\ub7ec \uc804\ud30c\ub97c \ubc29\uc9c0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"\uc8fc\uc694 \uc0ac\uc6a9 \uc0ac\ub840:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\uc5d0\ub7ec \ub85c\uae45"}),"\n",(0,c.jsx)(s.li,{children:"\uc0ac\uc6a9\uc790\uc5d0\uac8c \uc5d0\ub7ec \uc54c\ub9bc"}),"\n",(0,c.jsx)(s.li,{children:"\ub300\uccb4 UI \ud45c\uc2dc"}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"\uc0dd\uba85\uc8fc\uae30-\ud6c5-\uc0ac\uc6a9-\uc2dc-\uc8fc\uc758\uc0ac\ud56d",children:"\uc0dd\uba85\uc8fc\uae30 \ud6c5 \uc0ac\uc6a9 \uc2dc \uc8fc\uc758\uc0ac\ud56d"}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"\ud638\ucd9c \uc21c\uc11c"})}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"setup() \ub0b4\uc5d0\uc11c \ud6c5\uc744 \ud638\ucd9c\ud558\ub294 \uc21c\uc11c\ub300\ub85c \uc2e4\ud589\ub429\ub2c8\ub2e4"}),"\n",(0,c.jsx)(s.li,{children:"\ub3d9\uc77c\ud55c \ud6c5\uc744 \uc5ec\ub7ec \ubc88 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"\ube44\ub3d9\uae30 \ucc98\ub9ac"})}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\ud6c5 \ub0b4\uc5d0\uc11c \ube44\ub3d9\uae30 \uc791\uc5c5\uc744 \ud560 \ub54c\ub294 \uc801\uc808\ud55c \uc5d0\ub7ec \ucc98\ub9ac\uac00 \ud544\uc694\ud569\ub2c8\ub2e4"}),"\n",(0,c.jsx)(s.li,{children:"\ucef4\ud3ec\ub10c\ud2b8\uac00 \uc5b8\ub9c8\uc6b4\ud2b8\ub41c \ud6c4\uc5d0\ub294 \ube44\ub3d9\uae30 \uc791\uc5c5 \uacb0\uacfc\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub3c4\ub85d \uc8fc\uc758\ud574\uc57c \ud569\ub2c8\ub2e4"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"\uba54\ubaa8\ub9ac \uad00\ub9ac"})}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"onMounted\uc5d0\uc11c \ub4f1\ub85d\ud55c \uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108\ub294 onUnmounted\uc5d0\uc11c \uc81c\uac70\ud574\uc57c \ud569\ub2c8\ub2e4"}),"\n",(0,c.jsx)(s.li,{children:"\ud0c0\uc774\uba38\ub098 \uad6c\ub3c5\uc740 \ubc18\ub4dc\uc2dc \uc815\ub9ac\ud574\uc57c \ud569\ub2c8\ub2e4"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"\uc2e4\uc81c-\uc0ac\uc6a9-\uc608\uc81c",children:"\uc2e4\uc81c \uc0ac\uc6a9 \uc608\uc81c"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token keyword module",children:"import"})," ",(0,c.jsxs)(s.span,{className:"token imports",children:[(0,c.jsx)(s.span,{className:"token punctuation",children:"{"})," ref",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," onMounted",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," onUnmounted ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"})]})," ",(0,c.jsx)(s.span,{className:"token keyword module",children:"from"})," ",(0,c.jsx)(s.span,{className:"token string",children:"'vue'"}),"\n\n",(0,c.jsx)(s.span,{className:"token keyword module",children:"export"})," ",(0,c.jsx)(s.span,{className:"token keyword module",children:"default"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,c.jsx)(s.span,{className:"token function",children:"setup"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," data ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token function",children:"ref"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token keyword null nil",children:"null"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n    ",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," timer ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token function",children:"ref"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token keyword null nil",children:"null"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n\n    ",(0,c.jsx)(s.span,{className:"token comment",children:"// \ub370\uc774\ud130 \uac00\uc838\uc624\uae30"}),"\n    ",(0,c.jsx)(s.span,{className:"token function",children:"onMounted"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token keyword",children:"async"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n      ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"try"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n        ",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," response ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"await"})," ",(0,c.jsx)(s.span,{className:"token function",children:"fetch"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'https://api.example.com/data'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n        data",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"value"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"await"})," response",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"json"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n        \n        ",(0,c.jsx)(s.span,{className:"token comment",children:"// \uc8fc\uae30\uc801 \uc5c5\ub370\uc774\ud2b8 \ud0c0\uc774\uba38 \uc124\uc815"}),"\n        timer",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"value"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token function",children:"setInterval"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n          ",(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"log"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'\ub370\uc774\ud130 \uc5c5\ub370\uc774\ud2b8 \uccb4\ud06c'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n        ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token number",children:"1000"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n      ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"})," ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"catch"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"error",(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n        ",(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"error"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'\ub370\uc774\ud130 \ub85c\ub4dc \uc2e4\ud328:'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," error",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n      ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n    ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n\n    ",(0,c.jsx)(s.span,{className:"token comment",children:"// \uc815\ub9ac \uc791\uc5c5"}),"\n    ",(0,c.jsx)(s.span,{className:"token function",children:"onUnmounted"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n      ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"timer",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"value"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n        ",(0,c.jsx)(s.span,{className:"token function",children:"clearInterval"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"timer",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"value"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n      ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n    ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n\n    ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"})," data ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,c.jsx)(s.p,{children:"\uc774 \uc608\uc81c\ub294 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub9c8\uc6b4\ud2b8\ub420 \ub54c \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uace0, \uc8fc\uae30\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ub97c \uccb4\ud06c\ud558\uba70, \uc5b8\ub9c8\uc6b4\ud2b8\ub420 \ub54c \ud0c0\uc774\uba38\ub97c \uc815\ub9ac\ud558\ub294 \uac83\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."})]})}function d(n={}){const{wrapper:s}={...(0,l.R)(),...n.components};return s?(0,c.jsx)(s,{...n,children:(0,c.jsx)(p,{...n})}):p(n)}},28453:(n,s,e)=>{e.d(s,{R:()=>t,x:()=>o});var a=e(96540);const c={},l=a.createContext(c);function t(n){const s=a.useContext(l);return a.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function o(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:t(n.components),a.createElement(l.Provider,{value:s},n.children)}}}]);