import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

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

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={
            <PrivateRoute><Layout><Dashboard /></Layout></PrivateRoute>
          } />

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

          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
