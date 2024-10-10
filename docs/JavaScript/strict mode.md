- strict mode : js 언어의 문법을 좀 더 엄격히 적용하여 오류를 발생시킬 가능성이 높거나 js엔진의 최적화 작업에 문제를 일으킬 수 있는 코드에 대해 명시적인 에러를 발생

- Lint 도구는 strict mode가 제한하는 오류는 물론 코딩 컨벤션을 설정 파일 형태로 정의하고 강제할 수 있기 때문에 강력한 효과를 가지고 있다.

#### strict mode의 적용
- 서두1에 'use strict'; 추가
```js
'use strict';
function foo() {
	x = 10; // referenceError
}
foo();
```
- strict mode에서는 매개변수에 전달된 인수를 재할당하여 변경해도 argument 객체에 반영되지 않는다.
##### 전역에 strict mode를 적용하는 것은 피해라
- 전역에 적용한 strict mode는 스크립트 단위로 적용
- strict mode 스크립트와 non-strict mode 스크립트를 혼용하는 것은 오류를 발생시킬 수 있다.
- 외부 서드파티 라이브러리를 사용하는 경우 라이브러리가 non-strict mode인 경우도 있기 때문에 전역에 strict mode 적용하는 것은 바람직하지 않다.

##### 함수 단위로 strict mode를 적용하는 것은 피해라
- 일부 함수에만 strict mode를 적용하는 것은 바람직하지 않으며, 모든 함수에 일일이 strict mode를 적용하는 것은 번거롭다.
- strict mode가 적용된 함수가 참조할 함수 외부의 컨텍스트에 strict mode를 적용하지 않는다면 이 또한 문제가 발생할 수 있다.
- strict mode는 즉시 실행 함수로 감싼 스크립트 단위로 적용하는 것이 바람직하다.

#### strict mode가 발생시키는 에러
##### 암묵적 전역
- ReferenceError
``` js
(functino() {
	'use strict';
	x=1;
	console.log(x); // ReferenceError: x is not defined
}());
```

##### 변수, 함수, 매개변수의 삭제
- SyntaxError
``` js
(function() {
	'use strict';
	var x = 1;
	delete x; //SyntaxError: Delete of an unqualified identifier in strict mode.
}());
```

##### 매개변수 이름의 중복
- SyntaxError
``` js
(function() {
	'use strict';
	//SyntaxError: Duplicate parameter name not allowed in this context
	function foo(x, x) {
		return x + x;	
	}
	console.log(foo(1,2));
}());
```

##### with 문 사용
- with문 : 전달된 객체를 스코프 체인에 추가하는 문
- 동일한 객체의 프로퍼티를 반복해서 ㅎ사용할 때 객체 이름을 생략할 수 있어서 코드가 간단해지는 효과가 있지만 성능과 가독성이 나빠지는 문제가 있다.
```js
(function() {
	'use strict';
	//SyntaxError: Strict mode code may not include a with statement
	with({x:1}){
		console.log(x);
	}
}());
```