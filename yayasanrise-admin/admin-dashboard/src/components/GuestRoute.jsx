import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function GuestRoute({ children }) {
  const { admin, loading } = useAuth();

  if (loading) {
    // While checking auth, it's best to show a loader or nothing
    return <div className="flex items-center justify-center min-h-screen"><p className="text-gray-500">Loading...</p></div>;
  }

  // If user is logged in, redirect them away from the guest page (e.g., login page)
  if (admin) {
    return <Navigate to="/dashboard" replace />;
  }

  // If user is not logged in, show the page
  return children;
}
