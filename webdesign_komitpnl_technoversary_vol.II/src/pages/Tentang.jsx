import { LUAS_ACEH, SUMBER } from "../data/sumber.js";
import { ILUSTRASI, IKON, LATAR } from "../data/aset.js";
import KepalaHalaman from "../components/KepalaHalaman.jsx";

// Sumber dikelompokkan menurut jenisnya; sumber yang belum masuk kelompok mana pun tetap ditampilkan di "Lainnya"
const KELOMPOK_SUMBER = (() => {
  const kelompok = [
    ["Jurnal ilmiah", ["donato", "danielsen", "kerr", "plastik", "dewiyanti", "akuatika"]],
    ["Laporan lembaga", ["fao", "nioz", "hariMangrove"]],
    ["Media", ["mongabay", "pmn", "silvofishery", "brgm", "katadata", "teknikTanam"]],
  ];
  const dipakai = new Set(kelompok.flatMap(([, k]) => k));
  const lain = Object.keys(SUMBER).filter((k) => !dipakai.has(k));
  if (lain.length) kelompok.push(["Lainnya", lain]);
  return kelompok.map(([judul, kunci]) => [judul, kunci.filter((k) => SUMBER[k]).map((k) => SUMBER[k])]);
})();

const fmt = (n) => n.toLocaleString("id-ID", { maximumFractionDigits: 2 });

const MISI = [
  [IKON.edukasi, "Edukasi", "Membagikan pengetahuan tentang fungsi bakau dan cara merawatnya lewat artikel, kunjungan sekolah, dan media sosial."],
  [IKON.bibit, "Aksi tanam dan rawat", "Mengajak relawan menanam saat air surut dan merawat bibit selama 12 bulan pertama, masa paling rawan bagi bibit."],
  [IKON.komunitas, "Kolaborasi", "Bekerja sama dengan kampus, sekolah, komunitas, dan pemerintah desa pesisir agar kegiatan berlanjut."],
];

const TIM = [
  ["Amirullah", "Ketua tim · Front‑end Developer"],
  ["Muhammad Aziz", "UI/UX Designer"],
  ["Muhammad Alfisyahrin Muzhaffar", "Riset & Penulis Konten"],
];

function GrafikLuas() {
  const maks = Math.max(...LUAS_ACEH.map(([, v]) => v));
  return (
    <figure className="kartu p-6 sm:p-8">
      <figcaption>
        <p className="font-semibold text-tinta">Luas mangrove pantai timur Aceh</p>
        <p className="text-sm text-abu">per kabupaten/kota, dalam hektare</p>
      </figcaption>
      <ul className="mt-7 space-y-4">
        {LUAS_ACEH.map(([nama, v]) => {
          const kita = nama === "Kota Lhokseumawe";
          return (
            <li key={nama} className="grid grid-cols-[8.5rem_1fr] items-center gap-3 text-sm sm:grid-cols-[10rem_1fr]">
              <span className={kita ? "font-semibold text-akar" : "text-lumpur"}>{nama}</span>
              <div className="flex items-center gap-3">
                <div className={`h-2.5 rounded-full ${kita ? "bg-akar" : "bg-payau-muda"}`} style={{ width: `${Math.max(0.8, (v / maks) * 100)}%` }} />
                <span className={`whitespace-nowrap tabular-nums ${kita ? "font-semibold text-akar" : "text-abu"}`}>{fmt(v)}</span>
              </div>
            </li>
          );
        })}
      </ul>
      <p className="sumber mt-7 text-xs">Sumber: WWF Indonesia, dikutip <a href={SUMBER.mongabay.url} target="_blank" rel="noreferrer">Mongabay Indonesia (2022)</a>.</p>
    </figure>
  );
}

export default function Tentang() {
  return (
    <>
      <KepalaHalaman label="Tentang kami" judul={<>Kami ingin pesisir Lhokseumawe kembali <em>hijau</em></>} gambar={ILUSTRASI.pulau}>
        BakauKita menghubungkan warga, pelajar, dan mahasiswa dengan kegiatan rehabilitasi mangrove di pesisir Aceh.
        Pemulihan pantai paling berhasil jika dilakukan bersama masyarakat yang tinggal di sekitarnya.
      </KepalaHalaman>

      <figure className="wadah muncul mt-16 sm:mt-20">
        <img src={LATAR.laguna} alt="Ilustrasi laguna bakau saat matahari terbit, dengan bibit-bibit baru tumbuh di antara akar pohon dewasa"
          width="1600" height="900" loading="lazy" decoding="async"
          className="aspect-[16/9] w-full rounded-[2rem] object-cover sm:aspect-[21/9]" />
        <figcaption className="mt-3 text-center text-sm text-abu">Pesisir yang ingin kami pulihkan: hutan bakau yang rapat, dengan bibit baru tumbuh di antaranya.</figcaption>
      </figure>

      <section aria-labelledby="judul-masalah" className="wadah pt-24 sm:pt-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="muncul">
            <p className="label-atas">Masalahnya</p>
            <h2 id="judul-masalah" className="judul-section mt-3">Sebagian besar mangrove kita <em>rusak</em></h2>
            <p className="mt-5 max-w-baca text-abu">
              Menurut Aceh Wetland Foundation, sebagian besar hutan mangrove di pantai timur Aceh berada dalam kondisi rusak berat dan sedang.
              Penyebabnya adalah alih fungsi lahan untuk perkebunan, permukiman, dan tambak, serta penebangan liar untuk bahan baku arang.
            </p>
            <p className="mt-4 max-w-baca text-abu">
              Kota Lhokseumawe hanya memiliki sekitar 88 hektare mangrove, dan seluruhnya berada di area penggunaan lain, bukan di kawasan hutan.
              Artinya, perlindungannya sangat bergantung pada kepedulian warga.
            </p>
          </div>
          <div className="muncul"><GrafikLuas /></div>
        </div>
      </section>

      <section aria-labelledby="judul-misi" className="wadah pt-24 sm:pt-32">
        <div className="muncul mx-auto max-w-2xl text-center">
          <p className="label-atas">Yang kami lakukan</p>
          <h2 id="judul-misi" className="judul-section mt-3">Edukasi, aksi, dan <em>kolaborasi</em></h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {MISI.map(([ikon, j, t], i) => (
            <div key={j} className="muncul kartu p-7" style={{ transitionDelay: `${i * 90}ms` }}>
              <img src={ikon} alt="" width="56" height="56" className="h-14 w-14" loading="lazy" />
              <h3 className="mt-6 text-lg">{j}</h3>
              <p className="mt-2 text-abu">{t}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="judul-tim" className="wadah pt-24 sm:pt-32">
        <div className="muncul kartu-lembut p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div>
              <p className="label-atas">Tim</p>
              <h2 id="judul-tim" className="mt-3 text-4xl sm:text-5xl">Di balik <em>BakauKita</em></h2>
              <p className="mt-4 text-abu">
                Situs ini dirancang dan dibangun oleh Tim komitpnl, mahasiswa Politeknik Negeri Lhokseumawe, untuk Web Design Competition Techno Versary Vol. II.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-3">
              {TIM.map(([n, p], i) => (
                <li key={i} className="rounded-2xl border border-garis bg-white p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-kabut text-sm font-bold text-payau-gelap" aria-hidden="true">{n.replace(/[[\]]/g, "").charAt(0)}</span>
                  <p className="mt-4 font-semibold text-tinta">{n}</p>
                  <p className="text-sm text-abu">{p}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="judul-sumber" className="wadah pt-24">
        <h2 id="judul-sumber" className="text-3xl sm:text-4xl">Sumber data</h2>
        <p className="mt-2 text-abu">Semua angka dan klaim di situs ini dapat ditelusuri ke {Object.keys(SUMBER).length} sumber berikut.</p>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {KELOMPOK_SUMBER.map(([judul, daftar]) => (
            <div key={judul} className="kartu p-6">
              <h3 className="flex items-baseline justify-between gap-3 text-base">
                {judul} <span className="text-sm font-normal tabular-nums text-abu">{daftar.length}</span>
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {daftar.map((s) => (
                  <li key={s.url} className="border-t border-garis pt-3 first:border-0 first:pt-0">
                    <a href={s.url} target="_blank" rel="noreferrer" className="leading-relaxed">{s.teks}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
