// Aset gambar dari paket aset tim (Mangrove_Web_Assets, Paket_Aset_Bakau_Resolusi_Tinggi,
// 6_Aset_Ekosistem_Bakau), sudah dibersihkan dan dikonversi ke WebP.
// Ukuran asli (w, h) disertakan agar browser bisa menyiapkan ruang sebelum gambar termuat.

// Stiker resolusi tinggi (latar transparan)
import bibit from "../assets/stiker-bibit-akar.webp";
import kelompok from "../assets/stiker-relawan-kelompok.webp";
import relawan from "../assets/stiker-relawan-bibit.webp";
import pulau from "../assets/stiker-pulau-bakau.webp";
import drone from "../assets/stiker-drone.webp";
import lindungi from "../assets/stiker-perisai.webp";
// versi lebar 260 px untuk tampilan kecil (dipilih browser lewat srcset)
import kelompokKecil from "../assets/stiker-relawan-kelompok-260.webp";
import relawanKecil from "../assets/stiker-relawan-bibit-260.webp";
import pulauKecil from "../assets/stiker-pulau-bakau-260.webp";
import droneKecil from "../assets/stiker-drone-260.webp";
import lindungiKecil from "../assets/stiker-perisai-260.webp";
// Ilustrasi paket pertama
import menanam from "../assets/ilustrasi-community-planting.webp";
import hutan from "../assets/ilustrasi-mangrove-forest.webp";

import ikonAir from "../assets/icon-water.webp";
import ikonHutan from "../assets/icon-forest.webp";
import ikonBibit from "../assets/icon-seedling.webp";
import ikonKomunitas from "../assets/icon-community.webp";
import ikonEdukasi from "../assets/icon-education.webp";
import ikonProgres from "../assets/icon-progress.webp";

import langitOmbak from "../assets/latar-langit-ombak.webp";
import laguna from "../assets/latar-laguna.webp";
import hijauLembut from "../assets/latar-section-soft-green.webp";
import biruLaut from "../assets/latar-section-ocean-blue.webp";

import semak from "../assets/dekor-forest-bushes.webp";

export const ILUSTRASI = {
  bibit: { src: bibit, w: 245, h: 311 },
  kelompok: { src: kelompok, w: 492, h: 444, kecil: kelompokKecil },
  relawan: { src: relawan, w: 331, h: 399, kecil: relawanKecil },
  pulau: { src: pulau, w: 468, h: 342, kecil: pulauKecil },
  drone: { src: drone, w: 412, h: 388, kecil: droneKecil },
  lindungi: { src: lindungi, w: 346, h: 318, kecil: lindungiKecil },
  menanam: { src: menanam, w: 353, h: 208 },
  hutan: { src: hutan, w: 293, h: 207 },
};

export const IKON = {
  air: ikonAir, hutan: ikonHutan, bibit: ikonBibit,
  komunitas: ikonKomunitas, edukasi: ikonEdukasi, progres: ikonProgres,
};

// Latar: langitOmbak (tengah kosong, untuk teks), laguna (pemandangan, tanpa teks)
export const LATAR = { langitOmbak, laguna, hijauLembut, biruLaut };

export const DEKOR = {
  semak: { src: semak, w: 302, h: 99 },
};
