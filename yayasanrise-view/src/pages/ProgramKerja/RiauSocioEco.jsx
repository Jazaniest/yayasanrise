import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
const LOGO_URL = "/assets/logo.png";
import { Link } from "react-router-dom";

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
        <main className="rise-main max-w-5xl">
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
        </main>
      </div>
    </div>
  );
};

export default RiauSocioEco;
