import { Link, useLocation } from "react-router-dom";

const LOGO_URL = '/assets/logo.png';
const LEAF_ICON_URL = '/assets/struktur-leaf.png';

const menus = [
  { name: "Beranda", path: "/" },
  { name: "Profil", path: "/profil" },
  { name: "Struktur", path: "/struktur" },
  { name: "Pengurus", path: "/pengurus" },
  { name: "Visi & Misi", path: "/visi-misi" },
  { name: "Legalitas", path: "/legalitas" },
  { name: "Galeri", path: "/galeri" },
];

const Struktur = () => {
  const location = useLocation();
  const pimpinan = { name: "Nama Pimpinan", position: "Ketua Yayasan" };
  const anggota = [
    { name: "Nama Anggota 1", position: "Sekretaris" },
    { name: "Nama Anggota 2", position: "Bendahara" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* Header (Konsisten dengan Profil) */}
      <header className="flex items-center justify-between px-10 py-4 bg-[#f1f8f1]">
        <div className="w-12">
          <img src={LOGO_URL} alt="Logo" className="w-full h-auto" />
        </div>
        <nav className="flex gap-10 text-gray-700 text-sm font-medium">
            {menus.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                <Link
                    key={item.path}
                    to={item.path}
                    className={
                    isActive
                        ? "text-green-700 border-b-2 border-green-700"
                        : "hover:text-green-700 transition"
                    }
                >
                    {item.name}
                </Link>
                );
            })}
        </nav>
        <div className="w-12 opacity-0">RISE</div>
      </header>

      {/* Main Content Area */}
      <main className="flex flex-col items-center py-20 px-6">
        
        {/* Container Utama Struktur */}
        <div className="flex flex-col items-center w-full max-w-5xl">
          
          {/* Level 1: Pimpinan (Top) */}
          <div className="mb-20">
            <div className="relative group">
              {/* Lingkaran Foto */}
              <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-300 rounded-full border-4 border-white shadow-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
                 {/* <img src={USER_PLACEHOLDER} alt="Pimpinan" className="w-full h-full object-cover" /> */}
              </div>
              
              {/* Asset Daun di Bawah Lingkaran */}
              <div className="absolute left-1/2 -translate-x-1/2 w-10 md:w-12">
                <img src={LEAF_ICON_URL} alt="Leaf Decor" className="w-full h-auto" />
              </div>

              {/* Teks Nama & Jabatan (Opsional) */}
              <div className="mt-8 text-center">
                <h3 className="font-bold text-gray-800 uppercase tracking-wider">{pimpinan.name}</h3>
                <p className="text-green-700 text-sm font-medium">{pimpinan.position}</p>
              </div>
            </div>
          </div>

          {/* Level 2: Anggota (Bottom) */}
          <div className="flex justify-center gap-16 md:gap-40 w-full">
            {anggota.map((item, index) => (
              <div key={index} className="relative group flex flex-col items-center">
                {/* Lingkaran Foto */}
                <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-300 rounded-full border-4 border-white shadow-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
                   {/* <img src={USER_PLACEHOLDER} alt={item.name} className="w-full h-full object-cover" /> */}
                </div>

                {/* Asset Daun di Bawah Lingkaran */}
                <div className="absolute top-40 left-1/2 -translate-x-1/2 w-10 md:w-12">
                  <img src={LEAF_ICON_URL} alt="Leaf Decor" className="w-full h-auto" />
                </div>

                {/* Teks Nama & Jabatan */}
                <div className="mt-8 text-center">
                  <h3 className="font-bold text-gray-800 uppercase tracking-wider">{item.name}</h3>
                  <p className="text-green-700 text-sm font-medium">{item.position}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </main>
    </div>
  );
};

export default Struktur;