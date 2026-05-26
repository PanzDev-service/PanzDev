"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[999999] hidden md:block h-[280px] w-[280px] rounded-full bg-cyan-400/10 blur-[90px]"
      style={{
        left: pos.x - 140,
        top: pos.y - 140,
      }}
    />
  );
}