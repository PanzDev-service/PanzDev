export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden bg-[#050816]">
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#22d3ee_1px,transparent_1px),linear-gradient(to_bottom,#22d3ee_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Aurora glow */}
      <div className="absolute top-[-120px] left-[-100px] w-[520px] h-[520px] bg-cyan-500/20 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute top-[25%] right-[-180px] w-[560px] h-[560px] bg-purple-500/20 rounded-full blur-[160px] animate-pulse" />
      <div className="absolute bottom-[-180px] left-[30%] w-[520px] h-[520px] bg-blue-500/10 rounded-full blur-[160px] animate-pulse" />

      {/* Floating stars */}
      <div className="absolute top-[18%] left-[12%] text-cyan-300 text-2xl animate-bounce drop-shadow-[0_0_15px_#22d3ee]">✦</div>
      <div className="absolute top-[35%] right-[18%] text-purple-300 text-xl animate-pulse drop-shadow-[0_0_15px_#a855f7]">✧</div>
      <div className="absolute bottom-[28%] left-[20%] text-blue-300 text-lg animate-bounce drop-shadow-[0_0_15px_#60a5fa]">✦</div>
      <div className="absolute bottom-[18%] right-[32%] text-pink-300 text-xl animate-pulse drop-shadow-[0_0_15px_#ec4899]">✧</div>

      {/* Floating rocket */}
      <div className="absolute top-[22%] right-[10%] text-5xl opacity-70 animate-bounce drop-shadow-[0_0_25px_#22d3ee]">
        🚀
      </div>

      {/* Floating tech orbs */}
      <div className="absolute top-[55%] left-[8%] w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_30px_#22d3ee] animate-ping" />
      <div className="absolute top-[70%] right-[14%] w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_30px_#a855f7] animate-pulse" />
      <div className="absolute top-[42%] left-[48%] w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_30px_#ec4899] animate-ping" />

      {/* Soft spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_35%)]" />
    </div>
  );
}