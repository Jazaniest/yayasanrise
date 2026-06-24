import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
const LOGO_URL = "/assets/logo.png";
import { Link } from "react-router-dom";

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
    <div className="relative min-h-screen w-full font-sans bg-slate-50">
      <Background />
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-white/70 backdrop-blur-md border-b border-gray-100">
          <div className="w-12 flex-shrink-0">
            <Link to="/home">
              <img src={LOGO_URL} alt="Logo" className="w-full h-auto" />
            </Link>
          </div>
          <Navbar />
          <div className="hidden md:block w-12" /> {/* This is the placeholder for centering */}
        </header>
        <main className="rise-main">
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
        </main>
      </div>
    </div>
  );
};

export default ResearchDevelopment;
