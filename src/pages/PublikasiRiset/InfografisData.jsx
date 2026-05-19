import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const BG_URL = "/assets/forest-bg.jpg";
const LOGO_URL = "/assets/logo.png";

const InfografisData = () => {
  const items = [
    { judul: "Profil Emisi dan Tutupan Lahan Gambut Riau", tema: "Gambut & Iklim" },
    { judul: "Peta Kerentanan Konflik Agraria", tema: "Sosial" },
    { judul: "Potensi Energi Alternatif Desa", tema: "Energi" },
    { judul: "Statistik Pengelolaan Sampah Komunitas", tema: "Sampah" },
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
        <Link to="/publikasi-riset" className="rise-breadcrumb">← Publikasi & Riset</Link>
        <h1 className="text-4xl font-serif text-gray-800 text-center mb-2">Infografis Data</h1>
        <p className="text-center text-gray-600 text-sm mb-8 font-light">
          Visualisasi data sosial-ekologis dari Riau Socio-Ecological Data Center.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {items.map((item) => (
            <div
              key={item.judul}
              className="aspect-4/3 rounded-xl bg-linear-to-br from-emerald-100 via-white to-emerald-50 border border-emerald-100 p-5 flex flex-col justify-end hover:shadow-md transition-shadow"
            >
              <span className="rise-chip text-[10px] w-fit mb-2">{item.tema}</span>
              <h3 className="font-serif text-gray-800 text-sm">{item.judul}</h3>
              <span className="text-xs text-gray-400 mt-2">Segera tersedia</span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center">
          <Link to="/program-kerja/riau-socio-eco" className="rise-chip hover:bg-emerald-100 text-sm">
            Tentang Data Center →
          </Link>
        </p>
      </main>
    </div>
  );
};

export default InfografisData;
