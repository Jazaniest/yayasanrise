import { Link, useLocation } from "react-router-dom";

const BG_URL = '/assets/forest-bg.jpg';
const LOGO_URL = '/assets/logo.png';
// Pemisahan aset daun
const LEAF_TOP_LEFT = '/assets/pengurus-leaf-kiri.png';
const LEAF_BOTTOM_RIGHT = '/assets/pengurus-leaf-kanan.png';

const menus = [
  { name: "Beranda", path: "/" },
  { name: "Profil", path: "/profil" },
  { name: "Struktur", path: "/struktur" },
  { name: "Pengurus", path: "/pengurus" },
  { name: "Visi & Misi", path: "/visi-misi" },
  { name: "Legalitas", path: "/legalitas" },
  { name: "Galeri", path: "/galeri" },
];

const Pengurus = () => {
  const location = useLocation();
  const daftarPengurus = [1, 2, 3, 4];

  return (
    /* h-full agar kontainer utama mengikuti tinggi konten didalamnya */
    <div className="relative min-h-screen w-full font-sans bg-white">
      
      {/* Background Layer: 
        - Menggunakan absolute (bukan fixed) agar ikut ter-scroll.
        - opacity-30 (atau sesuaikan) untuk efek opasitas yang kamu inginkan.
      */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-left bg-cover opacity-30"
        style={{ 
          backgroundImage: `url(${BG_URL})`,
          backgroundAttachment: 'scroll' 
        }}
      />

      {/* Content Wrapper */}
      <div className="relative z-10">
        
        {/* Header - Dibuat transparan agar menyatu dengan BG */}
        <header className="flex items-center justify-between px-10 py-4 bg-white/60">
          <div className="w-12">
            <img src={LOGO_URL} alt="Logo" className="w-full h-auto" />
          </div>
          <nav className="flex gap-6 md:gap-10 text-gray-700 text-sm font-medium">
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
          <div className="hidden md:block w-12 opacity-0">RISE</div>
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center py-12 px-4 md:px-20">
          
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-16">
            Pengurus
          </h1>

          <div className="w-full max-w-5xl space-y-16 pb-20">
            {daftarPengurus.map((item, index) => (
              <div 
                key={index}
                /* Menggunakan bg-white/80 agar card sedikit lebih solid di atas BG transparan */
                className="relative bg-white/80 border-[3px] border-[#4A7C44] rounded-[35px] p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center md:items-start shadow-sm"
              >
                {/* Daun Kiri Atas */}
                <div className="absolute -top-7 -left-7 w-20 md:w-24">
                  <img src={LEAF_TOP_LEFT} alt="Leaf Top Left" className="w-full h-auto" />
                </div>

                {/* Daun Kanan Bawah */}
                <div className="absolute -bottom-7 -right-7 w-20 md:w-24">
                  <img src={LEAF_BOTTOM_RIGHT} alt="Leaf Bottom Right" className="w-full h-auto" />
                </div>

                {/* Foto Placeholder */}
                <div className="w-48 h-56 bg-gray-200 rounded-2xl shrink-0">
                   {/* <img src="..." alt="Foto Pengurus" className="w-full h-full object-cover rounded-2xl" /> */}
                </div>

                {/* Deskripsi Teks */}
                <div className="text-gray-900 text-justify leading-relaxed flex-1">
                  <p className="text-lg md:text-xl font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Pengurus;