import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-[999999] border-b border-white/10 backdrop-blur-2xl bg-black/40">
      <input id="mobile-menu" type="checkbox" className="peer hidden" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <img
  src="/logo.png"
  alt="PanzDev Logo"
  className="w-14 h-14 object-contain"
/>

          <div>
            <h1 className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">
              PanzDev
            </h1>
            <p className="text-sm tracking-[3px] uppercase text-cyan-300/80">
              Digital Service
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-zinc-300">
          <Link href="/">Home</Link>
          <Link href="/service-hp">Service HP</Link>
          <Link href="/design">Design</Link>
          <Link href="/website">Website</Link>
        </nav>

        <label
          htmlFor="mobile-menu"
          className="md:hidden w-12 h-12 rounded-2xl bg-white/10 border border-white/10 text-white flex items-center justify-center cursor-pointer"
        >
          <Menu />
        </label>
      </div>

    <div className="hidden peer-checked:block md:hidden absolute left-4 right-4 top-[92px] z-[999999]">
  <div className="rounded-[28px] border border-cyan-400/20 bg-[#07111f]/95 backdrop-blur-2xl p-4 shadow-[0_0_50px_rgba(34,211,238,0.2)]">
    <div className="flex flex-col gap-3">
      <a href="/" className="rounded-2xl bg-white/5 px-5 py-4 text-lg font-bold text-white">
        Home
      </a>

      <a href="/service-hp" className="rounded-2xl bg-white/5 px-5 py-4 text-lg font-bold text-white">
        Service HP
      </a>

      <a href="/design" className="rounded-2xl bg-white/5 px-5 py-4 text-lg font-bold text-white">
        Design
      </a>

      <a href="/website" className="rounded-2xl bg-white/5 px-5 py-4 text-lg font-bold text-white">
        Website
      </a>
    </div>
  </div>
</div>
    </header>
  );
}