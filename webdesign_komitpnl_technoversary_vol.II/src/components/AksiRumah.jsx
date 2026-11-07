import { useState } from "react";
import { AKSI } from "../data/edukasi.js";

// Tombol bagikan: pakai menu bagikan bawaan HP bila ada, jika tidak salin tautan ke clipboard
function TombolBagikan() {
  const [status, setStatus] = useState("");
  async function bagikan() {
    const url = window.location.href.split("#")[0];
    const data = { title: "BakauKita", text: "Kenali dan jaga mangrove pesisir Aceh bersama BakauKita.", url };
    if (navigator.share) {
      try { await navigator.share(data); return; }
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
      <button type="button" onClick={bagikan} className="tombol bg-white text-tinta hover:bg-pasang">
        <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 3v10M6 7l4-4 4 4M4 12v4h12v-4" /></svg>
        Bagikan situs ini
      </button>
      <span className="text-sm text-white/80" role="status" aria-live="polite">{status}</span>
    </div>
  );
}

export default function AksiRumah() {
  return (
    <section id="beranda-aksi" aria-labelledby="judul-aksi" className="wadah scroll-mt-24 pt-28 sm:pt-36">
      <div className="muncul max-w-2xl">
        <p className="label-atas">Aksi dari rumah</p>
        <h2 id="judul-aksi" className="judul-section mt-3">Tidak bisa turun ke lumpur? <em>Tetap bisa membantu.</em></h2>
        <p className="teks-pengantar mt-4">Menjaga bakau tidak selalu harus menanam. Lima kebiasaan ini bisa dimulai hari ini.</p>
      </div>
      <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {AKSI.map((a, i) => (
          <li key={a.judul} className="muncul" style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
            <div className="kartu flex h-full flex-col p-7">
              <span className="font-judul text-4xl leading-none text-daun" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 text-lg">{a.judul}</h3>
              <p className="mt-2 text-abu">{a.teks}</p>
              {a.sumber && <p className="sumber mt-auto pt-4 text-xs">Sumber: <a href={a.sumber[1]} target="_blank" rel="noreferrer">{a.sumber[0]}</a></p>}
            </div>
          </li>
        ))}
        <li className="muncul" style={{ transitionDelay: "180ms" }}>
          <div className="flex h-full flex-col justify-between gap-6 rounded-3xl bg-tinta p-7 text-white">
            <div>
              <span className="font-judul text-4xl leading-none text-daun" aria-hidden="true">06</span>
              <h3 className="mt-5 text-lg text-white">Bagikan informasi yang benar</h3>
              <p className="mt-2 text-white/75">Kirim situs ini ke grup keluarga atau kelas. Sertakan sumbernya agar tidak menjadi hoaks.</p>
            </div>
            <TombolBagikan />
          </div>
        </li>
      </ol>
    </section>
  );
}
