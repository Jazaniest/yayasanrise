import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Background from "../../components/Background";

// const BG_URL = "/assets/forest-bg.jpg";
const LOGO_URL = "/assets/logo.png";

const LaporanPenelitian = () => {
  const items = [
    { judul: "Laporan Kajian Lapangan Konflik Agraria di Riau", tahun: "2025", status: "Dalam persiapan" },
    { judul: "Laporan Pemetaan Partisipatif Tutupan Lahan", tahun: "2024", status: "Dalam persiapan" },
    { judul: "Laporan Program Pengelolaan Sampah Komunitas", tahun: "2024", status: "Dalam persiapan" },
  ];

  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden">
      {/* <div className="absolute inset-0 z-0 bg-no-repeat bg-left bg-cover opacity-20 pointer-events-none" style={{ backgroundImage: `url(${BG_URL})` }} /> */}
      <Background />
      <header className="rise-header">
        <div className="w-12"><img src={LOGO_URL} alt="Logo" className="w-full h-auto" /></div>
        <Navbar />
        <div className="w-12 opacity-0">RISE</div>
      </header>
      <main className="rise-main max-w-3xl">
        <Link to="/publikasi-riset" className="rise-breadcrumb">← Publikasi & Riset</Link>
        <h1 className="text-4xl font-serif text-gray-800 text-center mb-2">Laporan Penelitian</h1>
        <p className="text-center text-gray-600 text-sm mb-8 font-light">
          Laporan lengkap hasil kajian lapangan, analisis data, dan temuan strategis.
        </p>
        <div className="space-y-3 w-full">
          {items.map((item) => (
            <div key={item.judul} className="rise-pub-row">
              <div>
                <h3 className="font-medium text-gray-800 text-sm">{item.judul}</h3>
                <span className="text-xs text-gray-400">{item.tahun} · Laporan</span>
              </div>
              <span className="text-xs text-gray-500">{item.status}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LaporanPenelitian;
