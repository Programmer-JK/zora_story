>작성일 : 2024.11.13
## 목차
1. [Data](#1-Data)
2. [Computed](#2-Computed)
3. [Watch](#3-Watch)
4. [Methods](#4-Methods)
5. [각 속성의 사용 시기](#각 속성의 사용 시기)
# 1. Data
data는 컴포넌트의 상태를 관리하는 객체입니다.

```javascript
export default {
  data() {
    return {
      count: 0,
      user: {
        name: '',
        age: 0
      },
      items: []
    }
  }
}
```

주요 특징:
- Vue 2에서는 반드시 함수여야 하며 객체를 반환해야 합니다 (컴포넌트 재사용 시 데이터 격리를 위해)
- 반응형으로 동작하며, 값이 변경되면 자동으로 관련 UI가 업데이트됩니다
- data 속성은 컴포넌트 인스턴스 생성 시점에 존재해야 반응형으로 동작합니다
- `this`를 통해 컴포넌트 내부 어디서든 접근 가능합니다

```javascript
// 잘못된 예 - 반응형으로 동작하지 않음
this.newProperty = 'value' 

// 올바른 예 - 초기에 선언
data() {
  return {
    newProperty: null
  }
}
```

# 2. Computed
computed는 다른 데이터를 기반으로 계산된 값을 반환하는 속성입니다.

```javascript
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      items: [1, 2, 3, 4, 5]
    }
  },
  computed: {
    // 기본 사용
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
    
    // getter와 setter 사용
    fullNameWithSetter: {
      get() {
        return `${this.firstName} ${this.lastName}`
      },
      set(newValue) {
        [this.firstName, this.lastName] = newValue.split(' ')
      }
    },
    
    // 필터링된 배열
    evenNumbers() {
      return this.items.filter(n => n % 2 === 0)
    }
  }
}
```

주요 특징:
- 캐싱됨 - 의존하는 데이터가 변경될 때만 재계산됩니다
- 선언형 프로그래밍 방식으로 코드를 더 깔끔하게 만듭니다
- template에서 복잡한 로직을 제거할 수 있습니다
- getter/setter를 통해 읽기/쓰기가 모두 가능합니다

# 3. Watch
watch는 데이터 변경을 감지하고 그에 반응하는 속성입니다.

```javascript
export default {
  data() {
    return {
      search: '',
      user: {
        name: '',
        address: {
          city: ''
        }
      }
    }
  },
  watch: {
    // 기본 감시자
    search(newValue, oldValue) {
      this.fetchSearchResults(newValue)
    },
    
    // 즉시 실행
    search: {
      handler(newValue) {
        this.fetchSearchResults(newValue)
      },
      immediate: true
    },
    
    // 깊은 감시
    user: {
      handler(newValue) {
        console.log('User changed:', newValue)
      },
      deep: true
    },
    
    // 중첩 속성 감시
    'user.address.city'(newValue) {
      this.updateCity(newValue)
    }
  }
}
```

주요 특징:
- `immediate: true` - 컴포넌트 생성 시 즉시 실행
- `deep: true` - 객체의 중첩된 속성 변경도 감지
- 비동기 작업, API 호출, DOM 조작 등에 적합
- computed보다 더 일반적인 용도로 사용가능

# 4. Methods
methods는 컴포넌트 내에서 사용할 수 있는 함수들을 정의합니다.

```javascript
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    // 이벤트 핸들러
    increment() {
      this.count++
    },
    
    // 비동기 메서드
    async fetchData() {
      try {
        const response = await api.getData()
        this.data = response
      } catch (error) {
        console.error(error)
      }
    },
    
    // 인자를 받는 메서드
    formatDate(date, format = 'YYYY-MM-DD') {
      return moment(date).format(format)
    },
    
    // 다른 메서드 호출
    reset() {
      this.count = 0
      this.fetchData()
    }
  }
}
```

주요 특징:
- 템플릿에서 직접 호출 가능
- 다른 메서드나 라이프사이클 훅에서 호출 가능
- `this`를 통해 컴포넌트의 다른 속성에 접근 가능
- 캐시되지 않음 - 호출할 때마다 실행됨

# 각 속성의 사용 시기

1. **Data 사용**
   - 컴포넌트의 상태를 저장할 때
   - UI에 표시될 기본 데이터를 저장할 때
   - 여러 메서드나 computed에서 참조할 값을 저장할 때

2. **Computed 사용**
   - 데이터를 기반으로 계산된 값이 필요할 때
   - 템플릿에서 복잡한 로직을 제거하고 싶을 때
   - 여러 데이터를 조합한 결과가 필요할 때
   - 결과를 캐싱하고 싶을 때

3. **Watch 사용**
   - 데이터 변경에 따른 비동기 작업이 필요할 때
   - API 호출이 필요할 때
   - 복잡한 데이터 변경을 처리해야 할 때
   - 여러 데이터 소스의 변경을 동시에 처리해야 할 때

4. **Methods 사용**
   - 이벤트 핸들링이 필요할 때
   - 재사용 가능한 로직을 분리할 때
   - 여러 곳에서 호출될 수 있는 함수가 필요할 때
   - computed나 watch로는 처리하기 어려운 복잡한 로직이 필요할 때

실제 사용 예시:
```javascript
export default {
  data() {
    return {
      products: [],
      search: '',
      loading: false
    }
  },
  
  computed: {
    filteredProducts() {
      return this.products.filter(product => 
        product.name.toLowerCase().includes(this.search.toLowerCase())
      )
    },
    
    hasProducts() {
      return this.filteredProducts.length > 0
    }
  },
  
  watch: {
    search: {
      handler(newValue) {
        this.loading = true
        this.fetchProducts(newValue)
      },
      // 타이핑이 끝난 후 500ms 후에 실행
      debounce: 500
    }
  },
  
  methods: {
    async fetchProducts(search) {
      try {
        const response = await api.searchProducts(search)
        this.products = response.data
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    }
  }
}
```
