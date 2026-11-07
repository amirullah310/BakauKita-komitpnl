// Ilustrasi asli buatan tim (SVG), tanpa foto/aset pihak lain
const LUMPUR = "#6B5940", AIR = "#2F6F6A", DAUN = "#3F9416", DAUN2 = "#6CB21F", BATANG = "#7A3A20";

function Dasar({ children, label }) {
  return (
    <svg viewBox="0 0 320 240" className="block h-auto w-full" role="img" aria-label={label}>
      <rect width="320" height="240" fill="#EAF4EC" />
      {children}
    </svg>
  );
}
const Lumpur = ({ y = 190 }) => (
  <>
    <rect x="0" y={y - 16} width="320" height="16" fill={AIR} fillOpacity="0.35" />
    <path d={`M0 ${y} Q 80 ${y - 6} 160 ${y} T 320 ${y} V240 H0 Z`} fill={LUMPUR} />
  </>
);
const Tajuk = ({ x, y, s = 1 }) => (
  <>
    <ellipse cx={x - 34 * s} cy={y + 14 * s} rx={44 * s} ry={26 * s} fill="#1E6B12" />
    <ellipse cx={x + 32 * s} cy={y + 10 * s} rx={46 * s} ry={28 * s} fill={DAUN} />
    <ellipse cx={x} cy={y - 10 * s} rx={52 * s} ry={32 * s} fill={DAUN2} />
  </>
);

export function Bakau() {
  return (
    <Dasar label="Ilustrasi pohon bakau Rhizophora dengan akar tunjang dan buah panjang menggantung">
      <Lumpur />
      {[-70, -46, -22, 22, 46, 70].map((d) => <path key={d} d={`M160 128 Q ${160 + d * 0.4} 140 ${160 + d} 192`} stroke={BATANG} strokeWidth="5" fill="none" strokeLinecap="round" />)}
      <path d="M160 130 V70" stroke={BATANG} strokeWidth="9" strokeLinecap="round" />
      <Tajuk x={160} y={62} />
      {[120, 150, 186, 210].map((x) => <path key={x} d={`M${x} 78 v34`} stroke="#4E8A14" strokeWidth="4" strokeLinecap="round" />)}
    </Dasar>
  );
}
export function ApiApi() {
  return (
    <Dasar label="Ilustrasi pohon api-api Avicennia dengan akar napas tegak seperti pensil di sekitar batang">
      <Lumpur />
      <path d="M160 192 V80" stroke={BATANG} strokeWidth="10" strokeLinecap="round" />
      <Tajuk x={160} y={70} s={0.95} />
      {[40, 62, 84, 104, 124, 196, 216, 236, 258, 280].map((x, i) => <path key={x} d={`M${x} 192 v${-14 - (i % 3) * 5}`} stroke={BATANG} strokeWidth="4" strokeLinecap="round" />)}
    </Dasar>
  );
}
export function Pedada() {
  return (
    <Dasar label="Ilustrasi pohon pedada Sonneratia dengan akar napas berbentuk kerucut dan buah bulat">
      <Lumpur />
      <path d="M160 192 V84" stroke={BATANG} strokeWidth="11" strokeLinecap="round" />
      <Tajuk x={160} y={70} />
      {[46, 78, 106, 214, 242, 274].map((x, i) => <path key={x} d={`M${x - 7} 192 L ${x} ${170 - (i % 2) * 8} L ${x + 7} 192 Z`} fill={BATANG} />)}
      {[128, 196].map((x) => <g key={x}><circle cx={x} cy="104" r="11" fill="#9BCB3A" /><path d={`M${x - 10} 98 l10 -6 l10 6`} stroke="#1E6B12" strokeWidth="3" fill="none" /></g>)}
    </Dasar>
  );
}
export function Tanjang() {
  return (
    <Dasar label="Ilustrasi pohon tanjang Bruguiera dengan akar lutut yang melengkung keluar dari lumpur">
      <Lumpur />
      <path d="M160 192 V84" stroke={BATANG} strokeWidth="10" strokeLinecap="round" />
      <Tajuk x={160} y={72} s={0.9} />
      {[48, 92, 214, 258].map((x) => <path key={x} d={`M${x - 14} 194 Q ${x - 10} 168 ${x} 168 Q ${x + 10} 168 ${x + 14} 194`} stroke={BATANG} strokeWidth="5" fill="none" strokeLinecap="round" />)}
    </Dasar>
  );
}
export function Kepiting() {
  return (
    <Dasar label="Ilustrasi kepiting bakau di atas lumpur">
      <Lumpur y={200} />
      <g transform="translate(160 158)">
        {[-1, 1].map((k) => (
          <g key={k}>
            {[0, 12, 24].map((d) => <path key={d} d={`M${k * 38} ${4 + d * 0.4} q ${k * 22} ${6 + d * 0.3} ${k * 34} ${26 + d * 0.2}`} stroke="#5B3A22" strokeWidth="5" fill="none" strokeLinecap="round" />)}
            <path d={`M${k * 40} -10 q ${k * 26} -18 ${k * 46} -30`} stroke="#7A4A2A" strokeWidth="9" strokeLinecap="round" fill="none" />
            <ellipse cx={k * 92} cy="-44" rx="18" ry="13" fill="#8C5530" />
            <line x1={k * 16} y1="-24" x2={k * 20} y2="-40" stroke="#5B3A22" strokeWidth="3" />
            <circle cx={k * 20} cy="-42" r="4" fill="#2B2117" />
          </g>
        ))}
        <ellipse cx="0" cy="0" rx="52" ry="32" fill="#7A4A2A" />
        <ellipse cx="0" cy="-6" rx="40" ry="20" fill="#8C5530" />
      </g>
    </Dasar>
  );
}
export function Glodok() {
  return (
    <Dasar label="Ilustrasi ikan glodok bertengger di atas lumpur saat air surut">
      <Lumpur y={186} />
      <g transform="translate(150 160)">
        <path d="M-70 4 Q -40 -26 20 -22 Q 56 -20 70 0 Q 50 18 0 18 Q -40 18 -70 4 Z" fill="#7C8A6A" />
        <path d="M-70 4 L -98 -14 L -94 22 Z" fill="#6A7858" />
        <path d="M-20 -22 Q 0 -46 26 -22" fill="#8E9C78" stroke="#5E6B4C" strokeWidth="2" />
        <path d="M10 14 q 10 14 26 16" stroke="#5E6B4C" strokeWidth="5" strokeLinecap="round" fill="none" />
        <circle cx="50" cy="-22" r="9" fill="#E3EEE9" stroke="#5E6B4C" strokeWidth="2" />
        <circle cx="52" cy="-22" r="4" fill="#2B2117" />
        {[-40, -20, 0].map((x) => <circle key={x} cx={x} cy="-2" r="3" fill="#5E6B4C" />)}
      </g>
    </Dasar>
  );
}
