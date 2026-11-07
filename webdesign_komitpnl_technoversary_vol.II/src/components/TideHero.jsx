import { useEffect, useMemo, useState } from "react";

// Di layar sempit, potong adegan ke area pohon + rumah (x 380–1200) supaya
// laut, sabuk bakau, dan permukiman tetap terlihat bersamaan.
const VIEWBOX_LEBAR = "0 120 1200 380";
const VIEWBOX_SEMPIT = "380 105 820 395";
const MQ_LEBAR = "(min-width: 640px)";

function useLayarLebar() {
  const [lebar, setLebar] = useState(() => typeof window === "undefined" || window.matchMedia(MQ_LEBAR).matches);
  useEffect(() => {
    const mq = window.matchMedia(MQ_LEBAR);
    const ubah = () => setLebar(mq.matches);
    ubah();
    mq.addEventListener("change", ubah);
    return () => mq.removeEventListener("change", ubah);
  }, []);
  return lebar;
}

// Profil daratan (x, y). Makin besar y makin rendah. Laut di kiri, permukiman di kanan.
const DARAT = [[0, 398], [200, 390], [400, 372], [560, 356], [700, 342], [820, 326], [900, 308], [1000, 300], [1200, 294]];
// Tanpa sabuk bakau, pantai terkikis: zona pasang surut lebih rendah
const DARAT_TERKIKIS = [[0, 410], [200, 404], [400, 392], [560, 380], [700, 368], [820, 350], [880, 324], [900, 310], [1000, 300], [1200, 294]];

const POHON = [[430, 1.05], [500, 0.9], [565, 1.15], [630, 0.95], [700, 1.1], [760, 0.85], [470, 0.7], [665, 0.75]];

function tinggiDarat(titik, x) {
  for (let i = 0; i < titik.length - 1; i++) {
    const [x1, y1] = titik[i], [x2, y2] = titik[i + 1];
    if (x >= x1 && x <= x2) return y1 + ((x - x1) / (x2 - x1)) * (y2 - y1);
  }
  return titik[titik.length - 1][1];
}
function garisPantai(titik, yAir) {
  for (let x = 0; x <= 1200; x += 4) if (tinggiDarat(titik, x) <= yAir) return x;
  return 1200;
}
const jalur = (titik) => "M" + titik.map(([x, y]) => `${x} ${y}`).join(" L ");

function Pohon({ x, s, titik }) {
  const tanah = tinggiDarat(titik, x);
  const pangkal = tanah - 70 * s; // tempat akar tunjang bercabang
  const puncak = pangkal - 70 * s;
  const akar = [-46, -30, -14, 12, 28, 44].map((d) => d * s);
  return (
    <g>
      {akar.map((d, i) => (
        <path key={i} d={`M${x} ${pangkal} Q ${x + d * 0.35} ${pangkal + 10 * s} ${x + d} ${tinggiDarat(titik, x + d) + 2}`} stroke="#7A3A20" strokeWidth={3.2 * s} fill="none" strokeLinecap="round" />
      ))}
      <path d={`M${x} ${pangkal} L ${x} ${puncak + 18 * s}`} stroke="#7A3A20" strokeWidth={6 * s} strokeLinecap="round" />
      <ellipse cx={x - 26 * s} cy={puncak + 12 * s} rx={38 * s} ry={24 * s} fill="#1E6B12" />
      <ellipse cx={x + 24 * s} cy={puncak + 8 * s} rx={40 * s} ry={26 * s} fill="#3F9416" />
      <ellipse cx={x} cy={puncak - 10 * s} rx={44 * s} ry={28 * s} fill="#6CB21F" />
    </g>
  );
}

function Rumah({ x, titik }) {
  const t = tinggiDarat(titik, x + 30);
  const lantai = t - 34;
  return (
    <g>
      {[6, 30, 54].map((d) => <line key={d} x1={x + d} y1={lantai} x2={x + d} y2={t + 2} stroke="#5A4632" strokeWidth="4" />)}
      <rect x={x} y={lantai - 40} width="60" height="40" fill="#B9845A" />
      <rect x={x + 22} y={lantai - 28} width="14" height="16" fill="#5A4632" />
      <path d={`M${x - 10} ${lantai - 38} L ${x + 30} ${lantai - 70} L ${x + 70} ${lantai - 38} Z`} fill="#7A3E26" />
    </g>
  );
}

export default function TideHero() {
  const [pasang, setPasang] = useState(60);
  const [adaBakau, setAdaBakau] = useState(true);
  const layarLebar = useLayarLebar();
  const titik = adaBakau ? DARAT : DARAT_TERKIKIS;
  const yAir = 402 - pasang * 0.84; // 402 (surut) sampai 318 (pasang)
  const pantai = useMemo(() => garisPantai(titik, yAir), [titik, yAir]);
  const atasDarat = `M0 0 L1200 0 L ${titik.slice().reverse().map(([x, y]) => `${x} ${y}`).join(" L ")} Z`;
  const besarOmbak = adaBakau ? 4 : 10 + pasang * 0.12;
  const keadaan = pasang < 30 ? "surut" : pasang < 70 ? "sedang" : "pasang";

  const keterangan = adaBakau
    ? {
        surut: "Saat air surut, akar tunjang bakau terlihat mencengkeram lumpur. Inilah waktu terbaik untuk menanam bibit.",
        sedang: "Air mulai naik. Rapatnya akar bakau memperlambat arus sehingga lumpur tidak ikut terbawa.",
        pasang: "Saat pasang, gelombang sudah diredam sabuk bakau sebelum sampai ke rumah warga.",
      }[keadaan]
    : {
        surut: "Tanpa bakau, tidak ada akar yang menahan lumpur. Garis pantai perlahan mundur.",
        sedang: "Gelombang langsung menghantam pantai yang terbuka dan mengikis tanah sedikit demi sedikit.",
        pasang: "Saat pasang, gelombang mendekati permukiman karena tidak ada lagi sabuk bakau yang meredamnya.",
      }[keadaan];

  // buih ombak di permukaan air dekat garis pantai; condong ke arah darat
  const puncak = [];
  for (let i = 0; i < 4; i++) {
    const x = pantai - 40 - i * 75;
    if (x > 20) puncak.push(x);
  }
  const label = { surut: "Surut", sedang: "Sedang", pasang: "Pasang" }[keadaan];

  return (
    <figure className="kartu overflow-hidden">
      <div className="relative">
        <svg viewBox={layarLebar ? VIEWBOX_LEBAR : VIEWBOX_SEMPIT} preserveAspectRatio="xMidYMax slice" className="block aspect-[820/395] w-full sm:aspect-auto sm:h-auto" role="img" aria-label={`Ilustrasi pesisir saat air ${keadaan}, ${adaBakau ? "dengan" : "tanpa"} sabuk bakau. ${keterangan}`}>
          <defs>
            <clipPath id="atas-darat"><path d={atasDarat} /></clipPath>
            <linearGradient id="langit" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#E4F3FB" />
              <stop offset="1" stopColor="#FAFDFE" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="1200" height="500" fill="url(#langit)" />
          <path d={`${jalur(titik)} L1200 500 L0 500 Z`} fill="#7A6447" style={{ transition: "d 600ms ease" }} />
          <path d={`${jalur(titik.map(([x, y]) => [x, y + 26]))} L1200 500 L0 500 Z`} fill="#5C4A34" />
          {[920, 1010, 1100].map((x) => <Rumah key={x} x={x} titik={titik} />)}
          {adaBakau && POHON.map(([x, s]) => <Pohon key={x} x={x} s={s} titik={titik} />)}
          <g clipPath="url(#atas-darat)">
            <rect x="0" y={yAir} width="1200" height={500 - yAir} fill="#2A93AE" fillOpacity="0.58" style={{ transition: "y 400ms ease, height 400ms ease" }} />
            <path d={`M0 ${yAir} ${Array.from({ length: 25 }, (_, i) => `Q ${i * 48 + 24} ${yAir - 3} ${i * 48 + 48} ${yAir}`).join(" ")}`} stroke="#FFFFFF" strokeOpacity="0.85" strokeWidth="2" fill="none" />
          </g>
          {puncak.map((x, i) => (
            <path
              key={i}
              d={`M${x - 34} ${yAir} Q ${x - 10} ${yAir - besarOmbak * 1.3} ${x + 8} ${yAir - besarOmbak * 1.15} Q ${x + 2} ${yAir - besarOmbak * 0.5} ${x + 22} ${yAir} Z`}
              fill="#FFFFFF"
              opacity={adaBakau && i > 0 ? 0.45 : 0.9}
            />
          ))}
        </svg>
        <p className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-garis bg-white/90 px-3 py-1.5 text-xs font-semibold text-tinta backdrop-blur sm:left-6 sm:top-6" aria-hidden="true">
          <span className={`h-2 w-2 rounded-full ${adaBakau ? "bg-daun" : "bg-akar"}`} />
          Air {label.toLowerCase()} · {adaBakau ? "dengan bakau" : "tanpa bakau"}
        </p>
      </div>
      <figcaption className="grid gap-5 border-t border-garis p-5 sm:p-7 md:grid-cols-[1fr_auto] md:items-center md:gap-10">
        <div>
          <label htmlFor="pasang" className="label-isian">Ketinggian air</label>
          <div className="flex items-center gap-3 text-sm text-abu">
            <span>Surut</span>
            <input id="pasang" type="range" min="0" max="100" value={pasang} onChange={(e) => setPasang(Number(e.target.value))} className="w-full accent-tinta" aria-valuetext={`Air ${keadaan}`} />
            <span>Pasang</span>
          </div>
        </div>
        <div role="group" aria-label="Kondisi pantai" className="inline-flex w-full rounded-full border border-garis bg-pasang p-1 sm:w-auto">
          {[[true, "Dengan bakau"], [false, "Tanpa bakau"]].map(([v, t]) => (
            <button key={t} type="button" aria-pressed={adaBakau === v} onClick={() => setAdaBakau(v)}
              className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition sm:flex-none ${adaBakau === v ? "bg-tinta text-white shadow-sm" : "text-abu hover:text-tinta"}`}>
              {t}
            </button>
          ))}
        </div>
        <p className="max-w-baca text-lumpur md:col-span-2" aria-live="polite">{keterangan}</p>
      </figcaption>
    </figure>
  );
}
