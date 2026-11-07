// Aset gambar dari paket Mangrove_Web_Assets.zip, sudah dibersihkan dan dikonversi ke WebP.
// Ukuran asli (w, h) disertakan agar browser bisa menyiapkan ruang sebelum gambar termuat.
import bibit from "../assets/ilustrasi-mangrove-seedling.webp";
import menanam from "../assets/ilustrasi-community-planting.webp";
import hutan from "../assets/ilustrasi-mangrove-forest.webp";
import drone from "../assets/ilustrasi-forest-monitoring-drone.webp";
import lindungi from "../assets/ilustrasi-mangrove-protection.webp";
import pulih from "../assets/ilustrasi-mangrove-restoration.webp";

import ikonAir from "../assets/icon-water.webp";
import ikonHutan from "../assets/icon-forest.webp";
import ikonBibit from "../assets/icon-seedling.webp";
import ikonKomunitas from "../assets/icon-community.webp";
import ikonEdukasi from "../assets/icon-education.webp";
import ikonProgres from "../assets/icon-progress.webp";

import panorama from "../assets/latar-hero-mangrove-coast.webp";
import hijauLembut from "../assets/latar-section-soft-green.webp";
import biruLaut from "../assets/latar-section-ocean-blue.webp";
import hijauTua from "../assets/latar-section-deep-green.webp";

import semak from "../assets/dekor-forest-bushes.webp";
import batu from "../assets/dekor-rock-and-plants.webp";
import ombak from "../assets/dekor-sea-wave.webp";

export const ILUSTRASI = {
  bibit: { src: bibit, w: 174, h: 195 },
  menanam: { src: menanam, w: 353, h: 208 },
  hutan: { src: hutan, w: 293, h: 207 },
  drone: { src: drone, w: 261, h: 202 },
  lindungi: { src: lindungi, w: 153, h: 182 },
  pulih: { src: pulih, w: 195, h: 183 },
};

export const IKON = {
  air: ikonAir, hutan: ikonHutan, bibit: ikonBibit,
  komunitas: ikonKomunitas, edukasi: ikonEdukasi, progres: ikonProgres,
};

export const LATAR = { panorama, hijauLembut, biruLaut, hijauTua };

export const DEKOR = {
  semak: { src: semak, w: 302, h: 99 },
  batu: { src: batu, w: 302, h: 98 },
  ombak: { src: ombak, w: 275, h: 84 },
};
