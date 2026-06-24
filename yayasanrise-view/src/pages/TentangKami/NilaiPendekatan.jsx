import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
const LOGO_URL = "/assets/logo.png";
import { Link } from "react-router-dom";

const NilaiPendekatan = () => {
  const nilai = [
    { title: "Keadilan Sosial-Ekologis", desc: "Hak masyarakat dan kesehatan ekosistem diperlakukan setara dalam setiap intervensi." },
    { title: "Berbasis Pengetahuan", desc: "Keputusan dan advokasi didukung riset, data, dan bukti ilmiah yang aplikatif." },
    { title: "Partisipatif", desc: "Masyarakat terlibat aktif sejak perencanaan hingga evaluasi program." },
    { title: "Kolaboratif", desc: "Sinergi dengan mitra pemerintah, akademisi, CSO, dan sektor swasta." },
    { title: "Transparan", desc: "Keterbukaan informasi dan akuntabilitas dalam pelaksanaan program." },
  ];

  const pendekatan = [
    "Integrasi perspektif sosial, ekonomi, dan lingkungan (pendekatan holistik)",
    "Kombinasi riset, pemberdayaan, edukasi, dan advokasi kebijakan",
    "Pendampingan jangka panjang berbasis kebutuhan lokal",
    "Pemanfaatan data spasial dan partisipatif untuk perencanaan",
  ];

  return (
    <div className="relative min-h-screen w-full font-sans bg-slate-50">
      <Background />
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-white/70 backdrop-blur-md border-b border-gray-100">
          <div className="w-12 shrink-0">
            <Link to="/home">
              <img src={LOGO_URL} alt="Logo" className="w-full h-auto" />
            </Link>
          </div>
          <Navbar />
          <div className="hidden md:block w-12" /> {/* This is the placeholder for centering */}
        </header>
        <main className="rise-main max-w-5xl">
          <Link to="/tentang-kami" className="rise-breadcrumb">← Tentang Kami</Link>
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-10">Nilai & Pendekatan</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-10">
            {nilai.map((n) => (
              <div key={n.title} className="rise-card p-5! rounded-2xl!">
                <h3 className="font-serif text-gray-800 mb-2">{n.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          <div className="rise-card w-full">
            <h2 className="rise-section-title">Pendekatan Kerja</h2>
            <ul className="space-y-3">
              {pendekatan.map((p) => (
                <li key={p} className="flex gap-3 text-gray-700 text-sm md:text-base">
                  <span className="text-rise-green font-bold">→</span>{p}
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default NilaiPendekatan;
