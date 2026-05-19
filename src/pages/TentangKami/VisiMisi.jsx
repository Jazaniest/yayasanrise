import Navbar from "../../components/Navbar";

const BG_URL = '/assets/forest-bg.jpg';
const LOGO_URL = '/assets/logo.png';

const VisiMisi = () => {
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
    <div className="relative min-h-screen w-full font-sans bg-slate-50 overflow-x-hidden">

      {/* Background Layer with pointer-events-none so it doesn't block clicks */}
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-center bg-cover opacity-15 pointer-events-none"
        style={{
          backgroundImage: `url(${BG_URL})`,
          backgroundAttachment: 'scroll'
        }}
      />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* Header */}
        <header className="flex items-center justify-between px-6 md:px-12 py-4 bg-white/70 backdrop-blur-md shadow-xs border-b border-gray-100">
          <div className="w-12">
            <img src={LOGO_URL} alt="Logo" className="w-full h-auto" />
          </div>
          <Navbar />
          <div className="hidden md:block w-12 opacity-0">RISE</div>
        </header>

        {/* Main Content */}
        <main className="grow w-full max-w-7xl mx-auto px-4 md:px-8 py-16">

          {/* Section Grid: Berdampingan di Desktop (md:grid-cols-2) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* --- SECTION VISI --- */}
            <section className="space-y-8">
              <div className="border-b-2 border-[#4A7C44]/20 pb-4">
                <h2 className="text-4xl md:text-5xl font-serif text-gray-800 tracking-wide flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#4A7C44] rounded-full inline-block"></span>
                  Visi
                </h2>
              </div>

              <div className="space-y-4">
                {visiPoints.map((text, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-white/80 backdrop-blur-xs border border-emerald-100/50 shadow-xs transition-all duration-350"
                  >
                    {/* Number Badge */}
                    <div className="shrink-0 w-8 h-8 rounded-full bg-[#4A7C44] text-white font-bold flex items-center justify-center text-sm shadow-2xs">
                      {index + 1}
                    </div>
                    {/* Text */}
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed pt-0.5">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* --- SECTION MISI --- */}
            <section className="space-y-8">
              <div className="border-b-2 border-[#4A7C44]/20 pb-4">
                <h2 className="text-4xl md:text-5xl font-serif text-gray-800 tracking-wide flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#4A7C44] rounded-full inline-block"></span>
                  Misi
                </h2>
              </div>

              <div className="space-y-4">
                {misiPoints.map((text, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-white/80 backdrop-blur-xs border border-emerald-100/50 shadow-xs transition-all duration-350"
                  >
                    {/* Number Badge */}
                    <div className="shrink-0 w-8 h-8 rounded-full bg-[#4A7C44] text-white font-bold flex items-center justify-center text-sm shadow-2xs">
                      {index + 1}
                    </div>
                    {/* Text */}
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed pt-0.5">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
};

export default VisiMisi;