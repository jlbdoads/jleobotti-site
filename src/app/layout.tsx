"use client";

import "./globals.css";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-['Outfit']">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="font-bold text-xl">FERA</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#sobre" className="text-gray-600 hover:text-black font-medium">Sobre</a>
            <a href="#números" className="text-gray-600 hover:text-black font-medium">Números</a>
            <a href="#pacotes" className="text-gray-600 hover:text-black font-medium">Pacotes</a>
            <a href="#contato" className="text-gray-600 hover:text-black font-medium">Contato</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="https://instagram.com/jleobotti" target="_blank" rel="noopener noreferrer" className="text-2xl hover:scale-110 transition-transform">📸</a>
            <a href="https://tiktok.com/@jleobotti" target="_blank" rel="noopener noreferrer" className="text-2xl hover:scale-110 transition-transform">🎵</a>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-2xl">☰</button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden">
          <div className="p-6 pt-20">
            <nav className="space-y-4">
              <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="block text-2xl font-bold">Sobre</a>
              <a href="#números" onClick={() => setMobileMenuOpen(false)} className="block text-2xl font-bold">Números</a>
              <a href="#pacotes" onClick={() => setMobileMenuOpen(false)} className="block text-2xl font-bold">Pacotes</a>
              <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="block text-2xl font-bold">Contato</a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://instagram.com/jleobotti" target="_blank" rel="noopener noreferrer" className="text-3xl hover:scale-110 transition-transform">📸</a>
            <a href="https://tiktok.com/@jleobotti" target="_blank" rel="noopener noreferrer" className="text-3xl hover:scale-110 transition-transform">🎵</a>
          </div>
          <p className="text-white/60 mb-4">© 2026 JLeonardo - FERA. Todos os direitos reservados.</p>
          <p className="text-white/40 text-sm">
            Criado por{' '}
            <a href="https://wa.me/5544988186488" className="text-[#C9A227] hover:underline">jlbdo.ads</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
