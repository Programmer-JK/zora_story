"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[30119],{40926:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>r});const a=JSON.parse('{"id":"Node.js/Node.js \uba74\uc811 \uc900\ube44","title":"Node.js \uba74\uc811 \uc900\ube44","description":"\uc791\uc131\uc77c : 2024.12.06","source":"@site/docs/10. Node.js/109999. Node.js \uba74\uc811 \uc900\ube44.md","sourceDirName":"10. Node.js","slug":"/Node.js/Node.js \uba74\uc811 \uc900\ube44","permalink":"/zora_story/en/docs/Node.js/Node.js \uba74\uc811 \uc900\ube44","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":109999,"frontMatter":{},"sidebar":"studySidebar","previous":{"title":"Promise vs Async,Await","permalink":"/zora_story/en/docs/Node.js/Promise vs Async,Await"},"next":{"title":"python \uc790\ub8cc\ud615","permalink":"/zora_story/en/docs/python/python \uc790\ub8cc\ud615"}}');var c=e(74848),t=e(28453);const l={},o=void 0,i={},r=[{value:"1. Event Loop\uc640 \ube44\ub3d9\uae30 \ucc98\ub9ac",id:"1-event-loop\uc640-\ube44\ub3d9\uae30-\ucc98\ub9ac",level:2},{value:"\ubaa8\ubc94\ub2f5\uc548",id:"\ubaa8\ubc94\ub2f5\uc548",level:4},{value:"2. Node.js \ud2b9\uc9d5",id:"2-nodejs-\ud2b9\uc9d5",level:2},{value:"\ubaa8\ubc94\ub2f5\uc548",id:"\ubaa8\ubc94\ub2f5\uc548-1",level:4},{value:"3. Express.js\uc640 \uc2e4\uc81c \uac1c\ubc1c",id:"3-expressjs\uc640-\uc2e4\uc81c-\uac1c\ubc1c",level:2},{value:"\ubaa8\ubc94\ub2f5\uc548",id:"\ubaa8\ubc94\ub2f5\uc548-2",level:4},{value:"4. \uc131\ub2a5 \ucd5c\uc801\ud654",id:"4-\uc131\ub2a5-\ucd5c\uc801\ud654",level:2},{value:"\ubaa8\ubc94\ub2f5\uc548",id:"\ubaa8\ubc94\ub2f5\uc548-3",level:4},{value:"5. \ubcf4\uc548 \ub300\ucc45",id:"5-\ubcf4\uc548-\ub300\ucc45",level:2},{value:"6. REST API \uc124\uacc4 \uc6d0\uce59",id:"6-rest-api-\uc124\uacc4-\uc6d0\uce59",level:2},{value:"\ubc84\uc800\ub2dd",id:"\ubc84\uc800\ub2dd",level:5},{value:"HATEOAS (Hypermedia As The Engine Of Application State)",id:"hateoas-hypermedia-as-the-engine-of-application-state",level:5}];function p(n){const s={blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...(0,t.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"\uc791\uc131\uc77c : 2024.12.06"}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"1-event-loop\uc640-\ube44\ub3d9\uae30-\ucc98\ub9ac",children:"1. Event Loop\uc640 \ube44\ub3d9\uae30 \ucc98\ub9ac"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"Event Loop: JavaScript\uac00 \uc2f1\uae00\uc2a4\ub808\ub4dc\uc784\uc5d0\ub3c4 \ube44\ub3d9\uae30 \uc791\uc5c5\uc744 \ucc98\ub9ac\ud560 \uc218 \uc788\uac8c \ud558\ub294 \uba54\ucee4\ub2c8\uc998"}),"\n",(0,c.jsxs)(s.li,{children:["\uc2e4\ud589 \uacfc\uc815:","\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsx)(s.li,{children:"\ucf5c\uc2a4\ud0dd\uc5d0\uc11c \ub3d9\uae30 \ucf54\ub4dc \uc2e4\ud589"}),"\n",(0,c.jsx)(s.li,{children:"\ube44\ub3d9\uae30 \uc791\uc5c5\uc740 Web API\ub85c \uc774\ub3d9"}),"\n",(0,c.jsx)(s.li,{children:"\uc644\ub8cc\ub41c \uc791\uc5c5\uc740 \ucf5c\ubc31\ud050\ub85c \uc774\ub3d9"}),"\n",(0,c.jsx)(s.li,{children:"Event Loop\uac00 \ucf5c\uc2a4\ud0dd\uc774 \ube44\uc5c8\uc744 \ub54c \ucf5c\ubc31\ud050\uc758 \uc791\uc5c5\uc744 \ucf5c\uc2a4\ud0dd\uc73c\ub85c \uc774\ub3d9"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"\uc608\uc2dc \ucf54\ub4dc:"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"log"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'1'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"setTimeout"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"log"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'2'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token number",children:"0"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"log"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'3'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,c.jsx)(s.span,{className:"token comment",children:"// \ucd9c\ub825: 1, 3, 2"}),"\n"]})}),"\n",(0,c.jsx)(s.h4,{id:"\ubaa8\ubc94\ub2f5\uc548",children:"\ubaa8\ubc94\ub2f5\uc548"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{children:"Event Loop\ub294 Node.js\uc758 \ube44\ub3d9\uae30 \ucc98\ub9ac\ub97c \uac00\ub2a5\ud558\uac8c \ud558\ub294 \ud575\uc2ec \uba54\ucee4\ub2c8\uc998\uc785\ub2c8\ub2e4. \uc2f1\uae00\uc2a4\ub808\ub4dc\uc778 JavaScript\uac00 \ube44\ub3d9\uae30 \uc791\uc5c5\uc744 \ucc98\ub9ac\ud560 \uc218 \uc788\uac8c \ud574\uc8fc\uc8e0.\n\n\ub3d9\uc791 \ubc29\uc2dd\uc744 \uc124\uba85\ud558\uba74:\n1) \ub3d9\uae30 \ucf54\ub4dc\ub294 \ucf5c\uc2a4\ud0dd\uc5d0\uc11c \uc989\uc2dc \uc2e4\ud589\ub429\ub2c8\ub2e4\n2) setTimeout \uac19\uc740 \ube44\ub3d9\uae30 \uc791\uc5c5\uc740 Web API\ub85c \ub118\uc5b4\uac11\ub2c8\ub2e4\n3) \uc644\ub8cc\ub41c \uc791\uc5c5\uc740 \ucf5c\ubc31\ud050\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4\n4) Event Loop\uac00 \ucf5c\uc2a4\ud0dd\uc774 \ube44\uc5c8\uc744 \ub54c \ud050\uc758 \uc791\uc5c5\uc744 \uc2a4\ud0dd\uc73c\ub85c \uac00\uc838\uc635\ub2c8\ub2e4\n\n\uc2e4\uc81c \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c\ub294 \uc774\ub97c \ud65c\uc6a9\ud574 \ub300\uc6a9\ub7c9 \ud30c\uc77c \ucc98\ub9ac\ub098 \ub124\ud2b8\uc6cc\ud06c \uc694\uccad\uc744 \ud6a8\uc728\uc801\uc73c\ub85c \ucc98\ub9ac\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.\n"})}),"\n",(0,c.jsx)(s.h2,{id:"2-nodejs-\ud2b9\uc9d5",children:"2. Node.js \ud2b9\uc9d5"}),"\n",(0,c.jsx)(s.p,{children:"\uc2f1\uae00\uc2a4\ub808\ub4dc:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\uba54\uc778 \uc2a4\ub808\ub4dc \ud558\ub098\ub85c \ub3d9\uc791"}),"\n",(0,c.jsx)(s.li,{children:"\uba40\ud2f0\uc2a4\ub808\ub4dc \ub300\ube44 \ucee8\ud14d\uc2a4\ud2b8 \uc2a4\uc704\uce6d \ube44\uc6a9 \uac10\uc18c"}),"\n",(0,c.jsx)(s.li,{children:"CPU \uc9d1\uc57d\uc801 \uc791\uc5c5\uc5d0\ub294 \uc6cc\ucee4\uc2a4\ub808\ub4dc \ud65c\uc6a9 \ud544\uc694"}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"\ub17c\ube14\ub85c\ud0b9 I/O:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\ud30c\uc77c \uc77d\uae30/\uc4f0\uae30, \ub124\ud2b8\uc6cc\ud06c \uc694\uccad \ub4f1\uc744 \ube44\ub3d9\uae30\ub85c \ucc98\ub9ac"}),"\n",(0,c.jsx)(s.li,{children:"\uc791\uc5c5 \uc644\ub8cc\ub97c \uae30\ub2e4\ub9ac\uc9c0 \uc54a\uace0 \ub2e4\uc74c \ucf54\ub4dc \uc2e4\ud589"}),"\n"]}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:["fs",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"readFile"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'file.txt'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsxs)(s.span,{className:"token parameter",children:["err",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," data"]}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"err",(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"throw"})," err",(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"log"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"data",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"log"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'\ub2e4\uc74c \uc791\uc5c5 \uc2e4\ud589'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,c.jsx)(s.h4,{id:"\ubaa8\ubc94\ub2f5\uc548-1",children:"\ubaa8\ubc94\ub2f5\uc548"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{children:"Node.js\ub294 \uc774\ubca4\ud2b8 \uae30\ubc18 \ube44\ub3d9\uae30 I/O \ubaa8\ub378\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\n\n1) \uba54\uc778 \uc2a4\ub808\ub4dc\ub294 \uc694\uccad\uc744 \ubc1b\uc544 \uc791\uc5c5\uc744 \uc774\ubca4\ud2b8 \ub8e8\ud504\ub85c \uc804\ub2ec\ud569\ub2c8\ub2e4\n2) I/O \uc791\uc5c5\uc740 \uc6cc\ucee4 \uc2a4\ub808\ub4dc \ud480\ub85c \uc704\uc784\ub429\ub2c8\ub2e4\n3) \ube44\ub3d9\uae30\ub85c \ucc98\ub9ac\ub418\uc5b4 \ube14\ub85c\ud0b9 \uc5c6\uc774 \ub2e4\uc74c \uc694\uccad\uc744 \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4\n4) \uc644\ub8cc\ub41c \uc791\uc5c5\uc740 \ucf5c\ubc31\uc73c\ub85c \ucc98\ub9ac\ub429\ub2c8\ub2e4\n\n\uc2e4\uc81c\ub85c libuv \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 \uc774\ub7f0 \ube44\ub3d9\uae30 \ucc98\ub9ac\ub97c \ub2f4\ub2f9\ud558\uba70, CPU \uc791\uc5c5\uc774 \ub9ce\uc740 \uacbd\uc6b0\ub294 \ud074\ub7ec\uc2a4\ud130 \ubaa8\ub4c8\ub85c \uba40\ud2f0 \ud504\ub85c\uc138\uc2a4\ub97c \ud65c\uc6a9\ud569\ub2c8\ub2e4.\n"})}),"\n",(0,c.jsx)(s.h2,{id:"3-expressjs\uc640-\uc2e4\uc81c-\uac1c\ubc1c",children:"3. Express.js\uc640 \uc2e4\uc81c \uac1c\ubc1c"}),"\n",(0,c.jsx)(s.p,{children:"\ubbf8\ub4e4\uc6e8\uc5b4:"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:["app",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"use"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsxs)(s.span,{className:"token parameter",children:["req",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," res",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," next"]}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"log"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'\ub85c\uae45 \ubbf8\ub4e4\uc6e8\uc5b4'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,c.jsx)(s.span,{className:"token function",children:"next"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\napp",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"get"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'/'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsxs)(s.span,{className:"token parameter",children:["req",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," res"]}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  res",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"send"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'Hello'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,c.jsx)(s.p,{children:"\uc5d0\ub7ec \ud578\ub4e4\ub9c1:"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:["app",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"use"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsxs)(s.span,{className:"token parameter",children:["err",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," req",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," res",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," next"]}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"error"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"err",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"stack"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  res",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"status"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token number",children:"500"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"send"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'\uc11c\ubc84 \uc5d0\ub7ec \ubc1c\uc0dd'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,c.jsx)(s.p,{children:"\uba54\ubaa8\ub9ac \ub204\uc218 \uad00\ub9ac:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\uae00\ub85c\ubc8c \ubcc0\uc218 \uc0ac\uc6a9 \ucd5c\uc18c\ud654"}),"\n",(0,c.jsx)(s.li,{children:"\uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108 \uc81c\uac70"}),"\n",(0,c.jsx)(s.li,{children:"\uc2a4\ud2b8\ub9bc \uc885\ub8cc \ucc98\ub9ac"}),"\n"]}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," stream ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," fs",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"createReadStream"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'big.file'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\nstream",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"on"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'end'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," stream",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"destroy"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,c.jsx)(s.h4,{id:"\ubaa8\ubc94\ub2f5\uc548-2",children:"\ubaa8\ubc94\ub2f5\uc548"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{children:"\ubbf8\ub4e4\uc6e8\uc5b4\ub294 \uc694\uccad-\uc751\ub2f5 \uc0ac\uc774\ud074\uc5d0\uc11c \uc21c\ucc28\uc801\uc73c\ub85c \uc2e4\ud589\ub418\ub294 \ud568\uc218\ub4e4\uc785\ub2c8\ub2e4.\n\n\ud2b9\uc9d5:\n1) req, res, next \ud30c\ub77c\ubbf8\ud130\ub97c \uac00\uc9d1\ub2c8\ub2e4\n2) next()\ub85c \ub2e4\uc74c \ubbf8\ub4e4\uc6e8\uc5b4\ub85c \uc81c\uc5b4\ub97c \ub118\uae41\ub2c8\ub2e4\n3) \uc21c\uc11c\uac00 \uc911\uc694\ud558\uba70 \uc5d0\ub7ec \ucc98\ub9ac\ub294 \ub9c8\uc9c0\ub9c9\uc5d0 \uc704\uce58\ud569\ub2c8\ub2e4\n\n\uc8fc\ub85c \uc778\uc99d, \ub85c\uae45, \uc5d0\ub7ec \ucc98\ub9ac \ub4f1\uc5d0 \ud65c\uc6a9\ud588\uc73c\uba70, \ucee4\uc2a4\ud140 \ubbf8\ub4e4\uc6e8\uc5b4\ub85c \ubc18\ubcf5\ub418\ub294 \ub85c\uc9c1\uc744 \ubaa8\ub4c8\ud654\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.\n"})}),"\n",(0,c.jsx)(s.h2,{id:"4-\uc131\ub2a5-\ucd5c\uc801\ud654",children:"4. \uc131\ub2a5 \ucd5c\uc801\ud654"}),"\n",(0,c.jsx)(s.p,{children:"\ud074\ub7ec\uc2a4\ud130\ub9c1:"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," cluster ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token function",children:"require"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'cluster'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," numCPUs ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token function",children:"require"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'os'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"cpus"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"length"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"cluster",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"isMaster"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"for"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token keyword",children:"let"})," i ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token number",children:"0"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"})," i ",(0,c.jsx)(s.span,{className:"token operator",children:"<"})," numCPUs",(0,c.jsx)(s.span,{className:"token punctuation",children:";"})," i",(0,c.jsx)(s.span,{className:"token operator",children:"++"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    cluster",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"fork"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"})," ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"else"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,c.jsx)(s.span,{className:"token comment",children:"// \uc6cc\ucee4 \ud504\ub85c\uc138\uc2a4 \ucf54\ub4dc"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,c.jsx)(s.p,{children:"\uc131\ub2a5 \ubaa8\ub2c8\ud130\ub9c1:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"New Relic, PM2 \ub4f1 \ub3c4\uad6c \ud65c\uc6a9"}),"\n",(0,c.jsx)(s.li,{children:"\uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9, CPU \uc0ac\uc6a9\ub960 \ubaa8\ub2c8\ud130\ub9c1"}),"\n",(0,c.jsx)(s.li,{children:"\uc751\ub2f5\uc2dc\uac04, \ucc98\ub9ac\ub7c9 \uce21\uc815"}),"\n"]}),"\n",(0,c.jsx)(s.h4,{id:"\ubaa8\ubc94\ub2f5\uc548-3",children:"\ubaa8\ubc94\ub2f5\uc548"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{children:"Node.js\uc5d0\uc11c \uba54\ubaa8\ub9ac \ub204\uc218\ub294 \uc8fc\ub85c \ub2e4\uc74c \uc6d0\uc778\uc73c\ub85c \ubc1c\uc0dd\ud569\ub2c8\ub2e4:\n\n1) \uae00\ub85c\ubc8c/\uc815\uc801 \ubcc0\uc218\uc758 \ubb34\ubd84\ubcc4\ud55c \uc0ac\uc6a9\n2) \uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108 \ubbf8\uc81c\uac70\n3) \ud074\ub85c\uc800\uc758 \ubd80\uc801\uc808\ud55c \uc0ac\uc6a9\n4) \uc2a4\ud2b8\ub9bc \ubbf8\uc885\ub8cc\n\n\ud574\uacb0\ucc45:\n- heap-snapshot\uc73c\ub85c \uba54\ubaa8\ub9ac \ubd84\uc11d\n- \uc8fc\uae30\uc801\uc778 \uac00\ube44\uc9c0 \uceec\ub809\uc158\n- \ub9ac\uc2a4\ub108 cleanup \ucf54\ub4dc \uc791\uc131\n- \uc2a4\ud2b8\ub9bc \uc791\uc5c5 \ud6c4 \uba85\uc2dc\uc801 \uc885\ub8cc\n\n\uc2e4\uc81c\ub85c \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uba54\ubaa8\ub9ac \ub9ad\uc744 debugger\ub85c \ucd94\uc801\ud558\uace0 \ud574\uacb0\ud55c \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4.\n"})}),"\n",(0,c.jsx)(s.h2,{id:"5-\ubcf4\uc548-\ub300\ucc45",children:"5. \ubcf4\uc548 \ub300\ucc45"}),"\n",(0,c.jsx)(s.p,{children:"SQL \uc778\uc81d\uc158 \ubc29\uc9c0:"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token comment",children:"// \uc798\ubabb\ub41c \uc608"}),"\ndb",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"query"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsxs)(s.span,{className:"token template-string",children:[(0,c.jsx)(s.span,{className:"token template-punctuation string",children:"`"}),(0,c.jsx)(s.span,{className:"token string",children:"SELECT * FROM users WHERE id = "}),(0,c.jsxs)(s.span,{className:"token interpolation",children:[(0,c.jsx)(s.span,{className:"token interpolation-punctuation punctuation",children:"${"}),"userId",(0,c.jsx)(s.span,{className:"token interpolation-punctuation punctuation",children:"}"})]}),(0,c.jsx)(s.span,{className:"token template-punctuation string",children:"`"})]}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"// \uc62c\ubc14\ub978 \uc608"}),"\ndb",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"query"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'SELECT * FROM users WHERE id = ?'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),"userId",(0,c.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,c.jsx)(s.p,{children:"XSS \ub300\ucc45:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\uc785\ub825\uac12 \uc774\uc2a4\ucf00\uc774\ud504 \ucc98\ub9ac"}),"\n",(0,c.jsx)(s.li,{children:"helmet \ubbf8\ub4e4\uc6e8\uc5b4 \uc0ac\uc6a9"}),"\n"]}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," helmet ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token function",children:"require"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'helmet'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\napp",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"use"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token function",children:"helmet"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,c.jsx)(s.p,{children:"CSRF \ubcf4\ud638:"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," csrf ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token function",children:"require"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'csurf'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\napp",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"use"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token function",children:"csrf"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:"{"})," ",(0,c.jsx)(s.span,{className:"token literal-property property",children:"cookie"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token boolean",children:"true"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,c.jsx)(s.h2,{id:"6-rest-api-\uc124\uacc4-\uc6d0\uce59",children:"6. REST API \uc124\uacc4 \uc6d0\uce59"}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsx)(s.li,{children:"\uc790\uc6d0\uc744 URI\ub85c \ud45c\ud604 (\uba85\uc0ac \uc0ac\uc6a9)"}),"\n",(0,c.jsx)(s.li,{children:"\ud589\uc704\ub294 HTTP \uba54\uc11c\ub4dc\ub85c \ud45c\ud604"}),"\n",(0,c.jsx)(s.li,{children:"\uc751\ub2f5\uc740 \uc801\uc808\ud55c \uc0c1\ud0dc\ucf54\ub4dc \uc0ac\uc6a9"}),"\n",(0,c.jsx)(s.li,{children:"\ubc84\uc800\ub2dd \uad00\ub9ac"}),"\n",(0,c.jsx)(s.li,{children:"HATEOAS \uc6d0\uce59 \uc900\uc218"}),"\n"]}),"\n",(0,c.jsx)(s.h5,{id:"\ubc84\uc800\ub2dd",children:"\ubc84\uc800\ub2dd"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"API\uc758 \ubc84\uc804\uc744 \uad00\ub9ac\ud558\ub294 \ubc29\uc2dd"}),"\n",(0,c.jsx)(s.li,{children:"API \ubcc0\uacbd\uc2dc \ud558\uc704 \ud638\ud658\uc131 \uc720\uc9c0"}),"\n",(0,c.jsxs)(s.li,{children:["\uc8fc\uc694 \ubc29\ubc95:","\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsxs)(s.li,{children:["URI: ",(0,c.jsx)(s.code,{children:"/api/v1/users"})]}),"\n",(0,c.jsxs)(s.li,{children:["\ud5e4\ub354: ",(0,c.jsx)(s.code,{children:"Accept: application/vnd.company.myapp-v1+json"})]}),"\n",(0,c.jsxs)(s.li,{children:["\ud30c\ub77c\ubbf8\ud130: ",(0,c.jsx)(s.code,{children:"/users?version=1"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsxs)(s.li,{children:["URL \ubca0\uc774\uc2a4 \ubc84\uc804:","\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"/api/v1/*"})," \ud615\ud0dc\ub85c \ubaa8\ub4e0 API\uc5d0 \uae30\ubcf8 \uc801\uc6a9"]}),"\n",(0,c.jsx)(s.li,{children:"\uba85\uc2dc\uc801\uc774\uc9c0\ub9cc URL\uc774 \uc9c0\uc800\ubd84\ud574\uc9d0"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\ud5e4\ub354 \uae30\ubc18 \ubc84\uc804:","\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\uc694\uccad \ud5e4\ub354\uc5d0 \ubc84\uc804 \uc815\ubcf4 \ud3ec\ud568"}),"\n",(0,c.jsx)(s.li,{children:"URL\uc740 \uae54\ub054\ud558\ub098 \uad00\ub9ac\uac00 \ubcf5\uc7a1"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(s.h5,{id:"hateoas-hypermedia-as-the-engine-of-application-state",children:"HATEOAS (Hypermedia As The Engine Of Application State)"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"REST API\uc5d0\uc11c \ub9ac\uc18c\uc2a4\uac04 \uad00\uacc4\ub97c \ud558\uc774\ud37c\ub9c1\ud06c\ub85c \ud45c\ud604"}),"\n",(0,c.jsx)(s.li,{children:"\ud074\ub77c\uc774\uc5b8\ud2b8\uac00 API \uad6c\uc870\ub97c \ub3d9\uc801\uc73c\ub85c \ud30c\uc545 \uac00\ub2a5"}),"\n"]}),"\n",(0,c.jsx)(s.pre,{className:"language-json",children:(0,c.jsxs)(s.code,{className:"language-json",children:[(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,c.jsx)(s.span,{className:"token property",children:'"id"'}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token number",children:"123"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n  ",(0,c.jsx)(s.span,{className:"token property",children:'"name"'}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token string",children:'"John"'}),(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n  ",(0,c.jsx)(s.span,{className:"token property",children:'"_links"'}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token property",children:'"self"'}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token string",children:'"/users/123"'}),(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n    ",(0,c.jsx)(s.span,{className:"token property",children:'"friends"'}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token string",children:'"/users/123/friends"'}),(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n    ",(0,c.jsx)(s.span,{className:"token property",children:'"profile"'}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token string",children:'"/users/123/profile"'}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})})]})}function d(n={}){const{wrapper:s}={...(0,t.R)(),...n.components};return s?(0,c.jsx)(s,{...n,children:(0,c.jsx)(p,{...n})}):p(n)}},28453:(n,s,e)=>{e.d(s,{R:()=>l,x:()=>o});var a=e(96540);const c={},t=a.createContext(c);function l(n){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function o(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:l(n.components),a.createElement(t.Provider,{value:s},n.children)}}}]);