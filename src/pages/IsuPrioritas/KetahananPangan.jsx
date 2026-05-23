import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Background from "../../components/Background";

//  const BG_URL = "/assets/forest-bg.jpg";
const LOGO_URL = "/assets/logo.png";

const KetahananPangan = () => {
  const fokus = [
    "Kedaulatan pangan lokal",
    "Pertanian ekologis dan organik",
    "Kebun pangan komunitas",
    "Penguatan rantai pasok pangan adil",
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
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-4">Ketahanan Pangan</h1>
        <p className="text-center text-gray-600 max-w-2xl mb-8 font-light leading-relaxed">
          Memperkuat kemampuan masyarakat memenuhi kebutuhan pangan secara mandiri, sehat,
          dan berkelanjutan melalui praktik pertanian ramah lingkungan.
        </p>
        <div className="rise-card">
          <h2 className="rise-section-title">Strategi</h2>
          <ul className="space-y-3 text-gray-700">
            {fokus.map((f, i) => (
              <li key={f} className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-rise-green text-white text-xs flex items-center justify-center shrink-0">{i + 1}</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <Link to="/program-kerja/community-empowerment" className="rise-chip hover:bg-emerald-100">Program Pemberdayaan →</Link>
        </div>
      </main>
    </div>
  );
};

export default KetahananPangan;
