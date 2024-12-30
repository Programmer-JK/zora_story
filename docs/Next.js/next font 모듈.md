>작성일 : 2024.12.11
# Next.js 폰트 최적화와 설정 가이드

Next.js에서 폰트를 최적화하고 효율적으로 관리하는 방법에 대해 알아보겠습니다.

## 목차
1. [next/font 소개](#nextfont-소개)
2. [로컬 폰트 설정](#로컬-폰트-설정)
3. [일반적인 문제 해결](#일반적인-문제-해결)
4. [폰트 최적화 전략](#폰트-최적화-전략)

## next/font 소개

Next.js의 `next/font` 모듈은 폰트를 자동으로 최적화하고 성능을 향상시키는 기능을 제공합니다. 주요 특징:

- 자동 폰트 최적화
- 커스텀 폰트 지원
- 폰트 파일 내장
- 레이아웃 시프트 방지

## 로컬 폰트 설정

로컬 폰트를 설정하는 방법을 살펴보겠습니다:

```typescript
// app/layout.tsx
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--geist-sans",  // CSS 변수로 설정
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--geist-mono",  // CSS 변수로 설정
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

### CSS 변수 활용

설정한 폰트를 CSS에서 사용하는 방법:

```css
/* 전역 CSS에서 사용 */
:root {
  --font-sans: var(--geist-sans);
  --font-mono: var(--geist-mono);
}

/* Tailwind CSS에서 사용 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--geist-sans)'],
        mono: ['var(--geist-mono)'],
      },
    },
  },
}
```

## 일반적인 문제 해결

### assetPrefix 오류
"assetPrefix must start with a leading slash or be an absolute URL" 오류 해결 방법:

1. **폰트 파일 위치 조정**
   - public/fonts 디렉토리로 이동
   - 절대 경로 사용 ('./fonts' → '/fonts')

2. **폴더 구조 예시**
```
your-project/
├── public/
│   └── fonts/
│       ├── GeistVF.woff
│       └── GeistMonoVF.woff
├── app/
│   └── layout.tsx
└── next.config.js
```

### 최적화 설정

1. **preload 설정**
```typescript
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  preload: true,  // 기본값
  variable: "--geist-sans",
});
```

2. **display 속성 설정**
```typescript
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  display: 'swap',  // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
  variable: "--geist-sans",
});
```

## 폰트 최적화 전략

### 1. 서브셋 폰트 사용
필요한 문자만 포함하여 폰트 파일 크기 축소:

```typescript
const koreanFont = localFont({
  src: "./fonts/Korean-subset.woff2",
  variable: "--korean-font",
});
```

### 2. 가변 폰트 활용
다양한 웨이트를 하나의 파일로 관리:

```typescript
const variableFont = localFont({
  src: "./fonts/Variable.woff2",
  variable: "--variable-font",
});
```

### 3. 폰트 포맷 최적화
WOFF2 형식 사용 권장:
- 더 나은 압축률
- 더 넓은 브라우저 지원

## 성능 모니터링

### Lighthouse 점수 최적화
- First Contentful Paint (FCP) 개선
- Largest Contentful Paint (LCP) 최적화
- Layout Shift 방지

### 웹 바이탈 지표 모니터링
- 실제 사용자 데이터 수집
- 성능 저하 요인 분석
- 지속적인 최적화

## 결론

Next.js의 폰트 최적화 기능을 활용하면:
- 더 나은 사용자 경험
- 더 빠른 페이지 로드
- 더 안정적인 레이아웃

최적의 폰트 설정을 위해서는:
1. 적절한 폰트 포맷 선택
2. 필요한 문자만 포함
3. 성능 지표 모니터링
4. 지속적인 최적화