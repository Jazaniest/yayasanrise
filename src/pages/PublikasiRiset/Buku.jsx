import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Background from "../../components/Background";

// const BG_URL = "/assets/forest-bg.jpg";
const LOGO_URL = "/assets/logo.png";

const Buku = () => {
  const items = [
    { judul: "Modul Edukasi Perubahan Iklim untuk Komunitas", tahun: "2025", jenis: "Modul" },
    { judul: "Panduan Pengelolaan Sampah Berbasis Komunitas", tahun: "2025", jenis: "Buku panduan" },
    { judul: "Praktik Pertanian Ekologis dan Ketahanan Pangan", tahun: "2024", jenis: "Modul" },
  ];

  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden">
      <Background />
      <header className="rise-header">
        <div className="w-12"><img src={LOGO_URL} alt="Logo" className="w-full h-auto" /></div>
        <Navbar />
        <div className="w-12 opacity-0">RISE</div>
      </header>
      <main className="rise-main max-w-3xl">
        <Link to="/publikasi-riset" className="rise-breadcrumb">← Publikasi & Riset</Link>
        <h1 className="text-4xl font-serif text-gray-800 text-center mb-2">Buku / Modul</h1>
        <p className="text-center text-gray-600 text-sm mb-8 font-light">
          Buku panduan dan modul pelatihan untuk edukasi lingkungan dan pemberdayaan.
        </p>
        <div className="grid gap-4 w-full">
          {items.map((item) => (
            <div key={item.judul} className="rise-card p-5! rounded-xl! flex gap-4 items-start">
              <span className="text-2xl" aria-hidden>📚</span>
              <div>
                <span className="text-[10px] uppercase text-rise-green font-semibold">{item.jenis}</span>
                <h3 className="font-serif text-gray-800 mt-1">{item.judul}</h3>
                <span className="text-xs text-gray-400">{item.tahun}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Buku;
