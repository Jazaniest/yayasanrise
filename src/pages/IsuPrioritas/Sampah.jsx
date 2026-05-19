import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const BG_URL = "/assets/forest-bg.jpg";
const LOGO_URL = "/assets/logo.png";

const Sampah = () => {
  const fokus = [
    "Pengelolaan sampah berbasis komunitas",
    "Ekonomi sirkular dan daur ulang",
    "Kampanye pengurangan sampah plastik",
    "Bank sampah dan usaha hijau skala lokal",
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
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-4">Sampah</h1>
        <p className="text-center text-gray-600 max-w-2xl mb-8 font-light leading-relaxed">
          Pengelolaan sampah yang inklusif dan berkelanjutan mengurangi pencemaran lingkungan
          sekaligus membuka peluang ekonomi hijau bagi masyarakat.
        </p>
        <div className="rise-card">
          <h2 className="rise-section-title">Pendekatan</h2>
          <ul className="space-y-3 text-gray-700 text-sm md:text-base">
            {fokus.map((f) => (
              <li key={f} className="flex gap-2"><span className="text-rise-green">♻</span>{f}</li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <Link to="/program-kerja/community-empowerment" className="rise-chip hover:bg-emerald-100">Community Empowerment →</Link>
        </div>
      </main>
    </div>
  );
};

export default Sampah;
