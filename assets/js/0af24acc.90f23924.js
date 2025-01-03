"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[6965],{6310:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>r});var t=s(4848),i=s(8453);const c={},o=void 0,l={id:"React.js/react hook",title:"react hook",description:"\uc791\uc131\uc77c : 2024.12.22",source:"@site/docs/08. React.js/089902. react hook.md",sourceDirName:"08. React.js",slug:"/React.js/react hook",permalink:"/zora_story/docs/React.js/react hook",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:89902,frontMatter:{},sidebar:"studySidebar",previous:{title:"What is React",permalink:"/zora_story/docs/React.js/What is React"},next:{title:"onChange vs useEffect",permalink:"/zora_story/docs/React.js/onChange vs useEffect"}},a={},r=[{value:"What is React Hooks",id:"what-is-react-hooks",level:2},{value:"How to use React Hooks",id:"how-to-use-react-hooks",level:2},{value:"1. useState",id:"1-usestate",level:3},{value:"2. useEffect",id:"2-useeffect",level:3},{value:"3. useRef",id:"3-useref",level:3},{value:"4. useContext",id:"4-usecontext",level:3},{value:"5. useMemo",id:"5-usememo",level:3},{value:"6. useCallback",id:"6-usecallback",level:3},{value:"Hook \uc0ac\uc6a9 \uc2dc \uc8fc\uc758\uc0ac\ud56d:",id:"hook-\uc0ac\uc6a9-\uc2dc-\uc8fc\uc758\uc0ac\ud56d",level:3},{value:"Custom Hook \uc608\uc2dc:",id:"custom-hook-\uc608\uc2dc",level:3}];function u(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\uc791\uc131\uc77c : 2024.12.22"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"what-is-react-hooks",children:"What is React Hooks"}),"\n",(0,t.jsx)(n.p,{children:"React Hooks\ub294 React 16.8 \ubc84\uc804\uc5d0\uc11c \ub3c4\uc785\ub41c \uae30\ub2a5\uc73c\ub85c, \ud568\uc218\ud615 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc0c1\ud0dc(state) \uad00\ub9ac\uc640 \uc0dd\uba85\uc8fc\uae30(lifecycle) \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ud574\uc8fc\ub294 \uae30\ub2a5\uc785\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"\uc8fc\uc694 Hook\ub4e4\uc744 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4:"}),"\n",(0,t.jsx)(n.h2,{id:"how-to-use-react-hooks",children:"How to use React Hooks"}),"\n",(0,t.jsx)(n.h3,{id:"1-usestate",children:"1. useState"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const [state, setState] = useState(initialValue);\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud560 \uc218 \uc788\uac8c \ud574\uc90d\ub2c8\ub2e4"}),"\n",(0,t.jsx)(n.li,{children:"initialValue\ub85c \ucd08\uae30\uac12\uc744 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"}),"\n",(0,t.jsx)(n.li,{children:"state\ub294 \ud604\uc7ac \uc0c1\ud0dc\uac12, setState\ub294 \uc0c1\ud0dc\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\uc608\uc2dc:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const [count, setCount] = useState(0);\n\nreturn <button onClick={() => setCount(count + 1)}>Count: {count}</button>;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"2-useeffect",children:"2. useEffect"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"useEffect(() => {\n  // \uc2e4\ud589\ud560 \ud6a8\uacfc\n  return () => {\n    // \ud074\ub9b0\uc5c5 \ud568\uc218\n  };\n}, [dependencies]);\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\ucef4\ud3ec\ub10c\ud2b8\uc758 \uc0dd\uba85\uc8fc\uae30\uc640 \uad00\ub828\ub41c \uc791\uc5c5\uc744 \uc218\ud589\ud569\ub2c8\ub2e4"}),"\n",(0,t.jsx)(n.li,{children:"\ucef4\ud3ec\ub10c\ud2b8\uac00 \ub80c\ub354\ub9c1\ub420 \ub54c\ub9c8\ub2e4 \ub610\ub294 \ud2b9\uc815 \uac12\uc774 \ubcc0\uacbd\ub420 \ub54c \uc2e4\ud589\ub429\ub2c8\ub2e4"}),"\n",(0,t.jsx)(n.li,{children:"dependencies \ubc30\uc5f4\uc5d0 \uc9c0\uc815\ub41c \uac12\uc774 \ubcc0\uacbd\ub420 \ub54c\ub9cc \uc2e4\ud589\ub418\ub3c4\ub85d \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\uc608\uc2dc:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'useEffect(() => {\n  document.title = `You clicked ${count} times`;\n\n  return () => {\n    document.title = "React App"; // \ucef4\ud3ec\ub10c\ud2b8 \uc5b8\ub9c8\uc6b4\ud2b8 \uc2dc \uc2e4\ud589\n  };\n}, [count]); // count\uac00 \ubcc0\uacbd\ub420 \ub54c\ub9cc \uc2e4\ud589\n'})}),"\n",(0,t.jsx)(n.h3,{id:"3-useref",children:"3. useRef"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const refContainer = useRef(initialValue);\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"DOM \uc694\uc18c\uc5d0 \uc9c1\uc811 \uc811\uadfc\ud558\uac70\ub098 \ubcc0\uacbd \uac00\ub2a5\ud55c \uac12\uc744 \uc800\uc7a5\ud560 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4"}),"\n",(0,t.jsx)(n.li,{children:"\uac12\uc774 \ubcc0\uacbd\ub418\uc5b4\ub3c4 \ub9ac\ub80c\ub354\ub9c1\uc744 \ubc1c\uc0dd\uc2dc\ud0a4\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\uc608\uc2dc:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const inputRef = useRef();\n\nreturn (\n  <input ref={inputRef} />\n  <button onClick={() => inputRef.current.focus()}>\n    Focus Input\n  </button>\n);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"4-usecontext",children:"4. useContext"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const value = useContext(MyContext);\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Context API\ub97c \ud1b5\ud574 \uc804\uc5ed \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"}),"\n",(0,t.jsx)(n.li,{children:"\ucef4\ud3ec\ub10c\ud2b8 \ud2b8\ub9ac \uc804\uccb4\uc5d0 \ub370\uc774\ud130\ub97c \uc804\ub2ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"5-usememo",children:"5. useMemo"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\uacc4\uc0b0 \ube44\uc6a9\uc774 \ud070 \uac12\uc744 \uba54\ubaa8\uc774\uc81c\uc774\uc158\ud569\ub2c8\ub2e4"}),"\n",(0,t.jsx)(n.li,{children:"\uc758\uc874\uc131 \ubc30\uc5f4\uc758 \uac12\uc774 \ubcc0\uacbd\ub420 \ub54c\ub9cc \uc7ac\uacc4\uc0b0\ub429\ub2c8\ub2e4"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"6-usecallback",children:"6. useCallback"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const memoizedCallback = useCallback(() => {\n  doSomething(a, b);\n}, [a, b]);\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\ud568\uc218\ub97c \uba54\ubaa8\uc774\uc81c\uc774\uc158\ud558\uc5ec \ubd88\ud544\uc694\ud55c \ub9ac\ub80c\ub354\ub9c1\uc744 \ubc29\uc9c0\ud569\ub2c8\ub2e4"}),"\n",(0,t.jsx)(n.li,{children:"\uc8fc\ub85c \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ucf5c\ubc31\uc744 \uc804\ub2ec\ud560 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"hook-\uc0ac\uc6a9-\uc2dc-\uc8fc\uc758\uc0ac\ud56d",children:"Hook \uc0ac\uc6a9 \uc2dc \uc8fc\uc758\uc0ac\ud56d:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Hook\uc740 \ud56d\uc0c1 \ud568\uc218\ud615 \ucef4\ud3ec\ub10c\ud2b8 \ucd5c\uc0c1\uc704\uc5d0\uc11c\ub9cc \ud638\ucd9c\ud574\uc57c \ud569\ub2c8\ub2e4"}),"\n",(0,t.jsx)(n.li,{children:"\uc870\uac74\ubb38\uc774\ub098 \ubc18\ubcf5\ubb38 \uc548\uc5d0\uc11c Hook\uc744 \uc0ac\uc6a9\ud558\uba74 \uc548\ub429\ub2c8\ub2e4"}),"\n",(0,t.jsx)(n.li,{children:"Custom Hook\uc744 \ub9cc\ub4e4 \ub54c\ub294 \uc774\ub984\uc774 'use'\ub85c \uc2dc\uc791\ud574\uc57c \ud569\ub2c8\ub2e4"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"custom-hook-\uc608\uc2dc",children:"Custom Hook \uc608\uc2dc:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'function useWindowSize() {\n  const [size, setSize] = useState({\n    width: window.innerWidth,\n    height: window.innerHeight,\n  });\n\n  useEffect(() => {\n    const handleResize = () => {\n      setSize({\n        width: window.innerWidth,\n        height: window.innerHeight,\n      });\n    };\n\n    window.addEventListener("resize", handleResize);\n    return () => window.removeEventListener("resize", handleResize);\n  }, []);\n\n  return size;\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\uc774\ub7ec\ud55c Hook\ub4e4\uc744 \ud65c\uc6a9\ud558\uba74 \ud074\ub798\uc2a4 \ucef4\ud3ec\ub10c\ud2b8\ubcf4\ub2e4 \ub354 \uac04\uacb0\ud558\uace0 \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud55c \ub85c\uc9c1\uc744 \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud2b9\ud788 \uc0c1\ud0dc \uad00\ub9ac\uc640 \uc0ac\uc774\ub4dc \uc774\ud399\ud2b8 \ucc98\ub9ac\ub97c \ub354\uc6b1 \ud6a8\uc728\uc801\uc73c\ub85c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var t=s(6540);const i={},c=t.createContext(i);function o(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);