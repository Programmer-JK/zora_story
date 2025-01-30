"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[33754],{15104:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>x,frontMatter:()=>d,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"Next.js/SSG, CSR, SSG","title":"SSG, CSR, SSG","description":"\uc791\uc131\uc77c : 2025.01.18","source":"@site/docs/09. Next.js/099911. SSG, CSR, SSG.md","sourceDirName":"09. Next.js","slug":"/Next.js/SSG, CSR, SSG","permalink":"/zora_story/docs/Next.js/SSG, CSR, SSG","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":99911,"frontMatter":{},"sidebar":"studySidebar","previous":{"title":"Next-Auth\uc640 Prisma","permalink":"/zora_story/docs/Next.js/Next-Auth\uc640 Prisma"},"next":{"title":"Next.js\uc758 \ub77c\uc6b0\ud305 \uc2dc\uc2a4\ud15c","permalink":"/zora_story/docs/Next.js/Next.js\uc758 \ub77c\uc6b0\ud305 \uc2dc\uc2a4\ud15c"}}');var l=i(74848),r=i(28453);const d={},t=void 0,c={},h=[{value:"SSR(Server-Side Rendering)",id:"ssrserver-side-rendering",level:2},{value:"SSR\uc758 \uc7a5\uc810",id:"ssr\uc758-\uc7a5\uc810",level:3},{value:"SSR\uc758 \ub2e8\uc810",id:"ssr\uc758-\ub2e8\uc810",level:3},{value:"CSR(Client-Side Rendering)",id:"csrclient-side-rendering",level:2},{value:"CSR\uc758 \uc7a5\uc810",id:"csr\uc758-\uc7a5\uc810",level:3},{value:"CSR\uc758 \ub2e8\uc810",id:"csr\uc758-\ub2e8\uc810",level:3},{value:"SSG(Static Site Generation)",id:"ssgstatic-site-generation",level:2},{value:"SSG\uc758 \uc7a5\uc810",id:"ssg\uc758-\uc7a5\uc810",level:3},{value:"SSG\uc758 \ub2e8\uc810",id:"ssg\uc758-\ub2e8\uc810",level:3},{value:"\uc2e4\uc81c \uc801\uc6a9 \uc0ac\ub840",id:"\uc2e4\uc81c-\uc801\uc6a9-\uc0ac\ub840",level:2},{value:"SSR \uc801\uc6a9 \ucf00\uc774\uc2a4",id:"ssr-\uc801\uc6a9-\ucf00\uc774\uc2a4",level:3},{value:"CSR \uc801\uc6a9 \ucf00\uc774\uc2a4",id:"csr-\uc801\uc6a9-\ucf00\uc774\uc2a4",level:3},{value:"SSG \uc801\uc6a9 \ucf00\uc774\uc2a4",id:"ssg-\uc801\uc6a9-\ucf00\uc774\uc2a4",level:3},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}];function S(e){const n={blockquote:"blockquote",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\uc791\uc131\uc77c : 2025.01.18"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Next.js\ub294 React \uae30\ubc18\uc758 \ud504\ub808\uc784\uc6cc\ud06c\ub85c, \ub2e4\uc591\ud55c \ub80c\ub354\ub9c1 \ubc29\uc2dd\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uac01\uac01\uc758 \ub80c\ub354\ub9c1 \ubc29\uc2dd\uc740 \uace0\uc720\ud55c \ud2b9\uc9d5\uacfc \uc7a5\ub2e8\uc810\uc744 \uac00\uc9c0\uace0 \uc788\uc5b4, \uc0c1\ud669\uc5d0 \ub530\ub77c \uc801\uc808\ud55c \ubc29\uc2dd\uc744 \uc120\ud0dd\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.h2,{id:"ssrserver-side-rendering",children:"SSR(Server-Side Rendering)"}),"\n",(0,l.jsx)(n.p,{children:"\uc11c\ubc84 \uc0ac\uc774\ub4dc \ub80c\ub354\ub9c1\uc740 \uc11c\ubc84\uc5d0\uc11c \ud398\uc774\uc9c0\ub97c \uc644\uc804\ud788 \ub80c\ub354\ub9c1\ud55c \ud6c4, \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uac8c \uc804\ub2ec\ud558\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\uac00 \ud398\uc774\uc9c0\ub97c \uc694\uccad\ud558\uba74 \uc11c\ubc84\ub294 React \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc2e4\ud589\ud558\uc5ec HTML\uc744 \uc0dd\uc131\ud558\uace0, \uc774\ub97c \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0 \uc804\uc1a1\ud569\ub2c8\ub2e4. \ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \ubc1b\uc740 HTML\uc5d0 JavaScript\ub97c \uc5f0\uacb0\ud558\ub294 hydration \uacfc\uc815\uc744 \uac70\uccd0 \uc644\uc804\ud55c \uc778\ud130\ub799\ud2f0\ube0c \ud398\uc774\uc9c0\ub85c \ub9cc\ub4ed\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.h3,{id:"ssr\uc758-\uc7a5\uc810",children:"SSR\uc758 \uc7a5\uc810"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\uac80\uc0c9\uc5d4\uc9c4 \ucd5c\uc801\ud654(SEO)\uac00 \uc911\uc694\ud55c \ud398\uc774\uc9c0\uc5d0 \uc801\ud569"}),"\n",(0,l.jsx)(n.li,{children:"\ucd08\uae30 \ud398\uc774\uc9c0 \ub85c\ub529\uc774 \ube60\ub984"}),"\n",(0,l.jsx)(n.li,{children:"\uc18c\uc15c \ubbf8\ub514\uc5b4 \uacf5\uc720 \uc2dc \ubbf8\ub9ac\ubcf4\uae30 \uc81c\uacf5\uc774 \uc6a9\uc774"}),"\n",(0,l.jsx)(n.li,{children:"Time to First Contentful Paint(FCP)\uac00 \ube60\ub984"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"ssr\uc758-\ub2e8\uc810",children:"SSR\uc758 \ub2e8\uc810"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\uc11c\ubc84 \uc790\uc6d0\uc744 \ub9ce\uc774 \uc0ac\uc6a9"}),"\n",(0,l.jsx)(n.li,{children:"\ud398\uc774\uc9c0 \uc804\ud658 \uc2dc \uc804\uccb4 \ud398\uc774\uc9c0\ub97c \ub2e4\uc2dc \ub85c\ub4dc\ud574\uc57c \ud568"}),"\n",(0,l.jsx)(n.li,{children:"Time to Interactive(TTI)\uac00 CSR\uc5d0 \ube44\ud574 \ub2a6\uc744 \uc218 \uc788\uc74c"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"csrclient-side-rendering",children:"CSR(Client-Side Rendering)"}),"\n",(0,l.jsx)(n.p,{children:"\ud074\ub77c\uc774\uc5b8\ud2b8 \uc0ac\uc774\ub4dc \ub80c\ub354\ub9c1\uc740 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c JavaScript\ub97c \ud1b5\ud574 \ud398\uc774\uc9c0\ub97c \ub80c\ub354\ub9c1\ud558\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4. \uc11c\ubc84\ub294 \ucd5c\uc18c\ud55c\uc758 HTML\uacfc JavaScript \ud30c\uc77c\ub9cc \uc804\uc1a1\ud558\uace0, \uc2e4\uc81c \ud398\uc774\uc9c0 \ub80c\ub354\ub9c1\uc740 \ud074\ub77c\uc774\uc5b8\ud2b8\uc758 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.h3,{id:"csr\uc758-\uc7a5\uc810",children:"CSR\uc758 \uc7a5\uc810"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\uc11c\ubc84 \ubd80\ud558\uac00 \uc801\uc74c"}),"\n",(0,l.jsx)(n.li,{children:"\ube60\ub978 \ud398\uc774\uc9c0 \uc804\ud658"}),"\n",(0,l.jsx)(n.li,{children:"\ud48d\ubd80\ud55c \uc0ac\uc6a9\uc790 \uc778\ud130\ub799\uc158 \uad6c\ud604\uc774 \uc6a9\uc774"}),"\n",(0,l.jsx)(n.li,{children:"SPA(Single Page Application) \uad6c\ud604\uc5d0 \uc801\ud569"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"csr\uc758-\ub2e8\uc810",children:"CSR\uc758 \ub2e8\uc810"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\ucd08\uae30 \ub85c\ub529 \uc2dc\uac04\uc774 \uae38 \uc218 \uc788\uc74c"}),"\n",(0,l.jsx)(n.li,{children:"SEO\uac00 \uc5b4\ub824\uc6c0"}),"\n",(0,l.jsx)(n.li,{children:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uac00 \ube44\ud65c\uc131\ud654\ub41c \ud658\uacbd\uc5d0\uc11c \uc791\ub3d9\ud558\uc9c0 \uc54a\uc74c"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"ssgstatic-site-generation",children:"SSG(Static Site Generation)"}),"\n",(0,l.jsx)(n.p,{children:"\uc815\uc801 \uc0ac\uc774\ud2b8 \uc0dd\uc131\uc740 \ube4c\ub4dc \uc2dc\uc810\uc5d0 \ud398\uc774\uc9c0\ub97c \ubbf8\ub9ac \uc0dd\uc131\ud558\uc5ec \uc815\uc801 \ud30c\uc77c\ub85c \uc81c\uacf5\ud558\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4. \ubaa8\ub4e0 \uc0ac\uc6a9\uc790\uac00 \ub3d9\uc77c\ud55c \ub0b4\uc6a9\uc744 \ubcf4\uac8c \ub418\uba70, \ub9e4\uc6b0 \ube60\ub978 \ub85c\ub529 \uc18d\ub3c4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.h3,{id:"ssg\uc758-\uc7a5\uc810",children:"SSG\uc758 \uc7a5\uc810"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\ub9e4\uc6b0 \ube60\ub978 \ud398\uc774\uc9c0 \ub85c\ub529"}),"\n",(0,l.jsx)(n.li,{children:"\uc11c\ubc84 \ubd80\ud558\uac00 \uac70\uc758 \uc5c6\uc74c"}),"\n",(0,l.jsx)(n.li,{children:"CDN \ud65c\uc6a9\uc774 \uc6a9\uc774"}),"\n",(0,l.jsx)(n.li,{children:"\ub192\uc740 \ubcf4\uc548\uc131"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"ssg\uc758-\ub2e8\uc810",children:"SSG\uc758 \ub2e8\uc810"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\ub3d9\uc801 \ucf58\ud150\uce20 \ucc98\ub9ac\uac00 \uc5b4\ub824\uc6c0"}),"\n",(0,l.jsx)(n.li,{children:"\ube4c\ub4dc \uc2dc\uac04\uc774 \uae38\uc5b4\uc9c8 \uc218 \uc788\uc74c"}),"\n",(0,l.jsx)(n.li,{children:"\uc2e4\uc2dc\uac04 \ub370\uc774\ud130 \ubc18\uc601\uc774 \uc5b4\ub824\uc6c0"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\uc2e4\uc81c-\uc801\uc6a9-\uc0ac\ub840",children:"\uc2e4\uc81c \uc801\uc6a9 \uc0ac\ub840"}),"\n",(0,l.jsx)(n.p,{children:"\uac01 \ub80c\ub354\ub9c1 \ubc29\uc2dd\uc740 \ud398\uc774\uc9c0\uc758 \ud2b9\uc131\uacfc \uc694\uad6c\uc0ac\ud56d\uc5d0 \ub530\ub77c \uc801\uc808\ud788 \uc120\ud0dd\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4. \ub2e4\uc74c\uc740 \uc77c\ubc18\uc801\uc778 \uc801\uc6a9 \uc0ac\ub840\uc785\ub2c8\ub2e4:"}),"\n",(0,l.jsx)(n.h3,{id:"ssr-\uc801\uc6a9-\ucf00\uc774\uc2a4",children:"SSR \uc801\uc6a9 \ucf00\uc774\uc2a4"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\uc804\uc790\uc0c1\uac70\ub798 \uc0c1\ud488 \uc0c1\uc138 \ud398\uc774\uc9c0"}),"\n",(0,l.jsx)(n.li,{children:"\uc2e4\uc2dc\uac04 \ub370\uc774\ud130\ub97c \ubcf4\uc5ec\uc8fc\ub294 \ub274\uc2a4 \uc0ac\uc774\ud2b8"}),"\n",(0,l.jsx)(n.li,{children:"\uc18c\uc15c \ubbf8\ub514\uc5b4 \ud53c\ub4dc"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"csr-\uc801\uc6a9-\ucf00\uc774\uc2a4",children:"CSR \uc801\uc6a9 \ucf00\uc774\uc2a4"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\uad00\ub9ac\uc790 \ub300\uc2dc\ubcf4\ub4dc"}),"\n",(0,l.jsx)(n.li,{children:"\uc2e4\uc2dc\uac04 \ucc44\ud305 \uc560\ud50c\ub9ac\ucf00\uc774\uc158"}),"\n",(0,l.jsx)(n.li,{children:"\uc0ac\uc6a9\uc790 \uc124\uc815 \ud398\uc774\uc9c0"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"ssg-\uc801\uc6a9-\ucf00\uc774\uc2a4",children:"SSG \uc801\uc6a9 \ucf00\uc774\uc2a4"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\ud68c\uc0ac \uc18c\uac1c \ud398\uc774\uc9c0"}),"\n",(0,l.jsx)(n.li,{children:"\uae30\uc220 \ubb38\uc11c"}),"\n",(0,l.jsx)(n.li,{children:"\ube14\ub85c\uadf8 \ud3ec\uc2a4\ud2b8"}),"\n",(0,l.jsx)(n.li,{children:"\ub9c8\ucf00\ud305 \ub79c\ub529 \ud398\uc774\uc9c0"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\uacb0\ub860",children:"\uacb0\ub860"}),"\n",(0,l.jsx)(n.p,{children:"Next.js\uc758 \ub2e4\uc591\ud55c \ub80c\ub354\ub9c1 \ubc29\uc2dd\uc740 \uac01\uac01\uc758 \uc7a5\ub2e8\uc810\uc774 \uc788\uc73c\uba70, \ud558\ub098\uc758 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub0b4\uc5d0\uc11c\ub3c4 \ud398\uc774\uc9c0\ubcc4\ub85c \ub2e4\ub978 \ub80c\ub354\ub9c1 \ubc29\uc2dd\uc744 \uc801\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud504\ub85c\uc81d\ud2b8\uc758 \uc694\uad6c\uc0ac\ud56d\uacfc \uac01 \ud398\uc774\uc9c0\uc758 \ud2b9\uc131\uc744 \uace0\ub824\ud558\uc5ec \uc801\uc808\ud55c \ub80c\ub354\ub9c1 \ubc29\uc2dd\uc744 \uc120\ud0dd\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4. Next.js\ub294 \uc774\ub7ec\ud55c \uc720\uc5f0\uc131\uc744 \uc81c\uacf5\ud568\uc73c\ub85c\uc368 \ucd5c\uc801\ud654\ub41c \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uad6c\ucd95\ud560 \uc218 \uc788\uac8c \ud574\uc90d\ub2c8\ub2e4."})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(S,{...e})}):S(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>t});var s=i(96540);const l={},r=s.createContext(l);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);