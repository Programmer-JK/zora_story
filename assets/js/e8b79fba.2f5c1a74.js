"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[4335],{5606:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var t=e(4848),o=e(8453);const r={},l=void 0,c={id:"Network/CentOS mysql \uc124\uce58",title:"CentOS mysql \uc124\uce58",description:"\uc791\uc131\uc77c : 2024.12.05",source:"@site/docs/Network/CentOS mysql \uc124\uce58.md",sourceDirName:"Network",slug:"/Network/CentOS mysql \uc124\uce58",permalink:"/zora_story/docs/Network/CentOS mysql \uc124\uce58",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"studySidebar",previous:{title:"CentOS PHP \uc124\uce58 \ud655\uc778",permalink:"/zora_story/docs/Network/CentOS PHP \uc124\uce58 \ud655\uc778"},next:{title:"MySQL \ubcf5\uc81c \uc124\uc815 \uc885\ud569 \uac00\uc774\ub4dc",permalink:"/zora_story/docs/Network/DB replication"}},d={},i=[];function a(n){const s={blockquote:"blockquote",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"\uc791\uc131\uc77c : 2024.12.05"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"MySQL 5.5.50 \uc18c\uc2a4\ucf54\ub4dc \uc124\uce58 \uac00\uc774\ub4dc\ub97c \uc815\ub9ac\ud574\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"\uae30\ubcf8 \uc900\ube44"})}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'# \uac1c\ubc1c\ub3c4\uad6c \uc124\uce58\nsudo yum groupinstall "Development Tools"\nsudo yum install cmake ncurses-devel\n\n# MySQL \uacc4\uc815 \uc0dd\uc131\nsudo groupadd mysql\nsudo useradd -r -g mysql -s /bin/false mysql\n'})}),"\n",(0,t.jsxs)(s.ol,{start:"2",children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"\uc124\uce58 \uacfc\uc815"})}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"# \uc555\ucd95\ud574\uc81c\ntar xvf mysql-5.5.50.tar.gz\ncd mysql-5.5.50\n\n# \ucef4\ud30c\uc77c \uc124\uc815 \ubc0f \uc124\uce58\ncmake . -DCMAKE_INSTALL_PREFIX=/usr/local/mysql \\\n-DMYSQL_DATADIR=/usr/local/mysql/data \\\n-DSYSCONFDIR=/etc \\\n-DWITH_INNOBASE_STORAGE_ENGINE=1 \\\n-DDEFAULT_CHARSET=utf8\n\n# \ucef4\ud30c\uc77c \ubc0f \uc124\uce58 \uc2e4\ud589\nmake\nsudo make install\n"})}),"\n",(0,t.jsxs)(s.ol,{start:"3",children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"\uc124\uce58 \ud6c4 \uc124\uc815"})}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"# \ub514\ub809\ud1a0\ub9ac \uad8c\ud55c \uc124\uc815\ncd /usr/local/mysql\nsudo chown -R mysql .\nsudo chgrp -R mysql .\nsudo scripts/mysql_install_db --user=mysql\nsudo chown -R root .\nsudo chown -R mysql data\n\n# \uc124\uc815 \ud30c\uc77c \ubcf5\uc0ac\nsudo cp support-files/my-medium.cnf /etc/my.cnf\n\n# \uc11c\ube44\uc2a4 \ub4f1\ub85d\nsudo cp support-files/mysql.server /etc/init.d/mysql\nsudo chmod +x /etc/init.d/mysql\nsudo chkconfig --add mysql\n\n# MySQL \uc2dc\uc791\nsudo service mysql start\n\n# \ud658\uacbd\ubcc0\uc218 \uc124\uc815\necho 'export PATH=$PATH:/usr/local/mysql/bin' >> ~/.bash_profile\nsource ~/.bash_profile\n"})})]})}function u(n={}){const{wrapper:s}={...(0,o.R)(),...n.components};return s?(0,t.jsx)(s,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},8453:(n,s,e)=>{e.d(s,{R:()=>l,x:()=>c});var t=e(6540);const o={},r=t.createContext(o);function l(n){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function c(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:l(n.components),t.createElement(r.Provider,{value:s},n.children)}}}]);