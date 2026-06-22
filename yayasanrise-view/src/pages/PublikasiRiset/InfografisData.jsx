import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
import { getInfografis } from "../../services/publikasiService";

const LOGO_URL = "/assets/logo.png";

const InfografisData = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getInfografis();
        setItems(data);
      } catch (err) {
        setError("Gagal memuat data infografis.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden">
      <Background />
      <header className="rise-header">
        <div className="w-12"><img src={LOGO_URL} alt="Logo" className="w-full h-auto" /></div>
        <Navbar />
        <div className="w-12 opacity-0">RISE</div>
      </header>
      <main className="rise-main max-w-4xl">
        <h1 className="text-4xl font-serif text-gray-800 text-center mb-2">Infografis Data</h1>
        <p className="text-center text-gray-600 text-sm mb-8 font-light">
          Visualisasi data sosial-ekologis dari Riau Socio-Ecological Data Center.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {loading && <p className="text-center text-gray-500 col-span-full">Memuat...</p>}
          {error && <p className="text-center text-red-500 col-span-full">{error}</p>}
          {!loading && !error && items.map((item) => (
            <a
              key={item.id}
              href={item.image_url ? `http://localhost:3001${item.image_url}` : '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="group aspect-4/3 rounded-xl bg-cover bg-center flex flex-col justify-end p-5 text-white shadow-lg"
              style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(http://localhost:3001${item.image_url})` }}
            >
              {!item.image_url && (
                <div className="absolute inset-0 bg-linear-to-br from-emerald-100 to-emerald-50 rounded-xl"></div>
              )}
              <h3 className="font-serif text-lg relative z-10">{item.judul}</h3>
              <p className="text-xs relative z-10 opacity-80">{item.deskripsi}</p>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default InfografisData;
