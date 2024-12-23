`next/script`는 Next.js에서 제공하는 강력한 컴포넌트로, 외부 스크립트를 최적화하여 로드하는 기능을 제공합니다. 이 가이드에서는 Script 컴포넌트의 모든 기능과 사용법을 상세히 알아보겠습니다.

## 목차
1. [기본 사용법](#기본-사용법)
2. [로딩 전략 (Strategy)](#로딩-전략-strategy)
3. [인라인 스크립트](#인라인-스크립트)
4. [이벤트 핸들링](#이벤트-핸들링)
5. [고급 설정](#고급-설정)
6. [레이아웃 통합](#레이아웃-통합)
7. [주요 사용 사례](#주요-사용-사례)
8. [유의사항](#유의사항)

## 기본 사용법

`next/script` 컴포넌트를 사용하여 외부 스크립트를 로드하는 가장 기본적인 방법은 다음과 같습니다:

```jsx
import Script from 'next/script'

export default function Page() {
  return (
    <>
      <Script 
        src="https://example.com/script.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log('Script loaded successfully')
        }}
        onError={(e) => {
          console.error('Script failed to load', e)
        }}
      />
    </>
  )
}
```

## 로딩 전략 (Strategy)

Script 컴포넌트는 네 가지 로딩 전략을 제공합니다:

### 1. beforeInteractive
페이지가 인터랙티브 되기 전에 가장 높은 우선순위로 로드됩니다.

```jsx
<Script 
  src="https://example.com/script.js"
  strategy="beforeInteractive"
/>
```

### 2. afterInteractive (기본값)
페이지가 인터랙티브된 후에 로드됩니다.

```jsx
<Script 
  src="https://example.com/script.js"
  strategy="afterInteractive"
/>
```

### 3. lazyOnload
다른 모든 리소스가 로드된 후에 지연 로드됩니다.

```jsx
<Script 
  src="https://example.com/script.js"
  strategy="lazyOnload"
/>
```

### 4. worker (실험적 기능)
웹 워커에서 스크립트를 실행합니다.

```jsx
<Script 
  src="https://example.com/script.js"
  strategy="worker"
/>
```

## 인라인 스크립트

직접 JavaScript 코드를 실행해야 할 때는 두 가지 방법을 사용할 수 있습니다:

### 1. 직접 코드 작성

```jsx
<Script id="show-banner">
  {`document.getElementById('banner').classList.remove('hidden')`}
</Script>
```

### 2. dangerouslySetInnerHTML 사용

```jsx
<Script
  id="show-banner"
  dangerouslySetInnerHTML={{
    __html: `document.getElementById('banner').classList.remove('hidden')`
  }}
/>
```

## 이벤트 핸들링

Script 컴포넌트는 세 가지 주요 이벤트 핸들러를 제공합니다:

```jsx
<Script
  src="https://example.com/script.js"
  onLoad={() => {
    // 스크립트 로드 완료 시
    console.log('Script loaded successfully')
  }}
  onError={(e) => {
    // 스크립트 로드 실패 시
    console.error('Script failed to load', e)
  }}
  onReady={() => {
    // 스크립트 실행 완료 시
    console.log('Script is ready')
  }}
/>
```

## 고급 설정

다양한 HTML 속성을 지원합니다:

```jsx
<Script
  src="https://example.com/script.js"
  integrity="sha384-..."
  crossOrigin="anonymous"
  nonce="XUENAJFW"
  data-customAttribute="custom-value"
/>
```

## 레이아웃 통합

애플리케이션 전체에서 사용할 스크립트는 루트 레이아웃에서 로드할 수 있습니다:

```jsx
// app/layout.js
export default function Layout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://example.com/script.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## 주요 사용 사례

Script 컴포넌트는 다음과 같은 상황에서 특히 유용합니다:

1. 애널리틱스 도구 통합
   - Google Analytics
   - Mixpanel
   - Adobe Analytics

2. 마케팅 및 광고 스크립트
   - Google Ads
   - Facebook Pixel
   - 기타 광고 네트워크

3. 사용자 경험 향상 도구
   - 고객 지원 채팅 위젯
   - 피드백 수집 도구
   - A/B 테스팅 솔루션

4. 소셜 미디어 통합
   - 소셜 공유 버튼
   - 소셜 미디어 피드
   - 임베드 위젯

## 유의사항

Script 컴포넌트를 사용할 때 주의해야 할 점들:

1. strategy="beforeInteractive" 제한사항
   - 이 전략은 앱의 루트 레이아웃(`app/layout.js`)에서만 사용 가능
   - 다른 컴포넌트에서 사용 시 예상치 못한 동작 발생 가능

2. 식별자 요구사항
   - 모든 Script 컴포넌트는 고유한 `id` 또는 `src` 필요
   - 인라인 스크립트는 반드시 `id` 속성 지정 필요

3. worker 전략 관련
   - 아직 실험적 기능이므로 프로덕션 환경에서 사용 시 주의 필요
   - 모든 브라우저에서 지원되지 않을 수 있음

4. 성능 고려사항
   - 너무 많은 스크립트를 beforeInteractive로 로드하면 초기 로딩 성능 저하
   - 가능한 한 lazyOnload 전략 사용 권장

## 결론

Next.js의 Script 컴포넌트는 외부 스크립트 관리를 위한 강력하고 유연한 도구입니다. 적절한 로딩 전략과 이벤트 핸들링을 통해 애플리케이션의 성능을 최적화하고 사용자 경험을 향상시킬 수 있습니다. 각 사용 사례에 맞는 전략을 선택하고, 유의사항을 고려하여 구현하면 효과적인 스크립트 관리가 가능합니다.