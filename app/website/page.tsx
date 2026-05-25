import { Globe, MonitorSmartphone, Sparkles, Layers3 } from "lucide-react";

export default function WebsitePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden relative">

      {/* GLOW */}

      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500/20 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-500/20 blur-[180px] rounded-full"></div>

      {/* HERO */}

      <section className="relative max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-24 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}

        <div>

          <span className="px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm backdrop-blur-xl">

            FUTURISTIC WEBSITE DEVELOPMENT

          </span>

          <h1 className="mt-10 text-6xl md:text-8xl font-black leading-none">

            BUILD YOUR

            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">

              DIGITAL FUTURE

            </span>

          </h1>

          <p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-xl">

            Website modern dengan UI premium,
            responsive, interaktif, dan futuristik
            untuk bisnis digital modern.

          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 font-semibold hover:scale-105 transition duration-300 shadow-[0_0_40px_rgba(34,211,238,0.3)]">

              Start Project

            </button>

            <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition duration-300">

              View Portfolio

            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative">

          <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] rounded-full"></div>

          <div className="relative rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">

            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
              alt="website"
              className="w-full h-[450px] object-cover rounded-[30px]"
            />

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="relative max-w-7xl mx-auto px-6 md:px-10 pb-32">

        <div className="text-center mb-20">

          <h2 className="text-5xl md:text-6xl font-black">

            Website

            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">

              Features

            </span>

          </h2>

        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {/* CARD */}

          <div className="rounded-[32px] border border-cyan-400/10 bg-white/5 backdrop-blur-2xl p-8 hover:-translate-y-3 transition duration-500">

            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center">

              <Globe size={32} className="text-cyan-400" />

            </div>

            <h3 className="mt-8 text-2xl font-black">
              Modern Website
            </h3>

            <p className="mt-4 text-zinc-400">

              Website modern dengan tampilan premium futuristik.

            </p>

          </div>

          {/* CARD */}

          <div className="rounded-[32px] border border-purple-400/10 bg-white/5 backdrop-blur-2xl p-8 hover:-translate-y-3 transition duration-500">

            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center">

              <MonitorSmartphone size={32} className="text-purple-400" />

            </div>

            <h3 className="mt-8 text-2xl font-black">
              Responsive Design
            </h3>

            <p className="mt-4 text-zinc-400">

              Nyaman digunakan di desktop maupun smartphone.

            </p>

          </div>

          {/* CARD */}

          <div className="rounded-[32px] border border-pink-400/10 bg-white/5 backdrop-blur-2xl p-8 hover:-translate-y-3 transition duration-500">

            <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center">

              <Layers3 size={32} className="text-pink-400" />

            </div>

            <h3 className="mt-8 text-2xl font-black">
              Interactive UI
            </h3>

            <p className="mt-4 text-zinc-400">

              Hover effect dan interaksi modern premium.

            </p>

          </div>

          {/* CARD */}

          <div className="rounded-[32px] border border-yellow-400/10 bg-white/5 backdrop-blur-2xl p-8 hover:-translate-y-3 transition duration-500">

            <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 flex items-center justify-center">

              <Sparkles size={32} className="text-yellow-400" />

            </div>

            <h3 className="mt-8 text-2xl font-black">
              Futuristic Style
            </h3>

            <p className="mt-4 text-zinc-400">

              Design futuristic modern seperti startup premium.

            </p>

          </div>

        </div>

      </section>

      {/* PRICING */}

      <section className="relative max-w-7xl mx-auto px-6 md:px-10 pb-32">

        <div className="text-center mb-20">

          <h2 className="text-5xl md:text-6xl font-black">

            Website

            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">

              Packages

            </span>

          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">

          {/* BASIC */}

          <div className="rounded-[32px] border border-cyan-400/10 bg-white/5 backdrop-blur-2xl p-8">

            <h3 className="text-3xl font-black text-cyan-400">
              Basic
            </h3>

            <div className="mt-8 text-5xl font-black">
              50K
            </div>

            <ul className="mt-8 space-y-4 text-zinc-300">

              <li>✔ Landing Page</li>
              <li>✔ Responsive Design</li>
              <li>✔ Basic UI</li>

            </ul>

          </div>

          {/* ELITE */}

          <div className="rounded-[40px] border border-purple-400/20 bg-gradient-to-b from-purple-500/10 to-cyan-500/10 backdrop-blur-2xl p-10 scale-105 shadow-[0_0_80px_rgba(168,85,247,0.2)]">

            <h3 className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">

              Elite

            </h3>

            <div className="mt-8 text-6xl font-black">
              150K
            </div>

            <ul className="mt-8 space-y-4 text-zinc-200">

              <li>✔ Multi Page</li>
              <li>✔ Premium UI</li>
              <li>✔ Interactive Design</li>
              <li>✔ WhatsApp Integration</li>

            </ul>

          </div>

          {/* PREMIUM */}

          <div className="rounded-[32px] border border-pink-400/10 bg-white/5 backdrop-blur-2xl p-8">

            <h3 className="text-3xl font-black text-pink-400">
              Premium
            </h3>

            <div className="mt-8 text-5xl font-black">
              350K
            </div>

            <ul className="mt-8 space-y-4 text-zinc-300">

              <li>✔ Futuristic UI</li>
              <li>✔ Advanced Animation</li>
              <li>✔ Glassmorphism</li>
              <li>✔ Premium Interaction</li>

            </ul>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="relative max-w-7xl mx-auto px-6 md:px-10 pb-32">

        <div className="relative overflow-hidden rounded-[40px] border border-cyan-400/10 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-2xl p-14 text-center">

          <div className="absolute top-[-100px] left-[-100px] w-[250px] h-[250px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

          <div className="absolute bottom-[-100px] right-[-100px] w-[250px] h-[250px] bg-purple-500/10 blur-[120px] rounded-full"></div>

          <div className="relative">

            <h2 className="text-5xl md:text-6xl font-black">

              Ready To Build

              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">

                Your Website?

              </span>

            </h2>

            <p className="mt-8 text-zinc-300 max-w-2xl mx-auto text-lg leading-relaxed">

              Bangun website modern premium bersama PanzDev
              dan tingkatkan branding digital bisnismu.

            </p>

            <button className="mt-10 px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 font-semibold hover:scale-105 transition duration-300 shadow-[0_0_50px_rgba(34,211,238,0.4)]">

              Contact Now

            </button>

          </div>

        </div>

      </section>

    </main>
  );
}