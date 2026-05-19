import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const BG_URL = "/assets/forest-bg.jpg";
const LOGO_URL = "/assets/logo.png";

const Insight = () => {
  const artikel = [
    {
      kategori: "Opini",
      judul: "Menuju Transisi Energi Berkeadilan di Riau",
      tanggal: "2025",
      ringkas: "Refleksi kebijakan energi terbarukan dan dampaknya bagi masyarakat lokal di wilayah perkebunan dan pesisir.",
    },
    {
      kategori: "Analisis",
      judul: "Restorasi Gambut: Antara Target Nasional dan Realitas Lapangan",
      tanggal: "2025",
      ringkas: "Tinjauan kritis tantangan restorasi ekosistem gambut dan peran masyarakat setempat.",
    },
    {
      kategori: "Insight",
      judul: "Data Sosial-Ekologis sebagai Alat Advokasi Kebijakan",
      tanggal: "2025",
      ringkas: "Bagaimana pusat data RISE mendukung transparansi dan pengambilan keputusan berbasis bukti.",
    },
  ];

  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden bg-slate-50">
      <div className="absolute inset-0 z-0 bg-no-repeat bg-left bg-cover opacity-15 pointer-events-none" style={{ backgroundImage: `url(${BG_URL})` }} />
      <header className="rise-header">
        <div className="w-12"><img src={LOGO_URL} alt="Logo" className="w-full h-auto" /></div>
        <Navbar />
        <div className="w-12 opacity-0">RISE</div>
      </header>
      <main className="rise-main max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-3">Insight & Opini</h1>
        <p className="text-center text-gray-600 mb-10 font-light text-sm max-w-lg">
          Wacana, analisis, dan opini ahli Yayasan RISE tentang isu sosial-ekologis terkini.
        </p>
        <div className="space-y-5 w-full">
          {artikel.map((a) => (
            <article key={a.judul} className="rise-card p-6! rounded-2xl! hover:shadow-md transition-shadow">
              <span className="rise-chip text-[10px] mb-3">{a.kategori}</span>
              <h2 className="text-lg font-serif text-gray-800 mb-2">{a.judul}</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">{a.ringkas}</p>
              <span className="text-xs text-gray-400">{a.tanggal}</span>
            </article>
          ))}
        </div>
        <p className="mt-8 text-xs text-gray-500 text-center italic">
          Artikel lengkap akan dipublikasikan secara berkala. Kunjungi juga{" "}
          <Link to="/publikasi-riset" className="text-rise-green hover:underline">Publikasi & Riset</Link>.
        </p>
      </main>
    </div>
  );
};

export default Insight;
