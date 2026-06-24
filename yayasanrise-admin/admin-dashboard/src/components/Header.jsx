import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const { admin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      <h1 className="text-lg font-semibold text-gray-700">Dashboard</h1>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-500">{admin?.name || 'Admin'}</span>
        <button
          onClick={handleLogout}
          className="text-sm text-red-600 hover:text-red-800 transition font-medium"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
