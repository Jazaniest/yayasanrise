import { Link, useLocation } from "react-router-dom";

// --- Assets Configuration ---
const BG_URL = '/assets/forest-bg.jpg';
const LOGO_URL = '/assets/logo.png';

const menus = [
  { name: "Beranda", path: "/" },
  { name: "Profil", path: "/profil" },
  { name: "Struktur", path: "/struktur" },
  { name: "Pengurus", path: "/pengurus" },
  { name: "Visi & Misi", path: "/visi-misi" },
  { name: "Legalitas", path: "/legalitas" },
  { name: "Galeri", path: "/galeri" },
];

const Galeri = () => {
  const location = useLocation();
  // Data dummy untuk placeholder foto (6 kotak sesuai gambar)
  const fotoGaleri = [1, 2, 3, 4, 5, 6];

  return (
    <div className="relative min-h-screen w-full font-sans bg-white overflow-x-hidden">
      
      {/* Background Layer (Scrollable & Opacity) */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-left bg-cover opacity-20"
        style={{ 
          backgroundImage: `url(${BG_URL})`,
          backgroundAttachment: 'scroll'
        }}
      />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Header (Konsisten) */}
        <header className="flex items-center justify-between px-10 py-4 bg-white/60">
          <div className="w-12">
            <img src={LOGO_URL} alt="Logo" className="w-full h-auto" />
          </div>
          <nav className="flex flex-wrap justify-center gap-6 md:gap-10 text-gray-700 text-sm font-medium">
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
        <main className="flex flex-col items-center py-16 px-6 grow">
          
          <h1 className="text-5xl md:text-6xl font-serif text-gray-800 mb-16 tracking-widest text-center">
            Galeri
          </h1>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl mb-20">
            {fotoGaleri.map((item, index) => (
              <div 
                key={index} 
                className="group relative bg-gray-300 rounded-lg overflow-hidden shadow-lg aspect-video border-4 border-white/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
              >
                {/* Placeholder Label */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium italic">
                  Foto {index + 1}
                </div>

                {/* Nanti jika sudah ada fotonya, tinggal gunakan tag img di bawah ini: */}
                {/* <img 
                  src={`/assets/galeri-${item}.jpg`} 
                  alt={`Kegiatan ${item}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                /> */}
                
                {/* Overlay saat hover agar lebih interaktif */}
                <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/20 transition-colors duration-300"></div>
              </div>
            ))}
          </div>

        </main>
      </div>
    </div>
  );
};

export default Galeri;