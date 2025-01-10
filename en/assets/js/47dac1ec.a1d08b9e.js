"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[5601],{86795:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>i});const s=JSON.parse('{"id":"Next.js/Next \ucd08\uae30 \uc138\ud305","title":"Next \ucd08\uae30 \uc138\ud305","description":"\uc791\uc131\uc77c : 2024.12.30","source":"@site/docs/09. Next.js/099901. Next \ucd08\uae30 \uc138\ud305.md","sourceDirName":"09. Next.js","slug":"/Next.js/Next \ucd08\uae30 \uc138\ud305","permalink":"/zora_story/en/docs/Next.js/Next \ucd08\uae30 \uc138\ud305","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":99901,"frontMatter":{},"sidebar":"studySidebar","previous":{"title":"Next-Auth-\ub85c\uadf8\uc778 \uad6c\ud604 (4)","permalink":"/zora_story/en/docs/next-auth-4"},"next":{"title":"Provider\uc640 SSG, SSR\uc758 \uad00\uacc4","permalink":"/zora_story/en/docs/Next.js/Provider\uc640 SSG, SSR\uc758 \uad00\uacc4"}}');var o=t(74848),a=t(28453);const l={},c=void 0,r={},i=[{value:"1. Next.js \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131",id:"1-nextjs-\ud504\ub85c\uc81d\ud2b8-\uc0dd\uc131",level:2},{value:"\uc124\uce58 \uacfc\uc815\uc5d0\uc11c \ub2e4\uc74c\uacfc \uac19\uc740 \uc635\uc158\ub4e4\uc774 \ub098\ud0c0\ub0a9\ub2c8\ub2e4:",id:"\uc124\uce58-\uacfc\uc815\uc5d0\uc11c-\ub2e4\uc74c\uacfc-\uac19\uc740-\uc635\uc158\ub4e4\uc774-\ub098\ud0c0\ub0a9\ub2c8\ub2e4",level:2},{value:"2. \ud504\ub85c\uc81d\ud2b8 \ub514\ub809\ud1a0\ub9ac\ub85c \uc774\ub3d9",id:"2-\ud504\ub85c\uc81d\ud2b8-\ub514\ub809\ud1a0\ub9ac\ub85c-\uc774\ub3d9",level:2},{value:"3. \ucd94\uac00 \ud328\ud0a4\uc9c0 \uc124\uce58 (\uc120\ud0dd\uc0ac\ud56d)",id:"3-\ucd94\uac00-\ud328\ud0a4\uc9c0-\uc124\uce58-\uc120\ud0dd\uc0ac\ud56d",level:2}];function d(e){const n={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",span:"span",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\uc791\uc131\uc77c : 2024.12.30"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"1-nextjs-\ud504\ub85c\uc81d\ud2b8-\uc0dd\uc131",children:"1. Next.js \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131"}),"\n",(0,o.jsx)(n.pre,{className:"language-bash",children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx create-next-app@latest my-nextjs-app\nnpx create-next-app@latest next-auth-login\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\uc124\uce58-\uacfc\uc815\uc5d0\uc11c-\ub2e4\uc74c\uacfc-\uac19\uc740-\uc635\uc158\ub4e4\uc774-\ub098\ud0c0\ub0a9\ub2c8\ub2e4",children:"\uc124\uce58 \uacfc\uc815\uc5d0\uc11c \ub2e4\uc74c\uacfc \uac19\uc740 \uc635\uc158\ub4e4\uc774 \ub098\ud0c0\ub0a9\ub2c8\ub2e4:"}),"\n",(0,o.jsxs)(n.p,{children:["\u2714 Would you like to use TypeScript? Yes\n\u2714 Would you like to use ESLint? Yes\n\u2714 Would you like to use Tailwind CSS? Yes\n\u2714 Would you like to use ",(0,o.jsx)(n.code,{children:"src/"})," directory? Yes\n\u2714 Would you like to use App Router? Yes\n\u2714 Would you like to customize the default import alias? Yes\n\u2714 What import alias would you like configured? @/*"]}),"\n",(0,o.jsx)(n.h2,{id:"2-\ud504\ub85c\uc81d\ud2b8-\ub514\ub809\ud1a0\ub9ac\ub85c-\uc774\ub3d9",children:"2. \ud504\ub85c\uc81d\ud2b8 \ub514\ub809\ud1a0\ub9ac\ub85c \uc774\ub3d9"}),"\n",(0,o.jsx)(n.p,{children:"cd my-nextjs-app"}),"\n",(0,o.jsx)(n.h2,{id:"3-\ucd94\uac00-\ud328\ud0a4\uc9c0-\uc124\uce58-\uc120\ud0dd\uc0ac\ud56d",children:"3. \ucd94\uac00 \ud328\ud0a4\uc9c0 \uc124\uce58 (\uc120\ud0dd\uc0ac\ud56d)"}),"\n",(0,o.jsx)(n.pre,{className:"language-bash",children:(0,o.jsxs)(n.code,{className:"language-bash",children:["// shadcn \uc124\uce58\nnpx --legacy-peer-deps shadcn@latest init\nnpx --legacy-peer-deps shadcn@latest ",(0,o.jsx)(n.span,{className:"token function",children:"add"})," button, dialog, card\n",(0,o.jsx)(n.span,{className:"token function",children:"npm"})," ",(0,o.jsx)(n.span,{className:"token function",children:"install"})," react-icons\n\n// next-auth \uc124\uce58\n",(0,o.jsx)(n.span,{className:"token function",children:"npm"})," ",(0,o.jsx)(n.span,{className:"token function",children:"install"})," next-auth\n"]})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var s=t(96540);const o={},a=s.createContext(o);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);