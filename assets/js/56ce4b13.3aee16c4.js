"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[16],{6651:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=t(4848),r=t(8453);const o={},c=void 0,l={id:"Network/CentOS Apache \uc124\uce58 \ud655\uc778",title:"CentOS Apache \uc124\uce58 \ud655\uc778",description:"\uc791\uc131\uc77c : 2024.12.05",source:"@site/docs/04. Network/049911. CentOS Apache \uc124\uce58 \ud655\uc778.md",sourceDirName:"04. Network",slug:"/Network/CentOS Apache \uc124\uce58 \ud655\uc778",permalink:"/zora_story/docs/Network/CentOS Apache \uc124\uce58 \ud655\uc778",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:49911,frontMatter:{},sidebar:"studySidebar",previous:{title:"NFS(Network File System)",permalink:"/zora_story/docs/NFS"},next:{title:"CentOS PHP \uc124\uce58 \ud655\uc778",permalink:"/zora_story/docs/Network/CentOS PHP \uc124\uce58 \ud655\uc778"}},i={},d=[];function a(e){const n={blockquote:"blockquote",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\uc791\uc131\uc77c : 2024.12.05"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"CentOS\uc5d0\uc11c \uc6f9 \uc11c\ubc84(Apache) \uc124\uc815 \uad00\ub828 \ub0b4\uc6a9\uc744 \uc815\ub9ac\ud574\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Apache \uc124\uce58 \ud655\uc778 \ubc29\ubc95"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \uc11c\ube44\uc2a4 \uc0c1\ud0dc \ud655\uc778\nsudo systemctl status httpd\n\n# \ud504\ub85c\uc138\uc2a4 \ud655\uc778\nps -ef | grep httpd\n\n# \ubc84\uc804 \ud655\uc778\nhttpd -v\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\ubc29\ud654\ubcbd \uc124\uc815"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \ubc29\ud654\ubcbd \uc0c1\ud0dc \ud655\uc778\nsudo firewall-cmd --list-all\n\n# 80\ud3ec\ud2b8 \ucd94\uac00 (\uc6f9 \uc11c\ubc84\uc6a9)\nsudo firewall-cmd --permanent --add-port=80/tcp\n\n# \ubc29\ud654\ubcbd \uc124\uc815 \ub2e4\uc2dc \ub85c\ub4dc\nsudo firewall-cmd --reload\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\uc791\ub3d9 \ud655\uc778"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\uc6f9 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \ud655\uc778: ",(0,s.jsx)(n.code,{children:"http://\uc11c\ubc84IP\uc8fc\uc18c"})]}),"\n",(0,s.jsxs)(n.li,{children:["\ud3ec\ud2b8 \ud655\uc778: ",(0,s.jsx)(n.code,{children:"sudo netstat -tulpn | grep :80"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\uc8fc\uc758\uc0ac\ud56d:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\uae30\ubcf8\uc801\uc73c\ub85c \ubc29\ud654\ubcbd\uc5d0\ub294 SSH\uc6a9 22\ubc88 \ud3ec\ud2b8\ub9cc \uc5f4\ub824\uc788\uc74c"}),"\n",(0,s.jsx)(n.li,{children:"\uc6f9 \uc11c\ubc84 \uc0ac\uc6a9\uc744 \uc704\ud574\uc11c\ub294 \ubc18\ub4dc\uc2dc 80\ud3ec\ud2b8\ub97c \uc5f4\uc5b4\uc918\uc57c \ud568"}),"\n",(0,s.jsx)(n.li,{children:"\ubc29\ud654\ubcbd \uc124\uc815 \ubcc0\uacbd \ud6c4\uc5d0\ub294 \ubc18\ub4dc\uc2dc reload \ud544\uc694"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var s=t(6540);const r={},o=s.createContext(r);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);