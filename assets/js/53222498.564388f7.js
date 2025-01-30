"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[30730],{59318:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>r});const a=JSON.parse('{"id":"\ud615\uc0c1\uad00\ub9ac/Git \uba85\ub839\uc5b4","title":"Git \uba85\ub839\uc5b4","description":"Git\uc758 \ucd08\uae30 \uc124\uc815\ubd80\ud130 \uace0\uae09 \uae30\ub2a5\uae4c\uc9c0 \ubaa8\ub4e0 \uc8fc\uc694 \uba85\ub839\uc5b4 \uc124\uba85","source":"@site/docs/03. \ud615\uc0c1\uad00\ub9ac/039901. Git \uba85\ub839\uc5b4.md","sourceDirName":"03. \ud615\uc0c1\uad00\ub9ac","slug":"/\ud615\uc0c1\uad00\ub9ac/Git \uba85\ub839\uc5b4","permalink":"/zora_story/docs/\ud615\uc0c1\uad00\ub9ac/Git \uba85\ub839\uc5b4","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"git","permalink":"/zora_story/docs/tags/git"},{"inline":true,"label":"version-control","permalink":"/zora_story/docs/tags/version-control"},{"inline":true,"label":"git-commands","permalink":"/zora_story/docs/tags/git-commands"},{"inline":true,"label":"repository-management","permalink":"/zora_story/docs/tags/repository-management"},{"inline":true,"label":"branch-management","permalink":"/zora_story/docs/tags/branch-management"},{"inline":true,"label":"workflow","permalink":"/zora_story/docs/tags/workflow"},{"inline":true,"label":"development-tools","permalink":"/zora_story/docs/tags/development-tools"}],"version":"current","sidebarPosition":39901,"frontMatter":{"title":"Git \uba85\ub839\uc5b4","description":"Git\uc758 \ucd08\uae30 \uc124\uc815\ubd80\ud130 \uace0\uae09 \uae30\ub2a5\uae4c\uc9c0 \ubaa8\ub4e0 \uc8fc\uc694 \uba85\ub839\uc5b4 \uc124\uba85","tags":["git","version-control","git-commands","repository-management","branch-management","workflow","development-tools"],"keywords":["Git \uba85\ub839\uc5b4","Git \uc124\uc815","\ubc84\uc804 \uad00\ub9ac","\ube0c\ub79c\uce58 \uad00\ub9ac","Git \uc6cc\ud06c\ud50c\ub85c\uc6b0","Git \uc800\uc7a5\uc18c","Git stash","Git \ub418\ub3cc\ub9ac\uae30"]},"sidebar":"studySidebar","previous":{"title":"Git Hook\uacfc Husky\uc758 \uc774\ud574","permalink":"/zora_story/docs/\uac1c\ubc1c\ud658\uacbd/husky"},"next":{"title":"\ub124\ud2b8\uc6cc\ud06c \uae30\ucd08","permalink":"/zora_story/docs/Network/\ub124\ud2b8\uc6cc\ud06c \uae30\ucd08"}}');var c=e(74848),t=e(28453);const o={title:"Git \uba85\ub839\uc5b4",description:"Git\uc758 \ucd08\uae30 \uc124\uc815\ubd80\ud130 \uace0\uae09 \uae30\ub2a5\uae4c\uc9c0 \ubaa8\ub4e0 \uc8fc\uc694 \uba85\ub839\uc5b4 \uc124\uba85",tags:["git","version-control","git-commands","repository-management","branch-management","workflow","development-tools"],keywords:["Git \uba85\ub839\uc5b4","Git \uc124\uc815","\ubc84\uc804 \uad00\ub9ac","\ube0c\ub79c\uce58 \uad00\ub9ac","Git \uc6cc\ud06c\ud50c\ub85c\uc6b0","Git \uc800\uc7a5\uc18c","Git stash","Git \ub418\ub3cc\ub9ac\uae30"]},l=void 0,i={},r=[{value:"1. Git \ucd08\uae30 \uc124\uc815",id:"1-git-\ucd08\uae30-\uc124\uc815",level:2},{value:"\uae30\ubcf8 \uc124\uc815",id:"\uae30\ubcf8-\uc124\uc815",level:3},{value:"\uc800\uc7a5\uc18c \uc0dd\uc131",id:"\uc800\uc7a5\uc18c-\uc0dd\uc131",level:3},{value:"2. \ud30c\uc77c \uad00\ub9ac",id:"2-\ud30c\uc77c-\uad00\ub9ac",level:2},{value:"\uae30\ubcf8 \uba85\ub839\uc5b4",id:"\uae30\ubcf8-\uba85\ub839\uc5b4",level:3},{value:"\ubcc0\uacbd\uc0ac\ud56d \uad00\ub9ac",id:"\ubcc0\uacbd\uc0ac\ud56d-\uad00\ub9ac",level:3},{value:"3. \ube0c\ub79c\uce58 \uad00\ub9ac",id:"3-\ube0c\ub79c\uce58-\uad00\ub9ac",level:2},{value:"\uae30\ubcf8 \uc791\uc5c5",id:"\uae30\ubcf8-\uc791\uc5c5",level:3},{value:"\ubcd1\ud569 \uc791\uc5c5",id:"\ubcd1\ud569-\uc791\uc5c5",level:3},{value:"4. \uc6d0\uaca9 \uc800\uc7a5\uc18c \uad00\ub9ac",id:"4-\uc6d0\uaca9-\uc800\uc7a5\uc18c-\uad00\ub9ac",level:2},{value:"\uae30\ubcf8 \uc791\uc5c5",id:"\uae30\ubcf8-\uc791\uc5c5-1",level:3},{value:"\uace0\uae09 \uc791\uc5c5",id:"\uace0\uae09-\uc791\uc5c5",level:3},{value:"5. \uc791\uc5c5 \ub0b4\uc6a9 \uc784\uc2dc \uc800\uc7a5 (Stash)",id:"5-\uc791\uc5c5-\ub0b4\uc6a9-\uc784\uc2dc-\uc800\uc7a5-stash",level:2},{value:"6. \ud788\uc2a4\ud1a0\ub9ac \uad00\ub9ac",id:"6-\ud788\uc2a4\ud1a0\ub9ac-\uad00\ub9ac",level:2},{value:"\ub85c\uadf8 \ud655\uc778",id:"\ub85c\uadf8-\ud655\uc778",level:3},{value:"\ub418\ub3cc\ub9ac\uae30",id:"\ub418\ub3cc\ub9ac\uae30",level:3},{value:"7. \ubb38\uc81c \ud574\uacb0",id:"7-\ubb38\uc81c-\ud574\uacb0",level:2},{value:"8. .gitignore \uc124\uc815",id:"8-gitignore-\uc124\uc815",level:2}];function m(n){const s={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",span:"span",...(0,t.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"\uc791\uc131\uc77c : 2024.12.25"}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"1-git-\ucd08\uae30-\uc124\uc815",children:"1. Git \ucd08\uae30 \uc124\uc815"}),"\n",(0,c.jsx)(s.h3,{id:"\uae30\ubcf8-\uc124\uc815",children:"\uae30\ubcf8 \uc124\uc815"}),"\n",(0,c.jsx)(s.pre,{className:"language-bash",children:(0,c.jsxs)(s.code,{className:"language-bash",children:[(0,c.jsx)(s.span,{className:"token comment",children:"# \uc0ac\uc6a9\uc790 \uc815\ubcf4 \uc124\uc815"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," config --global user.name ",(0,c.jsx)(s.span,{className:"token string",children:'"Your Name"'}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," config --global user.email ",(0,c.jsx)(s.span,{className:"token string",children:'"your.email@example.com"'}),"\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"# \uae30\ubcf8 \ube0c\ub79c\uce58\uba85 \uc124\uc815"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," config --global init.defaultBranch main\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"# \uc904\ubc14\uafc8 \uc124\uc815"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," config --global core.autocrlf ",(0,c.jsx)(s.span,{className:"token boolean",children:"true"}),"  ",(0,c.jsx)(s.span,{className:"token comment",children:"# Windows"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," config --global core.autocrlf input ",(0,c.jsx)(s.span,{className:"token comment",children:"# Mac/Linux"}),"\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"# \uc790\uc8fc \uc4f0\ub294 \uba85\ub839\uc5b4 \ub2e8\ucd95\ud0a4 \uc124\uc815"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," config --global alias.co checkout\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," config --global alias.br branch\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," config --global alias.ci commit\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," config --global alias.st status\n"]})}),"\n",(0,c.jsx)(s.h3,{id:"\uc800\uc7a5\uc18c-\uc0dd\uc131",children:"\uc800\uc7a5\uc18c \uc0dd\uc131"}),"\n",(0,c.jsx)(s.pre,{className:"language-bash",children:(0,c.jsxs)(s.code,{className:"language-bash",children:[(0,c.jsx)(s.span,{className:"token comment",children:"# \uc0c8 \uc800\uc7a5\uc18c \uc0dd\uc131"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," init\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"# \uc6d0\uaca9 \uc800\uc7a5\uc18c \ubcf5\uc81c"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," clone ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"repository-url",(0,c.jsx)(s.span,{className:"token operator",children:">"}),"\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"# \uae30\uc874 \ud504\ub85c\uc81d\ud2b8\uc640 \uc6d0\uaca9 \uc800\uc7a5\uc18c \uc5f0\uacb0"}),"\n",(0,c.jsx)(s.span,{className:"token builtin class-name",children:"cd"})," existing-project\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," init\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," remote ",(0,c.jsx)(s.span,{className:"token function",children:"add"})," origin ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"repository-url",(0,c.jsx)(s.span,{className:"token operator",children:">"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," ",(0,c.jsx)(s.span,{className:"token function",children:"add"})," ",(0,c.jsx)(s.span,{className:"token builtin class-name",children:"."}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," commit -m ",(0,c.jsx)(s.span,{className:"token string",children:'"Initial commit"'}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," push -u origin main\n"]})}),"\n",(0,c.jsx)(s.h2,{id:"2-\ud30c\uc77c-\uad00\ub9ac",children:"2. \ud30c\uc77c \uad00\ub9ac"}),"\n",(0,c.jsx)(s.h3,{id:"\uae30\ubcf8-\uba85\ub839\uc5b4",children:"\uae30\ubcf8 \uba85\ub839\uc5b4"}),"\n",(0,c.jsx)(s.pre,{className:"language-bash",children:(0,c.jsxs)(s.code,{className:"language-bash",children:[(0,c.jsx)(s.span,{className:"token comment",children:"# \ud30c\uc77c \uc0c1\ud0dc \ud655\uc778"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," status\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," status -s  ",(0,c.jsx)(s.span,{className:"token comment",children:"# \uac04\ub2e8\ud788 \ubcf4\uae30"}),"\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"# \ud30c\uc77c \ucd94\uc801"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," ",(0,c.jsx)(s.span,{className:"token function",children:"add"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"\ud30c\uc77c\uba85",(0,c.jsx)(s.span,{className:"token operator",children:">"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," ",(0,c.jsx)(s.span,{className:"token function",children:"add"})," ",(0,c.jsx)(s.span,{className:"token builtin class-name",children:"."}),"      ",(0,c.jsx)(s.span,{className:"token comment",children:"# \ubaa8\ub4e0 \ubcc0\uacbd\uc0ac\ud56d"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," ",(0,c.jsx)(s.span,{className:"token function",children:"add"})," *.js   ",(0,c.jsx)(s.span,{className:"token comment",children:"# \ud2b9\uc815 \ud655\uc7a5\uc790\ub9cc"}),"\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"# \ud30c\uc77c \ucee4\ubc0b"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," commit -m ",(0,c.jsx)(s.span,{className:"token string",children:'"\ucee4\ubc0b \uba54\uc2dc\uc9c0"'}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," commit -am ",(0,c.jsx)(s.span,{className:"token string",children:'"\ucee4\ubc0b \uba54\uc2dc\uc9c0"'}),"  ",(0,c.jsx)(s.span,{className:"token comment",children:"# add + commit"}),"\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"# \ud30c\uc77c \uc0ad\uc81c"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," ",(0,c.jsx)(s.span,{className:"token function",children:"rm"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"\ud30c\uc77c\uba85",(0,c.jsx)(s.span,{className:"token operator",children:">"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," ",(0,c.jsx)(s.span,{className:"token function",children:"rm"})," --cached ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"\ud30c\uc77c\uba85",(0,c.jsx)(s.span,{className:"token operator",children:">"}),"  ",(0,c.jsx)(s.span,{className:"token comment",children:"# \uc6d0\uaca9 \uc800\uc7a5\uc18c\uc5d0\uc11c\ub9cc \uc0ad\uc81c"}),"\n"]})}),"\n",(0,c.jsx)(s.h3,{id:"\ubcc0\uacbd\uc0ac\ud56d-\uad00\ub9ac",children:"\ubcc0\uacbd\uc0ac\ud56d \uad00\ub9ac"}),"\n",(0,c.jsx)(s.pre,{className:"language-bash",children:(0,c.jsxs)(s.code,{className:"language-bash",children:[(0,c.jsx)(s.span,{className:"token comment",children:"# \ubcc0\uacbd\uc0ac\ud56d \ud655\uc778"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," ",(0,c.jsx)(s.span,{className:"token function",children:"diff"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," ",(0,c.jsx)(s.span,{className:"token function",children:"diff"})," --staged  ",(0,c.jsx)(s.span,{className:"token comment",children:"# \uc2a4\ud14c\uc774\uc9d5\ub41c \ubcc0\uacbd\uc0ac\ud56d"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," ",(0,c.jsx)(s.span,{className:"token function",children:"diff"})," ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"\ube0c\ub79c\uce58",(0,c.jsxs)(s.span,{className:"token operator",children:[(0,c.jsx)(s.span,{className:"token file-descriptor important",children:"1"}),">"]})," ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"\ube0c\ub79c\uce58",(0,c.jsxs)(s.span,{className:"token operator",children:[(0,c.jsx)(s.span,{className:"token file-descriptor important",children:"2"}),">"]}),"\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"# \ud30c\uc77c \uc774\ub825 \uc870\ud68c"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," log -p ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"\ud30c\uc77c\uba85",(0,c.jsx)(s.span,{className:"token operator",children:">"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," blame ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"\ud30c\uc77c\uba85",(0,c.jsx)(s.span,{className:"token operator",children:">"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," show ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"\ucee4\ubc0b\ud574\uc2dc",(0,c.jsx)(s.span,{className:"token operator",children:">"}),"\n"]})}),"\n",(0,c.jsx)(s.h2,{id:"3-\ube0c\ub79c\uce58-\uad00\ub9ac",children:"3. \ube0c\ub79c\uce58 \uad00\ub9ac"}),"\n",(0,c.jsx)(s.h3,{id:"\uae30\ubcf8-\uc791\uc5c5",children:"\uae30\ubcf8 \uc791\uc5c5"}),"\n",(0,c.jsx)(s.pre,{className:"language-bash",children:(0,c.jsxs)(s.code,{className:"language-bash",children:[(0,c.jsx)(s.span,{className:"token comment",children:"# \ube0c\ub79c\uce58 \ubaa9\ub85d"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," branch          ",(0,c.jsx)(s.span,{className:"token comment",children:"# \ub85c\uceec"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," branch -r       ",(0,c.jsx)(s.span,{className:"token comment",children:"# \uc6d0\uaca9"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," branch -a       ",(0,c.jsx)(s.span,{className:"token comment",children:"# \ubaa8\ub450"}),"\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"# \ube0c\ub79c\uce58 \uc0dd\uc131"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," branch ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"\ube0c\ub79c\uce58\uba85",(0,c.jsx)(s.span,{className:"token operator",children:">"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," checkout -b ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"\ube0c\ub79c\uce58\uba85",(0,c.jsx)(s.span,{className:"token operator",children:">"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," switch -c ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"\ube0c\ub79c\uce58\uba85",(0,c.jsx)(s.span,{className:"token operator",children:">"}),"  ",(0,c.jsx)(s.span,{className:"token comment",children:"# \ucd5c\uc2e0 \ubb38\ubc95"}),"\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"# \ube0c\ub79c\uce58 \uc804\ud658"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," checkout ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"\ube0c\ub79c\uce58\uba85",(0,c.jsx)(s.span,{className:"token operator",children:">"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," switch ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"\ube0c\ub79c\uce58\uba85",(0,c.jsx)(s.span,{className:"token operator",children:">"}),"\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"# \ube0c\ub79c\uce58 \uc0ad\uc81c"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," branch -d ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"\ube0c\ub79c\uce58\uba85",(0,c.jsx)(s.span,{className:"token operator",children:">"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," branch -D ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"\ube0c\ub79c\uce58\uba85",(0,c.jsx)(s.span,{className:"token operator",children:">"}),"  ",(0,c.jsx)(s.span,{className:"token comment",children:"# \uac15\uc81c \uc0ad\uc81c"}),"\n"]})}),"\n",(0,c.jsx)(s.h3,{id:"\ubcd1\ud569-\uc791\uc5c5",children:"\ubcd1\ud569 \uc791\uc5c5"}),"\n",(0,c.jsx)(s.pre,{className:"language-bash",children:(0,c.jsxs)(s.code,{className:"language-bash",children:[(0,c.jsx)(s.span,{className:"token comment",children:"# \ube0c\ub79c\uce58 \ubcd1\ud569"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," merge ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"\ube0c\ub79c\uce58\uba85",(0,c.jsx)(s.span,{className:"token operator",children:">"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," merge --no-ff ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"\ube0c\ub79c\uce58\uba85",(0,c.jsx)(s.span,{className:"token operator",children:">"}),"  ",(0,c.jsx)(s.span,{className:"token comment",children:"# fast-forward \ud558\uc9c0 \uc54a\uc74c"}),"\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"# \ucda9\ub3cc \ud574\uacb0"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," merge --abort  ",(0,c.jsx)(s.span,{className:"token comment",children:"# \ubcd1\ud569 \ucde8\uc18c"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," reset --hard HEAD  ",(0,c.jsx)(s.span,{className:"token comment",children:"# \ubcd1\ud569 \uc804\uc73c\ub85c \ub418\ub3cc\ub9ac\uae30"}),"\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"# \ud2b9\uc815 \ucee4\ubc0b\ub9cc \uac00\uc838\uc624\uae30"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," cherry-pick ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"\ucee4\ubc0b\ud574\uc2dc",(0,c.jsx)(s.span,{className:"token operator",children:">"}),"\n"]})}),"\n",(0,c.jsx)(s.h2,{id:"4-\uc6d0\uaca9-\uc800\uc7a5\uc18c-\uad00\ub9ac",children:"4. \uc6d0\uaca9 \uc800\uc7a5\uc18c \uad00\ub9ac"}),"\n",(0,c.jsx)(s.h3,{id:"\uae30\ubcf8-\uc791\uc5c5-1",children:"\uae30\ubcf8 \uc791\uc5c5"}),"\n",(0,c.jsx)(s.pre,{className:"language-bash",children:(0,c.jsxs)(s.code,{className:"language-bash",children:[(0,c.jsx)(s.span,{className:"token comment",children:"# \uc6d0\uaca9 \uc800\uc7a5\uc18c \ud655\uc778"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," remote -v\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"# \uc6d0\uaca9 \uc800\uc7a5\uc18c \ucd94\uac00/\uc218\uc815/\uc0ad\uc81c"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," remote ",(0,c.jsx)(s.span,{className:"token function",children:"add"})," origin ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"URL",(0,c.jsx)(s.span,{className:"token operator",children:">"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," remote set-url origin ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"URL",(0,c.jsx)(s.span,{className:"token operator",children:">"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," remote remove origin\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"# \uc6d0\uaca9 \uc800\uc7a5\uc18c\uc640 \ub3d9\uae30\ud654"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," fetch origin\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," pull origin ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"\ube0c\ub79c\uce58\uba85",(0,c.jsx)(s.span,{className:"token operator",children:">"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," push origin ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"\ube0c\ub79c\uce58\uba85",(0,c.jsx)(s.span,{className:"token operator",children:">"}),"\n"]})}),"\n",(0,c.jsx)(s.h3,{id:"\uace0\uae09-\uc791\uc5c5",children:"\uace0\uae09 \uc791\uc5c5"}),"\n",(0,c.jsx)(s.pre,{className:"language-bash",children:(0,c.jsxs)(s.code,{className:"language-bash",children:[(0,c.jsx)(s.span,{className:"token comment",children:"# \uac15\uc81c \ud478\uc2dc (\uc8fc\uc758!)"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," push -f origin ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"\ube0c\ub79c\uce58\uba85",(0,c.jsx)(s.span,{className:"token operator",children:">"}),"\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"# \ud0dc\uadf8 \uad00\ub9ac"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," tag ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"\ud0dc\uadf8\uba85",(0,c.jsx)(s.span,{className:"token operator",children:">"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," tag -a ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"\ud0dc\uadf8\uba85",(0,c.jsx)(s.span,{className:"token operator",children:">"})," -m ",(0,c.jsx)(s.span,{className:"token string",children:'"\uba54\uc2dc\uc9c0"'}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," push origin ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"\ud0dc\uadf8\uba85",(0,c.jsx)(s.span,{className:"token operator",children:">"}),"\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"# \uc6d0\uaca9 \ube0c\ub79c\uce58 \uc0ad\uc81c"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," push origin --delete ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"\ube0c\ub79c\uce58\uba85",(0,c.jsx)(s.span,{className:"token operator",children:">"}),"\n"]})}),"\n",(0,c.jsx)(s.h2,{id:"5-\uc791\uc5c5-\ub0b4\uc6a9-\uc784\uc2dc-\uc800\uc7a5-stash",children:"5. \uc791\uc5c5 \ub0b4\uc6a9 \uc784\uc2dc \uc800\uc7a5 (Stash)"}),"\n",(0,c.jsx)(s.pre,{className:"language-bash",children:(0,c.jsxs)(s.code,{className:"language-bash",children:[(0,c.jsx)(s.span,{className:"token comment",children:"# \uc791\uc5c5 \uc784\uc2dc \uc800\uc7a5"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," stash save ",(0,c.jsx)(s.span,{className:"token string",children:'"\uba54\uc2dc\uc9c0"'}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," stash push -m ",(0,c.jsx)(s.span,{className:"token string",children:'"\uba54\uc2dc\uc9c0"'}),"\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"# stash \ubaa9\ub85d \ud655\uc778"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," stash list\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"# stash \uc801\uc6a9"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," stash pop       ",(0,c.jsx)(s.span,{className:"token comment",children:"# \uc801\uc6a9 \ud6c4 \uc0ad\uc81c"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," stash apply     ",(0,c.jsx)(s.span,{className:"token comment",children:"# \uc801\uc6a9\ub9cc"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," stash drop      ",(0,c.jsx)(s.span,{className:"token comment",children:"# \uc0ad\uc81c\ub9cc"}),"\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"# \ud2b9\uc815 stash \uc801\uc6a9"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," stash apply stash@",(0,c.jsx)(s.span,{className:"token punctuation",children:"{"}),"n",(0,c.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,c.jsx)(s.h2,{id:"6-\ud788\uc2a4\ud1a0\ub9ac-\uad00\ub9ac",children:"6. \ud788\uc2a4\ud1a0\ub9ac \uad00\ub9ac"}),"\n",(0,c.jsx)(s.h3,{id:"\ub85c\uadf8-\ud655\uc778",children:"\ub85c\uadf8 \ud655\uc778"}),"\n",(0,c.jsx)(s.pre,{className:"language-bash",children:(0,c.jsxs)(s.code,{className:"language-bash",children:[(0,c.jsx)(s.span,{className:"token comment",children:"# \ucee4\ubc0b \uc774\ub825 \uc870\ud68c"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," log\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," log --oneline  ",(0,c.jsx)(s.span,{className:"token comment",children:"# \ud55c \uc904\ub85c"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," log --graph    ",(0,c.jsx)(s.span,{className:"token comment",children:"# \uadf8\ub798\ud504\ub85c"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," log --author",(0,c.jsx)(s.span,{className:"token operator",children:"="}),(0,c.jsx)(s.span,{className:"token string",children:'"\uc0ac\uc6a9\uc790\uba85"'}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," log --since",(0,c.jsx)(s.span,{className:"token operator",children:"="}),(0,c.jsx)(s.span,{className:"token string",children:'"1 week ago"'}),"\n"]})}),"\n",(0,c.jsx)(s.h3,{id:"\ub418\ub3cc\ub9ac\uae30",children:"\ub418\ub3cc\ub9ac\uae30"}),"\n",(0,c.jsx)(s.pre,{className:"language-bash",children:(0,c.jsxs)(s.code,{className:"language-bash",children:[(0,c.jsx)(s.span,{className:"token comment",children:"# \ub9c8\uc9c0\ub9c9 \ucee4\ubc0b \uc218\uc815"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," commit --amend\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"# \ud2b9\uc815 \ucee4\ubc0b\uc73c\ub85c \ub418\ub3cc\ub9ac\uae30"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," reset --soft ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"\ucee4\ubc0b\ud574\uc2dc",(0,c.jsx)(s.span,{className:"token operator",children:">"}),"   ",(0,c.jsx)(s.span,{className:"token comment",children:"# \ubcc0\uacbd\uc0ac\ud56d \ubcf4\uc874"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," reset --hard ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"\ucee4\ubc0b\ud574\uc2dc",(0,c.jsx)(s.span,{className:"token operator",children:">"}),"   ",(0,c.jsx)(s.span,{className:"token comment",children:"# \ubcc0\uacbd\uc0ac\ud56d \uc0ad\uc81c"}),"\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"# \ud2b9\uc815 \ucee4\ubc0b \ucde8\uc18c"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," revert ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"\ucee4\ubc0b\ud574\uc2dc",(0,c.jsx)(s.span,{className:"token operator",children:">"}),"\n"]})}),"\n",(0,c.jsx)(s.h2,{id:"7-\ubb38\uc81c-\ud574\uacb0",children:"7. \ubb38\uc81c \ud574\uacb0"}),"\n",(0,c.jsx)(s.pre,{className:"language-bash",children:(0,c.jsxs)(s.code,{className:"language-bash",children:[(0,c.jsx)(s.span,{className:"token comment",children:"# \ucda9\ub3cc \ud30c\uc77c \ud655\uc778"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," status\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," ",(0,c.jsx)(s.span,{className:"token function",children:"diff"})," --name-only --diff-filter",(0,c.jsx)(s.span,{className:"token operator",children:"="}),"U\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"# \uc800\uc7a5\uc18c \ucd5c\uc801\ud654"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," gc\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," prune\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"# \uc190\uc0c1\ub41c \uc800\uc7a5\uc18c \ubcf5\uad6c"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," ",(0,c.jsx)(s.span,{className:"token function",children:"fsck"}),"\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"# \ud30c\uc77c \ubcf5\uad6c"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," checkout ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"\ucee4\ubc0b\ud574\uc2dc",(0,c.jsx)(s.span,{className:"token operator",children:">"})," -- ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"\ud30c\uc77c\uba85",(0,c.jsx)(s.span,{className:"token operator",children:">"}),"\n"]})}),"\n",(0,c.jsx)(s.h2,{id:"8-gitignore-\uc124\uc815",children:"8. .gitignore \uc124\uc815"}),"\n",(0,c.jsx)(s.pre,{className:"language-bash",children:(0,c.jsxs)(s.code,{className:"language-bash",children:[(0,c.jsx)(s.span,{className:"token comment",children:"# \uae30\ubcf8\uc801\uc778 \uc81c\uc678 \ud328\ud134"}),"\nnode_modules/\n*.log\n.env\n.DS_Store\ndist/\nbuild/\n\n",(0,c.jsx)(s.span,{className:"token comment",children:"# \uc774\ubbf8 \ucd94\uc801 \uc911\uc778 \ud30c\uc77c\uc744 \uc81c\uc678\ud558\ub824\uba74"}),"\n",(0,c.jsx)(s.span,{className:"token function",children:"git"})," ",(0,c.jsx)(s.span,{className:"token function",children:"rm"})," --cached ",(0,c.jsx)(s.span,{className:"token operator",children:"<"}),"\ud30c\uc77c\uba85",(0,c.jsx)(s.span,{className:"token operator",children:">"}),"\n"]})})]})}function d(n={}){const{wrapper:s}={...(0,t.R)(),...n.components};return s?(0,c.jsx)(s,{...n,children:(0,c.jsx)(m,{...n})}):m(n)}},28453:(n,s,e)=>{e.d(s,{R:()=>o,x:()=>l});var a=e(96540);const c={},t=a.createContext(c);function o(n){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function l(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:o(n.components),a.createElement(t.Provider,{value:s},n.children)}}}]);