

## my-blog

개인 포트폴리오 및 블로그 용도로 사용하는 웹페이지입니다. 

- Next.js 프레임워크로 개발을 진행했습니다. 
- 게시글은 마크다운 렌더링을 통해 진행됩니다. 
- Firebase를 통한 웹 배포를 진행할 계획입니다. 

## 프로젝트 레이아웃

/ (프로젝트 루트)
├─ posts/                // 마크다운 파일 저장 폴더 (혹은 content/posts/)
├─ src/
│  ├─ app/
│  │  ├─ layout.js       // 글로벌 레이아웃 파일
│  │  ├─ page.js         // 홈 페이지 (포트폴리오 기본 화면)
│  │  ├─ portfolio/
│  │  │  └─ page.js      // 포트폴리오 페이지
│  │  └─ posts/
│  │     ├─ page.js      // 게시글 목록 페이지 (좌측 사이드바 포함)
│  │     └─ [slug]/
│  │         └─ page.js  // 개별 게시글 페이지 (동적 라우팅)
│  ├─ components/
│  │  ├─ Navbar.js       // 네비게이션 바 컴포넌트
│  │  └─ Footer.js       // 푸터 컴포넌트 (소셜 아이콘 포함)
│  └─ lib/
│     └─ markdown.js     // 마크다운 파일 파싱 및 HTML 변환 함수
├─ styles/
│  └─ globals.css        // Tailwind CSS 지시문 포함
└─ package.json

## Next.js README

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

