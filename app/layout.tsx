import "./globals.css";
import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import type { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-[#050816] text-white relative overflow-x-hidden">

        {/* BACKGROUND EFFECT */}
        <ParticlesBackground />

        {/* MAIN CONTENT LAYER */}
        <div className="relative z-10">
          <Navbar />

          {children}

          <Footer />
        </div>

      </body>
    </html>
  );
}