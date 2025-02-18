// src/components/MouseLightEffect.js
"use client";

import { useState, useEffect } from "react";

export default function MouseLightEffect() {
  const [position, setPosition] = useState({ x: -200, y: -200 });

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
        top: position.y - 100, // 커서 위치를 중앙에 두기 위한 오프셋 (원 크기 200px 기준)
        left: position.x - 100,
        width: "200px",
        height: "200px",
        pointerEvents: "none",
        background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)",
        transition: "top 0.1s ease-out, left 0.1s ease-out",
        zIndex: 10000,
      }}
    />
  );
}
