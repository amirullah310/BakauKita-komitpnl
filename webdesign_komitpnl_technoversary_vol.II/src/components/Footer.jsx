import { Merek } from "./Navbar.jsx";
import { DEKOR } from "../data/aset.js";
import Gambar from "./Gambar.jsx";
import { EMAIL_TIM, WA_TAMPIL, waUrl } from "../data/kontak.js";

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
      <div className="wadah grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1.2fr]">
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
          <h2 className="font-isi text-sm font-semibold tracking-normal text-tinta">Hubungi kami</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={waUrl()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-abu no-underline hover:text-tinta">
                <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-payau" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.3.8 3.2.7a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.2-.2-.4-.3z" /></svg>
                <span><span className="sr-only">WhatsApp </span>{WA_TAMPIL}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL_TIM}`} className="inline-flex items-center gap-2 text-abu no-underline hover:text-tinta">
                <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-payau" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true"><rect x="2.5" y="4.5" width="15" height="11" rx="2" /><path d="M3 5.5l7 5 7-5" /></svg>
                <span><span className="sr-only">Email </span>{EMAIL_TIM}</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-isi text-sm font-semibold tracking-normal text-tinta">Tentang situs ini</h2>
          <p className="mt-3 text-sm text-abu">
            BakauKita adalah konsep kampanye yang dirancang dan dibangun oleh Tim komitpnl, Politeknik Negeri Lhokseumawe, untuk Web Design Competition Techno Versary Vol. II 2026.
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
