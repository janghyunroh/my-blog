// src/app/layout.js
import "../styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseLightEffect from "@/components/MouseLightEffect"; // 추가

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: "내 포트폴리오 & 블로그",
  description: "인공지능 개발자를 위한 개인 포트폴리오 및 블로그 사이트",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${inter.className} dark`}>
      <body className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
        <Navbar />
        {/* 마우스 광원 효과 추가 */}
        <MouseLightEffect />
        <main className="flex-grow px-28 pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
