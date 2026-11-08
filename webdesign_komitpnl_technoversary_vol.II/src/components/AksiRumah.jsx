import { AKSI } from "../data/edukasi.js";
import TombolBagikan from "./TombolBagikan.jsx";

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
            <TombolBagikan gelap />
          </div>
        </li>
      </ol>
    </section>
  );
}
