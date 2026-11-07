import { Merek } from "./Navbar.jsx";
import { DEKOR } from "../data/aset.js";
import Gambar from "./Gambar.jsx";

const JELAJAHI = [
  ["tentang", "Tentang gerakan"],
  ["artikel", "Baca artikel"],
  ["galeri", "Kenali jenis bakau"],
  ["kontak", "Daftar jadi relawan"],
];

export default function Footer() {
  return (
    <footer className="relative mt-28 border-t border-garis bg-pasang" style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
      {/* semak kecil "tumbuh" di atas garis footer */}
      <Gambar aset={DEKOR.semak} className="pointer-events-none absolute -top-[62px] right-6 hidden w-[190px] sm:block lg:right-[8%]" aria-hidden="true" />
      <div className="wadah grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Merek />
          <p className="mt-4 max-w-xs text-sm text-abu">
            Gerakan warga untuk menanam dan merawat kembali hutan mangrove di pesisir Lhokseumawe dan Aceh.
          </p>
        </div>
        <div>
          <h2 className="font-isi text-sm font-semibold tracking-normal text-tinta">Jelajahi</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {JELAJAHI.map(([id, t]) => (
              <li key={id}><a href={`#${id}`} className="text-abu no-underline hover:text-tinta">{t}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-isi text-sm font-semibold tracking-normal text-tinta">Tentang situs ini</h2>
          <p className="mt-3 text-sm text-abu">
            Dibuat oleh Tim komitpnl, Politeknik Negeri Lhokseumawe, untuk Web Design Competition Techno Versary Vol. II 2026.
          </p>
        </div>
      </div>
      <div className="wadah">
        <div className="flex flex-col gap-2 border-t border-garis py-6 text-xs text-abu sm:flex-row sm:justify-between">
          <p>© 2026 Tim komitpnl · BakauKita</p>
          <p>Pesisir Lhokseumawe, Aceh</p>
        </div>
      </div>
    </footer>
  );
}
