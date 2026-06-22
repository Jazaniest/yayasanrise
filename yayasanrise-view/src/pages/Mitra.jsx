import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import { getMitra } from "../services/mitraService";

const LOGO_URL = "/assets/logo.png";

const Mitra = () => {
  const [mitra, setMitra] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMitra();
        setMitra(data);
      } catch (err) {
        setError("Gagal memuat data mitra.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const groupByType = (data) => {
    return data.reduce((acc, curr) => {
      (acc[curr.tipe] = acc[curr.tipe] || []).push(curr);
      return acc;
    }, {});
  };

  const groupedMitra = groupByType(mitra);

  const renderGroup = (title, items) => (
    <section className="w-full mb-12">
      <h2 className="text-2xl font-serif text-gray-700 mb-6 text-center capitalize">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full">
        {items.map((m) => (
          <a
            key={m.id}
            href={m.website || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="group aspect-square rounded-xl bg-white border border-gray-100 flex flex-col items-center justify-center p-4 grayscale hover:grayscale-0 hover:border-rise-green/40 transition-all shadow-sm hover:shadow-lg"
          >
            <img src={`http://localhost:3001${m.logo_url}`} alt={m.nama} className="max-h-16 w-auto" />
            <p className="text-xs font-medium text-gray-600 text-center mt-3 opacity-0 group-hover:opacity-100 transition-opacity">{m.nama}</p>
          </a>
        ))}
      </div>
    </section>
  );

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
        <p className="text-center text-gray-600 mb-16 font-light max-w-xl">
          Kolaborasi strategis dengan lembaga mitra memperkuat dampak program sosial-ekologis di Riau.
        </p>

        {loading && <p className="text-center text-gray-500 col-span-full">Memuat...</p>}
        {error && <p className="text-center text-red-500 col-span-full">{error}</p>}

        {!loading && !error && (
          <>
            {groupedMitra['donatur'] && renderGroup('Donatur', groupedMitra['donatur'])}
            {groupedMitra['kolaborator'] && renderGroup('Kolaborator', groupedMitra['kolaborator'])}
            {groupedMitra['sponsor'] && renderGroup('Sponsor', groupedMitra['sponsor'])}
          </>
        )}

        <section id="kontak" className="scroll-mt-24 w-full text-center py-6 border-t border-emerald-100 mt-10">
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
