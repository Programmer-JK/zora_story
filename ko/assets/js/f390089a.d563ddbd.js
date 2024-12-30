"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[731],{8815:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>i});var r=s(4848),a=s(8453);const t={},o=void 0,c={id:"Node.js/Node.js \uc11c\ubc84 \uc694\uccad,\uc751\ub2f5",title:"Node.js \uc11c\ubc84 \uc694\uccad,\uc751\ub2f5",description:"\uc791\uc131\uc77c : 2024.12.06",source:"@site/docs/Node.js/Node.js \uc11c\ubc84 \uc694\uccad,\uc751\ub2f5.md",sourceDirName:"Node.js",slug:"/Node.js/Node.js \uc11c\ubc84 \uc694\uccad,\uc751\ub2f5",permalink:"/zora_story/ko/docs/Node.js/Node.js \uc11c\ubc84 \uc694\uccad,\uc751\ub2f5",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"studySidebar",previous:{title:"Node.js \uba74\uc811 \uc900\ube44",permalink:"/zora_story/ko/docs/Node.js/Node.js \uba74\uc811 \uc900\ube44"},next:{title:"Node.js \uc2ec\ud654",permalink:"/zora_story/ko/docs/Node.js/Node.js \uc2ec\ud654"}},l={},i=[{value:"1. <strong>\uae30\ubcf8 \uc124\uc815</strong>",id:"1-\uae30\ubcf8-\uc124\uc815",level:2},{value:"2. HTTP \uc694\uccad \ucc98\ub9ac \ubc29\uc2dd",id:"2-http-\uc694\uccad-\ucc98\ub9ac-\ubc29\uc2dd",level:2},{value:"3. \uc751\ub2f5 \ucc98\ub9ac",id:"3-\uc751\ub2f5-\ucc98\ub9ac",level:2},{value:"4. \uc2e4\uc6a9\uc801\uc778 \uc5d0\ub7ec \ucc98\ub9ac",id:"4-\uc2e4\uc6a9\uc801\uc778-\uc5d0\ub7ec-\ucc98\ub9ac",level:2},{value:"5. \uc720\uc6a9\ud55c \ud328\ud134",id:"5-\uc720\uc6a9\ud55c-\ud328\ud134",level:2},{value:"6. \uc8fc\uc694 \uc0c1\ud0dc \ucf54\ub4dc",id:"6-\uc8fc\uc694-\uc0c1\ud0dc-\ucf54\ub4dc",level:2},{value:"7. \ud30c\uc77c \ucc98\ub9ac",id:"7-\ud30c\uc77c-\ucc98\ub9ac",level:2},{value:"8. \ube44\ub3d9\uae30 \ucc98\ub9ac \ucd5c\uc801\ud654",id:"8-\ube44\ub3d9\uae30-\ucc98\ub9ac-\ucd5c\uc801\ud654",level:2},{value:"9. \ub77c\uc6b0\ud130 \ubaa8\ub4c8\ud654",id:"9-\ub77c\uc6b0\ud130-\ubaa8\ub4c8\ud654",level:2},{value:"10. \ubbf8\ub4e4\uc6e8\uc5b4 \uccb4\uc778",id:"10-\ubbf8\ub4e4\uc6e8\uc5b4-\uccb4\uc778",level:2},{value:"11. \ud658\uacbd \uc124\uc815",id:"11-\ud658\uacbd-\uc124\uc815",level:2},{value:"12. \uce90\uc2f1",id:"12-\uce90\uc2f1",level:2}];function d(e){const n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\uc791\uc131\uc77c : 2024.12.06"}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"1-\uae30\ubcf8-\uc124\uc815",children:["1. ",(0,r.jsx)(n.strong,{children:"\uae30\ubcf8 \uc124\uc815"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const express = require('express');\nconst app = express();\n\n// \ud575\uc2ec \ubbf8\ub4e4\uc6e8\uc5b4\napp.use(express.json());         // JSON \ucc98\ub9ac\napp.use(cors());                 // CORS \napp.use(helmet());              // \ubcf4\uc548\napp.use(morgan('dev'));         // \ub85c\uae45\n"})}),"\n",(0,r.jsx)(n.h2,{id:"2-http-\uc694\uccad-\ucc98\ub9ac-\ubc29\uc2dd",children:"2. HTTP \uc694\uccad \ucc98\ub9ac \ubc29\uc2dd"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// 1) Query String: /users?page=1&limit=10\napp.get('/users', (req, res) => {\n    const { page, limit } = req.query;\n});\n\n// 2) Path Parameter: /users/123\napp.get('/users/:id', (req, res) => {\n    const { id } = req.params;\n});\n\n// 3) Request Body\napp.post('/users', (req, res) => {\n    const { name, email } = req.body;\n});\n\n// 4) Headers (\uc778\uc99d \ub4f1)\napp.get('/auth', (req, res) => {\n    const token = req.headers.authorization;\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"3-\uc751\ub2f5-\ucc98\ub9ac",children:"3. \uc751\ub2f5 \ucc98\ub9ac"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// \uc131\uacf5 \uc751\ub2f5\nres.status(200).json({\n    success: true,\n    data: users,\n    meta: {\n        page: 1,\n        total: 100\n    }\n});\n\n// \uc5d0\ub7ec \uc751\ub2f5\nres.status(400).json({\n    success: false,\n    error: {\n        code: 'INVALID_INPUT',\n        message: '\uc798\ubabb\ub41c \uc785\ub825\uc785\ub2c8\ub2e4'\n    }\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"4-\uc2e4\uc6a9\uc801\uc778-\uc5d0\ub7ec-\ucc98\ub9ac",children:"4. \uc2e4\uc6a9\uc801\uc778 \uc5d0\ub7ec \ucc98\ub9ac"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"class AppError extends Error {\n    constructor(message, status) {\n        super(message);\n        this.status = status;\n        this.code = `ERR_${status}`;\n    }\n}\n\napp.use((err, req, res, next) => {\n    console.error(err.stack);\n    \n    if (err instanceof AppError) {\n        return res.status(err.status).json({\n            success: false,\n            error: {\n                code: err.code,\n                message: err.message\n            }\n        });\n    }\n\n    res.status(500).json({\n        success: false,\n        error: {\n            code: 'INTERNAL_ERROR',\n            message: '\uc11c\ubc84 \uc624\ub958'\n        }\n    });\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"5-\uc720\uc6a9\ud55c-\ud328\ud134",children:"5. \uc720\uc6a9\ud55c \ud328\ud134"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// \uc751\ub2f5 \ud5ec\ud37c\nconst response = {\n    success: (res, data, status = 200) => {\n        res.status(status).json({\n            success: true,\n            data\n        });\n    },\n    error: (res, error, status = 400) => {\n        res.status(status).json({\n            success: false,\n            error: {\n                message: error.message\n            }\n        });\n    }\n};\n\n// \uc720\ud6a8\uc131 \uac80\uc0ac\napp.post('/users',\n    body('email').isEmail(),\n    body('password').isLength({ min: 6 }),\n    (req, res) => {\n        const errors = validationResult(req);\n        if (!errors.isEmpty()) {\n            return response.error(res, { message: '\uc798\ubabb\ub41c \uc785\ub825' });\n        }\n    }\n);\n\n// \uc778\uc99d \ubbf8\ub4e4\uc6e8\uc5b4\nconst auth = async (req, res, next) => {\n    const token = req.headers.authorization?.split(' ')[1];\n    if (!token) {\n        return response.error(res, { message: '\uc778\uc99d \ud544\uc694' }, 401);\n    }\n    try {\n        req.user = await verifyToken(token);\n        next();\n    } catch (error) {\n        response.error(res, { message: '\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \ud1a0\ud070' }, 401);\n    }\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"6-\uc8fc\uc694-\uc0c1\ud0dc-\ucf54\ub4dc",children:"6. \uc8fc\uc694 \uc0c1\ud0dc \ucf54\ub4dc"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"200: \uc131\uacf5"}),"\n",(0,r.jsx)(n.li,{children:"201: \uc0dd\uc131\ub428"}),"\n",(0,r.jsx)(n.li,{children:"400: \uc798\ubabb\ub41c \uc694\uccad"}),"\n",(0,r.jsx)(n.li,{children:"401: \uc778\uc99d \ud544\uc694"}),"\n",(0,r.jsx)(n.li,{children:"403: \uad8c\ud55c \uc5c6\uc74c"}),"\n",(0,r.jsx)(n.li,{children:"404: \ucc3e\uc744 \uc218 \uc5c6\uc74c"}),"\n",(0,r.jsx)(n.li,{children:"500: \uc11c\ubc84 \uc624\ub958"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"7-\ud30c\uc77c-\ucc98\ub9ac",children:"7. \ud30c\uc77c \ucc98\ub9ac"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// \ud30c\uc77c \uc5c5\ub85c\ub4dc\nconst multer = require('multer');\nconst storage = multer.diskStorage({\n    destination: 'uploads/',\n    filename: (req, file, cb) => {\n        cb(null, Date.now() + '-' + file.originalname);\n    }\n});\nconst upload = multer({ storage });\n\napp.post('/upload', upload.single('file'), (req, res) => {\n    res.json({ file: req.file });\n});\n\n// \ud30c\uc77c \ub2e4\uc6b4\ub85c\ub4dc\napp.get('/download/:filename', (req, res) => {\n    res.download(`uploads/${req.params.filename}`);\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"8-\ube44\ub3d9\uae30-\ucc98\ub9ac-\ucd5c\uc801\ud654",children:"8. \ube44\ub3d9\uae30 \ucc98\ub9ac \ucd5c\uc801\ud654"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// \uc5d0\ub7ec \uce90\uce58 \ub798\ud37c\nconst asyncHandler = fn => (req, res, next) =>\n    Promise.resolve(fn(req, res, next)).catch(next);\n\n// \ubcd1\ub82c \ucc98\ub9ac\napp.get('/dashboard', async (req, res) => {\n    const [users, products, orders] = await Promise.all([\n        User.find(),\n        Product.find(),\n        Order.find()\n    ]);\n    res.json({ users, products, orders });\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"9-\ub77c\uc6b0\ud130-\ubaa8\ub4c8\ud654",children:"9. \ub77c\uc6b0\ud130 \ubaa8\ub4c8\ud654"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// users.routes.js\nconst router = express.Router();\n\nrouter.get('/', getUsers);\nrouter.post('/', createUser);\nrouter.put('/:id', updateUser);\nrouter.delete('/:id', deleteUser);\n\n// app.js\napp.use('/api/users', userRouter);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"10-\ubbf8\ub4e4\uc6e8\uc5b4-\uccb4\uc778",children:"10. \ubbf8\ub4e4\uc6e8\uc5b4 \uccb4\uc778"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"app.post('/users',\n    auth,                    // \uc778\uc99d\n    validate,                // \uc720\ud6a8\uc131 \uac80\uc0ac\n    checkDuplicates,        // \uc911\ubcf5 \ud655\uc778\n    asyncHandler(createUser) // \uc0dd\uc131\n);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"11-\ud658\uacbd-\uc124\uc815",children:"11. \ud658\uacbd \uc124\uc815"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"require('dotenv').config();\n\nconst config = {\n    port: process.env.PORT || 3000,\n    dbUri: process.env.MONGODB_URI,\n    jwtSecret: process.env.JWT_SECRET\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"12-\uce90\uc2f1",children:"12. \uce90\uc2f1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const cache = require('memory-cache');\n\napp.get('/data', async (req, res) => {\n    const cached = cache.get('data');\n    if (cached) {\n        return res.json(cached);\n    }\n    \n    const data = await fetchData();\n    cache.put('data', data, 5 * 60 * 1000); // 5\ubd84\n    res.json(data);\n});\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var r=s(6540);const a={},t=r.createContext(a);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);