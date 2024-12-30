>작성일 : 2024.12.06
## 1. Event Loop와 비동기 처리
- Event Loop: JavaScript가 싱글스레드임에도 비동기 작업을 처리할 수 있게 하는 메커니즘
- 실행 과정:
  1. 콜스택에서 동기 코드 실행
  2. 비동기 작업은 Web API로 이동
  3. 완료된 작업은 콜백큐로 이동
  4. Event Loop가 콜스택이 비었을 때 콜백큐의 작업을 콜스택으로 이동

예시 코드:
```javascript
console.log('1');
setTimeout(() => console.log('2'), 0);
console.log('3');
// 출력: 1, 3, 2
```
#### 모범답안
```
Event Loop는 Node.js의 비동기 처리를 가능하게 하는 핵심 메커니즘입니다. 싱글스레드인 JavaScript가 비동기 작업을 처리할 수 있게 해주죠.

동작 방식을 설명하면:
1) 동기 코드는 콜스택에서 즉시 실행됩니다
2) setTimeout 같은 비동기 작업은 Web API로 넘어갑니다
3) 완료된 작업은 콜백큐로 이동합니다
4) Event Loop가 콜스택이 비었을 때 큐의 작업을 스택으로 가져옵니다

실제 프로젝트에서는 이를 활용해 대용량 파일 처리나 네트워크 요청을 효율적으로 처리할 수 있었습니다.
```

## 2. Node.js 특징
싱글스레드:
- 메인 스레드 하나로 동작
- 멀티스레드 대비 컨텍스트 스위칭 비용 감소
- CPU 집약적 작업에는 워커스레드 활용 필요

논블로킹 I/O:
- 파일 읽기/쓰기, 네트워크 요청 등을 비동기로 처리
- 작업 완료를 기다리지 않고 다음 코드 실행
```javascript
fs.readFile('file.txt', (err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log('다음 작업 실행');
```
#### 모범답안
```
Node.js는 이벤트 기반 비동기 I/O 모델을 사용합니다.

1) 메인 스레드는 요청을 받아 작업을 이벤트 루프로 전달합니다
2) I/O 작업은 워커 스레드 풀로 위임됩니다
3) 비동기로 처리되어 블로킹 없이 다음 요청을 받을 수 있습니다
4) 완료된 작업은 콜백으로 처리됩니다

실제로 libuv 라이브러리가 이런 비동기 처리를 담당하며, CPU 작업이 많은 경우는 클러스터 모듈로 멀티 프로세스를 활용합니다.
```
## 3. Express.js와 실제 개발
미들웨어:
```javascript
app.use((req, res, next) => {
  console.log('로깅 미들웨어');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello');
});
```

에러 핸들링:
```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('서버 에러 발생');
});
```

메모리 누수 관리:
- 글로벌 변수 사용 최소화
- 이벤트 리스너 제거
- 스트림 종료 처리
```javascript
const stream = fs.createReadStream('big.file');
stream.on('end', () => stream.destroy());
```
#### 모범답안
```
미들웨어는 요청-응답 사이클에서 순차적으로 실행되는 함수들입니다.

특징:
1) req, res, next 파라미터를 가집니다
2) next()로 다음 미들웨어로 제어를 넘깁니다
3) 순서가 중요하며 에러 처리는 마지막에 위치합니다

주로 인증, 로깅, 에러 처리 등에 활용했으며, 커스텀 미들웨어로 반복되는 로직을 모듈화할 수 있었습니다.
```
## 4. 성능 최적화
클러스터링:
```javascript
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  // 워커 프로세스 코드
}
```

성능 모니터링:
- New Relic, PM2 등 도구 활용
- 메모리 사용량, CPU 사용률 모니터링
- 응답시간, 처리량 측정
#### 모범답안
```
Node.js에서 메모리 누수는 주로 다음 원인으로 발생합니다:

1) 글로벌/정적 변수의 무분별한 사용
2) 이벤트 리스너 미제거
3) 클로저의 부적절한 사용
4) 스트림 미종료

해결책:
- heap-snapshot으로 메모리 분석
- 주기적인 가비지 컬렉션
- 리스너 cleanup 코드 작성
- 스트림 작업 후 명시적 종료

실제로 프로젝트에서 메모리 릭을 debugger로 추적하고 해결한 경험이 있습니다.
```

## 5. 보안 대책
SQL 인젝션 방지:
```javascript
// 잘못된 예
db.query(`SELECT * FROM users WHERE id = ${userId}`);

// 올바른 예
db.query('SELECT * FROM users WHERE id = ?', [userId]);
```

XSS 대책:
- 입력값 이스케이프 처리
- helmet 미들웨어 사용
```javascript
const helmet = require('helmet');
app.use(helmet());
```

CSRF 보호:
```javascript
const csrf = require('csurf');
app.use(csrf({ cookie: true }));
```

## 6. REST API 설계 원칙
1. 자원을 URI로 표현 (명사 사용)
2. 행위는 HTTP 메서드로 표현
3. 응답은 적절한 상태코드 사용
4. 버저닝 관리
5. HATEOAS 원칙 준수

##### 버저닝
- API의 버전을 관리하는 방식
- API 변경시 하위 호환성 유지
- 주요 방법:
    1. URI: `/api/v1/users`
    2. 헤더: `Accept: application/vnd.company.myapp-v1+json`
    3. 파라미터: `/users?version=1`

1. URL 베이스 버전:
	- `/api/v1/*` 형태로 모든 API에 기본 적용
	- 명시적이지만 URL이 지저분해짐
2. 헤더 기반 버전:
	- 요청 헤더에 버전 정보 포함
	- URL은 깔끔하나 관리가 복잡
##### HATEOAS (Hypermedia As The Engine Of Application State)
- REST API에서 리소스간 관계를 하이퍼링크로 표현
- 클라이언트가 API 구조를 동적으로 파악 가능
```json
{
  "id": 123,
  "name": "John",
  "_links": {
    "self": "/users/123",
    "friends": "/users/123/friends",
    "profile": "/users/123/profile"
  }
}
```