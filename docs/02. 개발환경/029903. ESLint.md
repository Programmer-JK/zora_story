>작성일 : 2024.10.18

### ESLint란?

__자바스크립트 문법 에러를 표시하거나 코딩 컨벤션에 위배되는 코드, 안티 패턴을 자동으로 검출하는 도구__
- 올바른 코딩 습관을 갖기 위해 돕는 유용한 툴
- 코드의 일관성 향상

> **ESLint = ES + Lint**
> - ES : Ecma Script (표준 Javascript)
> - Lint : 에러가 있는 코드에 표시를 달아주는 행위

>**안티패턴**
>'권장사항'의 반대편에 있는 소프트웨어 설계 관행
>실제 많이 사용되는 패턴이지만 성능, 디버깅, 유지보수, 가독성 등의 측명에서 비효율적이거나 비생산적인 패턴

대부분의 프로그래밍 언어에는 컴파일하는 과정에서 수행되는 Linter가 기본적으로 내장되어 있다
그러나, 인터프리터 언어인 Javascript는 Linter가 존재하지 않는다.
Typescript에는 TSLint라는 Linter가 존재하지만, 현재는 ESLint와 통합으로 사용되고 있다.

##### ESLint를 많이 사용하는 이유?
- 확장성 때문, 다양한 플러그인을 사용하거나 개발자가 직접 규칙을 추가하여 손쉽게 규칙을 정할 수 있다.

##### ESLint 설치 방법
1. 설치
```
npm install -D eslint
```

2. 설정 파일 초기 세팅
```
npx eslint --init
```
- 위 명령어를 통해 .eslintrc.js파일이 생성

1. eslintrc.js 파일
```js
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["plugin:react/recommended", "airbnb", "prettier"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {
    "no-console": "warn"
  }
}
```
- `env`: 사용 환경 의미
- `extends` : 확장 기능 사용
- `parserOptions`: 버전과 모듈 사용 여부
- `plugins` : 사용되는 플러그인
- `rules` : 세부 설정 (규칙) 추가

4. 특정 파일 대상으로 eslint 실행해보기
```null
npx eslint ./src/javascript/index.js
```
- 위 명령어를 실행한 후 에러나 경고문이 뜬다면 해당 문제를 바로 고칠 수 있는 옵션도 존재한다.

```null
npx eslint ./src/javascript/index.js --fix
```
- `--fix` 옵션을 덧붙여주면, 문제가 되는 것들 중 자동으로 고칠 수 있는 부분들을 바로 고쳐주는 것을 확인할 수 있다.

##### eslint:recommended 사용
- 이미 만들어진 규칙을 사용하고 그 규칙을 확장해서 다른 규칙들을 적용하고 싶은 경우에는 다음과 같이 설정 파일을 작성해주면 된다.
```js
module.exports = {
  // ...
  extends: ["eslint:recommended"],
  // ...
};
```
- `eslint:recommended`는 ESLint에서 제공하는 권장 규칙으로, 해당 규칙을 상속 받겠다는 의미이다.
- 상속받은 규칙에 원하는 규칙 추가 또는 수정을 통해 원하는 대로 확장이 가능하다.

##### ESLint 라이브러리
다양한 ESLint 설정을 묶어서 라이브러리로도 제공된다.
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [eslint-config-google](https://www.npmjs.com/package/eslint-config-google)
- [eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard)

1. 라이브러리 설치
```null
$ yarn add eslint-config-airbnb
```

2. package.json 설정 변경
```js
"eslintConfig": {
    "extends": [
      "react-app",
      "airbnb"
    ]
  },
```

##### ESLint 규칙 커스텀
- `rules`값을 통해 eslint 규칙을 변경할 수 있다.
- "규칙 이름" : "경고수준"
- 경고수준
	- "off": 무시(규칙 비활성화) - 0
	- "warn": 경고수준(노란줄) - 1
	- "error": 오류(빨간줄) - 2

##### 파일별 규칙 설정
몇몇 파일에서는 다른 eslint rule를 적용해야 하는 경우,  
`overrides`, `files` 키를 사용할 수 있다.

```js
"eslintConfig": {
    "extends": [
      "react-app",
      "airbnb",
      "prettier"
    ],
    "rules": {
      "react/jsx-filename-extension": "off",
      // off 대신 0을 써줄수도 있다.  
      "react/jsx-filename-extension": 0,
    },
    "overrides": [
      {
        "files": ["*-test.js","*.spec.js"],
        "rules": {
          "no-unused-expressions": "off"
        }
      }
    ]
  },
```

#### plugins / extends / rules 차이
1. `plugins`
    - **다른 사람이 만든 규칙(패키지)을 가지고 오는 것.**
    - 종류는 다양하며 여러 plugin을 가져와 사용하는 경우가 많다.  
        👉 많이 사용하는 plugin : ESLint 기본 plugin, react/react hooks/typescript를 위한 plugin, 에어비앤비 lint plugin 등
    - plugin에 추가한다고 해서 바로 적용되는 것 ❌
        👉 가지고 오겠다는 것에 불과하며, `extends`나 `rules` 설정을 해야 적용 가능하다!!

    ```json
    "plugins": [
        "@typescript-eslint"
    ],
    ```
    
2. `extends`
    - **`plugin package` 규칙을 그대로 따르고 싶을 때** 추가해준다.
    
    ```json
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    ```
    
    - `eslint:recommended`  
        ESLint에서 [기본적으로 제공하는 rule](https://eslint.org/docs/latest/rules/)들로, 별다른 설치 없이 설정할 수 있다.
    - recommended/strict/all  
        plugin 규칙을 얼마나 어떻게 따를 것인지 의미하며 보통 recommended를 많이 사용한다.  
          
3. `rules`
    - plugin 규칙을 커스텀할 수 있는 곳
    - `extends` 에서 설정하여 기본으로 설정된 규칙도 바꾸거나 없애거나 추가할 수 있다.
        ````null
        ```json
        "rules": {
              "@typescript-eslint/strict-boolean-expressions": [
                  2,
                  {
                      "allowString" : false,
                      "allowNumber" : false
                  }
              ]
          },
        ```
        ````
        