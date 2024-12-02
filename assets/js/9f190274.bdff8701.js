"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[8955],{2081:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=t(4848),i=t(8453);const s={},c=void 0,l={id:"JavaScript/strict mode",title:"strict mode",description:"- strict mode : js \uc5b8\uc5b4\uc758 \ubb38\ubc95\uc744 \uc880 \ub354 \uc5c4\uaca9\ud788 \uc801\uc6a9\ud558\uc5ec \uc624\ub958\ub97c \ubc1c\uc0dd\uc2dc\ud0ac \uac00\ub2a5\uc131\uc774 \ub192\uac70\ub098 js\uc5d4\uc9c4\uc758 \ucd5c\uc801\ud654 \uc791\uc5c5\uc5d0 \ubb38\uc81c\ub97c \uc77c\uc73c\ud0ac \uc218 \uc788\ub294 \ucf54\ub4dc\uc5d0 \ub300\ud574 \uba85\uc2dc\uc801\uc778 \uc5d0\ub7ec\ub97c \ubc1c\uc0dd",source:"@site/docs/JavaScript/strict mode.md",sourceDirName:"JavaScript",slug:"/JavaScript/strict mode",permalink:"/zora_story/docs/JavaScript/strict mode",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"studySidebar",previous:{title:"let, const \ud0a4\uc6cc\ub4dc",permalink:"/zora_story/docs/JavaScript/let, const \ud0a4\uc6cc\ub4dc"},next:{title:"\uac1d\uccb4\ub9ac\ud130\ub7f4",permalink:"/zora_story/docs/JavaScript/\uac1d\uccb4\ub9ac\ud130\ub7f4"}},o={},d=[{value:"strict mode\uc758 \uc801\uc6a9",id:"strict-mode\uc758-\uc801\uc6a9",level:4},{value:"\uc804\uc5ed\uc5d0 strict mode\ub97c \uc801\uc6a9\ud558\ub294 \uac83\uc740 \ud53c\ud574\ub77c",id:"\uc804\uc5ed\uc5d0-strict-mode\ub97c-\uc801\uc6a9\ud558\ub294-\uac83\uc740-\ud53c\ud574\ub77c",level:5},{value:"\ud568\uc218 \ub2e8\uc704\ub85c strict mode\ub97c \uc801\uc6a9\ud558\ub294 \uac83\uc740 \ud53c\ud574\ub77c",id:"\ud568\uc218-\ub2e8\uc704\ub85c-strict-mode\ub97c-\uc801\uc6a9\ud558\ub294-\uac83\uc740-\ud53c\ud574\ub77c",level:5},{value:"strict mode\uac00 \ubc1c\uc0dd\uc2dc\ud0a4\ub294 \uc5d0\ub7ec",id:"strict-mode\uac00-\ubc1c\uc0dd\uc2dc\ud0a4\ub294-\uc5d0\ub7ec",level:4},{value:"\uc554\ubb35\uc801 \uc804\uc5ed",id:"\uc554\ubb35\uc801-\uc804\uc5ed",level:5},{value:"\ubcc0\uc218, \ud568\uc218, \ub9e4\uac1c\ubcc0\uc218\uc758 \uc0ad\uc81c",id:"\ubcc0\uc218-\ud568\uc218-\ub9e4\uac1c\ubcc0\uc218\uc758-\uc0ad\uc81c",level:5},{value:"\ub9e4\uac1c\ubcc0\uc218 \uc774\ub984\uc758 \uc911\ubcf5",id:"\ub9e4\uac1c\ubcc0\uc218-\uc774\ub984\uc758-\uc911\ubcf5",level:5},{value:"with \ubb38 \uc0ac\uc6a9",id:"with-\ubb38-\uc0ac\uc6a9",level:5}];function a(e){const n={code:"code",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"strict mode : js \uc5b8\uc5b4\uc758 \ubb38\ubc95\uc744 \uc880 \ub354 \uc5c4\uaca9\ud788 \uc801\uc6a9\ud558\uc5ec \uc624\ub958\ub97c \ubc1c\uc0dd\uc2dc\ud0ac \uac00\ub2a5\uc131\uc774 \ub192\uac70\ub098 js\uc5d4\uc9c4\uc758 \ucd5c\uc801\ud654 \uc791\uc5c5\uc5d0 \ubb38\uc81c\ub97c \uc77c\uc73c\ud0ac \uc218 \uc788\ub294 \ucf54\ub4dc\uc5d0 \ub300\ud574 \uba85\uc2dc\uc801\uc778 \uc5d0\ub7ec\ub97c \ubc1c\uc0dd"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Lint \ub3c4\uad6c\ub294 strict mode\uac00 \uc81c\ud55c\ud558\ub294 \uc624\ub958\ub294 \ubb3c\ub860 \ucf54\ub529 \ucee8\ubca4\uc158\uc744 \uc124\uc815 \ud30c\uc77c \ud615\ud0dc\ub85c \uc815\uc758\ud558\uace0 \uac15\uc81c\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \uac15\ub825\ud55c \ud6a8\uacfc\ub97c \uac00\uc9c0\uace0 \uc788\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"strict-mode\uc758-\uc801\uc6a9",children:"strict mode\uc758 \uc801\uc6a9"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\uc11c\ub4501\uc5d0 'use strict'; \ucd94\uac00"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"'use strict';\r\nfunction foo() {\r\n\tx = 10; // referenceError\r\n}\r\nfoo();\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"strict mode\uc5d0\uc11c\ub294 \ub9e4\uac1c\ubcc0\uc218\uc5d0 \uc804\ub2ec\ub41c \uc778\uc218\ub97c \uc7ac\ud560\ub2f9\ud558\uc5ec \ubcc0\uacbd\ud574\ub3c4 argument \uac1d\uccb4\uc5d0 \ubc18\uc601\ub418\uc9c0 \uc54a\ub294\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.h5,{id:"\uc804\uc5ed\uc5d0-strict-mode\ub97c-\uc801\uc6a9\ud558\ub294-\uac83\uc740-\ud53c\ud574\ub77c",children:"\uc804\uc5ed\uc5d0 strict mode\ub97c \uc801\uc6a9\ud558\ub294 \uac83\uc740 \ud53c\ud574\ub77c"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\uc804\uc5ed\uc5d0 \uc801\uc6a9\ud55c strict mode\ub294 \uc2a4\ud06c\ub9bd\ud2b8 \ub2e8\uc704\ub85c \uc801\uc6a9"}),"\n",(0,r.jsx)(n.li,{children:"strict mode \uc2a4\ud06c\ub9bd\ud2b8\uc640 non-strict mode \uc2a4\ud06c\ub9bd\ud2b8\ub97c \ud63c\uc6a9\ud558\ub294 \uac83\uc740 \uc624\ub958\ub97c \ubc1c\uc0dd\uc2dc\ud0ac \uc218 \uc788\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\uc678\ubd80 \uc11c\ub4dc\ud30c\ud2f0 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 non-strict mode\uc778 \uacbd\uc6b0\ub3c4 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc804\uc5ed\uc5d0 strict mode \uc801\uc6a9\ud558\ub294 \uac83\uc740 \ubc14\ub78c\uc9c1\ud558\uc9c0 \uc54a\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.h5,{id:"\ud568\uc218-\ub2e8\uc704\ub85c-strict-mode\ub97c-\uc801\uc6a9\ud558\ub294-\uac83\uc740-\ud53c\ud574\ub77c",children:"\ud568\uc218 \ub2e8\uc704\ub85c strict mode\ub97c \uc801\uc6a9\ud558\ub294 \uac83\uc740 \ud53c\ud574\ub77c"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\uc77c\ubd80 \ud568\uc218\uc5d0\ub9cc strict mode\ub97c \uc801\uc6a9\ud558\ub294 \uac83\uc740 \ubc14\ub78c\uc9c1\ud558\uc9c0 \uc54a\uc73c\uba70, \ubaa8\ub4e0 \ud568\uc218\uc5d0 \uc77c\uc77c\uc774 strict mode\ub97c \uc801\uc6a9\ud558\ub294 \uac83\uc740 \ubc88\uac70\ub86d\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"strict mode\uac00 \uc801\uc6a9\ub41c \ud568\uc218\uac00 \ucc38\uc870\ud560 \ud568\uc218 \uc678\ubd80\uc758 \ucee8\ud14d\uc2a4\ud2b8\uc5d0 strict mode\ub97c \uc801\uc6a9\ud558\uc9c0 \uc54a\ub294\ub2e4\uba74 \uc774 \ub610\ud55c \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"strict mode\ub294 \uc989\uc2dc \uc2e4\ud589 \ud568\uc218\ub85c \uac10\uc2fc \uc2a4\ud06c\ub9bd\ud2b8 \ub2e8\uc704\ub85c \uc801\uc6a9\ud558\ub294 \uac83\uc774 \ubc14\ub78c\uc9c1\ud558\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"strict-mode\uac00-\ubc1c\uc0dd\uc2dc\ud0a4\ub294-\uc5d0\ub7ec",children:"strict mode\uac00 \ubc1c\uc0dd\uc2dc\ud0a4\ub294 \uc5d0\ub7ec"}),"\n",(0,r.jsx)(n.h5,{id:"\uc554\ubb35\uc801-\uc804\uc5ed",children:"\uc554\ubb35\uc801 \uc804\uc5ed"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"ReferenceError"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"(functino() {\r\n\t'use strict';\r\n\tx=1;\r\n\tconsole.log(x); // ReferenceError: x is not defined\r\n}());\n"})}),"\n",(0,r.jsx)(n.h5,{id:"\ubcc0\uc218-\ud568\uc218-\ub9e4\uac1c\ubcc0\uc218\uc758-\uc0ad\uc81c",children:"\ubcc0\uc218, \ud568\uc218, \ub9e4\uac1c\ubcc0\uc218\uc758 \uc0ad\uc81c"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SyntaxError"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"(function() {\r\n\t'use strict';\r\n\tvar x = 1;\r\n\tdelete x; //SyntaxError: Delete of an unqualified identifier in strict mode.\r\n}());\n"})}),"\n",(0,r.jsx)(n.h5,{id:"\ub9e4\uac1c\ubcc0\uc218-\uc774\ub984\uc758-\uc911\ubcf5",children:"\ub9e4\uac1c\ubcc0\uc218 \uc774\ub984\uc758 \uc911\ubcf5"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SyntaxError"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"(function() {\r\n\t'use strict';\r\n\t//SyntaxError: Duplicate parameter name not allowed in this context\r\n\tfunction foo(x, x) {\r\n\t\treturn x + x;\t\r\n\t}\r\n\tconsole.log(foo(1,2));\r\n}());\n"})}),"\n",(0,r.jsx)(n.h5,{id:"with-\ubb38-\uc0ac\uc6a9",children:"with \ubb38 \uc0ac\uc6a9"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"with\ubb38 : \uc804\ub2ec\ub41c \uac1d\uccb4\ub97c \uc2a4\ucf54\ud504 \uccb4\uc778\uc5d0 \ucd94\uac00\ud558\ub294 \ubb38"}),"\n",(0,r.jsx)(n.li,{children:"\ub3d9\uc77c\ud55c \uac1d\uccb4\uc758 \ud504\ub85c\ud37c\ud2f0\ub97c \ubc18\ubcf5\ud574\uc11c \u314e\uc0ac\uc6a9\ud560 \ub54c \uac1d\uccb4 \uc774\ub984\uc744 \uc0dd\ub7b5\ud560 \uc218 \uc788\uc5b4\uc11c \ucf54\ub4dc\uac00 \uac04\ub2e8\ud574\uc9c0\ub294 \ud6a8\uacfc\uac00 \uc788\uc9c0\ub9cc \uc131\ub2a5\uacfc \uac00\ub3c5\uc131\uc774 \ub098\ube60\uc9c0\ub294 \ubb38\uc81c\uac00 \uc788\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"(function() {\r\n\t'use strict';\r\n\t//SyntaxError: Strict mode code may not include a with statement\r\n\twith({x:1}){\r\n\t\tconsole.log(x);\r\n\t}\r\n}());\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var r=t(6540);const i={},s=r.createContext(i);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);