"use client";
import FadeUp from "./components/FadeUp";
import Link from "next/link";
import { Wrench, Palette, Globe } from "lucide-react";
import Hero from "./components/Hero";

const waNumber = "6283117369756";

const waLink = (text: string) =>
  `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
export default function Home() {
  return (

    <main className="relative z-10 min-h-screen bg-transparent text-white overflow-hidden relative">

      {/* BACKGROUND GLOW */}

      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500/30 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-500/30 blur-[180px] rounded-full"></div>

      {/* GRID */}

      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]"></div>

     
      {/* HERO SECTION */}
      
      <FadeUp>

      <section className="safe-reveal relative max-w-7xl mx-auto px-6 md:px-10 pt-40 pb-32 grid md:grid-cols-2 gap-24 items-center">
      
        {/* LEFT */}

        <div>

          <span className="px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm backdrop-blur-xl">

            FUTURISTIC DIGITAL SOLUTION

          </span>

          <h1 className="text-6xl md:text-8xl font-black leading-none">
  <span className="block hero-reveal-1">
    PanzDev
  </span>

  <span className="block mt-2 hero-reveal-2 animated-gradient bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">
    Digital Service
  </span>
</h1>

          <p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-xl">

            PanzDev menghadirkan solusi modern untuk service HP,
            design editing, dan website development dengan tampilan premium futuristik.

          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
  href="#services"
  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 font-semibold hover:scale-105 transition duration-300"
>
  Explore Service
</a>

           <a
  href="#pricing"
  className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition duration-300"
>
  Learn More
</a>

          </div>

        </div>

        {/* RIGHT PANEL */}

        <div className="relative">

          <div className="absolute inset-0 bg-cyan-500/20 blur-[120px] rounded-full"></div>

          <div className="relative mt-10 md:mt-0 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-[0_0_60px_rgba(34,211,238,0.08)]">

            <div className="grid grid-cols-2 gap-5">

              {/* BIG CARD */}

              <div className="col-span-2 rounded-3xl bg-[#0b1020] border border-cyan-400/10 p-8 hover:-translate-y-2 transition duration-300">

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center">

                  <Globe size={34} className="text-cyan-400" />

                </div>

                <h2 className="mt-6 text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">

                  WEBSITE DEVELOPMENT

                </h2>

                <p className="mt-4 text-zinc-400 leading-relaxed">

                  Website modern, responsive, premium UI/UX untuk bisnis digital modern.

                </p>

              </div>

              {/* SMALL CARD */}

              <div className="rounded-3xl bg-[#0b1020] border border-cyan-400/10 p-6 hover:-translate-y-2 transition duration-300">

                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">

                  <Wrench size={30} className="text-cyan-400" />

                </div>

                <h3 className="mt-5 text-xl font-bold">
                  Service HP
                </h3>

                <p className="mt-3 text-zinc-500 text-sm leading-relaxed">

                  LCD, baterai, software, unlock, dan perbaikan smartphone.

                </p>

              </div>

              {/* SMALL CARD */}

              <div className="rounded-3xl bg-[#0b1020] border border-purple-400/10 p-6 hover:-translate-y-2 transition duration-300">

                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center">

                  <Palette size={30} className="text-purple-400" />

                </div>

                <h3 className="mt-5 text-xl font-bold">
                  Design Editing
                </h3>

                <p className="mt-3 text-zinc-500 text-sm leading-relaxed">

                  Poster, branding, banner, social media modern editing.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
      </FadeUp>
{/* SERVICE SECTION */}
<FadeUp>
<section id="services" className="safe-reveal relative max-w-7xl mx-auto px-6 md:px-10 pb-32">

  {/* TITLE */}

  <div className="text-center mb-20">

    <span className="px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm backdrop-blur-xl">

      OUR SERVICES

    </span>

    <h2 className="mt-8 text-5xl md:text-6xl font-black">

      Premium Digital

      <span className="block animated-gradient bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">

        Solutions

      </span>

    </h2>

    <p className="mt-6 text-zinc-400 max-w-2xl mx-auto leading-relaxed">

      PanzDev menyediakan berbagai layanan digital modern
      dengan kualitas premium dan tampilan futuristik.

    </p>

  </div>

  {/* SERVICE GRID */}

  <div className="grid lg:grid-cols-3 gap-8">

    {/* CARD 1 */}

    <div className="premium-card group relative overflow-hidden rounded-[32px] border border-cyan-400/10 bg-white/5 backdrop-blur-2xl p-8 hover:-translate-y-3 transition duration-500">

      <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/10 blur-[80px]"></div>

      <div className="relative">

        <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-400/10">

          <Wrench size={32} className="text-cyan-400" />

        </div>

        <h3 className="mt-8 text-3xl font-black">
          Service HP
        </h3>

        <p className="mt-5 text-zinc-400 leading-relaxed">

          Ganti LCD, baterai, software, unlock,
          dan berbagai perbaikan smartphone modern.

        </p>

        <div className="mt-8 flex items-center justify-between">

          <span className="text-3xl font-black text-cyan-400">
            Start 50K
          </span>

          <a href="/service-hp" className="px-5 py-3 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 hover:bg-cyan-500/20 transition">
  Explore
</a>

        </div>

      </div>

    </div>

    {/* CARD 2 */}

    <div className="premium-card group relative overflow-hidden rounded-[32px] border border-purple-400/10 bg-white/5 backdrop-blur-2xl p-8 hover:-translate-y-3 transition duration-500">

      <div className="absolute top-0 right-0 w-40 h-40 bg-purple-400/10 blur-[80px]"></div>

      <div className="relative">

        <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-400/10">

          <Palette size={32} className="text-purple-400" />

        </div>

        <h3 className="mt-8 text-3xl font-black">
          Design Editing
        </h3>

        <p className="mt-5 text-zinc-400 leading-relaxed">

          Poster Instagram, branding,
          banner promosi, hingga desain premium modern.

        </p>

        <div className="mt-8 flex items-center justify-between">

          <span className="text-3xl font-black text-purple-400">
            Start 25K
          </span>

          <a href="/design" className="px-5 py-3 rounded-2xl bg-purple-500/10 border border-purple-400/20 text-purple-300 hover:bg-purple-500/20 transition">
  Explore
</a>

        </div>

      </div>

    </div>

    {/* CARD 3 */}

    <div className="premium-card group relative overflow-hidden rounded-[32px] border border-pink-400/10 bg-white/5 backdrop-blur-2xl p-8 hover:-translate-y-3 transition duration-500">

      <div className="absolute top-0 right-0 w-40 h-40 bg-pink-400/10 blur-[80px]"></div>

      <div className="relative">

        <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center border border-pink-400/10">

          <Globe size={32} className="text-pink-400" />

        </div>

        <h3 className="mt-8 text-3xl font-black">
          Website Development
        </h3>

        <p className="mt-5 text-zinc-400 leading-relaxed">

          Website modern, responsive,
          futuristic UI/UX untuk bisnis digital premium.

        </p>

        <div className="mt-8 flex items-center justify-between">

          <span className="text-3xl font-black text-pink-400">
            Start 75K
          </span>

          <a href="/website" className="px-5 py-3 rounded-2xl bg-pink-500/10 border border-pink-400/20 text-pink-300 hover:bg-pink-500/20 transition">
  Explore
</a>

        </div>

      </div>

    </div>

  </div>

</section>
</FadeUp>
{/* PRICING SECTION */}
<FadeUp>
<section id="pricing" className="safe-reveal relative max-w-7xl mx-auto px-6 md:px-10 pb-32">

  {/* TITLE */}

  <div className="text-center mb-20">

    <span className="px-5 py-2 rounded-full border border-purple-400/20 bg-purple-400/10 text-purple-300 text-sm backdrop-blur-xl">

      WEBSITE PACKAGE

    </span>

    <h2 className="mt-8 text-5xl md:text-6xl font-black">

      Choose Your

      <span className="block animated-gradient bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">

        Best Package

      </span>

    </h2>

    <p className="mt-6 text-zinc-400 max-w-2xl mx-auto leading-relaxed">

      Paket website modern untuk kebutuhan bisnis digital,
      UMKM, personal branding, hingga company profile premium.

    </p>

  </div>

  {/* PRICING GRID */}

  <div className="grid lg:grid-cols-3 gap-8 items-center">

    {/* BASIC */}

    <div className="premium-card rounded-[32px] border border-cyan-400/10 bg-white/5 backdrop-blur-2xl p-8 hover:-translate-y-3 transition duration-500">

      <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-400/10 text-cyan-400 text-2xl font-black">

        B

      </div>

      <h3 className="mt-8 text-3xl font-black">
        Basic
      </h3>

      <p className="mt-4 text-zinc-400 leading-relaxed">

        Cocok untuk personal branding,
        bio link, dan landing page sederhana.

      </p>

      <div className="mt-8">

        <span className="text-5xl font-black text-cyan-400">
          50K
        </span>

      </div>

      <ul className="mt-8 space-y-4 text-zinc-300">

        <li>✔ 1 Halaman Website</li>
        <li>✔ Responsive Mobile</li>
        <li>✔ Design Modern</li>
        <li>✔ Free Hosting GitHub</li>

      </ul>

      <a
  href={waLink("Halo PanzDev, saya tertarik dengan paket Website Basic 50K. Bisa konsultasi?")}
  className="mt-10 block w-full text-center py-4 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 hover:bg-cyan-500/20 transition"
>
  Order Now
</a>

    </div>

    {/* ELITE */}

    <div className="premium-card relative rounded-[40px] border border-purple-400/20 bg-gradient-to-b from-purple-500/10 to-cyan-500/10 backdrop-blur-2xl p-10 scale-105 shadow-[0_0_80px_rgba(168,85,247,0.2)]">

      {/* BADGE */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-sm font-bold">

        MOST POPULAR

      </div>

      <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-400/10 text-purple-400 text-2xl font-black">

        E

      </div>

      <h3 className="mt-8 text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">

        Elite

      </h3>

      <p className="mt-4 text-zinc-300 leading-relaxed">

        Untuk UMKM dan bisnis modern
        dengan tampilan lebih premium dan interaktif.

      </p>

      <div className="mt-8">

        <span className="text-6xl font-black text-white">
          150K
        </span>

      </div>

      <ul className="mt-8 space-y-4 text-zinc-200">

        <li>✔ Multi Page Website</li>
        <li>✔ Premium UI Design</li>
        <li>✔ Hover Animation</li>
        <li>✔ WhatsApp Integration</li>
        <li>✔ Responsive All Device</li>

      </ul>

      <a
  href={waLink("Halo PanzDev, saya tertarik dengan paket Website Elite 150K. Bisa konsultasi?")}
  className="mt-10 block w-full text-center py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 font-semibold hover:scale-105 transition duration-300"
>
  Choose Package
</a>

    </div>

    {/* PREMIUM */}

    <div className="premium-card rounded-[32px] border border-pink-400/10 bg-white/5 backdrop-blur-2xl p-8 hover:-translate-y-3 transition duration-500">

      <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center border border-pink-400/10 text-pink-400 text-2xl font-black">

        P

      </div>

      <h3 className="mt-8 text-3xl font-black">
        Premium
      </h3>

      <p className="mt-4 text-zinc-400 leading-relaxed">

        Website futuristic premium
        dengan UI modern dan fitur lebih lengkap.

      </p>

      <div className="mt-8">

        <span className="text-5xl font-black text-pink-400">
          350K
        </span>

      </div>

      <ul className="mt-8 space-y-4 text-zinc-300">

        <li>✔ Premium Futuristic UI</li>
        <li>✔ Advanced Animation</li>
        <li>✔ Glassmorphism Design</li>
        <li>✔ Interactive Section</li>
        <li>✔ Full Responsive Premium</li>
        <li>✔ Priority Revision</li>

      </ul>

      <a
  href={waLink("Halo PanzDev, saya tertarik dengan paket Website Premium 350K. Bisa konsultasi?")}
  className="mt-10 block w-full text-center py-4 rounded-2xl bg-pink-500/10 border border-pink-400/20 text-pink-300 hover:bg-pink-500/20 transition"
>
  Order Premium
</a>

    </div>

  </div>

</section>
</FadeUp>
{/* PORTFOLIO SECTION */}
<FadeUp>
<section className="safe-reveal relative max-w-7xl mx-auto px-6 md:px-10 pb-32">

  {/* TITLE */}

  <div className="text-center mb-20">

    <span className="px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm backdrop-blur-xl">

      OUR PORTFOLIO

    </span>

    <h2 className="mt-8 text-5xl md:text-6xl font-black">

      Creative Digital

      <span className="block animated-gradient bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">

        Showcase

      </span>

    </h2>

    <p className="mt-6 text-zinc-400 max-w-2xl mx-auto leading-relaxed">

      Beberapa hasil project modern dari PanzDev
      untuk branding, website, dan digital creative.

    </p>

  </div>

  {/* PORTFOLIO GRID */}

  <div className="grid lg:grid-cols-3 gap-8">

    {/* CARD 1 */}

    <div className="group relative overflow-hidden rounded-[32px] border border-cyan-400/10 bg-white/5 backdrop-blur-2xl hover:-translate-y-3 transition duration-500">

      <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

      {/* IMAGE */}

      <div className="h-[260px] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
          alt="website"
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

      </div>

      {/* CONTENT */}

      <div className="p-8 relative">

        <span className="text-cyan-400 text-sm font-semibold">
          WEBSITE DEVELOPMENT
        </span>

        <h3 className="mt-4 text-3xl font-black">
          Futuristic Business Website
        </h3>

        <p className="mt-5 text-zinc-400 leading-relaxed">

          Website modern dengan UI futuristik,
          responsive, dan premium branding.

        </p>

      </div>

    </div>

    {/* CARD 2 */}

    <div className="group relative overflow-hidden rounded-[32px] border border-purple-400/10 bg-white/5 backdrop-blur-2xl hover:-translate-y-3 transition duration-500">

      <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

      {/* IMAGE */}

      <div className="h-[260px] overflow-hidden">

        <img
          src="/images/santa.jpeg"
          alt="design"
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

      </div>

      {/* CONTENT */}

      <div className="p-8 relative">

        <span className="text-purple-400 text-sm font-semibold">
          DESIGN EDITING
        </span>

        <h3 className="mt-4 text-3xl font-black">
          Modern Social Media Design
        </h3>

        <p className="mt-5 text-zinc-400 leading-relaxed">

          Desain premium untuk branding,
          promosi digital, dan social media modern.

        </p>

      </div>

    </div>

    {/* CARD 3 */}

    <div className="group relative overflow-hidden rounded-[32px] border border-pink-400/10 bg-white/5 backdrop-blur-2xl hover:-translate-y-3 transition duration-500">

      <div className="absolute inset-0 bg-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

      {/* IMAGE */}

      <div className="h-[260px] overflow-hidden">

        <img
          src="/images/servis.jpg"
          alt="service"
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

      </div>

      {/* CONTENT */}

      <div className="p-8 relative">

        <span className="text-pink-400 text-sm font-semibold">
          SERVICE HP
        </span>

        <h3 className="mt-4 text-3xl font-black">
          Professional Smartphone Repair
        </h3>

        <p className="mt-5 text-zinc-400 leading-relaxed">

          Perbaikan smartphone modern dengan
          kualitas teknisi profesional terpercaya.

        </p>

      </div>

    </div>

  </div>

</section>
</FadeUp>
{/* WHY CHOOSE US */}
<FadeUp>
<section className="safe-reveal relative max-w-7xl mx-auto px-6 md:px-10 pb-32">

  {/* TITLE */}

  <div className="text-center mb-20">

    <span className="px-5 py-2 rounded-full border border-pink-400/20 bg-pink-400/10 text-pink-300 text-sm backdrop-blur-xl">

      WHY CHOOSE US

    </span>

    <h2 className="mt-8 text-5xl md:text-6xl font-black">

      Why People

      <span className="block animated-gradient bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">

        Choose PanzDev

      </span>

    </h2>

    <p className="mt-6 text-zinc-400 max-w-2xl mx-auto leading-relaxed">

      Kami menghadirkan layanan digital modern
      dengan kualitas premium, cepat, dan terpercaya.

    </p>

  </div>

  {/* GRID */}

  <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

    {/* CARD 1 */}

    <div className="group relative overflow-hidden rounded-[32px] border border-cyan-400/10 bg-white/5 backdrop-blur-2xl p-8 hover:-translate-y-3 transition duration-500">

      <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/10 blur-[80px]"></div>

      <div className="relative">

        <div className="text-5xl font-black text-cyan-400">
          24H
        </div>

        <h3 className="mt-6 text-2xl font-black">
          Fast Response
        </h3>

        <p className="mt-4 text-zinc-400 leading-relaxed">

          Respon cepat dan siap membantu customer kapan saja.

        </p>

      </div>

    </div>

    {/* CARD 2 */}

    <div className="group relative overflow-hidden rounded-[32px] border border-purple-400/10 bg-white/5 backdrop-blur-2xl p-8 hover:-translate-y-3 transition duration-500">

      <div className="absolute top-0 right-0 w-40 h-40 bg-purple-400/10 blur-[80px]"></div>

      <div className="relative">

        <div className="text-5xl font-black text-purple-400">
          100+
        </div>

        <h3 className="mt-6 text-2xl font-black">
          Client Trusted
        </h3>

        <p className="mt-4 text-zinc-400 leading-relaxed">

          Dipercaya oleh berbagai client untuk kebutuhan digital modern.

        </p>

      </div>

    </div>

    {/* CARD 3 */}

    <div className="group relative overflow-hidden rounded-[32px] border border-pink-400/10 bg-white/5 backdrop-blur-2xl p-8 hover:-translate-y-3 transition duration-500">

      <div className="absolute top-0 right-0 w-40 h-40 bg-pink-400/10 blur-[80px]"></div>

      <div className="relative">

        <div className="text-5xl font-black text-pink-400">
          PRO
        </div>

        <h3 className="mt-6 text-2xl font-black">
          Premium Quality
        </h3>

        <p className="mt-4 text-zinc-400 leading-relaxed">

          Mengutamakan kualitas visual dan pengalaman terbaik.

        </p>

      </div>

    </div>

    {/* CARD 4 */}

    <div className="group relative overflow-hidden rounded-[32px] border border-green-400/10 bg-white/5 backdrop-blur-2xl p-8 hover:-translate-y-3 transition duration-500">

      <div className="absolute top-0 right-0 w-40 h-40 bg-green-400/10 blur-[80px]"></div>

      <div className="relative">

        <div className="text-5xl font-black text-green-400">
          UI
        </div>

        <h3 className="mt-6 text-2xl font-black">
          Modern Design
        </h3>

        <p className="mt-4 text-zinc-400 leading-relaxed">

          Tampilan futuristik modern yang menarik dan responsive.

        </p>

      </div>

    </div>

  </div>

</section>
</FadeUp>

    </main>
  );
}