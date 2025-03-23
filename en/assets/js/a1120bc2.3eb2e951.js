"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[65573],{2945:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"DB/DELETE Are Difficult","title":"DELETE Are Difficult","description":"PostgreSQL\uc5d0\uc11c DELETE \uc791\uc5c5\uc758 \ub0b4\ubd80 \ud504\ub85c\uc138\uc2a4, \uc131\ub2a5 \uc601\ud5a5, \ucd5c\uc801\ud654 \uc804\ub7b5\uc5d0 \ub300\ud55c \uc2ec\uce35 \uac00\uc774\ub4dc","source":"@site/docs/05. DB/059904. DELETE Are Difficult.md","sourceDirName":"05. DB","slug":"/DB/DELETE Are Difficult","permalink":"/zora_story/en/docs/DB/DELETE Are Difficult","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"postgresql","permalink":"/zora_story/en/docs/tags/postgresql"},{"inline":true,"label":"database-operations","permalink":"/zora_story/en/docs/tags/database-operations"},{"inline":true,"label":"performance-optimization","permalink":"/zora_story/en/docs/tags/performance-optimization"},{"inline":true,"label":"sql-management","permalink":"/zora_story/en/docs/tags/sql-management"}],"version":"current","sidebarPosition":59904,"frontMatter":{"title":"DELETE Are Difficult","description":"PostgreSQL\uc5d0\uc11c DELETE \uc791\uc5c5\uc758 \ub0b4\ubd80 \ud504\ub85c\uc138\uc2a4, \uc131\ub2a5 \uc601\ud5a5, \ucd5c\uc801\ud654 \uc804\ub7b5\uc5d0 \ub300\ud55c \uc2ec\uce35 \uac00\uc774\ub4dc","tags":["postgresql","database-operations","performance-optimization","sql-management"],"keywords":["PostgreSQL DELETE","\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc131\ub2a5","DELETE \ucd5c\uc801\ud654","MVCC","\ub370\uc774\ud130 \uad00\ub9ac"]},"sidebar":"studySidebar","previous":{"title":"What is VACUUM","permalink":"/zora_story/en/docs/DB/What is VACUUM"},"next":{"title":"selectedWidget \uc811\uadfc \ubb38\uc81c","permalink":"/zora_story/en/docs/JavaScript/trouble-shooting/selectedWidget \uc811\uadfc \ubb38\uc81c"}}');var i=s(74848),r=s(28453);const c={title:"DELETE Are Difficult",description:"PostgreSQL\uc5d0\uc11c DELETE \uc791\uc5c5\uc758 \ub0b4\ubd80 \ud504\ub85c\uc138\uc2a4, \uc131\ub2a5 \uc601\ud5a5, \ucd5c\uc801\ud654 \uc804\ub7b5\uc5d0 \ub300\ud55c \uc2ec\uce35 \uac00\uc774\ub4dc",tags:["postgresql","database-operations","performance-optimization","sql-management"],keywords:["PostgreSQL DELETE","\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc131\ub2a5","DELETE \ucd5c\uc801\ud654","MVCC","\ub370\uc774\ud130 \uad00\ub9ac"]},a=void 0,t={},d=[{value:"\ub4e4\uc5b4\uac00\uba70",id:"\ub4e4\uc5b4\uac00\uba70",level:2},{value:"DELETE \uc791\uc5c5\uc758 \uc228\uaca8\uc9c4 \ubcf5\uc7a1\uc131",id:"delete-\uc791\uc5c5\uc758-\uc228\uaca8\uc9c4-\ubcf5\uc7a1\uc131",level:2},{value:"1. DELETE \uc791\uc5c5\uc758 \uc2e4\uc81c \ud504\ub85c\uc138\uc2a4",id:"1-delete-\uc791\uc5c5\uc758-\uc2e4\uc81c-\ud504\ub85c\uc138\uc2a4",level:3},{value:"2. \ubb3c\ub9ac\uc801 \uc0ad\uc81c\uc640 AUTOVACUUM",id:"2-\ubb3c\ub9ac\uc801-\uc0ad\uc81c\uc640-autovacuum",level:3},{value:"\uc131\ub2a5 \uc601\ud5a5\uacfc \ucd5c\uc801\ud654 \uc804\ub7b5",id:"\uc131\ub2a5-\uc601\ud5a5\uacfc-\ucd5c\uc801\ud654-\uc804\ub7b5",level:2},{value:"1. \ub300\uaddc\ubaa8 DELETE \uc791\uc5c5\uc758 \uc601\ud5a5",id:"1-\ub300\uaddc\ubaa8-delete-\uc791\uc5c5\uc758-\uc601\ud5a5",level:3},{value:"2. \ud6a8\uacfc\uc801\uc778 DELETE \uc804\ub7b5",id:"2-\ud6a8\uacfc\uc801\uc778-delete-\uc804\ub7b5",level:3},{value:"\ubc30\uce58 \ucc98\ub9ac \uc0ac\uc6a9",id:"\ubc30\uce58-\ucc98\ub9ac-\uc0ac\uc6a9",level:4},{value:"\ud30c\ud2f0\uc154\ub2dd \ud65c\uc6a9",id:"\ud30c\ud2f0\uc154\ub2dd-\ud65c\uc6a9",level:4},{value:"\uc2e4\uc804 \ud301\uacfc \uad8c\uc7a5\uc0ac\ud56d",id:"\uc2e4\uc804-\ud301\uacfc-\uad8c\uc7a5\uc0ac\ud56d",level:2},{value:"\ub9c8\uce58\uba70",id:"\ub9c8\uce58\uba70",level:2},{value:"\uc694\uc57d",id:"\uc694\uc57d",level:2},{value:"DELETE \uc791\uc5c5\uc758 \ud575\uc2ec \ud3ec\uc778\ud2b8",id:"delete-\uc791\uc5c5\uc758-\ud575\uc2ec-\ud3ec\uc778\ud2b8",level:3},{value:"\uccb4\ud06c\ub9ac\uc2a4\ud2b8",id:"\uccb4\ud06c\ub9ac\uc2a4\ud2b8",level:3}];function o(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\uc791\uc131\uc77c : 2025.01.05"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\uc0ac\uc774\ud2b8 \uc6d0\ubcf8) ",(0,i.jsx)(n.a,{href:"https://notso.boringsql.com/posts/deletes-are-difficult/",children:"https://notso.boringsql.com/posts/deletes-are-difficult/"})]}),"\n",(0,i.jsx)(n.h2,{id:"\ub4e4\uc5b4\uac00\uba70",children:"\ub4e4\uc5b4\uac00\uba70"}),"\n",(0,i.jsx)(n.p,{children:"SELECT\ub098 INSERT\ub9cc\ud07c\uc774\ub098 \uc911\uc694\ud55c \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc791\uc5c5\uc774\uc9c0\ub9cc, \uc885\uc885 \uac04\uacfc\ub418\ub294 DELETE \uc791\uc5c5\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \ub2e8\uc21c\ud574 \ubcf4\uc774\ub294 DELETE \uba85\ub839\uc5b4 \ud558\ub098\uac00 \ub54c\ub85c\ub294 \uc804\uccb4 \uc2dc\uc2a4\ud15c\uc744 \ub9c8\ube44\uc2dc\ud0ac \uc218 \uc788\ub2e4\ub294 \uc0ac\uc2e4, \uc54c\uace0 \uacc4\uc168\ub098\uc694?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"What is VACUUM ? :"}),"  ",(0,i.jsx)(n.a,{href:"/zora_story/en/docs/DB/What%20is%20VACUUM",children:"\uae00 \ubc14\ub85c\uac00\uae30"}),(0,i.jsx)(n.br,{}),"\n","PostgreSQL\uc5d0\uc11c VACUUM\uc740 DELETE\ub098 UPDATE\ub85c \uc778\ud574 \ubc1c\uc0dd\ud55c \uc8fd\uc740 \ub370\uc774\ud130\ub97c \uc815\ub9ac\ud558\uace0 \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud558\uac8c \ub9cc\ub4dc\ub294 \uccad\uc18c\ubd80 \uac19\uc740 \uc791\uc5c5\uc73c\ub85c, \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc758 \uc131\ub2a5\uacfc \uc548\uc815\uc131\uc744 \uc720\uc9c0\ud558\ub294 \ub370 \ud544\uc218\uc801\uc785\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"delete-\uc791\uc5c5\uc758-\uc228\uaca8\uc9c4-\ubcf5\uc7a1\uc131",children:"DELETE \uc791\uc5c5\uc758 \uc228\uaca8\uc9c4 \ubcf5\uc7a1\uc131"}),"\n",(0,i.jsx)(n.h3,{id:"1-delete-\uc791\uc5c5\uc758-\uc2e4\uc81c-\ud504\ub85c\uc138\uc2a4",children:"1. DELETE \uc791\uc5c5\uc758 \uc2e4\uc81c \ud504\ub85c\uc138\uc2a4"}),"\n",(0,i.jsx)(n.p,{children:"DELETE \uba85\ub839\uc5b4\uac00 \uc2e4\ud589\ub418\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \ubcf5\uc7a1\ud55c \ub2e8\uacc4\ub4e4\uc774 \uc21c\ucc28\uc801\uc73c\ub85c \ubc1c\uc0dd\ud569\ub2c8\ub2e4:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\ud589 \uc2dd\ubcc4 (Row Identification)"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ud604\uc7ac \ud2b8\ub79c\uc7ad\uc158\uc5d0\uc11c \ubcf4\uc774\ub294 \ud589\ub4e4\uc744 \uc2dd\ubcc4"}),"\n",(0,i.jsx)(n.li,{children:"MVCC(\ub2e4\uc911 \ubc84\uc804 \ub3d9\uc2dc\uc131 \uc81c\uc5b4) \uace0\ub824"}),"\n",(0,i.jsx)(n.li,{children:"\uc7a0\uae08 \uc0c1\ud0dc \ud655\uc778"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\uc7a0\uae08 \ucc98\ub9ac (Lock Acquisition)"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ub300\uc0c1 \ud589\uc5d0 \ub300\ud55c \ubc30\ud0c0\uc801 \uc7a0\uae08 \ud68d\ub4dd"}),"\n",(0,i.jsx)(n.li,{children:"\ub2e4\ub978 \uc791\uc5c5\uacfc\uc758 \ucda9\ub3cc \ubc29\uc9c0"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\ud2b8\ub9ac\uac70 \ubc0f \uc5f0\uc1c4 \uc791\uc5c5"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"BEFORE DELETE \ud2b8\ub9ac\uac70 \uc2e4\ud589"}),"\n",(0,i.jsx)(n.li,{children:"\uc5f0\uad00 \ud14c\uc774\ube14\uc758 CASCADE \uc791\uc5c5 \uc218\ud589"}),"\n",(0,i.jsx)(n.li,{children:"AFTER DELETE \ud2b8\ub9ac\uac70 \uc2e4\ud589"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\ub370\uc774\ud130 \ucc98\ub9ac"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ud589\uc744 \ub17c\ub9ac\uc801 \uc0ad\uc81c \uc0c1\ud0dc\ub85c \ud45c\uc2dc"}),"\n",(0,i.jsx)(n.li,{children:"\uc778\ub371\uc2a4 \ud56d\ubaa9 \uc5c5\ub370\uc774\ud2b8"}),"\n",(0,i.jsx)(n.li,{children:"WAL(Write-Ahead Log) \uae30\ub85d"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"2-\ubb3c\ub9ac\uc801-\uc0ad\uc81c\uc640-autovacuum",children:"2. \ubb3c\ub9ac\uc801 \uc0ad\uc81c\uc640 AUTOVACUUM"}),"\n",(0,i.jsx)(n.p,{children:"\ud765\ubbf8\ub85c\uc6b4 \uc810\uc740 DELETE \uba85\ub839\uc5b4\uac00 \uc2e4\ud589\ub418\uc5b4\ub3c4 \ub370\uc774\ud130\uac00 \uc989\uc2dc \ubb3c\ub9ac\uc801\uc73c\ub85c \uc81c\uac70\ub418\uc9c0 \uc54a\ub294\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4. \uc774\ub294 AUTOVACUUM \ud504\ub85c\uc138\uc2a4\uac00 \ub2f4\ub2f9\ud558\uba70, \ub2e4\uc74c\uacfc \uac19\uc740 \uc791\uc5c5\uc744 \uc218\ud589\ud569\ub2c8\ub2e4:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ub354 \uc774\uc0c1 \ud544\uc694\ud558\uc9c0 \uc54a\uc740 \ud29c\ud50c \uc81c\uac70"}),"\n",(0,i.jsx)(n.li,{children:"\ube48 \uacf5\uac04 \uc7ac\uc0ac\uc6a9 \ud45c\uc2dc"}),"\n",(0,i.jsx)(n.li,{children:"\ud14c\uc774\ube14 \ud1b5\uacc4 \uc5c5\ub370\uc774\ud2b8"}),"\n",(0,i.jsx)(n.li,{children:"\uc778\ub371\uc2a4 \uc815\ub9ac"}),"\n",(0,i.jsx)(n.li,{children:"TOAST \ud14c\uc774\ube14 \ucc98\ub9ac"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\uc131\ub2a5-\uc601\ud5a5\uacfc-\ucd5c\uc801\ud654-\uc804\ub7b5",children:"\uc131\ub2a5 \uc601\ud5a5\uacfc \ucd5c\uc801\ud654 \uc804\ub7b5"}),"\n",(0,i.jsx)(n.h3,{id:"1-\ub300\uaddc\ubaa8-delete-\uc791\uc5c5\uc758-\uc601\ud5a5",children:"1. \ub300\uaddc\ubaa8 DELETE \uc791\uc5c5\uc758 \uc601\ud5a5"}),"\n",(0,i.jsx)(n.pre,{className:"language-sql",children:(0,i.jsxs)(n.code,{className:"language-sql",children:[(0,i.jsx)(n.span,{className:"token comment",children:"-- \uc8fc\uc758: \ud504\ub85c\ub355\uc158 \ud658\uacbd\uc5d0\uc11c \uc774\ub7f0 \ubc29\uc2dd\uc740 \uc704\ud5d8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"}),"\n",(0,i.jsx)(n.span,{className:"token keyword",children:"DELETE"})," ",(0,i.jsx)(n.span,{className:"token keyword",children:"FROM"})," large_table ",(0,i.jsx)(n.span,{className:"token keyword",children:"WHERE"})," created_at ",(0,i.jsx)(n.span,{className:"token operator",children:"<"})," ",(0,i.jsx)(n.span,{className:"token string",children:"'2023-01-01'"}),(0,i.jsx)(n.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,i.jsx)(n.p,{children:"\uc774\ub7ec\ud55c \ub2e8\uc21c\ud55c \ucffc\ub9ac\ub3c4 \ub2e4\uc74c\uacfc \uac19\uc740 \ubb38\uc81c\ub97c \uc77c\uc73c\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\uacfc\ub3c4\ud55c WAL \uc0dd\uc131"}),"\n",(0,i.jsx)(n.li,{children:"\ub9ac\uc18c\uc2a4 \uacbd\ud569"}),"\n",(0,i.jsx)(n.li,{children:"\ubcf5\uc81c \uc9c0\uc5f0"}),"\n",(0,i.jsx)(n.li,{children:"\ube14\ub85c\ud2b8(bloat) \ubc1c\uc0dd"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"2-\ud6a8\uacfc\uc801\uc778-delete-\uc804\ub7b5",children:"2. \ud6a8\uacfc\uc801\uc778 DELETE \uc804\ub7b5"}),"\n",(0,i.jsx)(n.h4,{id:"\ubc30\uce58-\ucc98\ub9ac-\uc0ac\uc6a9",children:"\ubc30\uce58 \ucc98\ub9ac \uc0ac\uc6a9"}),"\n",(0,i.jsx)(n.pre,{className:"language-sql",children:(0,i.jsxs)(n.code,{className:"language-sql",children:[(0,i.jsx)(n.span,{className:"token keyword",children:"DELETE"})," ",(0,i.jsx)(n.span,{className:"token keyword",children:"FROM"})," large_table\n",(0,i.jsx)(n.span,{className:"token keyword",children:"WHERE"})," ctid ",(0,i.jsx)(n.span,{className:"token operator",children:"IN"})," ",(0,i.jsx)(n.span,{className:"token punctuation",children:"("}),"\n    ",(0,i.jsx)(n.span,{className:"token keyword",children:"SELECT"})," ctid ",(0,i.jsx)(n.span,{className:"token keyword",children:"FROM"})," large_table\n    ",(0,i.jsx)(n.span,{className:"token keyword",children:"WHERE"})," created_at ",(0,i.jsx)(n.span,{className:"token operator",children:"<"})," ",(0,i.jsx)(n.span,{className:"token string",children:"'2023-01-01'"}),"\n    ",(0,i.jsx)(n.span,{className:"token keyword",children:"LIMIT"})," ",(0,i.jsx)(n.span,{className:"token number",children:"1000"}),"\n",(0,i.jsx)(n.span,{className:"token punctuation",children:")"}),(0,i.jsx)(n.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,i.jsx)(n.h4,{id:"\ud30c\ud2f0\uc154\ub2dd-\ud65c\uc6a9",children:"\ud30c\ud2f0\uc154\ub2dd \ud65c\uc6a9"}),"\n",(0,i.jsx)(n.pre,{className:"language-sql",children:(0,i.jsxs)(n.code,{className:"language-sql",children:[(0,i.jsx)(n.span,{className:"token comment",children:"-- \ud30c\ud2f0\uc158 \ud14c\uc774\ube14 \uc0dd\uc131 \uc608\uc2dc"}),"\n",(0,i.jsx)(n.span,{className:"token keyword",children:"CREATE"})," ",(0,i.jsx)(n.span,{className:"token keyword",children:"TABLE"})," events ",(0,i.jsx)(n.span,{className:"token punctuation",children:"("}),"\n    id ",(0,i.jsx)(n.span,{className:"token keyword",children:"serial"}),(0,i.jsx)(n.span,{className:"token punctuation",children:","}),"\n    created_at ",(0,i.jsx)(n.span,{className:"token keyword",children:"timestamp"}),(0,i.jsx)(n.span,{className:"token punctuation",children:","}),"\n    ",(0,i.jsx)(n.span,{className:"token keyword",children:"data"})," jsonb\n",(0,i.jsx)(n.span,{className:"token punctuation",children:")"})," ",(0,i.jsx)(n.span,{className:"token keyword",children:"PARTITION"})," ",(0,i.jsx)(n.span,{className:"token keyword",children:"BY"})," RANGE ",(0,i.jsx)(n.span,{className:"token punctuation",children:"("}),"created_at",(0,i.jsx)(n.span,{className:"token punctuation",children:")"}),(0,i.jsx)(n.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"\uc2e4\uc804-\ud301\uacfc-\uad8c\uc7a5\uc0ac\ud56d",children:"\uc2e4\uc804 \ud301\uacfc \uad8c\uc7a5\uc0ac\ud56d"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\ubc30\uce58 \ucc98\ub9ac \ub3c4\uc785"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ub300\ub7c9 \uc0ad\uc81c \uc2dc \uc791\uc740 \ub2e8\uc704\ub85c \ubd84\ud560"}),"\n",(0,i.jsx)(n.li,{children:"\uc2dc\uc2a4\ud15c \ubd80\ud558 \ubd84\uc0b0"}),"\n",(0,i.jsx)(n.li,{children:"\ub2e4\ub978 \ud2b8\ub79c\uc7ad\uc158 \uc601\ud5a5 \ucd5c\uc18c\ud654"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"AUTOVACUUM \uad00\ub9ac"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\uc801\uc808\ud55c VACUUM \uc124\uc815 \uc720\uc9c0"}),"\n",(0,i.jsx)(n.li,{children:"\uc815\uae30\uc801\uc778 \ubaa8\ub2c8\ud130\ub9c1"}),"\n",(0,i.jsx)(n.li,{children:"\ud544\uc694\uc2dc \uc218\ub3d9 VACUUM \uc2e4\ud589"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\ud30c\ud2f0\uc154\ub2dd \uc804\ub7b5"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\uc2dc\uac04 \uae30\ubc18 \ub370\uc774\ud130\ub294 \ud30c\ud2f0\uc154\ub2dd \uace0\ub824"}),"\n",(0,i.jsx)(n.li,{children:"\ud30c\ud2f0\uc158 \ub2e8\uc704 \uc0ad\uc81c\ub85c \ud6a8\uc728\uc131 \ud655\ubcf4"}),"\n",(0,i.jsx)(n.li,{children:"\uc720\uc9c0\ubcf4\uc218 \uc6a9\uc774\uc131 \uc99d\uac00"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\ub9c8\uce58\uba70",children:"\ub9c8\uce58\uba70"}),"\n",(0,i.jsx)(n.p,{children:"DELETE \uc791\uc5c5\uc740 \ub2e8\uc21c\ud574 \ubcf4\uc774\uc9c0\ub9cc, \uc2e4\uc81c\ub85c\ub294 \ub9e4\uc6b0 \ubcf5\uc7a1\ud55c \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc791\uc5c5\uc785\ub2c8\ub2e4. \ud2b9\ud788 \ub300\uaddc\ubaa8 \ud504\ub85c\ub355\uc158 \ud658\uacbd\uc5d0\uc11c\ub294 \uc2e0\uc911\ud55c \uc811\uadfc\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \uc801\uc808\ud55c \uc804\ub7b5\uacfc \ucd5c\uc801\ud654\ub97c \ud1b5\ud574 \uc548\uc815\uc801\uc774\uace0 \ud6a8\uc728\uc801\uc778 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc6b4\uc601\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.p,{children:"\ub124, \uc694\uc57d\uc744 \ucd94\uac00\ud558\uc5ec \ub354 \uba85\ud655\ud558\uac8c \uc815\ub9ac\ud558\uaca0\uc2b5\ub2c8\ub2e4. \uae00\uc758 \ub9c8\uc9c0\ub9c9 \ubd80\ubd84\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc774 \uc694\uc57d\uc744 \ucd94\uac00\ud558\uba74 \uc88b\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4:"}),"\n",(0,i.jsx)(n.h2,{id:"\uc694\uc57d",children:"\uc694\uc57d"}),"\n",(0,i.jsx)(n.h3,{id:"delete-\uc791\uc5c5\uc758-\ud575\uc2ec-\ud3ec\uc778\ud2b8",children:"DELETE \uc791\uc5c5\uc758 \ud575\uc2ec \ud3ec\uc778\ud2b8"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\uc791\uc5c5\uc758 \ubcf5\uc7a1\uc131"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ub2e8\uc21c\ud55c \uba85\ub839\uc5b4\uc9c0\ub9cc \ubcf5\uc7a1\ud55c \ub0b4\ubd80 \ud504\ub85c\uc138\uc2a4 \uc218\ubc18"}),"\n",(0,i.jsx)(n.li,{children:"\uc989\uac01\uc801\uc778 \ubb3c\ub9ac\uc801 \uc0ad\uc81c\uac00 \uc544\ub2cc \ub17c\ub9ac\uc801 \uc0ad\uc81c \uc218\ud589"}),"\n",(0,i.jsx)(n.li,{children:"\ub2e4\uc591\ud55c \uc2dc\uc2a4\ud15c \ub9ac\uc18c\uc2a4 \uc0ac\uc6a9"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\uc131\ub2a5 \uc601\ud5a5"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ub300\uaddc\ubaa8 DELETE \uc2dc \uc2dc\uc2a4\ud15c \ubd80\ud558 \uc99d\uac00"}),"\n",(0,i.jsx)(n.li,{children:"\ube14\ub85c\ud2b8 \ud604\uc0c1\uc73c\ub85c \uc778\ud55c \uc131\ub2a5 \uc800\ud558 \uac00\ub2a5\uc131"}),"\n",(0,i.jsx)(n.li,{children:"\ubcf5\uc81c \ud658\uacbd\uc5d0\uc11c \ucd94\uac00\uc801\uc778 \uc9c0\uc5f0 \ubc1c\uc0dd"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\ucd5c\uc801\ud654 \uc804\ub7b5"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ubc30\uce58 \ucc98\ub9ac\ub97c \ud1b5\ud55c \ubd80\ud558 \ubd84\uc0b0"}),"\n",(0,i.jsx)(n.li,{children:"AUTOVACUUM \uc124\uc815 \ucd5c\uc801\ud654"}),"\n",(0,i.jsx)(n.li,{children:"\ud30c\ud2f0\uc154\ub2dd\uc744 \ud1b5\ud55c \ud6a8\uc728\uc801\uc778 \ub370\uc774\ud130 \uad00\ub9ac"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\uccb4\ud06c\ub9ac\uc2a4\ud2b8",children:"\uccb4\ud06c\ub9ac\uc2a4\ud2b8"}),"\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ","DELETE \uc791\uc5c5 \uaddc\ubaa8 \ud30c\uc545"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ","\ubc30\uce58 \ucc98\ub9ac \uc804\ub7b5 \uc218\ub9bd"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ","AUTOVACUUM \uc124\uc815 \uac80\ud1a0"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ","\ubaa8\ub2c8\ud130\ub9c1 \uacc4\ud68d \uc218\ub9bd"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ","\ubc31\uc5c5 \ubc0f \ubcf5\uad6c \uacc4\ud68d \ud655\uc778"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>a});var l=s(96540);const i={},r=l.createContext(i);function c(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);