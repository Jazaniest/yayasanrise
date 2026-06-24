import { useState } from "react";
import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
import { Link } from "react-router-dom";

const LOGO_URL = "/assets/logo.png";

// ─── DATA PENGURUS ────────────────────────────────────────────────────────────
const PEMBINA = {
  _id: "pembina",
  name: "Muhammad Rawa El Amady",
  position: "Pembina",
  section: "A",
  initials: "MR",
  photo: null,
  description:
    "M. Rawa El Amady, lahir 68 di Desa,Teladas Sumatera Selatan, Doktor lulusan Antropologi Universitas Indonesia (UI). Sejak dua dekade fokus pada resolusi konflik dan pemberdayaan masyarakat. Mengajar pada program Magister Ilmu Lingkungan dan Magsister Kebijakan Publik Universitas Lancang Kuning mata kuliah Resolusi Konflik dan Pemberdayaan, Metodelogi Kualitatif, Pendekatan Sistem Lingkungan, Kebijakan Lingkungan dan Kehutanan, Ekonomi Politik Kebijakan Publik. Juga mengajar pada Magister Sosiologi Fisipol Universitas Riau mata kuliah Dinamika Konflik Lokal, Ekonomi Perkotaan dan Dinamika Masyarakat Pesisir. Menemukan model Pendekatan Pialang Budaya berbasis Keagensian yang berhasil memperpendek waktu penyelesaian konflik. Serta pendekatan baru pemberdayaan masyarakat yang mengusung konsep Etografi Pemberdayaan. Dan Etnografi Cepat. Telah menulis lebih dari 36 buku akademik dan jurnal ilmiah yang terakreditasi serta reviewer di jurnal nasional dan internasional. Sejak tahun 2007 hingga 2023 aktif dalam menyelesaikan resolusi konflik antara masyarakat dengan perusahaan multinasional. Bekerja sama dengan SKK MIGAS dan KKKS melakukan penelitian penelitian etnografi disekitar perusahaan minyak tahun 2021 dan 2025 yang melibatkan 35 mahasiswa dari seluruh Indonesia.",
};

const KETUA = {
  _id: "ketua",
  name: "Anto Ariyanto",
  position: "Ketua",
  initials: "AA",
  photo: null,
  description:
    "Anto Ariyanto, lahir di Bogor, 24 April 1969, adalah akademisi, peneliti, dan penggerak sosial-ekologi yang memiliki perhatian kuat pada isu pembangunan berkelanjutan, ekonomi hijau, tata kelola sumber daya alam, serta pemberdayaan masyarakat berbasis lingkungan. Alumni S1 Matematika Universitas Padjadjaran (UNPAD), serta menyelesaikan pendidikan Magister (S2) dan Doktor (S3) di bidang Ilmu Ekonomi Pertanian, ia dikenal memiliki pendekatan multidisipliner yang memadukan analisis ekonomi, sosial, lingkungan, dan sistem dalam menjawab berbagai persoalan pembangunan di Indonesia. Sebagai dosen dan peneliti, Anto Ariyanto aktif mengembangkan kajian di bidang agribisnis berkelanjutan, ekonomi lingkungan, ekonomi perkebunan sawit, ekonomi hijau, Sistem Informasi Manajemen, serta metodologi penelitian kuantitatif dan kualitatif. Fokus keilmuannya diarahkan pada transformasi tata kelola perkebunan, penguatan ekonomi masyarakat, kebijakan lingkungan, ketahanan pangan, dan pembangunan berkeadilan yang berpihak pada keberlanjutan sosial dan ekologis. Selama bertahun-tahun aktif melakukan penelitian, pendampingan masyarakat, serta pengembangan model pemberdayaan berbasis potensi lokal di berbagai wilayah. Ia juga terlibat dalam berbagai riset mengenai keberlanjutan perkebunan sawit, pengelolaan lingkungan, ekonomi sirkular, konflik sumber daya alam, hingga penguatan kapasitas masyarakat dalam menghadapi perubahan sosial dan ekologis. Anto Ariyanto dikenal aktif menulis buku akademik, artikel ilmiah, dan karya pemikiran strategis di bidang ekonomi lingkungan, agribisnis, dan pembangunan berkelanjutan. Beberapa fokus pemikirannya meliputi ekonomi hijau, rantai pasok industri sawit, kebijakan harga perkebunan, serta sistem informasi agribisnis untuk mendukung pembangunan yang berkelanjutan dan berkeadilan. Melalui Yayasan RISE Sosial Ekologi Indonesia, Anto Ariyanto mendorong lahirnya gerakan sosial-ekologi yang mengintegrasikan riset, pendidikan, pemberdayaan masyarakat, advokasi lingkungan, dan penguatan ekonomi lokal sebagai bagian dari upaya membangun masa depan Indonesia yang lebih adil, lestari, dan berkelanjutan.",
};

const STAF = [
  {
    _id: "sekretaris",
    name: "Istiqomah Marfu'ah",
    position: "Sekretaris",
    initials: "IM",
    photo: null,
    description:
      "Istiqomah Marfuah, lahir di Gunung Kidul, 27 April 1987, merupakan peneliti sosial dan mediator konflik sumber daya alam dengan pengalaman lebih dari satu dekade dalam isu sosial-ekologis, masyarakat adat, dan tata kelola keberlanjutan. Saat ini sedang menempuh pendidikan Magister Ilmu Lingkungan di Universitas Lancang Kuning. Sejak tahun 2010, aktif dalam penelitian dan pendampingan masyarakat, khususnya pada isu konflik tenurial, pemberdayaan masyarakat adat dan lokal, serta pengarusutamaan gender. Memiliki keahlian dalam penelitian kualitatif berbasis etnografi, termasuk observasi partisipatif, wawancara mendalam, serta analisis sosial untuk mendukung penyusunan kebijakan dan program berbasis bukti. Berpengalaman dalam fasilitasi resolusi konflik melalui pendekatan Alternative Dispute Resolution (ADR), termasuk mediasi multipihak antara masyarakat, perusahaan, dan pemerintah pada sektor ekstraktif dan perkebunan. Terlibat dalam berbagai proses penyelesaian konflik berbasis dialog, serta penguatan kapasitas masyarakat dalam pendekatan partisipatif dan Free, Prior and Informed Consent (FPIC). Selain itu, memiliki pengalaman dalam penyusunan dan implementasi dokumen sosial untuk standar keberlanjutan dan ESG, seperti Indigenous Peoples Plan (IPP), Stakeholder Engagement Plan (SEP), Social and Economic Baseline Study, serta Community-Based Monitoring. Merupakan penulis utama artikel ilmiah pada Jurnal ETNOSIA (2021) yang membahas kontestasi lahan dan dinamika masyarakat adat di Riau, serta berkontribusi dalam berbagai publikasi terkait hubungan industri dan masyarakat. Melalui kombinasi riset dan praktik lapangan, berkomitmen untuk mendorong keadilan sosial, keberlanjutan lingkungan, serta penyelesaian konflik yang inklusif dan berkeadilan.",
  },
  {
    _id: "bendahara",
    name: "Anggi Kemala Rezki",
    position: "Bendahara",
    initials: "AK",
    photo: null,
    description:
      "Bertanggung jawab atas pengelolaan keuangan organisasi secara transparan dan akuntabel, meliputi penyusunan anggaran, pencatatan pemasukan dan pengeluaran, serta pelaporan keuangan berkala kepada pengurus.",
  },
];

const PENGAWAS = {
  _id: "pengawas",
  name: "Ervayenri",
  position: "Pengawas",
  section: "C",
  initials: "EV",
  photo: null,
  description:
    "lahir di Inderapura, Painan Pesisir Selatan Sumatera Barat. Seorang akademisi, peneliti dan pendamping kegiatan masysrakat. Magister dan Doktor alumni Prodi Ilmu Pengetahuan Kehutanan IPB,Bogor, Pendidikan sarjana di tempuh di Faperta Unilak Jurusan Agronomi.  Pernah mengajar di Faperta Unilak, Fahutan Unilak dan PPs Unilak Prodi Ilmu Lingkungan dan UPBJJ UT Riau. Di Prodi Ilmu Lingkungan PPs Unilak mengajar matakuliah : Konservasi Keanekaragaman Hayati Jasa Lingkungan dan Ekowisata, Hidrologi dan Pengelolaan DAS Terpadu, Instrumen Manajemen Lingkungan, Kebijakan dan Pengelolaan Limbah, Pencemaran dan Kerusakan Lingkungan, serta Publikasi Ilmiah. Selama di Prodi Kehutanan S1 Pengampu matakuliah; Pengelolaan DAS Terpadu, Hidrologi Hutan, Konservasi Tanah dan Air, Silvikultur, Agroforestri, Ilmu Tanah Hutan dan Fisiologi Tumbuhan.Di Prodi Agroteknologi mengajar mata kuliah Dasar-dasar Agronomi, Ilmu Tanah, Agronomi Tanaman Perkebunan, Tanaman Hortikultura, Irigasi dan Pengairan, Konservasi Tanah dan Air, Teknologi Pupuk Hayati, Bioteknologi Pertanian dan Rancangan Percobaan. Pernah menjadi Pengamat Hama dan Penyakit Tanaman di Dinas Pertanian Tanaman Pangan Sumbar, Menjadi Petugas Lapangan Penghijauan di BRLKT Indragiri Rokan Ds, Menjadi Staf Subdin Hortikultura di Dinas Pertanian Tanaman Pangan Riau, Menjadi staf/Asisten Lapangan pada beberapa Perusahaan RGM Grup (PT SMA, PT HSJ, PT NPK), Asisten Lapangan di PT Adei Pekanbaru. Dan saat sekarang menjadi dosen tetap di Di Prodi Ilmu Lingkungan PPs Unilak.",
};

// ─── AVATAR ───────────────────────────────────────────────────────────────────
const Avatar = ({ photo, initials, isOpen }) => (
  <div
    className={`w-20 h-20 rounded-full mx-auto mb-3 overflow-hidden flex items-center justify-center font-bold text-xl transition-all duration-300 border-2 ${isOpen
        ? "bg-emerald-700 text-white border-white shadow-md scale-105"
        : "bg-white/40 text-emerald-900 border-white/60 shadow-sm"
      }`}
    style={{ fontFamily: "'DM Sans', sans-serif" }}
  >
    {photo ? (
      <img src={photo} alt={initials} className="w-full h-full object-cover" />
    ) : (
      <span>{initials}</span>
    )}
  </div>
);

// ─── SINGLE CARD ──────────────────────────────────────────────────────────────
const MemberCard = ({ member, isOpen, onToggle }) => (
  <div
    className={`flex flex-col items-center rounded-2xl py-6 px-4 transition-all duration-300 transform backdrop-blur-xl border ${isOpen
        ? "bg-white/90 border-emerald-500/40 shadow-2xl ring-2 ring-emerald-500/10"
        : "bg-white/65 border-white/50 shadow-lg"
      }`}
  >
    <button
      onClick={onToggle}
      className="flex flex-col items-center w-full focus:outline-none group"
      aria-expanded={isOpen}
    >
      <Avatar photo={member.photo} initials={member.initials} isOpen={isOpen} />

      <p className="text-[11px] font-bold uppercase tracking-widest mb-1 text-emerald-800 font-sans">
        {member.position}
      </p>

      <p className="font-bold text-slate-900 text-base text-center leading-snug mb-4 font-serif min-h-11 flex items-center justify-center">
        {member.name}
      </p>

      {/* Toggle pill */}
      <div
        className={`flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-semibold transition-all duration-300 shadow-sm border ${isOpen
            ? "bg-emerald-700 text-white border-emerald-700"
            : "bg-white/80 text-emerald-800 border-emerald-600/20"
          }`}
      >
        <span>{isOpen ? "Tutup" : "Lihat profil"}</span>
        <span
          className="transition-transform duration-300 inline-block text-[10px]"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ▼
        </span>
      </div>
    </button>
  </div>
);

// ─── PANEL KONTEN DALAM ───────────────────────────────────────────────────────
const PanelContent = ({ member }) => (
  <div className="rounded-2xl px-6 py-5 bg-white/95 border border-white backdrop-blur-2xl shadow-xl border-t-emerald-600 border-t-4">
    <div className="flex items-center gap-4 mb-3">
      <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 bg-emerald-100 text-emerald-800 border border-emerald-200">
        {member.initials}
      </div>
      <div>
        <p className="font-bold text-slate-900 leading-tight text-lg font-serif">
          {member.name}
        </p>
        <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 font-sans mt-0.5">
          {member.position}
        </p>
      </div>
    </div>
    <div className="h-px mb-3 bg-linear-to-r from-emerald-100 via-emerald-200 to-transparent" />
    <p className="text-sm leading-relaxed text-slate-700 text-justify font-sans">{member.description}</p>
  </div>
);

// ─── INLINE PANEL ────────────────────────────────────────────────────────────
const InlinePanel = ({ member, visible }) => (
  <div
    style={{
      display: "grid",
      gridTemplateRows: visible ? "1fr" : "0fr",
      opacity: visible ? 1 : 0,
      marginTop: visible ? "16px" : "0px",
      transition:
        "grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease, margin-top 0.3s ease",
    }}
  >
    <div style={{ overflow: "hidden" }}>
      {member && <PanelContent member={member} />}
    </div>
  </div>
);

// ─── CONNECTOR ────────────────────────────────────────────────────────────────
const Connector = () => (
  <div className="flex justify-center my-2">
    <div className="w-0.5 h-12 bg-linear-to-b from-white/60 to-white/20 shadow-sm" />
  </div>
);

const Struktur = () => {
  const [openId, setOpenId] = useState(null);

  // Tambahkan state untuk "mengingat" data staf terakhir sebelum ditutup
  const [lastStaf, setLastStaf] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  const activeStaf = STAF.find((m) => m._id === openId) || null;

  // Jika ada staf yang aktif, simpan datanya ke dalam state lastStaf
  if (activeStaf && activeStaf !== lastStaf) {
    setLastStaf(activeStaf);
  }

  return (
    <div className="relative min-h-screen w-full font-sans bg-slate-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500;700&display=swap');
      `}</style>
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
        <main className="rise-main relative z-10 max-w-3xl mx-auto py-12 px-6 pb-24">

          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl mt-5 font-serif text-gray-800 mb-12 text-center">
            Struktur Organisasi
          </h1>

          {/* Pembina */}
          <div className="flex justify-center">
            <div className="w-64">
              <MemberCard
                member={PEMBINA}
                isOpen={openId === PEMBINA._id}
                onToggle={() => toggle(PEMBINA._id)}
              />
            </div>
          </div>
          <InlinePanel member={PEMBINA} visible={openId === PEMBINA._id} />

          <Connector />

          {/* Ketua */}
          <div className="flex justify-center">
            <div className="w-64">
              <MemberCard
                member={KETUA}
                isOpen={openId === KETUA._id}
                onToggle={() => toggle(KETUA._id)}
              />
            </div>
          </div>
          <InlinePanel member={KETUA} visible={openId === KETUA._id} />

          <Connector />

          {/* Sekretaris + Bendahara */}
          <div className="grid grid-cols-2 gap-6 items-start">
            {STAF.map((m) => (
              <div key={m._id} className="w-full">
                <MemberCard
                  member={m}
                  isOpen={openId === m._id}
                  onToggle={() => toggle(m._id)}
                />
              </div>
            ))}

            {/* Panel deskripsi melebar penuh 2 kolom */}
            <div
              className="col-span-2"
              style={{
                display: "grid",
                gridTemplateRows: activeStaf ? "1fr" : "0fr",
                opacity: activeStaf ? 1 : 0,
                marginTop: activeStaf ? "16px" : "0px",
                transition:
                  "grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease, margin-top 0.3s ease",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                {/* Menggunakan lastStaf agar konten tidak hilang duluan saat ditutup */}
                {lastStaf && <PanelContent member={lastStaf} />}
              </div>
            </div>
          </div>

          <Connector />

          {/* Pengawas */}
          <div className="flex justify-center">
            <div className="w-64">
              <MemberCard
                member={PENGAWAS}
                isOpen={openId === PENGAWAS._id}
                onToggle={() => toggle(PENGAWAS._id)}
              />
            </div>
          </div>
          <InlinePanel member={PENGAWAS} visible={openId === PENGAWAS._id} />

        </main>
      </div>
    </div>
  );
};

export default Struktur;