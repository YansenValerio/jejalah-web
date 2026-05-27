import type { Metadata } from "next";
import { Epilogue, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jejalah — Jelajahi Pekalongan, Kumpulkan XP, Raih Hadiah",
  description:
    "Jejalah adalah aplikasi eksplorasi wisata Pekalongan berbasis game. Selesaikan quest di lokasi nyata, kumpulkan XP, dan tukar dengan reward dari UMKM lokal.",
  keywords: ["jejalah", "pekalongan", "wisata", "eksplorasi", "gamifikasi", "quest"],
  openGraph: {
    title: "Jejalah — Eksplorasi Pekalongan Lebih Seru",
    description:
      "Quest-based tourism app untuk kota Pekalongan. GPS validation, community leaderboard, dan reward nyata dari UMKM lokal.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${epilogue.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
