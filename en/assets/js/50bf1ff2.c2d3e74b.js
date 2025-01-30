"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[32897],{99318:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>r,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"Fronted \uc9c0\uc2dd/JavaScript \uc2e4\ud589\uacfc \ud30c\uc2f1 \ubd84\uc11d","title":"JavaScript \uc2e4\ud589\uacfc \ud30c\uc2f1 \ubd84\uc11d","description":"JavaScript\uc758 \uc2e4\ud589\uacfc\uc815\uacfc \ud30c\uc2f1 \ubc29\ubc95, \ucd5c\uc801\ud654 \uc804\ub7b5\uc5d0 \ub300\ud55c \uc124\uba85","source":"@site/docs/01. Fronted \uc9c0\uc2dd/019903. JavaScript \uc2e4\ud589\uacfc \ud30c\uc2f1 \ubd84\uc11d.md","sourceDirName":"01. Fronted \uc9c0\uc2dd","slug":"/Fronted \uc9c0\uc2dd/JavaScript \uc2e4\ud589\uacfc \ud30c\uc2f1 \ubd84\uc11d","permalink":"/zora_story/en/docs/Fronted \uc9c0\uc2dd/JavaScript \uc2e4\ud589\uacfc \ud30c\uc2f1 \ubd84\uc11d","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"javascript","permalink":"/zora_story/en/docs/tags/javascript"},{"inline":true,"label":"browser-parsing","permalink":"/zora_story/en/docs/tags/browser-parsing"},{"inline":true,"label":"async-defer","permalink":"/zora_story/en/docs/tags/async-defer"},{"inline":true,"label":"performance-optimization","permalink":"/zora_story/en/docs/tags/performance-optimization"},{"inline":true,"label":"script-loading","permalink":"/zora_story/en/docs/tags/script-loading"},{"inline":true,"label":"web-development","permalink":"/zora_story/en/docs/tags/web-development"},{"inline":true,"label":"resource-optimization","permalink":"/zora_story/en/docs/tags/resource-optimization"},{"inline":true,"label":"es-modules","permalink":"/zora_story/en/docs/tags/es-modules"},{"inline":true,"label":"critical-rendering-path","permalink":"/zora_story/en/docs/tags/critical-rendering-path"}],"version":"current","sidebarPosition":19903,"frontMatter":{"title":"JavaScript \uc2e4\ud589\uacfc \ud30c\uc2f1 \ubd84\uc11d","description":"JavaScript\uc758 \uc2e4\ud589\uacfc\uc815\uacfc \ud30c\uc2f1 \ubc29\ubc95, \ucd5c\uc801\ud654 \uc804\ub7b5\uc5d0 \ub300\ud55c \uc124\uba85","tags":["javascript","browser-parsing","async-defer","performance-optimization","script-loading","web-development","resource-optimization","es-modules","critical-rendering-path"],"keywords":["JavaScript \uc2e4\ud589","async\uc640 defer","\uc2a4\ud06c\ub9bd\ud2b8 \ub85c\ub529","\ube0c\ub77c\uc6b0\uc800 \ud30c\uc2f1","\ubaa8\ub4c8 \uc2a4\ud06c\ub9bd\ud2b8","\uc131\ub2a5 \ucd5c\uc801\ud654","\ub9ac\uc18c\uc2a4 \ucd5c\uc801\ud654","\ub80c\ub354\ub9c1 \ucd5c\uc801\ud654"]},"sidebar":"studySidebar","previous":{"title":"\ube0c\ub77c\uc6b0\uc800 \ub80c\ub354\ub9c1\uacfc\uc815","permalink":"/zora_story/en/docs/Fronted \uc9c0\uc2dd/\ube0c\ub77c\uc6b0\uc800 \ub80c\ub354\ub9c1\uacfc\uc815"},"next":{"title":"\ub9ac\ud50c\ub85c\uc6b0\uc640 \ub9ac\ud398\uc778\ud2b8\uc758 \uc774\ud574","permalink":"/zora_story/en/docs/Fronted \uc9c0\uc2dd/\ub9ac\ud50c\ub85c\uc6b0\uc640 \ub9ac\ud398\uc778\ud2b8"}}');var t=e(74848),l=e(28453);const c={title:"JavaScript \uc2e4\ud589\uacfc \ud30c\uc2f1 \ubd84\uc11d",description:"JavaScript\uc758 \uc2e4\ud589\uacfc\uc815\uacfc \ud30c\uc2f1 \ubc29\ubc95, \ucd5c\uc801\ud654 \uc804\ub7b5\uc5d0 \ub300\ud55c \uc124\uba85",tags:["javascript","browser-parsing","async-defer","performance-optimization","script-loading","web-development","resource-optimization","es-modules","critical-rendering-path"],keywords:["JavaScript \uc2e4\ud589","async\uc640 defer","\uc2a4\ud06c\ub9bd\ud2b8 \ub85c\ub529","\ube0c\ub77c\uc6b0\uc800 \ud30c\uc2f1","\ubaa8\ub4c8 \uc2a4\ud06c\ub9bd\ud2b8","\uc131\ub2a5 \ucd5c\uc801\ud654","\ub9ac\uc18c\uc2a4 \ucd5c\uc801\ud654","\ub80c\ub354\ub9c1 \ucd5c\uc801\ud654"]},i=void 0,r={},o=[{value:"1. JavaScript \uc2e4\ud589\uacfc \ud30c\uc2f1",id:"1-javascript-\uc2e4\ud589\uacfc-\ud30c\uc2f1",level:2},{value:"1.1 \uae30\ubcf8 \ub3d9\uc791",id:"11-\uae30\ubcf8-\ub3d9\uc791",level:3},{value:"1.2 async \uc18d\uc131",id:"12-async-\uc18d\uc131",level:3},{value:"1.3 defer \uc18d\uc131",id:"13-defer-\uc18d\uc131",level:3},{value:"1.4 \ubaa8\ub4c8 \uc2a4\ud06c\ub9bd\ud2b8",id:"14-\ubaa8\ub4c8-\uc2a4\ud06c\ub9bd\ud2b8",level:3},{value:"2. \ucd5c\uc801\ud654 \uc804\ub7b5",id:"2-\ucd5c\uc801\ud654-\uc804\ub7b5",level:2},{value:"2.1 \uc2a4\ud06c\ub9bd\ud2b8 \ucd5c\uc801\ud654",id:"21-\uc2a4\ud06c\ub9bd\ud2b8-\ucd5c\uc801\ud654",level:3},{value:"2.2 \ub80c\ub354\ub9c1 \uc131\ub2a5 \ucd5c\uc801\ud654",id:"22-\ub80c\ub354\ub9c1-\uc131\ub2a5-\ucd5c\uc801\ud654",level:3},{value:"2.3 \ub9ac\uc18c\uc2a4 \ucd5c\uc801\ud654",id:"23-\ub9ac\uc18c\uc2a4-\ucd5c\uc801\ud654",level:3}];function d(n){const s={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...(0,l.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"\uc791\uc131\uc77c : 2025.01.09"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"1-javascript-\uc2e4\ud589\uacfc-\ud30c\uc2f1",children:"1. JavaScript \uc2e4\ud589\uacfc \ud30c\uc2f1"}),"\n",(0,t.jsx)(s.h3,{id:"11-\uae30\ubcf8-\ub3d9\uc791",children:"1.1 \uae30\ubcf8 \ub3d9\uc791"}),"\n",(0,t.jsx)(s.pre,{className:"language-html",children:(0,t.jsxs)(s.code,{className:"language-html",children:[(0,t.jsx)(s.span,{className:"token comment",children:"\x3c!-- \uc77c\ubc18\uc801\uc778 \uc2a4\ud06c\ub9bd\ud2b8 \ub85c\ub529 --\x3e"}),"\n",(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsx)(s.span,{className:"token punctuation",children:"<"}),"script"]})," ",(0,t.jsx)(s.span,{className:"token attr-name",children:"src"}),(0,t.jsxs)(s.span,{className:"token attr-value",children:[(0,t.jsx)(s.span,{className:"token punctuation attr-equals",children:"="}),(0,t.jsx)(s.span,{className:"token punctuation",children:'"'}),"example.js",(0,t.jsx)(s.span,{className:"token punctuation",children:'"'})]}),(0,t.jsx)(s.span,{className:"token punctuation",children:">"})]}),(0,t.jsx)(s.span,{className:"token script"}),(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsx)(s.span,{className:"token punctuation",children:"</"}),"script"]}),(0,t.jsx)(s.span,{className:"token punctuation",children:">"})]}),"\n"]})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"HTML \ud30c\uc2f1 \uc911\ub2e8"}),"\n",(0,t.jsx)(s.li,{children:"\uc2a4\ud06c\ub9bd\ud2b8 \ub2e4\uc6b4\ub85c\ub4dc \ubc0f \uc2e4\ud589 \uc644\ub8cc\uae4c\uc9c0 \ub300\uae30"}),"\n",(0,t.jsx)(s.li,{children:"\uc2e4\ud589 \uc644\ub8cc \ud6c4 \ud30c\uc2f1 \uc7ac\uac1c"}),"\n",(0,t.jsx)(s.li,{children:"DOM \uc870\uc791 \uac00\ub2a5\uc131\uc73c\ub85c \uc778\ud55c \uc704\ud5d8 \uc874\uc7ac"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"12-async-\uc18d\uc131",children:"1.2 async \uc18d\uc131"}),"\n",(0,t.jsx)(s.pre,{className:"language-html",children:(0,t.jsxs)(s.code,{className:"language-html",children:[(0,t.jsx)(s.span,{className:"token comment",children:"\x3c!-- \ube44\ub3d9\uae30 \ub85c\ub529 \ubc0f \uc2e4\ud589 --\x3e"}),"\n",(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsx)(s.span,{className:"token punctuation",children:"<"}),"script"]})," ",(0,t.jsx)(s.span,{className:"token attr-name",children:"async"})," ",(0,t.jsx)(s.span,{className:"token attr-name",children:"src"}),(0,t.jsxs)(s.span,{className:"token attr-value",children:[(0,t.jsx)(s.span,{className:"token punctuation attr-equals",children:"="}),(0,t.jsx)(s.span,{className:"token punctuation",children:'"'}),"analytics.js",(0,t.jsx)(s.span,{className:"token punctuation",children:'"'})]}),(0,t.jsx)(s.span,{className:"token punctuation",children:">"})]}),(0,t.jsx)(s.span,{className:"token script"}),(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsx)(s.span,{className:"token punctuation",children:"</"}),"script"]}),(0,t.jsx)(s.span,{className:"token punctuation",children:">"})]}),"\n"]})}),"\n",(0,t.jsx)(s.p,{children:"\ud2b9\uc9d5:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"HTML \ud30c\uc2f1\uacfc \ubcd1\ub82c\ub85c \uc2a4\ud06c\ub9bd\ud2b8 \ub2e4\uc6b4\ub85c\ub4dc"}),"\n",(0,t.jsx)(s.li,{children:"\ub2e4\uc6b4\ub85c\ub4dc \uc644\ub8cc \uc989\uc2dc \uc2e4\ud589 (\ud30c\uc2f1 \uc911\ub2e8)"}),"\n",(0,t.jsx)(s.li,{children:"\uc2e4\ud589 \uc21c\uc11c \ubcf4\uc7a5\ub418\uc9c0 \uc54a\uc74c"}),"\n",(0,t.jsx)(s.li,{children:"\ub3c5\ub9bd\uc801\uc778 \uc2a4\ud06c\ub9bd\ud2b8\uc5d0 \uc801\ud569 (\uc608: \uad11\uace0, \ubd84\uc11d \ub3c4\uad6c)"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"\uc0ac\uc6a9 \ucf00\uc774\uc2a4:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Google Analytics"}),"\n",(0,t.jsx)(s.li,{children:"\uad11\uace0 \uc2a4\ud06c\ub9bd\ud2b8"}),"\n",(0,t.jsx)(s.li,{children:"\ub3c5\ub9bd\uc801\uc778 \uc704\uc82f"}),"\n",(0,t.jsx)(s.li,{children:"\ub2e4\ub978 \uc2a4\ud06c\ub9bd\ud2b8\uc5d0 \uc758\uc874\uc131\uc774 \uc5c6\ub294 \uae30\ub2a5"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"13-defer-\uc18d\uc131",children:"1.3 defer \uc18d\uc131"}),"\n",(0,t.jsx)(s.pre,{className:"language-html",children:(0,t.jsxs)(s.code,{className:"language-html",children:[(0,t.jsx)(s.span,{className:"token comment",children:"\x3c!-- \uc9c0\uc5f0 \ub85c\ub529 \ubc0f \uc2e4\ud589 --\x3e"}),"\n",(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsx)(s.span,{className:"token punctuation",children:"<"}),"script"]})," ",(0,t.jsx)(s.span,{className:"token attr-name",children:"defer"})," ",(0,t.jsx)(s.span,{className:"token attr-name",children:"src"}),(0,t.jsxs)(s.span,{className:"token attr-value",children:[(0,t.jsx)(s.span,{className:"token punctuation attr-equals",children:"="}),(0,t.jsx)(s.span,{className:"token punctuation",children:'"'}),"main.js",(0,t.jsx)(s.span,{className:"token punctuation",children:'"'})]}),(0,t.jsx)(s.span,{className:"token punctuation",children:">"})]}),(0,t.jsx)(s.span,{className:"token script"}),(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsx)(s.span,{className:"token punctuation",children:"</"}),"script"]}),(0,t.jsx)(s.span,{className:"token punctuation",children:">"})]}),"\n"]})}),"\n",(0,t.jsx)(s.p,{children:"\ud2b9\uc9d5:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"HTML \ud30c\uc2f1\uacfc \ubcd1\ub82c\ub85c \uc2a4\ud06c\ub9bd\ud2b8 \ub2e4\uc6b4\ub85c\ub4dc"}),"\n",(0,t.jsx)(s.li,{children:"HTML \ud30c\uc2f1 \uc644\ub8cc \ud6c4 \uc2e4\ud589"}),"\n",(0,t.jsx)(s.li,{children:"\uc120\uc5b8 \uc21c\uc11c\ub300\ub85c \uc2e4\ud589"}),"\n",(0,t.jsx)(s.li,{children:"DOMContentLoaded \uc774\ubca4\ud2b8 \uc804\uc5d0 \uc2e4\ud589 \ubcf4\uc7a5"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"\uc0ac\uc6a9 \ucf00\uc774\uc2a4:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"\uba54\uc778 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub85c\uc9c1"}),"\n",(0,t.jsx)(s.li,{children:"DOM \uc870\uc791\uc774 \ud544\uc694\ud55c \uc2a4\ud06c\ub9bd\ud2b8"}),"\n",(0,t.jsx)(s.li,{children:"\uc21c\uc11c\uac00 \uc911\uc694\ud55c \uc758\uc874\uc131 \uc788\ub294 \uc2a4\ud06c\ub9bd\ud2b8"}),"\n",(0,t.jsx)(s.li,{children:"\ucd08\uae30 \ud398\uc774\uc9c0 \ub85c\ub4dc\uc5d0 \ud544\uc694\ud558\uc9c0 \uc54a\uc740 \uae30\ub2a5"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"14-\ubaa8\ub4c8-\uc2a4\ud06c\ub9bd\ud2b8",children:"1.4 \ubaa8\ub4c8 \uc2a4\ud06c\ub9bd\ud2b8"}),"\n",(0,t.jsx)(s.pre,{className:"language-html",children:(0,t.jsxs)(s.code,{className:"language-html",children:[(0,t.jsx)(s.span,{className:"token comment",children:"\x3c!-- ES \ubaa8\ub4c8 \uc0ac\uc6a9 --\x3e"}),"\n",(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsx)(s.span,{className:"token punctuation",children:"<"}),"script"]})," ",(0,t.jsx)(s.span,{className:"token attr-name",children:"type"}),(0,t.jsxs)(s.span,{className:"token attr-value",children:[(0,t.jsx)(s.span,{className:"token punctuation attr-equals",children:"="}),(0,t.jsx)(s.span,{className:"token punctuation",children:'"'}),"module",(0,t.jsx)(s.span,{className:"token punctuation",children:'"'})]})," ",(0,t.jsx)(s.span,{className:"token attr-name",children:"src"}),(0,t.jsxs)(s.span,{className:"token attr-value",children:[(0,t.jsx)(s.span,{className:"token punctuation attr-equals",children:"="}),(0,t.jsx)(s.span,{className:"token punctuation",children:'"'}),"app.js",(0,t.jsx)(s.span,{className:"token punctuation",children:'"'})]}),(0,t.jsx)(s.span,{className:"token punctuation",children:">"})]}),(0,t.jsx)(s.span,{className:"token script"}),(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsx)(s.span,{className:"token punctuation",children:"</"}),"script"]}),(0,t.jsx)(s.span,{className:"token punctuation",children:">"})]}),"\n"]})}),"\n",(0,t.jsx)(s.p,{children:"\ud2b9\uc9d5:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"\uae30\ubcf8\uc801\uc73c\ub85c defer\ucc98\ub7fc \ub3d9\uc791"}),"\n",(0,t.jsx)(s.li,{children:"strict mode \uc801\uc6a9"}),"\n",(0,t.jsx)(s.li,{children:"\ud55c \ubc88\ub9cc \uc2e4\ud589\ub428"}),"\n",(0,t.jsx)(s.li,{children:"\ubcc4\ub3c4\uc758 \uc2a4\ucf54\ud504\ub97c \uac00\uc9d0"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"2-\ucd5c\uc801\ud654-\uc804\ub7b5",children:"2. \ucd5c\uc801\ud654 \uc804\ub7b5"}),"\n",(0,t.jsx)(s.h3,{id:"21-\uc2a4\ud06c\ub9bd\ud2b8-\ucd5c\uc801\ud654",children:"2.1 \uc2a4\ud06c\ub9bd\ud2b8 \ucd5c\uc801\ud654"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\uc911\uc694 \uc2a4\ud06c\ub9bd\ud2b8\ub294 ",(0,t.jsx)(s.code,{children:"defer"})," \uc0ac\uc6a9"]}),"\n",(0,t.jsxs)(s.li,{children:["\ub3c5\ub9bd\uc801\uc778 \uc2a4\ud06c\ub9bd\ud2b8\ub294 ",(0,t.jsx)(s.code,{children:"async"})," \uc0ac\uc6a9"]}),"\n",(0,t.jsxs)(s.li,{children:["\uc2a4\ud06c\ub9bd\ud2b8\ub97c ",(0,t.jsx)(s.code,{children:"<body>"})," \ub05d\uc5d0 \ubc30\uce58"]}),"\n",(0,t.jsx)(s.li,{children:"\ucf54\ub4dc \uc2a4\ud50c\ub9ac\ud305 \ubc0f \ub808\uc774\uc9c0 \ub85c\ub529 \uc801\uc6a9"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"22-\ub80c\ub354\ub9c1-\uc131\ub2a5-\ucd5c\uc801\ud654",children:"2.2 \ub80c\ub354\ub9c1 \uc131\ub2a5 \ucd5c\uc801\ud654"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["CSS\ub294 ",(0,t.jsx)(s.code,{children:"<head>"}),"\uc5d0 \ubc30\uce58"]}),"\n",(0,t.jsx)(s.li,{children:"\ubd88\ud544\uc694\ud55c \ub9ac\ud50c\ub85c\uc6b0/\ub9ac\ud398\uc778\ud2b8 \ucd5c\uc18c\ud654"}),"\n",(0,t.jsx)(s.li,{children:"CSS \uc560\ub2c8\uba54\uc774\uc158\uc740 transform/opacity \uc0ac\uc6a9"}),"\n",(0,t.jsx)(s.li,{children:"\ub808\uc774\uc5b4 \ucd5c\uc801\ud654 (will-change \uc18d\uc131 \ud65c\uc6a9)"}),"\n",(0,t.jsx)(s.li,{children:"\uc911\uc694 \ub80c\ub354\ub9c1 \uacbd\ub85c(Critical Rendering Path) \ucd5c\uc801\ud654"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"23-\ub9ac\uc18c\uc2a4-\ucd5c\uc801\ud654",children:"2.3 \ub9ac\uc18c\uc2a4 \ucd5c\uc801\ud654"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"\uc774\ubbf8\uc9c0 \ucd5c\uc801\ud654 (WebP, \uc801\uc808\ud55c \ud06c\uae30)"}),"\n",(0,t.jsx)(s.li,{children:"CSS/JS \ud30c\uc77c \uc555\ucd95"}),"\n",(0,t.jsx)(s.li,{children:"HTTP \uce90\uc2f1 \ud65c\uc6a9"}),"\n",(0,t.jsx)(s.li,{children:"\ud504\ub9ac\ub85c\ub4dc/\ud504\ub9ac\ud398\uce58 \ud78c\ud2b8 \uc0ac\uc6a9"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{className:"language-html",children:(0,t.jsxs)(s.code,{className:"language-html",children:[(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsx)(s.span,{className:"token punctuation",children:"<"}),"link"]})," ",(0,t.jsx)(s.span,{className:"token attr-name",children:"rel"}),(0,t.jsxs)(s.span,{className:"token attr-value",children:[(0,t.jsx)(s.span,{className:"token punctuation attr-equals",children:"="}),(0,t.jsx)(s.span,{className:"token punctuation",children:'"'}),"preload",(0,t.jsx)(s.span,{className:"token punctuation",children:'"'})]})," ",(0,t.jsx)(s.span,{className:"token attr-name",children:"href"}),(0,t.jsxs)(s.span,{className:"token attr-value",children:[(0,t.jsx)(s.span,{className:"token punctuation attr-equals",children:"="}),(0,t.jsx)(s.span,{className:"token punctuation",children:'"'}),"critical.js",(0,t.jsx)(s.span,{className:"token punctuation",children:'"'})]})," ",(0,t.jsx)(s.span,{className:"token attr-name",children:"as"}),(0,t.jsxs)(s.span,{className:"token attr-value",children:[(0,t.jsx)(s.span,{className:"token punctuation attr-equals",children:"="}),(0,t.jsx)(s.span,{className:"token punctuation",children:'"'}),"script",(0,t.jsx)(s.span,{className:"token punctuation",children:'"'})]}),(0,t.jsx)(s.span,{className:"token punctuation",children:">"})]}),"\n",(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsx)(s.span,{className:"token punctuation",children:"<"}),"link"]})," ",(0,t.jsx)(s.span,{className:"token attr-name",children:"rel"}),(0,t.jsxs)(s.span,{className:"token attr-value",children:[(0,t.jsx)(s.span,{className:"token punctuation attr-equals",children:"="}),(0,t.jsx)(s.span,{className:"token punctuation",children:'"'}),"prefetch",(0,t.jsx)(s.span,{className:"token punctuation",children:'"'})]})," ",(0,t.jsx)(s.span,{className:"token attr-name",children:"href"}),(0,t.jsxs)(s.span,{className:"token attr-value",children:[(0,t.jsx)(s.span,{className:"token punctuation attr-equals",children:"="}),(0,t.jsx)(s.span,{className:"token punctuation",children:'"'}),"non-critical.js",(0,t.jsx)(s.span,{className:"token punctuation",children:'"'})]}),(0,t.jsx)(s.span,{className:"token punctuation",children:">"})]}),"\n"]})})]})}function p(n={}){const{wrapper:s}={...(0,l.R)(),...n.components};return s?(0,t.jsx)(s,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},28453:(n,s,e)=>{e.d(s,{R:()=>c,x:()=>i});var a=e(96540);const t={},l=a.createContext(t);function c(n){const s=a.useContext(l);return a.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function i(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),a.createElement(l.Provider,{value:s},n.children)}}}]);