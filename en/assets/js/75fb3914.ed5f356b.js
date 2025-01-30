"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[88588],{1947:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>i});const a=JSON.parse('{"id":"\ucf54\ub529\ud14c\uc2a4\ud2b8 \uc900\ube44/DFS , BFS/\uac8c\uc784 \ub9f5 \ucd5c\ub2e8\uac70\ub9ac","title":"\uac8c\uc784 \ub9f5 \ucd5c\ub2e8\uac70\ub9ac","description":"\uc791\uc131\uc77c : 2024.12.01","source":"@site/docs/20. \ucf54\ub529\ud14c\uc2a4\ud2b8 \uc900\ube44/200500. DFS , BFS/200501. \uac8c\uc784 \ub9f5 \ucd5c\ub2e8\uac70\ub9ac.md","sourceDirName":"20. \ucf54\ub529\ud14c\uc2a4\ud2b8 \uc900\ube44/200500. DFS , BFS","slug":"/game-map-shortest-path","permalink":"/zora_story/en/docs/game-map-shortest-path","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":200501,"frontMatter":{"slug":"/game-map-shortest-path"},"sidebar":"studySidebar","previous":{"title":"\ub354 \ub9f5\uac8c","permalink":"/zora_story/en/docs/more-spicy"},"next":{"title":"\ub124\ud2b8\uc6cc\ud06c","permalink":"/zora_story/en/docs/network"}}');var c=e(74848),t=e(28453);const l={slug:"/game-map-shortest-path"},o=void 0,r={},i=[{value:"\uac8c\uc784 \ub9f5 \ucd5c\ub2e8\uac70\ub9ac (L2)",id:"\uac8c\uc784-\ub9f5-\ucd5c\ub2e8\uac70\ub9ac-l2",level:2},{value:"\ubb38\uc81c \uc124\uba85",id:"\ubb38\uc81c-\uc124\uba85",level:2},{value:"\ub9f5 \uad6c\uc131",id:"\ub9f5-\uad6c\uc131",level:3},{value:"\uc81c\ud55c \uc870\uac74",id:"\uc81c\ud55c-\uc870\uac74",level:2},{value:"\ud574\uacb0 \ucf54\ub4dc",id:"\ud574\uacb0-\ucf54\ub4dc",level:2},{value:"\uc8fc\uc694 \ub85c\uc9c1 \uc124\uba85",id:"\uc8fc\uc694-\ub85c\uc9c1-\uc124\uba85",level:2},{value:"\ud575\uc2ec \ubb38\ubc95 \uc694\uc18c",id:"\ud575\uc2ec-\ubb38\ubc95-\uc694\uc18c",level:2}];function p(n){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...(0,t.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"\uc791\uc131\uc77c : 2024.12.01"}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"\uac8c\uc784-\ub9f5-\ucd5c\ub2e8\uac70\ub9ac-l2",children:(0,c.jsx)(s.a,{href:"https://school.programmers.co.kr/learn/courses/30/lessons/1844",children:"\uac8c\uc784 \ub9f5 \ucd5c\ub2e8\uac70\ub9ac (L2)"})}),"\n",(0,c.jsx)(s.h2,{id:"\ubb38\uc81c-\uc124\uba85",children:"\ubb38\uc81c \uc124\uba85"}),"\n",(0,c.jsx)(s.p,{children:"ROR \uac8c\uc784\uc740 \ub450 \ud300\uc73c\ub85c \ub098\ub204\uc5b4\uc11c \uc9c4\ud589\ud558\uba70, \uc0c1\ub300 \ud300 \uc9c4\uc601\uc744 \uba3c\uc800 \ud30c\uad34\ud558\uba74 \uc774\uae30\ub294 \uac8c\uc784\uc785\ub2c8\ub2e4. \uac01 \ud300\uc740 \uc0c1\ub300 \ud300 \uc9c4\uc601\uc5d0 \ucd5c\ub300\ud55c \ube68\ub9ac \ub3c4\ucc29\ud558\ub294 \uac83\uc774 \uc720\ub9ac\ud569\ub2c8\ub2e4.\n\uac8c\uc784\uc740 5 x 5 \ud06c\uae30\uc758 \ub9f5\uc5d0\uc11c \uc9c4\ud589\ub418\uba70:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\uce90\ub9ad\ud130\uc758 \uc2dc\uc791 \uc704\uce58: (\ud589: 1, \uc5f4: 1)"}),"\n",(0,c.jsx)(s.li,{children:"\uc0c1\ub300 \ud300 \uc9c4\uc601 \uc704\uce58: (\ud589: 5, \uc5f4: 5)"}),"\n"]}),"\n",(0,c.jsx)(s.h3,{id:"\ub9f5-\uad6c\uc131",children:"\ub9f5 \uad6c\uc131"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\uac80\uc740\uc0c9 \ubd80\ubd84: \ubcbd\uc73c\ub85c \ub9c9\ud600\uc788\uc5b4 \uac08 \uc218 \uc5c6\ub294 \uae38"}),"\n",(0,c.jsx)(s.li,{children:"\ud770\uc0c9 \ubd80\ubd84: \uac08 \uc218 \uc788\ub294 \uae38"}),"\n",(0,c.jsx)(s.li,{children:"\uc774\ub3d9 \ubc29\ud5a5: \ub3d9, \uc11c, \ub0a8, \ubd81 \ubc29\ud5a5\uc73c\ub85c \ud55c \uce78\uc529"}),"\n",(0,c.jsx)(s.li,{children:"\uac8c\uc784 \ub9f5 \ubc16\uc73c\ub85c\ub294 \uc774\ub3d9 \ubd88\uac00"}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"\uc81c\ud55c-\uc870\uac74",children:"\uc81c\ud55c \uc870\uac74"}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"maps\ub294 n x m \ud06c\uae30\uc758 2\ucc28\uc6d0 \ubc30\uc5f4"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"n\uacfc m\uc740 \uac01\uac01 1 \uc774\uc0c1 100 \uc774\ud558\uc758 \uc790\uc5f0\uc218"}),"\n",(0,c.jsx)(s.li,{children:"n\uacfc m\uc774 \ubaa8\ub450 1\uc778 \uacbd\uc6b0\ub294 \uc785\ub825\uc73c\ub85c \uc8fc\uc5b4\uc9c0\uc9c0 \uc54a\uc74c"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"maps \uad6c\uc131"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"0: \ubcbd\uc774 \uc788\ub294 \uc790\ub9ac"}),"\n",(0,c.jsx)(s.li,{children:"1: \ubcbd\uc774 \uc5c6\ub294 \uc790\ub9ac"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"\uc704\uce58 \uc815\ubcf4"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\uc2dc\uc791 \uc704\uce58: \uc88c\uce21 \uc0c1\ub2e8 (1, 1)"}),"\n",(0,c.jsx)(s.li,{children:"\ub3c4\ucc29 \uc704\uce58: \uc6b0\uce21 \ud558\ub2e8 (n, m)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"\ud574\uacb0-\ucf54\ub4dc",children:"\ud574\uacb0 \ucf54\ub4dc"}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token keyword",children:"function"})," ",(0,c.jsx)(s.span,{className:"token function",children:"solution"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token parameter",children:"maps"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,c.jsx)(s.span,{className:"token keyword",children:"let"})," answer ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token operator",children:"-"}),(0,c.jsx)(s.span,{className:"token number",children:"1"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,c.jsx)(s.span,{className:"token keyword",children:"let"})," moveCount ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token number",children:"0"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,c.jsx)(s.span,{className:"token keyword",children:"let"})," queue ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),(0,c.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,c.jsx)(s.span,{className:"token keyword",children:"let"})," visited ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),(0,c.jsx)(s.span,{className:"token spread operator",children:"..."}),"maps",(0,c.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," moveX ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),(0,c.jsx)(s.span,{className:"token number",children:"1"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token operator",children:"-"}),(0,c.jsx)(s.span,{className:"token number",children:"1"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token number",children:"0"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token number",children:"0"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," moveY ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),(0,c.jsx)(s.span,{className:"token number",children:"0"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token number",children:"0"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token number",children:"1"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token operator",children:"-"}),(0,c.jsx)(s.span,{className:"token number",children:"1"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," maxX ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," maps",(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),(0,c.jsx)(s.span,{className:"token number",children:"0"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"length"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"-"})," ",(0,c.jsx)(s.span,{className:"token number",children:"1"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,c.jsx)(s.span,{className:"token keyword",children:"const"})," maxY ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," maps",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"length"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"-"})," ",(0,c.jsx)(s.span,{className:"token number",children:"1"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n  queue",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"push"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),(0,c.jsx)(s.span,{className:"token number",children:"0"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token number",children:"0"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  visited",(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),(0,c.jsx)(s.span,{className:"token number",children:"0"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),(0,c.jsx)(s.span,{className:"token number",children:"0"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"]"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token number",children:"0"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"while"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"queue",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"length"})," ",(0,c.jsx)(s.span,{className:"token operator",children:">"})," ",(0,c.jsx)(s.span,{className:"token number",children:"0"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    moveCount",(0,c.jsx)(s.span,{className:"token operator",children:"++"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n    ",(0,c.jsx)(s.span,{className:"token keyword",children:"let"})," size ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," queue",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"length"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n    ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"for"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token keyword",children:"let"})," i ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token number",children:"0"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"})," i ",(0,c.jsx)(s.span,{className:"token operator",children:"<"})," size",(0,c.jsx)(s.span,{className:"token punctuation",children:";"})," i",(0,c.jsx)(s.span,{className:"token operator",children:"++"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n      ",(0,c.jsx)(s.span,{className:"token keyword",children:"let"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),"curX",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," curY",(0,c.jsx)(s.span,{className:"token punctuation",children:"]"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," queue",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"shift"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n      ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"for"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token keyword",children:"let"})," k ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token number",children:"0"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"})," k ",(0,c.jsx)(s.span,{className:"token operator",children:"<"})," ",(0,c.jsx)(s.span,{className:"token number",children:"4"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"})," k",(0,c.jsx)(s.span,{className:"token operator",children:"++"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n        ",(0,c.jsx)(s.span,{className:"token keyword",children:"let"})," nextX ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," curX ",(0,c.jsx)(s.span,{className:"token operator",children:"+"})," moveX",(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),"k",(0,c.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n        ",(0,c.jsx)(s.span,{className:"token keyword",children:"let"})," nextY ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," curY ",(0,c.jsx)(s.span,{className:"token operator",children:"+"})," moveY",(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),"k",(0,c.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n        ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"nextX ",(0,c.jsx)(s.span,{className:"token operator",children:"=="})," maxX ",(0,c.jsx)(s.span,{className:"token operator",children:"&&"})," nextY ",(0,c.jsx)(s.span,{className:"token operator",children:"=="})," maxY",(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"++"}),"moveCount",(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n        ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"nextX ",(0,c.jsx)(s.span,{className:"token operator",children:"<="})," maxX ",(0,c.jsx)(s.span,{className:"token operator",children:"&&"})," nextX ",(0,c.jsx)(s.span,{className:"token operator",children:">="})," ",(0,c.jsx)(s.span,{className:"token number",children:"0"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"&&"})," nextY ",(0,c.jsx)(s.span,{className:"token operator",children:"<="})," maxY ",(0,c.jsx)(s.span,{className:"token operator",children:"&&"})," nextY ",(0,c.jsx)(s.span,{className:"token operator",children:">="})," ",(0,c.jsx)(s.span,{className:"token number",children:"0"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n          ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"visited",(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),"nextY",(0,c.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),"nextX",(0,c.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n            queue",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"push"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),"nextX",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," nextY",(0,c.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n            visited",(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),"nextY",(0,c.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),"nextX",(0,c.jsx)(s.span,{className:"token punctuation",children:"]"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token number",children:"0"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n          ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n        ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n      ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n    ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n\n  ",(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," answer",(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,c.jsx)(s.h2,{id:"\uc8fc\uc694-\ub85c\uc9c1-\uc124\uba85",children:"\uc8fc\uc694 \ub85c\uc9c1 \uc124\uba85"}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsx)(s.li,{children:"BFS(\ub108\ube44 \uc6b0\uc120 \ud0d0\uc0c9) \uc54c\uace0\ub9ac\uc998 \uc0ac\uc6a9"}),"\n",(0,c.jsx)(s.li,{children:"queue\ub97c \ud65c\uc6a9\ud558\uc5ec \uc774\ub3d9 \uac00\ub2a5\ud55c \uc704\uce58\ub97c \uc800\uc7a5\ud558\uace0 \ud0d0\uc0c9"}),"\n",(0,c.jsx)(s.li,{children:"visited \ubc30\uc5f4\ub85c \ubc29\ubb38\ud55c \uc704\uce58 \uccb4\ud06c"}),"\n",(0,c.jsx)(s.li,{children:"\ub3d9\uc11c\ub0a8\ubd81 4\ubc29\ud5a5 \uc774\ub3d9 \uc88c\ud45c \uacc4\uc0b0"}),"\n",(0,c.jsx)(s.li,{children:"\ubaa9\ud45c \uc9c0\uc810 \ub3c4\ub2ec \uc2dc \uc774\ub3d9 \ud69f\uc218 \ubc18\ud658"}),"\n",(0,c.jsx)(s.li,{children:"\ub3c4\ub2ec \ubd88\uac00\ub2a5\ud55c \uacbd\uc6b0 -1 \ubc18\ud658"}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"\ud575\uc2ec-\ubb38\ubc95-\uc694\uc18c",children:"\ud575\uc2ec \ubb38\ubc95 \uc694\uc18c"}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsx)(s.li,{children:"\ubc30\uc5f4 \uad6c\uc870 \ubd84\ud574"}),"\n"]}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token keyword",children:"let"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),"curX",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," curY",(0,c.jsx)(s.span,{className:"token punctuation",children:"]"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," queue",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"shift"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,c.jsxs)(s.ol,{start:"2",children:["\n",(0,c.jsx)(s.li,{children:"\uc2a4\ud504\ub808\ub4dc \uc5f0\uc0b0\uc790\ub97c \ud65c\uc6a9\ud55c \ubc30\uc5f4 \ubcf5\uc0ac"}),"\n"]}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token keyword",children:"let"})," visited ",(0,c.jsx)(s.span,{className:"token operator",children:"="})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),(0,c.jsx)(s.span,{className:"token spread operator",children:"..."}),"maps",(0,c.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,c.jsxs)(s.ol,{start:"3",children:["\n",(0,c.jsx)(s.li,{children:"BFS\ub97c \uc704\ud55c queue \ud65c\uc6a9"}),"\n"]}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:["queue",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"push"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),"nextX",(0,c.jsx)(s.span,{className:"token punctuation",children:","})," nextY",(0,c.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,c.jsxs)(s.ol,{start:"4",children:["\n",(0,c.jsx)(s.li,{children:"2\ucc28\uc6d0 \ubc30\uc5f4 \uc811\uadfc"}),"\n"]}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:["visited",(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),"nextY",(0,c.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"["}),"nextX",(0,c.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})})]})}function u(n={}){const{wrapper:s}={...(0,t.R)(),...n.components};return s?(0,c.jsx)(s,{...n,children:(0,c.jsx)(p,{...n})}):p(n)}},28453:(n,s,e)=>{e.d(s,{R:()=>l,x:()=>o});var a=e(96540);const c={},t=a.createContext(c);function l(n){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function o(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:l(n.components),a.createElement(t.Provider,{value:s},n.children)}}}]);