> 작성일 : 2025.01.02

## 시작: Fetch 함수 분리 
처음에는 기능별로 분리하여 구현했습니다:

1. 기본 Fetch 함수
```typescript
export const Fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
  return fetch(input, init);
};
```

2. 쿠키를 처리하는 FetchWithCookie
```typescript
export const FetchWithCookie = async (
  input: RequestInfo | URL,
  init?: RequestInit
) => {
  if (process.env.NODE_ENV === 'production' && isServer) {
    try {
      const cookies = await getServerCookies();
      const cookieString = cookies().toString();
      return Fetch(input, {
        ...init,
        headers: {
          ...init?.headers,
          'Content-Type': 'application/json',
          Cookie: cookieString,
        },
        credentials: 'include',
      });
    } catch (error) {
      console.error('Failed to get server cookies:', error);
      return Fetch(input, {
        ...init,
        credentials: 'include',
      });
    }
  }

  return Fetch(input, {
    ...init,
    credentials: 'include',
  });
};
```

3. JWT 토큰 처리를 하는 FetchWithJWT
```typescript
export const FetchWithJWT = async (
  input: RequestInfo | URL,
  init?: RequestInit
) => {
  const res = await FetchWithCookie(input, init);

  if (res.status === 401) {
    const tokensRequest = await fetch('api/reissue', init);
    if (!tokensRequest.ok) return redirect('/login');

    if (process.env.NODE_ENV === 'production' && isServer) {
      const cookies = await getServerCookies();
      const newCookies = tokensRequest.headers.getSetCookie();
      newCookies.forEach((cookie) => {
        const [name, value] = cookie.split('=');
        cookies().set(name, value);
      });
    }

    return FetchWithCookie(input, init);
  } else {
    return res;
  }
};
```

## 문제점 발견
코드를 리뷰하면서 다음과 같은 문제점을 발견했습니다:

1. `FetchWithCookie`는 사실상 `FetchWithJWT` 안에서만 사용되는 중간 단계의 함수
2. `FetchWithJWT`가 `FetchWithCookie`의 기능을 포함하여 처리할 수 있음
3. 불필요한 함수 분리로 인한 코드 복잡도 증가

## 결론
- `FetchWithCookie` 함수는 불필요한 중간 단계였음
- 쿠키 처리와 토큰 재발급 모두 `FetchWithJWT`에서 한번에 처리 가능
- 결국 `FetchWithJWT`만 사용하면 되는 상황

## 실제 사용 예시
```typescript
// API 호출 시
const response = await FetchWithJWT('/recommend', {
  next: { revalidate: 1200 },
});

if (response.ok) {
  const data = await response.json();
  // 데이터 처리
}
```

이렇게 구현하면 JWT 인증이 필요한 모든 API 요청에서:
1. 쿠키에 저장된 JWT 토큰을 포함하여 요청
2. 토큰 만료 시(401 에러) 자동으로 재발급
3. 재발급 실패 시 로그인 페이지로 리다이렉트
4. 프로덕션 환경에서의 서버사이드 쿠키 처리

모든 과정이 `FetchWithJWT` 하나로 처리됩니다.