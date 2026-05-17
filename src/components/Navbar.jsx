import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/home";

  const menuItems = [
    { name: "Beranda", path: "/home" },
    { 
      name: "Tentang Kami", 
      path: "/profil",
      subMenu: [
        { name: "Profil Yayasan", path: "/profil" },
        { name: "Visi & Misi", path: "/visi-misi" },
        { name: "Nilai & Pendekatan", path: "/legalitas" },
        { name: "Legalitas", path: "/legalitas" },
        { name: "Tim & Tenaga Pakar", path: "/legalitas" },
      ]
    },
    { 
      name: "Isu Prioritas", 
      path: "/struktur",
      subMenu: [
        { name: "Perubahan Iklim", path: "/isu-sosial" },
        { name: "Gambut", path: "/isu-ekologi" },
        { name: "Energi", path: "/isu-ekologi" },
        { name: "Konflik Agraria", path: "/isu-ekologi" },
        { name: "Sampah", path: "/isu-ekologi" },
        { name: "Ekonomi Hijau", path: "/isu-ekologi" },
        { name: "Ketahanan Pangan", path: "/isu-ekologi" },
      ]
    },
    { 
      name: "Program Kerja", 
      path: "/pengurus",
      subMenu: [
        { name: "Research & Development", path: "/program-1" },
        { name: "Community Empowerment", path: "/program-2" },
        { name: "Ecological Conflict Resolution", path: "/program-2" },
        { name: "Environmental Education", path: "/program-2" },
        { name: "Riau Socio-Ecological Data Center", path: "/program-2" },
      ]
    },
    { 
      name: "Insight & Opini", 
      path: "/visi-misi",
    //   subMenu: [
    //     { name: "Artikel", path: "/artikel" },
    //     { name: "Opini Ahli", path: "/opini" },
    //   ]
    },
    { 
      name: "Publikasi & Riset", 
      path: "/legalitas",
      subMenu: [
        { name: "Artikel Ilmiah", path: "/jurnal" },
        { name: "Policy Brief", path: "/buku" },
        { name: "Laporan Penelitian", path: "/buku" },
        { name: "Buku/Modul", path: "/buku" },
        { name: "Infografis Data", path: "/buku" },
      ]
    },
    { 
      name: "Kegiatan", 
      path: "/galeri",
    //   subMenu: [
    //     { name: "Galeri Foto", path: "/galeri-foto" },
    //     { name: "Dokumentasi Video", path: "/galeri-video" },
    //   ]
    },
    { 
      name: "Dampak Kami", 
      path: "/galeri",
    //   subMenu: [
    //     { name: "Penerima Manfaat", path: "/penerima-manfaat" },
    //   ]
    },
    { 
      name: "Mitra & Kolaborasi Kami", 
      path: "/galeri",
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
          : "flex flex-wrap justify-center items-center py-8 gap-6 md:gap-10 text-gray-700 text-sm font-medium"
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