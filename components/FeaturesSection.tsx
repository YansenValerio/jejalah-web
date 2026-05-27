const features = [
  {
    icon: "🗺️",
    title: "Quest GPS",
    description:
      "Temukan quest di peta interaktif dan validasi kehadiran fisik kamu di lokasi nyata menggunakan GPS presisi.",
    accent: "var(--accent)",
    bg: "rgba(104, 219, 174, 0.08)",
    border: "rgba(104, 219, 174, 0.2)",
  },
  {
    icon: "⚡",
    title: "Sistem XP & Level",
    description:
      "Kumpulkan XP setiap quest selesai, naik level, raih badge eksklusif, dan pertahankan streak harianmu.",
    accent: "var(--secondary)",
    bg: "rgba(255, 216, 135, 0.08)",
    border: "rgba(255, 216, 135, 0.2)",
  },
  {
    icon: "🏆",
    title: "Leaderboard",
    description:
      "Bersaing dengan explorer lain se-kota dan se-nasional. Duduki podium top-3 dan buktikan kamu explorer terbaik.",
    accent: "var(--primary-light)",
    bg: "rgba(255, 111, 49, 0.08)",
    border: "rgba(255, 111, 49, 0.2)",
  },
  {
    icon: "🎁",
    title: "Reward UMKM",
    description:
      "Tukar XP kamu dengan diskon nyata dari merchant Pekalongan — batik, kuliner, workshop, dan masih banyak lagi.",
    accent: "#a78bfa",
    bg: "rgba(167, 139, 250, 0.08)",
    border: "rgba(167, 139, 250, 0.2)",
  },
];

export default function FeaturesSection() {
  return (
    <section id="fitur" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{
              background: "rgba(104, 219, 174, 0.12)",
              border: "1px solid rgba(104, 219, 174, 0.25)",
              color: "var(--accent)",
            }}
          >
            Kenapa Jejalah?
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl mb-4">
            Eksplorasi yang{" "}
            <span className="gradient-text">Menyenangkan</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Lebih dari sekadar jalan-jalan biasa — setiap langkah kamu punya nilai.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="card-glow rounded-2xl p-6 flex flex-col gap-4"
              style={{ borderLeftColor: f.border }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                style={{ background: f.bg, border: `1px solid ${f.border}` }}
              >
                {f.icon}
              </div>
              <div>
                <h3
                  className="font-display font-bold text-lg mb-2"
                  style={{ color: f.accent }}
                >
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
