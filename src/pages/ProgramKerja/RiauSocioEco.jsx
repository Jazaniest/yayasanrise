import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Background from "../../components/Background";

// const BG_URL = "/assets/forest-bg.jpg";
const LOGO_URL = "/assets/logo.png";

const RiauSocioEco = () => {
  const dataEkologis = ["Gambut", "Mangrove", "Tutupan lahan", "Kebakaran hutan", "Emisi karbon"];
  const dataSosial = ["Konflik agraria", "Desa dampingan", "Wilayah adat", "Kerentanan masyarakat"];
  const dataEnergi = [
    "Potensi biomassa",
    "Energi alternatif desa",
    "Jejak karbon",
    "Data transisi energi",
    "Wilayah rawan krisis energi",
  ];
  const output = [
    "Dashboard data",
    "Peta interaktif",
    "Infografis",
    "Atlas ekologis-sosial",
    "Database energi terbarukan Riau",
  ];

  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden">
      <Background />
      <header className="rise-header">
        <div className="w-12"><img src={LOGO_URL} alt="Logo" className="w-full h-auto" /></div>
        <Navbar />
        <div className="w-12 opacity-0">RISE</div>
      </header>

      <main className="rise-main max-w-5xl">
        <Link to="/program-kerja" className="rise-breadcrumb">← Program Kerja</Link>
        <h1 className="text-3xl md:text-4xl font-serif text-gray-800 text-center mb-4 leading-tight">
          Riau Socio-Ecological Data Center
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mb-10 leading-relaxed font-light text-sm md:text-base">
          Pusat pengumpulan, pengolahan, analisis, dan penyediaan data sosial-ekologis di Riau
          untuk mendukung riset, advokasi kebijakan, dan transparansi informasi publik.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-6">
          <div className="rise-card p-5! space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-rise-green">Data Ekologis</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              {dataEkologis.map((d) => (
                <li key={d} className="flex gap-2"><span className="text-rise-green">•</span>{d}</li>
              ))}
            </ul>
          </div>
          <div className="rise-card p-5! space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-rise-green">Data Sosial</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              {dataSosial.map((d) => (
                <li key={d} className="flex gap-2"><span className="text-rise-green">•</span>{d}</li>
              ))}
            </ul>
          </div>
          <div className="rise-card p-5! space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-rise-green">Energi & Iklim</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              {dataEnergi.map((d) => (
                <li key={d} className="flex gap-2"><span className="text-rise-green">•</span>{d}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rise-card w-full">
          <h2 className="rise-section-title">Bentuk Output</h2>
          <p className="text-xs text-gray-500 mb-4 italic">Pengembangan berkelanjutan — sebagian masih dalam tahap persiapan.</p>
          <div className="flex flex-wrap gap-2">
            {output.map((o) => (
              <span key={o} className="rise-chip">{o}</span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/publikasi-riset/infografis-data" className="rise-chip hover:bg-emerald-100">Infografis Data →</Link>
        </div>
      </main>
    </div>
  );
};

export default RiauSocioEco;
