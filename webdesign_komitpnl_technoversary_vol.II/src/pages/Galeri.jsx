import { useEffect, useRef, useState } from "react";
import { GALERI } from "../data/galeri.js";
import KepalaHalaman from "../components/KepalaHalaman.jsx";

const FILTER = ["Semua", "Tumbuhan", "Satwa"];

export default function Galeri() {
  const [filter, setFilter] = useState("Semua");
  const [pilih, setPilih] = useState(null);
  const dialog = useRef(null);
  const daftar = GALERI.filter((g) => filter === "Semua" || g.jenis === filter);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (pilih && !d.open) d.showModal();
    if (!pilih && d.open) d.close();
  }, [pilih]);

  return (
    <section aria-labelledby="judul-galeri">
      <KepalaHalaman id="judul-galeri" label="Galeri" judul={<>Kehidupan di antara <em>akar bakau</em></>}>
        Kenali jenis pohon bakau dan satwa yang hidup di sekitarnya. Pilih kartu untuk melihat penjelasannya.
      </KepalaHalaman>

      <div className="wadah mt-12">
        <div role="group" aria-label="Saring galeri" className="inline-flex rounded-full border border-garis bg-pasang p-1">
          {FILTER.map((f) => (
            <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${filter === f ? "bg-tinta text-white shadow-sm" : "text-abu hover:text-tinta"}`}>
              {f}
              <span className={`ml-1.5 tabular-nums ${filter === f ? "text-white/60" : "text-abu/70"}`}>
                {f === "Semua" ? GALERI.length : GALERI.filter((g) => g.jenis === f).length}
              </span>
            </button>
          ))}
        </div>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {daftar.map((g) => (
            <li key={g.id}>
              <button type="button" onClick={() => setPilih(g)}
                className="group kartu block w-full overflow-hidden text-left transition hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(14,26,11,0.35)]">
                <div className="aspect-[4/3] overflow-hidden bg-pasang">
                  <img src={g.gambar.src} srcSet={g.gambar.srcSet} sizes="(min-width: 1024px) 352px, (min-width: 640px) 50vw, 100vw"
                    alt={g.gambar.alt} width="640" height="452" loading="lazy" decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex items-center justify-between gap-4 p-5">
                  <div>
                    <p className="font-semibold text-tinta">{g.nama}</p>
                    <p className="text-sm italic text-abu">{g.latin}</p>
                  </div>
                  <span className="rounded-full bg-pasang px-3 py-1 text-xs font-semibold text-abu">{g.jenis}</span>
                </div>
              </button>
            </li>
          ))}
        </ul>

        <p className="sumber mt-8 text-xs">Pilih kartu untuk membaca ciri khas setiap jenis.</p>
      </div>

      <dialog ref={dialog} onClose={() => setPilih(null)} onClick={(e) => e.target === dialog.current && setPilih(null)}
        className="w-[min(38rem,calc(100%-2rem))] overflow-hidden rounded-[2rem] bg-white p-0 text-lumpur shadow-2xl backdrop:bg-tinta/50 backdrop:backdrop-blur-sm" aria-labelledby="judul-dialog">
        {pilih && (
          <div className="relative">
            <button type="button" onClick={() => setPilih(null)} className="tombol-bulat absolute right-4 top-4 h-10 w-10 bg-white/90" aria-label="Tutup">
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15" /></svg>
            </button>
            <img src={pilih.gambar.src} srcSet={pilih.gambar.srcSet} sizes="(min-width: 640px) 608px, 100vw"
              alt={pilih.gambar.alt} width="1200" height="847" className="aspect-[4/3] w-full bg-pasang object-cover" />
            <div className="p-6 sm:p-8">
              <p className="label-atas">{pilih.jenis}</p>
              <h2 id="judul-dialog" className="mt-2 text-4xl">{pilih.nama}</h2>
              <p className="text-sm italic text-abu">{pilih.latin}</p>
              <p className="mt-4">{pilih.teks}</p>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
