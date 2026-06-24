import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
const LOGO_URL = "/assets/logo.png";
import { Link } from "react-router-dom";

const EnvironmentalEducation = () => {
  const tema = [
    "Perubahan iklim",
    "Gambut dan ekosistem",
    "Pengelolaan sampah",
    "Energi terbarukan",
    "Gaya hidup rendah karbon",
    "Ekonomi hijau",
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
            Environmental Education
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mb-8 leading-relaxed font-light">
            Meningkatkan kesadaran publik dan literasi lingkungan melalui pendidikan, kampanye,
            pelatihan, dan penyebarluasan informasi untuk perubahan perilaku berkelanjutan.
          </p>

          <div className="rise-card">
            <h2 className="rise-section-title">Tema Edukasi</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {tema.map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-3 p-4 rounded-xl bg-linear-to-r from-emerald-50/80 to-white border border-emerald-100/50"
                >
                  <span className="w-2 h-2 rounded-full bg-rise-green shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EnvironmentalEducation;
