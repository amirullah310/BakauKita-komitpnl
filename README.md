# BakauKita – Pulihkan Mangrove Pesisir Aceh

Website kampanye dan edukasi restorasi mangrove untuk pesisir Kota Lhokseumawe dan pantai timur Aceh. Dibuat untuk **Web Design Competition Techno Versary Vol. II 2026** dengan tema *EcoDigital For Environment*, sub-tema **Kampanye Peduli Lingkungan** dan **Edukasi Lingkungan**.

**Demo:** https://amirullah310.github.io/BakauKita-komitpnl/

## Deskripsi

Kota Lhokseumawe hanya memiliki sekitar 88 hektare hutan mangrove, sementara sebagian besar mangrove di pantai timur Aceh berada dalam kondisi rusak berat dan sedang. BakauKita mengajak warga, pelajar, dan mahasiswa untuk memahami fungsi bakau, lalu ikut menanam dan merawatnya.

Fitur utama:

- **Ilustrasi pasang surut interaktif** di beranda: pengunjung mengatur ketinggian air dan membandingkan pantai dengan dan tanpa sabuk bakau.
- **Simulasi tanam**: menghitung luas lahan yang pulih, potensi simpanan karbon, dan perkiraan bibit yang bertahan dari jumlah bibit dan jarak tanam yang dipilih.
- **Aksi dari rumah**: enam kebiasaan untuk membantu menjaga bakau tanpa harus turun ke lapangan, dengan tombol bagikan situs.
- **Kuis interaktif** 5 soal dengan umpan balik langsung, penjelasan, dan skor akhir.
- **Grafik luas mangrove** pantai timur Aceh per kabupaten/kota.
- **9 artikel edukasi** (termasuk mangrove dan tsunami Aceh 2004, silvofishery, dan sampah plastik), masing-masing dengan daftar sumber jurnal atau media, plus **glosarium** istilah mangrove.
- **Galeri** jenis bakau dan satwa dengan filter dan tampilan detail (dialog).
- **Formulir pendaftaran relawan** dengan validasi dan FAQ; pesan dikirim lewat **WhatsApp** atau email dengan isi yang sudah terisi otomatis.
- **Ramah pengguna**: responsif di HP, navigasi keyboard, mendukung pembaca layar, animasi masuk-keluar saat digulir (otomatis nonaktif bila pengguna memilih kurangi gerakan).

Halaman yang tersedia: Beranda, Tentang, Artikel, Galeri, dan Kontak.

## Teknologi

- [React 18](https://react.dev) + [Vite 5](https://vitejs.dev)
- [Tailwind CSS 3](https://tailwindcss.com)
- Font Instrument Serif (judul) dan Plus Jakarta Sans (isi) melalui [Fontsource](https://fontsource.org) (lisensi SIL Open Font License, disimpan lokal tanpa CDN)

Seluruh komponen dibuat sendiri oleh tim. Proyek ini **tidak memakai template, UI kit, atau komponen berbayar/premium**.

**Asal aset visual:**

- Ilustrasi pasang surut interaktif di beranda adalah SVG yang digambar tim langsung dalam kode.
- Logo, ilustrasi, stiker, ikon, gambar spesies galeri, dan latar dibuat oleh tim menggunakan **AI image generator**, lalu dipilih, dibersihkan (latar transparan, potongan sisa, sudut), dan dikonversi ke WebP oleh tim. Hasilnya disimpan di `src/assets/` (logo di `public/`).
- Tidak ada foto, ilustrasi, atau aset yang diunduh dari pihak lain.

## Instalasi dan Menjalankan Proyek

Prasyarat: [Node.js](https://nodejs.org) versi 18 atau lebih baru.

```bash
# 1. Clone repository
git clone https://github.com/[username]/[nama-repo].git
cd [nama-repo]/webdesign_komitpnl_technoversary_vol.II

# 2. Pasang dependensi
npm install

# 3. Jalankan mode pengembangan, lalu buka http://localhost:5173
npm run dev

# 4. Build untuk produksi (hasil di folder dist/)
npm run build

# 5. Pratinjau hasil build
npm run preview
```

## Struktur Folder

```
webdesign_komitpnl_technoversary_vol.II/
├── public/              logo, favicon, dan ikon aplikasi
├── src/
│   ├── assets/          ilustrasi, stiker, ikon, gambar spesies, dan latar (WebP) dari paket aset
│   ├── components/      Navbar, Footer, KepalaHalaman, Gambar, TideHero (ilustrasi pasang surut SVG), Simulasi
│   ├── data/            artikel, galeri, sumber data, dan daftar aset gambar
│   ├── pages/           Beranda, Tentang, Artikel, Galeri, Kontak
│   ├── App.jsx          router sederhana berbasis hash (#tentang, #artikel, ...)
│   └── index.css        gaya dasar Tailwind
└── index.html
```

## Hosting (GitHub Pages)

Repository sudah berisi workflow `.github/workflows/deploy.yml`. Letakkan folder `.github` di root repository, lalu aktifkan **Settings → Pages → Source: GitHub Actions**. Situs akan otomatis diterbitkan setiap kali ada push ke branch `main`.

## Sumber Data

- Donato, D. C., dkk. (2011). Mangroves among the most carbon-rich forests in the tropics. *Nature Geoscience*, 4, 293–297.
- Mongabay Indonesia. (2022). Mangrove di Aceh rusak, siapa yang peduli? (data WWF Indonesia & Aceh Wetland Foundation).
- Dewiyanti, I. & Yunita. Identifikasi dan kelimpahan hama penyebab ketidakberhasilan rehabilitasi ekosistem mangrove (mengutip Bengen, 2000).
- ANTARA. (2021). BRGM ajak stakeholder perkuat rehabilitasi di Hari Mangrove Sedunia.

## Tim

**Nama tim:** komitpnl, Politeknik Negeri Lhokseumawe

| Nama | NIM | Peran |
| --- | --- | --- |
| Amirullah | 2024573010018 | Ketua tim |
| Muhammad Aziz | 2024573010089 | Anggota tim |
| Muhammad Alfisyahrin Muzhaffar | 2024573010113 | Anggota tim |
