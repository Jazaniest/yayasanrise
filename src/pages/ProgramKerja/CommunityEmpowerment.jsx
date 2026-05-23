import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Background from "../../components/Background";

// const BG_URL = "/assets/forest-bg.jpg";
const LOGO_URL = "/assets/logo.png";

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
    <div className="relative min-h-screen font-sans overflow-x-hidden">
      <Background />
      <header className="rise-header">
        <div className="w-12"><img src={LOGO_URL} alt="Logo" className="w-full h-auto" /></div>
        <Navbar />
        <div className="w-12 opacity-0">RISE</div>
      </header>

      <main className="rise-main">
        <Link to="/program-kerja" className="rise-breadcrumb">← Program Kerja</Link>
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

        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
          <Link to="/isu-prioritas/ketahanan-pangan" className="rise-chip hover:bg-emerald-100">Ketahanan Pangan →</Link>
          <Link to="/isu-prioritas/sampah" className="rise-chip hover:bg-emerald-100">Pengelolaan Sampah →</Link>
        </div>
      </main>
    </div>
  );
};

export default CommunityEmpowerment;
