import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const BG_URL = "/assets/forest-bg.jpg";
const LOGO_URL = "/assets/logo.png";

const EkonomiHijau = () => {
  const fokus = [
    "Pengembangan usaha hijau berkelanjutan",
    "Ekonomi kreatif berbasis sumber daya alam",
    "Pendampingan UMKM ramah lingkungan",
    "Kajian kebijakan ekonomi hijau",
  ];

  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden">
      <div className="absolute inset-0 z-0 bg-no-repeat bg-left bg-cover opacity-20 pointer-events-none" style={{ backgroundImage: `url(${BG_URL})` }} />
      <header className="rise-header">
        <div className="w-12"><img src={LOGO_URL} alt="Logo" className="w-full h-auto" /></div>
        <Navbar />
        <div className="w-12 opacity-0">RISE</div>
      </header>
      <main className="rise-main">
        <Link to="/isu-prioritas" className="rise-breadcrumb">← Isu Prioritas</Link>
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-4">Ekonomi Hijau</h1>
        <p className="text-center text-gray-600 max-w-2xl mb-8 font-light leading-relaxed">
          Model ekonomi yang mengharmoniskan kesejahteraan masyarakat dengan pelestarian
          lingkungan melalui inovasi, kewirausahaan, dan kebijakan berkelanjutan.
        </p>
        <div className="rise-card">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {fokus.map((f) => (
              <div key={f} className="p-4 rounded-xl bg-linear-to-br from-emerald-50 to-white border border-emerald-100 text-gray-700 text-sm">
                {f}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex gap-2 flex-wrap justify-center">
          <Link to="/program-kerja/community-empowerment" className="rise-chip hover:bg-emerald-100">Pemberdayaan →</Link>
          <Link to="/program-kerja/research-development" className="rise-chip hover:bg-emerald-100">Kajian Riset →</Link>
        </div>
      </main>
    </div>
  );
};

export default EkonomiHijau;
