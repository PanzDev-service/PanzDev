export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden">

      {/* GLOW */}

      <div className="absolute left-[-150px] bottom-[-150px] w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute right-[-150px] top-[-150px] w-[350px] h-[350px] bg-purple-500/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14">

          {/* BRAND */}

          <div>

            <div className="flex items-center gap-4">

              <img
  src="/logo.png"
  alt="PanzDev Logo"
  className="w-14 h-14 object-contain"
/>

              <div>

                <h2 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">

                  PanzDev

                </h2>

                <p className="text-sm tracking-[3px] uppercase text-cyan-300/70">

                  Digital Service

                </p>

              </div>

            </div>

            <p className="mt-8 text-zinc-400 leading-relaxed">

              Solusi modern untuk service HP,
              design editing, dan website development
              dengan tampilan premium.

            </p>

          </div>

          {/* NAVIGATION */}

          <div>

            <h3 className="text-xl font-black mb-8">
              Navigation
            </h3>

            <ul className="space-y-5 text-zinc-400">

              <li className="hover:text-cyan-400 transition cursor-pointer">
                Home
              </li>

              <li className="hover:text-cyan-400 transition cursor-pointer">
                Service HP
              </li>

              <li className="hover:text-cyan-400 transition cursor-pointer">
                Design Editing
              </li>

              <li className="hover:text-cyan-400 transition cursor-pointer">
                Website Development
              </li>

            </ul>

          </div>

          {/* SERVICES */}

          <div>

            <h3 className="text-xl font-black mb-8">
              Services
            </h3>

            <ul className="space-y-5 text-zinc-400">

              <li>LCD Replacement</li>

              <li>Poster Design</li>

              <li>Modern UI Website</li>

              <li>Social Media Design</li>

              <li>Smartphone Repair</li>

            </ul>

          </div>

          {/* CONTACT */}

          <div>

            <h3 className="text-xl font-black mb-8">
              Contact
            </h3>

            <div className="space-y-5 text-zinc-400">

              <p>
                WhatsApp:
                <span className="text-cyan-400">
                  {" "}+62 831-1736-9756
                </span>
              </p>

              <p>
                Instagram:
                <span className="text-purple-400">
                  {" "}@panzdev.service
                </span>
              </p>

              <p>
                TikTok:
                <span className="text-pink-400">
                  {" "}@panzdev.service
                </span>
              </p>

              <a
  href="https://wa.me/6283117369756?text=Halo%20PanzDev%2C%20saya%20ingin%20konsultasi%20mengenai%20layanan%20PanzDev."
  className="mt-4 inline-block px-6 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 font-semibold hover:scale-105 transition duration-300"
>
  Contact Now
</a>

            </div>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">

          <p className="text-zinc-500 text-sm">

            © 2026 PanzDev. All Rights Reserved.

          </p>

          <p className="text-zinc-600 text-sm">

            Futuristic Digital Experience

          </p>

        </div>

      </div>

    </footer>
  );
}