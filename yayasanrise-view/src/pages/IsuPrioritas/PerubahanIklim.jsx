import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
const LOGO_URL = "/assets/logo.png";
import { Link } from "react-router-dom";

const PerubahanIklim = () => {
  const fokus = [
    "Adaptasi dan mitigasi perubahan iklim",
    "Kajian emisi dan kebijakan iklim",
    "Ketahanan masyarakat terhadap dampak iklim",
    "Transisi rendah karbon di tingkat lokal",
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
        </main>
      </div>
    </div>
  );
};

export default PerubahanIklim;
