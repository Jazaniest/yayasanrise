import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Background from "../../components/Background";

// const BG_URL = "/assets/forest-bg.jpg";
const LOGO_URL = "/assets/logo.png";

const TimPakar = () => {
  const tim = [
    { nama: "Tim Riset & Kebijakan", peran: "Kajian lingkungan, iklim, agraria, dan ekonomi hijau", area: "Research & Development" },
    { nama: "Tim Pemberdayaan", peran: "Pendampingan masyarakat dan pengembangan program lapangan", area: "Community Empowerment" },
    { nama: "Tim Edukasi & Advokasi", peran: "Kampanye, pelatihan, dan komunikasi publik", area: "Environmental Education" },
    { nama: "Tim Data & Spasial", peran: "Pengumpulan dan analisis data sosial-ekologis Riau", area: "Data Center" },
  ];

  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden">
      <Background />
      <header className="rise-header">
        <div className="w-12"><img src={LOGO_URL} alt="Logo" className="w-full h-auto" /></div>
        <Navbar />
        <div className="w-12 opacity-0">RISE</div>
      </header>
      <main className="rise-main max-w-5xl">
        <Link to="/tentang-kami" className="rise-breadcrumb">← Tentang Kami</Link>
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-4">Tim & Tenaga Pakar</h1>
        <p className="text-center text-gray-600 max-w-xl mb-10 font-light text-sm">
          Sinergi profesional multidisiplin di balik gerakan RISE — dari riset hingga pendampingan lapangan.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          {tim.map((t) => (
            <div key={t.nama} className="rise-card p-6! rounded-2xl! flex flex-col gap-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-2xl text-rise-green font-serif">
                {t.nama.charAt(0)}
              </div>
              <h3 className="font-serif text-lg text-gray-800">{t.nama}</h3>
              <span className="text-xs text-rise-green font-medium uppercase tracking-wide">{t.area}</span>
              <p className="text-sm text-gray-600 leading-relaxed">{t.peran}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-gray-500 italic max-w-md">
          Profil individu tenaga pakar akan diperbarui seiring dokumentasi resmi yayasan.
        </p>
      </main>
    </div>
  );
};

export default TimPakar;
