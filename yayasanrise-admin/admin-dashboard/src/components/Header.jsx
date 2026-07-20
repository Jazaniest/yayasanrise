import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Header({ onToggleSidebar }) {
  const { admin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button onClick={onToggleSidebar} className="md:hidden text-gray-500">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-lg font-semibold text-gray-700">Dashboard</h1>
      </div>
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
