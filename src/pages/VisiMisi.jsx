import Navbar from "../components/Navbar";

const BG_URL = '/assets/forest-bg.jpg';
const LOGO_URL = '/assets/logo.png';

const VisiMisi = () => {
  // const location = useLocation();
  const visiPoints = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt."
  ];

  const misiPoints = [
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.",
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci.",
    "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil."
  ];

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
      <div className="relative z-10">
        
        {/* Header (Konsisten dengan halaman lain) */}
        <header className="flex items-center justify-between px-10 py-4 bg-white/60">
          <div className="w-12">
            <img src={LOGO_URL} alt="Logo" className="w-full h-auto" />
          </div>
            <Navbar />
          <div className="hidden md:block w-12 opacity-0">RISE</div>
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center py-20 px-6 max-w-4xl mx-auto">
          
          {/* Section VISI */}
          <section className="w-full text-center mb-24">
            <h1 className="text-5xl md:text-6xl font-serif text-gray-800 mb-12 tracking-widest">
              Visi
            </h1>
            <div className="space-y-6">
              {visiPoints.map((text, index) => (
                <div key={index} className="flex flex-col items-center">
                  <span className="text-green-800 font-bold mb-2">{index + 1}</span>
                  <p className="text-gray-700 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section MISI */}
          <section className="w-full text-center pb-20">
            <h1 className="text-5xl md:text-6xl font-serif text-gray-800 mb-12 tracking-widest">
              Misi
            </h1>
            <div className="space-y-8">
              {misiPoints.map((text, index) => (
                <div key={index} className="flex flex-col items-center">
                  <span className="text-green-800 font-bold mb-2">{index + 1}</span>
                  <p className="text-gray-700 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
};

export default VisiMisi;