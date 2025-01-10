"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[3080],{47873:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>i});const a=JSON.parse('{"id":"Network/NFS(Network File System)","title":"NFS(Network File System)","description":"Ubuntu\uc640 CentOS \ud658\uacbd\uc5d0\uc11c\uc758 NFS \uc11c\ubc84 \ubc0f \ud074\ub77c\uc774\uc5b8\ud2b8 \uc124\uc815 \ubc29\ubc95","source":"@site/docs/04. Network/049910. NFS(Network File System).md","sourceDirName":"04. Network","slug":"/NFS","permalink":"/zora_story/en/docs/NFS","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"nfs","permalink":"/zora_story/en/docs/tags/nfs"},{"inline":true,"label":"network-storage","permalink":"/zora_story/en/docs/tags/network-storage"},{"inline":true,"label":"server-configuration","permalink":"/zora_story/en/docs/tags/server-configuration"},{"inline":true,"label":"file-sharing","permalink":"/zora_story/en/docs/tags/file-sharing"},{"inline":true,"label":"linux-administration","permalink":"/zora_story/en/docs/tags/linux-administration"},{"inline":true,"label":"storage-management","permalink":"/zora_story/en/docs/tags/storage-management"}],"version":"current","sidebarPosition":49910,"frontMatter":{"title":"NFS(Network File System)","description":"Ubuntu\uc640 CentOS \ud658\uacbd\uc5d0\uc11c\uc758 NFS \uc11c\ubc84 \ubc0f \ud074\ub77c\uc774\uc5b8\ud2b8 \uc124\uc815 \ubc29\ubc95","date":"2024-12-03T00:00:00.000Z","tags":["nfs","network-storage","server-configuration","file-sharing","linux-administration","storage-management"],"keywords":["NFS","Network File System","\ub124\ud2b8\uc6cc\ud06c \ud30c\uc77c \uc2dc\uc2a4\ud15c","NFS \uc124\uc815","\ud30c\uc77c \uacf5\uc720","\uc11c\ubc84 \uc124\uc815","\ud074\ub77c\uc774\uc5b8\ud2b8 \uc124\uc815","\ub9c8\uc6b4\ud2b8 \uc124\uc815"],"slug":"/NFS"},"sidebar":"studySidebar","previous":{"title":"LAMP \uc2a4\ud0dd \uc124\uce58 \ubc0f \uad6c\uc131 \uac00\uc774\ub4dc","permalink":"/zora_story/en/docs/Network/LAMP \uc2a4\ud0dd \uc124\uce58 \ubc0f \uad6c\uc131 \uac00\uc774\ub4dc"},"next":{"title":"CentOS \uc6f9 \uc11c\ubc84(Apache) \uc124\uce58 \uac00\uc774\ub4dc","permalink":"/zora_story/en/docs/Network/CentOS Apache \uc124\uce58 \uac00\uc774\ub4dc"}}');var t=s(74848),o=s(28453);const c={title:"NFS(Network File System)",description:"Ubuntu\uc640 CentOS \ud658\uacbd\uc5d0\uc11c\uc758 NFS \uc11c\ubc84 \ubc0f \ud074\ub77c\uc774\uc5b8\ud2b8 \uc124\uc815 \ubc29\ubc95",date:new Date("2024-12-03T00:00:00.000Z"),tags:["nfs","network-storage","server-configuration","file-sharing","linux-administration","storage-management"],keywords:["NFS","Network File System","\ub124\ud2b8\uc6cc\ud06c \ud30c\uc77c \uc2dc\uc2a4\ud15c","NFS \uc124\uc815","\ud30c\uc77c \uacf5\uc720","\uc11c\ubc84 \uc124\uc815","\ud074\ub77c\uc774\uc5b8\ud2b8 \uc124\uc815","\ub9c8\uc6b4\ud2b8 \uc124\uc815"],slug:"/NFS"},l=void 0,r={},i=[{value:"1. NFS(Network File System) \uc124\uc815",id:"1-nfsnetwork-file-system-\uc124\uc815",level:2},{value:"Ubuntu \uc11c\ubc84 \uc124\uc815",id:"ubuntu-\uc11c\ubc84-\uc124\uc815",level:3},{value:"CentOS \ud074\ub77c\uc774\uc5b8\ud2b8 \uc124\uc815",id:"centos-\ud074\ub77c\uc774\uc5b8\ud2b8-\uc124\uc815",level:3},{value:"Ubuntu \ud074\ub77c\uc774\uc5b8\ud2b8 \uc124\uc815",id:"ubuntu-\ud074\ub77c\uc774\uc5b8\ud2b8-\uc124\uc815",level:3}];function u(n){const e={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",span:"span",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"\uc791\uc131\uc77c : 2024.12.03"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"1-nfsnetwork-file-system-\uc124\uc815",children:"1. NFS(Network File System) \uc124\uc815"}),"\n",(0,t.jsx)(e.h3,{id:"ubuntu-\uc11c\ubc84-\uc124\uc815",children:"Ubuntu \uc11c\ubc84 \uc124\uc815"}),"\n",(0,t.jsx)(e.pre,{className:"language-bash",children:(0,t.jsxs)(e.code,{className:"language-bash",children:[(0,t.jsx)(e.span,{className:"token comment",children:"# NFS \uc11c\ubc84 \uc124\uce58 \ubc0f \uc124\uc815"}),"\n",(0,t.jsx)(e.span,{className:"token function",children:"sudo"})," ",(0,t.jsx)(e.span,{className:"token function",children:"apt"})," update\n",(0,t.jsx)(e.span,{className:"token function",children:"sudo"})," ",(0,t.jsx)(e.span,{className:"token function",children:"apt"})," ",(0,t.jsx)(e.span,{className:"token function",children:"install"})," nfs-kernel-server\n\n",(0,t.jsx)(e.span,{className:"token comment",children:"# \uacf5\uc720 \ud3f4\ub354 \uc124\uc815"}),"\n",(0,t.jsx)(e.span,{className:"token function",children:"sudo"})," ",(0,t.jsx)(e.span,{className:"token function",children:"mkdir"})," -p /var/www\n",(0,t.jsx)(e.span,{className:"token function",children:"sudo"})," ",(0,t.jsx)(e.span,{className:"token function",children:"chown"})," nobody:nogroup /var/www\n",(0,t.jsx)(e.span,{className:"token function",children:"sudo"})," ",(0,t.jsx)(e.span,{className:"token function",children:"chmod"})," ",(0,t.jsx)(e.span,{className:"token number",children:"777"})," /var/www\n\n",(0,t.jsx)(e.span,{className:"token comment",children:"# \uc124\uc815 \ud30c\uc77c \uc218\uc815"}),"\n",(0,t.jsx)(e.span,{className:"token builtin class-name",children:"echo"})," ",(0,t.jsx)(e.span,{className:"token string",children:'"/var/www    \ud074\ub77c\uc774\uc5b8\ud2b8IP(rw,sync,no_subtree_check)"'})," ",(0,t.jsx)(e.span,{className:"token operator",children:"|"})," ",(0,t.jsx)(e.span,{className:"token function",children:"sudo"})," ",(0,t.jsx)(e.span,{className:"token function",children:"tee"})," -a /etc/exports\n",(0,t.jsx)(e.span,{className:"token function",children:"sudo"})," exportfs -a\n",(0,t.jsx)(e.span,{className:"token function",children:"sudo"})," systemctl restart nfs-kernel-server\n"]})}),"\n",(0,t.jsx)(e.h3,{id:"centos-\ud074\ub77c\uc774\uc5b8\ud2b8-\uc124\uc815",children:"CentOS \ud074\ub77c\uc774\uc5b8\ud2b8 \uc124\uc815"}),"\n",(0,t.jsx)(e.pre,{className:"language-bash",children:(0,t.jsxs)(e.code,{className:"language-bash",children:[(0,t.jsx)(e.span,{className:"token comment",children:"# NFS \ud074\ub77c\uc774\uc5b8\ud2b8 \uc124\uce58"}),"\n",(0,t.jsx)(e.span,{className:"token function",children:"sudo"})," yum ",(0,t.jsx)(e.span,{className:"token function",children:"install"})," nfs-utils\n",(0,t.jsx)(e.span,{className:"token function",children:"sudo"})," systemctl start nfs\n",(0,t.jsx)(e.span,{className:"token function",children:"sudo"})," systemctl ",(0,t.jsx)(e.span,{className:"token builtin class-name",children:"enable"})," nfs\n\n",(0,t.jsx)(e.span,{className:"token comment",children:"# \ub9c8\uc6b4\ud2b8 \uc124\uc815"}),"\n",(0,t.jsx)(e.span,{className:"token function",children:"sudo"})," ",(0,t.jsx)(e.span,{className:"token function",children:"mkdir"})," -p /var/www\n",(0,t.jsx)(e.span,{className:"token function",children:"sudo"})," ",(0,t.jsx)(e.span,{className:"token function",children:"mount"})," \uc11c\ubc84IP:/var/www /var/www\n\n",(0,t.jsx)(e.span,{className:"token comment",children:"# \uc601\uad6c \ub9c8\uc6b4\ud2b8"}),"\n",(0,t.jsx)(e.span,{className:"token builtin class-name",children:"echo"})," ",(0,t.jsx)(e.span,{className:"token string",children:'"\uc11c\ubc84IP:/var/www    /var/www    nfs    defaults    0 0"'})," ",(0,t.jsx)(e.span,{className:"token operator",children:"|"})," ",(0,t.jsx)(e.span,{className:"token function",children:"sudo"})," ",(0,t.jsx)(e.span,{className:"token function",children:"tee"})," -a /etc/fstab\n"]})}),"\n",(0,t.jsx)(e.h3,{id:"ubuntu-\ud074\ub77c\uc774\uc5b8\ud2b8-\uc124\uc815",children:"Ubuntu \ud074\ub77c\uc774\uc5b8\ud2b8 \uc124\uc815"}),"\n",(0,t.jsx)(e.pre,{className:"language-bash",children:(0,t.jsxs)(e.code,{className:"language-bash",children:[(0,t.jsx)(e.span,{className:"token comment",children:"# 1. NFS \ud074\ub77c\uc774\uc5b8\ud2b8 \uc124\uce58"}),"\n",(0,t.jsx)(e.span,{className:"token function",children:"sudo"})," ",(0,t.jsx)(e.span,{className:"token function",children:"apt"})," update\n",(0,t.jsx)(e.span,{className:"token function",children:"sudo"})," ",(0,t.jsx)(e.span,{className:"token function",children:"apt"})," ",(0,t.jsx)(e.span,{className:"token function",children:"install"})," nfs-common\n\n",(0,t.jsx)(e.span,{className:"token comment",children:"# 2. \ub9c8\uc6b4\ud2b8\ud560 \ub514\ub809\ud1a0\ub9ac \uc0dd\uc131"}),"\n",(0,t.jsx)(e.span,{className:"token function",children:"sudo"})," ",(0,t.jsx)(e.span,{className:"token function",children:"mkdir"})," -p /var/www\n\n",(0,t.jsx)(e.span,{className:"token comment",children:"# 3. NFS \ub9c8\uc6b4\ud2b8"}),"\n",(0,t.jsx)(e.span,{className:"token function",children:"sudo"})," ",(0,t.jsx)(e.span,{className:"token function",children:"mount"})," \uc11c\ubc84IP:/var/www /var/www\n\n",(0,t.jsx)(e.span,{className:"token comment",children:"# 4. \uc601\uad6c \ub9c8\uc6b4\ud2b8 \uc124\uc815"}),"\n",(0,t.jsx)(e.span,{className:"token function",children:"sudo"})," ",(0,t.jsx)(e.span,{className:"token function",children:"vi"})," /etc/fstab\n",(0,t.jsx)(e.span,{className:"token comment",children:"# \uc544\ub798 \ub0b4\uc6a9 \ucd94\uac00"}),"\n\uc11c\ubc84IP:/var/www    /var/www    nfs    defaults    ",(0,t.jsx)(e.span,{className:"token number",children:"0"}),"    ",(0,t.jsx)(e.span,{className:"token number",children:"0"}),"\n\n",(0,t.jsx)(e.span,{className:"token comment",children:"# 5. \ub9c8\uc6b4\ud2b8 \ud655\uc778"}),"\n",(0,t.jsx)(e.span,{className:"token function",children:"df"})," -h\n"]})})]})}function d(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>l});var a=s(96540);const t={},o=a.createContext(t);function c(n){const e=a.useContext(o);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),a.createElement(o.Provider,{value:e},n.children)}}}]);