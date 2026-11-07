// Semua angka di situs ini berasal dari sumber berikut
export const SUMBER = {
  donato: {
    teks: "Donato, D. C., dkk. (2011). Mangroves among the most carbon-rich forests in the tropics. Nature Geoscience, 4, 293–297.",
    url: "https://research.fs.usda.gov/treesearch/38862",
  },
  mongabay: {
    teks: "Mongabay Indonesia. (2022, 16 Februari). Mangrove di Aceh rusak, siapa yang peduli? (data WWF Indonesia & Aceh Wetland Foundation)",
    url: "https://mongabay.co.id/2022/02/16/mangrove-di-aceh-rusak-siapa-yang-peduli/",
  },
  dewiyanti: {
    teks: "Dewiyanti, I. & Yunita. Identifikasi dan kelimpahan hama penyebab ketidakberhasilan rehabilitasi ekosistem mangrove. Ilmu Kelautan (Universitas Diponegoro), mengutip Bengen (2000).",
    url: "https://ejournal.undip.ac.id/index.php/ijms/article/download/7089/5765",
  },
  brgm: {
    teks: "ANTARA. (2021). BRGM ajak stakeholder perkuat rehabilitasi di Hari Mangrove Sedunia.",
    url: "https://www.antaranews.com/berita/2288394/brgm-ajak-stakeholder-perkuat-rehabilitasi-di-hari-mangrove-sedunia",
  },
};

// Luas mangrove pantai timur Aceh (hektare), WWF Indonesia via Mongabay 2022
export const LUAS_ACEH = [
  ["Aceh Timur", 18080.45],
  ["Aceh Tamiang", 15447.91],
  ["Kota Langsa", 5253.15],
  ["Aceh Utara", 959.11],
  ["Kota Lhokseumawe", 88.34],
  ["Bireuen", 25.57],
];
export const LUAS_LHOKSEUMAWE = 88.34;
export const KARBON_PER_HA = 1023; // ton karbon per hektare, rata-rata ekosistem mangrove (Donato dkk., 2011)
