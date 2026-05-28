"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[99999999]
      flex flex-col items-center justify-center
      bg-[#050816]
      transition-all duration-700
      ${
        hide
          ? "opacity-0 pointer-events-none"
          : "opacity-100"
      }`}
    >
      {/* Glow */}

      <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[120px]" />

      {/* Logo */}

      <div className="relative z-10 w-28 h-28 rounded-[32px]
      bg-gradient-to-br from-cyan-400 to-purple-500
      flex items-center justify-center
      text-5xl font-black
      shadow-[0_0_80px_rgba(34,211,238,0.5)]
      animate-pulse">
        P
      </div>

      {/* Text */}

      <h1 className="relative z-10 mt-10 text-4xl font-black
      bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500
      text-transparent bg-clip-text">
        PanzDev
      </h1>

      <p className="relative z-10 mt-3 text-zinc-400 tracking-[5px] uppercase">
        Loading Experience
      </p>

      {/* Bar */}

      <div className="relative z-10 mt-10 w-64 h-2 rounded-full bg-white/10 overflow-hidden">
        <div className="loading-bar h-full w-full bg-gradient-to-r from-cyan-400 to-purple-500" />
      </div>
    </div>
  );
}