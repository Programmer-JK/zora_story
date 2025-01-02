"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[2236],{9211:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>c,metadata:()=>r,toc:()=>x});var t=s(4848),l=s(8453);const c={},i=void 0,r={id:"Vue.js/v-text vs mustache syntax",title:"v-text vs mustache syntax",description:"\uc791\uc131\uc77c : 2024.11.13",source:"@site/docs/Vue.js/v-text vs mustache syntax.md",sourceDirName:"Vue.js",slug:"/Vue.js/v-text vs mustache syntax",permalink:"/zora_story/ko/docs/Vue.js/v-text vs mustache syntax",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"studySidebar",previous:{title:"v-bind vs v-model",permalink:"/zora_story/ko/docs/Vue.js/v-bind vs v-model"},next:{title:"python \uc790\ub8cc\ud615",permalink:"/zora_story/ko/docs/python/python \uc790\ub8cc\ud615"}},d={},x=[{value:"1. \uae30\ubcf8 \ubb38\ubc95",id:"1-\uae30\ubcf8-\ubb38\ubc95",level:2},{value:"2. \uc8fc\uc694 \ucc28\uc774\uc810",id:"2-\uc8fc\uc694-\ucc28\uc774\uc810",level:2},{value:"2-1) HTML \uc774\uc2a4\ucf00\uc774\ud504",id:"2-1-html-\uc774\uc2a4\ucf00\uc774\ud504",level:3},{value:"2-2) \ub0b4\uc6a9 \uad50\uccb4 \ubc29\uc2dd",id:"2-2-\ub0b4\uc6a9-\uad50\uccb4-\ubc29\uc2dd",level:3},{value:"2-3) \ucd08\uae30 \ub80c\ub354\ub9c1",id:"2-3-\ucd08\uae30-\ub80c\ub354\ub9c1",level:3},{value:"2-4) \uc131\ub2a5",id:"2-4-\uc131\ub2a5",level:3},{value:"3. \uc0ac\uc6a9 \uad8c\uc7a5 \uc0c1\ud669",id:"3-\uc0ac\uc6a9-\uad8c\uc7a5-\uc0c1\ud669",level:2}];function a(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\uc791\uc131\uc77c : 2024.11.13"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"1-\uae30\ubcf8-\ubb38\ubc95",children:"1. \uae30\ubcf8 \ubb38\ubc95"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'\x3c!-- \uba38\uc2a4\ud0dc\uc2dc \ubb38\ubc95 --\x3e\n<span>{{ message }}</span>\n\n\x3c!-- v-text --\x3e\n<span v-text="message"></span>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"2-\uc8fc\uc694-\ucc28\uc774\uc810",children:"2. \uc8fc\uc694 \ucc28\uc774\uc810"}),"\n",(0,t.jsx)(n.h3,{id:"2-1-html-\uc774\uc2a4\ucf00\uc774\ud504",children:"2-1) HTML \uc774\uc2a4\ucf00\uc774\ud504"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\ub450 \ubc29\uc2dd \ubaa8\ub450 HTML\uc744 \uc774\uc2a4\ucf00\uc774\ud504 \ucc98\ub9ac\ud569\ub2c8\ub2e4"}),"\n",(0,t.jsx)(n.li,{children:"XSS \uacf5\uaca9 \ubc29\uc9c0\ub97c \uc704\ud574 HTML \ud0dc\uadf8\ub97c \ubb38\uc790 \uadf8\ub300\ub85c \ud45c\uc2dc\ud569\ub2c8\ub2e4"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"2-2-\ub0b4\uc6a9-\uad50\uccb4-\ubc29\uc2dd",children:"2-2) \ub0b4\uc6a9 \uad50\uccb4 \ubc29\uc2dd"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'\x3c!-- \uba38\uc2a4\ud0dc\uc2dc \ubb38\ubc95: \ubd80\ubd84 \uad50\uccb4 \uac00\ub2a5 --\x3e\n<span>\uc774\uac83\uc740 {{ message }} \uc785\ub2c8\ub2e4</span>\n\x3c!-- "\uc774\uac83\uc740 Hello \uc785\ub2c8\ub2e4" --\x3e\n\n\x3c!-- v-text: \ud56d\uc0c1 \uc804\uccb4 \ub0b4\uc6a9\uc744 \uad50\uccb4 --\x3e\n<span v-text="message">\uc774\uac83\uc740 \ubb34\uc2dc\ub429\ub2c8\ub2e4</span>\n\x3c!-- "Hello" --\x3e\n'})}),"\n",(0,t.jsx)(n.h3,{id:"2-3-\ucd08\uae30-\ub80c\ub354\ub9c1",children:"2-3) \ucd08\uae30 \ub80c\ub354\ub9c1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'\x3c!-- \uba38\uc2a4\ud0dc\uc2dc: Vue\uac00 \ub85c\ub4dc\ub418\uae30 \uc804\uc5d0 \uc7a0\uc2dc \ud45c\uc2dc\ub420 \uc218 \uc788\uc74c --\x3e\n<span>{{ message }}</span>\n\x3c!-- \uc7a0\uae50 "{{ message }}" \uac00 \ubcf4\uc77c \uc218 \uc788\uc74c --\x3e\n\n\x3c!-- v-text: \ucd08\uae30\uc5d0 \uc544\ubb34\uac83\ub3c4 \ud45c\uc2dc\ub418\uc9c0 \uc54a\uc74c --\x3e\n<span v-text="message"></span>\n\x3c!-- \ube48 \uc0c1\ud0dc\ub85c \uc2dc\uc791 --\x3e\n'})}),"\n",(0,t.jsx)(n.h3,{id:"2-4-\uc131\ub2a5",children:"2-4) \uc131\ub2a5"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"v-text\uac00 \uba38\uc2a4\ud0dc\uc2dc \ubb38\ubc95\ubcf4\ub2e4 \ubbf8\uc138\ud558\uac8c \ub354 \ube60\ub984"}),"\n",(0,t.jsx)(n.li,{children:"\ucef4\ud30c\uc77c \uacfc\uc815\uc774 \ub354 \ub2e8\uc21c\ud558\uae30 \ub54c\ubb38"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"3-\uc0ac\uc6a9-\uad8c\uc7a5-\uc0c1\ud669",children:"3. \uc0ac\uc6a9 \uad8c\uc7a5 \uc0c1\ud669"}),"\n",(0,t.jsxs)(n.p,{children:["\uba38\uc2a4\ud0dc\uc2dc(",(0,t.jsx)(n.code,{children:"{{}}"}),") \uc0ac\uc6a9\uc774 \uc88b\uc744 \ub54c:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\ud14d\uc2a4\ud2b8\uc758 \uc77c\ubd80\ubd84\ub9cc \ub3d9\uc801\uc73c\ub85c \ubcc0\uacbd\ud558\uace0 \uc2f6\uc744 \ub54c"}),"\n",(0,t.jsx)(n.li,{children:"\ub354 \uc77d\uae30 \uc27d\uace0 \uc9c1\uad00\uc801\uc778 \ubb38\ubc95\uc774 \ud544\uc694\ud560 \ub54c"}),"\n",(0,t.jsx)(n.li,{children:"\ub2e4\ub978 \uc815\uc801 \ud14d\uc2a4\ud2b8\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud560 \ub54c"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"v-text \uc0ac\uc6a9\uc774 \uc88b\uc744 \ub54c:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\uc694\uc18c\uc758 \uc804\uccb4 \ud14d\uc2a4\ud2b8 \ub0b4\uc6a9\uc744 \uad50\uccb4\ud560 \ub54c"}),"\n",(0,t.jsx)(n.li,{children:"\ucd08\uae30 \ub80c\ub354\ub9c1 \uc2dc \ud15c\ud50c\ub9bf\uc774 \uc7a0\uc2dc \ubcf4\uc774\ub294 \uac83\uc744 \ubc29\uc9c0\ud558\uace0 \uc2f6\uc744 \ub54c"}),"\n",(0,t.jsx)(n.li,{children:"\uc544\uc8fc \ubbf8\uc138\ud55c \uc131\ub2a5 \ucd5c\uc801\ud654\uac00 \ud544\uc694\ud560 \ub54c"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\uc77c\ubc18\uc801\uc73c\ub85c \ub300\ubd80\ubd84\uc758 \uacbd\uc6b0 \uba38\uc2a4\ud0dc\uc2dc(",(0,t.jsx)(n.code,{children:"{{}}"}),") \ubb38\ubc95\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \ub354 \uc77c\ubc18\uc801\uc774\uace0 \uad8c\uc7a5\ub429\ub2c8\ub2e4. \ub354 \uc9c1\uad00\uc801\uc774\uace0 \uc720\uc5f0\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."]})]})}function o(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>r});var t=s(6540);const l={},c=t.createContext(l);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);