"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[8303],{8777:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var t=s(4848),r=s(8453);const c={slug:"/next-auth-2"},i=void 0,o={id:"Next.js/Next-auth/Next-Auth-\ub85c\uadf8\uc778 \uad6c\ud604 (2)",title:"Next-Auth-\ub85c\uadf8\uc778 \uad6c\ud604 (2)",description:"\uc791\uc131\uc77c : 2024.12.25",source:"@site/docs/Next.js/Next-auth/Next-Auth-\ub85c\uadf8\uc778 \uad6c\ud604 (2).md",sourceDirName:"Next.js/Next-auth",slug:"/next-auth-2",permalink:"/zora_story/docs/next-auth-2",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/next-auth-2"},sidebar:"studySidebar",previous:{title:"Next-Auth-\ub85c\uadf8\uc778 \uad6c\ud604 (1)",permalink:"/zora_story/docs/next-auth-1"},next:{title:"Next-Auth-\ub85c\uadf8\uc778 \uad6c\ud604 (3)",permalink:"/zora_story/docs/next-auth-3"}},d={},a=[{value:"\uc720\ud6a8\uc131 \uac80\uc0ac With JWT Token",id:"\uc720\ud6a8\uc131-\uac80\uc0ac-with-jwt-token",level:2},{value:"Token \uc744 \uc0ac\uc6a9\ud574 Session \ubcf4\ud638",id:"token-\uc744-\uc0ac\uc6a9\ud574-session-\ubcf4\ud638",level:2},{value:"JWT \ud328\ud0a4\uc9c0 \uc124\uce58 \ubc0f \ud1a0\ud070 \uc0dd\uc131\ud83e\uddd1\ud83c\udffb\u200d\u2695\ufe0f",id:"jwt-\ud328\ud0a4\uc9c0-\uc124\uce58-\ubc0f-\ud1a0\ud070-\uc0dd\uc131\ufe0f",level:3},{value:"\ub85c\uadf8\uc778 \uc2dc accessToken \uc804\ub2ec",id:"\ub85c\uadf8\uc778-\uc2dc-accesstoken-\uc804\ub2ec",level:3},{value:"Session.user\uc758 type \ucee4\ud130\ub9c8\uc774\uc9d5 \ud558\uae30",id:"sessionuser\uc758-type-\ucee4\ud130\ub9c8\uc774\uc9d5-\ud558\uae30",level:3},{value:"API \ud638\ucd9c \uc2dc accessToken \uc720\ud6a8\uc131 \uac80\uc0ac",id:"api-\ud638\ucd9c-\uc2dc-accesstoken-\uc720\ud6a8\uc131-\uac80\uc0ac",level:3},{value:"Middleware\ub97c \uc774\uc6a9\ud55c \uc720\ud6a8\uc131 \uac80\uc0ac",id:"middleware\ub97c-\uc774\uc6a9\ud55c-\uc720\ud6a8\uc131-\uac80\uc0ac",level:3}];function l(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\uc791\uc131\uc77c : 2024.12.25"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\uc720\ud6a8\uc131-\uac80\uc0ac-with-jwt-token",children:"\uc720\ud6a8\uc131 \uac80\uc0ac With JWT Token"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"/app/api/user/[id]"}),"\xa0\uacbd\ub85c\uc5d0\xa0",(0,t.jsx)(n.code,{children:"route.ts"}),"\xa0\ud30c\uc77c\uc744 \ub9cc\ub4e4\uc5b4 \uc900\ub2e4.\nAPI \uc5d0\uc11c\ub3c4 \ud398\uc774\uc9c0\uc640 \uac19\uc774\xa0",(0,t.jsx)(n.code,{children:"Dynamic Route"}),"\xa0\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.\n\uc5ec\uae30\uc11c\ub294\xa0",(0,t.jsx)(n.code,{children:"[id]"}),"\xa0\uac12\uc744 slug\ub85c \uc0ac\uc6a9\ud55c\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'//app/api/user/[id]/route.ts\n\nimport prisma from "@/lib/prisma";\n\nexport async function GET(\n  request: Request,\n  { params }: { params: { id: string } }\n) {\n  const id = Number(params.id);\n  const userPosts = await prisma.post.findMany({\n    where: {\n      authorId: id,\n    },\n    include: {\n      author: {\n        select: {\n          email: true,\n          name: true,\n        },\n      },\n    },\n  });\n  return new Response(JSON.stringify(userPosts));\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(8752).A+"",width:"1073",height:"236"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"slug = \ub3d9\uc801 \ub77c\uc6b0\ud305(Dynamic Routing)\uc744 \uc704\ud574 \uc0ac\uc6a9\ub418\ub294 URL\uc758 \ubcc0\uc218 \ubd80\ubd84"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(6395).A+"",width:"848",height:"443"})}),"\n",(0,t.jsx)(n.h2,{id:"token-\uc744-\uc0ac\uc6a9\ud574-session-\ubcf4\ud638",children:"Token \uc744 \uc0ac\uc6a9\ud574 Session \ubcf4\ud638"}),"\n",(0,t.jsxs)(n.p,{children:["\ud604\uc7ac\ub294 Request url \ub9cc \uc54c\uace0 \uc788\uc73c\uba74 \ub85c\uadf8\uc778\uc744 \ud558\uc9c0 \uc54a\uc544\ub3c4 \ud574\ub2f9 \ub370\uc774\ud130\ub97c \uc870\ud68c\ud574 \ubcfc \uc218 \uc788\ub2e4.\nNext-Auth\uc5d0\uc11c\ub294 \uc778\uac00\ub418\uc9c0 \uc54a\uc740 \uc0ac\uc6a9\uc790\uc758 \uc811\uadfc\uc744 \ub9c9\uae30 \uc704\ud574\xa0",(0,t.jsx)(n.code,{children:"JWT Token"}),"\xa0\uc744 \ub2e4\ub8e8\ub294 \uae30\ub2a5\ub4e4\uc744 \uc81c\uacf5\ud55c\ub2e4.\n\u261d\ud83c\udffb \uba3c\uc800, \ub85c\uadf8\uc778 \uc2dc \ub9ac\ud134\ub418\ub294\xa0",(0,t.jsx)(n.code,{children:"User"}),"\xa0\uac1d\uccb4\uc5d0\xa0",(0,t.jsx)(n.code,{children:"JWT Token"}),"\xa0\uc744 \ucd94\uac00\ud560 \uac83\uc774\uace0\n\u270c\ud83c\udffb \uc774 \ud1a0\ud070\uc744 NextAuth\uc758 Session\uc5d0 \uc800\uc7a5\ud574 \ub85c\uadf8\uc778 \ub41c \uc0c1\ud0dc\uc5d0\uc11c \uc0ac\uc6a9 \uac00\ub2a5\ud558\ub3c4\ub85d \ud560 \uac83\uc774\ub2e4.\n\ud83d\udca1 \ud1a0\ud070\uc744 \uc138\uc158\uc5d0 \uc800\uc7a5\ud558\uba74 \uc678\ubd80\uc5d0 \ub178\ucd9c\ud558\uc9c0 \uc54a\uace0 \uc548\uc804\ud558\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.\n\ud83e\udd1f\ud83c\udffb \ub9c8\uc9c0\ub9c9\uc73c\ub85c \uac8c\uc2dc\ubb3c \uc870\ud68c API\uc5d0\uc11c\ub3c4 \uc774\xa0",(0,t.jsx)(n.code,{children:"accessToken"}),"\xa0\uc774 \uc788\uc5b4\uc57c \ud638\ucd9c\ub420 \uc218 \uc788\ub3c4\ub85d \ubcc0\uacbd\ud560 \uac83\uc774\ub2e4."]}),"\n",(0,t.jsx)(n.h3,{id:"jwt-\ud328\ud0a4\uc9c0-\uc124\uce58-\ubc0f-\ud1a0\ud070-\uc0dd\uc131\ufe0f",children:"JWT \ud328\ud0a4\uc9c0 \uc124\uce58 \ubc0f \ud1a0\ud070 \uc0dd\uc131\ud83e\uddd1\ud83c\udffb\u200d\u2695\ufe0f"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"$ npm install jsonwebtoken\n\n// type\ub3c4 \uc124\uce58\ud574\uc900\ub2e4.\n$ npm install -D @types/jsonwebtoken\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\uc124\uce58\uac00 \uc644\ub8cc\ub418\uc5c8\uc73c\uba74\xa0",(0,t.jsx)(n.code,{children:".env"}),"\xa0\ud30c\uc77c\uc5d0\xa0",(0,t.jsx)(n.code,{children:"SECRET_KEY"}),"\xa0\ud658\uacbd\ubcc0\uc218\ub97c \ub9cc\ub4e4\uc5b4 \uc900\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'NEXTAUTH_URL=http://localhost:3000\nNEXTAUTH_SECRET=topsecret\nSECRET_KEY=nextauthsecretkey // << \ucd94\uac00\n\nDATABASE_URL="file:./dev.db"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\uadf8 \ub2e4\uc74c\xa0",(0,t.jsx)(n.code,{children:"app/lib"}),"\xa0\uacbd\ub85c\uc5d0 \ud1a0\ud070\uc744 \uc0dd\uc131\ud558\ub294\xa0",(0,t.jsx)(n.code,{children:"jwt.ts"}),"\xa0\ub97c \ub9cc\ub4e4\uc5b4\uc900\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'// app/lib/jwt.ts\nimport jwt, { JwtPayload } from "jsonwebtoken";\n\ninterface SignOption {\n  expiresIn?: string | number;\n}\n\nconst DEFAULT_SIGN_OPTION: SignOption = {\n  expiresIn: "1h",\n};\n\nexport function signJwtAccessToken(\n  payload: JwtPayload,\n  options: SignOption = DEFAULT_SIGN_OPTION\n) {\n  const secret_key = process.env.SECRET_KEY;\n  const token = jwt.sign(payload, secret_key, options);\n  return token;\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"signJwtAccessToken()"}),"\xa0\ud568\uc218\ub294\xa0",(0,t.jsx)(n.code,{children:"jwt.sign()"}),"\ub97c \ud1b5\ud574 \ud1a0\ud070\uc744 \ub9ac\ud134\ud574\uc900\ub2e4."]}),"\n",(0,t.jsxs)(n.p,{children:["\ud1a0\ud070\uc744 \ub9cc\ub4e4\uc5c8\uc73c\ub2c8 API \ucf5c\uc774 \uc654\uc744 \ub54c \ud1a0\ud070\uc758 \uc720\ud6a8\uc131 \uccb4\ud06c\ub97c \ud574\uc8fc\ub294\xa0",(0,t.jsx)(n.code,{children:"verifyJwt()"}),"\xa0\ud568\uc218\ub3c4 \ub9cc\ub4e4\uc5b4 \uc900\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'// app/lib/jwt.ts\n~~\nexport function verifyJwt(token: string) {\n\xa0 try {\n\xa0 \xa0 const secret_key = process.env.SECRET_KEY;\n\xa0 \xa0 const decoded = jwt.verify(token, secret_key!);\n\xa0 \xa0 return decoded as JwtPayload;\n\xa0 } catch (error) {\n\xa0 \xa0 console.log("error occured : ", error);\n\xa0 \xa0 return null;\n\xa0 }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\ub85c\uadf8\uc778-\uc2dc-accesstoken-\uc804\ub2ec",children:"\ub85c\uadf8\uc778 \uc2dc accessToken \uc804\ub2ec"}),"\n",(0,t.jsxs)(n.p,{children:["\uae30\uc874\xa0",(0,t.jsx)(n.code,{children:"api/signin/route.ts"}),"\xa0\uc758 \ub85c\uc9c1\uc744 \uc77c\ubd80 \ubcc0\uacbd\ud574\uc57c\ud55c\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'// api/signin/route.ts\n\nimport { signJwtAccessToken } from "@/lib/jwt";\nimport prisma from "@/lib/prisma";\nimport * as bcrypt from "bcrypt";\n\ninterface RequestBody {\n  userName: string;\n  password: string;\n}\n\nexport async function POST(request: Request) {\n  const body: RequestBody = await request.json();\n  const user = await prisma.user.findFirst({\n    where: {\n      email: body.userName,\n    },\n  });\n\n  if (user && (await bcrypt.compare(body.password, user.password))) {\n    const { password, ...userWithoutPass } = user;\n    const accessToken = signJwtAccessToken(userWithoutPass);\n    const result = {\n      ...userWithoutPass,\n      accessToken,\n    };\n    return new Response(JSON.stringify(result));\n  } else {\n    return new Response(JSON.stringify(null));\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Postman\uc744 \ud1b5\ud574 \ub85c\uadf8\uc778 api \ub97c \ud638\ucd9c\ud558\uba74\xa0",(0,t.jsx)(n.code,{children:"accessToken"}),"\xa0\uc774 \ucd94\uac00\ub41c\uac78 \ubcfc \uc218 \uc788\ub2e4.\n",(0,t.jsx)(n.img,{src:s(5266).A+"",width:"846",height:"411"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["\u2705\xa0",(0,t.jsx)(n.code,{children:"authorize()"}),"\xa0\ub97c \uc218\uc815\ud574 \ud1a0\ud070\uc744\xa0",(0,t.jsx)(n.code,{children:"Session"}),"\xa0\uc5d0 \uc800\uc7a5\ud574\ubcf4\uc790!"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'// /app/api/auth/[...nextahtu]/route.ts\n~\nconst handler = NextAuth({\n  ~\n\xa0 callbacks: {\n\xa0 \xa0 async jwt({ token, user }) {\n\xa0 \xa0 \xa0 return { ...token, ...user };\n\xa0 \xa0 },\n\xa0 \xa0 async session({ session, token }) {\n\xa0 \xa0 \xa0 console.log("$$$ token : ", token);\n\xa0 \xa0 \xa0 session.user = token as never;\n\xa0 \xa0 \xa0 console.log("$$$ session : ", session);\n\xa0 \xa0 \xa0 return session;\n\xa0 \xa0 },\n\xa0 },\n});\n~\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"callbacks"}),"\xa0\uc635\uc158\uc740 \ub85c\uadf8\uc778 \ub85c\uc9c1(\xa0",(0,t.jsx)(n.code,{children:"authorize()"}),")\uc744 \uc218\ud589\ud55c \uc774\ud6c4 \uc2e4\ud589\ub418\ub294 \ubd80\ubd84\uc774\ub2e4.\n",(0,t.jsx)(n.img,{src:s(3165).A+"",width:"295",height:"419"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"jwt()"}),"\xa0\ucf5c\ubc31 \ud568\uc218\uc5d0\uc11c\xa0",(0,t.jsx)(n.code,{children:"token"}),"\xa0\uacfc\xa0",(0,t.jsx)(n.code,{children:"user"}),"\xa0\uc815\ubcf4\ub97c\xa0",(0,t.jsx)(n.code,{children:"object"}),"\xa0\ub85c \ub9cc\ub4e4\uc5b4 \ub9ac\ud134\ud558\uba74\xa0",(0,t.jsx)(n.code,{children:"session()"}),"\xa0\ucf5c\ubc31 \ud568\uc218\uc5d0\xa0",(0,t.jsx)(n.code,{children:"token"}),"\xa0\uc73c\ub85c \uc804\ub2ec\ub41c\ub2e4."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"session()"}),"\xa0\ucf5c\ubc31\uc5d0\uc11c\ub294 \uc804\ub2ec\ubc1b\uc740 \uac12\uc744\xa0",(0,t.jsx)(n.code,{children:"session.user"}),"\xa0\uc5d0 \ub123\uc5b4 \ub9ac\ud134\ud574\uc8fc\uc5b4\uc57c\xa0",(0,t.jsx)(n.code,{children:"Client"}),"\xa0\uc5d0\uc11c \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud558\ub2e4."]}),"\n",(0,t.jsxs)(n.p,{children:["\ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c\ub294\xa0",(0,t.jsx)(n.code,{children:"const {data: session} = useSession()"}),"\xa0\ub97c \ud638\ucd9c\ud574 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."]}),"\n",(0,t.jsx)(n.h3,{id:"sessionuser\uc758-type-\ucee4\ud130\ub9c8\uc774\uc9d5-\ud558\uae30",children:"Session.user\uc758 type \ucee4\ud130\ub9c8\uc774\uc9d5 \ud558\uae30"}),"\n",(0,t.jsxs)(n.p,{children:["Next-Auth \uc758 type\uc744 \ubcf4\uba74\xa0",(0,t.jsx)(n.code,{children:"accessToken"}),"\xa0\uc774 \uc815\uc758\ub418\uc5b4\uc788\uc9c0 \uc54a\ub2e4."]}),"\n",(0,t.jsxs)(n.p,{children:["\uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 type \ucee4\uc2a4\ud130\ub9c8\uc774\uc9d5\uc774 \ud544\uc694\ud558\uba70,\xa0",(0,t.jsx)(n.code,{children:"/app/type"}),"\xa0\uacbd\ub85c\uc5d0\xa0",(0,t.jsx)(n.code,{children:"next-auth.d.ts"}),"\xa0\ud30c\uc77c\uc744 \ub9cc\ub4e4\uc5b4 \uad6c\ud604\ud55c\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'// app/types/next-auth.d.ts\n\nimport NextAuth from "next-auth";\ndeclare module "next-auth" {\n  interface Session {\n    user: {\n      id: number;\n      name: string;\n      email: string;\n      accessToken: string;\n    };\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"api-\ud638\ucd9c-\uc2dc-accesstoken-\uc720\ud6a8\uc131-\uac80\uc0ac",children:"API \ud638\ucd9c \uc2dc accessToken \uc720\ud6a8\uc131 \uac80\uc0ac"}),"\n",(0,t.jsxs)(n.p,{children:["\uac8c\uc2dc\ubb3c \uc870\ud68c api\uc778\xa0",(0,t.jsx)(n.code,{children:"/api/user/[id]/route.ts"}),"\xa0\ub97c \ud638\ucd9c \ud560 \ub54c \ud1a0\ud070\uc744 \uac80\uc0ac\ud558\ub294 \ub85c\uc9c1\uc744 \ucd94\uac00\ud574 \ubcfc \uac83\uc774\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'// /api/user/[id]/route.ts\n\nimport prisma from "@/app/lib/prisma";\nimport { verifyJwt } from "@/app/lib/jwt";\nexport async function GET(\n  request: Request,\n  { params }: { params: { id: string } }\n) {\n  // accessToken \uc720\ud6a8\uc131 \uac80\uc0ac\n  const accessToken = request.headers.get("authorization");\n\n  if (!accessToken || !verifyJwt(accessToken)) {\n    return new Response(JSON.stringify({ error: "No Authorization" }), {\n      status: 401,\n    });\n  }\n  console.log(params);\n  const id = Number(params.id);\n  const userPosts = await prisma.post.findMany({\n    where: {\n      authorId: id,\n    },\n    include: {\n      author: {\n        select: {\n          email: true,\n          name: true,\n        },\n      },\n    },\n  });\n  return new Response(JSON.stringify(userPosts));\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"request.headers"}),"\xa0\uc758\xa0",(0,t.jsx)(n.code,{children:"authorization"}),"\xa0\uc5d0\xa0",(0,t.jsx)(n.code,{children:"accessToken"}),"\xa0\uc774 \uc5c6\uac70\ub098"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"verifyJwt()"}),"\xa0\uc720\ud6a8\uc131 \uac80\uc0ac\ub97c \ud1b5\uacfc\ud558\uc9c0 \ubabb\ud558\uba74\xa0",(0,t.jsx)(n.code,{children:"401(Unauthorized)"}),"\xa0\uc5d0\ub7ec\ub97c \ub9ac\ud134\ud55c\ub2e4."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u2b55\ufe0f \ud1b5\uacfc"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(132).A+"",width:"853",height:"425"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u274c \ucc28\ub2e8"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(975).A+"",width:"844",height:"379"})}),"\n",(0,t.jsx)(n.h3,{id:"middleware\ub97c-\uc774\uc6a9\ud55c-\uc720\ud6a8\uc131-\uac80\uc0ac",children:"Middleware\ub97c \uc774\uc6a9\ud55c \uc720\ud6a8\uc131 \uac80\uc0ac"}),"\n",(0,t.jsxs)(n.p,{children:["App Router \uc5d0\uc11c\ub294\xa0",(0,t.jsx)(n.code,{children:"Middleware"}),"\xa0\uae30\ub2a5\uc744 \uc81c\uacf5\ud55c\ub2e4.\n",(0,t.jsx)(n.code,{children:"Middleware"}),"\ub294 \ud398\uc774\uc9c0\uac00 \ub80c\ub354\ub9c1 \ub418\uae30 \uc804\uc5d0\xa0",(0,t.jsx)(n.code,{children:"\ub85c\uadf8\uc778 \uc5ec\ubd80"}),",\xa0",(0,t.jsx)(n.code,{children:"\uad8c\ud55c \uccb4\ud06c"}),"\xa0\ub4f1\uc758 \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218 \uc788\ub2e4.\n\ud65c\uc6a9 \ubc29\ubc95\uc740 \ubb34\uad81\ubb34\uc9c4\ud558\uc9c0\ub9cc \uc774\ubc88\uc5d0\ub294 \ud398\uc774\uc9c0 \uc9c4\uc785 \uc804, \ub85c\uadf8\uc778 \uc5ec\ubd80\ub97c \ud310\ub2e8\ud574 \uc811\uadfc\uc744 \ucc28\ub2e8\ud558\ub294 \uc791\uc5c5\ub9cc \ud558\uaca0\ub2e4.\n",(0,t.jsx)(n.code,{children:"/app"}),"\xa0\uacfc \ub3d9\uc77c\ud55c \ub808\ubca8\uc5d0\xa0",(0,t.jsx)(n.code,{children:"middleware.ts"}),"\xa0\ud30c\uc77c\uc744 \ub9cc\ub4e4\uc5b4 \uc124\uc815\ud55c\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'export { default } from "next-auth/middleware";\n\nexport const config = {\n  matcher: ["/userposts/:path*"],\n};\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"config"}),"\xa0\uc548\uc5d0 \uc788\ub294 matcher\uc5d0 \ud398\uc774\uc9c0 \uacbd\ub85c\ub97c \ub4f1\ub85d\ud558\uba74 \ud574\ub2f9 \ud398\uc774\uc9c0\ub294 \ub85c\uadf8\uc778\ud55c \uc0ac\uc6a9\uc790\ub9cc \uc811\uadfc\ud560 \uc218 \uc788\ub2e4.\n",(0,t.jsx)(n.img,{src:"https://velog.velcdn.com/images/jae_han_e/post/c5a83b6e-d94e-4158-b161-401bdaa36f69/image.png",alt:""})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u2705 \ub85c\uadf8\uc778 \ud558\uc9c0\uc54a\uc740 \uc0ac\uc6a9\uc790\uac00 \uc811\uadfc\ud558\uac8c\ub418\uba74 \ub85c\uadf8\uc778 \ud654\uba74\uc73c\ub85c \ub9ac\ub2e4\uc774\ub809\ud2b8 \uc2dc\ud0a8\ub2e4."})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8752:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/2-1-da432248579b2b5148035d2049656744.png"},6395:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/2-2-3bec9246da332f4f2787dd183207aef8.png"},5266:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/2-3-673c2dc8bf845e416d32ba2320ae6502.png"},3165:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/2-4-749cc7a9ce927f536620ec3a274eaeaf.png"},132:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/2-5-460e42ffeda359ac83fee968b277cc59.png"},975:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/2-6-48fe46fa7eb825c17f745bb6e64489f3.png"},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var t=s(6540);const r={},c=t.createContext(r);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);