import TideHero from "../components/TideHero.jsx";
import Simulasi from "../components/Simulasi.jsx";
import AksiRumah from "../components/AksiRumah.jsx";
import Kuis from "../components/Kuis.jsx";
import { ARTIKEL } from "../data/artikel.js";
import { SUMBER, LUAS_LHOKSEUMAWE, LUAS_ACEH } from "../data/sumber.js";
import { ILUSTRASI, IKON, LATAR, DEKOR } from "../data/aset.js";
import Gambar from "../components/Gambar.jsx";
import { KartuArtikel } from "./Artikel.jsx";

const fmt = (n, d = 0) => n.toLocaleString("id-ID", { minimumFractionDigits: d, maximumFractionDigits: d });

// Deret ilustrasi di bawah hero: perjalanan satu bibit hingga menjadi hutan yang terlindungi
const PERJALANAN = [
  { aset: ILUSTRASI.bibit, teks: "Bibit", kelas: "w-[62%]" },
  { aset: ILUSTRASI.kelompok, teks: "Ditanam bersama", kelas: "w-full" },
  { aset: ILUSTRASI.pulau, teks: "Tumbuh jadi hutan", kelas: "w-full" },
  { aset: ILUSTRASI.drone, teks: "Dipantau", kelas: "w-[94%]", sembunyiHp: true },
  { aset: ILUSTRASI.lindungi, teks: "Melindungi pesisir", kelas: "w-[78%]", sembunyiHp: true },
];

const PERAN = [
  { ikon: IKON.air, judul: "Menahan pantai dari abrasi", teks: "Akar tunjang dan akar napas membentuk jaringan rapat yang memperlambat arus dan menahan lumpur agar tidak terbawa laut." },
  { ikon: IKON.hutan, judul: "Menyimpan karbon dalam jumlah besar", teks: "Rata-rata 1.023 ton karbon per hektare, dan sebagian besar tersimpan di dalam tanah berlumpur.", sumber: ["Donato dkk., 2011", SUMBER.donato.url] },
  { ikon: IKON.komunitas, judul: "Menopang kehidupan pesisir", teks: "Kepiting, udang, dan ikan muda berlindung di antara akar, menopang tangkapan nelayan di sekitarnya." },
];

const LANGKAH = [
  ["Daftar sebagai relawan", "Isi formulir di halaman Kontak. Tim akan menghubungimu untuk mengatur jadwal kegiatan."],
  ["Ikut pengenalan singkat", "Belajar jenis bakau, cara menanam, dan keselamatan di area lumpur."],
  ["Menanam saat air surut", "Bibit ditanam bersama warga di titik yang sudah disurvei sebelumnya."],
  ["Merawat selama 12 bulan", "Membersihkan teritip, mengganti bibit yang mati, dan mencatat pertumbuhan."],
];

const ACEH_TIMUR = LUAS_ACEH.find(([n]) => n === "Aceh Timur")[1];

function Kepala({ id, label, judul, children, tengah }) {
  return (
    <div className={`muncul ${tengah ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      <p className="label-atas">{label}</p>
      <h2 id={id} className="judul-section mt-3">{judul}</h2>
      {children && <p className="teks-pengantar mt-4">{children}</p>}
    </div>
  );
}

export default function Beranda() {
  return (
    <>
      {/* HERO */}
      <section aria-labelledby="judul-hero" className="relative overflow-hidden">
        <div className="wadah pt-16 text-center sm:pt-24">
          <h1 id="judul-hero" className="muncul mx-auto max-w-4xl text-[3.25rem] sm:text-7xl lg:text-[5.5rem]">
            Air pasang selalu datang, <em>akar bakau</em> yang menahan.
          </h1>
          <p className="muncul mx-auto mt-6 max-w-xl text-[1.0625rem] text-abu sm:text-lg" style={{ transitionDelay: "80ms" }}>
            Sebagian besar hutan mangrove di pesisir timur Aceh rusak. BakauKita mengajak warga Lhokseumawe
            menanam, merawat, dan menjaganya kembali.
          </p>
          <div className="muncul mt-8 flex items-center justify-center gap-3" style={{ transitionDelay: "160ms" }}>
            <a href="#kontak" className="tombol-utama">Daftar jadi relawan</a>
            <a href="#beranda-pasang" className="tombol-bulat" aria-label="Gulir ke ilustrasi pasang surut">
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 4v12M5 11l5 5 5-5" /></svg>
            </a>
          </div>
        </div>

        <ol className="wadah mt-14 grid grid-cols-3 items-end gap-3 sm:mt-20 sm:grid-cols-5 sm:gap-6" aria-label="Perjalanan sebatang bibit bakau">
          {PERJALANAN.map((p, i) => (
            <li key={p.teks} className={`muncul flex flex-col items-center ${p.sembunyiHp ? "hidden sm:flex" : ""}`} style={{ transitionDelay: `${i * 70}ms` }}>
              <Gambar aset={p.aset} loading="eager" className={`h-auto ${p.kelas} max-w-[220px] animate-apung`} style={{ animationDelay: `${i * -1.2}s` }} />
              <span className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-garis to-transparent" aria-hidden="true" />
              <span className="mt-3 text-center text-xs text-abu"><span className="mr-1 font-semibold text-tinta">{String(i + 1).padStart(2, "0")}</span>{p.teks}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* PASANG SURUT INTERAKTIF */}
      <section id="beranda-pasang" aria-labelledby="judul-pasang" className="wadah scroll-mt-20 pt-28 sm:pt-36">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Kepala id="judul-pasang" label="Coba sendiri" judul={<>Lihat pantai <em>dengan</em> dan <em>tanpa</em> bakau</>}>
            Geser ketinggian air, lalu bandingkan apa yang terjadi pada garis pantai dan rumah warga.
          </Kepala>
          <Gambar aset={DEKOR.ombak} className="muncul hidden w-44 shrink-0 md:block" aria-hidden="true" />
        </div>
        <div className="muncul mt-10"><TideHero /></div>
      </section>

      {/* PERAN */}
      <section aria-labelledby="judul-peran" className="wadah pt-28 sm:pt-36">
        <Kepala id="judul-peran" label="Kenapa bakau" judul={<>Satu sabuk bakau, <em>tiga</em> perlindungan</>} tengah />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PERAN.map((p, i) => (
            <div key={p.judul} className="muncul" style={{ transitionDelay: `${i * 90}ms` }}>
              <article className="kartu flex h-full flex-col p-7 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(14,26,11,0.35)]">
                <img src={p.ikon} alt="" width="56" height="56" className="h-14 w-14" loading="lazy" />
                <h3 className="mt-6 text-lg">{p.judul}</h3>
                <p className="mt-2 text-abu">{p.teks}</p>
                {p.sumber && <p className="sumber mt-auto pt-4 text-xs">Sumber: <a href={p.sumber[1]} target="_blank" rel="noreferrer">{p.sumber[0]}</a></p>}
              </article>
            </div>
          ))}
        </div>
      </section>

      {/* STATISTIK */}
      <section aria-labelledby="judul-lokal" className="wadah pt-28 sm:pt-36">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="muncul relative flex min-h-[230px] flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-cover bg-center px-8 py-10 text-center" style={{ backgroundImage: `url(${LATAR.hijauLembut})` }}>
            <p className="font-judul text-7xl leading-none text-tinta sm:text-8xl">{fmt(LUAS_LHOKSEUMAWE, 2)}<span className="text-4xl italic text-payau"> ha</span></p>
            <h2 id="judul-lokal" className="mt-3 font-isi text-base font-semibold tracking-normal text-tinta">Sisa hutan mangrove di Kota Lhokseumawe</h2>
          </div>
          <div className="muncul relative flex min-h-[230px] flex-col items-center justify-start overflow-hidden rounded-[2rem] bg-cover bg-center px-8 pb-24 pt-10 text-center" style={{ backgroundImage: `url(${LATAR.biruLaut})` }}>
            <p className="font-judul text-7xl leading-none text-tinta sm:text-8xl">{Math.round(ACEH_TIMUR / LUAS_LHOKSEUMAWE)}<span className="ml-1 text-6xl italic text-[#0B5A78] sm:text-7xl">×</span></p>
            <p className="mt-3 max-w-xs text-base font-semibold text-tinta">lebih luas mangrove di Aceh Timur ({fmt(ACEH_TIMUR)} ha)</p>
          </div>
        </div>
        <p className="muncul sumber mt-5 text-center text-xs">
          Data WWF Indonesia via <a href={SUMBER.mongabay.url} target="_blank" rel="noreferrer">Mongabay (2022)</a>. Setiap bibit yang tumbuh di pesisir kita membuat perbedaan yang terasa. <a href="#tentang">Lihat kondisi pantai timur Aceh</a>
        </p>
      </section>

      <Simulasi />

      {/* CARA IKUT */}
      <section aria-labelledby="judul-langkah" className="wadah pt-28 sm:pt-36">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div className="muncul kartu-lembut relative order-2 flex items-end justify-center overflow-hidden px-6 pt-12 lg:order-1">
            <Gambar aset={ILUSTRASI.menanam} className="relative h-auto w-full max-w-md" />
          </div>
          <div className="order-1 lg:order-2">
            <Kepala id="judul-langkah" label="Cara ikut" judul={<>Empat langkah ikut <em>menanam</em></>} />
            <ol className="mt-10 space-y-0">
              {LANGKAH.map(([j, t], i) => (
                <li key={j} className="muncul relative grid grid-cols-[2.75rem_1fr] gap-4 pb-8 last:pb-0">
                  {i < LANGKAH.length - 1 && <span className="absolute bottom-0 left-[1.375rem] top-11 w-px bg-garis" aria-hidden="true" />}
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-garis bg-white text-sm font-semibold text-tinta" aria-hidden="true">{i + 1}</span>
                  <div className="pt-2">
                    <h3 className="text-base">{j}</h3>
                    <p className="mt-1 text-abu">{t}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <AksiRumah />
      <Kuis />

      {/* BACAAN */}
      <section aria-labelledby="judul-bacaan" className="wadah pt-28 sm:pt-36">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Kepala id="judul-bacaan" label="Artikel" judul={<>Bacaan <em>terbaru</em></>} />
          <a href="#artikel" className="tombol-garis muncul">Semua artikel</a>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {/* data artikel berurutan dari terlama, jadi tiga terakhir dibalik agar yang terbaru tampil pertama */}
          {ARTIKEL.slice(-3).reverse().map((a, i) => (
            <div key={a.slug} className="muncul" style={{ transitionDelay: `${i * 90}ms` }}>
              <KartuArtikel a={a} />
            </div>
          ))}
        </div>
      </section>

      {/* AJAKAN */}
      <section aria-labelledby="judul-ajakan" className="wadah pt-28 sm:pt-36">
        {/* latar langit dan ombak: bagian tengahnya kosong sehingga teks tetap terbaca tanpa lapisan tebal */}
        <div className="muncul relative overflow-hidden rounded-[2rem] bg-cover bg-bottom px-6 pb-36 pt-16 text-center sm:px-12 sm:pb-44 sm:pt-24" style={{ backgroundImage: `url(${LATAR.langitOmbak})` }}>
          <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-white/40 to-transparent" aria-hidden="true" />
          <div className="relative">
            <h2 id="judul-ajakan" className="judul-section mx-auto max-w-2xl sm:text-6xl">Siap turun ke lumpur? <em>Ayo menanam.</em></h2>
            <p className="mx-auto mt-4 max-w-md text-lumpur">Kegiatan tanam dan rawat dirancang berlangsung saat air surut, bersama warga dan mitra setempat. Daftar dulu, jadwalnya kami kabari.</p>
            <a href="#kontak" className="tombol-utama mt-7">Daftar jadi relawan</a>
          </div>
        </div>
      </section>
    </>
  );
}
