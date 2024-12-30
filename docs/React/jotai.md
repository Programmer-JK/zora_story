>작성일 : 2024.12.08

## Jotai란?

Jotai는 React를 위한 상태 관리 라이브러리로, 매우 작은 크기(3kb)와 TypeScript 지향적인 설계가 특징입니다. React.js, Next.js, React Native 등 다양한 React 기반 프레임워크에서 사용할 수 있으며, 특히 re-rendering 문제를 효과적으로 해결했다는 점이 주목할 만합니다.

## Jotai의 주요 특징

- 매우 가볍고 간단한 API (3kb의 번들 사이즈)
- TypeScript로 작성되어 타입 안정성이 뛰어남
- React Suspense와 완벽한 통합
- 중첩된 업데이트 최적화
- Redux DevTools 지원

## 설치 방법

```bash
npm install jotai
# 또는
yarn add jotai
```

## Primitive Atom 이해하기

Primitive atom은 Jotai의 가장 기본적인 구성 요소입니다. "Primitive"라는 말 그대로 "원시적인", "기본적인" atom이라는 의미입니다.

주요 특징:

- 가장 단순한 형태의 atom
- 단일 값을 저장할 수 있음 (숫자, 문자열, 객체 등)
- 읽기와 쓰기가 모두 가능
- 반드시 초기값이 필요

```jsx
// primitive atom의 예시들
const numberAtom = atom(0); // 숫자
const stringAtom = atom("hello"); // 문자열
const booleanAtom = atom(true); // 불리언
const objectAtom = atom({ name: "John", age: 25 }); // 객체
```

이는 다른 atom들(예: 파생된 atom)의 기초가 되며, 가장 흔하게 사용되는 형태입니다.

## 기본 사용법

### 1. 기본 atom 생성과 사용

```jsx
import { atom, useAtom } from "jotai";

// atom 생성
const countAtom = atom(0);

function Counter() {
  // atom 사용
  const [count, setCount] = useAtom(countAtom);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### 2. Atom 사용을 위한 다양한 훅

Jotai는 상황에 따라 최적화된 여러 훅을 제공합니다:

```jsx
// 읽기/쓰기 모두 필요할 때
const [value, setValue] = useAtom(myAtom);

// 읽기만 필요할 때 (최적화)
const value = useAtomValue(myAtom);

// 쓰기만 필요할 때 (최적화)
const setValue = useSetAtom(myAtom);
```

### 3. 파생된(Derived) Atom

다른 atom의 값을 기반으로 새로운 값을 계산할 수 있습니다:

```jsx
const countAtom = atom(0);
// 읽기 전용 파생 atom
const doubleCountAtom = atom((get) => get(countAtom) * 2);

// 읽기/쓰기 가능한 파생 atom
const countryAtom = atom("Japan");
const citiesAtom = atom(
  (get) => getCities(get(countryAtom)),
  (get, set, newCity) => {
    set(countryAtom, getCountry(newCity));
  }
);
```

### 4. 비동기 Atom

비동기 데이터 처리도 쉽게 할 수 있습니다:

```jsx
const userAtom = atom(async () => {
  const response = await fetch("/api/user");
  return response.json();
});

function UserInfo() {
  const [user] = useAtom(userAtom);
  if (user.loading) return <Loading />;
  return <div>{user.name}</div>;
}
```

### 5. Provider를 통한 상태 관리

#### 기본 Provider

```jsx
import { Provider } from "jotai";

function App() {
  return (
    <Provider>
      <Counter />
      <OtherComponent />
    </Provider>
  );
}
```

#### 커스텀 Provider와 상태 하이드레이션

```jsx
import { useHydrateAtoms } from "jotai/utils";

function JotaiProvider({ children, initialState }) {
  useHydrateAtoms([
    [nameAtom, initialState.name],
    [ageAtom, initialState.age],
  ]);
  return children;
}
```

### 6. atomWithStorage로 영구 저장소 활용

브라우저의 localStorage와 연동하여 상태를 영구적으로 저장할 수 있습니다:

```typescript
import { atomWithStorage } from "jotai/utils";

export const isLoginAtom = atomWithStorage("isLogin", false);

// 사용 예시
const MobileNav = () => {
  const isLogin = useAtomValue(isLoginAtom);
  const setIsLogin = useSetAtom(isLoginAtom);

  const logoutAction = async (e) => {
    const result = await handleLogout();
    if (result.code < 400) {
      setIsLogin(false); // localStorage에 자동 저장
    }
  };
};
```

## 장단점

### 장점

- 매우 작은 번들 사이즈
- 간단하고 직관적인 API
- TypeScript 지원이 뛰어남
- React의 기본 원칙을 잘 따름
- re-rendering 최적화가 잘 되어있음

### 단점

- 공식 문서가 다소 불친절할 수 있음
- 일부 고급 기능에 대한 설명이 부족

## 마치며

Jotai는 React 생태계에서 점점 더 중요한 위치를 차지하고 있는 상태 관리 라이브러리입니다. 특히 작은 번들 사이즈와 타입스크립트 친화적인 설계, 그리고 직관적인 API는 많은 개발자들에게 매력적인 선택지가 되고 있습니다.
