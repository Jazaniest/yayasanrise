import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
import { getPolicyBrief } from "../../services/publikasiService";

const LOGO_URL = "/assets/logo.png";

const PolicyBrief = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPolicyBrief();
        setItems(data);
      } catch (err) {
        setError("Gagal memuat data policy brief.");
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
      <main className="rise-main max-w-3xl">
        <h1 className="text-4xl font-serif text-gray-800 text-center mb-2">Policy Brief</h1>
        <p className="text-center text-gray-600 text-sm mb-8 font-light">
          Ringkasan kebijakan berbasis bukti untuk pengambil keputusan dan pemangku kepentingan.
        </p>
        <div className="space-y-3 w-full">
          {loading && <p className="text-center text-gray-500">Memuat...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
          {!loading && !error && items.map((item) => (
            <a
              key={item.id}
              href={item.file_url ? `http://localhost:3001${item.file_url}` : '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="rise-pub-row border-l-4 border-l-rise-green group"
            >
              <div>
                <h3 className="font-medium text-gray-800 text-sm group-hover:text-rise-green">{item.judul}</h3>
                <span className="text-xs text-gray-400">{item.tahun}</span>
              </div>
              <span className="text-xs text-rise-green bg-emerald-50 px-2 py-1 rounded">
                {item.file_url ? 'Unduh' : 'Segera'}
              </span>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PolicyBrief;
