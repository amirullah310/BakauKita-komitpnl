import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/instrument-serif/latin-400.css";
import "@fontsource/instrument-serif/latin-400-italic.css";
import "@fontsource-variable/plus-jakarta-sans/wght.css";
import "./index.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Tutup layar pemuat (lihat index.html) setelah aplikasi tampil dan font siap.
// Tampil minimal ~0,5 detik agar animasi logo "tumbuh" sempat terlihat
// (lebih singkat jika pengguna memilih kurangi gerakan).
// Saat pindah halaman, pemuat yang sama ditampilkan oleh komponen PemuatHalaman.
const pemuat = document.getElementById("pemuat");
if (pemuat) {
  const kurangiGerak = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const minimal = new Promise((r) => setTimeout(r, Math.max(0, (kurangiGerak ? 200 : 500) - performance.now())));
  const font = Promise.race([document.fonts?.ready ?? Promise.resolve(), new Promise((r) => setTimeout(r, 3000))]);
  Promise.all([minimal, font]).then(() => {
    pemuat.classList.add("selesai");
    setTimeout(() => pemuat.remove(), 350);
  });
}
