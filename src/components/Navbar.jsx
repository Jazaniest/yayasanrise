import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/home";

  const menuItems = [
    { name: "Beranda", path: "/home" },
    {
      name: "Tentang Kami",
      path: "/tentang-kami",
      subMenu: [
        { name: "Profil Yayasan", path: "/tentang-kami/profil" },
        { name: "Visi & Misi", path: "/tentang-kami/visi-misi" },
        { name: "Nilai & Pendekatan", path: "/tentang-kami/nilai-pendekatan" },
        { name: "Legalitas", path: "/tentang-kami/legalitas" },
        { name: "Tim & Tenaga Pakar", path: "/tentang-kami/tim-pakar" },
      ],
    },
    {
      name: "Isu Prioritas",
      path: "/isu-prioritas",
      subMenu: [
        { name: "Perubahan Iklim", path: "/isu-prioritas/perubahan-iklim" },
        { name: "Gambut", path: "/isu-prioritas/gambut" },
        { name: "Mangrove", path: "/isu-prioritas/gambut#mangrove" },
        { name: "Energi", path: "/isu-prioritas/energi" },
        { name: "Konflik Agraria", path: "/isu-prioritas/konflik-agraria" },
        { name: "Sampah", path: "/isu-prioritas/sampah" },
        { name: "Ekonomi Hijau", path: "/isu-prioritas/ekonomi-hijau" },
        { name: "Ketahanan Pangan", path: "/isu-prioritas/ketahanan-pangan" },
      ],
    },
    {
      name: "Program Kerja",
      path: "/program-kerja",
      subMenu: [
        { name: "Research & Development", path: "/program-kerja/research-development" },
        { name: "Community Empowerment", path: "/program-kerja/community-empowerment" },
        { name: "Ecological Conflict Resolution", path: "/program-kerja/ecological-conflict-resolution" },
        { name: "Environmental Education", path: "/program-kerja/environmental-education" },
        { name: "Riau Socio-Ecological Data Center", path: "/program-kerja/riau-socio-eco" },
      ],
    },
    {
      name: "Insight & Opini",
      path: "/insight-opini",
    },
    {
      name: "Publikasi & Riset",
      path: "/publikasi-riset",
      subMenu: [
        { name: "Artikel Ilmiah", path: "/publikasi-riset/artikel-ilmiah" },
        { name: "Policy Brief", path: "/publikasi-riset/policy-brief" },
        { name: "Laporan Penelitian", path: "/publikasi-riset/laporan-penelitian" },
        { name: "Buku/Modul", path: "/publikasi-riset/buku" },
        { name: "Infografis Data", path: "/publikasi-riset/infografis-data" },
      ],
    },
    {
      name: "Kegiatan",
      path: "/kegiatan",
    },
    {
      name: "Dampak Kami",
      path: "/dampak-kami",
    },
    {
      name: "Mitra & Kolaborasi Kami",
      path: "/mitra-kolaborasi",
    },
    {
      name: "Dukung Gerakan Kami",
      path: "/mitra-kolaborasi",
      subMenu: [
        { name: "Donasi", path: "/mitra-kolaborasi#donasi" },
        { name: "Kolaborasi", path: "/mitra-kolaborasi#kolaborasi" },
        { name: "Sponsorship Program", path: "/mitra-kolaborasi#sponsorship" },
      ],
    },
  ];

  return (
    <nav
      className={
        isHome
          ? "relative z-100 flex flex-wrap justify-center items-center mt-10 gap-6 md:gap-8 py-8 text-white text-sm font-medium tracking-wide"
          : "relative z-100 flex flex-wrap justify-center items-center py-4 gap-6 md:gap-10 text-gray-700 text-sm font-medium"
      }
    >
      {menuItems.map((item) => (
        <div key={item.name} className="relative group">
          <Link
            to={item.path}
            className={`block py-2 px-1 transition-colors duration-300 ${
              isHome
                ? "hover:text-green-400 drop-shadow-md"
                : "hover:text-green-500"
            }`}
          >
            {item.name}
          </Link>

          {item.subMenu && (
            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 min-w-52
                opacity-0 invisible pointer-events-none
                group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto
                transition-all duration-200 z-110`}
            >
              {/* Area pt-2 = jembatan hover agar kursor tidak putus saat turun ke submenu */}
              <div
                className={`rounded-xl p-2 shadow-2xl backdrop-blur-xl border ${
                  isHome
                    ? "bg-white/15 text-white shadow-black/30 border-white/20"
                    : "bg-white/95 text-gray-800 shadow-gray-400/25 border-gray-100"
                }`}
              >
                {item.subMenu.map((sub) => (
                  <Link
                    key={sub.name}
                    to={sub.path}
                    className={`block px-4 py-2.5 text-xs font-normal rounded-lg transition-colors whitespace-nowrap ${
                      isHome
                        ? "hover:bg-white/15 hover:text-green-400 text-white/90"
                        : "hover:bg-emerald-50 hover:text-green-700 text-gray-700"
                    }`}
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
