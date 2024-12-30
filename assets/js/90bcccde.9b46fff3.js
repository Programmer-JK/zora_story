"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[6298],{9188:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>o,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var l=d(4848),i=d(8453);const s={slug:"/malicious-users"},r="\ubd88\ub7c9 \uc0ac\uc6a9\uc790 \ud655\uc778 \ubb38\uc81c",c={id:"\ucf54\ub529\ud14c\uc2a4\ud2b8 \uc900\ube44/DFS , BFS/\ubd88\ub7c9 \uc0ac\uc6a9\uc790",title:"\ubd88\ub7c9 \uc0ac\uc6a9\uc790",description:"\uc791\uc131\uc77c : 2024.11.08",source:"@site/docs/\ucf54\ub529\ud14c\uc2a4\ud2b8 \uc900\ube44/DFS , BFS/\ubd88\ub7c9 \uc0ac\uc6a9\uc790.md",sourceDirName:"\ucf54\ub529\ud14c\uc2a4\ud2b8 \uc900\ube44/DFS , BFS",slug:"/malicious-users",permalink:"/zora_story/docs/malicious-users",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/malicious-users"},sidebar:"studySidebar",previous:{title:"\ubbf8\ub85c \ud0c8\ucd9c",permalink:"/zora_story/docs/maze-escape"},next:{title:"\uc11d\uc720 \uc2dc\ucd94",permalink:"/zora_story/docs/oil-drilling"}},t={},a=[{value:"\ubb38\uc81c \uc124\uba85",id:"\ubb38\uc81c-\uc124\uba85",level:2},{value:"\uc608\uc2dc",id:"\uc608\uc2dc",level:3},{value:"\uc81c\ud55c \uc870\uac74",id:"\uc81c\ud55c-\uc870\uac74",level:2},{value:"\ud574\uacb0 \ucf54\ub4dc",id:"\ud574\uacb0-\ucf54\ub4dc",level:2},{value:"\uc54c\uace0\ub9ac\uc998 \uc124\uba85",id:"\uc54c\uace0\ub9ac\uc998-\uc124\uba85",level:2},{value:"\uc8fc\uc694 \uba54\uc11c\ub4dc \uc124\uba85",id:"\uc8fc\uc694-\uba54\uc11c\ub4dc-\uc124\uba85",level:2},{value:"\uc2dc\uac04 \ubcf5\uc7a1\ub3c4",id:"\uc2dc\uac04-\ubcf5\uc7a1\ub3c4",level:2},{value:"\uacf5\uac04 \ubcf5\uc7a1\ub3c4",id:"\uacf5\uac04-\ubcf5\uc7a1\ub3c4",level:2},{value:"\ubb38\uc81c \ud574\uacb0 \ud3ec\uc778\ud2b8",id:"\ubb38\uc81c-\ud574\uacb0-\ud3ec\uc778\ud2b8",level:2}];function h(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\uc791\uc131\uc77c : 2024.11.08"}),"\n"]}),"\n",(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"\ubd88\ub7c9-\uc0ac\uc6a9\uc790-\ud655\uc778-\ubb38\uc81c",children:"\ubd88\ub7c9 \uc0ac\uc6a9\uc790 \ud655\uc778 \ubb38\uc81c"})}),"\n",(0,l.jsx)(n.h2,{id:"\ubb38\uc81c-\uc124\uba85",children:"\ubb38\uc81c \uc124\uba85"}),"\n",(0,l.jsx)(n.p,{children:"\uc774\ubca4\ud2b8 \uc751\ubaa8\uc790\ub4e4 \uc911 \ubd88\ub7c9 \uc0ac\uc6a9\uc790\ub97c \ucc3e\uc544\ub0b4\ub294 \ubb38\uc81c\uc785\ub2c8\ub2e4. \ubd88\ub7c9 \uc0ac\uc6a9\uc790 ID\ub294 \uc77c\ubd80\uac00 '*'\ub85c \uac00\ub824\uc838 \uc788\uc73c\uba70, \uc774\uc5d0 \ub9e4\uce6d\ub418\ub294 \uc2e4\uc81c \uc0ac\uc6a9\uc790 ID\uc758 \ubaa8\ub4e0 \uc870\ud569\uc744 \ucc3e\uc544\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.h3,{id:"\uc608\uc2dc",children:"\uc608\uc2dc"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'\uc751\ubaa8\uc790 ID: ["frodo", "fradi", "crodo", "abc123", "frodoc"]\n\ubd88\ub7c9 \uc0ac\uc6a9\uc790: ["fr*d*", "abc1**"]\n\n\uac00\ub2a5\ud55c \uc81c\uc7ac ID \uc870\ud569:\n1. ["frodo", "abc123"]\n2. ["fradi", "abc123"]\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\uc81c\ud55c-\uc870\uac74",children:"\uc81c\ud55c \uc870\uac74"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"user_id \ubc30\uc5f4"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\ud06c\uae30: 1 \u2264 \ud06c\uae30 \u2264 8"}),"\n",(0,l.jsx)(n.li,{children:"ID \uae38\uc774: 1 \u2264 \uae38\uc774 \u2264 8"}),"\n",(0,l.jsx)(n.li,{children:"\uad6c\uc131: \uc54c\ud30c\ubcb3 \uc18c\ubb38\uc790, \uc22b\uc790"}),"\n",(0,l.jsx)(n.li,{children:"\uc911\ubcf5 \uc5c6\uc74c"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"banned_id \ubc30\uc5f4"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\ud06c\uae30: 1 \u2264 \ud06c\uae30 \u2264 user_id \ubc30\uc5f4 \ud06c\uae30"}),"\n",(0,l.jsx)(n.li,{children:"\uad6c\uc131: \uc54c\ud30c\ubcb3 \uc18c\ubb38\uc790, \uc22b\uc790, '*'"}),"\n",(0,l.jsx)(n.li,{children:"'*' \ubb38\uc790 \ucd5c\uc18c 1\uac1c \ud3ec\ud568"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\ud574\uacb0-\ucf54\ub4dc",children:"\ud574\uacb0 \ucf54\ub4dc"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'function solution(user_id, banned_id) {\n  let answer = new Set();\n\n  const matched = (user_id, banned_id) => {\n    if (user_id.length != banned_id.length) return false;\n    for (let chIndex = 0; chIndex < user_id.length; chIndex++) {\n      if (banned_id[chIndex] != "*" && banned_id[chIndex] != user_id[chIndex]) {\n        return false;\n      }\n    }\n    return true;\n  };\n\n  const dfs = (level, selected) => {\n    if (level == banned_id.length) {\n      answer.add([...selected].sort().join(","));\n      return;\n    }\n    for (let idIndex = 0; idIndex < user_id.length; idIndex++) {\n      if (\n        !selected.has(idIndex) &&\n        matched(user_id[idIndex], banned_id[level])\n      ) {\n        selected.add(idIndex);\n        dfs(level + 1, selected);\n        selected.delete(idIndex);\n      }\n    }\n  };\n\n  dfs(0, new Set());\n  return answer.size;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\uc54c\uace0\ub9ac\uc998-\uc124\uba85",children:"\uc54c\uace0\ub9ac\uc998 \uc124\uba85"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"ID \ub9e4\uce6d \uac80\uc0ac (matched \ud568\uc218)"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"const matched = (user_id, banned_id) => {\n  // \uae38\uc774\uac00 \ub2e4\ub974\uba74 \ub9e4\uce6d \uc2e4\ud328\n  if (user_id.length != banned_id.length) return false;\n\n  // \ubb38\uc790\ubcc4 \ube44\uad50\n  for (let chIndex = 0; chIndex < user_id.length; chIndex++) {\n    // '*'\uac00 \uc544\ub2c8\uba74\uc11c \ubb38\uc790\uac00 \ub2e4\ub974\uba74 \ub9e4\uce6d \uc2e4\ud328\n    if (banned_id[chIndex] != \"*\" && banned_id[chIndex] != user_id[chIndex]) {\n      return false;\n    }\n  }\n  return true;\n};\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:"DFS\ub97c \ud1b5\ud55c \uc870\ud569 \ud0d0\uc0c9"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'const dfs = (level, selected) => {\n  // \ubaa8\ub4e0 \ubd88\ub7c9 \uc0ac\uc6a9\uc790 \ub9e4\uce6d \uc644\ub8cc\n  if (level == banned_id.length) {\n    answer.add([...selected].sort().join(","));\n    return;\n  }\n\n  // \uac01 \uc0ac\uc6a9\uc790 ID\uc5d0 \ub300\ud574 \ub9e4\uce6d \uc2dc\ub3c4\n  for (let idIndex = 0; idIndex < user_id.length; idIndex++) {\n    if (!selected.has(idIndex) && matched(user_id[idIndex], banned_id[level])) {\n      selected.add(idIndex);\n      dfs(level + 1, selected);\n      selected.delete(idIndex);\n    }\n  }\n};\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\uc8fc\uc694-\uba54\uc11c\ub4dc-\uc124\uba85",children:"\uc8fc\uc694 \uba54\uc11c\ub4dc \uc124\uba85"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Set \uac1d\uccb4 \ud65c\uc6a9"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"let answer = new Set(); // \uc911\ubcf5 \uc81c\uac70\ub97c \uc704\ud55c Set\nselected.add(idIndex); // \uc120\ud0dd\ub41c ID \ucd94\uac00\nselected.delete(idIndex); // \uc120\ud0dd \ud574\uc81c\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:"\ubc30\uc5f4 \uba54\uc11c\ub4dc"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'[...selected].sort(); // Set\uc744 \ubc30\uc5f4\ub85c \ubcc0\ud658 \ud6c4 \uc815\ub82c\narray.join(","); // \ubc30\uc5f4\uc744 \ubb38\uc790\uc5f4\ub85c \ubcc0\ud658\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\uc2dc\uac04-\ubcf5\uc7a1\ub3c4",children:"\uc2dc\uac04 \ubcf5\uc7a1\ub3c4"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"O(n^m): n\uc740 user_id\uc758 \uc218, m\uc740 banned_id\uc758 \uc218"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\uacf5\uac04-\ubcf5\uc7a1\ub3c4",children:"\uacf5\uac04 \ubcf5\uc7a1\ub3c4"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"O(m): m\uc740 banned_id\uc758 \uc218 (Set \uac1d\uccb4 \uc0ac\uc6a9)"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\ubb38\uc81c-\ud574\uacb0-\ud3ec\uc778\ud2b8",children:"\ubb38\uc81c \ud574\uacb0 \ud3ec\uc778\ud2b8"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\ubb38\uc790\uc5f4 \ud328\ud134 \ub9e4\uce6d"}),"\n",(0,l.jsx)(n.li,{children:"DFS\ub97c \ud1b5\ud55c \ubaa8\ub4e0 \uac00\ub2a5\ud55c \uc870\ud569 \ud0d0\uc0c9"}),"\n",(0,l.jsx)(n.li,{children:"Set\uc744 \ud65c\uc6a9\ud55c \uc911\ubcf5 \uc870\ud569 \uc81c\uac70"}),"\n",(0,l.jsx)(n.li,{children:"\ubc31\ud2b8\ub798\ud0b9\uc744 \ud1b5\ud55c \ud6a8\uc728\uc801\uc778 \ud0d0\uc0c9"}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},8453:(e,n,d)=>{d.d(n,{R:()=>r,x:()=>c});var l=d(6540);const i={},s=l.createContext(i);function r(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);