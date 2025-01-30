"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[83283],{84299:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});const l=JSON.parse('{"id":"Network/VLAN(Virtual LAN) \uac00\uc774\ub4dc","title":"VLAN(Virtual LAN) \uac00\uc774\ub4dc","description":"VLAN\uc758 \uac1c\ub150, \uc885\ub958, \uc124\uc815 \ubc29\ubc95 \ubc0f \uc6b4\uc601\uc5d0 \ub300\ud55c \uc885\ud569\uc801\uc778 \uac00\uc774\ub4dc","source":"@site/docs/04. Network/049903. VLAN(Virtual LAN) \uac00\uc774\ub4dc.md","sourceDirName":"04. Network","slug":"/vlan-guide","permalink":"/zora_story/en/docs/vlan-guide","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"vlan","permalink":"/zora_story/en/docs/tags/vlan"},{"inline":true,"label":"networking","permalink":"/zora_story/en/docs/tags/networking"},{"inline":true,"label":"network-segmentation","permalink":"/zora_story/en/docs/tags/network-segmentation"},{"inline":true,"label":"switch-configuration","permalink":"/zora_story/en/docs/tags/switch-configuration"},{"inline":true,"label":"network-security","permalink":"/zora_story/en/docs/tags/network-security"},{"inline":true,"label":"network-management","permalink":"/zora_story/en/docs/tags/network-management"}],"version":"current","sidebarPosition":49903,"frontMatter":{"title":"VLAN(Virtual LAN) \uac00\uc774\ub4dc","description":"VLAN\uc758 \uac1c\ub150, \uc885\ub958, \uc124\uc815 \ubc29\ubc95 \ubc0f \uc6b4\uc601\uc5d0 \ub300\ud55c \uc885\ud569\uc801\uc778 \uac00\uc774\ub4dc","date":"2024-12-03T00:00:00.000Z","tags":["vlan","networking","network-segmentation","switch-configuration","network-security","network-management"],"keywords":["VLAN","Virtual LAN","\ub124\ud2b8\uc6cc\ud06c \ubd84\ud560","\uc2a4\uc704\uce58 \uc124\uc815","VLAN \uc124\uc815","\ub124\ud2b8\uc6cc\ud06c \uad00\ub9ac","\ub124\ud2b8\uc6cc\ud06c \ubcf4\uc548","\ube0c\ub85c\ub4dc\uce90\uc2a4\ud2b8 \ub3c4\uba54\uc778"],"slug":"/vlan-guide"},"sidebar":"studySidebar","previous":{"title":"\ub124\ud2b8\uc6cc\ud06c \ud328\ud0b7","permalink":"/zora_story/en/docs/Network/\ub124\ud2b8\uc6cc\ud06c \ud328\ud0b7"},"next":{"title":"\uadfc\uac70\ub9ac \ud1b5\uc2e0 \ubc29\ubc95","permalink":"/zora_story/en/docs/Network/\uadfc\uac70\ub9ac \ud1b5\uc2e0 \ubc29\ubc95"}}');var a=s(74848),i=s(28453);const r={title:"VLAN(Virtual LAN) \uac00\uc774\ub4dc",description:"VLAN\uc758 \uac1c\ub150, \uc885\ub958, \uc124\uc815 \ubc29\ubc95 \ubc0f \uc6b4\uc601\uc5d0 \ub300\ud55c \uc885\ud569\uc801\uc778 \uac00\uc774\ub4dc",date:new Date("2024-12-03T00:00:00.000Z"),tags:["vlan","networking","network-segmentation","switch-configuration","network-security","network-management"],keywords:["VLAN","Virtual LAN","\ub124\ud2b8\uc6cc\ud06c \ubd84\ud560","\uc2a4\uc704\uce58 \uc124\uc815","VLAN \uc124\uc815","\ub124\ud2b8\uc6cc\ud06c \uad00\ub9ac","\ub124\ud2b8\uc6cc\ud06c \ubcf4\uc548","\ube0c\ub85c\ub4dc\uce90\uc2a4\ud2b8 \ub3c4\uba54\uc778"],slug:"/vlan-guide"},t="VLAN(Virtual LAN) \uac00\uc774\ub4dc",c={},o=[{value:"1. VLAN \uae30\ubcf8 \uac1c\ub150",id:"1-vlan-\uae30\ubcf8-\uac1c\ub150",level:2},{value:"2. VLAN\uc758 \ud575\uc2ec \ud2b9\uc9d5",id:"2-vlan\uc758-\ud575\uc2ec-\ud2b9\uc9d5",level:2},{value:"3. VLAN \uc885\ub958\ubcc4 \ud2b9\uc9d5",id:"3-vlan-\uc885\ub958\ubcc4-\ud2b9\uc9d5",level:2},{value:"\uae30\ubcf8 VLAN (VLAN 1)",id:"\uae30\ubcf8-vlan-vlan-1",level:3},{value:"\ub370\uc774\ud130 VLAN",id:"\ub370\uc774\ud130-vlan",level:3},{value:"\uad00\ub9ac VLAN",id:"\uad00\ub9ac-vlan",level:3},{value:"\uc74c\uc131 VLAN",id:"\uc74c\uc131-vlan",level:3},{value:"4. VLAN \uae30\ubcf8 \uc124\uc815",id:"4-vlan-\uae30\ubcf8-\uc124\uc815",level:2},{value:"5. VLAN \ub3c4\uc785 \ud6a8\uacfc",id:"5-vlan-\ub3c4\uc785-\ud6a8\uacfc",level:2},{value:"6. \uc720\uc6a9\ud55c VLAN \uba85\ub839\uc5b4",id:"6-\uc720\uc6a9\ud55c-vlan-\uba85\ub839\uc5b4",level:2}];function d(n){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...(0,i.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"vlanvirtual-lan-\uac00\uc774\ub4dc",children:"VLAN(Virtual LAN) \uac00\uc774\ub4dc"})}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsx)(e.p,{children:"\uc791\uc131\uc77c : 2024.12.03"}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"1-vlan-\uae30\ubcf8-\uac1c\ub150",children:"1. VLAN \uae30\ubcf8 \uac1c\ub150"}),"\n",(0,a.jsx)(e.p,{children:"VLAN\uc740 \ud558\ub098\uc758 \ubb3c\ub9ac\uc801 \uc2a4\uc704\uce58\ub97c \uc5ec\ub7ec \uac1c\uc758 \ub17c\ub9ac\uc801 \ub124\ud2b8\uc6cc\ud06c\ub85c \ubd84\ud560\ud558\ub294 \uae30\uc220\uc785\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \uc2e4\uc81c \uc5ec\ub7ec \ub300\uc758 \uc2a4\uc704\uce58\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uacfc \uac19\uc740 \ud6a8\uacfc\ub97c \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,a.jsx)(e.h2,{id:"2-vlan\uc758-\ud575\uc2ec-\ud2b9\uc9d5",children:"2. VLAN\uc758 \ud575\uc2ec \ud2b9\uc9d5"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\uc11c\ub85c \ub2e4\ub978 VLAN \uac04 \ud1b5\uc2e0\uc740 \ub77c\uc6b0\ud130 \ud544\uc694"}),"\n",(0,a.jsx)(e.li,{children:"\ube0c\ub85c\ub4dc\uce90\uc2a4\ud2b8 \ub3c4\uba54\uc778 \ubd84\ub9ac \uac00\ub2a5"}),"\n",(0,a.jsx)(e.li,{children:"\ubb3c\ub9ac\uc801 \uc704\uce58\uc640 \ubb34\uad00\ud55c \ub17c\ub9ac\uc801 \uadf8\ub8f9\ud551"}),"\n",(0,a.jsx)(e.li,{children:"\uc911\uc559 \uc9d1\uc911\uc2dd \ub124\ud2b8\uc6cc\ud06c \uad00\ub9ac"}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"3-vlan-\uc885\ub958\ubcc4-\ud2b9\uc9d5",children:"3. VLAN \uc885\ub958\ubcc4 \ud2b9\uc9d5"}),"\n",(0,a.jsx)(e.h3,{id:"\uae30\ubcf8-vlan-vlan-1",children:"\uae30\ubcf8 VLAN (VLAN 1)"}),"\n",(0,a.jsx)(e.pre,{className:"language-bash",children:(0,a.jsxs)(e.code,{className:"language-bash",children:[(0,a.jsx)(e.span,{className:"token comment",children:"# VLAN 1 \uad00\ub9ac IP \uc124\uc815"}),"\nconfigure terminal\ninterface vlan ",(0,a.jsx)(e.span,{className:"token number",children:"1"}),"\n",(0,a.jsx)(e.span,{className:"token function",children:"ip"})," address ",(0,a.jsx)(e.span,{className:"token number",children:"114.108"}),".165.80 ",(0,a.jsx)(e.span,{className:"token number",children:"255.255"}),".255.128\nno ",(0,a.jsx)(e.span,{className:"token function",children:"shutdown"}),"\n\n",(0,a.jsx)(e.span,{className:"token comment",children:"# \uac8c\uc774\ud2b8\uc6e8\uc774 \uc124\uc815"}),"\n",(0,a.jsx)(e.span,{className:"token function",children:"ip"})," default-gateway ",(0,a.jsx)(e.span,{className:"token number",children:"114.108"}),".165.1\n"]})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\ubaa8\ub4e0 \ud3ec\ud2b8\uc758 \uae30\ubcf8 \uc18c\uc18d VLAN"}),"\n",(0,a.jsx)(e.li,{children:"\uc2a4\uc704\uce58 \uad00\ub9ac\uc6a9\uc73c\ub85c \uc0ac\uc6a9"}),"\n",(0,a.jsx)(e.li,{children:"\uc0ad\uc81c \ubd88\uac00\ub2a5"}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"\ub370\uc774\ud130-vlan",children:"\ub370\uc774\ud130 VLAN"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\uc77c\ubc18 \uc0ac\uc6a9\uc790 \ud2b8\ub798\ud53d \uc804\uc6a9"}),"\n",(0,a.jsx)(e.li,{children:"VLAN ID: 2-1001 \uc0ac\uc6a9"}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"\uad00\ub9ac-vlan",children:"\uad00\ub9ac VLAN"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\uc2a4\uc704\uce58 \uad00\ub9ac \ud2b8\ub798\ud53d \uc804\uc6a9 (SSH/\ud154\ub137)"}),"\n",(0,a.jsx)(e.li,{children:"\uc8fc\ub85c VLAN 1 \uc0ac\uc6a9"}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"\uc74c\uc131-vlan",children:"\uc74c\uc131 VLAN"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"VoIP \uc7a5\ube44 \uc804\uc6a9"}),"\n",(0,a.jsx)(e.li,{children:"QoS \ubcf4\uc7a5 \ud544\uc694"}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"4-vlan-\uae30\ubcf8-\uc124\uc815",children:"4. VLAN \uae30\ubcf8 \uc124\uc815"}),"\n",(0,a.jsx)(e.pre,{className:"language-bash",children:(0,a.jsxs)(e.code,{className:"language-bash",children:[(0,a.jsx)(e.span,{className:"token comment",children:"# VLAN \uc0dd\uc131"}),"\nvlan ",(0,a.jsx)(e.span,{className:"token number",children:"10"}),"\nname SALES\n\n",(0,a.jsx)(e.span,{className:"token comment",children:"# \ud3ec\ud2b8\uc5d0 VLAN \ud560\ub2f9"}),"\ninterface fastEthernet ",(0,a.jsx)(e.span,{className:"token number",children:"0"}),"/1\nswitchport mode access\nswitchport access vlan ",(0,a.jsx)(e.span,{className:"token number",children:"10"}),"\n\n",(0,a.jsx)(e.span,{className:"token comment",children:"# VLAN \uc0c1\ud0dc \ud655\uc778"}),"\nshow vlan brief\nshow vlan\n"]})}),"\n",(0,a.jsx)(e.h2,{id:"5-vlan-\ub3c4\uc785-\ud6a8\uacfc",children:"5. VLAN \ub3c4\uc785 \ud6a8\uacfc"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\ubcf4\uc548 \uac15\ud654"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"VLAN \uac04 \ub17c\ub9ac\uc801 \ubd84\ub9ac"}),"\n",(0,a.jsx)(e.li,{children:"\ubd88\ud544\uc694\ud55c \ud2b8\ub798\ud53d \ucc28\ub2e8"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\ub124\ud2b8\uc6cc\ud06c \uc131\ub2a5 \ud5a5\uc0c1"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\ube0c\ub85c\ub4dc\uce90\uc2a4\ud2b8 \ub3c4\uba54\uc778 \ubd84\ub9ac"}),"\n",(0,a.jsx)(e.li,{children:"\ud2b8\ub798\ud53d \ucd5c\uc801\ud654"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\uad00\ub9ac \ud6a8\uc728\uc131"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\uc911\uc559 \uc9d1\uc911\uc2dd \uad00\ub9ac"}),"\n",(0,a.jsx)(e.li,{children:"\uc720\uc5f0\ud55c \ub124\ud2b8\uc6cc\ud06c \uad6c\uc131"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\ube44\uc6a9 \uc808\uac10"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\ubb3c\ub9ac\uc801 \uc7a5\ube44 \uad6c\ub9e4 \uac10\uc18c"}),"\n",(0,a.jsx)(e.li,{children:"\ucf00\uc774\ube14\ub9c1 \ube44\uc6a9 \uc808\uac10"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"6-\uc720\uc6a9\ud55c-vlan-\uba85\ub839\uc5b4",children:"6. \uc720\uc6a9\ud55c VLAN \uba85\ub839\uc5b4"}),"\n",(0,a.jsx)(e.pre,{className:"language-bash",children:(0,a.jsxs)(e.code,{className:"language-bash",children:[(0,a.jsx)(e.span,{className:"token comment",children:"# VLAN \uc0c1\ud0dc \ud655\uc778"}),"\nshow ",(0,a.jsx)(e.span,{className:"token function",children:"ip"})," interface brief\nshow interface vlan ",(0,a.jsx)(e.span,{className:"token number",children:"1"}),"\nshow vlan brief ",(0,a.jsx)(e.span,{className:"token operator",children:"|"})," include ",(0,a.jsx)(e.span,{className:"token number",children:"1"}),"\n\n",(0,a.jsx)(e.span,{className:"token comment",children:"# VLAN \uc0ad\uc81c"}),"\nno vlan ",(0,a.jsx)(e.span,{className:"token punctuation",children:"["}),"\ubc88\ud638",(0,a.jsx)(e.span,{className:"token punctuation",children:"]"}),"\n\n",(0,a.jsx)(e.span,{className:"token comment",children:"# VLAN \ub370\uc774\ud130\ubca0\uc774\uc2a4 \ubaa8\ub4dc"}),"\nvlan database\nno vlan ",(0,a.jsx)(e.span,{className:"token number",children:"2"}),"\n",(0,a.jsx)(e.span,{className:"token builtin class-name",children:"exit"}),"\n"]})})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>t});var l=s(96540);const a={},i=l.createContext(a);function r(n){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),l.createElement(i.Provider,{value:e},n.children)}}}]);