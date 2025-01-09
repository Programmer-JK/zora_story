"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[2322],{71582:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>t});var a=s(74848),l=s(28453);const c={title:"package.json vs package-lock.json",description:"Node.js \ud504\ub85c\uc81d\ud2b8\uc758 package.json\uacfc package-lock.json \ud30c\uc77c\uc758 \ucc28\uc774\uc810\uacfc \uc5ed\ud560 \uc124\uba85",tags:["nodejs","npm","package-management","dependency-management","version-control","project-setup","build-automation"],keywords:["package.json","package-lock.json","\uc758\uc874\uc131 \uad00\ub9ac","\ubc84\uc804 \uad00\ub9ac","npm \uc124\uc815","\ud504\ub85c\uc81d\ud2b8 \uc124\uc815","\ube4c\ub4dc \uc790\ub3d9\ud654","\ud328\ud0a4\uc9c0 \ub9e4\ub2c8\uc800"]},o=void 0,i={id:"Fronted \uc9c0\uc2dd/package.json vs package-lock.json",title:"package.json vs package-lock.json",description:"Node.js \ud504\ub85c\uc81d\ud2b8\uc758 package.json\uacfc package-lock.json \ud30c\uc77c\uc758 \ucc28\uc774\uc810\uacfc \uc5ed\ud560 \uc124\uba85",source:"@site/docs/01. Fronted \uc9c0\uc2dd/019919. package.json vs package-lock.json.md",sourceDirName:"01. Fronted \uc9c0\uc2dd",slug:"/Fronted \uc9c0\uc2dd/package.json vs package-lock.json",permalink:"/zora_story/docs/Fronted \uc9c0\uc2dd/package.json vs package-lock.json",draft:!1,unlisted:!1,tags:[{inline:!0,label:"nodejs",permalink:"/zora_story/docs/tags/nodejs"},{inline:!0,label:"npm",permalink:"/zora_story/docs/tags/npm"},{inline:!0,label:"package-management",permalink:"/zora_story/docs/tags/package-management"},{inline:!0,label:"dependency-management",permalink:"/zora_story/docs/tags/dependency-management"},{inline:!0,label:"version-control",permalink:"/zora_story/docs/tags/version-control"},{inline:!0,label:"project-setup",permalink:"/zora_story/docs/tags/project-setup"},{inline:!0,label:"build-automation",permalink:"/zora_story/docs/tags/build-automation"}],version:"current",sidebarPosition:19919,frontMatter:{title:"package.json vs package-lock.json",description:"Node.js \ud504\ub85c\uc81d\ud2b8\uc758 package.json\uacfc package-lock.json \ud30c\uc77c\uc758 \ucc28\uc774\uc810\uacfc \uc5ed\ud560 \uc124\uba85",tags:["nodejs","npm","package-management","dependency-management","version-control","project-setup","build-automation"],keywords:["package.json","package-lock.json","\uc758\uc874\uc131 \uad00\ub9ac","\ubc84\uc804 \uad00\ub9ac","npm \uc124\uc815","\ud504\ub85c\uc81d\ud2b8 \uc124\uc815","\ube4c\ub4dc \uc790\ub3d9\ud654","\ud328\ud0a4\uc9c0 \ub9e4\ub2c8\uc800"]},sidebar:"studySidebar",previous:{title:"package.json",permalink:"/zora_story/docs/Fronted \uc9c0\uc2dd/package.json"},next:{title:"\ud604\ub300 \ud504\ub808\uc784\uc6cc\ud06c \ud30c\uc77c \ud615\uc2dd",permalink:"/zora_story/docs/Fronted \uc9c0\uc2dd/\ud604\ub300 \ud504\ub808\uc784\uc6cc\ud06c \ud30c\uc77c \ud615\uc2dd"}},r={},t=[{value:"package.json",id:"packagejson",level:2},{value:"package-lock.json",id:"package-lockjson",level:2},{value:"\ub450 \ud30c\uc77c\uc758 \ucc28\uc774\uc810",id:"\ub450-\ud30c\uc77c\uc758-\ucc28\uc774\uc810",level:2},{value:"1. \ubc84\uc804 \uad00\ub9ac \ubc29\uc2dd",id:"1-\ubc84\uc804-\uad00\ub9ac-\ubc29\uc2dd",level:3},{value:"2. \uc0ac\uc6a9 \ubaa9\uc801",id:"2-\uc0ac\uc6a9-\ubaa9\uc801",level:3},{value:"3. \ubc84\uc804 \uad00\ub9ac(Git) \uad00\uc810",id:"3-\ubc84\uc804-\uad00\ub9acgit-\uad00\uc810",level:3},{value:"\uc2e4\uc81c \uc0ac\uc6a9 \uc2dc\ub098\ub9ac\uc624",id:"\uc2e4\uc81c-\uc0ac\uc6a9-\uc2dc\ub098\ub9ac\uc624",level:2},{value:"1. \uc0c8 \ud504\ub85c\uc81d\ud2b8 \uc2dc\uc791",id:"1-\uc0c8-\ud504\ub85c\uc81d\ud2b8-\uc2dc\uc791",level:3},{value:"2. \uae30\uc874 \ud504\ub85c\uc81d\ud2b8 \ud074\ub860",id:"2-\uae30\uc874-\ud504\ub85c\uc81d\ud2b8-\ud074\ub860",level:3},{value:"3. \uc758\uc874\uc131 \uc5c5\ub370\uc774\ud2b8",id:"3-\uc758\uc874\uc131-\uc5c5\ub370\uc774\ud2b8",level:3}];function d(n){const e={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...(0,l.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsx)(e.p,{children:"\uc791\uc131\uc77c : 2025.01.06"}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"packagejson",children:"package.json"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\ud504\ub85c\uc81d\ud2b8\uc758 \uba54\ud0c0\ub370\uc774\ud130\ub97c \ub2f4\uace0 \uc788\ub294 \uc124\uc815 \ud30c\uc77c"}),"\n",(0,a.jsx)(e.li,{children:"npm init \uba85\ub839\uc5b4\ub85c \uc0dd\uc131"}),"\n",(0,a.jsxs)(e.li,{children:["\uc8fc\uc694 \uc5ed\ud560:","\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\ud504\ub85c\uc81d\ud2b8 \uae30\ubcf8 \uc815\ubcf4 \uad00\ub9ac (\uc774\ub984, \ubc84\uc804, \uc124\uba85 \ub4f1)"}),"\n",(0,a.jsx)(e.li,{children:"\uc758\uc874\uc131 \ud328\ud0a4\uc9c0 \uad00\ub9ac"}),"\n",(0,a.jsx)(e.li,{children:"\ud504\ub85c\uc81d\ud2b8 \uc2a4\ud06c\ub9bd\ud2b8 \uc815\uc758"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\uc758\uc874\uc131 \ubc84\uc804 \uad00\ub9ac \ud2b9\uc9d5:","\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\uc720\uc5f0\ud55c \ubc84\uc804 \ud45c\uae30\ubc95 \uc0ac\uc6a9 (^, ~, >, < \ub4f1)"}),"\n",(0,a.jsx)(e.li,{children:"^1.2.3: 1.x.x \uc911 \ucd5c\uc2e0 \ubc84\uc804"}),"\n",(0,a.jsx)(e.li,{children:"~1.2.3: 1.2.x \uc911 \ucd5c\uc2e0 \ubc84\uc804"}),"\n",(0,a.jsx)(e.li,{children:"1.2.3: \uc815\ud655\ud788 \ud574\ub2f9 \ubc84\uc804\ub9cc \uc0ac\uc6a9"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"package-lockjson",children:"package-lock.json"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"npm 5.0 \uc774\uc0c1\uc5d0\uc11c \uc790\ub3d9 \uc0dd\uc131\ub418\ub294 \ud30c\uc77c"}),"\n",(0,a.jsx)(e.li,{children:"\uc758\uc874\uc131 \ud2b8\ub9ac\uc758 \uc815\ud655\ud55c \ubc84\uc804\uc744 \uc800\uc7a5"}),"\n",(0,a.jsxs)(e.li,{children:["\uc8fc\uc694 \uc5ed\ud560:","\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\ud300\uc6d0 \uac04 \ub3d9\uc77c\ud55c \uc758\uc874\uc131 \ubcf4\uc7a5"}),"\n",(0,a.jsx)(e.li,{children:"\ud328\ud0a4\uc9c0 \uc124\uce58 \uc2dc \uc77c\uad00\uc131 \uc720\uc9c0"}),"\n",(0,a.jsx)(e.li,{children:"\ube4c\ub4dc \uc7ac\ud604\uc131 \ud655\ubcf4"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\ud3ec\ud568\ud558\ub294 \uc815\ubcf4:","\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\uc815\ud655\ud55c \ubc84\uc804 \uc815\ubcf4"}),"\n",(0,a.jsx)(e.li,{children:"\ud328\ud0a4\uc9c0\uc758 \ubb34\uacb0\uc131\uc744 \uac80\uc99d\ud558\ub294 \ud574\uc2dc\uac12"}),"\n",(0,a.jsx)(e.li,{children:"\uc758\uc874\uc131 \ud2b8\ub9ac \uad6c\uc870"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"\ub450-\ud30c\uc77c\uc758-\ucc28\uc774\uc810",children:"\ub450 \ud30c\uc77c\uc758 \ucc28\uc774\uc810"}),"\n",(0,a.jsx)(e.h3,{id:"1-\ubc84\uc804-\uad00\ub9ac-\ubc29\uc2dd",children:"1. \ubc84\uc804 \uad00\ub9ac \ubc29\uc2dd"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["package.json:","\n",(0,a.jsx)(e.pre,{className:"language-json",children:(0,a.jsxs)(e.code,{className:"language-json",children:[(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n  ",(0,a.jsx)(e.span,{className:"token property",children:'"dependencies"'}),(0,a.jsx)(e.span,{className:"token operator",children:":"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n    ",(0,a.jsx)(e.span,{className:"token property",children:'"lodash"'}),(0,a.jsx)(e.span,{className:"token operator",children:":"})," ",(0,a.jsx)(e.span,{className:"token string",children:'"^4.17.21"'}),"  ",(0,a.jsx)(e.span,{className:"token comment",children:"// 4.17.21 \uc774\uc0c1, 5.0.0 \ubbf8\ub9cc"}),"\n  ",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"}),"\n",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["package-lock.json:","\n",(0,a.jsx)(e.pre,{className:"language-json",children:(0,a.jsxs)(e.code,{className:"language-json",children:[(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n  ",(0,a.jsx)(e.span,{className:"token property",children:'"dependencies"'}),(0,a.jsx)(e.span,{className:"token operator",children:":"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n    ",(0,a.jsx)(e.span,{className:"token property",children:'"lodash"'}),(0,a.jsx)(e.span,{className:"token operator",children:":"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n      ",(0,a.jsx)(e.span,{className:"token property",children:'"version"'}),(0,a.jsx)(e.span,{className:"token operator",children:":"})," ",(0,a.jsx)(e.span,{className:"token string",children:'"4.17.21"'}),(0,a.jsx)(e.span,{className:"token punctuation",children:","}),"  ",(0,a.jsx)(e.span,{className:"token comment",children:"// \uc815\ud655\ud55c \ubc84\uc804"}),"\n      ",(0,a.jsx)(e.span,{className:"token property",children:'"resolved"'}),(0,a.jsx)(e.span,{className:"token operator",children:":"})," ",(0,a.jsx)(e.span,{className:"token string",children:'"https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz"'}),(0,a.jsx)(e.span,{className:"token punctuation",children:","}),"\n      ",(0,a.jsx)(e.span,{className:"token property",children:'"integrity"'}),(0,a.jsx)(e.span,{className:"token operator",children:":"})," ",(0,a.jsx)(e.span,{className:"token string",children:'"sha512-..."'})," ",(0,a.jsx)(e.span,{className:"token comment",children:"// \ud574\uc2dc\uac12"}),"\n    ",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"}),"\n  ",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"}),"\n",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"2-\uc0ac\uc6a9-\ubaa9\uc801",children:"2. \uc0ac\uc6a9 \ubaa9\uc801"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["package.json:","\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\ud504\ub85c\uc81d\ud2b8 \uc124\uc815 \uad00\ub9ac"}),"\n",(0,a.jsx)(e.li,{children:"\ud544\uc694\ud55c \uc758\uc874\uc131 \uc120\uc5b8"}),"\n",(0,a.jsx)(e.li,{children:"\uc2a4\ud06c\ub9bd\ud2b8 \ubc0f \uc124\uc815 \uc815\uc758"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["package-lock.json:","\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\uc758\uc874\uc131\uc758 \uc815\ud655\ud55c \ubc84\uc804 \uace0\uc815"}),"\n",(0,a.jsx)(e.li,{children:"\ud328\ud0a4\uc9c0 \uc124\uce58\uc758 \uc77c\uad00\uc131 \ubcf4\uc7a5"}),"\n",(0,a.jsx)(e.li,{children:"\ube4c\ub4dc \ud658\uacbd\uc758 \uc7ac\ud604\uc131 \ud655\ubcf4"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"3-\ubc84\uc804-\uad00\ub9acgit-\uad00\uc810",children:"3. \ubc84\uc804 \uad00\ub9ac(Git) \uad00\uc810"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["package.json:","\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\ubc18\ub4dc\uc2dc \ubc84\uc804 \uad00\ub9ac\uc5d0 \ud3ec\ud568"}),"\n",(0,a.jsx)(e.li,{children:"\ud504\ub85c\uc81d\ud2b8\uc758 \ud544\uc218 \uc124\uc815 \ud30c\uc77c"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["package-lock.json:","\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\ubc84\uc804 \uad00\ub9ac\uc5d0 \ud3ec\ud568 \uad8c\uc7a5"}),"\n",(0,a.jsx)(e.li,{children:"\ud300 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \ub3d9\uc77c\ud55c \uc758\uc874\uc131 \ubcf4\uc7a5"}),"\n",(0,a.jsx)(e.li,{children:"CI/CD \ud30c\uc774\ud504\ub77c\uc778\uc758 \uc548\uc815\uc131 \ud655\ubcf4"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"\uc2e4\uc81c-\uc0ac\uc6a9-\uc2dc\ub098\ub9ac\uc624",children:"\uc2e4\uc81c \uc0ac\uc6a9 \uc2dc\ub098\ub9ac\uc624"}),"\n",(0,a.jsx)(e.h3,{id:"1-\uc0c8-\ud504\ub85c\uc81d\ud2b8-\uc2dc\uc791",children:"1. \uc0c8 \ud504\ub85c\uc81d\ud2b8 \uc2dc\uc791"}),"\n",(0,a.jsx)(e.pre,{className:"language-bash",children:(0,a.jsxs)(e.code,{className:"language-bash",children:[(0,a.jsx)(e.span,{className:"token function",children:"npm"})," init              ",(0,a.jsx)(e.span,{className:"token comment",children:"# package.json \uc0dd\uc131"}),"\n",(0,a.jsx)(e.span,{className:"token function",children:"npm"})," ",(0,a.jsx)(e.span,{className:"token function",children:"install"})," lodash    ",(0,a.jsx)(e.span,{className:"token comment",children:"# \uc758\uc874\uc131 \uc124\uce58, package-lock.json \uc790\ub3d9 \uc0dd\uc131"}),"\n"]})}),"\n",(0,a.jsx)(e.h3,{id:"2-\uae30\uc874-\ud504\ub85c\uc81d\ud2b8-\ud074\ub860",children:"2. \uae30\uc874 \ud504\ub85c\uc81d\ud2b8 \ud074\ub860"}),"\n",(0,a.jsx)(e.pre,{className:"language-bash",children:(0,a.jsxs)(e.code,{className:"language-bash",children:[(0,a.jsx)(e.span,{className:"token function",children:"git"})," clone ",(0,a.jsx)(e.span,{className:"token operator",children:"<"}),"repository",(0,a.jsx)(e.span,{className:"token operator",children:">"}),"\n",(0,a.jsx)(e.span,{className:"token function",children:"npm"})," ",(0,a.jsx)(e.span,{className:"token function",children:"install"}),"           ",(0,a.jsx)(e.span,{className:"token comment",children:"# package-lock.json \uae30\ubc18\uc73c\ub85c \uc815\ud655\ud55c \ubc84\uc804 \uc124\uce58"}),"\n"]})}),"\n",(0,a.jsx)(e.h3,{id:"3-\uc758\uc874\uc131-\uc5c5\ub370\uc774\ud2b8",children:"3. \uc758\uc874\uc131 \uc5c5\ub370\uc774\ud2b8"}),"\n",(0,a.jsx)(e.pre,{className:"language-bash",children:(0,a.jsxs)(e.code,{className:"language-bash",children:[(0,a.jsx)(e.span,{className:"token function",children:"npm"})," update            ",(0,a.jsx)(e.span,{className:"token comment",children:"# package.json\uc758 \ubc84\uc804 \ubc94\uc704 \ub0b4\uc5d0\uc11c \uc5c5\ub370\uc774\ud2b8"}),"\n",(0,a.jsx)(e.span,{className:"token function",children:"npm"})," ",(0,a.jsx)(e.span,{className:"token function",children:"install"})," lodash@latest  ",(0,a.jsx)(e.span,{className:"token comment",children:"# \ucd5c\uc2e0 \ubc84\uc804\uc73c\ub85c \uac15\uc81c \uc5c5\ub370\uc774\ud2b8"}),"\n"]})})]})}function p(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>o,x:()=>i});var a=s(96540);const l={},c=a.createContext(l);function o(n){const e=a.useContext(c);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:o(n.components),a.createElement(c.Provider,{value:e},n.children)}}}]);