>작성일 : 2024.11.13

## 기본 개념:
### 1. Vue.js란 무엇이며 장점은?
```
- 프로그레시브 JavaScript 프레임워크
- 가상 DOM 사용으로 성능 최적화
- 반응형 데이터 바인딩
- 컴포넌트 기반 아키텍처
```

#### 1-1) 프로그레시브 프레임워크란?
- 점진적으로 채택 가능한 구조
- 필요한 기능만 선택적으로 적용 가능
- 작은 프로젝트부터 대규모 애플리케이션까지 확장 가능

#### 1-2) 가상 DOM의 이점:
- 실제 DOM 조작을 최소화하여 성능 향상
- 변경사항을 일괄 처리하여 렌더링 최적화
- 불필요한 업데이트 방지

#### 1-3) 반응형 데이터 바인딩:
- 데이터 변경 시 자동으로 화면 갱신
- 양방향 바인딩으로 데이터와 UI 동기화
- Proxy 기반 반응형 시스템 (Vue 3)

#### 1-4) 컴포넌트 기반 장점:
- 재사용 가능한 독립적 단위로 개발
- 유지보수성 향상
- 테스트가 용이
- 복잡한 UI를 작은 단위로 분리하여 관리

#### 1-5) 추가적인 장점:
- 낮은 학습 곡선
- 풍부한 생태계와 도구 지원
- 가벼운 크기로 빠른 로딩
- React나 Angular에 비해 설정이 간단
### 2. Vue 인스턴스 라이프사이클 단계는?
```
beforeCreate -> created -> beforeMount -> mounted -> beforeUpdate -> updated -> beforeDestroy -> destroyed
```
#### 2-1) beforeCreate
- 데이터와 이벤트가 설정되기 전 단계
- data, methods 접근 불가
- 사용 : 앱 초기화, 외부 라이브러리 설정

#### 2-2) created
- 반응형 데이터와 이벤트 활성화
- DOM 접근 불가
- 사용 : API 호출, 데이터 초기화

#### 2-3) beforeMount
- 템플릿 컴파일 완료, DOM 생성 직전
- 가상 DOM 존재하나 실제 DOM 없음
- 사용 : DOM 조작 전 준비 작업

#### 2-4) mounted
- 실제 DOM 생성 완료
- $el 접근 가능
- 사용 : DOM 조작, 차트 라이브러리 초기화

#### 2-5) beforeUpdate
- 데이터 변경 감지, DOM 업데이트 전
- 변경될 데이터 확인 가능
- 사용 : DOM 업데이트 전 데이터 가공

#### 2-6) updated
- DOM 업데이트 완료
- 변경된 데이터와 DOM 동기화 상태
- 사용 : 외부 라이브러리와 동기화

#### 2-7) beforeDestroy (Vue3: beforeUnmount)
- 인스턴스 제거 직전
- 인스턴스 기능 모두 동작
- 사용 : 이벤트 리스너 제거, 타이머 정리

#### 2-8) destroyed (Vue3: unmounted)
- 모든 디렉티브, 이벤트 리스너 제거
- 하위 인스턴스도 모두 제거
- 사용 : 최종 정리 작업

### 3. Vue의 디렉티브란?
```
- v-if vs v-show 차이
- v-bind, v-model, v-on 사용법
- 커스텀 디렉티브 생성 방법
```
#### 3-1) v-if vs v-show
- v-if: 조건부 렌더링, 조건 false시 DOM에서 완전 제거
- v-show: display CSS 속성 전환, DOM은 유지
```vue
<div v-if="isVisible">조건 충족시만 존재</div>
<div v-show="isVisible">항상 존재, 보임/숨김만 전환</div>
```

#### 3-2) 주요 디렉티브 사용법
- v-bind: 속성 바인딩 (:로 축약)
```vue
<img v-bind:src="imageUrl"> 
<img :src="imageUrl">  // 축약형
```

- v-model: 양방향 데이터 바인딩
```vue
<input v-model="message">
<textarea v-model="content">
```

- v-on: 이벤트 리스너 (@로 축약)
```vue
<button v-on:click="handleClick">
<button @click="handleClick">  // 축약형
```

#### 3-3) 커스텀 디렉티브 생성
```javascript
Vue.directive('focus', {
  mounted(el) {
    el.focus()
  }
})

// 컴포넌트에서 로컬 등록
directives: {
  focus: {
    mounted(el) {
      el.focus()
    }
  }
}
```

사용:
```vue
<input v-focus>
```
#### 3-4) 훅 함수들:
- mounted: 요소 추가될 때
- updated: 요소 업데이트될 때
- unmounted: 요소 제거될 때

## 데이터 관리:
### 4. Computed vs Methods vs Watch
```
- computed: 캐싱된 값, 의존성 있는 데이터 
- methods: 호출할 때마다 실행
- watch: 데이터 변경 감지 및 사이드 이펙트 처리
```
#### 4-1) Computed
```javascript
computed: {
  fullName() {
    return this.firstName + ' ' + this.lastName
  }
}
```
- 종속된 데이터가 변경될 때만 재계산
- 결과를 캐싱하여 성능 최적화
- getter/setter 지원
- 템플릿 내 복잡한 연산에 적합

#### 4-2) Methods
```javascript
methods: {
  calculateTotal() {
    return this.items.reduce((sum, item) => sum + item.price, 0)
  }
}
```
- 호출될 때마다 실행
- 캐싱되지 않음
- 이벤트 핸들링에 적합
- 동적 인자 전달 가능

#### 4-3) Watch
```javascript
watch: {
  searchQuery(newVal, oldVal) {
    this.debounceSearch(newVal)
  }
}
```
- 특정 데이터 변화 감지
- 비동기 처리, API 호출에 적합
- deep 옵션으로 깊은 감시 가능
- 이전값과 현재값 비교 가능
### 5. Vuex 관련
```
- 상태 관리의 필요성
- state, mutations, actions, getters 역할
- 모듈화 방법
```

#### 5-1) 상태 관리의 필요성
- 상태 관리의 필요성
- state, mutations, actions, getters 역할
- 모듈화 방법
#### 5-2) State, Mutations, Actions, Getters 역할
##### 5-2-1) State
```javascript
// Vuex
state: {
  user: null,
  isLoggedIn: false
}

// Pinia
state: () => ({
  user: null,
  isLoggedIn: false
})
```
- 중앙 집중식 상태 저장소
- 컴포넌트 간 공유되는 데이터
- 반응형 데이터 관리

##### 5-2-2) Mutations (Vuex만 해당)
```javascript
mutations: {
  SET_USER(state, user) {
    state.user = user
  },
  SET_LOGIN_STATUS(state, status) {
    state.isLoggedIn = status
  }
}
```
- 동기적 상태 변경
- state 직접 수정 가능한 유일한 방법
- 디버깅 추적 가능
```
Pinia에서 mutations가 제거된 이유:

1. 단순화
- 상태 관리 보일러플레이트 코드 감소
- actions에서 직접 상태 변경 가능

2. 개발 경험 향상
// Vuex - 복잡한 구조
actions: {
  updateUser({ commit }, user) {
    commit('SET_USER', user)
  }
}
// Pinia - 단순한 구조
actions: {
  updateUser(user) {
    this.user = user
  }
}

3. TypeScript 지원 강화
- mutation 없이도 타입 안정성 보장
- 직접 상태 수정으로 타입 추론 개선

4. DevTools 지원
- mutation 없이도 상태 변화 추적 가능
- 디버깅 용이성 유지
```
##### 5-2-3) Actions
```javascript
// Vuex
actions: {
  async login({ commit }, credentials) {
    const user = await api.login(credentials)
    commit('SET_USER', user)
    commit('SET_LOGIN_STATUS', true)
  }
}

// Pinia
actions: {
  async login(credentials) {
    const user = await api.login(credentials)
    this.user = user
    this.isLoggedIn = true
  }
}
```
- 비동기 작업 처리
- API 호출, 복잡한 로직 처리
- 여러 mutations/상태 변경 가능
- 능동적 실행, 상태 변경

##### 5-2-4) Getters
```javascript
// Vuex & Pinia
getters: {
  isAdmin: (state) => state.user?.role === 'admin',
  fullName: (state) => `${state.user?.firstName} ${state.user?.lastName}`,
  userProfile: (state) => (id) => state.users.find(u => u.id === id)
}
```
- 상태 기반 계산된 속성
- 캐싱되어 성능 최적화
- 다른 getter 재사용 가능
- 컴포넌트 로직 분리
- 반응형 계산, 상태 감시


## 컴포넌트:
#### 6. 컴포넌트 통신 방법

#### 6-1) Props (부모 → 자식)
```vue
// 부모
<template>
  <child-component :message="parentMessage"/>
</template>

// 자식
<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>
```

#### 6-2) Emit (자식 → 부모)
```vue
// 자식
<template>
  <button @click="sendMessage">Send</button>
</template>
<script>
export default {
  methods: {
    sendMessage() {
      this.$emit('message-sent', 'Hello!')
    }
  }
}
</script>

// 부모
<template>
  <child @message-sent="handleMessage"/>
</template>
```

#### 6-3) Provide/Inject (조상 → 자손)
```javascript
// 루트/부모 컴포넌트 (Provider)
export default {
  provide() {
    return {
      userName: 'John',
      theme: {
        color: 'dark'
      },
      // 반응형 데이터 제공
      reactiveTheme: Vue.computed(() => this.theme)
    }
  },
  data() {
    return {
      theme: { color: 'dark' }
    }
  }
}

// 자식/하위 컴포넌트 (Inject)
export default {
  inject: ['userName', 'theme', 'reactiveTheme'],
  // 기본값 설정
  inject: {
    theme: {
      from: 'theme', // provide의 키
      default: { color: 'light' }
    }
  }
}

// 1. 동일한 키로 provide된 경우 가장 가까운 값이 주입
// 2. provide된 값이 없으면 계속 상위로 탐색
// 3. 최상위까지 없으면 default 값 사용 또는 에러
```

#### 6-4) EventBus
```javascript
// 이벤트 버스 생성
const eventBus = new Vue()

// 이벤트 발신
eventBus.$emit('user-logged', userData)

// 이벤트 수신
eventBus.$on('user-logged', (userData) => {
  // 처리
})
```

주의: Vue 3에서는 EventBus 대신 mitt나 Vuex/Pinia 권장
```
mitt는 Vue 3에서 권장되는 가벼운 이벤트 에미터 라이브러리입니다.

사용 예시:
// mitt 설정
import mitt from 'mitt'
const emitter = mitt()

// 이벤트 발신
emitter.emit('userLoggedIn', { name: 'John' })

// 이벤트 수신
emitter.on('userLoggedIn', (user) => {
  console.log(user)
})

// 이벤트 제거
emitter.off('userLoggedIn')

// 모든 이벤트 제거
emitter.all.clear()

장점:
- 타입스크립트 지원
- 가벼운 크기 (~200 bytes)
- Vue 3 호환성
- 간단한 API
```
### 7. 믹스인(Mixins)과 컴포지션 API 차이
```
- 믹스인의 한계점
- 컴포지션 API의 장점
- setup() 함수 사용법
```
#### 7-1) 믹스인:
- 여러 컴포넌트 간 공통 기능을 재사용하는 전통적인 방식
- 객체를 정의하고 컴포넌트에 혼합하는 방식
```javascript
// 믹스인 정의 (한 번만)
const userMixin = {
  data() {
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    validateEmail() {
      // 이메일 검증 로직
    }
  }
}

// 여러 컴포넌트에서 재사용
export default {
  mixins: [userMixin],  // 믹스인 사용
  // 컴포넌트 고유 로직...
}
```

#### 7-2) Composition API:
- Vue 3에서 도입된 새로운 방식
- 관련 로직을 하나의 함수로 묶어 관리
- 더 유연하고 TypeScript 친화적
```javascript
// 재사용 가능한 로직을 함수로 분리
import { ref, computed } from 'vue'

function useUser() {
 const name = ref('')
 const email = ref('')
 
 const isValidEmail = computed(() => {
   return email.value.includes('@')
 })

 function updateEmail(newEmail) {
   email.value = newEmail
 }

 return { name, email, isValidEmail, updateEmail }
}

// 컴포넌트에서 사용
export default {
 setup() {
   // 함수 호출로 로직 재사용
   const { name, email, isValidEmail, updateEmail } = useUser()

   return {
     name,
     email,
     isValidEmail,
     updateEmail
   }
 }
}
```

#### 7-3) 주요 차이점:
1. 코드 구성: Composition API가 더 명확하고 유연함
2. 타입 추론: Composition API가 더 우수
3. 충돌 위험: 믹스인은 충돌 가능성이 높음

## 성능 최적화:
### 8. 성능 개선 방법
```
- 컴포넌트 지연 로딩
- keep-alive 사용
- v-show vs v-if 적절한 사용
```
#### 8-1) 컴포넌트 지연 로딩:
- 초기 로딩 시간 단축
- 필요한 시점에 컴포넌트 로드
- 번들 크기 감소
```javascript
// 일반적인 import
import UserProfile from './UserProfile.vue'

// 지연 로딩으로 변경
const UserProfile = () => import('./UserProfile.vue')

export default {
  components: {
    UserProfile
  }
}
```

#### 8-2) keep-alive 사용:
- 컴포넌트 상태 유지
- 불필요한 재렌더링 방지
- 메모리 사용 최적화
```html
<template>
  <keep-alive>
    <component :is="currentComponent"></component>
  </keep-alive>
</template>
```
#### 8-3) v-show vs v-if 적절한 사용
```vue
<!-- v-if: 조건이 false면 렌더링하지 않음 -->
<div v-if="isVisible">
  무거운 컴포넌트
</div>

<!-- v-show: display: none으로 숨김 -->
<div v-show="isVisible">
  자주 토글되는 컴포넌트
</div>
```
- v-if: 
  - 렌더링 조건이 자주 바뀌지 않을 때
  - 초기 로딩 성능이 중요할 때
  - 조건부 렌더링이 깊은 트리에 있을 때
- v-show:
  - 토글이 자주 일어날 때
  - 초기 렌더링 비용을 감수할 수 있을 때
  - 단순한 화면 전환이 필요할 때
## 라우팅:
### 9. Vue Router
```
- 네비게이션 가드
- 동적 라우팅
- 중첩된 라우트 처리
```

#### 9-1) 네비게이션 가드:
```javascript
// 전역 가드
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

// 컴포넌트 가드
export default {
  beforeRouteEnter(to, from, next) {
    // 컴포넌트 렌더링 전 호출
    next()
  }
}
```

#### 9-2) 동적 라우팅:
```javascript
const routes = [
  {
    path: '/user/:id',
    component: UserProfile,
    // 라우트 파라미터 검증
    props: true
  }
]

// 사용
this.$route.params.id
```

#### 9-3) 중첩된 라우트:
```javascript
const routes = [
  {
    path: '/user',
    component: User,
    children: [
      {
        path: 'profile',
        component: UserProfile
      },
      {
        path: 'posts',
        component: UserPosts
      }
    ]
  }
]
```

#### 9-4) 템플릿:
```html
<template>
  <div>
    <router-view></router-view>
  </div>
</template>
```
## 실무 관련:
### 10. 테스트 방법
```
- 단위 테스트 작성법
- Vue Test Utils 사용법
- Jest와 통합 방법
```
#### 10-1) Vue.js 테스트 방법
```javascript
// 단위 테스트 예시
import { mount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter.vue', () => {
  test('increments count when button is clicked', async () => {
    const wrapper = mount(Counter)
    const button = wrapper.find('button')
    const count = wrapper.find('.count')

    await button.trigger('click')
    expect(count.text()).toBe('1')
  })
})
```

#### 10-2) Vue Test Utils 핵심 기능:
```javascript
// 컴포넌트 마운트
const wrapper = mount(Component, {
  props: { message: 'Hello' },
  data() {
    return { count: 0 }
  }
})

// DOM 요소 찾기
wrapper.find('.class-name')
wrapper.findComponent(ChildComponent)

// 이벤트 트리거
await wrapper.trigger('click')
await wrapper.trigger('submit')
```

#### 10-3) Jest 설정:
```javascript
// jest.config.js
module.exports = {
  moduleFileExtensions: ['js', 'vue'],
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.js$': 'babel-jest'
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)']
}
```

### 11. Vue 3.0의 주요 변경사항
```
- Composition API
- Multiple root nodes
- Teleport 
- Suspense
```
#### 11-1) Composition API:
- 로직 재사용성 향상
- TypeScript 지원 강화
- 관련 로직을 함께 구성 가능
- 더 나은 코드 구조화
```javascript
import { ref, computed, watch, onMounted } from 'vue'

export default {
  setup() {
    // 반응형 데이터
    const count = ref(0)
    const user = ref({ name: 'John' })

    // 계산된 속성
    const doubleCount = computed(() => count.value * 2)

    // 감시자
    watch(count, (newVal, oldVal) => {
      console.log(`Count changed from ${oldVal} to ${newVal}`)
    })

    // 라이프사이클 훅
    onMounted(() => {
      console.log('Component mounted!')
    })

    // 메서드
    const increment = () => {
      count.value++
    }

    return {
      count,
      doubleCount,
      increment
    }
  }
}
```

#### 11-2) Multiple Root Nodes:
- 불필요한 div 래퍼 제거
- 더 깔끔한 HTML 구조
- 더 유연한 컴포넌트 설계
```vue
<!-- Vue 2 -->
<template>
  <div> <!-- 반드시 하나의 루트 요소 필요 -->
    <header>Header</header>
    <main>Content</main>
    <footer>Footer</footer>
  </div>
</template>

<!-- Vue 3 -->
<template>
  <header>Header</header>
  <main>Content</main>
  <footer>Footer</footer>
</template>
```

#### 11-3) Teleport:
- 모달, 팝업 구현 용이
- DOM 구조 유연성 증가
- z-index 관리 쉬움
- 스타일 충돌 방지
```vue
<template>
  <!-- 모달을 body에 직접 렌더링 -->
  <teleport to="body">
    <div v-if="isOpen" class="modal">
      <h2>모달 제목</h2>
      <p>모달 내용</p>
      <button @click="closeModal">닫기</button>
    </div>
  </teleport>

  <!-- 다른 DOM 요소에도 렌더링 가능 -->
  <teleport to="#app-footer">
    <footer-content />
  </teleport>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    closeModal() {
      this.isOpen = false
    }
  }
}
</script>
```

#### 11-4) Suspense: 
- 비동기 데이터 로딩 관리
- 로딩 상태 통합 처리
- 더 나은 사용자 경험
- 에러 처리 용이
```vue
<!-- 부모 컴포넌트 -->
<template>
  <Suspense>
    <!-- 기본 컴포넌트 -->
    <template #default>
      <async-component />
    </template>
    
    <!-- 로딩 상태 -->
    <template #fallback>
      <div class="loading">
        <spinner />
        <p>데이터를 불러오는 중...</p>
      </div>
    </template>
  </Suspense>
</template>

<!-- 비동기 컴포넌트 -->
<script>
export default {
  async setup() {
    const data = await fetchData() // API 호출
    const processedData = await processData(data)
    
    return {
      data: processedData
    }
  }
}
</script>
```
