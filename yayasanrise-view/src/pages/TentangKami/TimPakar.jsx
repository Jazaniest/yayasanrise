import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTimPakar } from "../../services/timPakarService";
import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
const LOGO_URL = "/assets/logo.png";

const TimPakar = () => {
  const [tim, setTim] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTimPakar();
        setTim(data);
      } catch (err) {
        setError("Gagal memuat data tim pakar." + err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="relative min-h-screen w-full font-sans bg-slate-50">
      <Background />
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-white/70 backdrop-blur-md border-b border-gray-100">
          <div className="w-12 shrink-0">
            <Link to="/home">
              <img src={LOGO_URL} alt="Logo" className="w-full h-auto" />
            </Link>
          </div>
          <Navbar />
          <div className="hidden md:block w-12" /> {/* This is the placeholder for centering */}
        </header>
        <main className="rise-main max-w-5xl">
          <Link to="/tentang-kami" className="rise-breadcrumb">← Tentang Kami</Link>
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-4">Tim & Tenaga Pakar</h1>
          <p className="text-center text-gray-600 max-w-xl mb-10 font-light text-sm">
            Sinergi profesional multidisiplin di balik gerakan RISE — dari riset hingga pendampingan lapangan.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {loading && <p className="text-center text-gray-500 col-span-full">Memuat...</p>}
            {error && <p className="text-center text-red-500 col-span-full">{error}</p>}
            {!loading && !error && tim.map((pakar) => (
              <div key={pakar.id} className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-cover bg-center mb-3 shadow-md" style={{ backgroundImage: `url(http://localhost:3001${pakar.foto_url})` }}>
                  {!pakar.foto_url && (
                    <div className="w-full h-full rounded-full bg-emerald-100 flex items-center justify-center text-3xl text-rise-green font-serif">
                      {pakar.nama.charAt(0)}
                    </div>
                  )}
                </div>
                <h3 className="font-serif text-md text-gray-800">{pakar.nama}</h3>
                <p className="text-xs text-gray-500">{pakar.jabatan}</p>
                <p className="text-xs text-rise-green mt-1">{pakar.bidang_keahlian}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default TimPakar;
