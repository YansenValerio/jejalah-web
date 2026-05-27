import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 border-t"
      style={{ borderColor: "rgba(255, 111, 49, 0.1)", background: "var(--bg-deep)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Logo & tagline */}
          <div className="flex items-center gap-3">
            <Image src="/icon.png" alt="Jejalah" width={36} height={36} className="rounded-xl" />
            <div>
              <div className="font-display font-black text-base" style={{ color: "var(--primary-light)" }}>
                JEJALAH
              </div>
              <div className="text-xs" style={{ color: "var(--text-dim)" }}>
                Jelajahi Pekalongan, Raih Hadiah
              </div>
            </div>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm" style={{ color: "var(--text-dim)" }}>
            <a href="#fitur" className="hover:text-white transition-colors">Fitur</a>
            <a href="#cara-pakai" className="hover:text-white transition-colors">Cara Pakai</a>
            <a href="#destinasi" className="hover:text-white transition-colors">Destinasi</a>
            <a href="#download" className="hover:text-white transition-colors">Download</a>
          </nav>

          {/* Copyright */}
          <div className="text-xs" style={{ color: "var(--text-dim)" }}>
            © {year} Jejalah. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
