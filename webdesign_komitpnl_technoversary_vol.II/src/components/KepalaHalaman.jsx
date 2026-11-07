import Gambar from "./Gambar.jsx";

// Kepala halaman bersama: label kecil, judul serif besar, pengantar, dan ilustrasi opsional di kanan.
export default function KepalaHalaman({ id, label, judul, children, gambar }) {
  return (
    <header className="wadah pt-14 sm:pt-20">
      <div className={`grid items-center gap-10 ${gambar ? "md:grid-cols-[1.35fr_1fr]" : ""}`}>
        <div className="muncul">
          <p className="label-atas">{label}</p>
          <h1 id={id} className="mt-4 max-w-3xl text-5xl sm:text-6xl lg:text-7xl">{judul}</h1>
          {children && <div className="teks-pengantar mt-6 max-w-2xl">{children}</div>}
        </div>
        {gambar && (
          <div className="muncul relative mx-auto w-full max-w-sm md:max-w-none" style={{ transitionDelay: "120ms" }}>
            <div className="absolute inset-x-6 bottom-0 top-10 -z-10 rounded-[2rem] bg-pasang" aria-hidden="true" />
            <Gambar aset={gambar} className="mx-auto h-auto w-full max-w-[22rem] animate-apung" loading="eager" />
          </div>
        )}
      </div>
    </header>
  );
}
