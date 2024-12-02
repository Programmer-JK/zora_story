---
slug: /expression-with-n
---

# 숫자 표현하기

## 문제 설명

주어진 숫자와 사칙연산만으로 특정 숫자를 표현하는 방법을 찾는 문제입니다. 사용할 수 있는 숫자의 개수를 최소화해야 합니다.

### 예시

```
입력:
- 사용할 숫자: 5
- 목표 숫자: 12

가능한 방법들:
12 = 5 + 5 + (5 / 5) + (5 / 5)  // 6회 사용
12 = 55 / 5 + 5 / 5             // 5회 사용
12 = (55 + 5) / 5               // 4회 사용 (최적)
```

## 제한사항

1. 입력 제한

   - 사용할 숫자는 1 이상 9 이하
   - 목표 숫자는 1 이상 32,000 이하

2. 연산 제한
   - 사칙연산(+, -, \*, /)만 사용 가능
   - 나눗셈은 나머지를 무시
   - 숫자를 8회 초과 사용하면 -1 반환

[나머지 내용은 동일...]

## 해결 코드

```javascript
function solution(N, number) {
  var answer = -1;
  let dp = Array.from({ length: 9 }, () => new Set());

  for (let i = 1; i <= 8; i++) {
    dp[i].add(Number(new String(N).repeat(i)));
    for (let k = 1; k <= i; k++) {
      for (const num1 of dp[k]) {
        for (const num2 of dp[i - k]) {
          dp[i].add(num1 + num2);
          dp[i].add(num1 - num2);
          dp[i].add(num1 * num2);
          dp[i].add(Math.floor(num1 / num2));
        }
      }
    }
    if (dp[i].has(number)) return i;
  }

  return answer;
}
```

## 알고리즘 설명

1. DP 배열 초기화

```javascript
let dp = Array.from({ length: 9 }, () => new Set());
```

2. 각 사용 횟수별로 다음 작업 수행:

   - 연속된 숫자 추가 (예: 5, 55, 555)
   - 이전에 만들어진 수들의 조합으로 새로운 수 생성
   - 목표 숫자를 찾으면 현재 사용 횟수 반환

3. 8회까지 목표 숫자를 만들지 못하면 -1 반환

## 동적 계획법 (DP) 설계

1. 상태 정의

   - dp[i]: i번 사용하여 만들 수 있는 모든 숫자의 집합

2. 상태 전이

   - 새로운 숫자 추가: dp[i].add(Number(new String(N).repeat(i)))
   - 기존 숫자들의 조합: dp[k]와 dp[i-k]의 모든 조합 계산

3. 초기값
   - dp[1] = {`N`}

## 주요 메서드 설명

1. Set 관련

```javascript
new Set(); // 새로운 Set 생성
set.add(value); // 값 추가
set.has(number); // 값 존재 여부 확인
```

2. 문자열 및 숫자 변환

```javascript
new String(N); // 숫자를 문자열로 변환
string.repeat(i); // 문자열 i번 반복
Number(string); // 문자열을 숫자로 변환
```

## 시간 복잡도

- O(8 _ 8 _ M \* M)
- M: 각 단계에서 생성 가능한 숫자의 최대 개수

## 공간 복잡도

- O(8 \* M)
- 각 사용 횟수별로 Set 객체 사용

## 최적화 포인트

1. Set 자료구조 활용

   - 중복 숫자 제거로 메모리 효율화
   - 빠른 검색 속도

2. 불필요한 연산 방지

   - 목표 숫자 발견 시 즉시 반환
   - 8회 초과 시 추가 연산 없이 종료

3. 효율적인 상태 관리
   - 필요한 횟수만큼만 배열 생성
   - 이전 상태를 재활용하여 계산
