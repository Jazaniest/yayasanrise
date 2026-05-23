import { Link } from 'react-router-dom';
import Navbar from "../../components/Navbar";
import Background from '../../components/Background';

const LOGO_URL = '/assets/logo.png';

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
      <Background />
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* Header / Navbar */}
        <header className="relative z-100 overflow-visible flex items-center justify-between px-6 md:px-12 py-4 bg-white/70 backdrop-blur-md shadow-xs border-b border-gray-100">
          <div className="w-12">
            <img src={LOGO_URL} alt="Logo" className="w-full h-auto" />
          </div>
          <Navbar />
          <div className="hidden md:block w-12 opacity-0">RISE</div>
        </header>

        {/* Main Content */}
        <main className="relative z-0 grow w-full max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col items-center">

          {/* Title Block */}
          <div className="text-center max-w-2xl mb-16 space-y-3">
            <h1 className="text-4xl md:text-5xl font-serif text-gray-800 tracking-wide">
              Program Kerja
            </h1>
            <div className="w-16 h-1 bg-rise-green mx-auto rounded-full" />
            <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed pt-2">
              Lima bidang strategis yang mengintegrasikan riset, pemberdayaan masyarakat, resolusi konflik, edukasi, dan pusat data sosial-ekologis di Riau.
            </p>
          </div>

          {/* Grid Program */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {programs.map((prog, index) => (
              <Link
                key={prog.path}
                to={prog.path}
                className="group flex flex-col justify-between p-6 bg-white/80 backdrop-blur-xs border border-emerald-100/40 rounded-2xl hover:bg-white hover:border-[#4A7C44]/40 transition-all duration-350 shadow-xs hover:shadow-md hover:-translate-y-1 cursor-pointer"
              >
                <div>
                  {/* Badge Penomoran */}
                  <span className="text-xs font-mono text-[#4A7C44] font-semibold bg-emerald-50 border border-emerald-100/60 px-3 py-1 rounded-full shadow-2xs">
                    Program {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Judul */}
                  <h3 className="text-xl font-serif text-gray-800 mt-5 mb-2.5 group-hover:text-emerald-800 transition-colors">
                    {prog.title}
                  </h3>

                  {/* Deskripsi */}
                  <p className="text-gray-600 text-sm leading-relaxed font-light">
                    {prog.desc}
                  </p>
                </div>

                {/* Indikator Panah */}
                <div className="flex items-center justify-end mt-6 text-[#4A7C44] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                  <span className="text-xs font-medium mr-1.5">Lihat detail</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

        </main>
      </div>
    </div>
  );
};

export default ProgramKerja;