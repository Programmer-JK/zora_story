> 작성일 : 2024.12.22

## 목차

1. [현재 상황 분석](#현재-상황-분석)
2. [문제점 파악](#문제점-파악)
3. [해결 방안](#해결-방안)
4. [동작 프로세스](#동작-프로세스)
5. [구현의 장점](#구현의-장점)
6. [주의사항](#주의사항)

## 현재 상황 분석

### Next.js Rewrite 설정

현재 next.config.js에서는 모든 API 요청을 특정 서버로 리다이렉트하도록 설정되어 있습니다:

```javascript
// next.config.js
{
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://15.164.142.195/api/:path*'
      }
    ]
  }
}
```

### 현재 Fetch 구현

기존의 Fetch 함수는 다음과 같이 구현되어 있습니다:

```typescript
export const Fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
  return fetch(`${getURL()}/${input}`, init);
};
```

### API 호출 체인

현재의 호출 체인은 다음과 같은 과정을 거칩니다:

```typescript
handleLogout()
→ FetchWithCookie('api/auth/logout')
→ Fetch('api/auth/logout')
→ fetch('http://15.164.142.195/api/api/auth/logout')  // URL 중복 발생!
```

## 문제점 파악

### 1. URL 중복 문제

- input으로 'api/auth/logout' 전달
- getURL()이 'http://15.164.142.195/api' 반환
- 최종 URL: 'http://15.164.142.195/api/api/auth/logout'
- 'api'가 경로에 중복으로 포함되는 문제 발생

### 2. Rewrite 기능 무력화

- Next.js의 rewrite는 상대 경로 요청에만 동작
- 전체 URL 사용 시 rewrite 동작하지 않음
- 결과적으로 CORS 에러 발생

## 해결 방안

### 1. Fetch 함수 최적화

두 가지 접근 방식을 고려할 수 있습니다:

#### 방법 1: getURL 제거

```typescript
export const Fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
  return fetch(input, init);
};
```

#### 방법 2: URL 타입 체크 추가

```typescript
export const Fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
  const url = input.toString().startsWith("http")
    ? input
    : `/${input.toString().replace(/^\//, "")}`; // 앞쪽 슬래시 정규화
  return fetch(url, init);
};
```

### 2. FetchWithCookie 구현 유지

서버 사이드 렌더링과 쿠키 처리를 위한 구현:

```typescript
export const FetchWithCookie = async (
  input: RequestInfo | URL,
  init?: RequestInit
) => {
  if (process.env.NODE_ENV === "production" && isServer) {
    const cookies = await getServerCookies();
    return Fetch(input, {
      ...init,
      headers: {
        ...init?.headers,
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      },
      credentials: "include",
    });
  }
  return Fetch(input, {
    ...init,
    credentials: "include",
  });
};
```

### 3. API 함수 최적화

상대 경로를 사용하는 API 함수 구현:

```typescript
export async function handleLogout(): Promise<APIResult<SignupResponse>> {
  const response = await FetchWithCookie("api/auth/logout"); // 상대 경로 사용
  const result = await response.json();

  if (response.status < 400) {
    return { code: 200, message: "" };
  }
  return {
    code: 400,
    message: SERVER_RESPONSE[result.code] || "서버 오류가 발생했습니다",
  };
}
```

## 동작 프로세스

1. API 함수 호출

   - `handleLogout()`이 `api/auth/logout` 경로로 요청

2. Rewrite 처리

   - Next.js rewrite가 요청을 감지
   - `http://15.164.142.195/api/auth/logout`로 변환

3. 서버 통신
   - 변환된 URL로 서버에 요청
   - CORS 에러 없이 응답 수신

## 구현의 장점

1. URL 관리 단순화

   - 중복 제거
   - 일관된 경로 구조 유지

2. Next.js 기능 활용

   - Rewrite 기능 완벽 활용
   - 내장 기능으로 CORS 해결

3. 환경 독립성

   - 개발/운영 환경에서 동일하게 동작
   - 환경별 분기 처리 용이

4. 유지보수성
   - URL 구성의 중복 제거
   - 코드 구조 단순화

## 주의사항

### 1. 경로 사용 규칙

- API 호출 시 항상 상대 경로 사용
- 전체 URL 직접 사용 지양

### 2. 환경 설정

- 환경별 URL 분기는 next.config.js에서 처리
- 환경 변수 활용 권장

### 3. 테스트 고려사항

- 모든 환경에서 동작 테스트 필요
- CORS 정책 확인
- 쿠키 처리 검증

## 결론

이러한 최적화를 통해 다음과 같은 이점을 얻을 수 있습니다:

- CORS 문제 해결
- URL 관리 효율화
- 코드 유지보수성 향상
- 개발 생산성 증가

Next.js의 기능을 최대한 활용하면서도 깔끔한 코드 구조를 유지할 수 있는 이상적인 구현 방식입니다.
