// Kontak tim dan tanya jawab yang dipakai halaman Kontak
export const EMAIL_TIM = "komit@pnl.ac.id";
export const WA_TIM = "6289604232229"; // format internasional untuk wa.me (0896… -> 62896…)
export const WA_TAMPIL = "0896-0423-2229";

export const waUrl = (teks = "") => `https://wa.me/${WA_TIM}${teks ? `?text=${encodeURIComponent(teks)}` : ""}`;

export const FAQ = [
  ["Siapa saja yang bisa menjadi relawan?", "Pelajar, mahasiswa, dan warga umum berusia 15 tahun ke atas. Peserta di bawah 18 tahun perlu izin orang tua atau sekolah."],
  ["Apakah ada biaya untuk ikut?", "Kegiatan dirancang tanpa biaya bagi relawan. Bibit dan peralatan diupayakan bersama mitra kegiatan, dan rinciannya diumumkan bersama jadwal."],
  ["Apakah BakauKita organisasi resmi?", "Belum. BakauKita adalah konsep kampanye yang dirancang Tim komitpnl, Politeknik Negeri Lhokseumawe. Pendaftaran dikirim ke tim lewat WhatsApp atau email, lalu kegiatan lapangan dikoordinasikan bersama mitra setempat."],
  ["Apa yang perlu dibawa saat menanam?", "Sepatu bot atau alas kaki yang aman untuk lumpur, topi, pakaian ganti, dan air minum sendiri."],
  ["Kapan waktu menanam terbaik?", "Saat air surut, ketika lumpur terbuka dan bibit bisa ditanam dengan aman. Jadwal pasti mengikuti tabel pasang surut setempat."],
];
