import { useEffect, useRef, useState } from "react";
import { KUIS } from "../data/edukasi.js";

const HURUF = ["A", "B", "C"];

function pesanAkhir(skor) {
  if (skor === KUIS.length) return "Sempurna! Kamu siap jadi duta bakau.";
  if (skor >= 3) return "Bagus! Tinggal sedikit lagi.";
  return "Tidak apa-apa. Baca artikelnya, lalu coba lagi.";
}

export default function Kuis() {
  const [no, setNo] = useState(0);
  const [jawab, setJawab] = useState(null); // indeks pilihan pada soal saat ini
  const [skor, setSkor] = useState(0);
  const [selesai, setSelesai] = useState(false);
  const kepalaRef = useRef(null);
  const lanjutRef = useRef(null);

  const soal = KUIS[no];
  const sudah = jawab !== null;

  // pilihan dinonaktifkan setelah menjawab, jadi fokus keyboard dipindah ke tombol lanjut
  useEffect(() => { if (sudah) lanjutRef.current?.focus({ preventScroll: true }); }, [sudah]);

  function pilih(i) {
    if (sudah) return;
    setJawab(i);
    if (i === soal.benar) setSkor((s) => s + 1);
  }
  function lanjut() {
    if (no === KUIS.length - 1) setSelesai(true);
    else { setNo(no + 1); setJawab(null); }
    // pindahkan fokus ke judul soal agar pembaca layar & keyboard ikut berpindah
    requestAnimationFrame(() => kepalaRef.current?.focus());
  }
  function ulang() { setNo(0); setJawab(null); setSkor(0); setSelesai(false); requestAnimationFrame(() => kepalaRef.current?.focus()); }

  return (
    <section id="beranda-kuis" aria-labelledby="judul-kuis" className="wadah scroll-mt-24 pt-28 sm:pt-36">
      <div className="muncul grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="label-atas">Kuis singkat</p>
          <h2 id="judul-kuis" className="judul-section mt-3">Seberapa kenal kamu dengan <em>bakau</em>?</h2>
          <p className="teks-pengantar mt-4">Lima pertanyaan, sekitar satu menit. Semua jawabannya ada di situs ini.</p>
        </div>

        <div className="kartu p-6 sm:p-8">
          {selesai ? (
            <div className="text-center" role="status">
              <p ref={kepalaRef} tabIndex={-1} className="font-judul text-7xl leading-none text-tinta outline-none">
                {skor}<span className="text-4xl text-abu">/{KUIS.length}</span>
              </p>
              <p className="mt-4 text-lg font-semibold text-tinta">{pesanAkhir(skor)}</p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <button type="button" onClick={ulang} className="tombol-utama">Ulangi kuis</button>
                <a href="#artikel" className="tombol-garis">Baca artikel</a>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between gap-4 text-sm text-abu">
                <span>Soal {no + 1} dari {KUIS.length}</span>
                <span className="tabular-nums">Skor {skor}</span>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-pasang" aria-hidden="true">
                <div className="h-full rounded-full bg-daun transition-all duration-500" style={{ width: `${((no + (sudah ? 1 : 0)) / KUIS.length) * 100}%` }} />
              </div>

              <fieldset className="mt-6">
                <legend ref={kepalaRef} tabIndex={-1} className="text-lg font-semibold leading-snug text-tinta outline-none">{soal.tanya}</legend>
                <div className="mt-5 grid gap-2.5">
                  {soal.pilihan.map((p, i) => {
                    const benar = sudah && i === soal.benar;
                    const salah = sudah && i === jawab && i !== soal.benar;
                    return (
                      <button
                        key={p}
                        type="button"
                        onClick={() => pilih(i)}
                        disabled={sudah}
                        aria-pressed={jawab === i}
                        className={`flex items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition ${
                          benar ? "border-payau bg-kabut/60 text-tinta"
                            : salah ? "border-akar bg-[#FCF6F3] text-tinta"
                              : sudah ? "border-garis text-abu"
                                : "border-garis hover:border-tinta"
                        }`}
                      >
                        <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${benar ? "bg-payau text-white" : salah ? "bg-akar text-white" : "bg-pasang text-tinta"}`} aria-hidden="true">
                          {benar ? "✓" : salah ? "✕" : HURUF[i]}
                        </span>
                        <span>{p}</span>
                        {benar && <span className="sr-only">(jawaban benar)</span>}
                        {salah && <span className="sr-only">(jawabanmu, kurang tepat)</span>}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <div aria-live="polite">
                {sudah && (
                  <div className="mt-5 rounded-2xl bg-pasang p-4">
                    <p className="font-semibold text-tinta">{jawab === soal.benar ? "Tepat!" : "Kurang tepat."}</p>
                    <p className="mt-1 text-sm text-abu">{soal.jelas}</p>
                  </div>
                )}
              </div>
              {sudah && (
                <button ref={lanjutRef} type="button" onClick={lanjut} className="tombol-utama mt-5 w-full sm:w-auto">
                  {no === KUIS.length - 1 ? "Lihat hasil" : "Soal berikutnya"}
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
