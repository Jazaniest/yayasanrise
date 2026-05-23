import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Background from "../../components/Background";

// const BG_URL = "/assets/forest-bg.jpg";
const LOGO_URL = "/assets/logo.png";

const ResearchDevelopment = () => {
  const fokus = [
    "Penelitian lingkungan dan sosial",
    "Kajian perubahan iklim",
    "Restorasi gambut dan ekosistem",
    "Analisis konflik agraria",
    "Kajian ekonomi hijau",
    "Riset energi terbarukan masyarakat",
    "Pengembangan teknologi tepat guna",
    "Pemetaan partisipatif dan data spasial",
  ];

  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden">
      <Background />
      <header className="rise-header">
        <div className="w-12">
          <img src={LOGO_URL} alt="Logo" className="w-full h-auto" />
        </div>
        <Navbar />
        <div className="w-12 opacity-0">RISE</div>
      </header>

      <main className="rise-main">
        <Link to="/program-kerja" className="rise-breadcrumb">← Program Kerja</Link>
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-4">
          Research & Development
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mb-8 leading-relaxed font-light">
          Pusat penelitian, pengembangan inovasi, dan produksi pengetahuan Yayasan RISE.
          Menghasilkan riset aplikatif yang mendukung kebijakan berkelanjutan dan pengambilan
          keputusan berbasis ilmu pengetahuan.
        </p>

        <div className="rise-card space-y-6">
          <h2 className="rise-section-title">Fokus Kegiatan</h2>
          <div className="flex flex-wrap gap-2">
            {fokus.map((item) => (
              <span key={item} className="rise-chip">{item}</span>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed text-justify text-sm md:text-base">
            Kegiatan mencakup kajian lingkungan, sosial, ekonomi hijau, perubahan iklim,
            restorasi ekosistem, serta pengembangan solusi berbasis data dan kebutuhan
            masyarakat di wilayah Riau dan Indonesia.
          </p>
        </div>

        <div className="mt-8 w-full flex flex-wrap justify-center gap-3 text-sm">
          <Link to="/publikasi-riset" className="rise-chip hover:bg-emerald-100 transition-colors">
            Lihat Publikasi & Riset →
          </Link>
          <Link to="/isu-prioritas" className="rise-chip hover:bg-emerald-100 transition-colors">
            Isu Prioritas →
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ResearchDevelopment;
