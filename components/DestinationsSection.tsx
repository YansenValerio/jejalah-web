const destinations = [
  { name: "Museum Batik", category: "Budaya", emoji: "🏛️", xp: 150, desc: "Museum batik terlengkap di Indonesia" },
  { name: "Kampung Kauman", category: "Budaya", emoji: "🎨", xp: 120, desc: "Kampung penghasil batik tulis legendaris" },
  { name: "Curug Bajing", category: "Alam", emoji: "💦", xp: 200, desc: "Air terjun 75 meter yang memukau" },
  { name: "Petungkriyono", category: "Alam", emoji: "🌿", xp: 250, desc: "Hutan hujan tropis terakhir di Jawa" },
  { name: "Pantai Slamaran", category: "Alam", emoji: "🌅", xp: 100, desc: "Pantai dengan sunset yang indah" },
  { name: "Pasar Setono", category: "Kuliner", emoji: "🛒", xp: 80, desc: "Pasar batik grosir terbesar Pekalongan" },
  { name: "Pasir Kencana", category: "Alam", emoji: "⛵", xp: 120, desc: "Pantai dengan dermaga panjang" },
  { name: "Masjid Agung", category: "Budaya", emoji: "🕌", xp: 100, desc: "Masjid bersejarah Al-Jami" },
  { name: "Kampung Pesindon", category: "Budaya", emoji: "🖼️", xp: 130, desc: "Kampung batik dengan mural cantik" },
];

const categoryColors: Record<string, { text: string; bg: string; border: string }> = {
  Budaya: { text: "var(--secondary)", bg: "rgba(255, 216, 135, 0.1)", border: "rgba(255, 216, 135, 0.25)" },
  Alam: { text: "var(--accent)", bg: "rgba(104, 219, 174, 0.1)", border: "rgba(104, 219, 174, 0.25)" },
  Kuliner: { text: "var(--primary-light)", bg: "rgba(255, 111, 49, 0.1)", border: "rgba(255, 111, 49, 0.25)" },
};

export default function DestinationsSection() {
  return (
    <section id="destinasi" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{
              background: "rgba(255, 216, 135, 0.1)",
              border: "1px solid rgba(255, 216, 135, 0.25)",
              color: "var(--secondary)",
            }}
          >
            Quest Tersedia
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl mb-4">
            Destinasi{" "}
            <span style={{ color: "var(--accent)" }}>Menakjubkan</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            9 destinasi pilihan di Pekalongan menunggumu. Lebih banyak quest akan segera hadir.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {destinations.map((d) => {
            const cat = categoryColors[d.category] ?? categoryColors.Budaya;
            return (
              <div
                key={d.name}
                className="card-glow rounded-2xl p-5 flex gap-4 items-start"
              >
                {/* Emoji icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: cat.bg, border: `1px solid ${cat.border}` }}
                >
                  {d.emoji}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-display font-bold text-base leading-tight">{d.name}</h3>
                    <span
                      className="text-xs font-black shrink-0"
                      style={{ color: "var(--secondary)" }}
                    >
                      +{d.xp} XP
                    </span>
                  </div>
                  <p className="text-xs mb-2 line-clamp-1" style={{ color: "var(--text-muted)" }}>
                    {d.desc}
                  </p>
                  <span
                    className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ color: cat.text, background: cat.bg, border: `1px solid ${cat.border}` }}
                  >
                    {d.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Coming soon note */}
        <div
          className="mt-8 text-center text-sm"
          style={{ color: "var(--text-dim)" }}
        >
          Dan masih banyak quest yang akan segera hadir...
        </div>
      </div>
    </section>
  );
}
