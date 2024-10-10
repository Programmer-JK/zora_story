#### Set
- Set 객체 : 중복되지 않는 유일한 값들의 집합

| 구분 | 배열 | Set 객체 |
| -- | -- | -- |
| 동일한 값을 중복으로 포함할 수 있다. | O | X |
| 요소 순서에 의미가 있다. | O | X |
| 인덱스로 요소에 접근할 수 있다. | O | X |
##### Set 객체의 생성
- Set 생성자 함수는 이터러블을 인수로 전달받아 Set 객체를 생성
- 이터러블의 중복된 값은 Set 객체에 요소로 저장되지 않는다.
```js
const set1 = new Set([1,2,3,4,4]);
const set2 = new Set('hello');

const uniq = array => array.filter((v,i,self) => self.indexOf(v) === i);
const uniq = array => [...new Set(array)];
```

##### 요소 개수 확인
- Set 객체의 요소 개수를 확인할 때는 size 프로퍼티 사용
- size 값을 임의로수정할 수 없다.
```js
const {size} = new Set([1,2,3]);
const set1 = new Set([1,2,3,4,4]);
console.log(set1.size);
```

##### 요소 추가
- Set 객체에 요소를 추가할 때는 add 메서드 사용
- Set 객체는 js의 모든 값을 요소로 저장할 수 있다.
```js
const set = new Set();
set.add(1).add(2).add(true).add({});
```

##### 요소 존재 여부 확인
- Set 객체에 특정 요소가 존재하는지 확인하려면 has 메서드 사용
```js
const set = new Set([1,2,3]);
console.log(set.has(2));
```

##### 요소 삭제
- Set 객체에 특정 요소를 삭제하려면 delete 메서드 사용
```js
const set = new Set([1,2,3]);
set.delete(2);
//delete는 불리언 값을 반환한다.
```

##### 요소 일괄 삭제
- Set 객체에 요소를 전부 삭제하려면 clear 메서드 사용
```js
const set = new Set([1,2,3]);
set.clear();
```


##### 요소 순회
- Set 객체의 요소를 순회하려면 forEach 메서드 사용
- 매개변수
	1. 첫번째 : 현재 순회중인 요소값
	2. 두번째 : 현재 순회중인 요소값
	3. 세번째 : 현재 순회 중인 Set 객체 자체
```js
const set = new Set([1,2,3]);
set.forEach((v,v2,set) => console.log(v, set));

for(const value of set) {
	console.log(value);
}
```

#### 집합 연산
- 교집합
```js
Set.prototype.intersection = function(set) {
	const result = new Set();
	for(const value of set) {
		if(this.has(value)) result.add(value);
	}
	return result;
}

Set.prototype.intersection = function(set) {
	return new Set([...this].filter(v => set.has(v)));
}
```

- 합집합
```js
Set.prototype.union = function(set) {
	const result = new Set(this);
	for(const value of set) {
		result.add(value);
	}
	return result;
}

Set.prototype.union = function(set) {
	return new Set([...this, ...set]);
}
```

- 차집합
```js
Set.prototype.difference = function(set) {
	const result = new Set(this);
	for(const value of set) {
		result.delete(value);
	}
	return result;
}

Set.prototype.difference = function(set) {
	return new Set([...this].filter(v=> !set.has(v)));
}
```

- 부분집합
```js
Set.prototype.isSuperset = function(subset) {
	for(const value of subset) {
		if(!this.has(value)) return false;
	}
	return true;
}

Set.prototype.isSuperset = function(subset) {
	const supersetArr = [...this];
	return [...subset].every(v => supersetArr.includes(v));
}
```

#### Map
- map 객체 : 키와 값의 쌍으로 이루어진 컬렉션

| 구분            | 배열                 | Map 객체       |
| ------------- | ------------------ | ------------ |
| 키로 사용할 수 있는 값 | 문자열 또는 심벌 값        | 객체를 포함한 모든 값 |
| 이터러블          | X                  | O            |
| 요소개수 확인       | Object.keys.length | map.size     |
##### Map 객체 생성
- Map 생성자 함수는 이터러블을 인수로 전달받아 Map 객체를 생성
```js
const map1 = new Map([['key1', 'value1'], ['key2', 'value2']]);
```

##### 요소 개수 확인
- Map 객체의 요소 개수를 확인할 때는 size 프로퍼티 사용
- size 값을 임의로 수정할 수 없다.
```js
const {size} = new Map([['key1', 'value1'], ['key2', 'value2']]);
const map1 = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(map1.size);
```

##### 요소 추가
- Map 객체에 요소를 추가할 때는 add 메서드 사용
- Map 객체는 js의 모든 값을 요소로 저장할 수 있다.
```js
const map = new Map();
map
	.set('key1', 'value1')
	.set('key2', 'value2')
```

##### 요소 취득
- Map 객체에서 특정 요소를 취득하려면 get 메서드 사용
```js
const map = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(map.get('key1'));
```

##### 요소 존재 여부 확인
- Map 객체에 특정 요소가 존재하는지 확인하려면 has 메서드 사용
```js
const map = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(map.has('key1'));
```

##### 요소 삭제
- Map 객체에 특정 요소를 삭제하려면 delete 메서드 사용
```js
const map = new Map([['key1', 'value1'], ['key2', 'value2']]);
map.delete('key1')
//delete는 불리언 값을 반환한다.
```

##### 요소 일괄 삭제
- Map 객체에 요소를 전부 삭제하려면 clear 메서드 사용
```js
const map = new Map([['key1', 'value1'], ['key2', 'value2']]);
map.clear()
```

##### 요소 순회
- Map 객체의 요소를 순회하려면 forEach 메서드 사용
- 매개변수
	1. 첫번째 : 현재 순회중인 요소값
	2. 두번째 : 현재 순회중인 요소값
	3. 세번째 : 현재 순회 중인 Set 객체 자체
```js
const map = new Map([['key1', 'value1'], ['key2', 'value2']]);
map.forEach((v,v2,map) => console.log(v, map));

for(const entry of map) {
	console.log(entry);
}
```

- keys 메서드 : Map 객체에서 요소키를 값으로 갖는 객체를 반환
- values 메서드 : Map 객체에서 요소값을 값으로 갖는 객체를 반환
- entries 메서드 : Map 객체에서 요소키와 요소값으로 값으로 갖는 객체를 반환
```js
const map = new Map([['key1', 'value1'], ['key2', 'value2']]);
for(const key of map.keys()){
	console.log(key);
}
for(const value of map.values()){
	console.log(value);
}
for(const entry of map.entries()){
	console.log(entry);
}
```
