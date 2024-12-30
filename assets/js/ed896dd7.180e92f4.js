"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[6380],{2676:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=s(4848),a=s(8453);const i={},t="Prisma CRUD \uc791\uc5c5 \uac00\uc774\ub4dc",l={id:"DB/Prisma CRUD \uc791\uc5c5 \uac00\uc774\ub4dc",title:"Prisma CRUD \uc791\uc5c5 \uac00\uc774\ub4dc",description:"\uc791\uc131\uc77c : 2024.12.23",source:"@site/docs/DB/Prisma CRUD \uc791\uc5c5 \uac00\uc774\ub4dc.md",sourceDirName:"DB",slug:"/DB/Prisma CRUD \uc791\uc5c5 \uac00\uc774\ub4dc",permalink:"/zora_story/docs/DB/Prisma CRUD \uc791\uc5c5 \uac00\uc774\ub4dc",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"studySidebar",previous:{title:"JK\uc758 \uacf5\ubd80\uc77c\uc9c0",permalink:"/zora_story/docs/intro"},next:{title:"What is Prisma",permalink:"/zora_story/docs/DB/What is Prisma"}},c={},d=[{value:"1. Create (\uc0dd\uc131)",id:"1-create-\uc0dd\uc131",level:2},{value:"\ub2e8\uc77c \ub808\ucf54\ub4dc \uc0dd\uc131",id:"\ub2e8\uc77c-\ub808\ucf54\ub4dc-\uc0dd\uc131",level:3},{value:"\ub2e4\uc911 \ub808\ucf54\ub4dc \uc0dd\uc131",id:"\ub2e4\uc911-\ub808\ucf54\ub4dc-\uc0dd\uc131",level:3},{value:"2. Read (\uc870\ud68c)",id:"2-read-\uc870\ud68c",level:2},{value:"\ub2e8\uc77c \ub808\ucf54\ub4dc \uc870\ud68c",id:"\ub2e8\uc77c-\ub808\ucf54\ub4dc-\uc870\ud68c",level:3},{value:"\ub2e4\uc911 \ub808\ucf54\ub4dc \uc870\ud68c",id:"\ub2e4\uc911-\ub808\ucf54\ub4dc-\uc870\ud68c",level:3},{value:"\uc870\uac74\ubd80 \uc870\ud68c",id:"\uc870\uac74\ubd80-\uc870\ud68c",level:3},{value:"\uad00\uacc4 \ud3ec\ud568 \uc870\ud68c",id:"\uad00\uacc4-\ud3ec\ud568-\uc870\ud68c",level:3},{value:"3. Update (\uc218\uc815)",id:"3-update-\uc218\uc815",level:2},{value:"\ub2e8\uc77c \ub808\ucf54\ub4dc \uc218\uc815",id:"\ub2e8\uc77c-\ub808\ucf54\ub4dc-\uc218\uc815",level:3},{value:"\ub2e4\uc911 \ub808\ucf54\ub4dc \uc218\uc815",id:"\ub2e4\uc911-\ub808\ucf54\ub4dc-\uc218\uc815",level:3},{value:"Upsert (\uc0dd\uc131 \ub610\ub294 \uc218\uc815)",id:"upsert-\uc0dd\uc131-\ub610\ub294-\uc218\uc815",level:3},{value:"4. Delete (\uc0ad\uc81c)",id:"4-delete-\uc0ad\uc81c",level:2},{value:"\ub2e8\uc77c \ub808\ucf54\ub4dc \uc0ad\uc81c",id:"\ub2e8\uc77c-\ub808\ucf54\ub4dc-\uc0ad\uc81c",level:3},{value:"\ub2e4\uc911 \ub808\ucf54\ub4dc \uc0ad\uc81c",id:"\ub2e4\uc911-\ub808\ucf54\ub4dc-\uc0ad\uc81c",level:3},{value:"\uc5f0\uad00 \ub808\ucf54\ub4dc \uc0ad\uc81c (\ud2b8\ub79c\uc7ad\uc158)",id:"\uc5f0\uad00-\ub808\ucf54\ub4dc-\uc0ad\uc81c-\ud2b8\ub79c\uc7ad\uc158",level:3},{value:"5. \uace0\uae09 \ucffc\ub9ac \uae30\ub2a5",id:"5-\uace0\uae09-\ucffc\ub9ac-\uae30\ub2a5",level:2},{value:"\uc120\ud0dd\uc801 \ud544\ub4dc \uc870\ud68c",id:"\uc120\ud0dd\uc801-\ud544\ub4dc-\uc870\ud68c",level:3},{value:"\uc9d1\uacc4 \ud568\uc218",id:"\uc9d1\uacc4-\ud568\uc218",level:3},{value:"\uadf8\ub8f9\ud654",id:"\uadf8\ub8f9\ud654",level:3},{value:"\uc911\ucca9 \uad00\uacc4 \ucffc\ub9ac",id:"\uc911\ucca9-\uad00\uacc4-\ucffc\ub9ac",level:3}];function u(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\uc791\uc131\uc77c : 2024.12.23"}),"\n"]}),"\n",(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"prisma-crud-\uc791\uc5c5-\uac00\uc774\ub4dc",children:"Prisma CRUD \uc791\uc5c5 \uac00\uc774\ub4dc"})}),"\n",(0,r.jsx)(n.h2,{id:"1-create-\uc0dd\uc131",children:"1. Create (\uc0dd\uc131)"}),"\n",(0,r.jsx)(n.h3,{id:"\ub2e8\uc77c-\ub808\ucf54\ub4dc-\uc0dd\uc131",children:"\ub2e8\uc77c \ub808\ucf54\ub4dc \uc0dd\uc131"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const user = await prisma.user.create({\n  data: {\n    email: 'user@example.com',\n    name: '\ud64d\uae38\ub3d9',\n    posts: {\n      create: {\n        title: '\uccab \uac8c\uc2dc\uae00'\n      }\n    }\n  }\n})\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\ub2e4\uc911-\ub808\ucf54\ub4dc-\uc0dd\uc131",children:"\ub2e4\uc911 \ub808\ucf54\ub4dc \uc0dd\uc131"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const users = await prisma.user.createMany({\n  data: [\n    { email: 'user1@example.com' },\n    { email: 'user2@example.com' }\n  ],\n  skipDuplicates: true\n})\n"})}),"\n",(0,r.jsx)(n.h2,{id:"2-read-\uc870\ud68c",children:"2. Read (\uc870\ud68c)"}),"\n",(0,r.jsx)(n.h3,{id:"\ub2e8\uc77c-\ub808\ucf54\ub4dc-\uc870\ud68c",children:"\ub2e8\uc77c \ub808\ucf54\ub4dc \uc870\ud68c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const user = await prisma.user.findUnique({\n  where: { id: 1 }\n})\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\ub2e4\uc911-\ub808\ucf54\ub4dc-\uc870\ud68c",children:"\ub2e4\uc911 \ub808\ucf54\ub4dc \uc870\ud68c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const users = await prisma.user.findMany({\n  where: {\n    email: { contains: '@example.com' }\n  },\n  orderBy: { createdAt: 'desc' },\n  take: 10,\n  skip: 0\n})\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\uc870\uac74\ubd80-\uc870\ud68c",children:"\uc870\uac74\ubd80 \uc870\ud68c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const users = await prisma.user.findMany({\n  where: {\n    OR: [\n      { email: { contains: 'test' } },\n      { name: { contains: '\ud64d' } }\n    ]\n  }\n})\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\uad00\uacc4-\ud3ec\ud568-\uc870\ud68c",children:"\uad00\uacc4 \ud3ec\ud568 \uc870\ud68c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const userWithPosts = await prisma.user.findUnique({\n  where: { id: 1 },\n  include: {\n    posts: true,\n    profile: true\n  }\n})\n"})}),"\n",(0,r.jsx)(n.h2,{id:"3-update-\uc218\uc815",children:"3. Update (\uc218\uc815)"}),"\n",(0,r.jsx)(n.h3,{id:"\ub2e8\uc77c-\ub808\ucf54\ub4dc-\uc218\uc815",children:"\ub2e8\uc77c \ub808\ucf54\ub4dc \uc218\uc815"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const user = await prisma.user.update({\n  where: { id: 1 },\n  data: { name: '\uc0c8\uc774\ub984' }\n})\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\ub2e4\uc911-\ub808\ucf54\ub4dc-\uc218\uc815",children:"\ub2e4\uc911 \ub808\ucf54\ub4dc \uc218\uc815"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const users = await prisma.user.updateMany({\n  where: { role: 'USER' },\n  data: { verified: true }\n})\n"})}),"\n",(0,r.jsx)(n.h3,{id:"upsert-\uc0dd\uc131-\ub610\ub294-\uc218\uc815",children:"Upsert (\uc0dd\uc131 \ub610\ub294 \uc218\uc815)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const user = await prisma.user.upsert({\n  where: { email: 'user@example.com' },\n  create: { email: 'user@example.com', name: '\uc0c8\uc0ac\uc6a9\uc790' },\n  update: { name: '\uc5c5\ub370\uc774\ud2b8\ub41c\uc774\ub984' }\n})\n"})}),"\n",(0,r.jsx)(n.h2,{id:"4-delete-\uc0ad\uc81c",children:"4. Delete (\uc0ad\uc81c)"}),"\n",(0,r.jsx)(n.h3,{id:"\ub2e8\uc77c-\ub808\ucf54\ub4dc-\uc0ad\uc81c",children:"\ub2e8\uc77c \ub808\ucf54\ub4dc \uc0ad\uc81c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const user = await prisma.user.delete({\n  where: { id: 1 }\n})\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\ub2e4\uc911-\ub808\ucf54\ub4dc-\uc0ad\uc81c",children:"\ub2e4\uc911 \ub808\ucf54\ub4dc \uc0ad\uc81c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const users = await prisma.user.deleteMany({\n  where: {\n    email: { contains: '@test.com' }\n  }\n})\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\uc5f0\uad00-\ub808\ucf54\ub4dc-\uc0ad\uc81c-\ud2b8\ub79c\uc7ad\uc158",children:"\uc5f0\uad00 \ub808\ucf54\ub4dc \uc0ad\uc81c (\ud2b8\ub79c\uc7ad\uc158)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const [posts, user] = await prisma.$transaction([\n  prisma.post.deleteMany({ where: { authorId: 1 } }),\n  prisma.user.delete({ where: { id: 1 } })\n])\n"})}),"\n",(0,r.jsx)(n.h2,{id:"5-\uace0\uae09-\ucffc\ub9ac-\uae30\ub2a5",children:"5. \uace0\uae09 \ucffc\ub9ac \uae30\ub2a5"}),"\n",(0,r.jsx)(n.h3,{id:"\uc120\ud0dd\uc801-\ud544\ub4dc-\uc870\ud68c",children:"\uc120\ud0dd\uc801 \ud544\ub4dc \uc870\ud68c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const user = await prisma.user.findUnique({\n  where: { id: 1 },\n  select: {\n    id: true,\n    name: true,\n    posts: {\n      select: {\n        title: true\n      }\n    }\n  }\n})\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\uc9d1\uacc4-\ud568\uc218",children:"\uc9d1\uacc4 \ud568\uc218"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const stats = await prisma.user.aggregate({\n  _count: { id: true },\n  _avg: { age: true },\n  where: { role: 'USER' }\n})\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\uadf8\ub8f9\ud654",children:"\uadf8\ub8f9\ud654"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const grouped = await prisma.post.groupBy({\n  by: ['authorId'],\n  _count: { id: true },\n  having: {\n    id: { _count: { gt: 10 } }\n  }\n})\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\uc911\ucca9-\uad00\uacc4-\ucffc\ub9ac",children:"\uc911\ucca9 \uad00\uacc4 \ucffc\ub9ac"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const user = await prisma.user.findUnique({\n  where: { id: 1 },\n  include: {\n    posts: {\n      include: {\n        comments: {\n          include: {\n            author: true\n          }\n        }\n      }\n    }\n  }\n})\n"})})]})}function o(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var r=s(6540);const a={},i=r.createContext(a);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);