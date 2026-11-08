/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Palet dari logo BakauKita (hijau daun + cokelat akar) dalam gaya clean:
      // latar putih, teks netral, warna brand dipakai hemat sebagai aksen.
      colors: {
        tinta: "#0E1A0B", // judul dan tombol utama (hijau nyaris hitam)
        lumpur: "#2B3327", // teks isi
        abu: "#5B6656", // teks sekunder
        garis: "#E4EAE0", // garis tipis dan border kartu
        pasang: "#F5F8F2", // permukaan lembut
        kabut: "#DDEBCD", // latar aksen hijau muda
        payau: {
          DEFAULT: "#1E6B12", // link dan aksen brand
          muda: "#5BA524", // grafik
          gelap: "#0F3F0A",
        },
        daun: "#7DBE1E", // lime daun
        akar: "#8A3D22", // cokelat akar: sorotan data, fokus, error
        pasir: "#D9EDB4", // seleksi teks
      },
      fontFamily: {
        judul: ['"Instrument Serif"', "Georgia", "serif"],
        isi: ['"Plus Jakarta Sans Variable"', "system-ui", "sans-serif"],
      },
      maxWidth: { baca: "65ch" },
      keyframes: {
        apung: { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-6px)" } },
        // pita gelombang dua kali lebar wadah; geser setengahnya agar berulang mulus
        ombak: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      },
      animation: {
        apung: "apung 6s ease-in-out infinite",
        ombak: "ombak 16s linear infinite",
        "ombak-balik": "ombak 24s linear infinite reverse",
      },
    },
  },
  plugins: [],
};
