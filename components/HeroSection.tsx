"use client";

import { useState } from "react";
import Image from "next/image";

const APK_LINK = "https://drive.google.com/file/d/1wQaKlCkHYLa2LmoumJMZ5jNnkUwsWQ2-/view?usp=drivesdk";

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

// ─── Screen components ────────────────────────────────────────────────────────

function MapScreen() {
  return (
    <div
      className="h-full flex flex-col overflow-hidden rounded-2xl mx-3"
      style={{
        background: "linear-gradient(135deg, #1a2a1a 0%, #0d1a0d 50%, #1a150a 100%)",
        border: "1px solid rgba(104, 219, 174, 0.15)",
      }}
    >
      <div className="relative flex-1 p-3">
        {/* Fake map grid */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#68dbae" strokeWidth="0.5" />
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
  );
}

function MisiScreen() {
  const misi = [
    { nama: "Museum Batik", kategori: "Budaya", xp: 150, jarak: "1.2 km", status: "aktif" },
    { nama: "Pantai Slamaran", kategori: "Alam", xp: 200, jarak: "3.5 km", status: "tersedia" },
    { nama: "Pasar Banjarsari", kategori: "Kuliner", xp: 100, jarak: "0.8 km", status: "tersedia" },
    { nama: "Klenteng Pho An Thian", kategori: "Religi", xp: 175, jarak: "2.1 km", status: "tersedia" },
  ];

  return (
    <div className="h-full flex flex-col px-4 py-3 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-xs font-bold text-white">Misi Tersedia</div>
          <div className="text-xs" style={{ color: "var(--text-muted)" }}>4 misi menunggumu</div>
        </div>
        <div
          className="px-2 py-1 rounded-lg text-xs font-bold"
          style={{ background: "rgba(104, 219, 174, 0.12)", color: "var(--accent)" }}
        >
          🔥 Streak 5
        </div>
      </div>

      {/* Mission list */}
      <div className="flex flex-col gap-2 flex-1 overflow-hidden">
        {misi.map((m) => (
          <div
            key={m.nama}
            className="flex items-center gap-2.5 p-2.5 rounded-xl flex-shrink-0"
            style={{
              background: m.status === "aktif" ? "rgba(232, 86, 10, 0.12)" : "var(--bg-surface)",
              border: m.status === "aktif" ? "1px solid rgba(232, 86, 10, 0.3)" : "1px solid rgba(255,255,255,0.04)",
            }}
          >
            {/* Status dot */}
            <div
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: m.status === "aktif" ? "var(--primary)" : "rgba(255,255,255,0.2)", boxShadow: m.status === "aktif" ? "0 0 6px var(--primary)" : "none" }}
            />
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-white truncate">{m.nama}</div>
              <div className="text-[9px]" style={{ color: "var(--text-muted)" }}>{m.kategori} • {m.jarak}</div>
            </div>
            <div className="flex flex-col items-end flex-shrink-0">
              <div className="text-xs font-bold" style={{ color: "var(--secondary)" }}>+{m.xp}</div>
              <div className="text-[9px]" style={{ color: "var(--text-dim)" }}>XP</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LeaderboardScreen() {
  const entries = [
    { rank: 1, name: "Dika S.", xp: "4,820", crown: true },
    { rank: 2, name: "Rena M.", xp: "3,950", crown: false },
    { rank: 3, name: "Fajar K.", xp: "3,201", crown: false },
  ];

  return (
    <div className="h-full flex flex-col px-4 py-3 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-base">🏆</span>
        <div>
          <div className="text-xs font-bold text-white">Leaderboard</div>
          <div className="text-xs" style={{ color: "var(--text-muted)" }}>Kota Pekalongan</div>
        </div>
      </div>

      {/* Top 3 */}
      <div className="flex flex-col gap-2 flex-1">
        {entries.map((e) => (
          <div
            key={e.rank}
            className="flex items-center gap-2 p-2.5 rounded-xl"
            style={{
              background: e.rank === 1 ? "rgba(255, 216, 135, 0.1)" : "var(--bg-surface)",
              border: e.rank === 1 ? "1px solid rgba(255, 216, 135, 0.25)" : "1px solid transparent",
            }}
          >
            <div
              className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black flex-shrink-0"
              style={{
                background: e.rank === 1 ? "rgba(255, 216, 135, 0.2)" : "rgba(255,255,255,0.05)",
                color: e.rank === 1 ? "var(--secondary)" : "var(--text-dim)",
              }}
            >
              {e.crown ? "👑" : e.rank}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-white truncate">{e.name}</div>
            </div>
            <div className="text-xs font-bold flex-shrink-0" style={{ color: "var(--secondary)" }}>
              {e.xp} XP
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="flex items-center gap-2 my-2">
        <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
        <span className="text-xs" style={{ color: "var(--text-dim)" }}>•••</span>
        <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
      </div>

      {/* My rank */}
      <div
        className="flex items-center gap-2 p-2.5 rounded-xl"
        style={{ background: "rgba(232, 86, 10, 0.12)", border: "1px solid rgba(232, 86, 10, 0.3)" }}
      >
        <div
          className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black flex-shrink-0"
          style={{ background: "rgba(232, 86, 10, 0.2)", color: "var(--primary-light)" }}
        >
          47
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs font-semibold" style={{ color: "var(--primary-light)" }}>📍 Kamu</div>
        </div>
        <div className="text-xs font-bold flex-shrink-0" style={{ color: "var(--secondary)" }}>
          1,240 XP
        </div>
      </div>
    </div>
  );
}

function RewardsScreen() {
  const rewards = [
    { name: "Batik Mahkota", desc: "Diskon 20%", xp: 1000, icon: "👘" },
    { name: "Warung Mega", desc: "Gratis Es Teh", xp: 800, icon: "🍜" },
    { name: "Workshop Batik", desc: "Gratis 1 Sesi", xp: 1500, icon: "🎨" },
  ];

  return (
    <div className="h-full flex flex-col px-4 py-3 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-xs font-bold text-white">Reward UMKM</div>
          <div className="text-xs" style={{ color: "var(--text-muted)" }}>Tukar XP kamu</div>
        </div>
        <div
          className="px-2 py-1 rounded-lg text-xs font-bold"
          style={{ background: "rgba(255, 216, 135, 0.15)", color: "var(--secondary)" }}
        >
          1,240 XP
        </div>
      </div>

      {/* Reward list */}
      <div className="flex flex-col gap-2 flex-1">
        {rewards.map((r) => (
          <div
            key={r.name}
            className="flex items-center gap-2.5 p-2.5 rounded-xl"
            style={{ background: "var(--bg-surface)", border: "1px solid rgba(255,255,255,0.04)" }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0"
              style={{ background: "rgba(104, 219, 174, 0.1)" }}
            >
              {r.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-white truncate">{r.name}</div>
              <div className="text-xs" style={{ color: "var(--accent)" }}>{r.desc}</div>
            </div>
            <div className="flex flex-col items-end flex-shrink-0">
              <div className="text-xs font-bold" style={{ color: "var(--secondary)" }}>{r.xp.toLocaleString()}</div>
              <div className="text-[9px]" style={{ color: "var(--text-dim)" }}>XP</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfileScreen() {
  return (
    <div className="h-full flex flex-col px-4 py-3 overflow-hidden">
      {/* Avatar + name */}
      <div className="flex flex-col items-center gap-2 mb-3">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-black"
          style={{ background: "linear-gradient(135deg, var(--primary), var(--secondary))", color: "white" }}
        >
          YV
        </div>
        <div className="text-center">
          <div className="text-xs font-bold text-white">Yansen V.</div>
          <div
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs mt-0.5"
            style={{ background: "rgba(255, 216, 135, 0.12)", color: "var(--secondary)" }}
          >
            ⚡ Level 7 Explorer
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { value: "12", label: "Quest" },
          { value: "1,240", label: "XP" },
          { value: "5", label: "Badge" },
        ].map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center py-2 rounded-xl"
            style={{ background: "var(--bg-surface)" }}
          >
            <div className="text-sm font-black text-white">{s.value}</div>
            <div className="text-[9px]" style={{ color: "var(--text-dim)" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Badge row */}
      <div className="mb-3">
        <div className="text-xs font-semibold mb-1.5" style={{ color: "var(--text-dim)" }}>Koleksi Badge</div>
        <div className="flex gap-1.5">
          {["🏙️", "🍜", "📸", "🎨", "🌿"].map((b, i) => (
            <div
              key={i}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-base"
              style={{ background: "var(--bg-surface)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {b}
            </div>
          ))}
        </div>
      </div>

      {/* Action row */}
      <div className="flex gap-2 mt-auto">
        <button
          className="flex-1 py-2 rounded-xl text-xs font-semibold"
          style={{ background: "rgba(232, 86, 10, 0.15)", color: "var(--primary-light)", border: "1px solid rgba(232, 86, 10, 0.25)" }}
        >
          Edit Profil
        </button>
        <button
          className="flex-1 py-2 rounded-xl text-xs font-semibold"
          style={{ background: "var(--bg-surface)", color: "var(--text-muted)" }}
        >
          Bagikan
        </button>
      </div>
    </div>
  );
}

// ─── Phone mockup shell ───────────────────────────────────────────────────────

function PhoneMockup() {
  const [activeTab, setActiveTab] = useState(0);

  const navItems = [
    { icon: "🗺️", label: "Quest" },
    { icon: "📋", label: "Misi" },
    { icon: "🏆", label: "Board" },
    { icon: "🎁", label: "Reward" },
    { icon: "👤", label: "Profil" },
  ];

  const screens = [
    <MapScreen key="map" />,
    <MisiScreen key="misi" />,
    <LeaderboardScreen key="lb" />,
    <RewardsScreen key="rw" />,
    <ProfileScreen key="pf" />,
  ];

  const screenTitles = ["Peta Quest", "Misi", "Leaderboard", "Reward", "Profil"];

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
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-1 rounded-full" style={{ height: `${i * 4}px`, background: "var(--text-dim)", alignSelf: "flex-end" }} />
              ))}
            </div>
          </div>

          {/* App header */}
          <div className="px-4 pt-2 pb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src="/icon.png" alt="Jejalah" width={24} height={24} className="rounded-lg" />
              <span className="font-display font-black text-sm" style={{ color: "var(--primary-light)" }}>JEJALAH</span>
            </div>
            <span className="text-xs font-medium" style={{ color: "var(--text-dim)" }}>{screenTitles[activeTab]}</span>
          </div>

          {/* Screen content */}
          <div className="flex-1 overflow-hidden">
            {screens[activeTab]}
          </div>

          {/* Bottom nav */}
          <div
            className="flex justify-around items-end px-3 py-2 mx-3 mb-3 mt-1 rounded-2xl"
            style={{ background: "var(--bg-surface)", border: "1px solid rgba(255, 111, 49, 0.1)" }}
          >
            {navItems.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className="flex flex-col items-center gap-0.5 px-1.5 py-1 rounded-xl transition-all duration-200 cursor-pointer"
                style={
                  i === activeTab
                    ? { background: "rgba(232, 86, 10, 0.2)" }
                    : { background: "transparent" }
                }
              >
                <span className="text-sm leading-none">{item.icon}</span>
                <span
                  className="text-[8px] font-semibold leading-none"
                  style={{ color: i === activeTab ? "var(--primary-light)" : "var(--text-dim)" }}
                >
                  {item.label}
                </span>
              </button>
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
