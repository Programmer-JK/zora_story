"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[2559],{5725:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var r=s(4848),o=s(8453);const t={},l=void 0,c={id:"Network/MySQL root \ube44\ubc00\ubc88\ud638 \uc7ac\uc124\uc815",title:"MySQL root \ube44\ubc00\ubc88\ud638 \uc7ac\uc124\uc815",description:"MySQL root \uacc4\uc815 \ube44\ubc00\ubc88\ud638 \uc7ac\uc124\uc815 \ubc29\ubc95\uc744 \uc815\ub9ac\ud574\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4:",source:"@site/docs/Network/MySQL root \ube44\ubc00\ubc88\ud638 \uc7ac\uc124\uc815.md",sourceDirName:"Network",slug:"/Network/MySQL root \ube44\ubc00\ubc88\ud638 \uc7ac\uc124\uc815",permalink:"/zora_story/ko/docs/Network/MySQL root \ube44\ubc00\ubc88\ud638 \uc7ac\uc124\uc815",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"studySidebar",previous:{title:"LAMP \uc2a4\ud0dd \uc124\uce58 \ubc0f \uad6c\uc131 \uac00\uc774\ub4dc",permalink:"/zora_story/ko/docs/Network/LAMP \uc2a4\ud0dd \uc124\uce58 \ubc0f \uad6c\uc131 \uac00\uc774\ub4dc"},next:{title:"NFS(Network File System)",permalink:"/zora_story/ko/docs/Network/NFS(Network File System)"}},i={},d=[];function a(n){const e={code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"MySQL root \uacc4\uc815 \ube44\ubc00\ubc88\ud638 \uc7ac\uc124\uc815 \ubc29\ubc95\uc744 \uc815\ub9ac\ud574\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4:"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"MySQL \uc0c1\ud0dc \ud655\uc778"})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"# MySQL \uc11c\ube44\uc2a4 \uc0c1\ud0dc \ud655\uc778\nsudo service mysqld status\n\n# MySQL \ubc84\uc804 \ud655\uc778\nmysql --version\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"2",children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"\ube44\ubc00\ubc88\ud638 \uc7ac\uc124\uc815 \uacfc\uc815"})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"# 1. MySQL \uc11c\ube44\uc2a4 \uc911\uc9c0\nsudo service mysqld stop\n\n# 2. \uc548\uc804 \ubaa8\ub4dc\ub85c MySQL \uc2dc\uc791\nsudo mysqld_safe --skip-grant-tables &\n\n# 3. MySQL \uc811\uc18d (\ube44\ubc00\ubc88\ud638 \uc5c6\uc774)\nmysql -u root\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"3",children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"MySQL \uba85\ub839\uc5b4\ub85c \ube44\ubc00\ubc88\ud638 \ubcc0\uacbd"})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"-- MySQL 5.x \ubc84\uc804\uc758 \uacbd\uc6b0\nUSE mysql;\nUPDATE user SET password=PASSWORD('\uc0c8\ub85c\uc6b4\ube44\ubc00\ubc88\ud638') WHERE User='root';\nFLUSH PRIVILEGES;\nEXIT;\n\n-- MySQL 8.x \ubc84\uc804\uc758 \uacbd\uc6b0\nUSE mysql;\nALTER USER 'root'@'localhost' IDENTIFIED BY '\uc0c8\ub85c\uc6b4\ube44\ubc00\ubc88\ud638';\nFLUSH PRIVILEGES;\nEXIT;\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"4",children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"\ubcc0\uacbd \ud6c4 \uc791\uc5c5"})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"# MySQL \uc7ac\uc2dc\uc791\nsudo service mysqld restart\n\n# \uc0c8 \ube44\ubc00\ubc88\ud638\ub85c \uc811\uc18d \ud14c\uc2a4\ud2b8\nmysql -u root -p\n"})}),"\n",(0,r.jsx)(e.p,{children:"\uc8fc\uc758\uc0ac\ud56d:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\ube44\ubc00\ubc88\ud638\ub294 \ubcf5\uc7a1\ud558\uac8c \uc124\uc815\ud560 \uac83"}),"\n",(0,r.jsx)(e.li,{children:"\ubc84\uc804\uc5d0 \ub530\ub77c \ube44\ubc00\ubc88\ud638 \ubcc0\uacbd \uba85\ub839\uc5b4\uac00 \ub2e4\ub984"}),"\n",(0,r.jsx)(e.li,{children:"\uc791\uc5c5 \ud6c4 \ubc18\ub4dc\uc2dc MySQL \uc7ac\uc2dc\uc791 \ud544\uc694"}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>c});var r=s(6540);const o={},t=r.createContext(o);function l(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:l(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);