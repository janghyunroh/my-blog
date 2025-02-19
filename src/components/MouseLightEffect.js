// src/components/MouseLightEffect.js
"use client";

import { useState, useEffect } from "react";

export default function MouseLightEffect() {
  const [position, setPosition] = useState({ x: -200, y: -200 });
  const [effectSize, setEffectSize] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      // 화면 세로 길이의 90% 크기로 설정
      setEffectSize(window.innerHeight * 0.9);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y - effectSize / 2,
        left: position.x - effectSize / 2,
        width: effectSize,
        height: effectSize,
        pointerEvents: "none",
        // 부드러운 파란색 그라데이션을 단일 색상에서 시작해 전체적으로 투명해지도록 함
        background: "radial-gradient(circle, rgba(100,123,255,0.15) 0%, rgba(100,123,255,0) 100%)",
        // 테두리가 뚜렷하지 않도록 블러 효과 적용
        filter: "blur(80px)",
        transition: "top 0.1s ease-out, left 0.1s ease-out",
        zIndex: 10000,
        borderRadius: "50%", // 확실한 원 형태
      }}
    />
  );
}
