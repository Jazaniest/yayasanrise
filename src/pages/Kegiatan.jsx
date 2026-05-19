import Navbar from "../components/Navbar";

const BG_URL = '/assets/forest-bg.jpg';
const LOGO_URL = '/assets/logo.png';

const Kegiatan = () => {
  const kegiatan = [
    { judul: "Pelatihan Pengelolaan Sampah Komunitas", kategori: "Pemberdayaan", tahun: "2025" },
    { judul: "Diskusi Publik Transisi Energi Riau", kategori: "Advokasi", tahun: "2025" },
    { judul: "Edukasi Literasi Iklim untuk Pemuda", kategori: "Edukasi", tahun: "2025" },
    { judul: "Pendampingan Restorasi Gambut", kategori: "Lapangan", tahun: "2024" },
    { judul: "Workshop Ekonomi Hijau & UMKM", kategori: "Pemberdayaan", tahun: "2024" },
    { judul: "Peluncuran Data Sosial-Ekologis", kategori: "Riset", tahun: "2024" },
  ];

  return (
    <div className="relative min-h-screen w-full font-sans bg-slate-50 overflow-x-hidden">
      <div className="absolute inset-0 z-0 bg-no-repeat bg-left bg-cover opacity-15 pointer-events-none" style={{ backgroundImage: `url(${BG_URL})` }} />
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="relative z-100 overflow-visible flex items-center justify-between px-10 py-4 bg-white/70 backdrop-blur-md border-b border-gray-100">
          <div className="w-12"><img src={LOGO_URL} alt="Logo" className="w-full h-auto" /></div>
          <Navbar />
          <div className="hidden md:block w-12 opacity-0">RISE</div>
        </header>

        <main className="relative z-0 flex flex-col items-center py-16 px-6 grow max-w-6xl mx-auto w-full">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-3 text-center">Kegiatan</h1>
          <p className="text-gray-600 text-center mb-12 font-light max-w-lg text-sm">
            Dokumentasi kegiatan lapangan, pelatihan, diskusi, dan kampanye Yayasan RISE.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {kegiatan.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:border-rise-green/30 transition-all"
              >
                <div className="aspect-video bg-linear-to-br from-emerald-100 to-emerald-50 flex items-center justify-center relative">
                  <span className="text-emerald-700/40 text-4xl font-serif">{index + 1}</span>
                  <span className="absolute top-3 left-3 rise-chip text-[10px]">{item.kategori}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-gray-800 text-sm mb-1 group-hover:text-rise-green transition-colors">
                    {item.judul}
                  </h3>
                  <span className="text-xs text-gray-400">{item.tahun}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-12 text-xs text-gray-500 italic text-center">
            Foto dokumentasi akan ditampilkan setelah aset media tersedia.
          </p>
        </main>
      </div>
    </div>
  );
};

export default Kegiatan;
