import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
const LOGO_URL = "/assets/logo.png";
import { Link } from "react-router-dom";

const CommunityEmpowerment = () => {
  const fokus = [
    "Ketahanan Pangan",
    "Pengelolaan Sampah",
    "Ekonomi Hijau & Energi Terbarukan",
  ];

  const kegiatan = [
    "Pelatihan dan pendampingan masyarakat",
    "Pengembangan usaha hijau berkelanjutan",
    "Penguatan kelembagaan komunitas",
    "Program pangan lokal dan pertanian ekologis",
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
            Community Empowerment
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mb-8 leading-relaxed font-light">
            Penguatan kapasitas masyarakat melalui pendekatan partisipatif dan berkelanjutan
            untuk meningkatkan ketahanan ekonomi, pangan, energi, dan lingkungan masyarakat lokal.
          </p>

          <div className="rise-card space-y-6 mb-6">
            <h2 className="rise-section-title">Fokus Program</h2>
            <div className="flex flex-wrap gap-2">
              {fokus.map((item) => (
                <span key={item} className="rise-chip">{item}</span>
              ))}
            </div>
          </div>

          <div className="rise-card">
            <h2 className="rise-section-title">Bentuk Kegiatan</h2>
            <ul className="space-y-3 text-gray-700">
              {kegiatan.map((k) => (
                <li key={k} className="flex gap-3 text-sm md:text-base">
                  <span className="text-rise-green shrink-0">●</span>
                  {k}
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CommunityEmpowerment;
