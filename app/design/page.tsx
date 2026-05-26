import { Palette, ImageIcon, Layers3, Sparkles } from "lucide-react";

export default function DesignPage() {
  return (
    <main className="relative z-10 min-h-screen bg-transparent text-white overflow-hidden relative">

      {/* GLOW */}

      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-500/20 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-pink-500/20 blur-[180px] rounded-full"></div>

      {/* HERO */}

      <section className="safe-reveal relative max-w-7xl mx-auto px-6 md:px-10 pt-56 pb-32 grid md:grid-cols-2 gap-24 items-center">

        {/* LEFT */}

        <div>

          <span className="px-5 py-2 rounded-full border border-purple-400/20 bg-purple-400/10 text-purple-300 text-sm backdrop-blur-xl">

            MODERN CREATIVE DESIGN

          </span>

          <h1 className="mt-10 text-6xl md:text-8xl font-black leading-none">

            DESIGN

            <span className="block animated-gradient bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">

              EDITING

            </span>

          </h1>

          <p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-xl">

            Desain modern futuristik untuk branding,
            social media, promosi, dan kebutuhan visual premium.

          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-500 font-semibold hover:scale-105 transition duration-300 shadow-[0_0_40px_rgba(168,85,247,0.3)]">

              Explore Design

            </button>

            <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition duration-300">

              Portfolio

            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative mt-12 md:mt-0">

          <div className="absolute inset-0 bg-purple-500/10 blur-[100px] rounded-full"></div>

         <div className="relative mt-10 md:mt-0 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">

            <img
              src="/images/santa.jpeg"
              alt="design"
              className="w-full h-[450px] object-cover rounded-[30px]"
            />

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section className="safe-reveal relative max-w-7xl mx-auto px-6 md:px-10 pb-32">

        <div className="text-center mb-20">

          <h2 className="text-5xl md:text-6xl font-black">

            Creative Design

            <span className="block animated-gradient bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">

              Services

            </span>

          </h2>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

          {/* CARD */}

          <div className="rounded-[32px] border border-purple-400/10 bg-white/5 backdrop-blur-2xl p-8 hover:-translate-y-3 transition duration-500">

            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center">

              <Palette size={32} className="text-purple-400" />

            </div>

            <h3 className="mt-8 text-2xl font-black">
              Poster Design
            </h3>

            <p className="mt-4 text-zinc-400">

              Poster modern untuk promosi bisnis dan branding.

            </p>

          </div>

          {/* CARD */}

          <div className="rounded-[32px] border border-pink-400/10 bg-white/5 backdrop-blur-2xl p-8 hover:-translate-y-3 transition duration-500">

            <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center">

              <ImageIcon size={32} className="text-pink-400" />

            </div>

            <h3 className="mt-8 text-2xl font-black">
              Feed Instagram
            </h3>

            <p className="mt-4 text-zinc-400">

              Feed Instagram aesthetic dan premium modern.

            </p>

          </div>

          {/* CARD */}

          <div className="rounded-[32px] border border-cyan-400/10 bg-white/5 backdrop-blur-2xl p-8 hover:-translate-y-3 transition duration-500">

            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center">

              <Layers3 size={32} className="text-cyan-400" />

            </div>

            <h3 className="mt-8 text-2xl font-black">
              Branding Design
            </h3>

            <p className="mt-4 text-zinc-400">

              Branding visual modern untuk bisnis digital.

            </p>

          </div>

          {/* CARD */}

          <div className="rounded-[32px] border border-yellow-400/10 bg-white/5 backdrop-blur-2xl p-8 hover:-translate-y-3 transition duration-500">

            <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 flex items-center justify-center">

              <Sparkles size={32} className="text-yellow-400" />

            </div>

            <h3 className="mt-8 text-2xl font-black">
              Premium Editing
            </h3>

            <p className="mt-4 text-zinc-400">

              Editing visual futuristik dengan kualitas premium.

            </p>

          </div>

        </div>

      </section>

      {/* SHOWCASE */}

      <section className="safe-reveal relative max-w-7xl mx-auto px-6 md:px-10 pb-32">

        <div className="text-center mb-20">

          <h2 className="text-5xl md:text-6xl font-black">

            Design

            <span className="block animated-gradient bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">

              Showcase

            </span>

          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* IMAGE */}

          <div className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl">

            <img
              src="/images/minje.jpeg"
              alt="showcase"
              className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-700"
            />

          </div>

          {/* IMAGE */}

          <div className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl">

            <img
              src="/images/yuta.jpeg"
              alt="showcase"
              className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-700"
            />

          </div>

          {/* IMAGE */}

          <div className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl">

            <img
              src="/images/carmen.jpeg"
              alt="showcase"
              className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-700"
            />

          </div>

        </div>

      </section>

    </main>
  );
}