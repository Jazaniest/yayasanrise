import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function SuperAdminRoute({ children }) {
  const { admin, loading } = useAuth();

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen"><p className="text-gray-500">Loading...</p></div>;
  }

  // Redirect to login if not authenticated, or if authenticated but not a superadmin
  if (!admin || admin.role !== 'superadmin') {
    // Optionally, redirect to a generic 'unauthorized' page instead of login
    return <Navigate to="/login" replace />;
  }

  return children;
}
