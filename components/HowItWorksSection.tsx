const steps = [
  {
    number: "01",
    icon: "🗺️",
    title: "Pilih Quest",
    description:
      "Buka peta interaktif, lihat quest yang tersedia di sekitar kamu. Pilih destinasi — dari museum bersejarah hingga air terjun tersembunyi.",
  },
  {
    number: "02",
    icon: "📍",
    title: "Kunjungi & Foto",
    description:
      "Datangi lokasi quest secara langsung. GPS akan memvalidasi kehadiranmu, lalu ambil foto sebagai bukti eksplorasi.",
  },
  {
    number: "03",
    icon: "🏅",
    title: "Kumpulkan XP",
    description:
      "Quest selesai! XP langsung masuk ke akunmu. Level up, raih badge, dan tukar XP dengan reward dari UMKM lokal Pekalongan.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="cara-pakai"
      className="py-24"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{
              background: "rgba(255, 111, 49, 0.12)",
              border: "1px solid rgba(255, 111, 49, 0.25)",
              color: "var(--primary-light)",
            }}
          >
            Cara Bermain
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl mb-4">
            Mudah &{" "}
            <span style={{ color: "var(--secondary)" }}>Seru</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            3 langkah sederhana untuk memulai petualanganmu di Pekalongan.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px"
            style={{ background: "linear-gradient(to right, transparent, var(--primary), transparent)" }}
          />

          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col items-center text-center relative">
              {/* Number circle */}
              <div
                className="relative w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-6 z-10"
                style={{
                  background: `linear-gradient(135deg, rgba(232, 86, 10, ${0.15 + index * 0.05}), rgba(255, 111, 49, ${0.1 + index * 0.05}))`,
                  border: "2px solid rgba(255, 111, 49, 0.3)",
                  boxShadow: "0 8px 32px rgba(232, 86, 10, 0.15)",
                }}
              >
                {step.icon}
                <div
                  className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black"
                  style={{ background: "var(--primary)", color: "white" }}
                >
                  {index + 1}
                </div>
              </div>

              <h3 className="font-display font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
