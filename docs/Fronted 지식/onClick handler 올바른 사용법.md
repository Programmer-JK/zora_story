# 이벤트 핸들러 onClick 제대로 사용하기

React에서 이벤트 핸들러를 사용할 때, 특히 `onClick`을 다룰 때 자주 발생하는 실수와 올바른 사용법에 대해 알아보겠습니다.

## 올바른 사용법

### 1. 화살표 함수로 감싸기

```jsx
<button onClick={() => login("naver")}>로그인</button>
```

### 2. 함수 참조 직접 전달 (매개변수 없을 때)

```jsx
<button onClick={handleLogin}>로그인</button>
```

### 3. 별도의 핸들러 함수 만들기

```jsx
const handleLogin = () => {
  login("naver");
};

<button onClick={handleLogin}>로그인</button>;
```

## 잘못된 사용법

```jsx
// ❌ 잘못된 방법
<button onClick={login("naver")}>로그인</button>
```

## 왜 잘못된 방법을 사용하면 안될까요?

1. **즉시 실행 문제**

   - 컴포넌트가 렌더링되는 순간 `login("naver")`가 실행됩니다
   - 클릭 이벤트와 관계없이 함수가 호출됩니다

2. **이벤트 핸들러 할당 문제**

   - `onClick`에는 함수의 실행 결과가 할당됩니다
   - 실제 클릭 이벤트를 처리할 함수가 없어집니다

3. **무한 렌더링 위험**

```jsx
function LoginButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 렌더링 → 함수 실행 → state 변경 → 다시 렌더링 → 무한 반복
  return <button onClick={login("naver")}>로그인</button>;
}
```

## 핵심 포인트

이벤트 핸들러를 사용할 때는 **함수 자체**를 전달해야 하며, 함수를 **실행한 결과**를 전달하면 안됩니다. 즉, 클릭했을 때 실행되어야 할 함수를 그대로 전달하거나, 화살표 함수로 감싸서 전달해야 합니다.

이벤트 핸들러는 사용자의 상호작용(클릭 등)이 발생했을 때 실행되어야 하는데, 잘못된 방법을 사용하면 의도와 다르게 컴포넌트 렌더링 시점에 함수가 실행되어 버립니다.

## 예시로 보는 실행 시점

```jsx
// ✅ 클릭할 때 실행됨
<button onClick={() => login("naver")}>로그인</button>

// ❌ 렌더링 될 때 실행됨
<button onClick={login("naver")}>로그인</button>
```

이 내용을 이해하고 올바르게 사용한다면, React에서 의도치 않은 함수 실행이나 무한 렌더링 같은 문제를 피할 수 있습니다.
