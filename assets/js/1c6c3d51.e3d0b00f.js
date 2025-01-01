"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[6773],{3932:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var s=t(4848),r=t(8453);const l={},i=void 0,o={id:"React.js/React \uba74\uc811 \uc900\ube44",title:"React \uba74\uc811 \uc900\ube44",description:"\uc791\uc131\uc77c : 2025.01.01",source:"@site/docs/React.js/React \uba74\uc811 \uc900\ube44.md",sourceDirName:"React.js",slug:"/React.js/React \uba74\uc811 \uc900\ube44",permalink:"/zora_story/docs/React.js/React \uba74\uc811 \uc900\ube44",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"studySidebar",previous:{title:"What is REST",permalink:"/zora_story/docs/Node.js/What is REST"},next:{title:"jotai",permalink:"/zora_story/docs/React.js/jotai"}},d={},c=[{value:"1. useState vs useReducer: \uc5b8\uc81c \ubb34\uc5c7\uc744 \uc120\ud0dd\ud560\uae4c?",id:"1-usestate-vs-usereducer-\uc5b8\uc81c-\ubb34\uc5c7\uc744-\uc120\ud0dd\ud560\uae4c",level:2},{value:"useState\uac00 \uc801\ud569\ud55c \uacbd\uc6b0",id:"usestate\uac00-\uc801\ud569\ud55c-\uacbd\uc6b0",level:3},{value:"useReducer\uac00 \uc801\ud569\ud55c \uacbd\uc6b0",id:"usereducer\uac00-\uc801\ud569\ud55c-\uacbd\uc6b0",level:3},{value:"2. \ucee4\uc2a4\ud140 \ud6c5\uc758 \uac15\ub825\ud568",id:"2-\ucee4\uc2a4\ud140-\ud6c5\uc758-\uac15\ub825\ud568",level:2},{value:"\ucee4\uc2a4\ud140 \ud6c5\uc758 \uc7a5\uc810",id:"\ucee4\uc2a4\ud140-\ud6c5\uc758-\uc7a5\uc810",level:3},{value:"3. React\uc758 \uc131\ub2a5 \ucd5c\uc801\ud654 \ud2b8\ub9ac\uc624: memo, useMemo, useCallback",id:"3-react\uc758-\uc131\ub2a5-\ucd5c\uc801\ud654-\ud2b8\ub9ac\uc624-memo-usememo-usecallback",level:2},{value:"React.memo",id:"reactmemo",level:3},{value:"useMemo",id:"usememo",level:3},{value:"useCallback",id:"usecallback",level:3},{value:"4. useEffect: \ubaa8\ubc94 \uc0ac\ub840\uc640 \uc8fc\uc758\uc0ac\ud56d",id:"4-useeffect-\ubaa8\ubc94-\uc0ac\ub840\uc640-\uc8fc\uc758\uc0ac\ud56d",level:2},{value:"\ubaa8\ubc94 \uc0ac\ub840",id:"\ubaa8\ubc94-\uc0ac\ub840",level:3},{value:"\uc8fc\uc758\uc0ac\ud56d",id:"\uc8fc\uc758\uc0ac\ud56d",level:3},{value:"5. \ucf54\ub4dc \uc2a4\ud50c\ub9ac\ud305\uacfc React.lazy",id:"5-\ucf54\ub4dc-\uc2a4\ud50c\ub9ac\ud305\uacfc-reactlazy",level:2},{value:"6. useContext: \uc804\uc5ed \uc0c1\ud0dc \uad00\ub9ac\uc758 \uac15\ub825\ud568\uacfc \uc8fc\uc758\uc810",id:"6-usecontext-\uc804\uc5ed-\uc0c1\ud0dc-\uad00\ub9ac\uc758-\uac15\ub825\ud568\uacfc-\uc8fc\uc758\uc810",level:2},{value:"\uc8fc\uc758\uc0ac\ud56d",id:"\uc8fc\uc758\uc0ac\ud56d-1",level:3},{value:"7. \ubcf5\uc7a1\ud55c \ucef4\ud3ec\ub10c\ud2b8 \uc124\uacc4 \uc6d0\uce59",id:"7-\ubcf5\uc7a1\ud55c-\ucef4\ud3ec\ub10c\ud2b8-\uc124\uacc4-\uc6d0\uce59",level:2},{value:"\ub2e8\uc77c \ucc45\uc784 \uc6d0\uce59 (SRP)",id:"\ub2e8\uc77c-\ucc45\uc784-\uc6d0\uce59-srp",level:3},{value:"\ucef4\ud3ec\ub10c\ud2b8 \uad6c\uc131 \ud328\ud134",id:"\ucef4\ud3ec\ub10c\ud2b8-\uad6c\uc131-\ud328\ud134",level:3},{value:"8. \uc131\ub2a5 \ubd84\uc11d \ub3c4\uad6c\uc640 \uae30\ubc95",id:"8-\uc131\ub2a5-\ubd84\uc11d-\ub3c4\uad6c\uc640-\uae30\ubc95",level:2},{value:"\uc8fc\uc694 \ub3c4\uad6c",id:"\uc8fc\uc694-\ub3c4\uad6c",level:3},{value:"why-did-you-render \ud65c\uc6a9",id:"why-did-you-render-\ud65c\uc6a9",level:3},{value:"9. Todo \ub9ac\uc2a4\ud2b8 \uc2e4\uc2dc\uac04 \uc0c1\ud0dc \uad00\ub9ac",id:"9-todo-\ub9ac\uc2a4\ud2b8-\uc2e4\uc2dc\uac04-\uc0c1\ud0dc-\uad00\ub9ac",level:2},{value:"10. Virtual DOM\uacfc \uc131\ub2a5 \ucd5c\uc801\ud654",id:"10-virtual-dom\uacfc-\uc131\ub2a5-\ucd5c\uc801\ud654",level:2},{value:"Virtual DOM\uc758 \uc791\ub3d9 \uc6d0\ub9ac",id:"virtual-dom\uc758-\uc791\ub3d9-\uc6d0\ub9ac",level:3},{value:"\uc131\ub2a5 \ucd5c\uc801\ud654 \uc804\ub7b5",id:"\uc131\ub2a5-\ucd5c\uc801\ud654-\uc804\ub7b5",level:3},{value:"\ub9c8\ubb34\ub9ac",id:"\ub9c8\ubb34\ub9ac",level:2}];function a(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\uc791\uc131\uc77c : 2025.01.01"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"1-usestate-vs-usereducer-\uc5b8\uc81c-\ubb34\uc5c7\uc744-\uc120\ud0dd\ud560\uae4c",children:"1. useState vs useReducer: \uc5b8\uc81c \ubb34\uc5c7\uc744 \uc120\ud0dd\ud560\uae4c?"}),"\n",(0,s.jsx)(n.p,{children:"\uc0c1\ud0dc \uad00\ub9ac\ub294 React \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uac00\uc7a5 \uc911\uc694\ud55c \ubd80\ubd84 \uc911 \ud558\ub098\uc785\ub2c8\ub2e4. useState\uc640 useReducer\ub294 \uac01\uac01 \ub2e4\ub978 \uc0c1\ud669\uc5d0\uc11c \uc720\uc6a9\ud558\uac8c \uc0ac\uc6a9\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.h3,{id:"usestate\uac00-\uc801\ud569\ud55c-\uacbd\uc6b0",children:"useState\uac00 \uc801\ud569\ud55c \uacbd\uc6b0"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\ub3c5\ub9bd\uc801\uc778 \ub2e8\uc21c\ud55c \uc0c1\ud0dc \uac12 \uad00\ub9ac"}),"\n",(0,s.jsx)(n.li,{children:"\uc0c1\ud0dc \uc5c5\ub370\uc774\ud2b8 \ub85c\uc9c1\uc774 \ub2e8\uc21c\ud560 \ub54c"}),"\n",(0,s.jsx)(n.li,{children:"\uc0c1\ud0dc \ubcc0\uacbd\uc774 2-3\uac1c\uc758 \uac04\ub2e8\ud55c \uc561\uc158\uc73c\ub85c \uc774\ub904\uc9c8 \ub54c"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"function Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <button onClick={() => setCount(prev => prev + 1)}>\n      Count: {count}\n    </button>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"usereducer\uac00-\uc801\ud569\ud55c-\uacbd\uc6b0",children:"useReducer\uac00 \uc801\ud569\ud55c \uacbd\uc6b0"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\uc5ec\ub7ec \uc0c1\ud0dc\uac00 \uc11c\ub85c \uc5f0\uad00\ub418\uc5b4 \uc788\uc744 \ub54c"}),"\n",(0,s.jsx)(n.li,{children:"\ubcf5\uc7a1\ud55c \uc0c1\ud0dc \uc5c5\ub370\uc774\ud2b8 \ub85c\uc9c1\uc774 \ud544\uc694\ud560 \ub54c"}),"\n",(0,s.jsx)(n.li,{children:"\uc0c1\ud0dc \ubcc0\uacbd \ud328\ud134\uc744 \uc77c\uad00\ub418\uac8c \uad00\ub9ac\ud574\uc57c \ud560 \ub54c"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"function reducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return { ...state, count: state.count + 1 };\n    case 'decrement':\n      return { ...state, count: state.count - 1 };\n    case 'reset':\n      return { count: 0, lastReset: Date.now() };\n    default:\n      return state;\n  }\n}\n\nfunction ComplexCounter() {\n  const [state, dispatch] = useReducer(reducer, { count: 0, lastReset: null });\n  \n  return (\n    <div>\n      <p>Count: {state.count}</p>\n      <button onClick={() => dispatch({ type: 'increment' })}>+</button>\n      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>\n      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>\n    </div>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"2-\ucee4\uc2a4\ud140-\ud6c5\uc758-\uac15\ub825\ud568",children:"2. \ucee4\uc2a4\ud140 \ud6c5\uc758 \uac15\ub825\ud568"}),"\n",(0,s.jsx)(n.p,{children:"\ucee4\uc2a4\ud140 \ud6c5\uc740 React\uc758 \ucf54\ub4dc \uc7ac\uc0ac\uc6a9\uc131\uc744 \ud06c\uac8c \ud5a5\uc0c1\uc2dc\ud0a4\ub294 \uac15\ub825\ud55c \ud328\ud134\uc785\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.h3,{id:"\ucee4\uc2a4\ud140-\ud6c5\uc758-\uc7a5\uc810",children:"\ucee4\uc2a4\ud140 \ud6c5\uc758 \uc7a5\uc810"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\ub85c\uc9c1 \uc7ac\uc0ac\uc6a9\uc131 \ud5a5\uc0c1"}),"\n",(0,s.jsx)(n.li,{children:"\uad00\uc2ec\uc0ac \ubd84\ub9ac\ub97c \ud1b5\ud55c \ucf54\ub4dc \uad6c\uc870\ud654"}),"\n",(0,s.jsx)(n.li,{children:"\ud14c\uc2a4\ud2b8 \uc6a9\uc774\uc131"}),"\n",(0,s.jsx)(n.li,{children:"\ucf54\ub4dc \uac00\ub3c5\uc131 \uac1c\uc120"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"// \uc708\ub3c4\uc6b0 \ud06c\uae30\ub97c \ucd94\uc801\ud558\ub294 \ucee4\uc2a4\ud140 \ud6c5\nfunction useWindowSize() {\n  const [size, setSize] = useState({\n    width: window.innerWidth,\n    height: window.innerHeight\n  });\n\n  useEffect(() => {\n    const handleResize = () => {\n      setSize({\n        width: window.innerWidth,\n        height: window.innerHeight\n      });\n    };\n\n    window.addEventListener('resize', handleResize);\n    return () => window.removeEventListener('resize', handleResize);\n  }, []);\n\n  return size;\n}\n\n// \uc0ac\uc6a9 \uc608\uc2dc\nfunction ResponsiveComponent() {\n  const { width, height } = useWindowSize();\n  \n  return (\n    <div>\n      Window size: {width} x {height}\n    </div>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"3-react\uc758-\uc131\ub2a5-\ucd5c\uc801\ud654-\ud2b8\ub9ac\uc624-memo-usememo-usecallback",children:"3. React\uc758 \uc131\ub2a5 \ucd5c\uc801\ud654 \ud2b8\ub9ac\uc624: memo, useMemo, useCallback"}),"\n",(0,s.jsx)(n.p,{children:"React \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc131\ub2a5\uc744 \ucd5c\uc801\ud654\ud558\ub294 \uc138 \uac00\uc9c0 \ud575\uc2ec \ub3c4\uad6c\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.h3,{id:"reactmemo",children:"React.memo"}),"\n",(0,s.jsx)(n.p,{children:"\ucef4\ud3ec\ub10c\ud2b8\uc758 props\uac00 \ubcc0\uacbd\ub418\uc9c0 \uc54a\uc558\ub2e4\uba74 \ub9ac\ub80c\ub354\ub9c1\uc744 \ubc29\uc9c0\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"const ExpensiveComponent = React.memo(({ data }) => {\n  // \ubcf5\uc7a1\ud55c \ub80c\ub354\ub9c1 \ub85c\uc9c1\n  return <div>{/* \ub80c\ub354\ub9c1 \uacb0\uacfc */}</div>;\n});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"usememo",children:"useMemo"}),"\n",(0,s.jsx)(n.p,{children:"\uacc4\uc0b0 \ube44\uc6a9\uc774 \ud070 \uac12\uc758 \uc7ac\uacc4\uc0b0\uc744 \ubc29\uc9c0\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"function DataProcessor({ data }) {\n  const processedData = useMemo(() => {\n    return data.map(item => expensiveCalculation(item));\n  }, [data]);\n\n  return <div>{processedData.map(item => <Item key={item.id} {...item} />)}</div>;\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"usecallback",children:"useCallback"}),"\n",(0,s.jsx)(n.p,{children:"\ud568\uc218\uc758 \ubd88\ud544\uc694\ud55c \uc7ac\uc0dd\uc131\uc744 \ubc29\uc9c0\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"function ParentComponent({ data }) {\n  const handleClick = useCallback(() => {\n    console.log(data);\n  }, [data]);\n\n  return <ChildComponent onClick={handleClick} />;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"4-useeffect-\ubaa8\ubc94-\uc0ac\ub840\uc640-\uc8fc\uc758\uc0ac\ud56d",children:"4. useEffect: \ubaa8\ubc94 \uc0ac\ub840\uc640 \uc8fc\uc758\uc0ac\ud56d"}),"\n",(0,s.jsx)(n.p,{children:"useEffect\ub294 React\uc758 \ubd80\uc218 \ud6a8\uacfc\ub97c \uad00\ub9ac\ud558\ub294 \ud575\uc2ec \ud6c5\uc785\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.h3,{id:"\ubaa8\ubc94-\uc0ac\ub840",children:"\ubaa8\ubc94 \uc0ac\ub840"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\uc758\uc874\uc131 \ubc30\uc5f4 \uc815\ud655\ud788 \uc9c0\uc815\ud558\uae30"}),"\n",(0,s.jsx)(n.li,{children:"\ud074\ub9b0\uc5c5 \ud568\uc218 \ud65c\uc6a9\ud558\uae30"}),"\n",(0,s.jsx)(n.li,{children:"API \ud638\ucd9c \uad00\ub9ac\ud558\uae30"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"function DataFetcher({ url }) {\n  const [data, setData] = useState(null);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    const controller = new AbortController();\n    \n    async function fetchData() {\n      try {\n        const response = await fetch(url, {\n          signal: controller.signal\n        });\n        const result = await response.json();\n        setData(result);\n      } catch (error) {\n        if (!error.name === 'AbortError') {\n          setError(error);\n        }\n      }\n    }\n\n    fetchData();\n\n    return () => {\n      controller.abort();\n    };\n  }, [url]);\n\n  if (error) return <div>Error: {error.message}</div>;\n  if (!data) return <div>Loading...</div>;\n  \n  return <div>{/* \ub370\uc774\ud130 \ud45c\uc2dc */}</div>;\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\uc8fc\uc758\uc0ac\ud56d",children:"\uc8fc\uc758\uc0ac\ud56d"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\ubb34\ud55c \ub8e8\ud504 \ubc29\uc9c0\ud558\uae30"}),"\n",(0,s.jsx)(n.li,{children:"\ubd88\ud544\uc694\ud55c \uc758\uc874\uc131 \uc81c\uac70\ud558\uae30"}),"\n",(0,s.jsx)(n.li,{children:"\ubd80\uc218 \ud6a8\uacfc \ucd5c\uc18c\ud654\ud558\uae30"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"5-\ucf54\ub4dc-\uc2a4\ud50c\ub9ac\ud305\uacfc-reactlazy",children:"5. \ucf54\ub4dc \uc2a4\ud50c\ub9ac\ud305\uacfc React.lazy"}),"\n",(0,s.jsx)(n.p,{children:"\ub300\uaddc\ubaa8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc131\ub2a5\uc744 \ud5a5\uc0c1\uc2dc\ud0a4\uae30 \uc704\ud55c \ucf54\ub4dc \uc2a4\ud50c\ub9ac\ud305 \uc804\ub7b5\uc744 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"const LazyComponent = React.lazy(() => import('./LazyComponent'));\n\nfunction App() {\n  return (\n    <Suspense fallback={<LoadingSpinner />}>\n      <Routes>\n        <Route \n          path=\"/dashboard\" \n          element={<LazyComponent />} \n        />\n      </Routes>\n    </Suspense>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"6-usecontext-\uc804\uc5ed-\uc0c1\ud0dc-\uad00\ub9ac\uc758-\uac15\ub825\ud568\uacfc-\uc8fc\uc758\uc810",children:"6. useContext: \uc804\uc5ed \uc0c1\ud0dc \uad00\ub9ac\uc758 \uac15\ub825\ud568\uacfc \uc8fc\uc758\uc810"}),"\n",(0,s.jsx)(n.p,{children:"Context API\ub97c \ud1b5\ud55c \uc0c1\ud0dc \uad00\ub9ac\uc758 \uc7a5\ub2e8\uc810\uc744 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"const ThemeContext = React.createContext();\n\nfunction ThemeProvider({ children }) {\n  const [theme, setTheme] = useState('light');\n  \n  const value = useMemo(() => ({\n    theme,\n    setTheme\n  }), [theme]);\n\n  return (\n    <ThemeContext.Provider value={value}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\uc8fc\uc758\uc0ac\ud56d-1",children:"\uc8fc\uc758\uc0ac\ud56d"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Context \uac12 \ubcc0\uacbd \uc2dc \ubaa8\ub4e0 \uc18c\ube44\uc790 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub9ac\ub80c\ub354\ub9c1\ub428"}),"\n",(0,s.jsx)(n.li,{children:"\uc131\ub2a5 \ucd5c\uc801\ud654\ub97c \uc704\ud55c \uc801\uc808\ud55c Context \ubd84\ub9ac \ud544\uc694"}),"\n",(0,s.jsx)(n.li,{children:"\uc0c1\ud0dc \uc5c5\ub370\uc774\ud2b8 \ub85c\uc9c1\uc758 \uc911\uc559\ud654 \ud544\uc694"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"7-\ubcf5\uc7a1\ud55c-\ucef4\ud3ec\ub10c\ud2b8-\uc124\uacc4-\uc6d0\uce59",children:"7. \ubcf5\uc7a1\ud55c \ucef4\ud3ec\ub10c\ud2b8 \uc124\uacc4 \uc6d0\uce59"}),"\n",(0,s.jsx)(n.p,{children:"\ud6a8\uc728\uc801\uc778 React \ucef4\ud3ec\ub10c\ud2b8 \uc124\uacc4\ub97c \uc704\ud55c \ud575\uc2ec \uc6d0\uce59\ub4e4\uc744 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.h3,{id:"\ub2e8\uc77c-\ucc45\uc784-\uc6d0\uce59-srp",children:"\ub2e8\uc77c \ucc45\uc784 \uc6d0\uce59 (SRP)"}),"\n",(0,s.jsx)(n.p,{children:"\uac01 \ucef4\ud3ec\ub10c\ud2b8\ub294 \ud558\ub098\uc758 \ucc45\uc784\ub9cc \uac00\uc838\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"// \uc798\ubabb\ub41c \uc608\nfunction UserProfile({ user }) {\n  return (\n    <div>\n      <UserInfo user={user} />\n      <UserPosts user={user} />\n      <UserFriends user={user} />\n      <UserSettings user={user} />\n    </div>\n  );\n}\n\n// \uc88b\uc740 \uc608\nfunction UserProfile({ user }) {\n  return <UserInfo user={user} />;\n}\n\nfunction UserDashboard({ user }) {\n  return (\n    <div>\n      <UserProfile user={user} />\n      <UserContent user={user} />\n    </div>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\ucef4\ud3ec\ub10c\ud2b8-\uad6c\uc131-\ud328\ud134",children:"\ucef4\ud3ec\ub10c\ud2b8 \uad6c\uc131 \ud328\ud134"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\ucee8\ud14c\uc774\ub108/\ud504\ub808\uc820\ud14c\uc774\uc158 \ud328\ud134"}),"\n",(0,s.jsx)(n.li,{children:"\uace0\ucc28 \ucef4\ud3ec\ub10c\ud2b8 (HOC)"}),"\n",(0,s.jsx)(n.li,{children:"\ucef4\ud3ec\uc9c0\uc158"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"8-\uc131\ub2a5-\ubd84\uc11d-\ub3c4\uad6c\uc640-\uae30\ubc95",children:"8. \uc131\ub2a5 \ubd84\uc11d \ub3c4\uad6c\uc640 \uae30\ubc95"}),"\n",(0,s.jsx)(n.p,{children:"React \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc131\ub2a5\uc744 \ubd84\uc11d\ud558\uace0 \ucd5c\uc801\ud654\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.h3,{id:"\uc8fc\uc694-\ub3c4\uad6c",children:"\uc8fc\uc694 \ub3c4\uad6c"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"React Developer Tools"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Components \ud0ed"}),"\n",(0,s.jsx)(n.li,{children:"Profiler \ud0ed"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Chrome DevTools"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Performance \ud0ed"}),"\n",(0,s.jsx)(n.li,{children:"Network \ud0ed"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Lighthouse"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\uc131\ub2a5 \uc810\uc218"}),"\n",(0,s.jsx)(n.li,{children:"\ucd5c\uc801\ud654 \uc81c\uc548"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"why-did-you-render-\ud65c\uc6a9",children:"why-did-you-render \ud65c\uc6a9"}),"\n",(0,s.jsx)(n.p,{children:"\ubd88\ud544\uc694\ud55c \ub9ac\ub80c\ub354\ub9c1\uc744 \ucc3e\uc544\ub0b4\ub294 \uac15\ub825\ud55c \ub3c4\uad6c\uc785\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import whyDidYouRender from '@welldone-software/why-did-you-render';\nimport React from 'react';\n\nif (process.env.NODE_ENV === 'development') {\n  whyDidYouRender(React, {\n    trackAllPureComponents: true,\n  });\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"9-todo-\ub9ac\uc2a4\ud2b8-\uc2e4\uc2dc\uac04-\uc0c1\ud0dc-\uad00\ub9ac",children:"9. Todo \ub9ac\uc2a4\ud2b8 \uc2e4\uc2dc\uac04 \uc0c1\ud0dc \uad00\ub9ac"}),"\n",(0,s.jsx)(n.p,{children:"\uc2e4\uc81c \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc790\uc8fc \uad6c\ud604\ud558\uac8c \ub418\ub294 Todo \ub9ac\uc2a4\ud2b8\ub97c \ud1b5\ud574 \uc0c1\ud0dc \uad00\ub9ac \uc804\ub7b5\uc744 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"function useTodoList() {\n  const [todos, setTodos] = useState([]);\n\n  const addTodo = useCallback((text) => {\n    setTodos(prev => [...prev, {\n      id: Date.now(),\n      text,\n      completed: false\n    }]);\n  }, []);\n\n  const deleteTodo = useCallback((id) => {\n    setTodos(prev => prev.filter(todo => todo.id !== id));\n  }, []);\n\n  const toggleTodo = useCallback((id) => {\n    setTodos(prev => prev.map(todo =>\n      todo.id === id\n        ? { ...todo, completed: !todo.completed }\n        : todo\n    ));\n  }, []);\n\n  return {\n    todos,\n    addTodo,\n    deleteTodo,\n    toggleTodo\n  };\n}\n\nfunction TodoApp() {\n  const { todos, addTodo, deleteTodo, toggleTodo } = useTodoList();\n  const [input, setInput] = useState('');\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    if (!input.trim()) return;\n    addTodo(input);\n    setInput('');\n  };\n\n  return (\n    <div>\n      <form onSubmit={handleSubmit}>\n        <input\n          value={input}\n          onChange={e => setInput(e.target.value)}\n          placeholder=\"Add a todo\"\n        />\n        <button type=\"submit\">Add</button>\n      </form>\n      <ul>\n        {todos.map(todo => (\n          <li key={todo.id}>\n            <input\n              type=\"checkbox\"\n              checked={todo.completed}\n              onChange={() => toggleTodo(todo.id)}\n            />\n            <span style={{\n              textDecoration: todo.completed ? 'line-through' : 'none'\n            }}>\n              {todo.text}\n            </span>\n            <button onClick={() => deleteTodo(todo.id)}>Delete</button>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"10-virtual-dom\uacfc-\uc131\ub2a5-\ucd5c\uc801\ud654",children:"10. Virtual DOM\uacfc \uc131\ub2a5 \ucd5c\uc801\ud654"}),"\n",(0,s.jsx)(n.p,{children:"React\uc758 Virtual DOM\uc774 \uc5b4\ub5bb\uac8c \uc131\ub2a5\uc744 \ucd5c\uc801\ud654\ud558\ub294\uc9c0 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.h3,{id:"virtual-dom\uc758-\uc791\ub3d9-\uc6d0\ub9ac",children:"Virtual DOM\uc758 \uc791\ub3d9 \uc6d0\ub9ac"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\uc0c1\ud0dc \ubcc0\uacbd \ubc1c\uc0dd"}),"\n",(0,s.jsx)(n.li,{children:"\uc0c8\ub85c\uc6b4 Virtual DOM \ud2b8\ub9ac \uc0dd\uc131"}),"\n",(0,s.jsx)(n.li,{children:"\uc774\uc804 Virtual DOM\uacfc \ube44\uad50 (Diffing)"}),"\n",(0,s.jsx)(n.li,{children:"\uc2e4\uc81c DOM\uc5d0 \ucd5c\uc18c\ud55c\uc758 \ubcc0\uacbd\uc0ac\ud56d \uc801\uc6a9"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\uc131\ub2a5-\ucd5c\uc801\ud654-\uc804\ub7b5",children:"\uc131\ub2a5 \ucd5c\uc801\ud654 \uc804\ub7b5"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\ubd88\ud544\uc694\ud55c \ub9ac\ub80c\ub354\ub9c1 \ubc29\uc9c0"}),"\n",(0,s.jsx)(n.li,{children:"\uc0c1\ud0dc \uc5c5\ub370\uc774\ud2b8 \uc77c\uad04 \ucc98\ub9ac"}),"\n",(0,s.jsx)(n.li,{children:"\ucef4\ud3ec\ub10c\ud2b8 \ubd84\ud560\uacfc \uba54\ubaa8\uc774\uc81c\uc774\uc158"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\ub9c8\ubb34\ub9ac",children:"\ub9c8\ubb34\ub9ac"}),"\n",(0,s.jsx)(n.p,{children:"\uc774\ub7ec\ud55c \uac1c\ub150\ub4e4\uc740 \uc2e4\uc81c \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \ub2e4\uc591\ud55c \ubc29\uc2dd\uc73c\ub85c \ud65c\uc6a9\ub429\ub2c8\ub2e4. \uba74\uc811\uc5d0\uc11c\ub294 \uc774\ub860\uc801\uc778 \uc774\ud574\ubfd0\ub9cc \uc544\ub2c8\ub77c, \uc2e4\uc81c \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c\uc758 \uc801\uc6a9 \uacbd\ud5d8\uacfc \ubb38\uc81c \ud574\uacb0 \uc0ac\ub840\ub97c \uc900\ube44\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4. \ud2b9\ud788 \uc131\ub2a5 \ucd5c\uc801\ud654\ub098 \uc0c1\ud0dc \uad00\ub9ac\uc640 \uad00\ub828\ub41c \uc2e4\uc81c \uacbd\ud5d8\uc740 \uba74\uc811\uad00\ub4e4\uc774 \ud070 \uad00\uc2ec\uc744 \uac00\uc9c0\ub294 \ubd80\ubd84\uc785\ub2c8\ub2e4."})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(6540);const r={},l=s.createContext(r);function i(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);