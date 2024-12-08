## 1. Node.js 개념과 특징
- Node.js는 Chrome의 V8 JavaScript 엔진으로 만들어진 서버 사이드 플랫폼입니다.
- 비동기 이벤트 기반 구조를 가지고 있어 높은 처리 성능을 보여줍니다.
- 싱글 스레드 기반이지만 이벤트 루프를 통해 비동기 작업을 효율적으로 처리합니다.

## 2. Node.js의 주요 특징과 장점
- Non-blocking I/O: 비동기 처리로 대규모 네트워크 애플리케이션에 적합
- NPM(Node Package Manager): 풍부한 오픈소스 패키지 생태계 제공
- 자바스크립트 기반: 프론트엔드와 백엔드 모두 JavaScript로 개발 가능

## 3. 핵심 개념과 문법

#### A. 모듈 시스템
```javascript
// 모듈 내보내기 (exports)
module.exports = {
    function1: function() {},
    variable1: value
};

// 모듈 가져오기 (require)
const myModule = require('./myModule');
```

#### B. 비동기 처리
```javascript
// Promise 사용
function asyncFunction() {
    return new Promise((resolve, reject) => {
        // 비동기 작업
        if (success) {
            resolve(result);
        } else {
            reject(error);
        }
    });
}

// async/await 사용
async function handleData() {
    try {
        const result = await asyncFunction();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
```

#### C. 이벤트 처리
```javascript
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// 이벤트 리스너 등록
myEmitter.on('event', (data) => {
    console.log('이벤트 발생:', data);
});

// 이벤트 발생
myEmitter.emit('event', '데이터');
```

## 4. 주요 내장 모듈

#### A. File System (fs)
```javascript
const fs = require('fs');

// 파일 읽기
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// 파일 쓰기
fs.writeFile('file.txt', '내용', (err) => {
    if (err) throw err;
    console.log('파일 저장 완료');
});
```

#### B. HTTP 모듈
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
});

server.listen(3000, () => {
    console.log('서버가 3000번 포트에서 실행중입니다.');
});
```
