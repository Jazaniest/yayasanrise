import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const BG_URL = "/assets/forest-bg.jpg";
const LOGO_URL = "/assets/logo.png";

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
    <div className="relative min-h-screen font-sans overflow-x-hidden">
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-left bg-cover opacity-20 pointer-events-none"
        style={{ backgroundImage: `url(${BG_URL})` }}
      />
      <header className="rise-header">
        <div className="w-12"><img src={LOGO_URL} alt="Logo" className="w-full h-auto" /></div>
        <Navbar />
        <div className="w-12 opacity-0">RISE</div>
      </header>

      <main className="rise-main">
        <Link to="/program-kerja" className="rise-breadcrumb">← Program Kerja</Link>
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

        <div className="mt-8">
          <Link to="/kegiatan" className="rise-chip hover:bg-emerald-100">Lihat Kegiatan →</Link>
        </div>
      </main>
    </div>
  );
};

export default EnvironmentalEducation;
