"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[992],{5904:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>a,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var r=l(4848),i=l(8453);const s={slug:"/vowel-dictionary"},c=void 0,d={id:"\ucf54\ub529\ud14c\uc2a4\ud2b8 \uc900\ube44/DFS , BFS/\ubaa8\uc74c \uc0ac\uc804",title:"\ubaa8\uc74c \uc0ac\uc804",description:"\uc791\uc131\uc77c : 2024.11.12",source:"@site/docs/20. \ucf54\ub529\ud14c\uc2a4\ud2b8 \uc900\ube44/200500. DFS , BFS/200504. \ubaa8\uc74c \uc0ac\uc804.md",sourceDirName:"20. \ucf54\ub529\ud14c\uc2a4\ud2b8 \uc900\ube44/200500. DFS , BFS",slug:"/vowel-dictionary",permalink:"/zora_story/docs/vowel-dictionary",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:200504,frontMatter:{slug:"/vowel-dictionary"},sidebar:"studySidebar",previous:{title:"\ub2e8\uc5b4 \ubcc0\ud658",permalink:"/zora_story/docs/word-conversion"},next:{title:"\ubbf8\ub85c \ud0c8\ucd9c",permalink:"/zora_story/docs/maze-escape"}},t={},o=[{value:"\ubaa8\uc74c \uc0ac\uc804 \ubb38\uc81c L2",id:"\ubaa8\uc74c-\uc0ac\uc804-\ubb38\uc81c-l2",level:2},{value:"\ubb38\uc81c \uc124\uba85",id:"\ubb38\uc81c-\uc124\uba85",level:2},{value:"\uc0ac\uc804 \uad6c\uc131 \uc608\uc2dc",id:"\uc0ac\uc804-\uad6c\uc131-\uc608\uc2dc",level:3},{value:"\uc81c\ud55c \uc870\uac74",id:"\uc81c\ud55c-\uc870\uac74",level:2},{value:"\ud574\uacb0 \ucf54\ub4dc",id:"\ud574\uacb0-\ucf54\ub4dc",level:2},{value:"\uc54c\uace0\ub9ac\uc998 \uc124\uba85",id:"\uc54c\uace0\ub9ac\uc998-\uc124\uba85",level:2},{value:"\uad6c\ud604 \ud2b9\uc9d5",id:"\uad6c\ud604-\ud2b9\uc9d5",level:2},{value:"\uc2dc\uac04 \ubcf5\uc7a1\ub3c4",id:"\uc2dc\uac04-\ubcf5\uc7a1\ub3c4",level:2},{value:"\uacf5\uac04 \ubcf5\uc7a1\ub3c4",id:"\uacf5\uac04-\ubcf5\uc7a1\ub3c4",level:2},{value:"\uc608\uc2dc \uc2e4\ud589",id:"\uc608\uc2dc-\uc2e4\ud589",level:2}];function h(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\uc791\uc131\uc77c : 2024.11.12"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\ubaa8\uc74c-\uc0ac\uc804-\ubb38\uc81c-l2",children:(0,r.jsx)(e.a,{href:"https://school.programmers.co.kr/learn/courses/30/lessons/84512",children:"\ubaa8\uc74c \uc0ac\uc804 \ubb38\uc81c L2"})}),"\n",(0,r.jsx)(e.h2,{id:"\ubb38\uc81c-\uc124\uba85",children:"\ubb38\uc81c \uc124\uba85"}),"\n",(0,r.jsx)(e.p,{children:"\uc54c\ud30c\ubcb3 \ubaa8\uc74c('A', 'E', 'I', 'O', 'U')\ub9cc\uc744 \uc0ac\uc6a9\ud558\uc5ec \ub9cc\ub4e4 \uc218 \uc788\ub294 \uae38\uc774 5 \uc774\ud558\uc758 \ubaa8\ub4e0 \ub2e8\uc5b4\ub97c \uc0ac\uc804\uc5d0 \uc218\ub85d\ud558\uace0, \uc8fc\uc5b4\uc9c4 \ub2e8\uc5b4\uac00 \uc0ac\uc804\uc5d0\uc11c \uba87 \ubc88\uc9f8\uc5d0 \uc704\uce58\ud558\ub294\uc9c0 \ucc3e\ub294 \ubb38\uc81c\uc785\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.h3,{id:"\uc0ac\uc804-\uad6c\uc131-\uc608\uc2dc",children:"\uc0ac\uc804 \uad6c\uc131 \uc608\uc2dc"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'1\ubc88: "A"\n2\ubc88: "AA"\n3\ubc88: "AAA"\n...\n\ub9c8\uc9c0\ub9c9: "UUUUU"\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\uc81c\ud55c-\uc870\uac74",children:"\uc81c\ud55c \uc870\uac74"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["word \uc81c\ud55c","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\uae38\uc774: 1 \u2264 length \u2264 5"}),"\n",(0,r.jsx)(e.li,{children:"\uad6c\uc131: 'A', 'E', 'I', 'O', 'U'\ub9cc \uc0ac\uc6a9"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\ud574\uacb0-\ucf54\ub4dc",children:"\ud574\uacb0 \ucf54\ub4dc"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:'function solution(word) {\n  var answer = 0;\n  let arr = ["A", "E", "I", "O", "U"];\n  let count = 0;\n  const dfs = (str) => {\n    if (str.length > 5) return;\n    if (str == word) {\n      ans = count;\n      return;\n    }\n    count++;\n    for (let i = 0; i < arr.length; i++) {\n      dfs(str + arr[i]);\n    }\n  };\n  dfs("");\n  return ans;\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\uc54c\uace0\ub9ac\uc998-\uc124\uba85",children:"\uc54c\uace0\ub9ac\uc998 \uc124\uba85"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"DFS(\uae4a\uc774 \uc6b0\uc120 \ud0d0\uc0c9) \uc0ac\uc6a9"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:'\ube48 \ubb38\uc790\uc5f4("")\ubd80\ud130 \uc2dc\uc791'}),"\n",(0,r.jsx)(e.li,{children:"\ubaa8\uc74c\uc744 \ud558\ub098\uc529 \ucd94\uac00\ud558\uba70 \ubaa8\ub4e0 \uac00\ub2a5\ud55c \uc870\ud569 \uc0dd\uc131"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"DFS \ud568\uc218\uc758 \ub3d9\uc791"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"const dfs = (str) => {\n  // \uae38\uc774\uac00 5\ub97c \ucd08\uacfc\ud558\uba74 \uc885\ub8cc\n  if (str.length > 5) return;\n\n  // \ubaa9\ud45c \ub2e8\uc5b4\ub97c \ucc3e\uc73c\uba74 \ud604\uc7ac \uce74\uc6b4\ud2b8 \uc800\uc7a5\n  if (str == word) {\n    ans = count;\n    return;\n  }\n\n  // \uce74\uc6b4\ud2b8 \uc99d\uac00 \ubc0f \ub2e4\uc74c \ub2e8\uc5b4 \ud0d0\uc0c9\n  count++;\n  for (let i = 0; i < arr.length; i++) {\n    dfs(str + arr[i]);\n  }\n};\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\uc0ac\uc804 \uc21c\uc11c \uc0dd\uc131 \ubc29\uc2dd"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"A \u2192 AA \u2192 AAA \u2192 AAAA \u2192 AAAAA"}),"\n",(0,r.jsx)(e.li,{children:"AAAAE \u2192 AAAAI \u2192 AAAAO \u2192 AAAAU"}),"\n",(0,r.jsx)(e.li,{children:"AAAE \u2192 AAAEA \u2192 ..."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\uad6c\ud604-\ud2b9\uc9d5",children:"\uad6c\ud604 \ud2b9\uc9d5"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\uc7ac\uadc0\uc801 \uad6c\uc870"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\uac01 \ub2e8\uacc4\uc5d0\uc11c 5\uac1c\uc758 \ubaa8\uc74c\uc744 \ucd94\uac00\ud558\uc5ec \uc0c8\ub85c\uc6b4 \ub2e8\uc5b4 \uc0dd\uc131"}),"\n",(0,r.jsx)(e.li,{children:"\ucd5c\ub300 \uae4a\uc774 5\uae4c\uc9c0 \ud0d0\uc0c9"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\uce74\uc6b4\ud305 \ubc29\uc2dd"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\uc0c8\ub85c\uc6b4 \ub2e8\uc5b4\ub97c \ub9cc\ub4e4 \ub54c\ub9c8\ub2e4 \uce74\uc6b4\ud2b8 \uc99d\uac00"}),"\n",(0,r.jsx)(e.li,{children:"\ubaa9\ud45c \ub2e8\uc5b4\ub97c \ucc3e\uc73c\uba74 \ud604\uc7ac\uae4c\uc9c0\uc758 \uce74\uc6b4\ud2b8\uac00 \ub2f5"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\ud0d0\uc0c9 \uc885\ub8cc \uc870\uac74"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\ub2e8\uc5b4 \uae38\uc774\uac00 5\ub97c \ucd08\uacfc\ud560 \ub54c"}),"\n",(0,r.jsx)(e.li,{children:"\ubaa9\ud45c \ub2e8\uc5b4\ub97c \ucc3e\uc558\uc744 \ub54c"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\uc2dc\uac04-\ubcf5\uc7a1\ub3c4",children:"\uc2dc\uac04 \ubcf5\uc7a1\ub3c4"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"O(5\u2075): \uac01 \uc704\uce58\uc5d0\uc11c 5\uac1c\uc758 \uc120\ud0dd\uc9c0"}),"\n",(0,r.jsx)(e.li,{children:"\ucd5c\ub300 \uae4a\uc774 5\uae4c\uc9c0 \ud0d0\uc0c9"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\uacf5\uac04-\ubcf5\uc7a1\ub3c4",children:"\uacf5\uac04 \ubcf5\uc7a1\ub3c4"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"O(5): \uc7ac\uadc0 \ud638\ucd9c \uc2a4\ud0dd \uae4a\uc774"}),"\n",(0,r.jsx)(e.li,{children:"\ucd94\uac00 \ubc30\uc5f4 \uc800\uc7a5 \uc5c6\uc74c"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\uc608\uc2dc-\uc2e4\ud589",children:"\uc608\uc2dc \uc2e4\ud589"}),"\n",(0,r.jsx)(e.p,{children:'\uc785\ub825: "AAAAE"'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"1. A\n2. AA\n3. AAA\n4. AAAA\n5. AAAAA\n6. AAAAE (\ub2f5: 6)\n"})})]})}function a(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},8453:(n,e,l)=>{l.d(e,{R:()=>c,x:()=>d});var r=l(6540);const i={},s=r.createContext(i);function c(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);