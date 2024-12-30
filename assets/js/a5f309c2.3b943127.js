"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[5582],{3e3:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=t(4848),r=t(8453);const o={},c=void 0,l={id:"Network/CentOS Apache \uc124\uce58 \ud655\uc778",title:"CentOS Apache \uc124\uce58 \ud655\uc778",description:"\uc791\uc131\uc77c : 2024.12.05",source:"@site/docs/Network/CentOS Apache \uc124\uce58 \ud655\uc778.md",sourceDirName:"Network",slug:"/Network/CentOS Apache \uc124\uce58 \ud655\uc778",permalink:"/zora_story/docs/Network/CentOS Apache \uc124\uce58 \ud655\uc778",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"studySidebar",previous:{title:"\ud568\uc218\uc640 \uc77c\uae09\uac1d\uccb4",permalink:"/zora_story/docs/JavaScript/\ud568\uc218\uc640 \uc77c\uae09\uac1d\uccb4"},next:{title:"CentOS PHP \uc124\uce58 \ud655\uc778",permalink:"/zora_story/docs/Network/CentOS PHP \uc124\uce58 \ud655\uc778"}},i={},d=[];function a(n){const e={blockquote:"blockquote",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\uc791\uc131\uc77c : 2024.12.05"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"CentOS\uc5d0\uc11c \uc6f9 \uc11c\ubc84(Apache) \uc124\uc815 \uad00\ub828 \ub0b4\uc6a9\uc744 \uc815\ub9ac\ud574\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4:"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.strong,{children:"Apache \uc124\uce58 \ud655\uc778 \ubc29\ubc95"})}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# \uc11c\ube44\uc2a4 \uc0c1\ud0dc \ud655\uc778\nsudo systemctl status httpd\n\n# \ud504\ub85c\uc138\uc2a4 \ud655\uc778\nps -ef | grep httpd\n\n# \ubc84\uc804 \ud655\uc778\nhttpd -v\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"2",children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.strong,{children:"\ubc29\ud654\ubcbd \uc124\uc815"})}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# \ubc29\ud654\ubcbd \uc0c1\ud0dc \ud655\uc778\nsudo firewall-cmd --list-all\n\n# 80\ud3ec\ud2b8 \ucd94\uac00 (\uc6f9 \uc11c\ubc84\uc6a9)\nsudo firewall-cmd --permanent --add-port=80/tcp\n\n# \ubc29\ud654\ubcbd \uc124\uc815 \ub2e4\uc2dc \ub85c\ub4dc\nsudo firewall-cmd --reload\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"3",children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.strong,{children:"\uc791\ub3d9 \ud655\uc778"})}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\uc6f9 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \ud655\uc778: ",(0,s.jsx)(e.code,{children:"http://\uc11c\ubc84IP\uc8fc\uc18c"})]}),"\n",(0,s.jsxs)(e.li,{children:["\ud3ec\ud2b8 \ud655\uc778: ",(0,s.jsx)(e.code,{children:"sudo netstat -tulpn | grep :80"})]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\uc8fc\uc758\uc0ac\ud56d:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\uae30\ubcf8\uc801\uc73c\ub85c \ubc29\ud654\ubcbd\uc5d0\ub294 SSH\uc6a9 22\ubc88 \ud3ec\ud2b8\ub9cc \uc5f4\ub824\uc788\uc74c"}),"\n",(0,s.jsx)(e.li,{children:"\uc6f9 \uc11c\ubc84 \uc0ac\uc6a9\uc744 \uc704\ud574\uc11c\ub294 \ubc18\ub4dc\uc2dc 80\ud3ec\ud2b8\ub97c \uc5f4\uc5b4\uc918\uc57c \ud568"}),"\n",(0,s.jsx)(e.li,{children:"\ubc29\ud654\ubcbd \uc124\uc815 \ubcc0\uacbd \ud6c4\uc5d0\ub294 \ubc18\ub4dc\uc2dc reload \ud544\uc694"}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>l});var s=t(6540);const r={},o=s.createContext(r);function c(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);