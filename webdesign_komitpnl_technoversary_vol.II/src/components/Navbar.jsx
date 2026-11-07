import { useEffect, useRef, useState } from "react";

const MENU = [
  ["beranda", "Beranda"],
  ["tentang", "Tentang"],
  ["artikel", "Artikel"],
  ["galeri", "Galeri"],
];

// Logo BakauKita (public/logo.webp, latar transparan). Dekoratif: nama "BakauKita" selalu ditulis di sebelahnya.
export const LOGO_SRC = `${import.meta.env.BASE_URL}logo.webp`;

export function Logo({ className = "h-9 w-9" }) {
  return <img src={LOGO_SRC} alt="" width="36" height="36" className={`${className} object-contain`} decoding="async" />;
}

export function Merek({ className = "" }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Logo />
      <span className="text-[1.0625rem] font-bold tracking-tight text-tinta">BakauKita</span>
    </span>
  );
}

export default function Navbar({ aktif }) {
  const [buka, setBuka] = useState(false);
  const [tergulir, setTergulir] = useState(false);
  const navRef = useRef(null);
  const tombolRef = useRef(null);

  // Garis bawah header baru muncul setelah halaman digulir, agar bagian atas tetap bersih
  useEffect(() => {
    const cek = () => setTergulir(window.scrollY > 8);
    cek();
    window.addEventListener("scroll", cek, { passive: true });
    return () => window.removeEventListener("scroll", cek);
  }, []);

  // Menu HP: tutup dengan Esc (fokus kembali ke tombol) atau ketukan di luar menu
  useEffect(() => {
    if (!buka) return;
    const tekan = (e) => {
      if (e.key === "Escape") { setBuka(false); tombolRef.current?.focus(); }
    };
    const ketuk = (e) => { if (!navRef.current?.contains(e.target)) setBuka(false); };
    document.addEventListener("keydown", tekan);
    document.addEventListener("pointerdown", ketuk);
    return () => {
      document.removeEventListener("keydown", tekan);
      document.removeEventListener("pointerdown", ketuk);
    };
  }, [buka]);

  const tautan = (id, nama, kelas) => (
    <a
      href={`#${id}`}
      onClick={() => setBuka(false)}
      aria-current={aktif === id ? "page" : undefined}
      className={kelas(aktif === id)}
    >
      {nama}
    </a>
  );

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-white/85 backdrop-blur-md transition-colors ${tergulir || buka ? "border-garis" : "border-transparent"}`}
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <nav ref={navRef} className="wadah relative flex h-16 items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]" aria-label="Navigasi utama">
        <a href="#beranda" className="justify-self-start no-underline" aria-label="BakauKita, ke beranda">
          <Merek />
        </a>

        {/* Desktop: tautan di tengah, tombol ajakan di kanan */}
        <ul className="hidden items-center gap-1 md:flex">
          {MENU.map(([id, nama]) => (
            <li key={id}>
              {tautan(id, nama, (on) =>
                `relative block rounded-full px-4 py-2 text-sm no-underline transition-colors ${on ? "font-semibold text-tinta" : "text-abu hover:text-tinta"}`
                + (on ? " after:absolute after:bottom-0.5 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-daun" : "")
              )}
            </li>
          ))}
        </ul>
        <div className="hidden justify-self-end md:block">
          <a href="#kontak" aria-current={aktif === "kontak" ? "page" : undefined} className="tombol-utama px-4 py-2.5 text-sm">
            Jadi relawan
          </a>
        </div>

        {/* HP */}
        <button
          ref={tombolRef}
          className="-mr-2 rounded-full p-2 text-tinta md:hidden"
          aria-expanded={buka}
          aria-controls="menu-hp"
          onClick={() => setBuka(!buka)}
        >
          <span className="sr-only">{buka ? "Tutup menu" : "Buka menu"}</span>
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            {buka ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
        <div
          id="menu-hp"
          className={`${buka ? "block" : "hidden"} absolute left-0 right-0 top-16 border-b border-garis bg-white px-5 pb-6 pt-2 shadow-[0_24px_32px_-20px_rgba(14,26,11,0.25)] md:hidden`}
        >
          <ul className="flex flex-col">
            {MENU.map(([id, nama]) => (
              <li key={id} className="border-b border-garis last:border-0">
                {tautan(id, nama, (on) => `flex items-center justify-between py-3.5 text-lg no-underline ${on ? "font-semibold text-tinta" : "text-lumpur"}`)}
              </li>
            ))}
          </ul>
          <a href="#kontak" onClick={() => setBuka(false)} className="tombol-utama mt-4 w-full">Jadi relawan</a>
        </div>
      </nav>
    </header>
  );
}
