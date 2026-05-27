"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const APK_LINK = "#download";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0F0D09]/95 backdrop-blur-md border-b border-[rgba(255,111,49,0.15)] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Image src="/icon.png" alt="Jejalah" width={32} height={32} className="rounded-lg" />
            <span
              className="font-display font-black text-xl tracking-wide"
              style={{ color: "var(--primary-light)" }}
            >
              JEJALAH
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#fitur">Fitur</NavLink>
            <NavLink href="#cara-pakai">Cara Pakai</NavLink>
            <NavLink href="#destinasi">Destinasi</NavLink>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <a
              href={APK_LINK}
              className="btn-primary px-5 py-2.5 text-sm font-semibold flex items-center gap-2"
            >
              <DownloadIcon />
              Download APK
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-[var(--text-muted)] hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-[rgba(255,111,49,0.15)]">
            <div className="flex flex-col gap-3">
              <NavLink href="#fitur" onClick={() => setMenuOpen(false)}>Fitur</NavLink>
              <NavLink href="#cara-pakai" onClick={() => setMenuOpen(false)}>Cara Pakai</NavLink>
              <NavLink href="#destinasi" onClick={() => setMenuOpen(false)}>Destinasi</NavLink>
              <a
                href={APK_LINK}
                className="btn-primary px-5 py-2.5 text-sm font-semibold flex items-center justify-center gap-2 mt-2"
                onClick={() => setMenuOpen(false)}
              >
                <DownloadIcon />
                Download APK
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-[var(--text-muted)] hover:text-white transition-colors duration-200 text-sm font-medium"
    >
      {children}
    </a>
  );
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7,10 12,15 17,10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
