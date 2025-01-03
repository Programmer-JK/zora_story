"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[9574],{8330:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var t=s(4848),i=s(8453);const c={},r=void 0,l={id:"Fronted \uc9c0\uc2dd/credentials \uc635\uc158",title:"credentials \uc635\uc158",description:"\uc791\uc131\uc77c : 2024.12.23",source:"@site/docs/01. Fronted \uc9c0\uc2dd/019915. credentials \uc635\uc158.md",sourceDirName:"01. Fronted \uc9c0\uc2dd",slug:"/Fronted \uc9c0\uc2dd/credentials \uc635\uc158",permalink:"/zora_story/docs/Fronted \uc9c0\uc2dd/credentials \uc635\uc158",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:19915,frontMatter:{},sidebar:"studySidebar",previous:{title:"\ubcc0\uc218 \ud45c\uae30\ubc95",permalink:"/zora_story/docs/Fronted \uc9c0\uc2dd/\ubcc0\uc218 \ud45c\uae30\ubc95"},next:{title:"\ub809\uc2dc\uceec \uc2a4\ucf54\ud504",permalink:"/zora_story/docs/Fronted \uc9c0\uc2dd/\ub809\uc2dc\uceec \uc2a4\ucf54\ud504"}},d={},o=[{value:"1. <code>credentials: &#39;omit&#39;</code>",id:"1-credentials-omit",level:2},{value:"2. <code>credentials: &#39;same-origin&#39;</code>",id:"2-credentials-same-origin",level:2},{value:"3. <code>credentials: &#39;include&#39;</code>",id:"3-credentials-include",level:2}];function a(e){const n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\uc791\uc131\uc77c : 2024.12.23"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"credentials"})," \uc635\uc158\uc740 fetch \uc694\uccad \uc2dc \ucfe0\ud0a4, HTTP \uc778\uc99d, \ud074\ub77c\uc774\uc5b8\ud2b8 SSL \uc778\uc99d\uc11c\uc640 \uac19\uc740 \uc790\uaca9 \uc99d\uba85\uc744 \uc5b4\ub5bb\uac8c \ucc98\ub9ac\ud560\uc9c0 \uacb0\uc815\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.p,{children:"\uac01 \uc635\uc158\uc758 \uc0c1\uc138 \uc124\uba85:"}),"\n",(0,t.jsxs)(n.h2,{id:"1-credentials-omit",children:["1. ",(0,t.jsx)(n.code,{children:"credentials: 'omit'"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\ucfe0\ud0a4\ub97c \uc808\ub300 \ubcf4\ub0b4\uac70\ub098 \ubc1b\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4"}),"\n",(0,t.jsx)(n.li,{children:"\uac00\uc7a5 \uc81c\ud55c\uc801\uc778 \uc635\uc158\uc785\ub2c8\ub2e4"}),"\n",(0,t.jsx)(n.li,{children:"\uc608: \uc644\uc804\ud788 \uacf5\uac1c\ub41c API\ub97c \ud638\ucd9c\ud560 \ub54c \uc0ac\uc6a9"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'fetch("https://api.example.com/data", {\n  credentials: "omit", // \ucfe0\ud0a4 \uc5c6\uc774 \uc694\uccad\n});\n'})}),"\n",(0,t.jsxs)(n.h2,{id:"2-credentials-same-origin",children:["2. ",(0,t.jsx)(n.code,{children:"credentials: 'same-origin'"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\uac19\uc740 \ucd9c\ucc98(\ub3c4\uba54\uc778)\ub85c \uc694\uccad\ud560 \ub54c\ub9cc \ucfe0\ud0a4\ub97c \ubcf4\ub0c5\ub2c8\ub2e4"}),"\n",(0,t.jsx)(n.li,{children:"\uae30\ubcf8\uac12\uc785\ub2c8\ub2e4"}),"\n",(0,t.jsx)(n.li,{children:"\uc608: \ud604\uc7ac \uc6f9\uc0ac\uc774\ud2b8\uc758 API\ub97c \ud638\ucd9c\ud560 \ub54c \uc0ac\uc6a9"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'fetch("/api/user", {\n  credentials: "same-origin", // \uac19\uc740 \ub3c4\uba54\uc778 \uc694\uccad\uc5d0\ub9cc \ucfe0\ud0a4 \ud3ec\ud568\n});\n'})}),"\n",(0,t.jsxs)(n.h2,{id:"3-credentials-include",children:["3. ",(0,t.jsx)(n.code,{children:"credentials: 'include'"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\ubaa8\ub4e0 \uc694\uccad\uc5d0 \ucfe0\ud0a4\ub97c \ud3ec\ud568\ud569\ub2c8\ub2e4"}),"\n",(0,t.jsx)(n.li,{children:"\ud06c\ub85c\uc2a4 \uc624\ub9ac\uc9c4(\ub2e4\ub978 \ub3c4\uba54\uc778) \uc694\uccad\uc5d0\ub3c4 \ucfe0\ud0a4\ub97c \ubcf4\ub0c5\ub2c8\ub2e4"}),"\n",(0,t.jsxs)(n.li,{children:["CORS\uac00 \ud544\uc694\ud558\uba70, \uc11c\ubc84\uc5d0\uc11c ",(0,t.jsx)(n.code,{children:"Access-Control-Allow-Credentials: true"})," \ud5e4\ub354\ub97c \ubcf4\ub0b4\uc57c \ud569\ub2c8\ub2e4"]}),"\n",(0,t.jsx)(n.li,{children:"\uc608: \ub2e4\ub978 \ub3c4\uba54\uc778\uc758 \uc778\uc99d\uc774 \ud544\uc694\ud55c API\ub97c \ud638\ucd9c\ud560 \ub54c \uc0ac\uc6a9"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'fetch("https://api.another-site.com/user", {\n  credentials: "include", // \ub2e4\ub978 \ub3c4\uba54\uc778 \uc694\uccad\uc5d0\ub3c4 \ucfe0\ud0a4 \ud3ec\ud568\n});\n'})}),"\n",(0,t.jsx)(n.p,{children:"\uc2e4\uc81c \uc0ac\uc6a9 \uc608\uc2dc:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'// \ub85c\uadf8\uc778 API \ud638\ucd9c (\uac19\uc740 \ub3c4\uba54\uc778)\nconst login = async (email: string, password: string) => {\n  const response = await fetch("/api/login", {\n    method: "POST",\n    credentials: "same-origin", // \uac19\uc740 \ub3c4\uba54\uc778\uc774\ubbc0\ub85c same-origin \uc0ac\uc6a9\n    headers: {\n      "Content-Type": "application/json",\n    },\n    body: JSON.stringify({ email, password }),\n  });\n};\n\n// \uc678\ubd80 API \ud638\ucd9c (\ub2e4\ub978 \ub3c4\uba54\uc778)\nconst fetchExternalData = async () => {\n  const response = await fetch("https://external-api.com/data", {\n    credentials: "include", // \uc678\ubd80 API\ub77c\uc11c include \uc0ac\uc6a9\n    headers: {\n      "Content-Type": "application/json",\n    },\n  });\n};\n\n// \uacf5\uac1c API \ud638\ucd9c (\uc778\uc99d \ubd88\ud544\uc694)\nconst fetchPublicData = async () => {\n  const response = await fetch("https://public-api.com/data", {\n    credentials: "omit", // \uc778\uc99d\uc774 \ud544\uc694\uc5c6\uc73c\ubbc0\ub85c omit \uc0ac\uc6a9\n  });\n};\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var t=s(6540);const i={},c=t.createContext(i);function r(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);