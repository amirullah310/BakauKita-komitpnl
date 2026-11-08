import { useEffect, useRef, useState } from "react";
import { LOGO_SRC } from "./Navbar.jsx";

const DURASI = 350; // lama pemuat tampil saat pindah halaman (ms)
const PUDAR = 300; // sama dengan durasi transisi .pemuat di index.html

// Layar pemuat saat pindah halaman. Memakai gaya .pemuat yang sama dengan pemuat awal
// (didefinisikan di index.html). Muncul seketika menutupi layar, halaman baru dirender
// di belakangnya, lalu memudar setelah ~1 detik.
export default function PemuatHalaman({ kunci }) {
  const [tahap, setTahap] = useState("mati"); // "tampil" -> "pudar" -> "mati"
  const sebelum = useRef(kunci);

  useEffect(() => {
    // render pertama ditangani pemuat di index.html; hanya bereaksi bila halaman benar-benar berganti
    if (sebelum.current === kunci) return;
    sebelum.current = kunci;
    const kurangiGerak = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setTahap("tampil");
    const lama = kurangiGerak ? 150 : DURASI;
    const t1 = setTimeout(() => setTahap("pudar"), lama);
    const t2 = setTimeout(() => setTahap("mati"), lama + PUDAR);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [kunci]);

  if (tahap === "mati") return null;
  return (
    <div className={`pemuat ${tahap === "pudar" ? "selesai" : ""}`} role="status" aria-live="polite">
      <div className="pemuat-logo" aria-hidden="true">
        <img className="pemuat-bayang" src={LOGO_SRC} alt="" width="132" height="132" />
        <img className="pemuat-warna" src={LOGO_SRC} alt="" width="132" height="132" />
      </div>
      <p className="pemuat-nama" aria-hidden="true">BakauKita</p>
      <div className="pemuat-garis" aria-hidden="true" />
      <span className="pemuat-sr">Memuat halaman…</span>
    </div>
  );
}
