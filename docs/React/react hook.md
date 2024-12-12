# React hooks
React Hooks는 React 16.8 버전에서 도입된 기능으로, 함수형 컴포넌트에서 상태(state) 관리와 생명주기(lifecycle) 기능을 사용할 수 있게 해주는 기능입니다.

주요 Hook들을 살펴보겠습니다:

1. useState
```javascript
const [state, setState] = useState(initialValue);
```
- 컴포넌트에서 상태를 관리할 수 있게 해줍니다
- initialValue로 초기값을 설정할 수 있습니다
- state는 현재 상태값, setState는 상태를 업데이트하는 함수입니다

예시:
```javascript
const [count, setCount] = useState(0);

return (
  <button onClick={() => setCount(count + 1)}>
    Count: {count}
  </button>
);
```

2. useEffect
```javascript
useEffect(() => {
  // 실행할 효과
  return () => {
    // 클린업 함수
  };
}, [dependencies]);
```
- 컴포넌트의 생명주기와 관련된 작업을 수행합니다
- 컴포넌트가 렌더링될 때마다 또는 특정 값이 변경될 때 실행됩니다
- dependencies 배열에 지정된 값이 변경될 때만 실행되도록 설정할 수 있습니다

예시:
```javascript
useEffect(() => {
  document.title = `You clicked ${count} times`;
  
  return () => {
    document.title = 'React App'; // 컴포넌트 언마운트 시 실행
  };
}, [count]); // count가 변경될 때만 실행
```

3. useRef
```javascript
const refContainer = useRef(initialValue);
```
- DOM 요소에 직접 접근하거나 변경 가능한 값을 저장할 때 사용합니다
- 값이 변경되어도 리렌더링을 발생시키지 않습니다

예시:
```javascript
const inputRef = useRef();

return (
  <input ref={inputRef} />
  <button onClick={() => inputRef.current.focus()}>
    Focus Input
  </button>
);
```

4. useContext
```javascript
const value = useContext(MyContext);
```
- Context API를 통해 전역 상태를 관리할 수 있습니다
- 컴포넌트 트리 전체에 데이터를 전달할 수 있습니다

5. useMemo
```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```
- 계산 비용이 큰 값을 메모이제이션합니다
- 의존성 배열의 값이 변경될 때만 재계산됩니다

6. useCallback
```javascript
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```
- 함수를 메모이제이션하여 불필요한 리렌더링을 방지합니다
- 주로 자식 컴포넌트에 콜백을 전달할 때 사용합니다

Hook 사용 시 주의사항:
1. Hook은 항상 함수형 컴포넌트 최상위에서만 호출해야 합니다
2. 조건문이나 반복문 안에서 Hook을 사용하면 안됩니다
3. Custom Hook을 만들 때는 이름이 'use'로 시작해야 합니다

Custom Hook 예시:
```javascript
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}
```

이러한 Hook들을 활용하면 클래스 컴포넌트보다 더 간결하고 재사용 가능한 로직을 작성할 수 있습니다. 특히 상태 관리와 사이드 이펙트 처리를 더욱 효율적으로 할 수 있습니다.