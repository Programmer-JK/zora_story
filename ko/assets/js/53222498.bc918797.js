"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[730],{5251:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>g});var t=i(4848),s=i(8453);const l={},a=void 0,r={id:"\ud615\uc0c1\uad00\ub9ac/Git \uba85\ub839\uc5b4",title:"Git \uba85\ub839\uc5b4",description:"\uc791\uc131\uc77c : 2024.12.25",source:"@site/docs/03. \ud615\uc0c1\uad00\ub9ac/039901. Git \uba85\ub839\uc5b4.md",sourceDirName:"03. \ud615\uc0c1\uad00\ub9ac",slug:"/\ud615\uc0c1\uad00\ub9ac/Git \uba85\ub839\uc5b4",permalink:"/zora_story/ko/docs/\ud615\uc0c1\uad00\ub9ac/Git \uba85\ub839\uc5b4",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:39901,frontMatter:{},sidebar:"studySidebar",previous:{title:"husky",permalink:"/zora_story/ko/docs/\uac1c\ubc1c\ud658\uacbd/husky"},next:{title:"\ub124\ud2b8\uc6cc\ud06c \uae30\ucd08",permalink:"/zora_story/ko/docs/Network/\ub124\ud2b8\uc6cc\ud06c \uae30\ucd08"}},c={},g=[{value:"1. Git \ucd08\uae30 \uc124\uc815",id:"1-git-\ucd08\uae30-\uc124\uc815",level:2},{value:"\uae30\ubcf8 \uc124\uc815",id:"\uae30\ubcf8-\uc124\uc815",level:3},{value:"\uc800\uc7a5\uc18c \uc0dd\uc131",id:"\uc800\uc7a5\uc18c-\uc0dd\uc131",level:3},{value:"2. \ud30c\uc77c \uad00\ub9ac",id:"2-\ud30c\uc77c-\uad00\ub9ac",level:2},{value:"\uae30\ubcf8 \uba85\ub839\uc5b4",id:"\uae30\ubcf8-\uba85\ub839\uc5b4",level:3},{value:"\ubcc0\uacbd\uc0ac\ud56d \uad00\ub9ac",id:"\ubcc0\uacbd\uc0ac\ud56d-\uad00\ub9ac",level:3},{value:"3. \ube0c\ub79c\uce58 \uad00\ub9ac",id:"3-\ube0c\ub79c\uce58-\uad00\ub9ac",level:2},{value:"\uae30\ubcf8 \uc791\uc5c5",id:"\uae30\ubcf8-\uc791\uc5c5",level:3},{value:"\ubcd1\ud569 \uc791\uc5c5",id:"\ubcd1\ud569-\uc791\uc5c5",level:3},{value:"4. \uc6d0\uaca9 \uc800\uc7a5\uc18c \uad00\ub9ac",id:"4-\uc6d0\uaca9-\uc800\uc7a5\uc18c-\uad00\ub9ac",level:2},{value:"\uae30\ubcf8 \uc791\uc5c5",id:"\uae30\ubcf8-\uc791\uc5c5-1",level:3},{value:"\uace0\uae09 \uc791\uc5c5",id:"\uace0\uae09-\uc791\uc5c5",level:3},{value:"5. \uc791\uc5c5 \ub0b4\uc6a9 \uc784\uc2dc \uc800\uc7a5 (Stash)",id:"5-\uc791\uc5c5-\ub0b4\uc6a9-\uc784\uc2dc-\uc800\uc7a5-stash",level:2},{value:"6. \ud788\uc2a4\ud1a0\ub9ac \uad00\ub9ac",id:"6-\ud788\uc2a4\ud1a0\ub9ac-\uad00\ub9ac",level:2},{value:"\ub85c\uadf8 \ud655\uc778",id:"\ub85c\uadf8-\ud655\uc778",level:3},{value:"\ub418\ub3cc\ub9ac\uae30",id:"\ub418\ub3cc\ub9ac\uae30",level:3},{value:"7. \ubb38\uc81c \ud574\uacb0",id:"7-\ubb38\uc81c-\ud574\uacb0",level:2},{value:"8. .gitignore \uc124\uc815",id:"8-gitignore-\uc124\uc815",level:2}];function o(n){const e={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"\uc791\uc131\uc77c : 2024.12.25"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"1-git-\ucd08\uae30-\uc124\uc815",children:"1. Git \ucd08\uae30 \uc124\uc815"}),"\n",(0,t.jsx)(e.h3,{id:"\uae30\ubcf8-\uc124\uc815",children:"\uae30\ubcf8 \uc124\uc815"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'# \uc0ac\uc6a9\uc790 \uc815\ubcf4 \uc124\uc815\ngit config --global user.name "Your Name"\ngit config --global user.email "your.email@example.com"\n\n# \uae30\ubcf8 \ube0c\ub79c\uce58\uba85 \uc124\uc815\ngit config --global init.defaultBranch main\n\n# \uc904\ubc14\uafc8 \uc124\uc815\ngit config --global core.autocrlf true  # Windows\ngit config --global core.autocrlf input # Mac/Linux\n\n# \uc790\uc8fc \uc4f0\ub294 \uba85\ub839\uc5b4 \ub2e8\ucd95\ud0a4 \uc124\uc815\ngit config --global alias.co checkout\ngit config --global alias.br branch\ngit config --global alias.ci commit\ngit config --global alias.st status\n'})}),"\n",(0,t.jsx)(e.h3,{id:"\uc800\uc7a5\uc18c-\uc0dd\uc131",children:"\uc800\uc7a5\uc18c \uc0dd\uc131"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'# \uc0c8 \uc800\uc7a5\uc18c \uc0dd\uc131\ngit init\n\n# \uc6d0\uaca9 \uc800\uc7a5\uc18c \ubcf5\uc81c\ngit clone <repository-url>\n\n# \uae30\uc874 \ud504\ub85c\uc81d\ud2b8\uc640 \uc6d0\uaca9 \uc800\uc7a5\uc18c \uc5f0\uacb0\ncd existing-project\ngit init\ngit remote add origin <repository-url>\ngit add .\ngit commit -m "Initial commit"\ngit push -u origin main\n'})}),"\n",(0,t.jsx)(e.h2,{id:"2-\ud30c\uc77c-\uad00\ub9ac",children:"2. \ud30c\uc77c \uad00\ub9ac"}),"\n",(0,t.jsx)(e.h3,{id:"\uae30\ubcf8-\uba85\ub839\uc5b4",children:"\uae30\ubcf8 \uba85\ub839\uc5b4"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'# \ud30c\uc77c \uc0c1\ud0dc \ud655\uc778\ngit status\ngit status -s  # \uac04\ub2e8\ud788 \ubcf4\uae30\n\n# \ud30c\uc77c \ucd94\uc801\ngit add <\ud30c\uc77c\uba85>\ngit add .      # \ubaa8\ub4e0 \ubcc0\uacbd\uc0ac\ud56d\ngit add *.js   # \ud2b9\uc815 \ud655\uc7a5\uc790\ub9cc\n\n# \ud30c\uc77c \ucee4\ubc0b\ngit commit -m "\ucee4\ubc0b \uba54\uc2dc\uc9c0"\ngit commit -am "\ucee4\ubc0b \uba54\uc2dc\uc9c0"  # add + commit\n\n# \ud30c\uc77c \uc0ad\uc81c\ngit rm <\ud30c\uc77c\uba85>\ngit rm --cached <\ud30c\uc77c\uba85>  # \uc6d0\uaca9 \uc800\uc7a5\uc18c\uc5d0\uc11c\ub9cc \uc0ad\uc81c\n'})}),"\n",(0,t.jsx)(e.h3,{id:"\ubcc0\uacbd\uc0ac\ud56d-\uad00\ub9ac",children:"\ubcc0\uacbd\uc0ac\ud56d \uad00\ub9ac"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"# \ubcc0\uacbd\uc0ac\ud56d \ud655\uc778\ngit diff\ngit diff --staged  # \uc2a4\ud14c\uc774\uc9d5\ub41c \ubcc0\uacbd\uc0ac\ud56d\ngit diff <\ube0c\ub79c\uce581> <\ube0c\ub79c\uce582>\n\n# \ud30c\uc77c \uc774\ub825 \uc870\ud68c\ngit log -p <\ud30c\uc77c\uba85>\ngit blame <\ud30c\uc77c\uba85>\ngit show <\ucee4\ubc0b\ud574\uc2dc>\n"})}),"\n",(0,t.jsx)(e.h2,{id:"3-\ube0c\ub79c\uce58-\uad00\ub9ac",children:"3. \ube0c\ub79c\uce58 \uad00\ub9ac"}),"\n",(0,t.jsx)(e.h3,{id:"\uae30\ubcf8-\uc791\uc5c5",children:"\uae30\ubcf8 \uc791\uc5c5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"# \ube0c\ub79c\uce58 \ubaa9\ub85d\ngit branch          # \ub85c\uceec\ngit branch -r       # \uc6d0\uaca9\ngit branch -a       # \ubaa8\ub450\n\n# \ube0c\ub79c\uce58 \uc0dd\uc131\ngit branch <\ube0c\ub79c\uce58\uba85>\ngit checkout -b <\ube0c\ub79c\uce58\uba85>\ngit switch -c <\ube0c\ub79c\uce58\uba85>  # \ucd5c\uc2e0 \ubb38\ubc95\n\n# \ube0c\ub79c\uce58 \uc804\ud658\ngit checkout <\ube0c\ub79c\uce58\uba85>\ngit switch <\ube0c\ub79c\uce58\uba85>\n\n# \ube0c\ub79c\uce58 \uc0ad\uc81c\ngit branch -d <\ube0c\ub79c\uce58\uba85>\ngit branch -D <\ube0c\ub79c\uce58\uba85>  # \uac15\uc81c \uc0ad\uc81c\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\ubcd1\ud569-\uc791\uc5c5",children:"\ubcd1\ud569 \uc791\uc5c5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"# \ube0c\ub79c\uce58 \ubcd1\ud569\ngit merge <\ube0c\ub79c\uce58\uba85>\ngit merge --no-ff <\ube0c\ub79c\uce58\uba85>  # fast-forward \ud558\uc9c0 \uc54a\uc74c\n\n# \ucda9\ub3cc \ud574\uacb0\ngit merge --abort  # \ubcd1\ud569 \ucde8\uc18c\ngit reset --hard HEAD  # \ubcd1\ud569 \uc804\uc73c\ub85c \ub418\ub3cc\ub9ac\uae30\n\n# \ud2b9\uc815 \ucee4\ubc0b\ub9cc \uac00\uc838\uc624\uae30\ngit cherry-pick <\ucee4\ubc0b\ud574\uc2dc>\n"})}),"\n",(0,t.jsx)(e.h2,{id:"4-\uc6d0\uaca9-\uc800\uc7a5\uc18c-\uad00\ub9ac",children:"4. \uc6d0\uaca9 \uc800\uc7a5\uc18c \uad00\ub9ac"}),"\n",(0,t.jsx)(e.h3,{id:"\uae30\ubcf8-\uc791\uc5c5-1",children:"\uae30\ubcf8 \uc791\uc5c5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"# \uc6d0\uaca9 \uc800\uc7a5\uc18c \ud655\uc778\ngit remote -v\n\n# \uc6d0\uaca9 \uc800\uc7a5\uc18c \ucd94\uac00/\uc218\uc815/\uc0ad\uc81c\ngit remote add origin <URL>\ngit remote set-url origin <URL>\ngit remote remove origin\n\n# \uc6d0\uaca9 \uc800\uc7a5\uc18c\uc640 \ub3d9\uae30\ud654\ngit fetch origin\ngit pull origin <\ube0c\ub79c\uce58\uba85>\ngit push origin <\ube0c\ub79c\uce58\uba85>\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\uace0\uae09-\uc791\uc5c5",children:"\uace0\uae09 \uc791\uc5c5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'# \uac15\uc81c \ud478\uc2dc (\uc8fc\uc758!)\ngit push -f origin <\ube0c\ub79c\uce58\uba85>\n\n# \ud0dc\uadf8 \uad00\ub9ac\ngit tag <\ud0dc\uadf8\uba85>\ngit tag -a <\ud0dc\uadf8\uba85> -m "\uba54\uc2dc\uc9c0"\ngit push origin <\ud0dc\uadf8\uba85>\n\n# \uc6d0\uaca9 \ube0c\ub79c\uce58 \uc0ad\uc81c\ngit push origin --delete <\ube0c\ub79c\uce58\uba85>\n'})}),"\n",(0,t.jsx)(e.h2,{id:"5-\uc791\uc5c5-\ub0b4\uc6a9-\uc784\uc2dc-\uc800\uc7a5-stash",children:"5. \uc791\uc5c5 \ub0b4\uc6a9 \uc784\uc2dc \uc800\uc7a5 (Stash)"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'# \uc791\uc5c5 \uc784\uc2dc \uc800\uc7a5\ngit stash save "\uba54\uc2dc\uc9c0"\ngit stash push -m "\uba54\uc2dc\uc9c0"\n\n# stash \ubaa9\ub85d \ud655\uc778\ngit stash list\n\n# stash \uc801\uc6a9\ngit stash pop       # \uc801\uc6a9 \ud6c4 \uc0ad\uc81c\ngit stash apply     # \uc801\uc6a9\ub9cc\ngit stash drop      # \uc0ad\uc81c\ub9cc\n\n# \ud2b9\uc815 stash \uc801\uc6a9\ngit stash apply stash@{n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"6-\ud788\uc2a4\ud1a0\ub9ac-\uad00\ub9ac",children:"6. \ud788\uc2a4\ud1a0\ub9ac \uad00\ub9ac"}),"\n",(0,t.jsx)(e.h3,{id:"\ub85c\uadf8-\ud655\uc778",children:"\ub85c\uadf8 \ud655\uc778"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'# \ucee4\ubc0b \uc774\ub825 \uc870\ud68c\ngit log\ngit log --oneline  # \ud55c \uc904\ub85c\ngit log --graph    # \uadf8\ub798\ud504\ub85c\ngit log --author="\uc0ac\uc6a9\uc790\uba85"\ngit log --since="1 week ago"\n'})}),"\n",(0,t.jsx)(e.h3,{id:"\ub418\ub3cc\ub9ac\uae30",children:"\ub418\ub3cc\ub9ac\uae30"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"# \ub9c8\uc9c0\ub9c9 \ucee4\ubc0b \uc218\uc815\ngit commit --amend\n\n# \ud2b9\uc815 \ucee4\ubc0b\uc73c\ub85c \ub418\ub3cc\ub9ac\uae30\ngit reset --soft <\ucee4\ubc0b\ud574\uc2dc>   # \ubcc0\uacbd\uc0ac\ud56d \ubcf4\uc874\ngit reset --hard <\ucee4\ubc0b\ud574\uc2dc>   # \ubcc0\uacbd\uc0ac\ud56d \uc0ad\uc81c\n\n# \ud2b9\uc815 \ucee4\ubc0b \ucde8\uc18c\ngit revert <\ucee4\ubc0b\ud574\uc2dc>\n"})}),"\n",(0,t.jsx)(e.h2,{id:"7-\ubb38\uc81c-\ud574\uacb0",children:"7. \ubb38\uc81c \ud574\uacb0"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"# \ucda9\ub3cc \ud30c\uc77c \ud655\uc778\ngit status\ngit diff --name-only --diff-filter=U\n\n# \uc800\uc7a5\uc18c \ucd5c\uc801\ud654\ngit gc\ngit prune\n\n# \uc190\uc0c1\ub41c \uc800\uc7a5\uc18c \ubcf5\uad6c\ngit fsck\n\n# \ud30c\uc77c \ubcf5\uad6c\ngit checkout <\ucee4\ubc0b\ud574\uc2dc> -- <\ud30c\uc77c\uba85>\n"})}),"\n",(0,t.jsx)(e.h2,{id:"8-gitignore-\uc124\uc815",children:"8. .gitignore \uc124\uc815"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"# \uae30\ubcf8\uc801\uc778 \uc81c\uc678 \ud328\ud134\nnode_modules/\n*.log\n.env\n.DS_Store\ndist/\nbuild/\n\n# \uc774\ubbf8 \ucd94\uc801 \uc911\uc778 \ud30c\uc77c\uc744 \uc81c\uc678\ud558\ub824\uba74\ngit rm --cached <\ud30c\uc77c\uba85>\n"})})]})}function d(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>a,x:()=>r});var t=i(6540);const s={},l=t.createContext(s);function a(n){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);