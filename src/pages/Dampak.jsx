import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Background from "../components/Background";

// const BG_URL = "/assets/forest-bg.jpg";
const LOGO_URL = "/assets/logo.png";

const Dampak = () => {
  const statistik = [
    { angka: "15+", label: "Desa & komunitas dampingan", icon: "🏘️" },
    { angka: "20+", label: "Kegiatan edukasi & pelatihan", icon: "📚" },
    { angka: "10+", label: "Publikasi & kajian kebijakan", icon: "📄" },
    { angka: "5", label: "Bidang program strategis", icon: "🌱" },
  ];
  const cerita = [
    "Pendampingan masyarakat dalam pengelolaan sampah dan ekonomi sirkular skala desa.",
    "Kajian dan advokasi terkait konflik agraria serta hak atas wilayah adat.",
    "Pelatihan literasi iklim dan energi terbarukan bagi pemuda dan perempuan.",
  ];

  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden bg-slate-50">
      <Background />
      <header className="rise-header">
        <div className="w-12"><img src={LOGO_URL} alt="Logo" className="w-full h-auto" /></div>
        <Navbar />
        <div className="w-12 opacity-0">RISE</div>
      </header>
      <main className="rise-main max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-3">Dampak Kami</h1>
        <p className="text-center text-gray-600 mb-12 font-light max-w-xl">
          Kontribusi nyata Yayasan RISE bagi masyarakat dan ekosistem di Riau — diukur melalui program, publikasi, dan kolaborasi.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-12">
          {statistik.map((s) => (
            <div key={s.label} className="rise-stat">
              <span className="text-2xl mb-2" aria-hidden>{s.icon}</span>
              <span className="text-3xl font-serif text-rise-green font-light">{s.angka}</span>
              <span className="text-xs text-gray-600 text-center mt-2 leading-snug">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="rise-card w-full">
          <h2 className="rise-section-title">Cerita Dampak</h2>
          <ul className="space-y-4">
            {cerita.map((c) => (
              <li key={c} className="flex gap-3 text-gray-700 text-sm md:text-base border-l-2 border-rise-green pl-4">
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-gray-500 italic">
            Angka dan narasi akan diperbarui sesuai dokumentasi program terbaru.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link to="/kegiatan" className="rise-chip hover:bg-emerald-100">Lihat Kegiatan →</Link>
        </div>
      </main>
    </div>
  );
};

export default Dampak;
