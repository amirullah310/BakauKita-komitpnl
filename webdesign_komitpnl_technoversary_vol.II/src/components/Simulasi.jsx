import { useState } from "react";
import { KARBON_PER_HA, LUAS_LHOKSEUMAWE, SUMBER } from "../data/sumber.js";
import { ILUSTRASI } from "../data/aset.js";
import Gambar from "./Gambar.jsx";

const fmt = (n, d = 0) => n.toLocaleString("id-ID", { minimumFractionDigits: d, maximumFractionDigits: d });
const JARAK = [
  { id: "1x1", label: "1 × 1 meter (rapat)", perHa: 10000 },
  { id: "1x2", label: "1 × 2 meter", perHa: 5000 },
  { id: "2x2", label: "2 × 2 meter (renggang)", perHa: 2500 },
];

export default function Simulasi() {
  const [bibit, setBibit] = useState(2000);
  const [jarak, setJarak] = useState("1x1");
  const perHa = JARAK.find((j) => j.id === jarak).perHa;
  const luas = bibit / perHa;
  const persen = (luas / LUAS_LHOKSEUMAWE) * 100;
  const karbon = luas * KARBON_PER_HA;
  const co2 = karbon * 3.67;
  const hidupMin = Math.round(bibit * 0.3), hidupMaks = Math.round(bibit * 0.4);

  // Teks kolom angka disimpan terpisah agar pengguna bebas menghapus/mengetik;
  // nilai baru dibatasi ke 100–50.000 saat kolom ditinggalkan (blur) atau Enter.
  const [teks, setTeks] = useState("2000");
  const batasi = (v) => Math.min(50000, Math.max(100, Math.round(Number(v)) || 100));
  const geser = (v) => { setBibit(Number(v)); setTeks(String(v)); };
  const ketik = (v) => {
    setTeks(v);
    const n = Number(v);
    if (v !== "" && n >= 100 && n <= 50000) setBibit(Math.round(n));
  };
  const tetapkan = () => { const n = batasi(teks); setBibit(n); setTeks(String(n)); };

  return (
    <section id="beranda-simulasi" aria-labelledby="judul-simulasi" className="wadah scroll-mt-24 pt-28">
      <div className="muncul grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p className="label-atas">Simulasi tanam</p>
          <h2 id="judul-simulasi" className="judul-section mt-3">Hitung dampak <em>bibit</em> yang kamu tanam</h2>
          <p className="teks-pengantar mt-4 max-w-baca">
            Masukkan jumlah bibit dan jarak tanam. Simulasi memperkirakan luas lahan yang pulih dan
            karbon yang tersimpan saat bibit tumbuh menjadi hutan bakau dewasa.
          </p>
          <div className="mt-9 space-y-7">
            <div>
              <label htmlFor="jumlah-bibit" className="label-isian">Jumlah bibit</label>
              <div className="flex items-center gap-4">
                <input type="range" min="100" max="50000" step="100" value={bibit} onChange={(e) => geser(e.target.value)} className="w-full accent-tinta" aria-label="Geser jumlah bibit" />
                <input id="jumlah-bibit" type="number" inputMode="numeric" min="100" max="50000" value={teks} onChange={(e) => ketik(e.target.value)} onBlur={tetapkan} onKeyDown={(e) => e.key === "Enter" && tetapkan()} className="isian w-32 text-right tabular-nums" />
              </div>
            </div>
            <fieldset>
              <legend className="label-isian">Jarak tanam</legend>
              <div className="flex flex-wrap gap-2">
                {JARAK.map((j) => (
                  <label key={j.id} className={`chip cursor-pointer has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-akar ${jarak === j.id ? "chip-aktif" : "chip-pasif"}`}>
                    <input type="radio" name="jarak" value={j.id} checked={jarak === j.id} onChange={() => setJarak(j.id)} className="sr-only" />
                    {j.label}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-tinta p-7 text-white sm:p-10" aria-live="polite">
          <Gambar aset={ILUSTRASI.bibit} className="pointer-events-none absolute -right-4 -top-3 w-28 opacity-90 sm:w-36" aria-hidden="true" />
          <p className="max-w-[16rem] text-white/70">Dengan {fmt(bibit)} bibit, kamu memulihkan sekitar</p>
          <p className="mt-2 font-judul text-6xl leading-none sm:text-7xl">{fmt(luas, 2)} <span className="italic text-daun">ha</span></p>
          <p className="mt-4 max-w-md text-white/80">
            Setara {fmt(persen, 1)}% dari luas mangrove yang tersisa di Kota Lhokseumawe ({fmt(LUAS_LHOKSEUMAWE, 2)} ha).
          </p>
          <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2">
            <div className="bg-tinta/60 p-5">
              <dt className="text-sm text-white/70">Karbon tersimpan saat menjadi hutan dewasa</dt>
              <dd className="mt-2 text-2xl font-semibold tabular-nums">{fmt(karbon)} ton</dd>
              <dd className="text-sm text-white/60">setara ±{fmt(co2)} ton CO₂</dd>
            </div>
            <div className="bg-tinta/60 p-5">
              <dt className="text-sm text-white/70">Bibit yang bertahan jika tidak dirawat</dt>
              <dd className="mt-2 text-2xl font-semibold tabular-nums">{fmt(hidupMin)}–{fmt(hidupMaks)}</dd>
              <dd className="text-sm text-white/60">60–70% bibit bisa mati sebelum 1 tahun</dd>
            </div>
          </dl>
          <p className="mt-6 text-sm text-white/80">
            Karena itu, setiap relawan BakauKita tidak hanya menanam, tetapi juga ikut merawat bibit selama 12 bulan pertama.
          </p>
        </div>
      </div>
      <p className="sumber mt-8 max-w-4xl text-xs leading-relaxed">
        Asumsi: simpanan karbon rata-rata ekosistem mangrove 1.023 ton karbon per hektare (<a href={SUMBER.donato.url} target="_blank" rel="noreferrer">Donato dkk., 2011</a>), dicapai
        setelah hutan tumbuh bertahun-tahun; konversi karbon ke CO₂ dikali 3,67. Tingkat kematian bibit dari Bengen (2000) dalam <a href={SUMBER.dewiyanti.url} target="_blank" rel="noreferrer">Dewiyanti & Yunita</a>.
        Luas mangrove Lhokseumawe dari data WWF Indonesia via <a href={SUMBER.mongabay.url} target="_blank" rel="noreferrer">Mongabay (2022)</a>. Hasil simulasi bersifat perkiraan edukatif.
      </p>
    </section>
  );
}
