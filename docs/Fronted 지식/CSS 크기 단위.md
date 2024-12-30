>작성일 : 2024.12.30
## 1. px (픽셀) - 절대단위
### 특징
- 모든 디바이스에서 동일한 크기 유지
- 사용자의 브라우저 설정에 영향을 받지 않음
- 정확한 크기 지정 가능

### 실무 활용 사례
```css
/* 디테일한 UI 요소 */
.button {
  border: 1px solid #ddd;
  border-radius: 4px;
}

/* 아이콘 크기 */
.icon {
  width: 24px;
  height: 24px;
}

/* 고정 크기가 필요한 요소 */
.profile-image {
  width: 64px;
  height: 64px;
}
```

### 주의사항
- 접근성 측면에서 폰트 크기에는 권장하지 않음
- 반응형 디자인에 적합하지 않음
- 고해상도 디스플레이에서 선명도 이슈 발생 가능

## 2. em - 상대단위
### 특징
- 현재 요소의 font-size를 기준으로 계산
- 중첩된 요소에서 값이 누적됨
- 컴포넌트 기반 설계에 유용

### 실무 활용 사례
```css
/* 버튼 컴포넌트 */
.button {
  font-size: 16px;
  padding: 0.5em 1em; /* 8px 16px */
  margin: 1em 0; /* 16px 0 */
}

/* 카드 컴포넌트 */
.card {
  font-size: 14px;
  padding: 1.5em; /* 21px */
}

/* 중첩 구조의 리스트 */
.list {
  margin-left: 1em; /* 부모 font-size 기준 */
  
  .list-item {
    margin-bottom: 0.5em;
  }
}
```

### 실무 주의사항
```css
/* 중첩 구조에서의 em 사용 예시 */
.parent {
  font-size: 16px;
  
  .child {
    font-size: 1.5em; /* 24px */
    
    .grandchild {
      /* 주의! */
      font-size: 1.5em; /* 36px (24px * 1.5) */
      margin: 1em; /* 36px */
    }
  }
}
```

## 3. rem - 상대단위
### 특징
- html 요소의 font-size를 기준으로 계산
- 중첩에 영향을 받지 않음
- 일관된 크기 관리 가능

### 실무 활용 사례
```css
/* 기본 설정 */
html {
  font-size: 16px; /* 1rem = 16px */
}

/* 반응형 타이포그래피 */
@media screen and (max-width: 768px) {
  html {
    font-size: 14px;
  }
}

/* 컴포넌트 스타일링 */
.title {
  font-size: 2rem; /* 32px */
  margin-bottom: 1.5rem; /* 24px */
}

.card {
  padding: 1rem; /* 16px */
  border-radius: 0.25rem; /* 4px */
}
```

### 실무에서의 장점
- 브라우저 접근성 설정과 호환
- 반응형 디자인 구현 용이
- 일관된 수치 관리 가능

## 4. % - 상대단위
### 특징
- 부모 요소의 크기를 기준으로 계산
- 유동적인 레이아웃 구성 가능
- 반응형 디자인에 필수적

### 실무 활용 사례
```css
/* 레이아웃 구성 */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

/* 그리드 시스템 */
.row {
  display: flex;
  flex-wrap: wrap;
}

.col {
  width: 50%; /* 2단 컬럼 */
  padding: 0 15px;
}

/* 반응형 이미지 */
.responsive-image {
  width: 100%;
  height: auto;
}
```

## 실무에서의 사용 사례

### 1. 폰트 사이즈 관리
```css
/* 기본 폰트 설정 */
html {
  font-size: 16px;
}

/* 타이포그래피 스케일 */
:root {
  --text-xs: 0.75rem;  /* 12px */
  --text-sm: 0.875rem; /* 14px */
  --text-base: 1rem;   /* 16px */
  --text-lg: 1.125rem; /* 18px */
  --text-xl: 1.25rem;  /* 20px */
}
```

### 2. 반응형 여백 시스템
```css
/* 여백 변수 정의 */
:root {
  --spacing-1: 0.25rem; /* 4px */
  --spacing-2: 0.5rem;  /* 8px */
  --spacing-3: 1rem;    /* 16px */
  --spacing-4: 1.5rem;  /* 24px */
  --spacing-5: 2rem;    /* 32px */
}

/* 컴포넌트 적용 */
.card {
  padding: var(--spacing-3);
  margin-bottom: var(--spacing-4);
}
```

### 3. 미디어 쿼리 활용
```css
/* 브레이크포인트 설정 */
@media screen and (max-width: 1024px) {
  html {
    font-size: 15px;
  }
  
  .col {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  html {
    font-size: 14px;
  }
}
```

### 4. 유지보수를 위한 CSS 변수 활용
```css
:root {
  /* 색상 */
  --color-primary: #007bff;
  --color-secondary: #6c757d;
  
  /* 여백 */
  --container-padding: 5%;
  
  /* 반지름 */
  --border-radius-sm: 0.25rem;
  --border-radius-md: 0.5rem;
}

.container {
  padding: 0 var(--container-padding);
}

.button {
  border-radius: var(--border-radius-md);
}
```

이러한 단위들을 적절히 조합하여 사용하면 유지보수가 용이하고, 반응형에 강한 웹사이트를 구축할 수 있습니다.