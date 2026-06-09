export const APK_LINK = "https://drive.google.com/file/d/1wQaKlCkHYLa2LmoumJMZ5jNnkUwsWQ2-/view?usp=drivesdk";

export default function DownloadSection() {
  return (
    <section
      id="download"
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--bg-surface)" }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(232, 86, 10, 0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
          style={{
            background: "rgba(232, 86, 10, 0.15)",
            border: "1px solid rgba(232, 86, 10, 0.3)",
            color: "var(--primary-light)",
          }}
        >
          🚀 Tersedia untuk Android
        </div>

        <h2 className="font-display font-black text-4xl sm:text-5xl mb-6">
          Siap{" "}
          <span className="gradient-text">Menjelajah</span>?
        </h2>

        <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
          Download Jejalah sekarang dan mulai petualanganmu di Pekalongan.
          Gratis, seru, dan penuh hadiah menunggu.
        </p>

        {/* Download button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={APK_LINK}
            className="btn-primary px-10 py-5 text-lg font-black flex items-center gap-3 rounded-2xl"
          >
            <AndroidIcon />
            Download APK
          </a>
        </div>

        {/* Note */}
        <p className="mt-6 text-xs" style={{ color: "var(--text-dim)" }}>
          File APK Android • Gratis • Tidak perlu kartu kredit
        </p>

        {/* Features row */}
        <div className="mt-12 grid grid-cols-3 gap-6">
          <MiniStat icon="⚡" label="XP System" />
          <MiniStat icon="📍" label="GPS Quest" />
          <MiniStat icon="🎁" label="Real Rewards" />
        </div>
      </div>
    </section>
  );
}

function MiniStat({ icon, label }: { icon: string; label: string }) {
  return (
    <div
      className="rounded-2xl p-4 flex flex-col items-center gap-2"
      style={{
        background: "rgba(255, 255, 255, 0.03)",
        border: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>
        {label}
      </span>
    </div>
  );
}

function AndroidIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zm-2.5-1C2.67 17 2 16.33 2 15.5v-6C2 8.67 2.67 8 3.5 8S5 8.67 5 9.5v6c0 .83-.67 1.5-1.5 1.5zm17 0c-.83 0-1.5-.67-1.5-1.5v-6c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5zM15.53 2.16l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0 0 12 1c-.55 0-1.08.08-1.59.23L8.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.956 5.956 0 0 0 6 7h12a5.96 5.96 0 0 0-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
    </svg>
  );
}
