"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[1615],{6914:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>S,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var i=t(4848),r=t(8453);const a={},o=void 0,d={id:"Next.js/Provider\uc640 SSG, SSR\uc758 \uad00\uacc4",title:"Provider\uc640 SSG, SSR\uc758 \uad00\uacc4",description:"\uc791\uc131\uc77c : 2024.12.30",source:"@site/docs/Next.js/Provider\uc640 SSG, SSR\uc758 \uad00\uacc4.md",sourceDirName:"Next.js",slug:"/Next.js/Provider\uc640 SSG, SSR\uc758 \uad00\uacc4",permalink:"/zora_story/docs/Next.js/Provider\uc640 SSG, SSR\uc758 \uad00\uacc4",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"studySidebar",previous:{title:"Next-Auth-\ub85c\uadf8\uc778 \uad6c\ud604 (4)",permalink:"/zora_story/docs/next-auth-4"},next:{title:"Vercel \ubc30\ud3ec",permalink:"/zora_story/docs/Next.js/Vercel \ubc30\ud3ec"}},l={},s=[{value:"\ubc30\uacbd",id:"\ubc30\uacbd",level:2},{value:"Hydration\uc774\ub780?",id:"hydration\uc774\ub780",level:2},{value:"Provider\uc640 \ub80c\ub354\ub9c1 \ubc29\uc2dd\uc758 \uad00\uacc4",id:"provider\uc640-\ub80c\ub354\ub9c1-\ubc29\uc2dd\uc758-\uad00\uacc4",level:2},{value:"Provider\uc758 \uc5ed\ud560",id:"provider\uc758-\uc5ed\ud560",level:3},{value:"SSG/SSR \uacb0\uc815 \uc694\uc778",id:"ssgssr-\uacb0\uc815-\uc694\uc778",level:3},{value:"Hydration\uacfc initialState",id:"hydration\uacfc-initialstate",level:2},{value:"Hydration \ud504\ub85c\uc138\uc2a4",id:"hydration-\ud504\ub85c\uc138\uc2a4",level:3},{value:"initialState\uc640 SSG",id:"initialstate\uc640-ssg",level:3},{value:"\uc8fc\uc758\uc0ac\ud56d",id:"\uc8fc\uc758\uc0ac\ud56d",level:2},{value:"Hydration \ubd88\uc77c\uce58 \ubc29\uc9c0",id:"hydration-\ubd88\uc77c\uce58-\ubc29\uc9c0",level:3},{value:"\uc131\ub2a5 \ucd5c\uc801\ud654",id:"\uc131\ub2a5-\ucd5c\uc801\ud654",level:3},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}];function c(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\uc791\uc131\uc77c : 2024.12.30"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\ubc30\uacbd",children:"\ubc30\uacbd"}),"\n",(0,i.jsx)(n.p,{children:"\ucd5c\uadfc Next.js \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c Jotai Provider\ub97c root layout\uc5d0 \uc801\uc6a9\ud558\uba74\uc11c SSG/SSR\uc5d0 \ub300\ud55c \uc758\ubb38\uc774 \uc0dd\uacbc\uc2b5\ub2c8\ub2e4. Provider\ub97c \uc0ac\uc6a9\ud558\uba74 \ubaa8\ub4e0 \ud398\uc774\uc9c0\uac00 SSR\ub85c \uac15\uc81c\ub418\ub294 \uac83\uc774 \uc544\ub2cc\uac00 \ud558\ub294 \uac71\uc815\uc774 \uc788\uc5c8\ub294\ub370, \uc774\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uc558\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h2,{id:"hydration\uc774\ub780",children:"Hydration\uc774\ub780?"}),"\n",(0,i.jsx)(n.p,{children:"Hydration\uc740 \uc815\uc801 HTML\uc5d0 JavaScript \uae30\ub2a5\uc744 \uc8fc\uc785\ud558\uc5ec \ub3d9\uc801\uc778 \uc6f9 \uc571\uc73c\ub85c \ub9cc\ub4dc\ub294 \uacfc\uc815\uc785\ub2c8\ub2e4. \uc11c\ubc84\uc5d0\uc11c \uc0dd\uc131\ub41c \uc815\uc801 HTML\uc740 JavaScript\uac00 \ub85c\ub4dc\ub418\uae30 \uc804\uae4c\uc9c0\ub294 \ub2e8\uc21c\ud55c \ub9c8\ud06c\uc5c5 \uc0c1\ud0dc\uc785\ub2c8\ub2e4. JavaScript\uac00 \ub85c\ub4dc\ub418\uace0 Hydration\uc774 \uc9c4\ud589\ub418\uba74, \uc774 \uc815\uc801\uc778 HTML\uc774 \uc0ac\uc6a9\uc790\uc640 \uc0c1\ud638\uc791\uc6a9\uc774 \uac00\ub2a5\ud55c \ub3d9\uc801\uc778 \uc6f9 \uc571\uc73c\ub85c \ubcc0\ud658\ub429\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"// \uc815\uc801 HTML \uc0c1\ud0dc (JavaScript \ub85c\ub4dc \uc804)\n<button>\ud074\ub9ad</button>\n\n// Hydration \ud6c4\n// - \ubc84\ud2bc\uc5d0 \uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108\uac00 \ucd94\uac00\ub428\n// - \uc0c1\ud0dc \uad00\ub9ac \uc2dc\uc2a4\ud15c \ud65c\uc131\ud654\n// - \uc0ac\uc6a9\uc790 \uc0c1\ud638\uc791\uc6a9 \uac00\ub2a5\n<button onClick={handleClick}>\ud074\ub9ad</button>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"provider\uc640-\ub80c\ub354\ub9c1-\ubc29\uc2dd\uc758-\uad00\uacc4",children:"Provider\uc640 \ub80c\ub354\ub9c1 \ubc29\uc2dd\uc758 \uad00\uacc4"}),"\n",(0,i.jsx)(n.h3,{id:"provider\uc758-\uc5ed\ud560",children:"Provider\uc758 \uc5ed\ud560"}),"\n",(0,i.jsx)(n.p,{children:"Jotai\ub098 React Query\uc640 \uac19\uc740 Provider\ub4e4\uc740 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc0c1\ud0dc \uad00\ub9ac\ub97c \uc704\ud55c context\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. root layout\uc5d0 Provider\ub97c \ubc30\uce58\ud558\ub294 \uac83\uc740 \uc804\uc5ed \uc0c1\ud0dc \uad00\ub9ac\ub97c \uc704\ud55c \ud544\uc218\uc801\uc778 \uc124\uc815\uc785\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// app/layout.tsx\nexport default function RootLayout({\n  children,\n  modal,\n}: Readonly<{\n  children: React.ReactNode;\n  modal: React.ReactNode;\n}>) {\n  const initialState = {\n    isLogin: false,\n  };\n\n  return (\n    <html>\n      <body>\n        <JotaiProvider initialState={initialState}>\n          <ReactQueryProvider>\n            {children}\n            {modal}\n          </ReactQueryProvider>\n        </JotaiProvider>\n      </body>\n    </html>\n  );\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"ssgssr-\uacb0\uc815-\uc694\uc778",children:"SSG/SSR \uacb0\uc815 \uc694\uc778"}),"\n",(0,i.jsx)(n.p,{children:"\ud398\uc774\uc9c0\uc758 \ub80c\ub354\ub9c1 \ubc29\uc2dd(SSG/SSR)\uc740 Provider\uc758 \uc0ac\uc6a9 \uc5ec\ubd80\uac00 \uc544\ub2cc, \uac01 \ud398\uc774\uc9c0\uc758 \uad6c\ud604 \ubc29\uc2dd\uc5d0 \ub530\ub77c \uacb0\uc815\ub429\ub2c8\ub2e4:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'// SSG\ub85c \ub3d9\uc791\ud558\ub294 \ud398\uc774\uc9c0\nexport function generateStaticParams() {\n  return {\n    props: {\n      data: "\uc815\uc801 \ub370\uc774\ud130",\n    },\n  };\n}\n\n// SSR\ub85c \ub3d9\uc791\ud558\ub294 \ud398\uc774\uc9c0\nexport async function generateMetadata() {\n  const data = await fetchData();\n  return {\n    props: { data },\n  };\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"hydration\uacfc-initialstate",children:"Hydration\uacfc initialState"}),"\n",(0,i.jsx)(n.h3,{id:"hydration-\ud504\ub85c\uc138\uc2a4",children:"Hydration \ud504\ub85c\uc138\uc2a4"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"SSG\ub85c \ube4c\ub4dc\ub41c \uc815\uc801 HTML\uc774 \ud074\ub77c\uc774\uc5b8\ud2b8\ub85c \uc804\uc1a1\ub428"}),"\n",(0,i.jsx)(n.li,{children:"\ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c JavaScript\uac00 \ub85c\ub4dc\ub428"}),"\n",(0,i.jsx)(n.li,{children:"Hydration \uacfc\uc815\uc5d0\uc11c Provider\uc758 initialState\uac00 \uc8fc\uc785\ub428"}),"\n",(0,i.jsx)(n.li,{children:"\uc804\uc5ed \uc0c1\ud0dc \uad00\ub9ac \uc2dc\uc2a4\ud15c \ud65c\uc131\ud654"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"initialstate\uc640-ssg",children:"initialState\uc640 SSG"}),"\n",(0,i.jsx)(n.p,{children:"Provider\uc5d0 \uc124\uc815\ub41c initialState\ub294 hydration \uacfc\uc815\uc5d0\uc11c \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0 \uc8fc\uc785\ub418\uc5b4 SSG\ub85c \ub3d9\uc791\ud569\ub2c8\ub2e4. \uc774\ub294 \ube60\ub978 \ucd08\uae30 \ub85c\ub529\uacfc \uc804\uc5ed \uc0c1\ud0dc \uad00\ub9ac\ub77c\ub294 \ub450 \uac00\uc9c0 \uc774\uc810\uc744 \ubaa8\ub450 \uc5bb\uc744 \uc218 \uc788\uac8c \ud574\uc90d\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h2,{id:"\uc8fc\uc758\uc0ac\ud56d",children:"\uc8fc\uc758\uc0ac\ud56d"}),"\n",(0,i.jsx)(n.h3,{id:"hydration-\ubd88\uc77c\uce58-\ubc29\uc9c0",children:"Hydration \ubd88\uc77c\uce58 \ubc29\uc9c0"}),"\n",(0,i.jsx)(n.p,{children:"\uc11c\ubc84\uc640 \ud074\ub77c\uc774\uc5b8\ud2b8\uc758 initialState\ub294 \ub3d9\uc77c\ud574\uc57c hydration \ubd88\uc77c\uce58\ub97c \ud53c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubd88\uc77c\uce58\uac00 \ubc1c\uc0dd\ud558\uba74 React\uc5d0\uc11c \uacbd\uace0\ub97c \ud45c\uc2dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h3,{id:"\uc131\ub2a5-\ucd5c\uc801\ud654",children:"\uc131\ub2a5 \ucd5c\uc801\ud654"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"SSG\uc758 \uc7a5\uc810: \ube60\ub978 \ucd08\uae30 \ub85c\ub529, CDN \uce90\uc2f1 \uac00\ub2a5"}),"\n",(0,i.jsx)(n.li,{children:"Provider\uc758 \uc7a5\uc810: \uc804\uc5ed \uc0c1\ud0dc \uad00\ub9ac, \uc11c\ubc84 \uc0c1\ud0dc \uad00\ub9ac"}),"\n",(0,i.jsx)(n.li,{children:"\ub450 \uae30\ub2a5\uc740 \uc11c\ub85c \ub3c5\ub9bd\uc801\uc73c\ub85c \uc791\ub3d9\ud558\uba70, \ud568\uaed8 \uc0ac\uc6a9\ud588\uc744 \ub54c \uc2dc\ub108\uc9c0\ub97c \ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\uacb0\ub860",children:"\uacb0\ub860"}),"\n",(0,i.jsx)(n.p,{children:"Jotai\ub97c \uc804\uc5ed\uc801\uc73c\ub85c \uc0ac\uc6a9\ud558\ub824\uba74 Provider\ub97c root layout\uc5d0 \ucd94\uac00\ud574\uc57c \ud569\ub2c8\ub2e4. SSG/SSR \ubc29\uc2dd\uc758 \ucc28\uc774\ub294 \ud574\ub2f9 \ud398\uc774\uc9c0\uc758 \uad6c\ud604 \ubc29\uc2dd\uc5d0 \ub530\ub77c \uacb0\uc815\ub418\uba70, Provider\uc758 \uc0ac\uc6a9\uc774 SSR\uc744 \uac15\uc81c\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. Provider\uc5d0 \uc124\uc815\ub41c initialState\ub294 hydration \uacfc\uc815\uc5d0\uc11c \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0 \uc8fc\uc785\ub418\uc5b4 SSG\ub85c \ub3d9\uc791\ud558\uac8c \ub429\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.p,{children:"\uc774\ub7ec\ud55c \uc774\ud574\ub97c \ubc14\ud0d5\uc73c\ub85c Next.js \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c Provider\uc640 SSG/SSR\uc744 \ud6a8\uacfc\uc801\uc73c\ub85c \ud65c\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})}function S(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var i=t(6540);const r={},a=i.createContext(r);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);