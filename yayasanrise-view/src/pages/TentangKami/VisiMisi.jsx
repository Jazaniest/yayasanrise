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
    <main className="relative z-0 grow w-full max-w-5xl mx-auto px-4 md:px-8 py-16">
      <h1 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-12">Visi & Misi</h1>

      <section className="rise-card mb-10 bg-linear-to-br from-emerald-50/80 to-white">
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
  );
};

export default VisiMisi;
