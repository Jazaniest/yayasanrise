import { Link } from 'react-router-dom';
import Navbar from "../../components/Navbar";
import Background from '../../components/Background';

const LOGO_URL = '/assets/logo.png';

const PublikasiRiset = () => {
  const kategori = [
    {
      title: "Artikel Ilmiah",
      badge: "Artikel",
      desc: "Publikasi ilmiah hasil penelitian lingkungan, sosial, dan kebijakan berkelanjutan.",
      path: "/publikasi-riset/artikel-ilmiah",
    },
    {
      title: "Policy Brief",
      badge: "Policy",
      desc: "Ringkasan kebijakan berbasis bukti untuk pengambil keputusan dan pemangku kepentingan.",
      path: "/publikasi-riset/policy-brief",
    },
    {
      title: "Laporan Penelitian",
      badge: "Laporan",
      desc: "Laporan lengkap kajian lapangan, analisis data, dan temuan strategis.",
      path: "/publikasi-riset/laporan-penelitian",
    },
    {
      title: "Buku / Modul",
      badge: "Buku",
      desc: "Buku panduan, modul pelatihan, dan materi edukasi lingkungan.",
      path: "/publikasi-riset/buku",
    },
    {
      title: "Infografis Data",
      badge: "Infografis",
      desc: "Visualisasi data sosial-ekologis yang mudah dipahami publik luas.",
      path: "/publikasi-riset/infografis-data",
    },
  ];

  return (
    <div className="relative min-h-screen bg-slate-50 font-sans overflow-x-hidden">
      <Background />
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* Header / Navbar */}
        <header className="relative z-100 overflow-visible flex items-center justify-between px-6 md:px-12 py-4 bg-white/70 backdrop-blur-md shadow-xs border-b border-gray-100">
          <div className="w-12">
            <img src={LOGO_URL} alt="Logo" className="w-full h-auto" />
          </div>
          <Navbar />
          <div className="hidden md:block w-12 opacity-0">RISE</div>
        </header>

        {/* Main Content */}
        <main className="relative z-0 grow w-full max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col items-center">

          {/* Title Block */}
          <div className="text-center max-w-2xl mb-16 space-y-3">
            <h1 className="text-4xl md:text-5xl font-serif text-gray-800 tracking-wide">
              Publikasi & Riset
            </h1>
            <div className="w-16 h-1 bg-rise-green mx-auto rounded-full" />
            <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed pt-2">
              Repositori pengetahuan Yayasan RISE — dari artikel ilmiah hingga infografis data untuk mendukung advokasi dan kebijakan berkelanjutan.
            </p>
          </div>

          {/* Grid Kategori */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {kategori.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className="group flex flex-col justify-between p-6 bg-white/80 backdrop-blur-xs border border-emerald-100/40 rounded-2xl hover:bg-white hover:border-[#4A7C44]/40 transition-all duration-350 shadow-xs hover:shadow-md hover:-translate-y-1 cursor-pointer"
              >
                <div>
                  {/* Badge Penomoran */}
                  <span className="text-xs font-mono text-[#4A7C44] font-semibold bg-emerald-50 border border-emerald-100/60 px-3 py-1 rounded-full shadow-2xs">
                    {String(index + 1).padStart(2, '0')} — {item.badge}
                  </span>

                  {/* Judul */}
                  <h3 className="text-xl font-serif text-gray-800 mt-5 mb-2.5 group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h3>

                  {/* Deskripsi */}
                  <p className="text-gray-600 text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                {/* Indikator Panah */}
                <div className="flex items-center justify-end mt-6 text-[#4A7C44] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                  <span className="text-xs font-medium mr-1.5">Lihat detail</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
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