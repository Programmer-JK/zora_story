"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[5745],{76351:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>r});const a=JSON.parse('{"id":"Node.js/Node.js Intro","title":"Node.js Intro","description":"\uc791\uc131\uc77c : 2024.12.06","source":"@site/docs/10. Node.js/109901. Node.js Intro.md","sourceDirName":"10. Node.js","slug":"/Node.js/Node.js Intro","permalink":"/zora_story/docs/Node.js/Node.js Intro","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":109901,"frontMatter":{},"sidebar":"studySidebar","previous":{"title":"Next.js \uba74\uc811 \uc900\ube44","permalink":"/zora_story/docs/Next.js/Next.js \uba74\uc811 \uc900\ube44"},"next":{"title":"Node.js \uc2ec\ud654","permalink":"/zora_story/docs/Node.js/Node.js \uc2ec\ud654"}}');var c=e(74848),t=e(28453);const o={},l=void 0,i={},r=[{value:"1. Node.js \uac1c\ub150\uacfc \ud2b9\uc9d5",id:"1-nodejs-\uac1c\ub150\uacfc-\ud2b9\uc9d5",level:2},{value:"2. Node.js\uc758 \uc8fc\uc694 \ud2b9\uc9d5\uacfc \uc7a5\uc810",id:"2-nodejs\uc758-\uc8fc\uc694-\ud2b9\uc9d5\uacfc-\uc7a5\uc810",level:2},{value:"3. \ud575\uc2ec \uac1c\ub150\uacfc \ubb38\ubc95",id:"3-\ud575\uc2ec-\uac1c\ub150\uacfc-\ubb38\ubc95",level:2},{value:"A. \ubaa8\ub4c8 \uc2dc\uc2a4\ud15c",id:"a-\ubaa8\ub4c8-\uc2dc\uc2a4\ud15c",level:4},{value:"B. \ube44\ub3d9\uae30 \ucc98\ub9ac",id:"b-\ube44\ub3d9\uae30-\ucc98\ub9ac",level:4},{value:"C. \uc774\ubca4\ud2b8 \ucc98\ub9ac",id:"c-\uc774\ubca4\ud2b8-\ucc98\ub9ac",level:4},{value:"4. \uc8fc\uc694 \ub0b4\uc7a5 \ubaa8\ub4c8",id:"4-\uc8fc\uc694-\ub0b4\uc7a5-\ubaa8\ub4c8",level:2},{value:"A. File System (fs)",id:"a-file-system-fs",level:4},{value:"B. HTTP \ubaa8\ub4c8",id:"b-http-\ubaa8\ub4c8",level:4}];function p(n){const s={blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...(0,t.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"\uc791\uc131\uc77c : 2024.12.06"}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"1-nodejs-\uac1c\ub150\uacfc-\ud2b9\uc9d5",children:"1. Node.js \uac1c\ub150\uacfc \ud2b9\uc9d5"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"Node.js\ub294 Chrome\uc758 V8 JavaScript \uc5d4\uc9c4\uc73c\ub85c \ub9cc\ub4e4\uc5b4\uc9c4 \uc11c\ubc84 \uc0ac\uc774\ub4dc \ud50c\ub7ab\ud3fc\uc785\ub2c8\ub2e4."}),"\n",(0,c.jsx)(s.li,{children:"\ube44\ub3d9\uae30 \uc774\ubca4\ud2b8 \uae30\ubc18 \uad6c\uc870\ub97c \uac00\uc9c0\uace0 \uc788\uc5b4 \ub192\uc740 \ucc98\ub9ac \uc131\ub2a5\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."}),"\n",(0,c.jsx)(s.li,{children:"\uc2f1\uae00 \uc2a4\ub808\ub4dc \uae30\ubc18\uc774\uc9c0\ub9cc \uc774\ubca4\ud2b8 \ub8e8\ud504\ub97c \ud1b5\ud574 \ube44\ub3d9\uae30 \uc791\uc5c5\uc744 \ud6a8\uc728\uc801\uc73c\ub85c \ucc98\ub9ac\ud569\ub2c8\ub2e4."}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"2-nodejs\uc758-\uc8fc\uc694-\ud2b9\uc9d5\uacfc-\uc7a5\uc810",children:"2. Node.js\uc758 \uc8fc\uc694 \ud2b9\uc9d5\uacfc \uc7a5\uc810"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"Non-blocking I/O: \ube44\ub3d9\uae30 \ucc98\ub9ac\ub85c \ub300\uaddc\ubaa8 \ub124\ud2b8\uc6cc\ud06c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uc801\ud569"}),"\n",(0,c.jsx)(s.li,{children:"NPM(Node Package Manager): \ud48d\ubd80\ud55c \uc624\ud508\uc18c\uc2a4 \ud328\ud0a4\uc9c0 \uc0dd\ud0dc\uacc4 \uc81c\uacf5"}),"\n",(0,c.jsx)(s.li,{children:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uae30\ubc18: \ud504\ub860\ud2b8\uc5d4\ub4dc\uc640 \ubc31\uc5d4\ub4dc \ubaa8\ub450 JavaScript\ub85c \uac1c\ubc1c \uac00\ub2a5"}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"3-\ud575\uc2ec-\uac1c\ub150\uacfc-\ubb38\ubc95",children:"3. \ud575\uc2ec \uac1c\ub150\uacfc \ubb38\ubc95"}),"\n",(0,c.jsx)(s.h4,{id:"a-\ubaa8\ub4c8-\uc2dc\uc2a4\ud15c",children:"A. \ubaa8\ub4c8 \uc2dc\uc2a4\ud15c"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token comment",children:"// \ubaa8\ub4c8 \ub0b4\ubcf4\ub0b4\uae30 (exports)"}),"\nmodule",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"exports"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token function-variable function",children:"function1"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token keyword",children:"function"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n    ",(0,c.jsx)(s.span,{className:"token literal-property property",children:"variable1"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," value\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"// \ubaa8\ub4c8 \uac00\uc838\uc624\uae30 (require)"}),"\n",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," myModule ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token function",children:"require"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'./myModule'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,c.jsx)(s.h4,{id:"b-\ube44\ub3d9\uae30-\ucc98\ub9ac",children:"B. \ube44\ub3d9\uae30 \ucc98\ub9ac"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token comment",children:"// Promise \uc0ac\uc6a9"}),"\n",(0,c.jsx)(s.span,{className:"token keyword",children:"function"})," ",(0,c.jsx)(s.span,{className:"token function",children:"asyncFunction"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,c.jsx)(s.span,{className:"token keyword",children:"new"})," ",(0,c.jsx)(s.span,{className:"token class-name",children:"Promise"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsxs)(s.span,{className:"token parameter",children:["resolve",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," reject"]}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n        ",(0,c.jsx)(s.span,{className:"token comment",children:"// \ube44\ub3d9\uae30 \uc791\uc5c5"}),"\n        ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"success",(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n            ",(0,c.jsx)(s.span,{className:"token function",children:"resolve"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"result",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n        ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"})," ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"else"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n            ",(0,c.jsx)(s.span,{className:"token function",children:"reject"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"error",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n        ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n    ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"// async/await \uc0ac\uc6a9"}),"\n",(0,c.jsx)(s.span,{className:"token keyword",children:"async"})," ",(0,c.jsx)(s.span,{className:"token keyword",children:"function"})," ",(0,c.jsx)(s.span,{className:"token function",children:"handleData"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"try"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n        ",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," result ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"await"})," ",(0,c.jsx)(s.span,{className:"token function",children:"asyncFunction"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n        ",(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"log"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"result",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n    ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"})," ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"catch"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"error",(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n        ",(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"error"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"error",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n    ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,c.jsx)(s.h4,{id:"c-\uc774\ubca4\ud2b8-\ucc98\ub9ac",children:"C. \uc774\ubca4\ud2b8 \ucc98\ub9ac"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,c.jsx)(s.span,{className:"token maybe-class-name",children:"EventEmitter"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token function",children:"require"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'events'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," myEmitter ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token keyword",children:"new"})," ",(0,c.jsx)(s.span,{className:"token class-name",children:"EventEmitter"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"// \uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108 \ub4f1\ub85d"}),"\nmyEmitter",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"on"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'event'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token parameter",children:"data"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"log"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'\uc774\ubca4\ud2b8 \ubc1c\uc0dd:'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," data",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"// \uc774\ubca4\ud2b8 \ubc1c\uc0dd"}),"\nmyEmitter",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"emit"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'event'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token string",children:"'\ub370\uc774\ud130'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,c.jsx)(s.h2,{id:"4-\uc8fc\uc694-\ub0b4\uc7a5-\ubaa8\ub4c8",children:"4. \uc8fc\uc694 \ub0b4\uc7a5 \ubaa8\ub4c8"}),"\n",(0,c.jsx)(s.h4,{id:"a-file-system-fs",children:"A. File System (fs)"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," fs ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token function",children:"require"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'fs'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"// \ud30c\uc77c \uc77d\uae30"}),"\nfs",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"readFile"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'file.txt'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token string",children:"'utf8'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsxs)(s.span,{className:"token parameter",children:["err",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," data"]}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"err",(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"throw"})," err",(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n    ",(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"log"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"data",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"// \ud30c\uc77c \uc4f0\uae30"}),"\nfs",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"writeFile"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'file.txt'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token string",children:"'\ub0b4\uc6a9'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token parameter",children:"err"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"err",(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"throw"})," err",(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n    ",(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"log"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'\ud30c\uc77c \uc800\uc7a5 \uc644\ub8cc'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,c.jsx)(s.h4,{id:"b-http-\ubaa8\ub4c8",children:"B. HTTP \ubaa8\ub4c8"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," http ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token function",children:"require"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'http'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," server ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," http",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"createServer"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsxs)(s.span,{className:"token parameter",children:["req",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," res"]}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    res",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"writeHead"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token number",children:"200"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),(0,c.jsx)(s.span,{className:"token string-property property",children:"'Content-Type'"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token string",children:"'text/plain'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n    res",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"end"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'Hello World\\n'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\nserver",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"listen"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token number",children:"3000"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"log"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'\uc11c\ubc84\uac00 3000\ubc88 \ud3ec\ud2b8\uc5d0\uc11c \uc2e4\ud589\uc911\uc785\ub2c8\ub2e4.'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})})]})}function d(n={}){const{wrapper:s}={...(0,t.R)(),...n.components};return s?(0,c.jsx)(s,{...n,children:(0,c.jsx)(p,{...n})}):p(n)}},28453:(n,s,e)=>{e.d(s,{R:()=>o,x:()=>l});var a=e(96540);const c={},t=a.createContext(c);function o(n){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function l(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:o(n.components),a.createElement(t.Provider,{value:s},n.children)}}}]);