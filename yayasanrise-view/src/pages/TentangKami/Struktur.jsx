import { useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
import { Link } from "react-router-dom";

const LOGO_URL = "/assets/logo.png";

// ─── AVATAR ───────────────────────────────────────────────────────────────────
const Avatar = ({ photo, initials, isOpen }) => (
  <div
    className={`w-20 h-20 rounded-full mx-auto mb-3 overflow-hidden flex items-center justify-center font-bold text-xl transition-all duration-300 border-2 ${
      isOpen
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
const MemberCard = ({ member, isOpen, onToggle }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`flex flex-col items-center rounded-2xl py-6 px-4 transition-all duration-300 transform backdrop-blur-xl border ${
        isOpen
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
          className={`flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-semibold transition-all duration-300 shadow-sm border ${
            isOpen
              ? "bg-emerald-700 text-white border-emerald-700"
              : "bg-white/80 text-emerald-800 border-emerald-600/20"
          }`}
        >
          <span>{isOpen ? t("struktur.tombol.tutup") : t("struktur.tombol.lihatProfil")}</span>
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
};

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
  const { t } = useTranslation();
  const [openId, setOpenId] = useState(null);

  // ─── DATA PENGURUS ────────────────────────────────────────────────────────────
  const PEMBINA = {
    _id: "pembina",
    name: "Muhammad Rawa El Amady",
    position: t("struktur.posisi.pembina"),
    section: "A",
    initials: "MR",
    photo: null,
    description: t("struktur.deskripsi.pembina"),
  };

  const KETUA = {
    _id: "ketua",
    name: "Anto Ariyanto",
    position: t("struktur.posisi.ketua"),
    initials: "AA",
    photo: null,
    description: t("struktur.deskripsi.ketua"),
  };

  const STAF = [
    {
      _id: "sekretaris",
      name: "Istiqomah Marfu'ah",
      position: t("struktur.posisi.sekretaris"),
      initials: "IM",
      photo: null,
      description: t("struktur.deskripsi.sekretaris"),
    },
    {
      _id: "bendahara",
      name: "Anggi Kemala Rezki",
      position: t("struktur.posisi.bendahara"),
      initials: "AK",
      photo: null,
      description: t("struktur.deskripsi.bendahara"),
    },
  ];

  const PENGAWAS = {
    _id: "pengawas",
    name: "Ervayenri",
    position: t("struktur.posisi.pengawas"),
    section: "C",
    initials: "EV",
    photo: null,
    description: t("struktur.deskripsi.pengawas"),
  };

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
            {t("struktur.judul")}
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
