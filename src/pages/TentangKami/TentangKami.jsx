import { Link } from 'react-router-dom';
import Navbar from "../../components/Navbar";

// --- Assets Configuration ---
const LOGO_URL = '/assets/logo.png';
const BG_URL = '/assets/forest-bg.jpg';
// const LEAF_LEFT_URL = '/assets/profil-leaf-kiri.png';
// const LEAF_RIGHT_URL = '/assets/profil-leaf-kanan.png';

const TentangKami = () => {
  // Data array untuk 5 sub-menu tentang kami
  const subMenus = [
    {
      title: "Profil Yayasan",
      desc: "Mengenal lebih dalam sejarah, latar belakang, dan dedikasi Yayasan RISE.",
      path: "/tentang-kami/profil"
    },
    {
      title: "Visi & Misi",
      desc: "Cita-cita besar dan langkah strategis kami dalam menjaga harmoni ekologi.",
      path: "/tentang-kami/visi-misi"
    },
    {
      title: "Nilai & Pendekatan",
      desc: "Prinsip dasar dan metodologi kerja holistik yang kami terapkan di lapangan.",
      path: "/tentang-kami/nilai-pendekatan"
    },
    {
      title: "Legalitas",
      desc: "Transparansi dokumen hukum dan izin resmi operasional yayasan.",
      path: "/tentang-kami/legalitas"
    },
    {
      title: "Tim & Tenaga Pakar",
      desc: "Sinergi para profesional dan pakar ekologi di balik gerakan RISE.",
      path: "/tentang-kami/tim-pakar"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      {/* Background Layer (Scrollable & Opacity) */}
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-left bg-cover opacity-40 pointer-events-none"
        style={{
          backgroundImage: `url(${BG_URL})`,
          backgroundAttachment: 'scroll'
        }}
      />

      {/* Header / Navbar (Konsisten dengan tema Light) */}
      <header className="flex items-center justify-between px-10 py-4 bg-[#f1f8f1]">
        <div className="w-12">
          <img src={LOGO_URL} alt="Logo" className="w-full h-auto" />
        </div>
        <Navbar />
        <div className="w-12 italic opacity-0">RISE</div> {/* Spacer balance */}
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center py-12 px-6">

        {/* Title Utama */}
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4 tracking-wide text-center">
          Tentang Kami
        </h1>
        <p className="text-gray-500 text-center max-w-xl mb-12 font-light">
          Gerakan kolaboratif untuk mengintegrasikan pemberdayaan sosial masyarakat dan pelestarian ekosistem lingkungan di Indonesia.
        </p>

        {/* Kontainer Utama dengan Border Hijau Khas RISE */}
        {/* <div className="relative w-full max-w-6xl border-[3px] border-[#4A7C44] rounded-[40px] md:rounded-[60px] p-8 md:p-16 bg-white shadow-sm pb-24 md:pb-32"> */}

        {/* Grid Sub-Menu */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {subMenus.map((menu, index) => (
            <Link
              key={index}
              to={menu.path}
              className="group flex flex-col justify-between p-6 bg-[#fcfdfc] border border-gray-100 rounded-2xl hover:bg-[#f1f8f1] hover:border-[#4A7C44]/30 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
            >
              <div>
                {/* Penomoran Estetik */}
                <span className="text-xs font-mono text-green-700 font-bold bg-green-100/60 px-2.5 py-1 rounded-full">
                  0{index + 1}
                </span>
                {/* Judul Sub-Menu */}
                <h3 className="text-xl font-serif text-gray-800 mt-4 mb-2 group-hover:text-green-800 transition-colors">
                  {menu.title}
                </h3>
                {/* Deskripsi Singkat */}
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  {menu.desc}
                </p>
              </div>

              {/* Indikator Panah saat di-hover */}
              <div className="flex items-center justify-end mt-6 text-green-700 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <span className="text-xs font-medium mr-1">Buka</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Dekorasi Aset Daun di Pojok Bawah (Konsisten dengan Profil) */}
        {/* <div className="absolute bottom-6 left-6 w-16 md:w-24 pointer-events-none select-none">
            <img src={LEAF_LEFT_URL} alt="Dekorasi Daun Kiri" className="w-full h-auto" />
          </div>
          
          <div className="absolute bottom-6 right-6 w-16 md:w-24 pointer-events-none select-none">
            <img src={LEAF_RIGHT_URL} alt="Dekorasi Daun Kanan" className="w-full h-auto" />
          </div> */}

        {/* </div> */}
      </main>
    </div>
  );
};

export default TentangKami;