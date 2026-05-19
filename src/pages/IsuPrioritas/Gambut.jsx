import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const BG_URL = "/assets/forest-bg.jpg";
const LOGO_URL = "/assets/logo.png";

const Gambut = () => {
  const fokusGambut = [
    "Restorasi dan rewetting lahan gambut",
    "Tata kelola berkelanjutan ekosistem gambut",
    "Pencegahan kebakaran lahan gambut",
    "Pendampingan masyarakat sekitar gambut",
  ];
  const fokusMangrove = [
    "Restorasi dan rehabilitasi mangrove",
    "Pemetaan tutupan mangrove Riau",
    "Penguatan mata pencaharian berbasis mangrove",
    "Integrasi data mangrove dalam pusat data RISE",
  ];

  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden">
      <div className="absolute inset-0 z-0 bg-no-repeat bg-left bg-cover opacity-20 pointer-events-none" style={{ backgroundImage: `url(${BG_URL})` }} />
      <header className="rise-header">
        <div className="w-12"><img src={LOGO_URL} alt="Logo" className="w-full h-auto" /></div>
        <Navbar />
        <div className="w-12 opacity-0">RISE</div>
      </header>
      <main className="rise-main max-w-4xl">
        <Link to="/isu-prioritas" className="rise-breadcrumb">← Isu Prioritas</Link>
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-4">Gambut</h1>
        <p className="text-center text-gray-600 max-w-2xl mb-8 font-light leading-relaxed">
          Ekosistem gambut menyimpan karbon besar dan menjadi prioritas restorasi serta
          perlindungan kebijakan di Indonesia, khususnya di wilayah Riau.
        </p>
        <div className="rise-card space-y-5 mb-8">
          <h2 className="rise-section-title">Fokus: Lahan Gambut</h2>
          <ul className="space-y-3 text-gray-700 text-sm md:text-base">
            {fokusGambut.map((f) => (
              <li key={f} className="flex gap-2"><span className="text-rise-green">▸</span>{f}</li>
            ))}
          </ul>
        </div>

        <section id="mangrove" className="scroll-mt-24 w-full">
          <div className="rise-card space-y-5 border-emerald-600/40">
            <span className="rise-chip">Isu terkait</span>
            <h2 className="text-2xl font-serif text-gray-800 -mt-2">Mangrove</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Mangrove merupakan ekosistem pesisir strategis untuk mitigasi iklim, perlindungan
              pesisir, dan kehidupan masyarakat pesisir. RISE mengintegrasikan isu mangrove dalam
              riset dan pusat data sosial-ekologis Riau.
            </p>
            <ul className="space-y-3 text-gray-700 text-sm md:text-base">
              {fokusMangrove.map((f) => (
                <li key={f} className="flex gap-2"><span className="text-rise-green">▸</span>{f}</li>
              ))}
            </ul>
          </div>
        </section>

        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          <Link to="/program-kerja/riau-socio-eco" className="rise-chip hover:bg-emerald-100">Data Center Riau →</Link>
        </div>
      </main>
    </div>
  );
};

export default Gambut;
