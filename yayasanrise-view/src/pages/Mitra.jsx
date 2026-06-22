// import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Background from "../components/Background";

// const BG_URL = "/assets/forest-bg.jpg";
const LOGO_URL = "/assets/logo.png";

const Mitra = () => {
  const mitra = [
    { nama: "Mitra Akademisi", tipe: "Riset & kajian" },
    { nama: "Mitra Komunitas", tipe: "Pemberdayaan lapangan" },
    { nama: "Mitra LSM/CSO", tipe: "Advokasi & jaringan" },
    { nama: "Mitra Pemerintah Daerah", tipe: "Kebijakan & program" },
  ];

  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden bg-slate-50">
      <Background />
      <header className="rise-header">
        <div className="w-12"><img src={LOGO_URL} alt="Logo" className="w-full h-auto" /></div>
        <Navbar />
        <div className="w-12 opacity-0">RISE</div>
      </header>

      <main className="rise-main max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-3">
          Mitra & Kolaborasi Kami
        </h1>
        <p className="text-center text-gray-600 mb-12 font-light max-w-xl">
          Kolaborasi strategis dengan lembaga mitra memperkuat dampak program sosial-ekologis di Riau.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mb-16">
          {mitra.map((m) => (
            <div
              key={m.nama}
              className="aspect-3/2 rounded-xl bg-white border border-gray-200 flex flex-col items-center justify-center p-4 grayscale hover:grayscale-0 hover:border-rise-green/40 transition-all shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-rise-green font-serif text-lg mb-2">
                {m.nama.charAt(0)}
              </div>
              <p className="text-xs font-medium text-gray-700 text-center">{m.nama}</p>
              <p className="text-[10px] text-gray-400 mt-1">{m.tipe}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-500 -mt-10 mb-16 italic">
          Logo mitra resmi akan ditampilkan setelah persetujuan publikasi.
        </p>

        <section id="donasi" className="scroll-mt-24 w-full mb-10">
          <div className="rise-card">
            <h2 className="text-xl font-serif text-gray-800 mb-3">Donasi</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Dukungan finansial Anda membantu pelaksanaan program restorasi, edukasi lingkungan,
              dan pendampingan masyarakat. Informasi rekening dan mekanisme donasi akan diumumkan resmi.
            </p>
            <a href="mailto:contact@yayasanrise.or.id" className="text-sm text-rise-green font-medium hover:underline">
              Hubungi: contact@yayasanrise.or.id
            </a>
          </div>
        </section>

        <section id="kolaborasi" className="scroll-mt-24 w-full mb-10">
          <div className="rise-card border-emerald-600/30">
            <h2 className="text-xl font-serif text-gray-800 mb-3">Kolaborasi</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Kami terbuka untuk kolaborasi riset, program lapangan, advokasi kebijakan, dan
              pertukaran pengetahuan dengan perguruan tinggi, LSM, komunitas, dan sektor swasta yang
              berkomitmen pada keberlanjutan.
            </p>
          </div>
        </section>

        <section id="sponsorship" className="scroll-mt-24 w-full mb-6">
          <div className="rise-card">
            <h2 className="text-xl font-serif text-gray-800 mb-3">Sponsorship Program</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Sponsorship program memungkinkan mitra mendukung kegiatan spesifik — seperti pelatihan,
              kampanye edukasi, atau publikasi data — dengan transparansi pelaporan dampak.
            </p>
          </div>
        </section>

        <section id="kontak" className="scroll-mt-24 w-full text-center py-6 border-t border-emerald-100">
          <h2 className="font-serif text-gray-800 mb-2">Kontak</h2>
          <p className="text-sm text-gray-600">Pekanbaru, Riau, Indonesia</p>
          <a href="mailto:contact@yayasanrise.or.id" className="text-rise-green text-sm hover:underline">
            contact@yayasanrise.or.id
          </a>
        </section>
      </main>
    </div>
  );
};

export default Mitra;
