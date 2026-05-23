import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Background from "../../components/Background";

// const BG_URL = "/assets/forest-bg.jpg"; 
const LOGO_URL = "/assets/logo.png";

const PerubahanIklim = () => {
  const fokus = [
    "Adaptasi dan mitigasi perubahan iklim",
    "Kajian emisi dan kebijakan iklim",
    "Ketahanan masyarakat terhadap dampak iklim",
    "Transisi rendah karbon di tingkat lokal",
  ];

  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden">
      {/* <div className="absolute inset-0 z-0 bg-no-repeat bg-left bg-cover opacity-20 pointer-events-none" style={{ backgroundImage: `url(${BG_URL})` }} /> */}
      <Background />
      <header className="rise-header">
        <div className="w-12"><img src={LOGO_URL} alt="Logo" className="w-full h-auto" /></div>
        <Navbar />
        <div className="w-12 opacity-0">RISE</div>
      </header>
      <main className="rise-main">
        <Link to="/isu-prioritas" className="rise-breadcrumb">← Isu Prioritas</Link>
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-4">Perubahan Iklim</h1>
        <p className="text-center text-gray-600 max-w-2xl mb-8 font-light leading-relaxed">
          Krisis iklim menuntut aksi adaptasi dan mitigasi berbasis pengetahuan serta partisipasi
          masyarakat di wilayah rawan, termasuk Riau sebagai lanskap gambut dan kehutanan penting.
        </p>
        <div className="rise-card space-y-5">
          <h2 className="rise-section-title">Area Prioritas</h2>
          <ul className="space-y-3 text-gray-700 text-sm md:text-base">
            {fokus.map((f) => (
              <li key={f} className="flex gap-2"><span className="text-rise-green">▸</span>{f}</li>
            ))}
          </ul>
        </div>
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          <Link to="/program-kerja/research-development" className="rise-chip hover:bg-emerald-100">Program R&D →</Link>
          <Link to="/program-kerja/environmental-education" className="rise-chip hover:bg-emerald-100">Edukasi Lingkungan →</Link>
        </div>
      </main>
    </div>
  );
};

export default PerubahanIklim;
