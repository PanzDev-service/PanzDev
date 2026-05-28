import "./globals.css";
import CursorGlow from "./components/CursorGlow";
import AnimatedBackground from "./components/AnimatedBackground";
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
      <body className="relative bg-[#050816] text-white">
        <AnimatedBackground />
        <CursorGlow />
        <Navbar />
          {children}
        
        <Footer />
      </body>
    </html>
  );
}