import Navbar from "../../components/Navbar";

const BG_URL = '/assets/forest-bg.jpg';
const LOGO_URL = '/assets/logo.png';

const VisiMisi = () => {
  const visi = "Mewujudkan masa depan Indonesia yang adil, berkelanjutan, dan berbasis pengetahuan melalui harmoni antara pemberdayaan sosial masyarakat dan pelestarian ekosistem.";

  const misi = [
    "Menghasilkan riset dan pengetahuan aplikatif di bidang sosial, lingkungan, dan kebijakan berkelanjutan.",
    "Memberdayakan masyarakat melalui pendekatan partisipatif dalam pangan, energi, sampah, dan ekonomi hijau.",
    "Memfasilitasi penyelesaian konflik sosial-ekologis secara dialogis dan berkeadilan.",
    "Meningkatkan literasi lingkungan dan kesadaran publik menuju gaya hidup rendah karbon.",
    "Menyediakan data sosial-ekologis terbuka untuk mendukung transparansi dan kebijakan berbasis bukti.",
  ];

  return (
    <div className="relative min-h-screen w-full font-sans bg-slate-50 overflow-x-hidden">
      <div className="absolute inset-0 z-0 bg-no-repeat bg-center bg-cover opacity-15 pointer-events-none" style={{ backgroundImage: `url(${BG_URL})` }} />
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="relative z-[100] overflow-visible flex items-center justify-between px-6 md:px-12 py-4 bg-white/70 backdrop-blur-md shadow-xs border-b border-gray-100">
          <div className="w-12"><img src={LOGO_URL} alt="Logo" className="w-full h-auto" /></div>
          <Navbar />
          <div className="hidden md:block w-12 opacity-0">RISE</div>
        </header>

        <main className="relative z-0 grow w-full max-w-5xl mx-auto px-4 md:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-12">Visi & Misi</h1>

          <section className="rise-card mb-10 bg-gradient-to-br from-emerald-50/80 to-white">
            <h2 className="text-2xl font-serif text-rise-green mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-rise-green rounded-full" /> Visi
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed font-light italic">{visi}</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-gray-800 mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-rise-green rounded-full" /> Misi
            </h2>
            <div className="space-y-4">
              {misi.map((text, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white/80 border border-emerald-100/50 shadow-xs"
                >
                  <div className="shrink-0 w-8 h-8 rounded-full bg-rise-green text-white font-bold flex items-center justify-center text-sm">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-0.5">{text}</p>
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
