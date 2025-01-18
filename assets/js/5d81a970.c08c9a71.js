"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[2498],{41366:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>i});const a=JSON.parse('{"id":"Fronted \uc9c0\uc2dd/Axios vs Fetch","title":"Axios vs Fetch","description":"\uc791\uc131\uc77c : 2025.01.19","source":"@site/docs/01. Fronted \uc9c0\uc2dd/019926. Axios vs Fetch.md","sourceDirName":"01. Fronted \uc9c0\uc2dd","slug":"/Fronted \uc9c0\uc2dd/Axios vs Fetch","permalink":"/zora_story/docs/Fronted \uc9c0\uc2dd/Axios vs Fetch","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":19926,"frontMatter":{},"sidebar":"studySidebar","previous":{"title":"\ud074\ub85c\uc800 (Closure)","permalink":"/zora_story/docs/Fronted \uc9c0\uc2dd/\ud074\ub85c\uc800 (Closure)"},"next":{"title":"npm vs yarn","permalink":"/zora_story/docs/\uac1c\ubc1c\ud658\uacbd/npm vs yarn"}}');var c=e(74848),t=e(28453);const l={},o=void 0,r={},i=[{value:"Axios\ub780?",id:"axios\ub780",level:3},{value:"Fetch\ub780?",id:"fetch\ub780",level:3},{value:"\uc8fc\uc694 \ucc28\uc774\uc810",id:"\uc8fc\uc694-\ucc28\uc774\uc810",level:3},{value:"\uc0ac\uc6a9 \uc608\uc2dc \ube44\uad50",id:"\uc0ac\uc6a9-\uc608\uc2dc-\ube44\uad50",level:3},{value:"\uc120\ud0dd \uae30\uc900",id:"\uc120\ud0dd-\uae30\uc900",level:3}];function p(n){const s={blockquote:"blockquote",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"\uc791\uc131\uc77c : 2025.01.19"}),"\n"]}),"\n",(0,c.jsx)(s.h3,{id:"axios\ub780",children:"Axios\ub780?"}),"\n",(0,c.jsx)(s.p,{children:"Axios\ub294 \ube0c\ub77c\uc6b0\uc800\uc640 Node.js \ud658\uacbd\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 Promise \uae30\ubc18\uc758 HTTP \ud074\ub77c\uc774\uc5b8\ud2b8 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4. XMLHttpRequest\ub97c \ucd94\uc0c1\ud654\ud558\uc5ec \ub354 \uc0ac\uc6a9\ud558\uae30 \uc26c\uc6b4 API\ub97c \uc81c\uacf5\ud558\uba70, \ub2e4\uc591\ud55c \uae30\ub2a5\uacfc \ud3b8\uc758\uc131\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."}),"\n",(0,c.jsx)(s.p,{children:"\uc8fc\uc694 \ud2b9\uc9d5:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\uc694\uccad\uacfc \uc751\ub2f5 \ub370\uc774\ud130\uc758 \uc790\ub3d9 \ubcc0\ud658"}),"\n",(0,c.jsx)(s.li,{children:"\uc694\uccad\uacfc \uc751\ub2f5\uc744 \uac00\ub85c\ucc44\uc11c \ubcc0\ud615\ud560 \uc218 \uc788\ub294 \uc778\ud130\uc149\ud130 \uae30\ub2a5"}),"\n",(0,c.jsx)(s.li,{children:"\uc694\uccad \ucde8\uc18c\uc640 \ud0c0\uc784\uc544\uc6c3 \uc124\uc815 \uae30\ub2a5"}),"\n",(0,c.jsx)(s.li,{children:"XSRF \ubcf4\ud638 \uae30\ub2a5 \ub0b4\uc7a5"}),"\n",(0,c.jsx)(s.li,{children:"\uc9c4\ud589\ub960 \ud45c\uc2dc \uae30\ub2a5"}),"\n",(0,c.jsx)(s.li,{children:"JSON \ub370\uc774\ud130 \uc790\ub3d9 \ubcc0\ud658"}),"\n"]}),"\n",(0,c.jsx)(s.h3,{id:"fetch\ub780",children:"Fetch\ub780?"}),"\n",(0,c.jsx)(s.p,{children:"Fetch\ub294 \ube0c\ub77c\uc6b0\uc800\uc5d0 \ub0b4\uc7a5\ub41c \uae30\ubcf8 API\ub85c, XMLHttpRequest\uc758 \ud604\ub300\uc801 \ub300\uc548\uc73c\ub85c \uc124\uacc4\ub418\uc5c8\uc2b5\ub2c8\ub2e4. Promise \uae30\ubc18\uc73c\ub85c \uc791\ub3d9\ud558\uba70, \ub124\ud2b8\uc6cc\ud06c \uc694\uccad\uc744 \ubcf4\ub2e4 \uac15\ub825\ud558\uace0 \uc720\uc5f0\ud558\uac8c \ucc98\ub9ac\ud560 \uc218 \uc788\uac8c \ud574\uc90d\ub2c8\ub2e4."}),"\n",(0,c.jsx)(s.p,{children:"\uc8fc\uc694 \ud2b9\uc9d5:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\ube0c\ub77c\uc6b0\uc800 \ub0b4\uc7a5 API\ub85c \ubcc4\ub3c4 \uc124\uce58 \ubd88\ud544\uc694"}),"\n",(0,c.jsx)(s.li,{children:"Promise \uae30\ubc18\uc758 \ube44\ub3d9\uae30 \ucc98\ub9ac"}),"\n",(0,c.jsx)(s.li,{children:"Request\uc640 Response \uc778\ud130\ud398\uc774\uc2a4 \uc81c\uacf5"}),"\n",(0,c.jsx)(s.li,{children:"Stream API \uc9c0\uc6d0"}),"\n",(0,c.jsx)(s.li,{children:"\uc2ec\ud50c\ud55c \uc778\ud130\ud398\uc774\uc2a4"}),"\n"]}),"\n",(0,c.jsx)(s.h3,{id:"\uc8fc\uc694-\ucc28\uc774\uc810",children:"\uc8fc\uc694 \ucc28\uc774\uc810"}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"\ub370\uc774\ud130 \ucc98\ub9ac \ubc29\uc2dd"})}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"Axios: \uc790\ub3d9\uc73c\ub85c JSON \ub370\uc774\ud130 \ubcc0\ud658"}),"\n",(0,c.jsx)(s.li,{children:"Fetch: \uc218\ub3d9\uc73c\ub85c .json() \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud574\uc57c \ud568"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"\uc5d0\ub7ec \ucc98\ub9ac"})}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"Axios: HTTP \uc5d0\ub7ec \uc0c1\ud0dc\ub97c \uc790\ub3d9\uc73c\ub85c \uac10\uc9c0\ud558\uc5ec catch\ub85c \ucc98\ub9ac"}),"\n",(0,c.jsx)(s.li,{children:"Fetch: HTTP \uc5d0\ub7ec \uc0c1\ud0dc\ub97c \uc218\ub3d9\uc73c\ub85c \uccb4\ud06c\ud574\uc57c \ud568"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"\uae30\ub2a5\uc131"})}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"Axios: \uc778\ud130\uc149\ud130, \uc694\uccad \ucde8\uc18c, \ud0c0\uc784\uc544\uc6c3 \ub4f1 \ud48d\ubd80\ud55c \uae30\ub2a5 \uc81c\uacf5"}),"\n",(0,c.jsx)(s.li,{children:"Fetch: \uae30\ubcf8\uc801\uc778 \uae30\ub2a5\ub9cc \uc81c\uacf5, \ucd94\uac00 \uae30\ub2a5\uc740 \uc9c1\uc811 \uad6c\ud604 \ud544\uc694"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"\ube0c\ub77c\uc6b0\uc800 \uc9c0\uc6d0"})}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"Axios: \uad6c\ud615 \ube0c\ub77c\uc6b0\uc800 \ud3ec\ud568 \uad11\ubc94\uc704\ud55c \uc9c0\uc6d0"}),"\n",(0,c.jsx)(s.li,{children:"Fetch: \ud604\ub300 \ube0c\ub77c\uc6b0\uc800\ub9cc \uc9c0\uc6d0, \uad6c\ud615 \ube0c\ub77c\uc6b0\uc800\ub294 \ud3f4\ub9ac\ud544 \ud544\uc694"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(s.h3,{id:"\uc0ac\uc6a9-\uc608\uc2dc-\ube44\uad50",children:"\uc0ac\uc6a9 \uc608\uc2dc \ube44\uad50"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"\uae30\ubcf8 GET \uc694\uccad:"})}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token comment",children:"// Axios"}),"\naxios",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"get"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'/api/data'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"then"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token parameter",children:"response"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"log"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"response",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token property-access",children:"data"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"catch"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token parameter",children:"error"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"error"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"error",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"// Fetch"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"fetch"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'/api/data'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"then"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token parameter",children:"response"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," response",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"json"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"then"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token parameter",children:"data"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"log"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"data",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token keyword control-flow",children:"catch"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token parameter",children:"error"})," ",(0,c.jsx)(s.span,{className:"token arrow operator",children:"=>"})," ",(0,c.jsx)(s.span,{className:"token console class-name",children:"console"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"error"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),"error",(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"POST \uc694\uccad \ubc0f \ud5e4\ub354 \uc124\uc815:"})}),"\n",(0,c.jsx)(s.pre,{className:"language-javascript",children:(0,c.jsxs)(s.code,{className:"language-javascript",children:[(0,c.jsx)(s.span,{className:"token comment",children:"// Axios"}),"\naxios",(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"post"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'/api/data'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,c.jsx)(s.span,{className:"token literal-property property",children:"name"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token string",children:"'John'"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,c.jsx)(s.span,{className:"token literal-property property",children:"headers"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token string-property property",children:"'Content-Type'"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token string",children:"'application/json'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n    ",(0,c.jsx)(s.span,{className:"token literal-property property",children:"Authorization"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token string",children:"'Bearer token'"}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"// Fetch"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"fetch"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token string",children:"'/api/data'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,c.jsx)(s.span,{className:"token literal-property property",children:"method"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token string",children:"'POST'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n  ",(0,c.jsx)(s.span,{className:"token literal-property property",children:"headers"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token string-property property",children:"'Content-Type'"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token string",children:"'application/json'"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n    ",(0,c.jsx)(s.span,{className:"token literal-property property",children:"Authorization"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token string",children:"'Bearer token'"}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:","}),"\n  ",(0,c.jsx)(s.span,{className:"token literal-property property",children:"body"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token known-class-name class-name",children:"JSON"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"."}),(0,c.jsx)(s.span,{className:"token method function property-access",children:"stringify"}),(0,c.jsx)(s.span,{className:"token punctuation",children:"("}),(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,c.jsx)(s.span,{className:"token literal-property property",children:"name"}),(0,c.jsx)(s.span,{className:"token operator",children:":"})," ",(0,c.jsx)(s.span,{className:"token string",children:"'John'"}),"\n  ",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),"\n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,c.jsx)(s.span,{className:"token punctuation",children:")"}),(0,c.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,c.jsx)(s.h3,{id:"\uc120\ud0dd-\uae30\uc900",children:"\uc120\ud0dd \uae30\uc900"}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"Axios \uc120\ud0dd\uc774 \uc88b\uc740 \uacbd\uc6b0:"})}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\uc790\ub3d9\ud654\ub41c \uae30\ub2a5\uc774 \ub9ce\uc774 \ud544\uc694\ud55c \ub300\uaddc\ubaa8 \ud504\ub85c\uc81d\ud2b8"}),"\n",(0,c.jsx)(s.li,{children:"\uad11\ubc94\uc704\ud55c \ube0c\ub77c\uc6b0\uc800 \uc9c0\uc6d0\uc774 \ud544\uc694\ud55c \uacbd\uc6b0"}),"\n",(0,c.jsx)(s.li,{children:"\ub354 \ud48d\ubd80\ud55c \uae30\ub2a5\uacfc \uc5d0\ub7ec \ucc98\ub9ac\uac00 \ud544\uc694\ud55c \uacbd\uc6b0"}),"\n",(0,c.jsx)(s.li,{children:"\uc778\ud130\uc149\ud130\ub098 \uc694\uccad \ucde8\uc18c \uae30\ub2a5\uc774 \ud544\uc694\ud55c \uacbd\uc6b0"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"Fetch \uc120\ud0dd\uc774 \uc88b\uc740 \uacbd\uc6b0:"})}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\uac04\ub2e8\ud55c HTTP \ud1b5\uc2e0\uc774 \ud544\uc694\ud55c \uc18c\uaddc\ubaa8 \ud504\ub85c\uc81d\ud2b8"}),"\n",(0,c.jsx)(s.li,{children:"\ucd5c\uc2e0 \ube0c\ub77c\uc6b0\uc800\ub9cc \uc9c0\uc6d0\ud558\uba74 \ub418\ub294 \uacbd\uc6b0"}),"\n",(0,c.jsx)(s.li,{children:"\ucd5c\uc18c\ud55c\uc758 \uae30\ub2a5\ub9cc \ud544\uc694\ud55c \uacbd\uc6b0"}),"\n",(0,c.jsx)(s.li,{children:"\ucd94\uac00 \ub77c\uc774\ube0c\ub7ec\ub9ac \uc758\uc874\uc131\uc744 \ud53c\ud558\uace0 \uc2f6\uc740 \uacbd\uc6b0"}),"\n"]}),"\n"]}),"\n"]})]})}function d(n={}){const{wrapper:s}={...(0,t.R)(),...n.components};return s?(0,c.jsx)(s,{...n,children:(0,c.jsx)(p,{...n})}):p(n)}},28453:(n,s,e)=>{e.d(s,{R:()=>l,x:()=>o});var a=e(96540);const c={},t=a.createContext(c);function l(n){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function o(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:l(n.components),a.createElement(t.Provider,{value:s},n.children)}}}]);