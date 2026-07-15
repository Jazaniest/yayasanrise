import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

import PrivateRoute from './components/PrivateRoute';
import SuperAdminRoute from './components/SuperAdminRoute';
import GuestRoute from './components/GuestRoute';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AdminManagement from './pages/AdminManagement';

import ArtikelIlmiahList from './pages/publikasi/ArtikelIlmiahList';
import ArtikelIlmiahForm from './pages/publikasi/ArtikelIlmiahForm';
import PolicyBriefList from './pages/publikasi/PolicyBriefList';
import PolicyBriefForm from './pages/publikasi/PolicyBriefForm';
import LaporanPenelitianList from './pages/publikasi/LaporanPenelitianList';
import LaporanPenelitianForm from './pages/publikasi/LaporanPenelitianForm';
import BukuList from './pages/publikasi/BukuList';
import BukuForm from './pages/publikasi/BukuForm';
import InfografisList from './pages/publikasi/InfografisList';
import InfografisForm from './pages/publikasi/InfografisForm';

import KegiatanList from './pages/KegiatanList';
import KegiatanForm from './pages/KegiatanForm';
import TimPakarList from './pages/TimPakarList';
import TimPakarForm from './pages/TimPakarForm';
import InsightList from './pages/InsightList';
import InsightForm from './pages/InsightForm';
import MitraList from './pages/MitraList';
import MitraForm from './pages/MitraForm';

// This new component handles the routing logic after the initial auth check.
function AppRoutes() {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-500">Initializing...</p>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/login" element={<GuestRoute><Login /></GuestRoute>} />

      <Route path="/dashboard" element={<PrivateRoute><Layout><Dashboard /></Layout></PrivateRoute>} />
      <Route path="/admin-management" element={<SuperAdminRoute><Layout><AdminManagement /></Layout></SuperAdminRoute>} />

      {/* Publikasi Routes */}
      <Route path="/publikasi/artikel-ilmiah" element={<PrivateRoute><Layout><ArtikelIlmiahList /></Layout></PrivateRoute>} />
      <Route path="/publikasi/artikel-ilmiah/:id" element={<PrivateRoute><Layout><ArtikelIlmiahForm /></Layout></PrivateRoute>} />
      <Route path="/publikasi/policy-brief" element={<PrivateRoute><Layout><PolicyBriefList /></Layout></PrivateRoute>} />
      <Route path="/publikasi/policy-brief/:id" element={<PrivateRoute><Layout><PolicyBriefForm /></Layout></PrivateRoute>} />
      <Route path="/publikasi/laporan-penelitian" element={<PrivateRoute><Layout><LaporanPenelitianList /></Layout></PrivateRoute>} />
      <Route path="/publikasi/laporan-penelitian/:id" element={<PrivateRoute><Layout><LaporanPenelitianForm /></Layout></PrivateRoute>} />
      <Route path="/publikasi/buku" element={<PrivateRoute><Layout><BukuList /></Layout></PrivateRoute>} />
      <Route path="/publikasi/buku/:id" element={<PrivateRoute><Layout><BukuForm /></Layout></PrivateRoute>} />
      <Route path="/publikasi/infografis" element={<PrivateRoute><Layout><InfografisList /></Layout></PrivateRoute>} />
      <Route path="/publikasi/infografis/:id" element={<PrivateRoute><Layout><InfografisForm /></Layout></PrivateRoute>} />

      {/* Konten Routes */}
      <Route path="/kegiatan" element={<PrivateRoute><Layout><KegiatanList /></Layout></PrivateRoute>} />
      <Route path="/kegiatan/:id" element={<PrivateRoute><Layout><KegiatanForm /></Layout></PrivateRoute>} />
      <Route path="/tim-pakar" element={<PrivateRoute><Layout><TimPakarList /></Layout></PrivateRoute>} />
      <Route path="/tim-pakar/:id" element={<PrivateRoute><Layout><TimPakarForm /></Layout></PrivateRoute>} />
      <Route path="/insight" element={<PrivateRoute><Layout><InsightList /></Layout></PrivateRoute>} />
      <Route path="/insight/:id" element={<PrivateRoute><Layout><InsightForm /></Layout></PrivateRoute>} />
      <Route path="/mitra" element={<PrivateRoute><Layout><MitraList /></Layout></PrivateRoute>} />
      <Route path="/mitra/:id" element={<PrivateRoute><Layout><MitraForm /></Layout></PrivateRoute>} />

      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
