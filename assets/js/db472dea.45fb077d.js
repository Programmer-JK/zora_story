"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[95542],{60594:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>i});const t=JSON.parse('{"id":"Network/CentOS Apache \uc124\uce58 \uac00\uc774\ub4dc","title":"CentOS \uc6f9 \uc11c\ubc84(Apache) \uc124\uce58 \uac00\uc774\ub4dc","description":"CentOS\uc5d0\uc11c Apache \uc6f9 \uc11c\ubc84 \uc124\uce58 \ud655\uc778 \ubc0f \ubc29\ud654\ubcbd \uc124\uc815 \ubc29\ubc95","source":"@site/docs/04. Network/049911. CentOS Apache \uc124\uce58 \uac00\uc774\ub4dc.md","sourceDirName":"04. Network","slug":"/Network/CentOS Apache \uc124\uce58 \uac00\uc774\ub4dc","permalink":"/zora_story/docs/Network/CentOS Apache \uc124\uce58 \uac00\uc774\ub4dc","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"apache","permalink":"/zora_story/docs/tags/apache"},{"inline":true,"label":"centos","permalink":"/zora_story/docs/tags/centos"},{"inline":true,"label":"web-server","permalink":"/zora_story/docs/tags/web-server"},{"inline":true,"label":"firewall-configuration","permalink":"/zora_story/docs/tags/firewall-configuration"},{"inline":true,"label":"system-administration","permalink":"/zora_story/docs/tags/system-administration"},{"inline":true,"label":"server-management","permalink":"/zora_story/docs/tags/server-management"}],"version":"current","sidebarPosition":49911,"frontMatter":{"title":"CentOS \uc6f9 \uc11c\ubc84(Apache) \uc124\uce58 \uac00\uc774\ub4dc","description":"CentOS\uc5d0\uc11c Apache \uc6f9 \uc11c\ubc84 \uc124\uce58 \ud655\uc778 \ubc0f \ubc29\ud654\ubcbd \uc124\uc815 \ubc29\ubc95","tags":["apache","centos","web-server","firewall-configuration","system-administration","server-management"],"keywords":["Apache \uc124\uce58","CentOS \uc6f9\uc11c\ubc84","\ubc29\ud654\ubcbd \uc124\uc815","\ud3ec\ud2b8 \uc124\uc815","httpd","\uc11c\ubc84 \uad00\ub9ac","firewall-cmd","systemctl"]},"sidebar":"studySidebar","previous":{"title":"NFS(Network File System)","permalink":"/zora_story/docs/NFS"},"next":{"title":"CentOS PHP \uc124\uce58 \uac00\uc774\ub4dc","permalink":"/zora_story/docs/Network/CentOS PHP \uc124\uce58 \uac00\uc774\ub4dc"}}');var a=s(74848),r=s(28453);const o={title:"CentOS \uc6f9 \uc11c\ubc84(Apache) \uc124\uce58 \uac00\uc774\ub4dc",description:"CentOS\uc5d0\uc11c Apache \uc6f9 \uc11c\ubc84 \uc124\uce58 \ud655\uc778 \ubc0f \ubc29\ud654\ubcbd \uc124\uc815 \ubc29\ubc95",tags:["apache","centos","web-server","firewall-configuration","system-administration","server-management"],keywords:["Apache \uc124\uce58","CentOS \uc6f9\uc11c\ubc84","\ubc29\ud654\ubcbd \uc124\uc815","\ud3ec\ud2b8 \uc124\uc815","httpd","\uc11c\ubc84 \uad00\ub9ac","firewall-cmd","systemctl"]},c=void 0,l={},i=[];function d(e){const n={blockquote:"blockquote",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"\uc791\uc131\uc77c : 2024.12.05"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"CentOS\uc5d0\uc11c \uc6f9 \uc11c\ubc84(Apache) \uc124\uc815 \uad00\ub828 \ub0b4\uc6a9"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"Apache \uc124\uce58 \ud655\uc778 \ubc29\ubc95"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{className:"language-bash",children:(0,a.jsxs)(n.code,{className:"language-bash",children:[(0,a.jsx)(n.span,{className:"token comment",children:"# \uc11c\ube44\uc2a4 \uc0c1\ud0dc \ud655\uc778"}),"\n",(0,a.jsx)(n.span,{className:"token function",children:"sudo"})," systemctl status httpd\n\n",(0,a.jsx)(n.span,{className:"token comment",children:"# \ud504\ub85c\uc138\uc2a4 \ud655\uc778"}),"\n",(0,a.jsx)(n.span,{className:"token function",children:"ps"})," -ef ",(0,a.jsx)(n.span,{className:"token operator",children:"|"})," ",(0,a.jsx)(n.span,{className:"token function",children:"grep"})," httpd\n\n",(0,a.jsx)(n.span,{className:"token comment",children:"# \ubc84\uc804 \ud655\uc778"}),"\nhttpd -v\n"]})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"\ubc29\ud654\ubcbd \uc124\uc815"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{className:"language-bash",children:(0,a.jsxs)(n.code,{className:"language-bash",children:[(0,a.jsx)(n.span,{className:"token comment",children:"# \ubc29\ud654\ubcbd \uc0c1\ud0dc \ud655\uc778"}),"\n",(0,a.jsx)(n.span,{className:"token function",children:"sudo"})," firewall-cmd --list-all\n\n",(0,a.jsx)(n.span,{className:"token comment",children:"# 80\ud3ec\ud2b8 \ucd94\uac00 (\uc6f9 \uc11c\ubc84\uc6a9)"}),"\n",(0,a.jsx)(n.span,{className:"token function",children:"sudo"})," firewall-cmd --permanent --add-port",(0,a.jsx)(n.span,{className:"token operator",children:"="}),(0,a.jsx)(n.span,{className:"token number",children:"80"}),"/tcp\n\n",(0,a.jsx)(n.span,{className:"token comment",children:"# \ubc29\ud654\ubcbd \uc124\uc815 \ub2e4\uc2dc \ub85c\ub4dc"}),"\n",(0,a.jsx)(n.span,{className:"token function",children:"sudo"})," firewall-cmd --reload\n"]})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"\uc791\ub3d9 \ud655\uc778"})}),"\n"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\uc6f9 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \ud655\uc778: ",(0,a.jsx)(n.code,{children:"http://\uc11c\ubc84IP\uc8fc\uc18c"})]}),"\n",(0,a.jsxs)(n.li,{children:["\ud3ec\ud2b8 \ud655\uc778: ",(0,a.jsx)(n.code,{children:"sudo netstat -tulpn | grep :80"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\uc8fc\uc758\uc0ac\ud56d:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\uae30\ubcf8\uc801\uc73c\ub85c \ubc29\ud654\ubcbd\uc5d0\ub294 SSH\uc6a9 22\ubc88 \ud3ec\ud2b8\ub9cc \uc5f4\ub824\uc788\uc74c"}),"\n",(0,a.jsx)(n.li,{children:"\uc6f9 \uc11c\ubc84 \uc0ac\uc6a9\uc744 \uc704\ud574\uc11c\ub294 \ubc18\ub4dc\uc2dc 80\ud3ec\ud2b8\ub97c \uc5f4\uc5b4\uc918\uc57c \ud568"}),"\n",(0,a.jsx)(n.li,{children:"\ubc29\ud654\ubcbd \uc124\uc815 \ubcc0\uacbd \ud6c4\uc5d0\ub294 \ubc18\ub4dc\uc2dc reload \ud544\uc694"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var t=s(96540);const a={},r=t.createContext(a);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);