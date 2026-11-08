import { useEffect, useRef, useState } from "react";
import { ARTIKEL } from "../data/artikel.js";
import { GLOSARIUM } from "../data/edukasi.js";
import { ILUSTRASI } from "../data/aset.js";
import Gambar from "../components/Gambar.jsx";
import KepalaHalaman from "../components/KepalaHalaman.jsx";

const bayangan = "hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(14,26,11,0.35)]";

// Kartu artikel dipakai di beranda dan halaman daftar artikel
export function KartuArtikel({ a, Judul = "h3" }) {
  return (
    <a href={`#artikel-${a.slug}`} className={`group kartu flex h-full flex-col overflow-hidden text-lumpur no-underline transition ${bayangan}`}>
      <div className="flex h-48 items-center justify-center bg-pasang p-6">
        <Gambar aset={ILUSTRASI[a.gambar]} sizes="220px" className="h-full w-auto object-contain transition duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs text-abu">{a.tanggal} · {a.menit} menit baca</p>
        <Judul className="mt-2 font-isi text-lg font-semibold leading-snug tracking-tight text-tinta group-hover:text-payau">{a.judul}</Judul>
        <p className="mt-2 line-clamp-2 text-sm text-abu">{a.ringkas}</p>
        <span className="mt-auto pt-5 text-sm font-semibold text-tinta">Baca <span aria-hidden="true" className="inline-block transition group-hover:translate-x-1">→</span></span>
      </div>
    </a>
  );
}

function Isi({ blok }) {
  return blok.map(([jenis, nilai], i) => {
    if (jenis === "h") return <h2 key={i} className="mt-12 text-3xl sm:text-4xl">{nilai}</h2>;
    if (jenis === "ul") return <ul key={i} className="mt-5 list-disc space-y-2 pl-6 marker:text-daun">{nilai.map((t) => <li key={t}>{t}</li>)}</ul>;
    return <p key={i} className="mt-5 text-[1.0625rem] leading-[1.8]">{nilai}</p>;
  });
}

// Garis tipis di bawah navbar yang memanjang sesuai seberapa jauh artikel sudah dibaca
function ProgresBaca({ target }) {
  const [persen, setPersen] = useState(0);
  useEffect(() => {
    let antre = 0;
    const hitung = () => {
      antre = 0;
      const el = target.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      setPersen(total <= 0 ? 100 : Math.min(100, Math.max(0, (-r.top / total) * 100)));
    };
    const jadwal = () => { if (!antre) antre = requestAnimationFrame(hitung); };
    hitung();
    window.addEventListener("scroll", jadwal, { passive: true });
    window.addEventListener("resize", jadwal);
    return () => { cancelAnimationFrame(antre); window.removeEventListener("scroll", jadwal); window.removeEventListener("resize", jadwal); };
  }, [target]);
  return (
    <div className="fixed inset-x-0 z-40 h-[3px] bg-transparent" style={{ top: "calc(4rem + env(safe-area-inset-top, 0px))" }} aria-hidden="true">
      <div className="h-full origin-left bg-daun" style={{ transform: `scaleX(${persen / 100})` }} />
    </div>
  );
}

function Baca({ a }) {
  const i = ARTIKEL.indexOf(a);
  const lanjut = ARTIKEL[(i + 1) % ARTIKEL.length];
  const artikelRef = useRef(null);
  return (
    <article ref={artikelRef} className="wadah pt-10 sm:pt-14">
      <ProgresBaca target={artikelRef} />
      <a href="#artikel" className="inline-flex items-center gap-2 text-sm font-semibold text-abu no-underline hover:text-tinta">
        <span aria-hidden="true">←</span> Semua artikel
      </a>
      <header className="mx-auto mt-10 max-w-3xl text-center">
        <p className="text-sm text-abu">{a.tanggal} · {a.menit} menit baca · Tim komitpnl</p>
        <h1 className="mt-4 text-5xl sm:text-6xl">{a.judul}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-abu">{a.ringkas}</p>
      </header>
      <div className="mx-auto mt-12 flex max-w-4xl justify-center rounded-[2rem] bg-pasang px-6 py-10">
        <Gambar aset={ILUSTRASI[a.gambar]} loading="eager" className="h-56 w-auto object-contain sm:h-64" />
      </div>
      <div className="mx-auto max-w-baca">
        <div className="mt-6"><Isi blok={a.isi} /></div>
        <aside className="mt-12 border-t border-garis pt-6">
          <h2 className="font-isi text-sm font-semibold tracking-normal text-tinta">Sumber</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {a.sumber.map((s) => <li key={s.url}><a href={s.url} target="_blank" rel="noreferrer">{s.teks}</a></li>)}
          </ul>
        </aside>
        <a href={`#artikel-${lanjut.slug}`} className="group mt-12 flex items-center justify-between gap-6 rounded-3xl border border-garis p-6 no-underline transition hover:border-tinta">
          <span>
            <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-payau">Baca selanjutnya</span>
            <span className="mt-2 block font-judul text-2xl text-tinta sm:text-3xl">{lanjut.judul}</span>
          </span>
          <span aria-hidden="true" className="tombol-bulat shrink-0 group-hover:border-tinta">→</span>
        </a>
      </div>
    </article>
  );
}

export default function Artikel({ slug }) {
  const pilih = ARTIKEL.find((a) => a.slug === slug);
  if (pilih) return <Baca a={pilih} />;
  // terbaru lebih dulu; artikel paling baru menjadi kartu utama
  const [utama, ...lain] = [...ARTIKEL].reverse();
  return (
    <section aria-labelledby="judul-artikel">
      <KepalaHalaman id="judul-artikel" label="Artikel" judul={<>Bacaan singkat tentang <em>mangrove</em></>}>
        Dari fungsi akarnya hingga kondisi pesisir Aceh hari ini.
      </KepalaHalaman>

      <div className="wadah mt-14">
        <a href={`#artikel-${utama.slug}`} className={`group grid overflow-hidden rounded-[2rem] border border-garis text-lumpur no-underline transition md:grid-cols-[1fr_1.1fr] ${bayangan}`}>
          <div className="flex items-center justify-center bg-pasang p-10">
            <Gambar aset={ILUSTRASI[utama.gambar]} loading="eager" className="h-56 w-auto object-contain transition duration-500 group-hover:scale-105" />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <p className="label-atas">Pilihan redaksi</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">{utama.judul}</h2>
            <p className="mt-4 text-abu">{utama.ringkas}</p>
            <p className="mt-6 text-sm text-abu">{utama.tanggal} · {utama.menit} menit baca</p>
          </div>
        </a>

        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {lain.map((a, i) => (
            <div key={a.slug} className="muncul" style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
              <KartuArtikel a={a} Judul="h2" />
            </div>
          ))}
        </div>
      </div>

      <section aria-labelledby="judul-glosarium" className="wadah pt-24 sm:pt-32">
        <div className="muncul grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="label-atas">Glosarium</p>
            <h2 id="judul-glosarium" className="judul-section mt-3">Istilah yang sering <em>muncul</em></h2>
            <p className="teks-pengantar mt-4">Penjelasan singkat istilah dalam artikel, dari akar bakau sampai karbon biru.</p>
          </div>
          <dl className="divide-y divide-garis border-y border-garis">
            {GLOSARIUM.map(([istilah, arti]) => (
              <div key={istilah} className="grid gap-1 py-5 sm:grid-cols-[11rem_1fr] sm:gap-6">
                <dt className="font-semibold text-tinta">{istilah}</dt>
                <dd className="text-abu">{arti}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </section>
  );
}
