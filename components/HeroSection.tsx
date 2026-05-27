import Image from "next/image";

const APK_LINK = "#download";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden dots-pattern">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(232, 86, 10, 0.12) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 20% 80%, rgba(104, 219, 174, 0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{
                background: "rgba(232, 86, 10, 0.15)",
                border: "1px solid rgba(232, 86, 10, 0.3)",
                color: "var(--primary-light)",
              }}
            >
              <span>🎮</span>
              <span>Gamified Tourism App • Pekalongan</span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              Jelajahi{" "}
              <span className="gradient-text">Pekalongan</span>,
              <br />
              Kumpulkan{" "}
              <span style={{ color: "var(--secondary)" }}>XP</span>,
              <br />
              Raih{" "}
              <span style={{ color: "var(--accent)" }}>Hadiah</span>
            </h1>

            <p
              className="text-lg leading-relaxed mb-8 max-w-lg"
              style={{ color: "var(--text-muted)" }}
            >
              Temukan keindahan Pekalongan lewat quest seru di lokasi nyata. Verifikasi GPS,
              ambil foto, kumpulkan XP, dan tukar dengan reward dari UMKM lokal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={APK_LINK}
                className="btn-primary px-7 py-4 text-base font-bold flex items-center justify-center gap-3"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7,10 12,15 17,10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download APK
              </a>

              <a
                href="#fitur"
                className="px-7 py-4 text-base font-semibold flex items-center justify-center gap-2 rounded-xl transition-colors duration-200"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "var(--text-muted)",
                }}
              >
                Lihat Fitur
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10">
              <Stat value="9+" label="Destinasi Quest" />
              <Stat value="10" label="Badge Trophy" />
              <Stat value="Free" label="Gratis" accent />
            </div>
          </div>

          {/* Right: phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, transparent, var(--primary))" }} />
        <div className="w-4 h-4 rounded-full" style={{ background: "var(--primary)", opacity: 0.6 }} />
      </div>
    </section>
  );
}

function Stat({ value, label, accent }: { value: string; label: string; accent?: boolean }) {
  return (
    <div>
      <div
        className="font-display font-black text-2xl"
        style={{ color: accent ? "var(--accent)" : "var(--secondary)" }}
      >
        {value}
      </div>
      <div className="text-xs" style={{ color: "var(--text-dim)" }}>
        {label}
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative">
      {/* Glow behind phone */}
      <div
        className="absolute inset-0 blur-3xl rounded-full scale-75"
        style={{ background: "radial-gradient(circle, rgba(232, 86, 10, 0.25) 0%, transparent 70%)" }}
      />

      {/* Phone frame */}
      <div
        className="relative w-[260px] h-[520px] rounded-[44px] p-3 shadow-2xl"
        style={{
          background: "linear-gradient(145deg, #2d1a0e, #1a0d06)",
          border: "2px solid rgba(255, 111, 49, 0.3)",
          boxShadow: "0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        {/* Screen */}
        <div
          className="w-full h-full rounded-[36px] overflow-hidden flex flex-col"
          style={{ background: "var(--bg-deep)" }}
        >
          {/* Status bar */}
          <div className="flex justify-between items-center px-5 pt-3 pb-1">
            <span className="text-xs font-medium" style={{ color: "var(--text-dim)" }}>9:41</span>
            <div className="w-20 h-5 rounded-full" style={{ background: "var(--bg-surface)" }} />
            <div className="flex gap-1">
              {[1,2,3].map(i => (
                <div key={i} className="w-1 rounded-full" style={{ height: `${i * 4}px`, background: "var(--text-dim)", alignSelf: "flex-end" }} />
              ))}
            </div>
          </div>

          {/* App header */}
          <div className="px-4 pt-3 pb-2">
            <div className="flex items-center gap-2">
              <Image src="/icon.png" alt="Jejalah" width={28} height={28} className="rounded-lg" />
              <span className="font-display font-black text-sm" style={{ color: "var(--primary-light)" }}>JEJALAH</span>
            </div>
          </div>

          {/* Map area */}
          <div
            className="mx-4 rounded-2xl flex-1 flex flex-col overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #1a2a1a 0%, #0d1a0d 50%, #1a150a 100%)",
              border: "1px solid rgba(104, 219, 174, 0.15)",
            }}
          >
            {/* Grid lines (map simulation) */}
            <div className="relative flex-1 p-3">
              {/* Fake map grid */}
              <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#68dbae" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>

              {/* Quest markers */}
              <QuestPin top="20%" left="35%" active />
              <QuestPin top="45%" left="60%" />
              <QuestPin top="60%" left="25%" />
              <QuestPin top="35%" left="75%" />

              {/* User location */}
              <div
                className="absolute w-5 h-5 rounded-full flex items-center justify-center"
                style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: "var(--primary)", boxShadow: "0 0 12px var(--primary)" }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-white" />
              </div>
            </div>

            {/* Quest card preview */}
            <div
              className="mx-3 mb-3 p-3 rounded-xl"
              style={{ background: "rgba(255, 111, 49, 0.15)", border: "1px solid rgba(255, 111, 49, 0.3)" }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs font-bold text-white">Museum Batik</div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>Budaya • 1.2 km</div>
                </div>
                <div className="text-xs font-bold" style={{ color: "var(--secondary)" }}>+150 XP</div>
              </div>
            </div>
          </div>

          {/* Bottom nav */}
          <div
            className="flex justify-around items-center px-4 py-3 mx-4 mb-3 mt-2 rounded-2xl"
            style={{ background: "var(--bg-surface)", border: "1px solid rgba(255, 111, 49, 0.1)" }}
          >
            {["🗺️", "⚡", "🏆", "🎁", "👤"].map((icon, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-xl flex items-center justify-center text-base"
                style={i === 0 ? { background: "rgba(232, 86, 10, 0.2)" } : {}}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.2)" }} />
      </div>
    </div>
  );
}

function QuestPin({ top, left, active }: { top: string; left: string; active?: boolean }) {
  return (
    <div
      className="absolute flex items-center justify-center w-6 h-6 rounded-full text-xs"
      style={{
        top,
        left,
        transform: "translate(-50%, -50%)",
        background: active ? "var(--primary)" : "rgba(104, 219, 174, 0.3)",
        border: active ? "2px solid var(--primary-light)" : "1px solid var(--accent)",
        boxShadow: active ? "0 0 10px var(--primary)" : "none",
      }}
    >
      {active ? "!" : "·"}
    </div>
  );
}
