>작성일 : 2024.12.30
# 1. Next.js 프로젝트 생성
npx create-next-app@latest my-nextjs-app
npx create-next-app@latest next-auth-login

# 설치 과정에서 다음과 같은 옵션들이 나타납니다:
✔ Would you like to use TypeScript? Yes
✔ Would you like to use ESLint? Yes
✔ Would you like to use Tailwind CSS? Yes
✔ Would you like to use `src/` directory? Yes
✔ Would you like to use App Router? Yes
✔ Would you like to customize the default import alias? Yes
✔ What import alias would you like configured? @/*

# 2. 프로젝트 디렉토리로 이동
cd my-nextjs-app

# 3. 추가 패키지 설치 (선택사항)
// shadcn 설치
npx --legacy-peer-deps shadcn@latest init
npx --legacy-peer-deps shadcn@latest add button, dialog, card
npm install react-icons

// next-auth 설치
npm install next-auth