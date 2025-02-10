"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[71206],{17007:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"Vue.js/Cypress vs Nightwatch vs Playwright","title":"Cypress vs Nightwatch vs Playwright","description":"\uc791\uc131\uc77c : 2025.02.11","source":"@site/docs/07. Vue.js/079908. Cypress vs Nightwatch vs Playwright.md","sourceDirName":"07. Vue.js","slug":"/Vue.js/Cypress vs Nightwatch vs Playwright","permalink":"/zora_story/docs/Vue.js/Cypress vs Nightwatch vs Playwright","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":79908,"frontMatter":{},"sidebar":"studySidebar","previous":{"title":"public\uacfc src \ud3f4\ub354 \ucc28\uc774","permalink":"/zora_story/docs/Vue.js/public\uacfc src \ud3f4\ub354 \ucc28\uc774"},"next":{"title":"Vue.js \uba74\uc811 \uc900\ube44","permalink":"/zora_story/docs/Vue.js/Vue.js \uba74\uc811 \uc900\ube44"}}');var n=t(74848),i=t(28453);const c={},o=void 0,l={},h=[{value:"Cypress: \uac1c\ubc1c\uc790 \uacbd\ud5d8\uc5d0 \ucd5c\uc801\ud654\ub41c \ubaa8\ub358 \ud14c\uc2a4\ud2b8 \ub3c4\uad6c",id:"cypress-\uac1c\ubc1c\uc790-\uacbd\ud5d8\uc5d0-\ucd5c\uc801\ud654\ub41c-\ubaa8\ub358-\ud14c\uc2a4\ud2b8-\ub3c4\uad6c",level:2},{value:"Nightwatch: \uc548\uc815\uc131\uacfc \ud655\uc7a5\uc131\uc744 \uac16\ucd98 \ubca0\ud14c\ub791",id:"nightwatch-\uc548\uc815\uc131\uacfc-\ud655\uc7a5\uc131\uc744-\uac16\ucd98-\ubca0\ud14c\ub791",level:2},{value:"Playwright: \ucc28\uc138\ub300 \ube0c\ub77c\uc6b0\uc800 \uc790\ub3d9\ud654\uc758 \uac15\uc790",id:"playwright-\ucc28\uc138\ub300-\ube0c\ub77c\uc6b0\uc800-\uc790\ub3d9\ud654\uc758-\uac15\uc790",level:2},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}];function a(e){const s={blockquote:"blockquote",h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"\uc791\uc131\uc77c : 2025.02.11"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"\ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790\ub77c\uba74 \ub204\uad6c\ub098 \ud55c \ubc88\ucbe4 \uace0\ubbfc\ud574\ubd24\uc744 E2E \ud14c\uc2a4\ud2b8 \ud504\ub808\uc784\uc6cc\ud06c \uc120\ud0dd. \uc624\ub298\uc740 \uac00\uc7a5 \uc778\uae30 \uc788\ub294 \uc138 \uac00\uc9c0 \ud504\ub808\uc784\uc6cc\ud06c\uc758 \ud2b9\uc9d5\uc744 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,n.jsx)(s.h2,{id:"cypress-\uac1c\ubc1c\uc790-\uacbd\ud5d8\uc5d0-\ucd5c\uc801\ud654\ub41c-\ubaa8\ub358-\ud14c\uc2a4\ud2b8-\ub3c4\uad6c",children:"Cypress: \uac1c\ubc1c\uc790 \uacbd\ud5d8\uc5d0 \ucd5c\uc801\ud654\ub41c \ubaa8\ub358 \ud14c\uc2a4\ud2b8 \ub3c4\uad6c"}),"\n",(0,n.jsx)(s.p,{children:"Cypress\ub294 \uc2e4\uc2dc\uac04\uc73c\ub85c \ud14c\uc2a4\ud2b8\uac00 \uc2e4\ud589\ub418\ub294 \ubaa8\uc2b5\uc744 \ubcfc \uc218 \uc788\uc5b4 \ub514\ubc84\uae45\uc774 \ub9e4\uc6b0 \uc9c1\uad00\uc801\uc785\ub2c8\ub2e4. \ud2b9\ud788 \ud0c0\uc784\ud2b8\ub798\ube14 \ub514\ubc84\uae45 \uae30\ub2a5\uc740 \ud14c\uc2a4\ud2b8 \uc2e4\ud328 \uc6d0\uc778\uc744 \ucc3e\ub294 \ub370 \ud070 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4. \ub610\ud55c \uc790\ub3d9 \ub300\uae30 \uae30\ub2a5\uc774 \ub0b4\uc7a5\ub418\uc5b4 \uc788\uc5b4 \ubd88\uc548\uc815\ud55c \ud14c\uc2a4\ud2b8\ub97c \ud06c\uac8c \uc904\uc77c \uc218 \uc788\uc8e0."}),"\n",(0,n.jsx)(s.p,{children:"\ub2e8, \ud06c\ub85c\uc2a4 \ube0c\ub77c\uc6b0\uc800 \ud14c\uc2a4\ud2b8\uc5d0\ub294 \uc57d\uac04\uc758 \uc81c\ud55c\uc774 \uc788\uc2b5\ub2c8\ub2e4. Chrome \uae30\ubc18 \ube0c\ub77c\uc6b0\uc800\uc640 Firefox\ub9cc \uc9c0\uc6d0\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."}),"\n",(0,n.jsx)(s.h2,{id:"nightwatch-\uc548\uc815\uc131\uacfc-\ud655\uc7a5\uc131\uc744-\uac16\ucd98-\ubca0\ud14c\ub791",children:"Nightwatch: \uc548\uc815\uc131\uacfc \ud655\uc7a5\uc131\uc744 \uac16\ucd98 \ubca0\ud14c\ub791"}),"\n",(0,n.jsx)(s.p,{children:"Selenium WebDriver\ub97c \uae30\ubc18\uc73c\ub85c \ud558\ub294 Nightwatch\ub294 \uc624\ub79c \uc2dc\uac04 \uac80\uc99d\ub41c \uc548\uc815\uc131\uc774 \uac15\uc810\uc785\ub2c8\ub2e4. \uc9c1\uad00\uc801\uc778 \ubb38\ubc95\uc73c\ub85c \ud14c\uc2a4\ud2b8 \ucf54\ub4dc \uc791\uc131\uc774 \uc27d\uace0, Jenkins\ub098 CircleCI \uac19\uc740 CI \ub3c4\uad6c\uc640\uc758 \ud1b5\ud569\ub3c4 \uac04\ub2e8\ud569\ub2c8\ub2e4."}),"\n",(0,n.jsx)(s.p,{children:"\uc790\ub3d9\uc73c\ub85c \uc0dd\uc131\ub418\ub294 \ud14c\uc2a4\ud2b8 \ub9ac\ud3ec\ud2b8\ub294 QA \ud300\uacfc\uc758 \ud611\uc5c5\uc5d0\uc11c \ud2b9\ud788 \uc720\uc6a9\ud558\uac8c \uc0ac\uc6a9\ub429\ub2c8\ub2e4."}),"\n",(0,n.jsx)(s.h2,{id:"playwright-\ucc28\uc138\ub300-\ube0c\ub77c\uc6b0\uc800-\uc790\ub3d9\ud654\uc758-\uac15\uc790",children:"Playwright: \ucc28\uc138\ub300 \ube0c\ub77c\uc6b0\uc800 \uc790\ub3d9\ud654\uc758 \uac15\uc790"}),"\n",(0,n.jsx)(s.p,{children:"Microsoft\uac00 \uac1c\ubc1c\ud55c Playwright\ub294 Chromium, Firefox, WebKit \ub4f1 \ubaa8\ub4e0 \uc8fc\uc694 \ube0c\ub77c\uc6b0\uc800 \uc5d4\uc9c4\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4. \ub124\ud2b8\uc6cc\ud06c \uc694\uccad \ubaa8\ud0b9, \ud30c\uc77c \ub2e4\uc6b4\ub85c\ub4dc \ucc98\ub9ac \uac19\uc740 \uace0\uae09 \uae30\ub2a5\ub3c4 \uae30\ubcf8\uc73c\ub85c \uc81c\uacf5\ud558\uc8e0."}),"\n",(0,n.jsx)(s.p,{children:"\ud2b9\ud788 \ubaa8\ubc14\uc77c \uc5d0\ubbac\ub808\uc774\uc158\uacfc \ubcd1\ub82c \ud14c\uc2a4\ud2b8 \uc2e4\ud589 \uae30\ub2a5\uc740 \ud604\ub300 \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ud14c\uc2a4\ud2b8\uc5d0 \ub9e4\uc6b0 \uc801\ud569\ud569\ub2c8\ub2e4."}),"\n",(0,n.jsx)(s.h2,{id:"\uacb0\ub860",children:"\uacb0\ub860"}),"\n",(0,n.jsx)(s.p,{children:"\uac01 \ud504\ub808\uc784\uc6cc\ud06c\ub294 \uc800\ub9c8\ub2e4\uc758 \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4. Cypress\ub294 \uac1c\ubc1c\uc790 \uacbd\ud5d8, Nightwatch\ub294 \uc548\uc815\uc131, Playwright\ub294 \ub2e4\uc7ac\ub2e4\ub2a5\ud568\uc774 \ub3cb\ubcf4\uc774\uc8e0. \ud504\ub85c\uc81d\ud2b8\uc758 \ud2b9\uc131\uacfc \ud300\uc758 \uc0c1\ud669\uc5d0 \ub9de\ub294 \ub3c4\uad6c\ub97c \uc120\ud0dd\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4."})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>o});var r=t(96540);const n={},i=r.createContext(n);function c(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);