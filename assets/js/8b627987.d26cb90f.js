"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[7210],{5638:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>r,toc:()=>t});var i=l(4848),s=l(8453);const d={},c=void 0,r={id:"Vue.js/Vue directive",title:"Vue directive",description:"\uc791\uc131\uc77c : 2024.11.13",source:"@site/docs/Vue.js/Vue directive.md",sourceDirName:"Vue.js",slug:"/Vue.js/Vue directive",permalink:"/zora_story/docs/Vue.js/Vue directive",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"studySidebar",previous:{title:"react hook",permalink:"/zora_story/docs/React.js/react hook"},next:{title:"Vue \ud575\uc2ec \uc18d\uc131",permalink:"/zora_story/docs/Vue.js/Vue \ud575\uc2ec \uc18d\uc131"}},h={},t=[{value:"\ub514\ub809\ud2f0\ube0c\uc758 \uae30\ubcf8 \uad6c\uc870",id:"\ub514\ub809\ud2f0\ube0c\uc758-\uae30\ubcf8-\uad6c\uc870",level:2},{value:"\uc8fc\uc694 \ub514\ub809\ud2f0\ube0c \uc0c1\uc138 \uc124\uba85",id:"\uc8fc\uc694-\ub514\ub809\ud2f0\ube0c-\uc0c1\uc138-\uc124\uba85",level:2},{value:"1. v-bind",id:"1-v-bind",level:3},{value:"\uc5ed\ud560:",id:"\uc5ed\ud560",level:5},{value:"2. v-on",id:"2-v-on",level:3},{value:"\uc5ed\ud560:",id:"\uc5ed\ud560-1",level:5},{value:"3. v-model",id:"3-v-model",level:3},{value:"\uc5ed\ud560:",id:"\uc5ed\ud560-2",level:5},{value:"4. v-if, v-else-if, v-else",id:"4-v-if-v-else-if-v-else",level:3},{value:"\uc5ed\ud560:",id:"\uc5ed\ud560-3",level:5},{value:"5. v-show",id:"5-v-show",level:3},{value:"\uc5ed\ud560:",id:"\uc5ed\ud560-4",level:5},{value:"6. v-for",id:"6-v-for",level:3},{value:"\uc5ed\ud560:",id:"\uc5ed\ud560-5",level:5},{value:"7. v-text",id:"7-v-text",level:3},{value:"\uc5ed\ud560:",id:"\uc5ed\ud560-6",level:5},{value:"8. v-html",id:"8-v-html",level:3},{value:"\uc5ed\ud560:",id:"\uc5ed\ud560-7",level:5},{value:"9. v-pre",id:"9-v-pre",level:3},{value:"\uc5ed\ud560:",id:"\uc5ed\ud560-8",level:5},{value:"10. v-cloak",id:"10-v-cloak",level:3},{value:"\uc5ed\ud560:",id:"\uc5ed\ud560-9",level:5},{value:"11. v-once",id:"11-v-once",level:3},{value:"\uc5ed\ud560:",id:"\uc5ed\ud560-10",level:5},{value:"12. v-slot",id:"12-v-slot",level:3},{value:"\uc5ed\ud560:",id:"\uc5ed\ud560-11",level:5},{value:"\ub514\ub809\ud2f0\ube0c \uc0ac\uc6a9 \uc2dc \uc8fc\uc758\uc0ac\ud56d",id:"\ub514\ub809\ud2f0\ube0c-\uc0ac\uc6a9-\uc2dc-\uc8fc\uc758\uc0ac\ud56d",level:2},{value:"\uc2e4\uc804 \ud65c\uc6a9 \uc608\uc2dc:",id:"\uc2e4\uc804-\ud65c\uc6a9-\uc608\uc2dc",level:2}];function v(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\uc791\uc131\uc77c : 2024.11.13"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Vue.js\uc5d0\uc11c \ub514\ub809\ud2f0\ube0c(Directive)\ub294 ",(0,i.jsx)(n.code,{children:"v-"})," \uc811\ub450\uc0ac\uac00 \ubd99\uc740 \ud2b9\uc218\ud55c \uc18d\uc131\uc73c\ub85c, DOM \uc5d8\ub9ac\uba3c\ud2b8\uc5d0 \ud2b9\ubcc4\ud55c \ubc18\uc751\ud615 \ub3d9\uc791\uc774\ub098 \uae30\ub2a5\uc744 \ubd80\uc5ec\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.h2,{id:"\ub514\ub809\ud2f0\ube0c\uc758-\uae30\ubcf8-\uad6c\uc870",children:"\ub514\ub809\ud2f0\ube0c\uc758 \uae30\ubcf8 \uad6c\uc870"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<element v-directive[:argument].[modifiers]="value"> </element>\n'})}),"\n",(0,i.jsx)(n.p,{children:"\uac01 \ubd80\ubd84\uc758 \uc758\ubbf8:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"v-directive"}),": \ub514\ub809\ud2f0\ube0c \uc774\ub984"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"argument"}),": \ub514\ub809\ud2f0\ube0c\uac00 \ubc1b\uc744 \uc218 \uc788\ub294 \uc778\uc790"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"modifiers"}),": \ub514\ub809\ud2f0\ube0c\uc758 \ub3d9\uc791\uc744 \ubcc0\ud615\ud558\ub294 \uc218\uc2dd\uc5b4"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"value"}),": \ub514\ub809\ud2f0\ube0c\uc5d0 \uc804\ub2ec\ub418\ub294 \uac12"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\uc8fc\uc694-\ub514\ub809\ud2f0\ube0c-\uc0c1\uc138-\uc124\uba85",children:"\uc8fc\uc694 \ub514\ub809\ud2f0\ube0c \uc0c1\uc138 \uc124\uba85"}),"\n",(0,i.jsx)(n.h3,{id:"1-v-bind",children:"1. v-bind"}),"\n",(0,i.jsx)(n.p,{children:"\ub370\uc774\ud130\ub97c HTML \uc18d\uc131\uc5d0 \ubc14\uc778\ub529\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h5,{id:"\uc5ed\ud560",children:"\uc5ed\ud560:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"HTML \uc18d\uc131\uacfc Vue \ub370\uc774\ud130\ub97c \ub3d9\uc801\uc73c\ub85c \uc5f0\uacb0"}),"\n",(0,i.jsx)(n.li,{children:"class\ub098 style \ubc14\uc778\ub529\uc5d0 \ud2b9\ubcc4\ud55c \uae30\ub2a5 \uc81c\uacf5"}),"\n",(0,i.jsx)(n.li,{children:"props \uc804\ub2ec\uc5d0 \uc0ac\uc6a9"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'\x3c!-- \uae30\ubcf8 \ubb38\ubc95 --\x3e\n<img v-bind:src="imagePath" />\n\x3c!-- \ucd95\uc57d\ud615 --\x3e\n<img :src="imagePath" />\n'})}),"\n",(0,i.jsx)(n.h3,{id:"2-v-on",children:"2. v-on"}),"\n",(0,i.jsx)(n.p,{children:"\uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108\ub97c \uc5f0\uacb0\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h5,{id:"\uc5ed\ud560-1",children:"\uc5ed\ud560:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"DOM \uc774\ubca4\ud2b8 \uc218\uc2e0 \ubc0f \ucc98\ub9ac"}),"\n",(0,i.jsx)(n.li,{children:"\uba54\uc11c\ub4dc \ud638\ucd9c\uc774\ub098 \uc778\ub77c\uc778 \ud45c\ud604\uc2dd \uc2e4\ud589"}),"\n",(0,i.jsx)(n.li,{children:"\uc774\ubca4\ud2b8 \uc218\uc2dd\uc5b4\ub97c \ud1b5\ud55c \uc774\ubca4\ud2b8 \ucc98\ub9ac \uc81c\uc5b4"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'\x3c!-- \uae30\ubcf8 \ubb38\ubc95 --\x3e\n<button v-on:click="handleClick">\n  \x3c!-- \ucd95\uc57d\ud615 --\x3e\n  <button @click="handleClick"></button>\n</button>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"3-v-model",children:"3. v-model"}),"\n",(0,i.jsx)(n.p,{children:"\uc591\ubc29\ud5a5 \ub370\uc774\ud130 \ubc14\uc778\ub529\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h5,{id:"\uc5ed\ud560-2",children:"\uc5ed\ud560:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ud3fc \uc785\ub825\uacfc \ub370\uc774\ud130\ub97c \uc591\ubc29\ud5a5\uc73c\ub85c \ub3d9\uae30\ud654"}),"\n",(0,i.jsx)(n.li,{children:"\uc785\ub825 \uc694\uc18c\uc758 \uac12\uacfc Vue \ub370\uc774\ud130\ub97c \uc790\ub3d9\uc73c\ub85c \uc5f0\uacb0"}),"\n",(0,i.jsx)(n.li,{children:"\ub2e4\uc591\ud55c \uc785\ub825 \ud0c0\uc785(text, checkbox, radio \ub4f1)\uc9c0\uc6d0"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<input v-model="message" />\n'})}),"\n",(0,i.jsx)(n.h3,{id:"4-v-if-v-else-if-v-else",children:"4. v-if, v-else-if, v-else"}),"\n",(0,i.jsx)(n.p,{children:"\uc870\uac74\ubd80 \ub80c\ub354\ub9c1\uc744 \uc218\ud589\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h5,{id:"\uc5ed\ud560-3",children:"\uc5ed\ud560:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\uc870\uac74\uc5d0 \ub530\ub77c DOM \uc694\uc18c\ub97c \uc0dd\uc131/\uc81c\uac70"}),"\n",(0,i.jsx)(n.li,{children:"\uc5ec\ub7ec \uc870\uac74 \ubd84\uae30 \ucc98\ub9ac"}),"\n",(0,i.jsx)(n.li,{children:"template \ud0dc\uadf8\uc640 \ud568\uaed8 \uadf8\ub8f9 \ub80c\ub354\ub9c1 \uac00\ub2a5"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<div v-if=\"type === 'A'\">A</div>\n<div v-else-if=\"type === 'B'\">B</div>\n<div v-else>Not A/B</div>\n"})}),"\n",(0,i.jsx)(n.h3,{id:"5-v-show",children:"5. v-show"}),"\n",(0,i.jsx)(n.p,{children:"\uc870\uac74\ubd80\ub85c \uc694\uc18c\ub97c \ud45c\uc2dc/\uc228\uae40 \ucc98\ub9ac\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h5,{id:"\uc5ed\ud560-4",children:"\uc5ed\ud560:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"display CSS \uc18d\uc131\uc744 \ud1b5\ud55c \uac00\uc2dc\uc131 \uc81c\uc5b4"}),"\n",(0,i.jsx)(n.li,{children:"\ucd08\uae30 \ub80c\ub354\ub9c1 \ube44\uc6a9\uc774 \ub192\uc9c0\ub9cc \ud1a0\uae00 \ube44\uc6a9\uc774 \ub0ae\uc74c"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<div v-show="isVisible"></div>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"6-v-for",children:"6. v-for"}),"\n",(0,i.jsx)(n.p,{children:"\ubc30\uc5f4\uc774\ub098 \uac1d\uccb4\ub97c \ubc18\ubcf5\ud558\uc5ec \ub80c\ub354\ub9c1\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h5,{id:"\uc5ed\ud560-5",children:"\uc5ed\ud560:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ub370\uc774\ud130 collection\uc744 \ubc18\ubcf5\ud558\uc5ec \ub80c\ub354\ub9c1"}),"\n",(0,i.jsx)(n.li,{children:"\ubc30\uc5f4, \uac1d\uccb4, \uc22b\uc790 \ubc94\uc704 \ubc18\ubcf5 \uac00\ub2a5"}),"\n",(0,i.jsx)(n.li,{children:"key \uc18d\uc131\uc744 \ud1b5\ud55c \ud6a8\uc728\uc801\uc778 \ub9ac\ub80c\ub354\ub9c1"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<div v-for="(item, index) in items" :key="item.id"></div>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"7-v-text",children:"7. v-text"}),"\n",(0,i.jsx)(n.p,{children:"\ud14d\uc2a4\ud2b8 \ucf58\ud150\uce20\ub97c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h5,{id:"\uc5ed\ud560-6",children:"\uc5ed\ud560:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\uc694\uc18c\uc758 \ud14d\uc2a4\ud2b8 \ucf58\ud150\uce20\ub97c \uc124\uc815"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"{{ }}"})," \ubb38\ubc95\uc758 \ub300\uc548"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<span v-text="msg"></span>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"8-v-html",children:"8. v-html"}),"\n",(0,i.jsx)(n.p,{children:"HTML \ucf58\ud150\uce20\ub97c \uc0bd\uc785\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h5,{id:"\uc5ed\ud560-7",children:"\uc5ed\ud560:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"raw HTML\uc744 \ucd9c\ub825"}),"\n",(0,i.jsx)(n.li,{children:"XSS \ucde8\uc57d\uc810 \uc8fc\uc758 \ud544\uc694"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<div v-html="htmlContent"></div>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"9-v-pre",children:"9. v-pre"}),"\n",(0,i.jsx)(n.p,{children:"\ucef4\ud30c\uc77c\uc744 \uac74\ub108\ub701\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h5,{id:"\uc5ed\ud560-8",children:"\uc5ed\ud560:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Vue \ucef4\ud30c\uc77c\uc744 \uac74\ub108\ub6f0\uace0 raw \ud14d\uc2a4\ud2b8 \ud45c\uc2dc"}),"\n",(0,i.jsx)(n.li,{children:"\uc131\ub2a5 \ucd5c\uc801\ud654\uc5d0 \uc0ac\uc6a9"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<span v-pre>{{ \uc774 \ubd80\ubd84\uc740 \ucef4\ud30c\uc77c\ub418\uc9c0 \uc54a\uc74c }}</span>\n"})}),"\n",(0,i.jsx)(n.h3,{id:"10-v-cloak",children:"10. v-cloak"}),"\n",(0,i.jsx)(n.p,{children:"\ucef4\ud30c\uc77c\uc774 \uc644\ub8cc\ub420 \ub54c\uae4c\uc9c0 \uc694\uc18c\ub97c \uc228\uae41\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h5,{id:"\uc5ed\ud560-9",children:"\uc5ed\ud560:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ucef4\ud30c\uc77c \uc804 \ud15c\ud50c\ub9bf \uae5c\ube61\uc784 \ubc29\uc9c0"}),"\n",(0,i.jsx)(n.li,{children:"CSS\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud558\uc5ec \ucd08\uae30 \ub85c\ub529 \uc0c1\ud0dc \uc81c\uc5b4"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<div v-cloak>{{ message }}</div>\n"})}),"\n",(0,i.jsx)(n.h3,{id:"11-v-once",children:"11. v-once"}),"\n",(0,i.jsx)(n.p,{children:"\uc77c\ud68c\uc131 \ub80c\ub354\ub9c1\uc744 \uc218\ud589\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h5,{id:"\uc5ed\ud560-10",children:"\uc5ed\ud560:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ucd08\uae30 \ub80c\ub354\ub9c1 \ud6c4 \ub354 \uc774\uc0c1 \uc5c5\ub370\uc774\ud2b8\ud558\uc9c0 \uc54a\uc74c"}),"\n",(0,i.jsx)(n.li,{children:"\uc815\uc801 \ucf58\ud150\uce20 \ucd5c\uc801\ud654\uc5d0 \uc0ac\uc6a9"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<div v-once>{{ message }}</div>\n"})}),"\n",(0,i.jsx)(n.h3,{id:"12-v-slot",children:"12. v-slot"}),"\n",(0,i.jsx)(n.p,{children:"\uba85\uba85\ub41c \uc2ac\ub86f\uc774\ub098 \ubc94\uc704\ub97c \uac00\uc9c4 \uc2ac\ub86f\uc744 \uc815\uc758\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h5,{id:"\uc5ed\ud560-11",children:"\uc5ed\ud560:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ucef4\ud3ec\ub10c\ud2b8\uc758 \uc2ac\ub86f \ucf58\ud150\uce20 \uc804\ub2ec"}),"\n",(0,i.jsx)(n.li,{children:"\uc774\ub984 \uc788\ub294 \uc2ac\ub86f\uacfc \uc2a4\ucf54\ud504\ub4dc \uc2ac\ub86f \uad6c\ud604"}),"\n",(0,i.jsx)(n.li,{children:"\ucef4\ud3ec\ub10c\ud2b8 \uc7ac\uc0ac\uc6a9\uc131 \ud5a5\uc0c1"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<template v-slot:header="slotProps"></template>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\ub514\ub809\ud2f0\ube0c-\uc0ac\uc6a9-\uc2dc-\uc8fc\uc758\uc0ac\ud56d",children:"\ub514\ub809\ud2f0\ube0c \uc0ac\uc6a9 \uc2dc \uc8fc\uc758\uc0ac\ud56d"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\uc131\ub2a5 \uace0\ub824"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"v-if vs v-show \uc120\ud0dd \uc2dc \ud1a0\uae00 \ube48\ub3c4 \uace0\ub824"}),"\n",(0,i.jsx)(n.li,{children:"v-for \uc0ac\uc6a9 \uc2dc \ud56d\uc0c1 key \uc18d\uc131 \uc9c0\uc815"}),"\n",(0,i.jsx)(n.li,{children:"v-once \uc0ac\uc6a9\uc73c\ub85c \ubd88\ud544\uc694\ud55c \uc7ac\ub80c\ub354\ub9c1 \ubc29\uc9c0"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"\ubcf4\uc548 \uace0\ub824"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"v-html \uc0ac\uc6a9 \uc2dc XSS \uacf5\uaca9 \uc704\ud5d8 \uc8fc\uc758"}),"\n",(0,i.jsx)(n.li,{children:"\uc0ac\uc6a9\uc790 \uc785\ub825 \ub370\uc774\ud130 \uc801\uc808\ud55c sanitize \ud544\uc694"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"\ucd5c\uc801\ud654 \uace0\ub824"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\uacfc\ub3c4\ud55c \uc591\ubc29\ud5a5 \ubc14\uc778\ub529 \uc9c0\uc591"}),"\n",(0,i.jsx)(n.li,{children:"\ud070 \ubaa9\ub85d\uc740 \uac00\uc0c1 \uc2a4\ud06c\ub864\ub9c1 \uace0\ub824"}),"\n",(0,i.jsx)(n.li,{children:"\uc870\uac74\ubd80 \ub80c\ub354\ub9c1 \uc2dc \uc801\uc808\ud55c \ub514\ub809\ud2f0\ube0c \uc120\ud0dd"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\uc2e4\uc804-\ud65c\uc6a9-\uc608\uc2dc",children:"\uc2e4\uc804 \ud65c\uc6a9 \uc608\uc2dc:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<template>\n  <div class="user-list">\n    \x3c!-- \uc870\uac74\ubd80 \ub80c\ub354\ub9c1 --\x3e\n    <div v-if="loading" v-once>Loading template...</div>\n\n    \x3c!-- \ub9ac\uc2a4\ud2b8 \ub80c\ub354\ub9c1 --\x3e\n    <template v-else>\n      <div\n        v-for="user in users"\n        :key="user.id"\n        :class="{ active: selectedId === user.id }"\n        @click="selectUser(user)"\n      >\n        \x3c!-- \uc18d\uc131 \ubc14\uc778\ub529 --\x3e\n        <img :src="user.avatar" :alt="user.name" />\n\n        \x3c!-- \uc591\ubc29\ud5a5 \ubc14\uc778\ub529 --\x3e\n        <input v-model.trim="user.name" @input="updateUser(user)" />\n\n        \x3c!-- \uc774\ubca4\ud2b8 \ucc98\ub9ac --\x3e\n        <button @click.stop="deleteUser(user)" :disabled="isProcessing">\n          Delete\n        </button>\n      </div>\n    </template>\n  </div>\n</template>\n'})}),"\n",(0,i.jsx)(n.p,{children:"\ub514\ub809\ud2f0\ube0c\ub294 Vue.js\uc758 \ud575\uc2ec \uae30\ub2a5\uc73c\ub85c, \uc774\ub4e4\uc744 \uc801\uc808\ud788 \uc870\ud569\ud558\uc5ec \uc0ac\uc6a9\ud558\uba74 \ub3d9\uc801\uc774\uace0 \ubc18\uc751\uc801\uc778 UI\ub97c \ud6a8\uacfc\uc801\uc73c\ub85c \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(v,{...e})}):v(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>c,x:()=>r});var i=l(6540);const s={},d=i.createContext(s);function c(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);