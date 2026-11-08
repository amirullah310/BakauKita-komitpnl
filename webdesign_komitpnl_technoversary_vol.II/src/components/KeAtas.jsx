import { useEffect, useState } from "react";

// Tombol kembali ke atas; muncul setelah pengunjung menggulir cukup jauh
export default function KeAtas() {
  const [tampil, setTampil] = useState(false);

  useEffect(() => {
    const cek = () => setTampil(window.scrollY > 900);
    cek();
    window.addEventListener("scroll", cek, { passive: true });
    return () => window.removeEventListener("scroll", cek);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0 })}
      aria-label="Kembali ke atas"
      tabIndex={tampil ? 0 : -1}
      aria-hidden={!tampil}
      className={`fixed right-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-tinta text-white shadow-[0_10px_30px_-10px_rgba(14,26,11,0.6)] transition duration-300 hover:bg-payau-gelap sm:right-6 ${
        tampil ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
      style={{ bottom: "calc(1.25rem + env(safe-area-inset-bottom, 0px))" }}
    >
      <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10 16V4M5 9l5-5 5 5" />
      </svg>
    </button>
  );
}
