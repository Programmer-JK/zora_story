"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[8854],{29955:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>i,contentTitle:()=>t,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>r});var a=e(74848),c=e(28453);const l={slug:"/fatigue-level"},t="\ud53c\ub85c\ub3c4 \ub358\uc804 \ubb38\uc81c",o={id:"\ucf54\ub529\ud14c\uc2a4\ud2b8 \uc900\ube44/DFS , BFS/\ud53c\ub85c\ub3c4",title:"\ud53c\ub85c\ub3c4",description:"\uc791\uc131\uc77c : 2024.11.03",source:"@site/docs/20. \ucf54\ub529\ud14c\uc2a4\ud2b8 \uc900\ube44/200500. DFS , BFS/200510. \ud53c\ub85c\ub3c4.md",sourceDirName:"20. \ucf54\ub529\ud14c\uc2a4\ud2b8 \uc900\ube44/200500. DFS , BFS",slug:"/fatigue-level",permalink:"/zora_story/docs/fatigue-level",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:200510,frontMatter:{slug:"/fatigue-level"},sidebar:"studySidebar",previous:{title:"\ud0c0\ucf13 \ub118\ubc84",permalink:"/zora_story/docs/target-number"},next:{title:"N\uc73c\ub85c \ud45c\ud604",permalink:"/zora_story/docs/expression-with-n"}},i={},r=[{value:"\ubb38\uc81c \uc124\uba85",id:"\ubb38\uc81c-\uc124\uba85",level:2},{value:"\uc608\uc2dc",id:"\uc608\uc2dc",level:3},{value:"\uc81c\ud55c \uc870\uac74",id:"\uc81c\ud55c-\uc870\uac74",level:2},{value:"\ud574\uacb0 \ucf54\ub4dc",id:"\ud574\uacb0-\ucf54\ub4dc",level:2},{value:"\uc54c\uace0\ub9ac\uc998 \uc124\uba85",id:"\uc54c\uace0\ub9ac\uc998-\uc124\uba85",level:2},{value:"\ud575\uc2ec \ubb38\ubc95 \uc694\uc18c",id:"\ud575\uc2ec-\ubb38\ubc95-\uc694\uc18c",level:2},{value:"\uc2dc\uac04 \ubcf5\uc7a1\ub3c4",id:"\uc2dc\uac04-\ubcf5\uc7a1\ub3c4",level:2},{value:"\uacf5\uac04 \ubcf5\uc7a1\ub3c4",id:"\uacf5\uac04-\ubcf5\uc7a1\ub3c4",level:2}];function p(n){const s={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...(0,c.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"\uc791\uc131\uc77c : 2024.11.03"}),"\n"]}),"\n",(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"\ud53c\ub85c\ub3c4-\ub358\uc804-\ubb38\uc81c",children:"\ud53c\ub85c\ub3c4 \ub358\uc804 \ubb38\uc81c"})}),"\n",(0,a.jsx)(s.h2,{id:"\ubb38\uc81c-\uc124\uba85",children:"\ubb38\uc81c \uc124\uba85"}),"\n",(0,a.jsx)(s.p,{children:"\uac8c\uc784 \ub0b4 \ud53c\ub85c\ub3c4 \uc2dc\uc2a4\ud15c\uc744 \ud65c\uc6a9\ud55c \ub358\uc804 \ud0d0\ud5d8 \ubb38\uc81c\uc785\ub2c8\ub2e4. \uac01 \ub358\uc804\uc740 \ub450 \uac00\uc9c0 \ud53c\ub85c\ub3c4 \uc218\uce58\ub97c \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:'"\ucd5c\uc18c \ud544\uc694 \ud53c\ub85c\ub3c4": \ub358\uc804 \uc785\uc7a5\uc744 \uc704\ud574 \ud544\uc694\ud55c \ucd5c\uc18c\ud55c\uc758 \ud53c\ub85c\ub3c4'}),"\n",(0,a.jsx)(s.li,{children:'"\uc18c\ubaa8 \ud53c\ub85c\ub3c4": \ub358\uc804 \uc644\ub8cc \ud6c4 \uc18c\ubaa8\ub418\ub294 \ud53c\ub85c\ub3c4'}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"\uc720\uc800\uc758 \ud604\uc7ac \ud53c\ub85c\ub3c4\uac00 \uc8fc\uc5b4\uc84c\uc744 \ub54c, \ucd5c\ub300\ud55c \ub9ce\uc740 \ub358\uc804\uc744 \ud0d0\ud5d8\ud558\ub824\uba74 \uc5b4\ub5a4 \uc21c\uc11c\ub85c \ub358\uc804\uc744 \ub3cc\uc544\uc57c \ud558\ub294\uc9c0 \uad6c\ud574\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,a.jsx)(s.h3,{id:"\uc608\uc2dc",children:"\uc608\uc2dc"}),"\n",(0,a.jsx)(s.p,{children:"\ud53c\ub85c\ub3c4\uac00 80\uc77c \ub54c \uc544\ub798\uc640 \uac19\uc740 \ub358\uc804\uc774 \uc788\ub2e4\uba74:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"\ub358\uc804 1: [\ucd5c\uc18c \ud544\uc694 \ud53c\ub85c\ub3c4: 80, \uc18c\ubaa8 \ud53c\ub85c\ub3c4: 20]"}),"\n",(0,a.jsx)(s.li,{children:"\ub358\uc804 2: [\ucd5c\uc18c \ud544\uc694 \ud53c\ub85c\ub3c4: 50, \uc18c\ubaa8 \ud53c\ub85c\ub3c4: 40]"}),"\n",(0,a.jsx)(s.li,{children:"\ub358\uc804 3: [\ucd5c\uc18c \ud544\uc694 \ud53c\ub85c\ub3c4: 30, \uc18c\ubaa8 \ud53c\ub85c\ub3c4: 10]"}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"\uc81c\ud55c-\uc870\uac74",children:"\uc81c\ud55c \uc870\uac74"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"k (\ucd08\uae30 \ud53c\ub85c\ub3c4)"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"\ubc94\uc704: 1 \u2264 k \u2264 5,000"}),"\n",(0,a.jsx)(s.li,{children:"\uc790\uc5f0\uc218"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"dungeons \ubc30\uc5f4"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"\ub358\uc804 \uac1c\uc218: 1 \u2264 \ub358\uc804 \uc218 \u2264 8"}),"\n",(0,a.jsx)(s.li,{children:"\uac01 \ub358\uc804 \uc815\ubcf4: [\ucd5c\uc18c \ud544\uc694 \ud53c\ub85c\ub3c4, \uc18c\ubaa8 \ud53c\ub85c\ub3c4]"}),"\n",(0,a.jsx)(s.li,{children:"\ucd5c\uc18c \ud544\uc694 \ud53c\ub85c\ub3c4 \u2265 \uc18c\ubaa8 \ud53c\ub85c\ub3c4"}),"\n",(0,a.jsx)(s.li,{children:"1 \u2264 \ud53c\ub85c\ub3c4 \u2264 1,000"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"\ud574\uacb0-\ucf54\ub4dc",children:"\ud574\uacb0 \ucf54\ub4dc"}),"\n",(0,a.jsx)(s.pre,{className:"language-javascript",children:(0,a.jsxs)(s.code,{className:"language-javascript",children:[(0,a.jsx)(s.span,{className:"token keyword",children:"function"})," ",(0,a.jsx)(s.span,{className:"token function",children:"solution"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsxs)(s.span,{className:"token parameter",children:["k",(0,a.jsx)(s.span,{className:"token punctuation",children:","})," dungeons"]}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,a.jsx)(s.span,{className:"token keyword",children:"var"})," answer ",(0,a.jsx)(s.span,{className:"token operator",children:"="})," ",(0,a.jsx)(s.span,{className:"token operator",children:"-"}),(0,a.jsx)(s.span,{className:"token number",children:"1"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,a.jsx)(s.span,{className:"token keyword",children:"let"})," visited ",(0,a.jsx)(s.span,{className:"token operator",children:"="})," ",(0,a.jsx)(s.span,{className:"token keyword",children:"new"})," ",(0,a.jsx)(s.span,{className:"token class-name",children:"Array"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"dungeons",(0,a.jsx)(s.span,{className:"token punctuation",children:"."}),(0,a.jsx)(s.span,{className:"token property-access",children:"length"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"."}),(0,a.jsx)(s.span,{className:"token method function property-access",children:"fill"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token boolean",children:"false"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,a.jsx)(s.span,{className:"token keyword",children:"let"})," countArr ",(0,a.jsx)(s.span,{className:"token operator",children:"="})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"["}),(0,a.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n  ",(0,a.jsx)(s.span,{className:"token keyword",children:"const"})," ",(0,a.jsx)(s.span,{className:"token function-variable function",children:"dfs"})," ",(0,a.jsx)(s.span,{className:"token operator",children:"="})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsxs)(s.span,{className:"token parameter",children:["count",(0,a.jsx)(s.span,{className:"token punctuation",children:","})," tired",(0,a.jsx)(s.span,{className:"token punctuation",children:","})," visited"]}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,a.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"visited",(0,a.jsx)(s.span,{className:"token punctuation",children:"."}),(0,a.jsx)(s.span,{className:"token method function property-access",children:"indexOf"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token boolean",children:"false"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token operator",children:"=="})," ",(0,a.jsx)(s.span,{className:"token operator",children:"-"}),(0,a.jsx)(s.span,{className:"token number",children:"1"})," ",(0,a.jsx)(s.span,{className:"token operator",children:"||"})," tired ",(0,a.jsx)(s.span,{className:"token operator",children:"<="})," ",(0,a.jsx)(s.span,{className:"token number",children:"0"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n      countArr",(0,a.jsx)(s.span,{className:"token punctuation",children:"."}),(0,a.jsx)(s.span,{className:"token method function property-access",children:"push"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"count",(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n      ",(0,a.jsx)(s.span,{className:"token keyword control-flow",children:"return"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n    ",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n    ",(0,a.jsx)(s.span,{className:"token keyword",children:"let"})," over ",(0,a.jsx)(s.span,{className:"token operator",children:"="})," ",(0,a.jsx)(s.span,{className:"token boolean",children:"true"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n    ",(0,a.jsx)(s.span,{className:"token keyword control-flow",children:"for"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token keyword",children:"let"})," i ",(0,a.jsx)(s.span,{className:"token operator",children:"="})," ",(0,a.jsx)(s.span,{className:"token number",children:"0"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"})," i ",(0,a.jsx)(s.span,{className:"token operator",children:"<"})," dungeons",(0,a.jsx)(s.span,{className:"token punctuation",children:"."}),(0,a.jsx)(s.span,{className:"token property-access",children:"length"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"})," i",(0,a.jsx)(s.span,{className:"token operator",children:"++"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n      ",(0,a.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token operator",children:"!"}),"visited",(0,a.jsx)(s.span,{className:"token punctuation",children:"["}),"i",(0,a.jsx)(s.span,{className:"token punctuation",children:"]"})," ",(0,a.jsx)(s.span,{className:"token operator",children:"&&"})," tired ",(0,a.jsx)(s.span,{className:"token operator",children:">="})," dungeons",(0,a.jsx)(s.span,{className:"token punctuation",children:"["}),"i",(0,a.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"["}),(0,a.jsx)(s.span,{className:"token number",children:"0"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n        visited",(0,a.jsx)(s.span,{className:"token punctuation",children:"["}),"i",(0,a.jsx)(s.span,{className:"token punctuation",children:"]"})," ",(0,a.jsx)(s.span,{className:"token operator",children:"="})," ",(0,a.jsx)(s.span,{className:"token boolean",children:"true"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n        ",(0,a.jsx)(s.span,{className:"token function",children:"dfs"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"count ",(0,a.jsx)(s.span,{className:"token operator",children:"+"})," ",(0,a.jsx)(s.span,{className:"token number",children:"1"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","})," tired ",(0,a.jsx)(s.span,{className:"token operator",children:"-"})," dungeons",(0,a.jsx)(s.span,{className:"token punctuation",children:"["}),"i",(0,a.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"["}),(0,a.jsx)(s.span,{className:"token number",children:"1"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","})," visited",(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n        visited",(0,a.jsx)(s.span,{className:"token punctuation",children:"["}),"i",(0,a.jsx)(s.span,{className:"token punctuation",children:"]"})," ",(0,a.jsx)(s.span,{className:"token operator",children:"="})," ",(0,a.jsx)(s.span,{className:"token boolean",children:"false"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n        over ",(0,a.jsx)(s.span,{className:"token operator",children:"="})," ",(0,a.jsx)(s.span,{className:"token boolean",children:"false"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n      ",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n    ",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n    ",(0,a.jsx)(s.span,{className:"token keyword control-flow",children:"if"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"over",(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n      countArr",(0,a.jsx)(s.span,{className:"token punctuation",children:"."}),(0,a.jsx)(s.span,{className:"token method function property-access",children:"push"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"count",(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n      ",(0,a.jsx)(s.span,{className:"token keyword control-flow",children:"return"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n    ",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n  ",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,a.jsx)(s.span,{className:"token function",children:"dfs"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token number",children:"0"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","})," k",(0,a.jsx)(s.span,{className:"token punctuation",children:","})," visited",(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  answer ",(0,a.jsx)(s.span,{className:"token operator",children:"="})," ",(0,a.jsx)(s.span,{className:"token known-class-name class-name",children:"Math"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"."}),(0,a.jsx)(s.span,{className:"token method function property-access",children:"max"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token spread operator",children:"..."}),"countArr",(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,a.jsx)(s.span,{className:"token keyword control-flow",children:"return"})," answer",(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,a.jsx)(s.h2,{id:"\uc54c\uace0\ub9ac\uc998-\uc124\uba85",children:"\uc54c\uace0\ub9ac\uc998 \uc124\uba85"}),"\n",(0,a.jsx)(s.p,{children:"DFS(\uae4a\uc774 \uc6b0\uc120 \ud0d0\uc0c9)\uc640 \ubc31\ud2b8\ub798\ud0b9\uc744 \ud65c\uc6a9\ud558\uc5ec \ubaa8\ub4e0 \uac00\ub2a5\ud55c \ub358\uc804 \uc21c\uc11c\ub97c \ud0d0\uc0c9\ud569\ub2c8\ub2e4:"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"DFS \ud568\uc218 \ub9e4\uac1c\ubcc0\uc218"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"count: \ud604\uc7ac\uae4c\uc9c0 \ud0d0\ud5d8\ud55c \ub358\uc804 \uc218"}),"\n",(0,a.jsx)(s.li,{children:"tired: \ud604\uc7ac \ub0a8\uc740 \ud53c\ub85c\ub3c4"}),"\n",(0,a.jsx)(s.li,{children:"visited: \ub358\uc804 \ubc29\ubb38 \uc5ec\ubd80 \ubc30\uc5f4"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"\uc885\ub8cc \uc870\uac74"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"\ubaa8\ub4e0 \ub358\uc804\uc744 \ubc29\ubb38\ud588\uc744 \ub54c"}),"\n",(0,a.jsx)(s.li,{children:"\ud53c\ub85c\ub3c4\uac00 0 \uc774\ud558\uac00 \ub410\uc744 \ub54c"}),"\n",(0,a.jsx)(s.li,{children:"\ub354 \uc774\uc0c1 \ud0d0\ud5d8\ud560 \uc218 \uc788\ub294 \ub358\uc804\uc774 \uc5c6\uc744 \ub54c"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"\ubc31\ud2b8\ub798\ud0b9"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"\ud604\uc7ac \ud53c\ub85c\ub3c4\ub85c \ud0d0\ud5d8 \uac00\ub2a5\ud55c \ub358\uc804\uc744 \ucc3e\uc544 \ubc29\ubb38"}),"\n",(0,a.jsx)(s.li,{children:"\ubc29\ubb38 \ud6c4 \ub2e4\uc2dc \ubbf8\ubc29\ubb38 \uc0c1\ud0dc\ub85c \ubcf5\uad6c\ud558\uc5ec \ub2e4\ub978 \uacbd\ub85c \ud0d0\uc0c9"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"\ud575\uc2ec-\ubb38\ubc95-\uc694\uc18c",children:"\ud575\uc2ec \ubb38\ubc95 \uc694\uc18c"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsx)(s.li,{children:"\ubc29\ubb38 \ubc30\uc5f4 \ucd08\uae30\ud654"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{className:"language-javascript",children:(0,a.jsxs)(s.code,{className:"language-javascript",children:[(0,a.jsx)(s.span,{className:"token keyword",children:"let"})," visited ",(0,a.jsx)(s.span,{className:"token operator",children:"="})," ",(0,a.jsx)(s.span,{className:"token keyword",children:"new"})," ",(0,a.jsx)(s.span,{className:"token class-name",children:"Array"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"dungeons",(0,a.jsx)(s.span,{className:"token punctuation",children:"."}),(0,a.jsx)(s.span,{className:"token property-access",children:"length"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"."}),(0,a.jsx)(s.span,{className:"token method function property-access",children:"fill"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token boolean",children:"false"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,a.jsxs)(s.ol,{start:"2",children:["\n",(0,a.jsx)(s.li,{children:"Array.indexOf() \uc0ac\uc6a9"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{className:"language-javascript",children:(0,a.jsxs)(s.code,{className:"language-javascript",children:["visited",(0,a.jsx)(s.span,{className:"token punctuation",children:"."}),(0,a.jsx)(s.span,{className:"token method function property-access",children:"indexOf"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token boolean",children:"false"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(s.span,{className:"token operator",children:"=="})," ",(0,a.jsx)(s.span,{className:"token operator",children:"-"}),(0,a.jsx)(s.span,{className:"token number",children:"1"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,a.jsxs)(s.ol,{start:"3",children:["\n",(0,a.jsx)(s.li,{children:"\uc2a4\ud504\ub808\ub4dc \uc5f0\uc0b0\uc790\ub97c \ud65c\uc6a9\ud55c \ucd5c\ub300\uac12 \uacc4\uc0b0"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{className:"language-javascript",children:(0,a.jsxs)(s.code,{className:"language-javascript",children:[(0,a.jsx)(s.span,{className:"token known-class-name class-name",children:"Math"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"."}),(0,a.jsx)(s.span,{className:"token method function property-access",children:"max"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token spread operator",children:"..."}),"countArr",(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,a.jsxs)(s.ol,{start:"4",children:["\n",(0,a.jsx)(s.li,{children:"\ubc31\ud2b8\ub798\ud0b9\uc744 \uc704\ud55c \ubc29\ubb38 \ucc98\ub9ac/\ubcf5\uad6c"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{className:"language-javascript",children:(0,a.jsxs)(s.code,{className:"language-javascript",children:["visited",(0,a.jsx)(s.span,{className:"token punctuation",children:"["}),"i",(0,a.jsx)(s.span,{className:"token punctuation",children:"]"})," ",(0,a.jsx)(s.span,{className:"token operator",children:"="})," ",(0,a.jsx)(s.span,{className:"token boolean",children:"true"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(s.span,{className:"token function",children:"dfs"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),"count ",(0,a.jsx)(s.span,{className:"token operator",children:"+"})," ",(0,a.jsx)(s.span,{className:"token number",children:"1"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","})," tired ",(0,a.jsx)(s.span,{className:"token operator",children:"-"})," dungeons",(0,a.jsx)(s.span,{className:"token punctuation",children:"["}),"i",(0,a.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"["}),(0,a.jsx)(s.span,{className:"token number",children:"1"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","})," visited",(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\nvisited",(0,a.jsx)(s.span,{className:"token punctuation",children:"["}),"i",(0,a.jsx)(s.span,{className:"token punctuation",children:"]"})," ",(0,a.jsx)(s.span,{className:"token operator",children:"="})," ",(0,a.jsx)(s.span,{className:"token boolean",children:"false"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,a.jsx)(s.h2,{id:"\uc2dc\uac04-\ubcf5\uc7a1\ub3c4",children:"\uc2dc\uac04 \ubcf5\uc7a1\ub3c4"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"O(n!): \ub358\uc804\uc744 \ubc29\ubb38\ud558\ub294 \ubaa8\ub4e0 \uc21c\uc11c\ub97c \ud0d0\uc0c9"}),"\n",(0,a.jsx)(s.li,{children:"n\uc740 \ub358\uc804\uc758 \uac1c\uc218"}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"\uacf5\uac04-\ubcf5\uc7a1\ub3c4",children:"\uacf5\uac04 \ubcf5\uc7a1\ub3c4"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"O(n): visited \ubc30\uc5f4\uacfc \uc7ac\uadc0 \ud638\ucd9c \uc2a4\ud0dd \uc0ac\uc6a9"}),"\n",(0,a.jsx)(s.li,{children:"n\uc740 \ub358\uc804\uc758 \uac1c\uc218"}),"\n"]})]})}function d(n={}){const{wrapper:s}={...(0,c.R)(),...n.components};return s?(0,a.jsx)(s,{...n,children:(0,a.jsx)(p,{...n})}):p(n)}},28453:(n,s,e)=>{e.d(s,{R:()=>t,x:()=>o});var a=e(96540);const c={},l=a.createContext(c);function t(n){const s=a.useContext(l);return a.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function o(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:t(n.components),a.createElement(l.Provider,{value:s},n.children)}}}]);