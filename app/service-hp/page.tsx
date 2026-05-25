import { Smartphone, Wrench, ShieldCheck, BatteryCharging } from "lucide-react";

export default function ServiceHP() {
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

            PROFESSIONAL SMARTPHONE REPAIR

          </span>

          <h1 className="mt-10 text-6xl md:text-8xl font-black leading-none">

            SERVICE HP

            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">

              MODERN

            </span>

          </h1>

          <p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-xl">

            Layanan perbaikan smartphone modern
            dengan kualitas premium, cepat, dan terpercaya.

          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 font-semibold hover:scale-105 transition duration-300 shadow-[0_0_40px_rgba(34,211,238,0.3)]">

              Order Service

            </button>

            <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition duration-300">

              View Pricing

            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative">

          <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] rounded-full"></div>

          <div className="relative rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">

            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop"
              alt="service"
              className="w-full h-[450px] object-cover rounded-[30px]"
            />

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section className="relative max-w-7xl mx-auto px-6 md:px-10 pb-32">

        <div className="text-center mb-20">

          <h2 className="text-5xl md:text-6xl font-black">

            Our Repair

            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">

              Services

            </span>

          </h2>

        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {/* CARD */}

          <div className="rounded-[32px] border border-cyan-400/10 bg-white/5 backdrop-blur-2xl p-8 hover:-translate-y-3 transition duration-500">

            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center">

              <Smartphone size={32} className="text-cyan-400" />

            </div>

            <h3 className="mt-8 text-2xl font-black">
              LCD Replacement
            </h3>

            <p className="mt-4 text-zinc-400">

              Ganti LCD pecah dengan kualitas premium.

            </p>

          </div>

          {/* CARD */}

          <div className="rounded-[32px] border border-purple-400/10 bg-white/5 backdrop-blur-2xl p-8 hover:-translate-y-3 transition duration-500">

            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center">

              <BatteryCharging size={32} className="text-purple-400" />

            </div>

            <h3 className="mt-8 text-2xl font-black">
              Battery Repair
            </h3>

            <p className="mt-4 text-zinc-400">

              Perbaikan dan penggantian baterai smartphone.

            </p>

          </div>

          {/* CARD */}

          <div className="rounded-[32px] border border-pink-400/10 bg-white/5 backdrop-blur-2xl p-8 hover:-translate-y-3 transition duration-500">

            <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center">

              <Wrench size={32} className="text-pink-400" />

            </div>

            <h3 className="mt-8 text-2xl font-black">
              Software Repair
            </h3>

            <p className="mt-4 text-zinc-400">

              Flashing, unlock, dan install ulang software.

            </p>

          </div>

          {/* CARD */}

          <div className="rounded-[32px] border border-green-400/10 bg-white/5 backdrop-blur-2xl p-8 hover:-translate-y-3 transition duration-500">

            <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center">

              <ShieldCheck size={32} className="text-green-400" />

            </div>

            <h3 className="mt-8 text-2xl font-black">
              Trusted Warranty
            </h3>

            <p className="mt-4 text-zinc-400">

              Garansi service terpercaya dan aman digunakan.

            </p>

          </div>

        </div>

      </section>

      {/* PRICING */}

      <section className="relative max-w-7xl mx-auto px-6 md:px-10 pb-32">

        <div className="text-center mb-20">

          <h2 className="text-5xl md:text-6xl font-black">

            Service

            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">

              Pricing

            </span>

          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* CARD */}

          <div className="rounded-[32px] border border-cyan-400/10 bg-white/5 backdrop-blur-2xl p-8">

            <h3 className="text-3xl font-black text-cyan-400">
              Basic Repair
            </h3>

            <div className="mt-8 text-5xl font-black">
              50K
            </div>

            <ul className="mt-8 space-y-4 text-zinc-300">

              <li>✔ Software Repair</li>
              <li>✔ Cleaning Device</li>
              <li>✔ Basic Checking</li>

            </ul>

          </div>

          {/* CARD */}

          <div className="rounded-[40px] border border-purple-400/20 bg-gradient-to-b from-purple-500/10 to-cyan-500/10 backdrop-blur-2xl p-10 scale-105 shadow-[0_0_80px_rgba(168,85,247,0.2)]">

            <h3 className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">

              Elite Repair

            </h3>

            <div className="mt-8 text-6xl font-black">
              150K
            </div>

            <ul className="mt-8 space-y-4 text-zinc-200">

              <li>✔ LCD Replacement</li>
              <li>✔ Battery Replacement</li>
              <li>✔ Premium Checking</li>

            </ul>

          </div>

          {/* CARD */}

          <div className="rounded-[32px] border border-pink-400/10 bg-white/5 backdrop-blur-2xl p-8">

            <h3 className="text-3xl font-black text-pink-400">
              Premium Repair
            </h3>

            <div className="mt-8 text-5xl font-black">
              350K
            </div>

            <ul className="mt-8 space-y-4 text-zinc-300">

              <li>✔ Full Service</li>
              <li>✔ Priority Repair</li>
              <li>✔ Warranty Included</li>

            </ul>

          </div>

        </div>

      </section>

    </main>
  );
}