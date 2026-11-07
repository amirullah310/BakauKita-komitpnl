import { SUMBER } from "./sumber.js";

// Aksi yang bisa dilakukan tanpa harus ikut menanam di lapangan
export const AKSI = [
  { judul: "Jangan buang sampah ke sungai dan laut", teks: "Sampah plastik yang terbawa arus tersangkut di akar bakau dan dapat menutupi bibit muda. Bawa pulang sampahmu saat ke pantai." },
  { judul: "Tolak arang dan kayu bakau", teks: "Penebangan untuk bahan baku arang termasuk penyebab rusaknya mangrove di pantai timur Aceh. Pilih bahan bakar lain.", sumber: ["Mongabay, 2022", SUMBER.mongabay.url] },
  { judul: "Laporkan penebangan liar", teks: "Catat lokasi dan waktunya, ambil foto bila aman, lalu sampaikan ke aparatur gampong atau dinas lingkungan hidup setempat." },
  { judul: "Kenali jalur evakuasi", teks: "Bakau melindungi pantai, tetapi tidak menghentikan tsunami besar. Ketahui rute evakuasi di sekitar rumah, sekolah, dan kampusmu." },
  { judul: "Ajak teman dan kelas belajar", teks: "Gunakan kuis dan artikel di situs ini sebagai bahan diskusi di sekolah, kampus, atau komunitas." },
];

// Kuis singkat; semua jawaban bisa ditemukan di halaman-halaman situs ini
export const KUIS = [
  {
    tanya: "Akar bakau Rhizophora yang tumbuh melengkung dari batang ke lumpur disebut apa?",
    pilihan: ["Akar napas", "Akar tunjang", "Akar lutut"],
    benar: 1,
    jelas: "Akar tunjang menopang pohon dan membentuk jaringan rapat yang memperlambat arus. Akar napas khas api-api, akar lutut khas tanjang.",
  },
  {
    tanya: "Berapa rata-rata simpanan karbon ekosistem mangrove per hektare menurut Donato dkk. (2011)?",
    pilihan: ["Sekitar 102 ton", "Sekitar 1.023 ton", "Sekitar 10.230 ton"],
    benar: 1,
    jelas: "Rata-rata 1.023 ton karbon per hektare, dan sebagian besar tersimpan di dalam tanah berlumpur.",
  },
  {
    tanya: "Kapan waktu terbaik menanam bibit bakau?",
    pilihan: ["Saat air pasang", "Saat air surut", "Saat hujan deras"],
    benar: 1,
    jelas: "Saat surut, lumpur terbuka sehingga bibit bisa ditanam dengan aman dan tertancap kuat.",
  },
  {
    tanya: "Jika tidak dirawat, berapa banyak bibit mangrove yang bisa mati sebelum berumur satu tahun?",
    pilihan: ["10–20%", "30–40%", "60–70%"],
    benar: 2,
    jelas: "Sekitar 60–70% bibit bisa mati, antara lain karena hama. Karena itu perawatan 12 bulan pertama sangat penting.",
  },
  {
    tanya: "Menurut penelitian tentang tsunami 2004, mana gambaran yang paling tepat tentang peran mangrove?",
    pilihan: [
      "Tembok yang menghentikan semua tsunami",
      "Lapisan pelindung yang mengurangi dampak, tetapi tetap perlu peringatan dini dan evakuasi",
      "Tidak berpengaruh sama sekali",
    ],
    benar: 1,
    jelas: "Hutan pantai bisa mengurangi dampak di banyak lokasi, tetapi perlindungannya terbatas pada gelombang yang sangat besar.",
  },
];

// Glosarium istilah yang muncul di artikel
export const GLOSARIUM = [
  ["Abrasi", "Pengikisan daratan pantai oleh gelombang dan arus laut, sehingga garis pantai perlahan mundur."],
  ["Akar tunjang", "Akar yang tumbuh dari batang lalu melengkung ke lumpur untuk menopang pohon. Khas bakau Rhizophora."],
  ["Akar napas", "Akar yang mencuat tegak dari lumpur untuk membantu pohon bernapas saat tanah tergenang. Khas api-api dan pedada."],
  ["Akar lutut", "Akar yang keluar dari lumpur lalu melengkung kembali ke bawah seperti lutut yang ditekuk. Khas tanjang."],
  ["Propagul", "Buah bakau yang sudah berkecambah selagi masih menempel di pohon, lalu jatuh dan tumbuh menjadi bibit baru."],
  ["Karbon biru", "Karbon yang diserap dan disimpan oleh ekosistem pesisir dan laut, seperti mangrove, padang lamun, dan rawa payau."],
  ["Zona pasang surut", "Wilayah pantai yang tergenang saat air pasang dan kering saat surut. Di sinilah mangrove tumbuh."],
  ["Ajir", "Tiang kecil yang ditancapkan di samping bibit agar bibit tidak tumbang terbawa arus."],
  ["Menyulam", "Mengganti bibit yang mati dengan bibit baru agar kerapatan tanaman tetap terjaga."],
  ["Teritip", "Hewan laut bercangkang kecil yang menempel pada batang bibit dan dapat menghambat pertumbuhannya."],
];
