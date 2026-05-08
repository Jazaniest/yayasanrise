import { Link } from "react-router-dom";

const BG_URL = '/assets/forest-bg.jpg';
const LOGO_URL = '/assets/logo.png';

const Home = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans">
      
      {/* Background Section */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_URL})` }}
      >
        {/* Overlay gelap tipis agar teks lebih stand out */}
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex flex-wrap justify-center items-center mt-10 gap-6 md:gap-8 py-8 text-white text-sm font-medium tracking-wide">
         {[
            { name: "Beranda", path: "/" },
            { name: "Profil", path: "/profil" },
            { name: "Struktur", path: "/struktur" },
            { name: "Pengurus", path: "/pengurus" },
            { name: "Visi & Misi", path: "/visi-misi" },
            { name: "Legalitas", path: "/legalitas" },
            { name: "Galeri", path: "/galeri" },
        ].map((item) => (
            <Link
            key={item.name}
            to={item.path}
            className="hover:text-green-400 transition-colors duration-300 drop-shadow-md"
            >
            {item.name}
            </Link>
        ))}
      </nav>

      {/* Main Content (Hero) */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[75vh] px-6 text-white">
        
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          {/* Logo Yayasan */}
          <div className="w-40 md:w-56 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
            <img 
              src={LOGO_URL} 
              alt="Logo Yayasan RISE" 
              className="w-full h-auto object-contain"
            />
          </div>
          
          {/* Judul Yayasan */}
          <div className="text-center md:text-left border-white/20">
            <h1 className="text-4xl md:text-6xl font-extralight tracking-tighter leading-none">
              Yayasan RISE
            </h1>
            <h2 className="text-2xl md:text-4xl font-normal tracking-normal mt-2">
              Sosial Ekologis Indonesia
            </h2>
          </div>
        </div>

        {/* Tagline / Deskripsi */}
        <div className="w-full max-w-3xl border-t border-white/30 pt-6">
          <p className="text-center text-sm md:text-lg font-light tracking-[0.3em] uppercase italic opacity-90 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

      </main>

    </div>
  );
};

export default Home;