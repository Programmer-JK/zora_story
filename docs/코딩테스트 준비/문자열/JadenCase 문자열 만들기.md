---
slug: /create-jaden-case-string
---

# JadenCase 문자열 만들기

## 문제 설명

JadenCase는 문자열의 각 단어에서:

- 첫 문자가 알파벳인 경우 대문자로 변환
- 나머지 문자는 모두 소문자로 변환
- 첫 문자가 알파벳이 아닌 경우 나머지 문자들은 소문자로 변환

## 제한 조건

1. 문자열 s
   - 길이: 1 ≤ s ≤ 200
   - 구성: 알파벳, 숫자, 공백문자(" ")
2. 문자열 특성
   - 숫자는 단어의 첫 문자로만 등장
   - 숫자로만 이루어진 단어 없음
   - 공백문자 연속 가능

## 해결 코드

```javascript
function solution(s) {
  let answer = "";
  let arr = s.split(" ");
  let arr2 = arr.map(
    (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()
  );
  answer = arr2.join(" ");

  return answer;
}
```

## 알고리즘 설명

1. 문자열 분할

   ```javascript
   s.split(" "); // 공백을 기준으로 문자열을 배열로 분할
   ```

2. 각 단어 변환

   ```javascript
   arr.map((e) => {
     let firstChar = e.charAt(0).toUpperCase(); // 첫 글자 대문자
     let restChars = e.slice(1).toLowerCase(); // 나머지 소문자
     return firstChar + restChars; // 조합
   });
   ```

3. 배열 결합
   ```javascript
   arr2.join(" "); // 공백을 구분자로 배열을 문자열로 결합
   ```

## 주요 문자열 메서드

1. toUpperCase()

   - 문자열을 대문자로 변환

   ```javascript
   "hello".toUpperCase(); // "HELLO"
   ```

2. toLowerCase()

   - 문자열을 소문자로 변환

   ```javascript
   "HELLO".toLowerCase(); // "hello"
   ```

3. slice(start, end)

   - 문자열의 일부를 추출
   - 원본 문자열 변경 없음

   ```javascript
   "hello".slice(1); // "ello"
   "hello".slice(1, 3); // "el"
   ```

4. charAt(index)
   - 특정 위치의 문자를 반환
   ```javascript
   "hello".charAt(0); // "h"
   ```

## 배열 메서드

1. split(separator)

   - 문자열을 구분자로 나누어 배열 생성

   ```javascript
   "hello world".split(" "); // ["hello", "world"]
   ```

2. map(callback)

   - 배열의 각 요소를 변환

   ```javascript
   [1, 2, 3].map((x) => x * 2); // [2, 4, 6]
   ```

3. join(separator)
   - 배열을 구분자로 이어 문자열 생성
   ```javascript
   ["hello", "world"].join(" "); // "hello world"
   ```

## 시간 복잡도

- O(n): n은 문자열의 길이

## 공간 복잡도

- O(n): 분할된 문자열 배열 저장

## 입출력 예시

```javascript
solution("3people unFollowed me"); // "3people Unfollowed Me"
solution("for the last week"); // "For The Last Week"
```
