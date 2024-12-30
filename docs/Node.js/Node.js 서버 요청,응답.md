>작성일 : 2024.12.06
## 1. **기본 설정**
```javascript
const express = require('express');
const app = express();

// 핵심 미들웨어
app.use(express.json());         // JSON 처리
app.use(cors());                 // CORS 
app.use(helmet());              // 보안
app.use(morgan('dev'));         // 로깅
```

## 2. HTTP 요청 처리 방식
```javascript
// 1) Query String: /users?page=1&limit=10
app.get('/users', (req, res) => {
    const { page, limit } = req.query;
});

// 2) Path Parameter: /users/123
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
});

// 3) Request Body
app.post('/users', (req, res) => {
    const { name, email } = req.body;
});

// 4) Headers (인증 등)
app.get('/auth', (req, res) => {
    const token = req.headers.authorization;
});
```

## 3. 응답 처리
```javascript
// 성공 응답
res.status(200).json({
    success: true,
    data: users,
    meta: {
        page: 1,
        total: 100
    }
});

// 에러 응답
res.status(400).json({
    success: false,
    error: {
        code: 'INVALID_INPUT',
        message: '잘못된 입력입니다'
    }
});
```

## 4. 실용적인 에러 처리
```javascript
class AppError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
        this.code = `ERR_${status}`;
    }
}

app.use((err, req, res, next) => {
    console.error(err.stack);
    
    if (err instanceof AppError) {
        return res.status(err.status).json({
            success: false,
            error: {
                code: err.code,
                message: err.message
            }
        });
    }

    res.status(500).json({
        success: false,
        error: {
            code: 'INTERNAL_ERROR',
            message: '서버 오류'
        }
    });
});
```

## 5. 유용한 패턴
```javascript
// 응답 헬퍼
const response = {
    success: (res, data, status = 200) => {
        res.status(status).json({
            success: true,
            data
        });
    },
    error: (res, error, status = 400) => {
        res.status(status).json({
            success: false,
            error: {
                message: error.message
            }
        });
    }
};

// 유효성 검사
app.post('/users',
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return response.error(res, { message: '잘못된 입력' });
        }
    }
);

// 인증 미들웨어
const auth = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return response.error(res, { message: '인증 필요' }, 401);
    }
    try {
        req.user = await verifyToken(token);
        next();
    } catch (error) {
        response.error(res, { message: '유효하지 않은 토큰' }, 401);
    }
};
```

## 6. 주요 상태 코드
- 200: 성공
- 201: 생성됨
- 400: 잘못된 요청
- 401: 인증 필요
- 403: 권한 없음
- 404: 찾을 수 없음
- 500: 서버 오류

## 7. 파일 처리
```javascript
// 파일 업로드
const multer = require('multer');
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {
    res.json({ file: req.file });
});

// 파일 다운로드
app.get('/download/:filename', (req, res) => {
    res.download(`uploads/${req.params.filename}`);
});
```

## 8. 비동기 처리 최적화
```javascript
// 에러 캐치 래퍼
const asyncHandler = fn => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);

// 병렬 처리
app.get('/dashboard', async (req, res) => {
    const [users, products, orders] = await Promise.all([
        User.find(),
        Product.find(),
        Order.find()
    ]);
    res.json({ users, products, orders });
});
```

## 9. 라우터 모듈화
```javascript
// users.routes.js
const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

// app.js
app.use('/api/users', userRouter);
```

## 10. 미들웨어 체인
```javascript
app.post('/users',
    auth,                    // 인증
    validate,                // 유효성 검사
    checkDuplicates,        // 중복 확인
    asyncHandler(createUser) // 생성
);
```

## 11. 환경 설정
```javascript
require('dotenv').config();

const config = {
    port: process.env.PORT || 3000,
    dbUri: process.env.MONGODB_URI,
    jwtSecret: process.env.JWT_SECRET
};
```

## 12. 캐싱
```javascript
const cache = require('memory-cache');

app.get('/data', async (req, res) => {
    const cached = cache.get('data');
    if (cached) {
        return res.json(cached);
    }
    
    const data = await fetchData();
    cache.put('data', data, 5 * 60 * 1000); // 5분
    res.json(data);
});
```