"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[2438],{6986:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>a,contentTitle:()=>d,default:()=>x,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var s=l(4848),i=l(8453);const r={},d="MySQL \ubcf5\uc81c \uc124\uc815 \uc885\ud569 \uac00\uc774\ub4dc",c={id:"Network/DB replication",title:"MySQL \ubcf5\uc81c \uc124\uc815 \uc885\ud569 \uac00\uc774\ub4dc",description:"\uc791\uc131\uc77c : 2024.12.04",source:"@site/docs/Network/DB replication.md",sourceDirName:"Network",slug:"/Network/DB replication",permalink:"/zora_story/docs/Network/DB replication",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"studySidebar",previous:{title:"CentOS mysql \uc124\uce58",permalink:"/zora_story/docs/Network/CentOS mysql \uc124\uce58"},next:{title:"LAMP \uc2a4\ud0dd \uc124\uce58 \ubc0f \uad6c\uc131 \uac00\uc774\ub4dc",permalink:"/zora_story/docs/Network/LAMP \uc2a4\ud0dd \uc124\uce58 \ubc0f \uad6c\uc131 \uac00\uc774\ub4dc"}},a={},h=[{value:"1. Master \uc11c\ubc84 \uc124\uc815",id:"1-master-\uc11c\ubc84-\uc124\uc815",level:2},{value:"1.1 MySQL \uc124\uc815 \ud30c\uc77c \uc218\uc815",id:"11-mysql-\uc124\uc815-\ud30c\uc77c-\uc218\uc815",level:3},{value:"2. Slave \uc11c\ubc84 \uc124\uc815",id:"2-slave-\uc11c\ubc84-\uc124\uc815",level:2},{value:"2.1 MySQL \uc124\uc815 \ud30c\uc77c \uc218\uc815",id:"21-mysql-\uc124\uc815-\ud30c\uc77c-\uc218\uc815",level:3},{value:"3. \ubcf5\uc81c \uad6c\uc131",id:"3-\ubcf5\uc81c-\uad6c\uc131",level:2},{value:"3.1 \ubcf5\uc81c \uc0ac\uc6a9\uc790 \uc0dd\uc131 \ubc0f \uad8c\ud55c \uc124\uc815 (Master\uc5d0\uc11c)",id:"31-\ubcf5\uc81c-\uc0ac\uc6a9\uc790-\uc0dd\uc131-\ubc0f-\uad8c\ud55c-\uc124\uc815-master\uc5d0\uc11c",level:3},{value:"3.2 \ub370\uc774\ud130 \ub3d9\uae30\ud654",id:"32-\ub370\uc774\ud130-\ub3d9\uae30\ud654",level:3},{value:"3.3 Slave \ubcf5\uc81c \uc124\uc815",id:"33-slave-\ubcf5\uc81c-\uc124\uc815",level:3},{value:"4. \ubcf5\uc81c \uc0c1\ud0dc \ubaa8\ub2c8\ud130\ub9c1 \ubc0f \ubb38\uc81c \ud574\uacb0",id:"4-\ubcf5\uc81c-\uc0c1\ud0dc-\ubaa8\ub2c8\ud130\ub9c1-\ubc0f-\ubb38\uc81c-\ud574\uacb0",level:2},{value:"4.1 \uc0c1\ud0dc \ud655\uc778 \uba85\ub839\uc5b4",id:"41-\uc0c1\ud0dc-\ud655\uc778-\uba85\ub839\uc5b4",level:3},{value:"4.2 \uc8fc\uc694 \ud655\uc778 \uc0ac\ud56d",id:"42-\uc8fc\uc694-\ud655\uc778-\uc0ac\ud56d",level:3},{value:"4.3 \ubcf5\uc81c \ub3d9\uc791 \ud14c\uc2a4\ud2b8",id:"43-\ubcf5\uc81c-\ub3d9\uc791-\ud14c\uc2a4\ud2b8",level:3},{value:"4.4 \ubb38\uc81c \ud574\uacb0",id:"44-\ubb38\uc81c-\ud574\uacb0",level:3},{value:"Error 13117 (\ubc14\uc774\ub108\ub9ac \ub85c\uadf8 \uad00\ub828)",id:"error-13117-\ubc14\uc774\ub108\ub9ac-\ub85c\uadf8-\uad00\ub828",level:4},{value:"Server-id \ucda9\ub3cc",id:"server-id-\ucda9\ub3cc",level:4},{value:"4.5 \uc624\ub958 \ub85c\uadf8 \ud655\uc778",id:"45-\uc624\ub958-\ub85c\uadf8-\ud655\uc778",level:3},{value:"4.6 \ubcf5\uc81c \uc7ac\uc2dc\uc791 \uc808\ucc28",id:"46-\ubcf5\uc81c-\uc7ac\uc2dc\uc791-\uc808\ucc28",level:3},{value:"5. Binary \ub85c\uadf8 \uad00\ub9ac",id:"5-binary-\ub85c\uadf8-\uad00\ub9ac",level:2},{value:"5.1 \ub85c\uadf8 \uc720\ud6a8\uae30\uac04 \ud655\uc778 \ubc0f \uc124\uc815",id:"51-\ub85c\uadf8-\uc720\ud6a8\uae30\uac04-\ud655\uc778-\ubc0f-\uc124\uc815",level:3},{value:"5.2 \uc601\uad6c \uc124\uc815 \ubcc0\uacbd",id:"52-\uc601\uad6c-\uc124\uc815-\ubcc0\uacbd",level:3},{value:"5.3 \ub85c\uadf8 \ud30c\uc77c \uad00\ub9ac",id:"53-\ub85c\uadf8-\ud30c\uc77c-\uad00\ub9ac",level:3},{value:"5.4 \uad8c\uc7a5 \uc124\uc815",id:"54-\uad8c\uc7a5-\uc124\uc815",level:3},{value:"5.5 \uc8fc\uc758\uc0ac\ud56d",id:"55-\uc8fc\uc758\uc0ac\ud56d",level:3},{value:"6. \uc911\uc694 \ucc38\uace0\uc0ac\ud56d",id:"6-\uc911\uc694-\ucc38\uace0\uc0ac\ud56d",level:2},{value:"7. \ubaa8\ubc94 \uc0ac\ub840",id:"7-\ubaa8\ubc94-\uc0ac\ub840",level:2}];function o(n){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"mysql-\ubcf5\uc81c-\uc124\uc815-\uc885\ud569-\uac00\uc774\ub4dc",children:"MySQL \ubcf5\uc81c \uc124\uc815 \uc885\ud569 \uac00\uc774\ub4dc"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\uc791\uc131\uc77c : 2024.12.04"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"1-master-\uc11c\ubc84-\uc124\uc815",children:"1. Master \uc11c\ubc84 \uc124\uc815"}),"\n",(0,s.jsx)(e.h3,{id:"11-mysql-\uc124\uc815-\ud30c\uc77c-\uc218\uc815",children:"1.1 MySQL \uc124\uc815 \ud30c\uc77c \uc218\uc815"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# MySQL \uc124\uc815 \ud30c\uc77c \uc218\uc815\nsudo nano /etc/mysql/mysql.conf.d/mysqld.cnf\n\n# \ub2e4\uc74c \ub0b4\uc6a9 \ucd94\uac00/\uc218\uc815\nbind-address = 0.0.0.0\nserver-id = 1\nlog_bin = /var/log/mysql/mysql-bin.log\n"})}),"\n",(0,s.jsx)(e.h2,{id:"2-slave-\uc11c\ubc84-\uc124\uc815",children:"2. Slave \uc11c\ubc84 \uc124\uc815"}),"\n",(0,s.jsx)(e.h3,{id:"21-mysql-\uc124\uc815-\ud30c\uc77c-\uc218\uc815",children:"2.1 MySQL \uc124\uc815 \ud30c\uc77c \uc218\uc815"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# MySQL \uc124\uc815 \ud30c\uc77c \uc218\uc815\nsudo nano /etc/mysql/mysql.conf.d/mysqld.cnf\n\n# \ub2e4\uc74c \ub0b4\uc6a9 \ucd94\uac00/\uc218\uc815\nserver-id = 2\nlog_bin = /var/log/mysql/mysql-bin.log\n"})}),"\n",(0,s.jsx)(e.h2,{id:"3-\ubcf5\uc81c-\uad6c\uc131",children:"3. \ubcf5\uc81c \uad6c\uc131"}),"\n",(0,s.jsx)(e.h3,{id:"31-\ubcf5\uc81c-\uc0ac\uc6a9\uc790-\uc0dd\uc131-\ubc0f-\uad8c\ud55c-\uc124\uc815-master\uc5d0\uc11c",children:"3.1 \ubcf5\uc81c \uc0ac\uc6a9\uc790 \uc0dd\uc131 \ubc0f \uad8c\ud55c \uc124\uc815 (Master\uc5d0\uc11c)"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"CREATE USER 'repl_user'@'%' IDENTIFIED BY '\ube44\ubc00\ubc88\ud638';\nGRANT REPLICATION SLAVE ON *.* TO 'repl_user'@'%';\nFLUSH PRIVILEGES;\n"})}),"\n",(0,s.jsx)(e.h3,{id:"32-\ub370\uc774\ud130-\ub3d9\uae30\ud654",children:"3.2 \ub370\uc774\ud130 \ub3d9\uae30\ud654"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# Master\uc5d0\uc11c \ub364\ud504 \uc0dd\uc131\nmysqldump -u root -p --all-databases --master-data > dbdump.sql\n\n# Slave\ub85c \ub364\ud504 \ud30c\uc77c \uc804\uc1a1\nscp dbdump.sql slave\uc11c\ubc84:/tmp/\n\n# Slave\uc5d0\uc11c \ub364\ud504 \ubcf5\uc6d0\nmysql -u root -p < /tmp/dbdump.sql\n"})}),"\n",(0,s.jsx)(e.h3,{id:"33-slave-\ubcf5\uc81c-\uc124\uc815",children:"3.3 Slave \ubcf5\uc81c \uc124\uc815"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"-- Master \uc0c1\ud0dc \ud655\uc778\nSHOW MASTER STATUS;\n\n-- Slave\uc5d0\uc11c \ubcf5\uc81c \uc124\uc815\nCHANGE MASTER TO\n    MASTER_HOST='\ub9c8\uc2a4\ud130IP',\n    MASTER_USER='repl_user',\n    MASTER_PASSWORD='\ube44\ubc00\ubc88\ud638',\n    MASTER_LOG_FILE='mysql-bin.000001',\n    MASTER_LOG_POS=\ubcc0\uc218\uac12;\nSTART SLAVE;\n"})}),"\n",(0,s.jsx)(e.h2,{id:"4-\ubcf5\uc81c-\uc0c1\ud0dc-\ubaa8\ub2c8\ud130\ub9c1-\ubc0f-\ubb38\uc81c-\ud574\uacb0",children:"4. \ubcf5\uc81c \uc0c1\ud0dc \ubaa8\ub2c8\ud130\ub9c1 \ubc0f \ubb38\uc81c \ud574\uacb0"}),"\n",(0,s.jsx)(e.h3,{id:"41-\uc0c1\ud0dc-\ud655\uc778-\uba85\ub839\uc5b4",children:"4.1 \uc0c1\ud0dc \ud655\uc778 \uba85\ub839\uc5b4"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"-- \ubcf5\uc81c \uc0c1\ud0dc \ud655\uc778\nSHOW SLAVE STATUS\\G\n\n-- Master \uc0c1\ud0dc \ud655\uc778\nSHOW MASTER STATUS;\n\n-- Binary \ub85c\uadf8 \ud655\uc778\nSHOW BINARY LOGS;\n"})}),"\n",(0,s.jsx)(e.h3,{id:"42-\uc8fc\uc694-\ud655\uc778-\uc0ac\ud56d",children:"4.2 \uc8fc\uc694 \ud655\uc778 \uc0ac\ud56d"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Slave_IO_Running: Yes\uc778\uc9c0 \ud655\uc778"}),"\n",(0,s.jsx)(e.li,{children:"Slave_SQL_Running: Yes\uc778\uc9c0 \ud655\uc778"}),"\n",(0,s.jsx)(e.li,{children:"Last_Error: \uc5d0\ub7ec \uba54\uc2dc\uc9c0 \ud655\uc778"}),"\n",(0,s.jsx)(e.li,{children:"Seconds_Behind_Master: \uc9c0\uc5f0 \uc2dc\uac04 \ud655\uc778 (0\uc774\uba74 \ub3d9\uae30\ud654 \uc644\ub8cc)"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"43-\ubcf5\uc81c-\ub3d9\uc791-\ud14c\uc2a4\ud2b8",children:"4.3 \ubcf5\uc81c \ub3d9\uc791 \ud14c\uc2a4\ud2b8"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"-- Master\uc5d0\uc11c \ud14c\uc2a4\ud2b8\nCREATE DATABASE test_sync;\nUSE test_sync;\n\nCREATE TABLE sample (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    message VARCHAR(100),\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\nINSERT INTO sample (message) VALUES ('\ud14c\uc2a4\ud2b8 \uba54\uc2dc\uc9c0 1');\n\n-- Slave\uc5d0\uc11c \ud655\uc778\nUSE test_sync;\nSELECT * FROM sample;\n"})}),"\n",(0,s.jsx)(e.h3,{id:"44-\ubb38\uc81c-\ud574\uacb0",children:"4.4 \ubb38\uc81c \ud574\uacb0"}),"\n",(0,s.jsx)(e.h4,{id:"error-13117-\ubc14\uc774\ub108\ub9ac-\ub85c\uadf8-\uad00\ub828",children:"Error 13117 (\ubc14\uc774\ub108\ub9ac \ub85c\uadf8 \uad00\ub828)"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"-- Binary \ub85c\uadf8 \uc124\uc815 \ud655\uc778\nSHOW VARIABLES LIKE 'expire_logs_days';\n\n-- \ub85c\uadf8 \ubcf4\uad00 \uae30\uac04 \uc124\uc815\nSET GLOBAL expire_logs_days = 7;\n\n-- \uc601\uad6c \uc124\uc815 (my.cnf)\nexpire_logs_days = 7      # MySQL 5.7 \uc774\ud558\nbinlog_expire_logs_seconds = 604800  # MySQL 8.0 \uc774\uc0c1\n"})}),"\n",(0,s.jsx)(e.h4,{id:"server-id-\ucda9\ub3cc",children:"Server-id \ucda9\ub3cc"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"-- server-id \ud655\uc778\nSHOW VARIABLES LIKE 'server_id';\n\n-- \uc124\uc815 \ud30c\uc77c\uc5d0\uc11c \uc218\uc815\nserver-id = 2  # Slave\uc758 \uacbd\uc6b0\n"})}),"\n",(0,s.jsx)(e.h3,{id:"45-\uc624\ub958-\ub85c\uadf8-\ud655\uc778",children:"4.5 \uc624\ub958 \ub85c\uadf8 \ud655\uc778"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# \uc5d0\ub7ec \ub85c\uadf8 \ud655\uc778\ntail -f /var/log/mysql/error.log\n\n# \ub124\ud2b8\uc6cc\ud06c \uc5f0\uacb0 \ud655\uc778\ntelnet \ub9c8\uc2a4\ud130\uc11c\ubc84IP 3306\n"})}),"\n",(0,s.jsx)(e.h3,{id:"46-\ubcf5\uc81c-\uc7ac\uc2dc\uc791-\uc808\ucc28",children:"4.6 \ubcf5\uc81c \uc7ac\uc2dc\uc791 \uc808\ucc28"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"STOP SLAVE;\nRESET SLAVE;\nCHANGE MASTER TO [\uc124\uc815\uac12];\nSTART SLAVE;\n"})}),"\n",(0,s.jsx)(e.h2,{id:"5-binary-\ub85c\uadf8-\uad00\ub9ac",children:"5. Binary \ub85c\uadf8 \uad00\ub9ac"}),"\n",(0,s.jsx)(e.h3,{id:"51-\ub85c\uadf8-\uc720\ud6a8\uae30\uac04-\ud655\uc778-\ubc0f-\uc124\uc815",children:"5.1 \ub85c\uadf8 \uc720\ud6a8\uae30\uac04 \ud655\uc778 \ubc0f \uc124\uc815"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"-- \ud604\uc7ac \uc124\uc815 \ud655\uc778\nSHOW VARIABLES LIKE 'expire_logs_days';\nSHOW VARIABLES LIKE 'binlog_expire_logs_seconds';\n\n-- \uc784\uc2dc \uc124\uc815 \ubcc0\uacbd (\uc7ac\uc2dc\uc791 \uc2dc \ucd08\uae30\ud654)\nSET GLOBAL expire_logs_days = 7;  -- MySQL 5.7 \uc774\ud558\nSET GLOBAL binlog_expire_logs_seconds = 604800;  -- MySQL 8.0 \uc774\uc0c1 (7\uc77c)\n"})}),"\n",(0,s.jsx)(e.h3,{id:"52-\uc601\uad6c-\uc124\uc815-\ubcc0\uacbd",children:"5.2 \uc601\uad6c \uc124\uc815 \ubcc0\uacbd"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# MySQL \uc124\uc815 \ud30c\uc77c \uc218\uc815\nsudo nano /etc/mysql/mysql.conf.d/mysqld.cnf\n\n# MySQL 5.7 \uc774\ud558 \ubc84\uc804\nexpire_logs_days = 7  # 7\uc77c\uac04 \ubcf4\uad00\n\n# MySQL 8.0 \uc774\uc0c1 \ubc84\uc804\nbinlog_expire_logs_seconds = 604800  # 7\uc77c (7 * 24 * 60 * 60\ucd08)\n"})}),"\n",(0,s.jsx)(e.h3,{id:"53-\ub85c\uadf8-\ud30c\uc77c-\uad00\ub9ac",children:"5.3 \ub85c\uadf8 \ud30c\uc77c \uad00\ub9ac"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"-- \ud604\uc7ac binary \ub85c\uadf8 \ud30c\uc77c \ubaa9\ub85d \ud655\uc778\nSHOW BINARY LOGS;\n\n-- \ud2b9\uc815 \ub0a0\uc9dc \uc774\uc804 \ub85c\uadf8 \uc218\ub3d9 \uc0ad\uc81c\nPURGE BINARY LOGS BEFORE DATE_SUB(NOW(), INTERVAL 7 DAY);\nPURGE BINARY LOGS BEFORE '2024-12-10 00:00:00';\n"})}),"\n",(0,s.jsx)(e.h3,{id:"54-\uad8c\uc7a5-\uc124\uc815",children:"5.4 \uad8c\uc7a5 \uc124\uc815"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\uc6b4\uc601 \ud658\uacbd\ubcc4 \uad8c\uc7a5 \ubcf4\uad00 \uae30\uac04"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\uc6b4\uc601 \uc11c\ubc84: 3-7\uc77c"}),"\n",(0,s.jsx)(e.li,{children:"\uac1c\ubc1c \uc11c\ubc84: 1-3\uc77c"}),"\n",(0,s.jsx)(e.li,{children:"\ubc31\uc5c5 \uc11c\ubc84: 7-14\uc77c (\ud544\uc694\uc5d0 \ub530\ub77c \uc870\uc815)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\uace0\ub824\uc0ac\ud56d"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\ub514\uc2a4\ud06c \uacf5\uac04 \uc5ec\uc720"}),"\n",(0,s.jsx)(e.li,{children:"\ubcf5\uc81c \uc9c0\uc5f0 \uac00\ub2a5\uc131"}),"\n",(0,s.jsx)(e.li,{children:"\ubc31\uc5c5 \uc8fc\uae30"}),"\n",(0,s.jsx)(e.li,{children:"\uc7a5\uc560 \ubcf5\uad6c \uc2dc\uac04"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"55-\uc8fc\uc758\uc0ac\ud56d",children:"5.5 \uc8fc\uc758\uc0ac\ud56d"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\ub108\ubb34 \uc9e7\uc740 \ubcf4\uad00 \uae30\uac04 \uc124\uc815 \uc2dc \ubb38\uc81c\uc810"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Slave \ub3d9\uae30\ud654 \uc2e4\ud328 \uac00\ub2a5\uc131"}),"\n",(0,s.jsx)(e.li,{children:"\uc7a5\uc560 \ubcf5\uad6c \uc5b4\ub824\uc6c0"}),"\n",(0,s.jsx)(e.li,{children:"Point-in-time \ubcf5\uad6c \uc81c\ud55c"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\ub108\ubb34 \uae34 \ubcf4\uad00 \uae30\uac04 \uc124\uc815 \uc2dc \ubb38\uc81c\uc810"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\ub514\uc2a4\ud06c \uacf5\uac04 \ubd80\uc871"}),"\n",(0,s.jsx)(e.li,{children:"\uad00\ub9ac \ubcf5\uc7a1\ub3c4 \uc99d\uac00"}),"\n",(0,s.jsx)(e.li,{children:"\ubc31\uc5c5/\ubcf5\uad6c \uc2dc\uac04 \uc99d\uac00"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\uc124\uc815 \ubcc0\uacbd \ud6c4 \ud655\uc778\uc0ac\ud56d"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\ubcf5\uc81c \uc815\uc0c1 \uc791\ub3d9 \ud655\uc778"}),"\n",(0,s.jsx)(e.li,{children:"\ub514\uc2a4\ud06c \uc0ac\uc6a9\ub7c9 \ubaa8\ub2c8\ud130\ub9c1"}),"\n",(0,s.jsx)(e.li,{children:"\ub85c\uadf8 \uc21c\ud658 \uc815\uc0c1 \uc791\ub3d9 \ud655\uc778"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"6-\uc911\uc694-\ucc38\uace0\uc0ac\ud56d",children:"6. \uc911\uc694 \ucc38\uace0\uc0ac\ud56d"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"Master\uc640 Slave\uc758 MySQL \ubc84\uc804\uc740 \uac00\ub2a5\ud55c \ub3d9\uc77c\ud558\uac8c \uc720\uc9c0"}),"\n",(0,s.jsx)(e.li,{children:"\ub124\ud2b8\uc6cc\ud06c \ubc29\ud654\ubcbd \uc124\uc815 \ud655\uc778 (\uae30\ubcf8 \ud3ec\ud2b8: 3306)"}),"\n",(0,s.jsx)(e.li,{children:"Binary \ub85c\uadf8 \uacf5\uac04 \uad00\ub9ac\ub97c \uc704\ud55c \uc8fc\uae30\uc801\uc778 \ubaa8\ub2c8\ud130\ub9c1 \ud544\uc694"}),"\n",(0,s.jsx)(e.li,{children:"\ubcf5\uc81c \uc9c0\uc5f0 \ubc1c\uc0dd \uc2dc \uc989\uc2dc \uc6d0\uc778 \ud30c\uc545 \ubc0f \uc870\uce58 \ud544\uc694"}),"\n",(0,s.jsx)(e.li,{children:"\ud070 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc758 \uacbd\uc6b0 \ub364\ud504 \ubc0f \ubcf5\uc0ac \uacfc\uc815\uc5d0\uc11c \uc2dc\uac04\uc774 \uc624\ub798 \uac78\ub9b4 \uc218 \uc788\uc74c"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"7-\ubaa8\ubc94-\uc0ac\ub840",children:"7. \ubaa8\ubc94 \uc0ac\ub840"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\uc815\uae30\uc801\uc778 \ubcf5\uc81c \uc0c1\ud0dc \ubaa8\ub2c8\ud130\ub9c1 \uc2e4\uc2dc"}),"\n",(0,s.jsx)(e.li,{children:"\uc8fc\uae30\uc801\uc778 \ubc31\uc5c5 \uc218\ud589"}),"\n",(0,s.jsx)(e.li,{children:"\uc7a5\uc560 \ubcf5\uad6c \uc808\ucc28 \ubb38\uc11c\ud654"}),"\n",(0,s.jsx)(e.li,{children:"\ubcf5\uc81c \uad6c\uc131 \ubcc0\uacbd \uc2dc \ucda9\ubd84\ud55c \ud14c\uc2a4\ud2b8 \uc218\ud589"}),"\n",(0,s.jsxs)(e.li,{children:["Binary \ub85c\uadf8 \ubcf4\uad00 \uae30\uac04 \uc801\uc808\ud788 \uc124\uc815","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\uc6b4\uc601 \uc11c\ubc84: 3-7\uc77c"}),"\n",(0,s.jsx)(e.li,{children:"\uac1c\ubc1c \uc11c\ubc84: 1-3\uc77c"}),"\n",(0,s.jsx)(e.li,{children:"\ub514\uc2a4\ud06c \uacf5\uac04 \uace0\ub824\ud558\uc5ec \uc124\uc815"}),"\n"]}),"\n"]}),"\n"]})]})}function x(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},8453:(n,e,l)=>{l.d(e,{R:()=>d,x:()=>c});var s=l(6540);const i={},r=s.createContext(i);function d(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);