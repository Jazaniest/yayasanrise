import { Link } from 'react-router-dom';
import Navbar from "../../components/Navbar";

const LOGO_URL = '/assets/logo.png';
const BG_URL = '/assets/forest-bg.jpg';

const PublikasiRiset = () => {
  const kategori = [
    {
      title: "Artikel Ilmiah",
      desc: "Publikasi ilmiah hasil penelitian lingkungan, sosial, dan kebijakan berkelanjutan.",
      path: "/publikasi-riset/artikel-ilmiah",
      icon: "📄",
    },
    {
      title: "Policy Brief",
      desc: "Ringkasan kebijakan berbasis bukti untuk pengambil keputusan dan pemangku kepentingan.",
      path: "/publikasi-riset/policy-brief",
      icon: "📋",
    },
    {
      title: "Laporan Penelitian",
      desc: "Laporan lengkap kajian lapangan, analisis data, dan temuan strategis.",
      path: "/publikasi-riset/laporan-penelitian",
      icon: "📊",
    },
    {
      title: "Buku / Modul",
      desc: "Buku panduan, modul pelatihan, dan materi edukasi lingkungan.",
      path: "/publikasi-riset/buku",
      icon: "📚",
    },
    {
      title: "Infografis Data",
      desc: "Visualisasi data sosial-ekologis yang mudah dipahami publik luas.",
      path: "/publikasi-riset/infografis-data",
      icon: "📈",
    },
  ];

  return (
    <div className="relative min-h-screen bg-slate-50 font-sans overflow-x-hidden">
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-center bg-cover opacity-15 pointer-events-none"
        style={{ backgroundImage: `url(${BG_URL})` }}
      />
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="relative z-100 overflow-visible flex items-center justify-between px-6 md:px-12 py-4 bg-white/70 backdrop-blur-md shadow-xs border-b border-gray-100">
          <div className="w-12">
            <img src={LOGO_URL} alt="Logo" className="w-full h-auto" />
          </div>
          <Navbar />
          <div className="hidden md:block w-12 opacity-0">RISE</div>
        </header>

        <main className="relative z-0 grow w-full max-w-6xl mx-auto px-4 md:px-8 py-16 flex flex-col items-center">
          <div className="text-center max-w-2xl mb-14 space-y-3">
            <h1 className="text-4xl md:text-5xl font-serif text-gray-800 tracking-wide">
              Publikasi & Riset
            </h1>
            <div className="w-16 h-1 bg-rise-green mx-auto rounded-full" />
            <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed pt-2">
              Repositori pengetahuan Yayasan RISE — dari artikel ilmiah hingga infografis data untuk mendukung advokasi dan kebijakan berkelanjutan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
            {kategori.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="group flex gap-5 p-6 bg-white/90 border border-gray-100 rounded-2xl hover:border-rise-green/35 hover:shadow-md transition-all"
              >
                <span className="text-3xl shrink-0" aria-hidden>{item.icon}</span>
                <div>
                  <h3 className="text-lg font-serif text-gray-800 group-hover:text-emerald-800 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PublikasiRiset;
