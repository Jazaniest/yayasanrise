import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const BG_URL = "/assets/forest-bg.jpg";
const LOGO_URL = "/assets/logo.png";

const KonflikAgraria = () => {
  const fokus = [
    "Advokasi hak atas tanah dan wilayah adat",
    "Pendampingan masyarakat terdampak konflik lahan",
    "Fasilitasi dialog multipihak",
    "Kajian konflik sumber daya alam dan tata ruang",
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
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-4">Konflik Agraria</h1>
        <p className="text-center text-gray-600 max-w-2xl mb-8 font-light leading-relaxed">
          Konflik agraria dan tata kelola lahan menjadi isu krusial di Riau. RISE mendukung
          penyelesaian berkeadilan melalui pendampingan, riset, dan dialog berbasis hak masyarakat.
        </p>
        <div className="rise-card space-y-4">
          {fokus.map((f) => (
            <p key={f} className="p-3 rounded-lg bg-emerald-50/60 text-gray-700 text-sm border-l-4 border-rise-green">{f}</p>
          ))}
        </div>
        <div className="mt-6">
          <Link to="/program-kerja/ecological-conflict-resolution" className="rise-chip hover:bg-emerald-100">Program Resolusi Konflik →</Link>
        </div>
      </main>
    </div>
  );
};

export default KonflikAgraria;
