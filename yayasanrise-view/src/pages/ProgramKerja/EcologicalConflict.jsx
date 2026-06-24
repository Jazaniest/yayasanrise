import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
const LOGO_URL = "/assets/logo.png";
import { Link } from "react-router-dom";

const EcologicalConflict = () => {
  const fokus = [
    "Konflik sumber daya alam",
    "Konflik tata kelola energi dan lahan",
    "Pendampingan masyarakat terdampak industri ekstraktif",
    "Dialog transisi energi berkeadilan",
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
            Ecological Conflict Resolution
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mb-8 leading-relaxed font-light">
            Penyelesaian konflik sosial dan ekologis secara dialogis, inklusif, dan berkeadilan
            melalui pendampingan, fasilitasi multipihak, dan penguatan hak masyarakat.
          </p>

          <div className="rise-card space-y-6">
            <h2 className="rise-section-title">Fokus Kegiatan</h2>
            <ul className="space-y-4">
              {fokus.map((item) => (
                <li key={item} className="flex gap-3 p-4 rounded-xl bg-emerald-50/50 border border-emerald-100/60 text-gray-700 text-sm md:text-base">
                  <span className="font-serif text-rise-green font-bold shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 text-sm leading-relaxed border-t border-emerald-100 pt-4">
              Pendekatan resolusi konflik berbasis keberlanjutan dan keadilan sosial-ekologis,
              menghubungkan advokasi kebijakan dengan kebutuhan masyarakat di lapangan.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EcologicalConflict;
