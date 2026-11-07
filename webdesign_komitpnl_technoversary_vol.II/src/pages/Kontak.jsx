import { useState } from "react";
import KepalaHalaman from "../components/KepalaHalaman.jsx";
import { ILUSTRASI, IKON } from "../data/aset.js";

const EMAIL_TIM = "komit@pnl.ac.id";

const TANYA = [
  ["Siapa saja yang bisa menjadi relawan?", "Pelajar, mahasiswa, dan warga umum berusia 15 tahun ke atas. Peserta di bawah 18 tahun perlu izin orang tua atau sekolah."],
  ["Apakah ada biaya untuk ikut?", "Kegiatan dirancang tanpa biaya bagi relawan. Bibit dan peralatan diupayakan bersama mitra kegiatan, dan rinciannya diumumkan bersama jadwal."],
  ["Apakah BakauKita organisasi resmi?", "Belum. BakauKita adalah konsep kampanye yang dirancang Tim komitpnl, Politeknik Negeri Lhokseumawe. Pendaftaran dikirim ke email tim, lalu kegiatan lapangan dikoordinasikan bersama mitra setempat."],
  ["Apa yang perlu dibawa saat menanam?", "Sepatu bot atau alas kaki yang aman untuk lumpur, topi, pakaian ganti, dan air minum sendiri."],
  ["Kapan waktu menanam terbaik?", "Saat air surut, ketika lumpur terbuka dan bibit bisa ditanam dengan aman. Jadwal pasti mengikuti tabel pasang surut setempat."],
];

const PERAN = ["Relawan perorangan", "Sekolah atau kampus", "Komunitas atau organisasi", "Media atau mitra lain"];

export default function Kontak() {
  const [data, setData] = useState({ nama: "", email: "", peran: PERAN[0], pesan: "" });
  const [galat, setGalat] = useState({});
  const [terkirim, setTerkirim] = useState(false);

  const ubah = (k) => (e) => setData({ ...data, [k]: e.target.value });

  function kirim(e) {
    e.preventDefault();
    const g = {};
    if (data.nama.trim().length < 3) g.nama = "Tulis nama lengkap, minimal 3 huruf.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) g.email = "Tulis alamat email yang valid, misalnya nama@gmail.com.";
    if (data.pesan.trim().length < 10) g.pesan = "Ceritakan sedikit tentang dirimu atau rencanamu, minimal 10 huruf.";
    setGalat(g);
    if (Object.keys(g).length) {
      document.getElementById(Object.keys(g)[0])?.focus();
      return;
    }
    const isi = `Nama: ${data.nama}\nEmail: ${data.email}\nBergabung sebagai: ${data.peran}\n\n${data.pesan}`;
    window.location.href = `mailto:${EMAIL_TIM}?subject=${encodeURIComponent("Pendaftaran relawan BakauKita")}&body=${encodeURIComponent(isi)}`;
    setTerkirim(true);
  }

  const kolom = (id, label, el) => (
    <div>
      <label htmlFor={id} className="label-isian">{label}</label>
      {el}
      {galat[id] && (
        <p id={`${id}-galat`} className="pesan-galat">
          <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zm-.9 4.5h1.8v5.5H9.1zm0 7.2h1.8V15H9.1z" />
          </svg>
          {galat[id]}
        </p>
      )}
    </div>
  );

  return (
    <section aria-labelledby="judul-kontak">
      <KepalaHalaman id="judul-kontak" label="Jadi relawan" judul={<>Ikut menanam, ikut <em>merawat</em></>} gambar={ILUSTRASI.kelompok}>
        Isi formulir di bawah ini. Setelah kamu menekan tombol kirim, aplikasi email akan terbuka dengan pesan yang sudah terisi dan siap dikirim ke tim kami.
      </KepalaHalaman>

      <div className="wadah mt-16 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        {terkirim ? (
          <div className="kartu p-8 sm:p-10" role="status">
            <img src={IKON.bibit} alt="" width="56" height="56" className="h-14 w-14" />
            <h2 className="mt-6 text-4xl">Pesanmu siap dikirim</h2>
            <p className="mt-3 text-abu">Periksa aplikasi email yang terbuka, lalu tekan kirim. Tim akan membalas dengan informasi kegiatan berikutnya.</p>
            <p className="mt-3 text-abu">Jika aplikasi email tidak terbuka, kirim pesanmu langsung ke <a href={`mailto:${EMAIL_TIM}`}>{EMAIL_TIM}</a>.</p>
            <button type="button" className="tombol-garis mt-6" onClick={() => { setTerkirim(false); setData({ nama: "", email: "", peran: PERAN[0], pesan: "" }); }}>Isi formulir lagi</button>
          </div>
        ) : (
          <form onSubmit={kirim} noValidate className="kartu space-y-5 p-6 sm:p-8">
            <div>
              <h2 className="font-isi text-lg font-semibold tracking-tight">Formulir pendaftaran</h2>
              <p className="text-sm text-abu">Semua kolom wajib diisi.</p>
            </div>
            {kolom("nama", "Nama lengkap", <input id="nama" className="isian" value={data.nama} onChange={ubah("nama")} autoComplete="name" aria-invalid={!!galat.nama} aria-describedby={galat.nama ? "nama-galat" : undefined} />)}
            {kolom("email", "Email", <input id="email" type="email" className="isian" value={data.email} onChange={ubah("email")} autoComplete="email" aria-invalid={!!galat.email} aria-describedby={galat.email ? "email-galat" : undefined} />)}
            {kolom("peran", "Bergabung sebagai", (
              <select id="peran" className="isian" value={data.peran} onChange={ubah("peran")}>
                {PERAN.map((p) => <option key={p}>{p}</option>)}
              </select>
            ))}
            {kolom("pesan", "Pesan", <textarea id="pesan" rows="5" className="isian" value={data.pesan} onChange={ubah("pesan")} aria-invalid={!!galat.pesan} aria-describedby={galat.pesan ? "pesan-galat" : undefined} placeholder="Contoh: Saya mahasiswa dan ingin ikut penanaman bulan depan." />)}
            <button type="submit" className="tombol-utama w-full sm:w-auto">Kirim pendaftaran</button>
          </form>
        )}

        <div>
          <h2 className="text-4xl">Hubungi kami</h2>
          <dl className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <div className="kartu-lembut p-5"><dt className="text-sm text-abu">Email</dt><dd className="mt-1 font-semibold"><a href={`mailto:${EMAIL_TIM}`}>{EMAIL_TIM}</a></dd></div>
            <div className="kartu-lembut p-5"><dt className="text-sm text-abu">Basis kegiatan</dt><dd className="mt-1 font-semibold text-tinta">Politeknik Negeri Lhokseumawe, Aceh</dd></div>
          </dl>

          <h2 id="judul-tanya" className="mt-14 text-4xl">Tanya jawab</h2>
          <div className="mt-5 divide-y divide-garis border-y border-garis">
            {TANYA.map(([t, j]) => (
              <details key={t} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-tinta [&::-webkit-details-marker]:hidden">
                  {t}
                  <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-garis text-lg leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 pr-12 text-abu">{j}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
