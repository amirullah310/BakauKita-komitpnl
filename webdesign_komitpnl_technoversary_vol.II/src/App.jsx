import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Beranda from "./pages/Beranda.jsx";
import Tentang from "./pages/Tentang.jsx";
import Artikel from "./pages/Artikel.jsx";
import Galeri from "./pages/Galeri.jsx";
import Kontak from "./pages/Kontak.jsx";

const HALAMAN = ["beranda", "tentang", "artikel", "galeri", "kontak"];

// Router sederhana berbasis hash (#tentang, #artikel-slug) agar jalan di GitHub Pages tanpa konfigurasi server
function bacaHash() {
  const h = window.location.hash.replace("#", "");
  if (h.startsWith("artikel-")) return { halaman: "artikel", slug: h.slice(8) };
  if (h.startsWith("beranda-")) return { halaman: "beranda", bagian: h };
  return { halaman: HALAMAN.includes(h) ? h : "beranda" };
}

// Animasi masuk-keluar saat digulir: elemen ber-kelas .muncul tampil saat masuk layar dan
// memudar lagi saat keluar. data-arah mencatat sisi keluarnya ("atas"/"bawah") agar elemen
// bergeser searah gulir, lalu masuk kembali dari sisi yang sama.
// Tanpa IntersectionObserver (browser lama), semuanya langsung tampil.
function useMuncul(kunci) {
  useEffect(() => {
    const el = [...document.querySelectorAll(".muncul")];
    if (!("IntersectionObserver" in window)) { el.forEach((e) => e.classList.add("terlihat")); return; }
    const io = new IntersectionObserver((entri) => {
      entri.forEach(({ target, isIntersecting, boundingClientRect, rootBounds }) => {
        if (isIntersecting) {
          target.classList.add("terlihat");
        } else {
          const tengah = (rootBounds?.height ?? window.innerHeight) / 2;
          target.dataset.arah = boundingClientRect.top < tengah ? "atas" : "bawah";
          target.classList.remove("terlihat");
        }
      });
    }, { rootMargin: "-6% 0px -8% 0px", threshold: 0.06 });
    el.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [kunci]);
}

export default function App() {
  const [rute, setRute] = useState(bacaHash);
  const mainRef = useRef(null);
  useMuncul(rute.halaman + (rute.slug ?? ""));

  useEffect(() => {
    const ubah = () => setRute(bacaHash());
    window.addEventListener("hashchange", ubah);
    return () => window.removeEventListener("hashchange", ubah);
  }, []);

  useEffect(() => {
    if (rute.bagian) {
      document.getElementById(rute.bagian)?.scrollIntoView();
      return;
    }
    window.scrollTo(0, 0);
    mainRef.current?.focus({ preventScroll: true });
    const judul = { beranda: "Beranda", tentang: "Tentang", artikel: "Artikel", galeri: "Galeri", kontak: "Jadi relawan" }[rute.halaman];
    document.title = `${judul} – BakauKita`;
  }, [rute]);

  const Halaman = { beranda: Beranda, tentang: Tentang, artikel: Artikel, galeri: Galeri, kontak: Kontak }[rute.halaman];

  return (
    <>
      <a href="#konten" onClick={(e) => { e.preventDefault(); mainRef.current?.focus(); }} className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-tinta focus:px-4 focus:py-2 focus:text-white">
        Lewati ke konten utama
      </a>
      <Navbar aktif={rute.halaman} />
      <main id="konten" ref={mainRef} tabIndex={-1} className="outline-none">
        <Halaman key={rute.halaman + (rute.slug ?? "")} slug={rute.slug} />
      </main>
      <Footer />
    </>
  );
}
