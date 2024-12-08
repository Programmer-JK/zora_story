## 1. Node.js 내부 구조
#### A. V8 엔진
- Google이 개발한 고성능 JavaScript 엔진
- JavaScript 코드를 기계어로 컴파일하여 실행
- JIT(Just-In-Time) 컴파일러를 사용해 실행 시점에 최적화

#### B. 이벤트 루프 상세 동작
```javascript
// 이벤트 루프의 실행 순서 예시
console.log('1'); // 동기 작업

setTimeout(() => {
    console.log('2'); // 매크로태스크
}, 0);

Promise.resolve()
    .then(() => console.log('3')); // 마이크로태스크

console.log('4');

// 출력 순서: 1, 4, 3, 2
```
실행 순서 설명:
1. 콜 스택의 동기 작업 실행
2. 마이크로태스크 큐의 작업 실행 (Promise)
3. 매크로태스크 큐의 작업 실행 (setTimeout, setInterval 등)

#### C. libuv
- Node.js의 비동기 I/O를 처리하는 핵심 라이브러리
- 이벤트 루프 구현
- 스레드 풀을 통한 파일 시스템 작업 처리

## 2. 고급 개념과 기능
#### A. 스트림(Streams)
```javascript
const fs = require('fs');

// 읽기 스트림 생성
const readStream = fs.createReadStream('input.txt');

// 쓰기 스트림 생성
const writeStream = fs.createWriteStream('output.txt');

// 파이프로 스트림 연결
readStream.pipe(writeStream);

// 스트림 이벤트 처리
readStream.on('data', (chunk) => {
    console.log('데이터 청크:', chunk);
});

readStream.on('end', () => {
    console.log('읽기 완료');
});
```

#### B. 버퍼(Buffer)
```javascript
// 버퍼 생성
const buf = Buffer.from('Hello World');

// 버퍼 조작
console.log(buf.toString()); // Hello World
console.log(buf.length); // 11
console.log(buf[0]); // 72 (ASCII 코드)

// 버퍼 결합
const buf1 = Buffer.from('Hello ');
const buf2 = Buffer.from('World');
const buf3 = Buffer.concat([buf1, buf2]);
```

#### C. 클러스터(Cluster)
```javascript
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    // 마스터 프로세스
    console.log(`마스터 프로세스 ${process.pid} 실행`);

    // CPU 코어 수만큼 워커 생성
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`워커 ${worker.process.pid} 종료`);
    });
} else {
    // 워커 프로세스
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('hello world\n');
    }).listen(8000);

    console.log(`워커 ${process.pid} 시작`);
}
```

## 3. 디자인 패턴과 Best Practices

#### A. 미들웨어 패턴 (Express.js 예시)
```javascript
const express = require('express');
const app = express();

// 커스텀 미들웨어
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

// 미들웨어 등록
app.use(logger);
app.use(express.json());

// 라우트 핸들러
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000);
```

#### B. 에러 처리
```javascript
// 비동기 에러 처리
process.on('uncaughtException', (err) => {
    console.error('예상치 못한 에러:', err);
    // 정상적인 종료 처리
    process.exit(1);
});

// Express.js 에러 처리 미들웨어
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
```

## 4. 성능 최적화
#### A. 메모리 누수 방지
```javascript
// 이벤트 리스너 제거
const listener = () => console.log('이벤트 발생');
emitter.on('event', listener);
// 사용 완료 후
emitter.removeListener('event', listener);

// 캐시 사용
const cache = new Map();
function getData(key) {
    if (cache.has(key)) {
        return cache.get(key);
    }
    const data = // 데이터 조회
    cache.set(key, data);
    return data;
}
```

#### B. 프로파일링
```javascript
// CPU 프로파일링
const profiler = require('v8-profiler-next');
profiler.startProfiling('CPU Profile');

setTimeout(() => {
    const profile = profiler.stopProfiling();
    profile.export((error, result) => {
        // 프로파일 데이터 저장
    });
}, 10000);
```

## 5. 보안 Best Practices
```javascript
// 입력 검증
const validator = require('validator');

app.post('/api/user', (req, res) => {
    if (!validator.isEmail(req.body.email)) {
        return res.status(400).send('Invalid email');
    }
    // 처리 로직
});

// XSS 방지
const helmet = require('helmet');
app.use(helmet());

// Rate Limiting
const rateLimit = require('express-rate-limit');
app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15분
    max: 100 // IP당 최대 요청 수
}));
```