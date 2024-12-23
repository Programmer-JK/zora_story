Next.js는 웹 애플리케이션 개발을 위한 React 프레임워크로, 두 가지 라우팅 시스템을 제공합니다: 
App Router와 Pages Router. 이 글에서는 두 라우터의 주요 차이점과 각각의 특징을 상세히 알아보겠습니다.

## 목차
1. [라우팅 시스템의 기본 구조](#라우팅-시스템의-기본-구조)
2. [서버 컴포넌트 지원](#서버-컴포넌트-지원)
3. [데이터 페칭 방식](#데이터-페칭-방식)
4. [레이아웃 시스템](#레이아웃-시스템)
5. [렌더링 및 성능](#렌더링-및-성능)
6. [고급 라우팅 기능](#고급-라우팅-기능)
7. [프로젝트에서 라우터 구별하기](#프로젝트에서-라우터-구별하기)
8. [마이그레이션 고려사항](#마이그레이션-고려사항)

## 라우팅 시스템의 기본 구조

### App Router
App Router는 Next.js 13버전부터 도입된 새로운 라우팅 시스템입니다. `app` 디렉토리를 기반으로 동작하며, 다음과 같은 특수 파일들을 사용합니다:

```
app/
  ├── layout.js      # 공통 레이아웃
  ├── page.js        # 페이지 컴포넌트
  ├── loading.js     # 로딩 상태
  ├── error.js       # 에러 처리
  └── not-found.js   # 404 페이지
```

### Pages Router
Pages Router는 전통적인 Next.js의 라우팅 시스템으로, `pages` 디렉토리를 사용합니다:

```
pages/
  ├── _app.js        # 전역 레이아웃
  ├── _document.js   # HTML 문서 구조
  ├── index.js       # 홈페이지
  └── about.js       # 라우트 페이지
```

## 서버 컴포넌트 지원

### App Router의 서버 컴포넌트
App Router는 React Server Components를 기본적으로 지원합니다. 이는 다음과 같은 이점을 제공합니다:

- 기본적으로 모든 컴포넌트가 서버 컴포넌트로 동작
- 클라이언트 번들 크기 감소
- 서버 사이드 리소스에 직접 접근 가능

```jsx
// 서버 컴포넌트 (기본값)
export default async function ServerComponent() {
  const data = await fetchData(); // 직접 데이터베이스 접근 가능
  return <div>{data}</div>;
}

// 클라이언트 컴포넌트
'use client';
export default function ClientComponent() {
  const [state, setState] = useState();
  return <div>{state}</div>;
}
```

### Pages Router의 제한사항
Pages Router는 클라이언트 컴포넌트만 지원하며, 서버 사이드 로직은 특정 함수들을 통해서만 수행할 수 있습니다.

## 데이터 페칭 방식

### App Router의 데이터 페칭
App Router는 컴포넌트 레벨에서 직접적인 데이터 페칭을 지원합니다:

```jsx
async function ProductPage() {
  const product = await fetchProduct();
  return <div>{product.name}</div>;
}
```

주요 특징:
- async/await 직접 사용 가능
- 자동 요청 중복 제거
- 캐싱과 재검증 내장

### Pages Router의 데이터 페칭
Pages Router는 특정 함수들을 통해 데이터를 페치해야 합니다:

```jsx
export async function getServerSideProps() {
  const data = await fetchData();
  return { props: { data } };
}
```

## 렌더링 및 성능

### App Router의 렌더링
App Router는 다음과 같은 고급 렌더링 기능을 제공합니다:

- 부분적 렌더링
- 스트리밍 지원
- 선택적 하이드레이션
- 자동 코드 분할

### Pages Router의 렌더링
Pages Router는 전통적인 렌더링 방식을 사용합니다:

- 페이지 단위의 전체 렌더링
- 정적 생성 (SSG)
- 서버 사이드 렌더링 (SSR)

## 고급 라우팅 기능

### App Router의 고급 기능
1. 라우트 그룹핑
```
app/
  ├── (marketing)
  │   ├── about/
  │   └── blog/
  └── (shop)
      ├── products/
      └── cart/
```

2. 라우트 인터셉트
```
app/
  ├── feed/
  │   └── page.js
  └── (.)photo/[id]/
      └── page.js
```

### Pages Router의 라우팅
Pages Router는 파일 시스템 기반의 단순한 라우팅만 지원합니다:

```
pages/
  ├── index.js
  ├── about.js
  └── blog/
      └── [slug].js
```

## 프로젝트에서 라우터 구별하기

프로젝트에서 사용 중인 라우터를 구별하는 방법:

1. 디렉토리 구조 확인
- `app/` 디렉토리 존재 → App Router
- `pages/` 디렉토리 존재 → Pages Router

2. 코드 패턴 확인
```jsx
// App Router
export default function Page() {
  return <h1>App Router</h1>;
}

// Pages Router
export default function Home() {
  return <h1>Pages Router</h1>;
}
```

## 마이그레이션 고려사항

Pages Router에서 App Router로의 마이그레이션을 고려할 때 다음 사항들을 검토해야 합니다:

1. 점진적 마이그레이션 가능성
- 두 라우터는 동일한 프로젝트에서 공존 가능
- 페이지 단위로 순차적 마이그레이션 가능

2. 마이그레이션 준비사항
- 서버 컴포넌트와 클라이언트 컴포넌트 구분
- 데이터 페칭 로직 재구성
- 레이아웃 구조 재설계

3. 주의사항
- 기존 클라이언트 사이드 로직 검토
- 상태 관리 전략 재검토
- 서드파티 라이브러리 호환성 확인

## 결론

App Router는 Next.js의 미래이며, 다음과 같은 장점을 제공합니다:
- 향상된 성능과 개발자 경험
- 더 유연한 라우팅 시스템
- 서버 컴포넌트를 통한 최적화

하지만 프로젝트의 요구사항과 현재 상태를 고려하여 적절한 라우터를 선택하는 것이 중요합니다. Pages Router도 여전히 안정적이고 검증된 솔루션이며, 점진적인 마이그레이션을 통해 App Router로 전환할 수 있습니다.