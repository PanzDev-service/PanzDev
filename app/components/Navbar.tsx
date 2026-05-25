import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-2xl bg-black/20">

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">

        {/* LOGO */}

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-2xl font-black shadow-[0_0_40px_rgba(34,211,238,0.4)]">

            P

          </div>

          <div>

            <h1 className="text-2xl font-black tracking-wide bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">

              PanzDev

            </h1>

            <p className="text-sm font-medium tracking-[3px] uppercase text-cyan-300/80">

              Digital Service

            </p>

          </div>

        </div>

        {/* MENU */}

        <ul className="hidden md:flex items-center gap-10 text-zinc-300">

          <Link href="/">
            <li className="hover:text-cyan-400 transition cursor-pointer">
              Home
            </li>
          </Link>

          <Link href="/service-hp">
            <li className="hover:text-cyan-400 transition cursor-pointer">
              Service HP
            </li>
          </Link>

          <Link href="/design">
            <li className="hover:text-cyan-400 transition cursor-pointer">
              Design
            </li>
          </Link>

          <Link href="/website">
            <li className="hover:text-cyan-400 transition cursor-pointer">
              Website
            </li>
          </Link>

        </ul>

        {/* BUTTON */}

        <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 font-semibold hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(34,211,238,0.3)]">

          Contact

        </button>

      </div>

    </nav>
  );
}