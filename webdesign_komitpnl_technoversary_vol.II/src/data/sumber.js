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
  danielsen: {
    teks: "Danielsen, F., dkk. (2005). The Asian tsunami: A protective role for coastal vegetation. Science, 310(5748), 643.",
    url: "https://doi.org/10.1126/science.1118387",
  },
  kerr: {
    teks: "Kerr, A. M., & Baird, A. H. (2007). Natural barriers to natural disasters. BioScience, 57(2), 102–103.",
    url: "https://doi.org/10.1641/B570202",
  },
  pmn: {
    teks: "Mongabay Indonesia. (2021, 26 Oktober). Hutan mangrove nasional berubah, semakin luas (Peta Mangrove Nasional 2021).",
    url: "https://mongabay.co.id/2021/10/26/hutan-mangrove-nasional-berubah-semakin-luas/",
  },
  katadata: {
    teks: "Katadata. 21% hutan mangrove dunia ada di Indonesia, ini 3 provinsi terbesar.",
    url: "https://katadata.co.id/ekonomi-hijau/ekonomi-sirkular/6538708fc6c13/21-hutan-mangrove-dunia-ada-di-indonesia-ini-3-provinsi-terbesar",
  },
  hariMangrove: {
    teks: "IWMI. International Day for the Conservation of the Mangrove Ecosystem (26 Juli).",
    url: "https://www.iwmi.org/events/international-day-for-the-conservation-of-the-mangrove-ecosystem",
  },
  plastik: {
    teks: "van Bijsterveldt, C. E. J., dkk. (2021). Does plastic waste kill mangroves? A field experiment to assess the impact of macro plastics on mangrove growth, stress response and survival. Science of the Total Environment, 756, 143826.",
    url: "https://doi.org/10.1016/j.scitotenv.2020.143826",
  },
  nioz: {
    teks: "NIOZ. (2020). Java's protective mangroves smothered by plastic waste.",
    url: "https://nioz.nl/en/news/javas-protective-mangroves-smothered-by-plastic-waste",
  },
  teknikTanam: {
    teks: "NU Online. Mengulik pola dan teknik penanaman mangrove (wawancara Sekretaris BRGM).",
    url: "https://nu.or.id/lingkungan/mengulik-pola-dan-teknik-penanaman-mangrove-29LFp",
  },
  silvofishery: {
    teks: "Mongabay Indonesia. (2023, 29 Agustus). Silvofishery, harmoni vegetasi hutan mangrove dan budidaya perikanan.",
    url: "https://www.mongabay.co.id/2023/08/29/silvofishery-harmoni-vegetasi-hutan-mangrove-dan-budidaya-perikanan/",
  },
  akuatika: {
    teks: "Jurnal Akuatika Indonesia (Universitas Padjadjaran). Perbandingan produksi bandeng pada tambak silvofishery dan non-silvofishery di Cilacap.",
    url: "https://journals.unpad.ac.id/akuatika-indonesia/article/download/23407/11650",
  },
  fao: {
    teks: "Forbes, K., & Broadhead, J. (2007). The role of coastal forests in the mitigation of tsunami impacts. FAO Regional Office for Asia and the Pacific, RAP Publication 2007/1.",
    url: "https://www.fao.org/4/ai389e/ai389E00.htm",
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
