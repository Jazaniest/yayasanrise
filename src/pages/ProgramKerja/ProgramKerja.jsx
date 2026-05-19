import { Link } from 'react-router-dom';
import Navbar from "../../components/Navbar";

const LOGO_URL = '/assets/logo.png';
const BG_URL = '/assets/forest-bg.jpg';

const ProgramKerja = () => {
  const programs = [
    {
      title: "Research & Development",
      badge: "R&D",
      desc: "Pusat penelitian, inovasi, dan produksi pengetahuan untuk riset aplikatif dan kebijakan berkelanjutan.",
      path: "/program-kerja/research-development",
    },
    {
      title: "Community Empowerment",
      badge: "Empowerment",
      desc: "Penguatan kapasitas masyarakat melalui pendekatan partisipatif: pangan, sampah, ekonomi hijau, dan energi.",
      path: "/program-kerja/community-empowerment",
    },
    {
      title: "Ecological Conflict Resolution",
      badge: "Conflict",
      desc: "Penyelesaian konflik sosial-ekologis secara dialogis, inklusif, dan berkeadilan.",
      path: "/program-kerja/ecological-conflict-resolution",
    },
    {
      title: "Environmental Education",
      badge: "Education",
      desc: "Literasi lingkungan melalui pendidikan, kampanye, dan perubahan perilaku rendah karbon.",
      path: "/program-kerja/environmental-education",
    },
    {
      title: "Riau Socio-Ecological Data Center",
      badge: "Data Center",
      desc: "Pengumpulan, analisis, dan penyediaan data sosial-ekologis Riau untuk riset dan advokasi kebijakan.",
      path: "/program-kerja/riau-socio-eco",
    },
  ];

  return (
    <div className="relative min-h-screen bg-slate-50 font-sans overflow-x-hidden">
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-center bg-cover opacity-15 pointer-events-none"
        style={{ backgroundImage: `url(${BG_URL})` }}
      />
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="relative z-100 overflow-visible flex items-center justify-between px-6 md:px-12 py-4 bg-white/70 backdrop-blur-md shadow-xs border-b border-gray-100">
          <div className="w-12">
            <img src={LOGO_URL} alt="Logo" className="w-full h-auto" />
          </div>
          <Navbar />
          <div className="hidden md:block w-12 opacity-0">RISE</div>
        </header>

        <main className="relative z-0 grow w-full max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col items-center">
          <div className="text-center max-w-2xl mb-14 space-y-3">
            <h1 className="text-4xl md:text-5xl font-serif text-gray-800 tracking-wide">
              Program Kerja
            </h1>
            <div className="w-16 h-1 bg-rise-green mx-auto rounded-full" />
            <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed pt-2">
              Lima bidang strategis yang mengintegrasikan riset, pemberdayaan masyarakat, resolusi konflik, edukasi, dan pusat data sosial-ekologis di Riau.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            {programs.map((prog, index) => (
              <Link
                key={prog.path}
                to={prog.path}
                className="group flex flex-col p-7 bg-white/85 border border-emerald-100/50 rounded-2xl hover:border-rise-green/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span className="text-xs font-mono font-semibold text-rise-green bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
                    Program {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">
                    {prog.badge}
                  </span>
                </div>
                <h3 className="text-xl font-serif text-gray-800 group-hover:text-emerald-800 transition-colors mb-2">
                  {prog.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light grow">
                  {prog.desc}
                </p>
                <span className="mt-5 text-sm text-rise-green font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Lihat detail
                  <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProgramKerja;
