import Navbar from "../components/Navbar";
const BG_URL = '/assets/forest-bg.jpg';
const LOGO_URL = '/assets/logo.png';

const Home = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="relative grow">
        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url(${BG_URL})` }}>
          <div className="absolute inset-0 bg-black/25"></div>
        </div>
        <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-10 py-4">
          <div className="w-12 shrink-0">
            <img src={LOGO_URL} alt="Logo" className="w-full h-auto" />
          </div>
          <Navbar />
          <div className="hidden md:block w-12" />
        </header>
        <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-(--spacing(16)))] px-6 text-white">
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
              Membangun Masa Depan Sosial dan Ekologi yang Adil, Berkelanjutan, dan Berbasis Pengetahuan.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Home;