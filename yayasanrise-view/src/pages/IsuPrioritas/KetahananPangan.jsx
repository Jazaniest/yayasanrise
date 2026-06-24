import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
const LOGO_URL = "/assets/logo.png";
import { Link } from "react-router-dom";

const KetahananPangan = () => {
  const fokus = [
    "Kedaulatan pangan lokal",
    "Pertanian ekologis dan organik",
    "Kebun pangan komunitas",
    "Penguatan rantai pasok pangan adil",
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
        <main className="rise-main">
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
        </main>
      </div>
    </div>
  );
};

export default KetahananPangan;
