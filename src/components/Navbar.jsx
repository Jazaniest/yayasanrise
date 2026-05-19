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
      ]
    },
    { 
      name: "Isu Prioritas", 
      path: "/isu-prioritas",
      subMenu: [
        { name: "Perubahan Iklim", path: "/isu-prioritas/perubahan-iklim" },
        { name: "Gambut", path: "/isu-prioritas/gambut" },
        { name: "Energi", path: "/isu-prioritas/energi" },
        { name: "Konflik Agraria", path: "/isu-prioritas/konflik-agraria" },
        { name: "Sampah", path: "/isu-prioritas/sampah" },
        { name: "Ekonomi Hijau", path: "/isu-prioritas/ekonomi-hijau" },
        { name: "Ketahanan Pangan", path: "/isu-prioritas/ketahanan-pangan" },
      ]
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
      ]
    },
    { 
      name: "Insight & Opini", 
      path: "/insight-opini",
    //   subMenu: [
    //     { name: "Artikel", path: "/artikel" },
    //     { name: "Opini Ahli", path: "/opini" },
    //   ]
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
      ]
    },
    { 
      name: "Kegiatan", 
      path: "/kegiatan",
    //   subMenu: [
    //     { name: "Galeri Foto", path: "/galeri-foto" },
    //     { name: "Dokumentasi Video", path: "/galeri-video" },
    //   ]
    },
    { 
      name: "Dampak Kami", 
      path: "/dampak-kami",
    //   subMenu: [
    //     { name: "Penerima Manfaat", path: "/penerima-manfaat" },
    //   ]
    },
    { 
      name: "Mitra & Kolaborasi Kami", 
      path: "/mitra-kolaborasi",
    //   subMenu: [
    //     { name: "Daftar Mitra", path: "/mitra" },
    //     { name: "Gabung Mitra", path: "/gabung-mitra" },
    //   ]
    },
    { 
      name: "Dukung Gerakan Kami", 
      path: "/galeri",
      subMenu: [
        { name: "Donasi", path: "/donasi" },
        { name: "Kolaborasi", path: "/volunteer" },
        { name: "Sponsorship Program", path: "/volunteer" },
      ]
    },
  ];

  return (
    <nav
      className={
        isHome
          ? "relative z-50 flex flex-wrap justify-center items-center mt-10 gap-6 md:gap-8 py-8 text-white text-sm font-medium tracking-wide"
          : "flex flex-wrap justify-center items-center py-4 gap-6 md:gap-10 text-gray-700 text-sm font-medium"
      }
    >
      {menuItems.map((item) => (
        <div key={item.name} className="relative group py-2">
          {/* Main Menu Link */}
          <Link
            to={item.path}
            className={`transition-colors duration-300 ${
              isHome
                ? "hover:text-green-400 drop-shadow-md"
                : "hover:text-green-500"
            }`}
          >
            {item.name}
          </Link>

          {/* Sub Menu Dropdown (Tanpa Border, Seamless Hover) */}
          {item.subMenu && (
            <div className="absolute left-1/2 -translate-x-1/2 top-full -mt-2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-52.5">
              <div
                className={`rounded-xl p-2 shadow-2xl backdrop-blur-xl ${
                  isHome
                    ? "bg-white/10 text-white shadow-black/30"
                    : "bg-white/40 text-gray-800 shadow-gray-400/20"
                }`}
              >
                {item.subMenu.map((sub) => (
                  <Link
                    key={sub.name}
                    to={sub.path}
                    className={`block px-4 py-2.5 text-xs font-normal rounded-lg transition-colors whitespace-nowrap ${
                      isHome
                        ? "hover:bg-white/15 hover:text-green-400 text-white/90"
                        : "hover:bg-black/5 hover:text-green-600 text-gray-700"
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