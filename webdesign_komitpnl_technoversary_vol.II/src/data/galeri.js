// Gambar spesies dari paket 6_Aset_Ekosistem_Bakau, dua ukuran untuk srcset (640 dan 1200 px)
import bakau640 from "../assets/spesies-bakau-640.webp";
import bakau1200 from "../assets/spesies-bakau-1200.webp";
import apiApi640 from "../assets/spesies-api-api-640.webp";
import apiApi1200 from "../assets/spesies-api-api-1200.webp";
import pedada640 from "../assets/spesies-pedada-640.webp";
import pedada1200 from "../assets/spesies-pedada-1200.webp";
import tanjang640 from "../assets/spesies-tanjang-640.webp";
import tanjang1200 from "../assets/spesies-tanjang-1200.webp";
import kepiting640 from "../assets/spesies-kepiting-640.webp";
import kepiting1200 from "../assets/spesies-kepiting-1200.webp";
import glodok640 from "../assets/spesies-glodok-640.webp";
import glodok1200 from "../assets/spesies-glodok-1200.webp";

const gambar = (kecil, besar, alt) => ({ src: kecil, srcSet: `${kecil} 640w, ${besar} 1200w`, alt });

export const GALERI = [
  { id: "bakau", nama: "Bakau", latin: "Rhizophora spp.", jenis: "Tumbuhan",
    gambar: gambar(bakau640, bakau1200, "Pohon bakau dengan akar tunjang melengkung dari batang ke air"),
    teks: "Mudah dikenali dari akar tunjang yang melengkung dari batang ke lumpur. Buahnya berbentuk panjang seperti tongkat dan sudah berkecambah saat masih menempel di pohon, lalu jatuh dan tertancap di lumpur." },
  { id: "api-api", nama: "Api-api", latin: "Avicennia spp.", jenis: "Tumbuhan",
    gambar: gambar(apiApi640, apiApi1200, "Pohon api-api dengan deretan akar napas tegak seperti pensil di sekitar batang"),
    teks: "Memiliki akar napas yang mencuat tegak dari lumpur seperti deretan pensil. Akar ini membantu pohon bernapas saat tanah tergenang air laut." },
  { id: "pedada", nama: "Pedada", latin: "Sonneratia spp.", jenis: "Tumbuhan",
    gambar: gambar(pedada640, pedada1200, "Pohon pedada dengan buah bulat dan akar napas berbentuk kerucut"),
    teks: "Akar napasnya berbentuk kerucut dan lebih besar dari api-api. Buahnya bulat seperti apel kecil dan dapat diolah warga pesisir menjadi sirup atau dodol." },
  { id: "tanjang", nama: "Tanjang", latin: "Bruguiera spp.", jenis: "Tumbuhan",
    gambar: gambar(tanjang640, tanjang1200, "Pohon tanjang dengan akar lutut yang melengkung keluar dari air"),
    teks: "Akarnya muncul dari lumpur lalu melengkung kembali ke bawah sehingga terlihat seperti lutut yang ditekuk, disebut akar lutut." },
  { id: "kepiting", nama: "Kepiting bakau", latin: "Scylla spp.", jenis: "Satwa",
    gambar: gambar(kepiting640, kepiting1200, "Kepiting bakau di atas lumpur di antara akar mangrove"),
    teks: "Hidup dan bersembunyi di antara akar dan lubang lumpur. Kepiting bakau bernilai ekonomi tinggi dan menjadi sumber penghasilan nelayan pesisir." },
  { id: "glodok", nama: "Ikan glodok", latin: "Periophthalmus spp.", jenis: "Satwa",
    gambar: gambar(glodok640, glodok1200, "Ikan glodok bertengger di atas lumpur saat air surut"),
    teks: "Ikan unik yang mampu bertahan di luar air. Saat surut, glodok merayap dan melompat di atas lumpur menggunakan sirip dadanya." },
];
