>작성일 : 2024.12.23

## 목차
1. [Vercel 소개](#vercel-소개)
2. [배포 과정](#vercel-배포-과정)
3. [커스텀 도메인 설정](#커스텀-도메인-설정)
4. [배포 최적화](#배포-최적화)
5. [문제 해결 가이드](#문제-해결-가이드)
6. [결론](#결론)

## Vercel 소개

Vercel은 Next.js를 개발한 회사에서 제공하는 클라우드 플랫폼으로, 프론트엔드 애플리케이션의 배포와 호스팅을 위한 최적의 환경을 제공합니다.

### Vercel의 주요 특징
1. **간편한 배포 프로세스**
   - Git 저장소와 직접 연동
   - 자동 빌드 및 배포
   - 브랜치 기반 프리뷰 배포

2. **강력한 인프라**
   - 전 세계 엣지 네트워크
   - 자동 SSL/HTTPS 설정
   - 서버리스 함수 지원

3. **개발자 경험**
   - 실시간 로그 확인
   - 상세한 분석 도구
   - 팀 협업 기능

### Vercel의 장점
1. **Next.js 최적화**
   - Next.js 개발사의 플랫폼
   - 최적의 성능 설정
   - 자동 최적화 기능

2. **무료 플랜 제공**
   - 개인 프로젝트에 적합
   - 기본적인 기능 모두 포함
   - SSL 인증서 무료 제공

3. **자동화된 워크플로우**
   - GitHub/GitLab 통합
   - 자동 프리뷰 배포
   - 쉬운 롤백 기능

4. **성능 최적화**
   - 자동 이미지 최적화
   - 자동 정적 파일 압축
   - CDN 자동 구성

### Vercel의 단점
1. **비용 관련**
   - 무료 플랜의 제한사항
   - 팀 기능은 유료
   - 대규모 트래픽 시 높은 비용

2. **커스터마이징 제한**
   - 서버 인프라 직접 제어 불가
   - 특정 설정의 제한
   - 일부 고급 기능 제한

3. **벤더 종속성**
   - Vercel 종속적인 기능들
   - 마이그레이션 어려움
   - 일부 기능의 플랫폼 의존성

4. **지역적 제한**
   - 특정 지역의 느린 속도
   - 리전 선택의 제한
   - 데이터 센터 위치 제한

## Vercel 배포 과정

### 1. 배포 준비
#### GitHub 연동 방식
1. GitHub 저장소 준비
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin [GitHub 저장소 URL]
git push -u origin main
```

2. Vercel 계정 설정
- vercel.com 회원가입
- GitHub 계정 연동
- 새 프로젝트 생성

#### 직접 배포 방식
1. Vercel CLI 설치
```bash
npm i -g vercel
```

2. CLI 로그인
```bash
vercel login
```

### 2. 프로젝트 설정
#### 환경 변수 설정
1. 프로젝트 루트에 `.env` 파일 생성
```bash
# .env
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgres://...
```

2. Vercel 대시보드에서 환경 변수 설정
- Settings → Environment Variables
- 각 환경(Production/Preview/Development)별 설정 가능

#### 빌드 설정
```json
// package.json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

### 3. 배포 실행
#### GitHub 자동 배포
1. Vercel 대시보드에서 'Import Project' 선택
2. GitHub 저장소 선택
3. 설정 확인 및 'Deploy' 클릭

#### CLI를 통한 수동 배포
```bash
# 개발 환경 배포
vercel

# 프로덕션 배포
vercel --prod
```

### 4. 배포 후 설정
#### 도메인 연결
1. Vercel 대시보드에서 'Domains' 선택
2. 커스텀 도메인 추가
3. DNS 설정 진행

#### 성능 모니터링 설정
- Analytics 활성화
- Speed Insights 설정
- Error 모니터링 구성

### 5. 배포 결과 확인
#### 빌드 정보
- 메인 앱 번들: 14.6 kB
- First Load JS: 115 kB
- 빌드 로그 확인

#### 접근 권한
- 프로젝트 소유자/팀 멤버: 대시보드 접근 가능
- 일반 사용자: 배포된 웹사이트만 접근 가능

### 6. 지속적 배포(CD) 설정
#### GitHub Actions 연동
```yaml
# .github/workflows/vercel-deploy.yml
name: Vercel Production Deployment
on:
  push:
    branches: ["main"]
jobs:
  Deploy-Production:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID}}
          vercel-project-id: ${{ secrets.PROJECT_ID}}
          vercel-args: '--prod'
```

#### 자동 프리뷰 설정
- Pull Request 시 자동 프리뷰 배포
- 브랜치별 개별 환경 제공
- 코드 리뷰와 통합

## 커스텀 도메인 설정

### 1. Vercel 도메인 설정
1. Vercel 대시보드 접속
2. Settings → Domains 이동
3. 서브도메인 추가 (예: kinac-workshop.impac.co.kr)

### 2. DNS 설정
```plaintext
Type: CNAME
Name: kinac-workshop
Value: cname.vercel-dns.com.  // 마지막 점(.) 포함
```

### 3. 주의사항
- DNS 전파 시간: 최대 48시간
- Invalid Configuration은 DNS 전파 중 일시적으로 표시될 수 있음
- 하이픈(-) 포함된 서브도메인 사용 가능
- Vercel 대시보드에서 "Refresh" 버튼으로 상태 확인

## 배포 최적화

### 1. 성능 최적화
```javascript
// next.config.js
const nextConfig = {
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
}
```

### 2. 캐싱 전략
```javascript
// next.config.js
const nextConfig = {
  headers: async () => [
    {
      source: '/:all*(svg|jpg|png)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
}
```

### 3. 환경 변수 설정
```bash
# .env.production
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_ASSET_PREFIX=https://assets.example.com
```

## 문제 해결 가이드

### 1. 배포 실패
- 빌드 로그 확인
- 환경 변수 설정 확인
- 종속성 문제 확인

### 2. 성능 이슈
- Lighthouse 점수 확인
- 번들 크기 최적화
- 이미지 최적화 설정

### 3. SSL/HTTPS 문제
- SSL 인증서 상태 확인
- DNS 설정 확인
- HTTPS 리다이렉트 설정

## 결론

Vercel을 통한 Next.js 프로젝트 배포는 다음과 같은 이점이 있습니다:

1. **간편한 배포 프로세스**
   - GitHub 연동
   - 자동 배포
   - 롤백 용이

2. **강력한 기능**
   - SSL 자동 설정
   - CDN 자동 설정
   - 성능 모니터링

3. **확장성**
   - 팀 협업 기능
   - 환경 분리
   - 모니터링 도구