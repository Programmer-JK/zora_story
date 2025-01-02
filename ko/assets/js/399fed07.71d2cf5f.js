"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[6726],{5093:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=r(4848),t=r(8453);const o={},c=void 0,i={id:"Node.js/Promise vs Async,Await",title:"Promise vs Async,Await",description:"\uc791\uc131\uc77c : 2024.12.06",source:"@site/docs/Node.js/Promise vs Async,Await.md",sourceDirName:"Node.js",slug:"/Node.js/Promise vs Async,Await",permalink:"/zora_story/ko/docs/Node.js/Promise vs Async,Await",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"studySidebar",previous:{title:"Node.js \uc2ec\ud654",permalink:"/zora_story/ko/docs/Node.js/Node.js \uc2ec\ud654"},next:{title:"What is REST",permalink:"/zora_story/ko/docs/Node.js/What is REST"}},a={},l=[{value:"1. Promise\uc758 \ud2b9\uc9d5",id:"1-promise\uc758-\ud2b9\uc9d5",level:2},{value:"\uc7a5\uc810:",id:"\uc7a5\uc810",level:4},{value:"\ub2e8\uc810:",id:"\ub2e8\uc810",level:4},{value:"2. async/await\uc758 \ud2b9\uc9d5",id:"2-asyncawait\uc758-\ud2b9\uc9d5",level:2},{value:"\uc7a5\uc810:",id:"\uc7a5\uc810-1",level:4},{value:"\ub2e8\uc810:",id:"\ub2e8\uc810-1",level:4},{value:"3. \uc2e4\uc81c \uc0ac\uc6a9 \uc608\uc2dc\uc640 \ube44\uad50",id:"3-\uc2e4\uc81c-\uc0ac\uc6a9-\uc608\uc2dc\uc640-\ube44\uad50",level:2},{value:"\uc2e4\ubb34 \uc120\ud638\ub3c4",id:"\uc2e4\ubb34-\uc120\ud638\ub3c4",level:4}];function d(n){const e={blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\uc791\uc131\uc77c : 2024.12.06"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"1-promise\uc758-\ud2b9\uc9d5",children:"1. Promise\uc758 \ud2b9\uc9d5"}),"\n",(0,s.jsx)(e.h4,{id:"\uc7a5\uc810",children:"\uc7a5\uc810:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\uccb4\uc774\ub2dd ",(0,s.jsx)(e.code,{children:".then()"})," \uc744 \ud1b5\ud55c \uc5f0\uc18d\uc801\uc778 \ube44\ub3d9\uae30 \ucc98\ub9ac \uac00\ub2a5"]}),"\n",(0,s.jsxs)(e.li,{children:["\ubcd1\ub82c \ucc98\ub9ac ",(0,s.jsx)(e.code,{children:"Promise.all"})," \uac00 \uc9c1\uad00\uc801"]}),"\n",(0,s.jsx)(e.li,{children:"\uc5d0\ub7ec \ucc98\ub9ac\ub97c catch\ub85c \ud55c\ubc88\uc5d0 \uac00\ub2a5"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"// Promise \uccb4\uc774\ub2dd \uc608\uc2dc\nfetchUser()\n    .then(user => fetchProfile(user.id))\n    .then(profile => fetchPosts(profile.id))\n    .catch(error => console.error(error));\n\n// \ubcd1\ub82c \ucc98\ub9ac \uc608\uc2dc\nPromise.all([\n    fetchUsers(),\n    fetchProducts(),\n    fetchOrders()\n]).then(([users, products, orders]) => {\n    // \ubaa8\ub4e0 \ub370\uc774\ud130 \ucc98\ub9ac\n});\n\n// 1. Promise \uc0c1\ud0dc\nconst promise = new Promise((resolve, reject) => {\n    // pending: \ucd08\uae30 \uc0c1\ud0dc\n    // fulfilled: resolve \ud638\ucd9c\n    // rejected: reject \ud638\ucd9c\n});\n\n// 2. Promise \uba54\uc11c\ub4dc\nPromise.resolve(value);  // \uc989\uc2dc \uc774\ud589\nPromise.reject(error);   // \uc989\uc2dc \uac70\ubd80\nPromise.race([p1, p2]); // \uac00\uc7a5 \ube68\ub9ac \uc644\ub8cc\ub41c \uacb0\uacfc\nPromise.allSettled([p1, p2]); // \ubaa8\ub4e0 \uacb0\uacfc(\uc131\uacf5/\uc2e4\ud328 \ubaa8\ub450)\n\n// 3. \uc5d0\ub7ec \ucc98\ub9ac \uccb4\uc774\ub2dd\nfetchData()\n    .then(data => {\n        throw new Error('\uc5d0\ub7ec \ubc1c\uc0dd');\n    })\n    .then(\n        success => console.log('\uc2e4\ud589\ub418\uc9c0 \uc54a\uc74c'),\n        error => console.log('\uccab \ubc88\uc9f8 \uc5d0\ub7ec \ud578\ub4e4\ub7ec:', error)\n    )\n    .catch(error => console.log('\ub450 \ubc88\uc9f8 \uc5d0\ub7ec \ud578\ub4e4\ub7ec:', error))\n    .finally(() => console.log('\ud56d\uc0c1 \uc2e4\ud589'));\n"})}),"\n",(0,s.jsx)(e.h4,{id:"\ub2e8\uc810",children:"\ub2e8\uc810:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\ucf54\ub4dc\uac00 \ubcf5\uc7a1\ud574\uc9c8\uc218\ub85d then \uccb4\uc774\ub2dd\uc774 \uae4a\uc5b4\uc9d0"}),"\n",(0,s.jsx)(e.li,{children:"\uc870\uac74\ubd80 \ub85c\uc9c1 \ucc98\ub9ac\uac00 \ubcf5\uc7a1"}),"\n",(0,s.jsx)(e.li,{children:"\ub514\ubc84\uae45\uc774 \uc5b4\ub824\uc6c0"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"2-asyncawait\uc758-\ud2b9\uc9d5",children:"2. async/await\uc758 \ud2b9\uc9d5"}),"\n",(0,s.jsx)(e.h4,{id:"\uc7a5\uc810-1",children:"\uc7a5\uc810:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\ub3d9\uae30 \ucf54\ub4dc\uc640 \uc720\uc0ac\ud55c \uc9c1\uad00\uc801\uc778 \ubb38\ubc95"}),"\n",(0,s.jsx)(e.li,{children:"\ucf54\ub4dc \uac00\ub3c5\uc131\uc774 \ub192\uc74c"}),"\n",(0,s.jsx)(e.li,{children:"\ub514\ubc84\uae45\uc774 \uc6a9\uc774"}),"\n",(0,s.jsx)(e.li,{children:"try-catch\ub85c \uc77c\ubc18\uc801\uc778 \uc5d0\ub7ec \ucc98\ub9ac \uac00\ub2a5"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"// async/await \uc608\uc2dc\nasync function getData() {\n    try {\n        const user = await fetchUser();\n        const profile = await fetchProfile(user.id);\n        const posts = await fetchPosts(profile.id);\n        return posts;\n    } catch (error) {\n        console.error(error);\n    }\n}\n\n// \uc870\uac74\ubd80 \ube44\ub3d9\uae30 \ucc98\ub9ac\nasync function conditionalFetch(condition) {\n    const user = await fetchUser();\n    \n    if (condition) {\n        const extraData = await fetchExtra();\n        return { user, extraData };\n    }\n    \n    return { user };\n}\n\n// 1. \ub3d9\uc2dc\uc131 \ucc98\ub9ac\nasync function concurrentProcess() {\n    // \ubcd1\ub82c \uc2e4\ud589\n    const dataPromise = fetchData();\n    const userPromise = fetchUser();\n    \n    // \uc21c\ucc28\uc801 \ucc98\ub9ac\uac00 \ud544\uc694\ud55c \uacbd\uc6b0\n    const data = await dataPromise;\n    const user = await userPromise;\n    \n    return { data, user };\n}\n\n// 2. \uc5d0\ub7ec \ucc98\ub9ac \ud328\ud134\nasync function errorHandling() {\n    try {\n        const result = await riskyOperation();\n    } catch (error) {\n        if (error instanceof NetworkError) {\n            await handleNetworkError(error);\n        } else if (error instanceof ValidationError) {\n            await handleValidationError(error);\n        } else {\n            throw error; // \ucc98\ub9ac\ud560 \uc218 \uc5c6\ub294 \uc5d0\ub7ec\ub294 \uc0c1\uc704\ub85c \uc804\ud30c\n        }\n    }\n}\n\n// 3. \ud0c0\uc784\uc544\uc6c3 \ucc98\ub9ac\nasync function fetchWithTimeout(url, timeout = 5000) {\n    const controller = new AbortController();\n    const timeoutId = setTimeout(() => controller.abort(), timeout);\n    \n    try {\n        const response = await fetch(url, {\n            signal: controller.signal\n        });\n        clearTimeout(timeoutId);\n        return response;\n    } catch (error) {\n        clearTimeout(timeoutId);\n        if (error.name === 'AbortError') {\n            throw new Error('Request timed out');\n        }\n        throw error;\n    }\n}\n\n"})}),"\n",(0,s.jsx)(e.h4,{id:"\ub2e8\uc810-1",children:"\ub2e8\uc810:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\ubcd1\ub82c \ucc98\ub9ac\ub97c \uc704\ud574\uc11c\ub294 Promise.all \ub4f1\uc744 \ud568\uaed8 \uc0ac\uc6a9\ud574\uc57c \ud568"}),"\n",(0,s.jsx)(e.li,{children:"await \ud0a4\uc6cc\ub4dc\ub97c \ube7c\uba39\uc73c\uba74 \uc758\ub3c4\uce58 \uc54a\uc740 \ub3d9\uc791 \ubc1c\uc0dd"}),"\n",(0,s.jsx)(e.li,{children:"async \ud568\uc218\ub294 \ud56d\uc0c1 Promise\ub97c \ubc18\ud658"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"3-\uc2e4\uc81c-\uc0ac\uc6a9-\uc608\uc2dc\uc640-\ube44\uad50",children:"3. \uc2e4\uc81c \uc0ac\uc6a9 \uc608\uc2dc\uc640 \ube44\uad50"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"// Promise \ubc84\uc804\nfunction processData() {\n    return fetchData()\n        .then(data => processStep1(data))\n        .then(result1 => processStep2(result1))\n        .then(result2 => processStep3(result2))\n        .catch(error => handleError(error));\n}\n\n// async/await \ubc84\uc804\nasync function processData() {\n    try {\n        const data = await fetchData();\n        const result1 = await processStep1(data);\n        const result2 = await processStep2(result1);\n        return await processStep3(result2);\n    } catch (error) {\n        handleError(error);\n    }\n}\n\n// \ubcd1\ub82c \ucc98\ub9ac\nasync function parallelProcessing() {\n    try {\n        const [result1, result2] = await Promise.all([\n            processTask1(),\n            processTask2()\n        ]);\n        return combineResults(result1, result2);\n    } catch (error) {\n        handleError(error);\n    }\n}\n// \uc21c\ucc28 \uc2e4\ud589 (\ube44\ud6a8\uc728\uc801)\nasync function sequentialProcessing() {\n    try {\n        const result1 = await processTask1();\n        const result2 = await processTask2();\n        return combineResults(result1, result2);\n    } catch (error) {\n        handleError(error);\n    }\n}\n\n// \ubcd1\ub82c \uc2e4\ud589\uc744 \uc720\uc9c0\ud558\uba74\uc11c async/await \uc0ac\uc6a9 (\ud6a8\uc728\uc801)\nasync function parallelProcessing() {\n    try {\n        // \ub450 \uc791\uc5c5\uc774 \ub3d9\uc2dc\uc5d0 \uc2dc\uc791\ub428\n        const task1Promise = processTask1(); // \uc989\uc2dc \uc2e4\ud589 \uc2dc\uc791\n        const task2Promise = processTask2(); // \uc989\uc2dc \uc2e4\ud589 \uc2dc\uc791\n        \n        // \uc791\uc5c5\ub4e4\uc774 \uc774\ubbf8 \uc2e4\ud589 \uc911\uc774\uba70, \uc5ec\uae30\uc11c\ub294 \uacb0\uacfc\ub9cc \uae30\ub2e4\ub9bc\n        const result1 = await task1Promise;\n        const result2 = await task2Promise;\n        \n        return combineResults(result1, result2);\n    } catch (error) {\n        handleError(error);\n    }\n}\n\n"})}),"\n",(0,s.jsx)(e.h4,{id:"\uc2e4\ubb34-\uc120\ud638\ub3c4",children:"\uc2e4\ubb34 \uc120\ud638\ub3c4"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\uc77c\ubc18\uc801\uc778 \ube44\ub3d9\uae30: async/await"}),"\n",(0,s.jsx)(e.li,{children:"\ubcd1\ub82c \ucc98\ub9ac: Promise.all + async/await"}),"\n",(0,s.jsx)(e.li,{children:"\ubcf5\uc7a1\ud55c \ubd84\uae30 \ucc98\ub9ac: async/await"}),"\n"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"async/await\ub97c \uc8fc\ub85c \uc0ac\uc6a9\ud558\ub294 \uc774\uc720:"}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\ucf54\ub4dc \uac00\ub3c5\uc131\uc774 \ub192\uc74c"}),"\n",(0,s.jsx)(e.li,{children:"\ub514\ubc84\uae45\uc774 \uc6a9\uc774"}),"\n",(0,s.jsx)(e.li,{children:"try-catch\ub85c \uc5d0\ub7ec \ucc98\ub9ac\uac00 \uc9c1\uad00\uc801"}),"\n",(0,s.jsx)(e.li,{children:"\ub3d9\uae30 \ucf54\ub4dc\uc640 \uc720\uc0ac\ud55c \uad6c\uc870\ub85c \uc720\uc9c0\ubcf4\uc218 \uc6a9\uc774"}),"\n"]}),"\n",(0,s.jsxs)(e.ol,{start:"2",children:["\n",(0,s.jsx)(e.li,{children:"Promise\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0:"}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\ubcd1\ub82c \ucc98\ub9ac (Promise.all)"}),"\n",(0,s.jsx)(e.li,{children:"\uacbd\uc7c1 \uc0c1\ud0dc \ucc98\ub9ac (Promise.race)"}),"\n",(0,s.jsx)(e.li,{children:"\uc774\ubbf8 Promise \uae30\ubc18\uc73c\ub85c \uc791\uc131\ub41c \ub808\uac70\uc2dc \ucf54\ub4dc \uc720\uc9c0\ubcf4\uc218"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"// \uc77c\ubc18\uc801\uc778 \ud328\ud134\nasync function getUserData(userId) {\n    try {\n        const user = await fetchUser(userId);\n        const posts = await fetchUserPosts(userId);\n        \n        return { user, posts };\n    } catch (error) {\n        logger.error(error);\n        throw new CustomError('\uc0ac\uc6a9\uc790 \ub370\uc774\ud130 \uc870\ud68c \uc2e4\ud328');\n    }\n}\n\n// \ubcd1\ub82c \ucc98\ub9ac\uac00 \ud544\uc694\ud55c \uacbd\uc6b0\nasync function getDashboardData() {\n    const [users, products, orders] = await Promise.all([\n        fetchUsers(),\n        fetchProducts(),\n        fetchOrders()\n    ]);\n    \n    return { users, products, orders };\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>c,x:()=>i});var s=r(6540);const t={},o=s.createContext(t);function c(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);