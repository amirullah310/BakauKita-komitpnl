// Gambar ilustrasi dengan ukuran asli; dekoratif secara bawaan (alt kosong)
export default function Gambar({ aset, alt = "", className = "", ...lain }) {
  return <img src={aset.src} width={aset.w} height={aset.h} alt={alt} loading="lazy" decoding="async" className={className} {...lain} />;
}
