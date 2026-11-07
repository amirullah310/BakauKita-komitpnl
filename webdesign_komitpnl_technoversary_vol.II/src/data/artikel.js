import { SUMBER } from "./sumber.js";

// Setiap artikel: paragraf disimpan sebagai array agar mudah ditambah/diubah tim
export const ARTIKEL = [
  {
    slug: "penjaga-pantai",
    gambar: "lindungi", // kunci ILUSTRASI di data/aset.js
    judul: "Kenapa bakau disebut penjaga pantai",
    ringkas: "Akar bakau bekerja seperti pagar alami yang meredam gelombang dan menahan lumpur agar pantai tidak terkikis.",
    tanggal: "2 November 2026",
    menit: 3,
    isi: [
      ["p", "Di sepanjang pantai berlumpur, mangrove tumbuh di zona yang setiap hari tergenang saat pasang dan kering saat surut. Hanya tumbuhan dengan akar khusus yang mampu bertahan di tempat seperti ini."],
      ["h", "Akar yang membentuk pagar"],
      ["p", "Bakau jenis Rhizophora memiliki akar tunjang yang tumbuh melengkung dari batang ke lumpur. Jenis api-api (Avicennia) memunculkan akar napas yang mencuat seperti pensil di sekitar pohon. Ribuan akar ini membentuk jaringan rapat yang memperlambat arus air."],
      ["p", "Ketika arus melambat, lumpur yang terbawa air justru mengendap di antara akar. Pantai tidak terkikis, bahkan perlahan bisa bertambah. Sebaliknya, saat bakau ditebang, tanah kehilangan penahannya dan garis pantai mudah mundur karena abrasi."],
      ["h", "Pelindung permukiman pesisir"],
      ["p", "Sabuk bakau yang lebar berada di antara laut dan rumah warga. Gelombang yang datang harus melewati batang dan akar yang rapat sebelum mencapai daratan, sehingga kekuatannya berkurang. Inilah alasan rehabilitasi mangrove menjadi bagian penting dari upaya melindungi desa pesisir."],
      ["p", "Bagi Lhokseumawe yang berhadapan langsung dengan Selat Malaka, menjaga dan menambah hutan bakau berarti menjaga pantai tempat banyak warga tinggal dan mencari nafkah."],
    ],
    sumber: [SUMBER.mongabay],
  },
  {
    slug: "menanam-saja-tidak-cukup",
    gambar: "relawan",
    judul: "Menanam saja tidak cukup: pentingnya merawat bibit",
    ringkas: "Sebagian besar bibit mangrove bisa mati sebelum berumur satu tahun. Perawatan menentukan berhasil atau gagalnya penanaman.",
    tanggal: "4 November 2026",
    menit: 4,
    isi: [
      ["p", "Kegiatan tanam bakau sering ramai di hari pertama, lalu bibitnya ditinggalkan begitu saja. Padahal masa paling rawan justru terjadi setelah penanaman."],
      ["h", "Masa kritis satu tahun pertama"],
      ["p", "Bibit mangrove sangat disukai hama seperti serangga dan kepiting sejak pembibitan hingga berumur satu tahun. Akibatnya, sekitar 60–70% bibit bisa mati sebelum mencapai usia tersebut. Penelitian di Aceh pascatsunami juga menemukan bahwa salah satu penyebab gagalnya rehabilitasi adalah hama teritip yang menempel pada semai."],
      ["h", "Yang bisa dilakukan relawan"],
      ["ul", [
        "Menanam saat air surut, di lokasi yang sesuai dengan jenis bakau yang ditanam.",
        "Memasang ajir (tiang kecil) agar bibit tidak tumbang terbawa arus.",
        "Membersihkan teritip dan sampah yang menempel pada batang bibit secara berkala.",
        "Menyulam, yaitu mengganti bibit yang mati dengan bibit baru.",
        "Mencatat jumlah bibit yang hidup setiap bulan untuk mengetahui keberhasilan tanam.",
      ]],
      ["p", "Karena itu, BakauKita meminta setiap relawan berkomitmen ikut kegiatan perawatan selama 12 bulan, bukan hanya datang di hari tanam."],
    ],
    sumber: [SUMBER.dewiyanti],
  },
  {
    slug: "karbon-biru",
    gambar: "hutan",
    judul: "Karbon biru: harta tersembunyi di lumpur bakau",
    ringkas: "Hutan mangrove termasuk hutan paling kaya karbon di daerah tropis, dan sebagian besar karbonnya tersimpan di dalam tanah.",
    tanggal: "5 November 2026",
    menit: 3,
    isi: [
      ["p", "Karbon yang tersimpan di ekosistem pesisir seperti mangrove dikenal sebagai karbon biru. Perannya penting dalam upaya menghadapi perubahan iklim."],
      ["h", "Lebih banyak di bawah daripada di atas"],
      ["p", "Penelitian terhadap 25 hutan mangrove di kawasan Indo-Pasifik menemukan rata-rata simpanan karbon sebesar 1.023 ton per hektare. Yang mengejutkan, 49–98% karbon tersebut tersimpan di tanah berlumpur yang kaya bahan organik, dengan kedalaman tanah mulai dari 0,5 meter hingga lebih dari 3 meter."],
      ["h", "Risiko saat bakau ditebang"],
      ["p", "Karena karbonnya tersimpan dalam jumlah besar, kerusakan mangrove dapat melepaskan emisi yang signifikan. Penelitian yang sama memperkirakan emisi dari hilangnya mangrove bisa mencapai sekitar 10% emisi deforestasi global, padahal luasnya hanya sekitar 0,7% dari luas hutan tropis."],
      ["p", "Artinya, menjaga satu hektare bakau yang masih ada sama pentingnya dengan menanam yang baru."],
    ],
    sumber: [SUMBER.donato],
  },
  {
    slug: "kondisi-pantai-timur-aceh",
    gambar: "drone",
    judul: "Kondisi mangrove di pantai timur Aceh",
    ringkas: "Hutan mangrove pantai timur Aceh tersebar dari Aceh Tamiang hingga Bireuen, dan sebagian besar dalam kondisi rusak berat dan sedang.",
    tanggal: "6 November 2026",
    menit: 3,
    isi: [
      ["p", "Data WWF Indonesia yang dikutip Mongabay mencatat hutan mangrove di pantai timur Aceh tersebar di Aceh Timur, Aceh Tamiang, Kota Langsa, Aceh Utara, Kota Lhokseumawe, dan Bireuen."],
      ["p", "Luasnya sangat timpang. Aceh Timur memiliki sekitar 18.080 hektare, sedangkan Kota Lhokseumawe hanya sekitar 88 hektare. Mangrove di Aceh Utara, Bireuen, dan Lhokseumawe juga berada di area penggunaan lain, bukan di kawasan hutan."],
      ["h", "Penyebab kerusakan"],
      ["p", "Aceh Wetland Foundation menyebut sebagian besar mangrove di pantai timur Aceh dalam kondisi rusak berat dan sedang. Penyusutannya dipicu perkebunan, permukiman, pertambakan, dan penebangan liar, termasuk untuk bahan baku arang."],
      ["p", "Secara nasional, sekitar 637 ribu hektare mangrove Indonesia masuk kategori kritis, sehingga rehabilitasi membutuhkan keterlibatan masyarakat yang tinggal di sekitarnya."],
    ],
    sumber: [SUMBER.mongabay, SUMBER.brgm],
  },
];
