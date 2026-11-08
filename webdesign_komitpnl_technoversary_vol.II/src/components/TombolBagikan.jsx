import { useState } from "react";

// Tombol bagikan: pakai menu bagikan bawaan HP bila ada, jika tidak salin tautan ke clipboard.
// `hash` (mis. "#artikel-karbon-biru") membuat tautan menuju halaman tertentu; tanpa hash = beranda.
// `gelap` untuk dipakai di atas latar gelap (tombol putih, status putih).
export default function TombolBagikan({ label = "Bagikan situs ini", judul = "BakauKita", teks = "Kenali dan jaga mangrove pesisir Aceh bersama BakauKita.", hash = "", gelap = false }) {
  const [status, setStatus] = useState("");

  async function bagikan() {
    const url = window.location.href.split("#")[0] + hash;
    if (navigator.share) {
      try { await navigator.share({ title: judul, text: teks, url }); return; }
      catch (e) { if (e?.name === "AbortError") return; } // dibatalkan pengguna; selain itu, coba salin
    }
    try {
      await navigator.clipboard.writeText(url);
      setStatus("Tautan disalin");
    } catch {
      setStatus("Salin tautan dari bilah alamat");
    }
    setTimeout(() => setStatus(""), 2500);
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button type="button" onClick={bagikan} className={gelap ? "tombol bg-white text-tinta hover:bg-pasang" : "tombol-garis"}>
        <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 3v10M6 7l4-4 4 4M4 12v4h12v-4" /></svg>
        {label}
      </button>
      <span className={`text-sm ${gelap ? "text-white/80" : "text-abu"}`} role="status" aria-live="polite">{status}</span>
    </div>
  );
}
