import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Background from "../../components/Background";

// const BG_URL = "/assets/forest-bg.jpg";
const LOGO_URL = "/assets/logo.png";

const Energi = () => {
  const fokus = [
    "Transisi energi terbarukan berkeadilan",
    "Riset potensi biomassa dan energi alternatif desa",
    "Dialog kebijakan energi berkelanjutan",
    "Penguatan energi masyarakat di wilayah terpencil",
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
        <Link to="/isu-prioritas" className="rise-breadcrumb">← Isu Prioritas</Link>
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-4">Energi</h1>
        <p className="text-center text-gray-600 max-w-2xl mb-8 font-light leading-relaxed">
          Mendorong transisi menuju energi bersih dan terbarukan yang adil bagi masyarakat,
          sekaligus mengurangi ketergantungan pada sumber energi yang merusak ekosistem.
        </p>
        <div className="rise-card">
          <h2 className="rise-section-title">Prioritas Kerja</h2>
          <div className="flex flex-wrap gap-2">
            {fokus.map((f) => <span key={f} className="rise-chip">{f}</span>)}
          </div>
        </div>
        <div className="mt-6">
          <Link to="/program-kerja/ecological-conflict-resolution" className="rise-chip hover:bg-emerald-100">Resolusi Konflik Energi →</Link>
        </div>
      </main>
    </div>
  );
};

export default Energi;
