// Gambar ilustrasi dengan ukuran asli; dekoratif secara bawaan (alt kosong).
// Bila aset punya versi kecil (260 px) dan `sizes` diberikan, browser memilih ukuran yang pas lewat srcset.
export default function Gambar({ aset, alt = "", className = "", sizes, ...lain }) {
  const responsif = aset.kecil && sizes ? { srcSet: `${aset.kecil} 260w, ${aset.src} ${aset.w}w`, sizes } : {};
  return <img src={aset.src} {...responsif} width={aset.w} height={aset.h} alt={alt} loading="lazy" decoding="async" className={className} {...lain} />;
}
