// src/components/Clock.js
"use client";

import { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const seoulString = now.toLocaleString("en-US", { timeZone: "Asia/Seoul" });
      const seoulTime = new Date(seoulString);

      const hours = String(seoulTime.getHours()).padStart(2, "0");
      const minutes = String(seoulTime.getMinutes()).padStart(2, "0");
      const seconds = String(seoulTime.getSeconds()).padStart(2, "0");

      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div className="tabular-nums">{time}</div>;
}
