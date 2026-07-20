import React, { useState, useEffect } from 'react';
import { getAdmins, createAdmin, deleteAdmin } from '../services/superadminService';

const AdminManagement = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newRole, setNewRole] = useState('admin');

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      setLoading(true);
      const data = await getAdmins();
      setAdmins(data);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch admins');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateAdmin = async (e) => {
    e.preventDefault();
    try {
      await createAdmin({ name: newName, email: newEmail, password: newPassword, role: newRole });
      setNewName('');
      setNewEmail('');
      setNewPassword('');
      setNewRole('admin');
      fetchAdmins(); // Refresh list
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to create admin');
    }
  };

  const handleDeleteAdmin = async (id) => {
    if (window.confirm('Are you sure you want to delete this admin?')) {
      try {
        await deleteAdmin(id);
        fetchAdmins(); // Refresh list
      } catch (err) {
        alert(err.response?.data?.message || 'Failed to delete admin');
      }
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-6 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Admin Management</h1>
        <p className="text-gray-500 mt-2">Manage your administrative team and their access levels.</p>
      </div>

      <div className="bg-white p-5 md:p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
        <h2 className="text-lg md:text-xl font-semibold mb-6 text-gray-800">Create New Admin</h2>
        <form onSubmit={handleCreateAdmin} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} required className="w-full border-gray-200 rounded-lg shadow-sm border p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} required className="w-full border-gray-200 rounded-lg shadow-sm border p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required className="w-full border-gray-200 rounded-lg shadow-sm border p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition" />
          </div>
          <div>
             <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
             <select value={newRole} onChange={(e) => setNewRole(e.target.value)} className="w-full border-gray-200 rounded-lg shadow-sm border p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition">
                <option value="admin">Admin</option>
                <option value="superadmin">Super Admin</option>
             </select>
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="w-full bg-emerald-600 text-white font-medium py-3 rounded-lg hover:bg-emerald-700 transition">Create Admin</button>
          </div>
        </form>
      </div>

      <div className="bg-white p-5 md:p-8 rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <h2 className="text-lg md:text-xl font-semibold mb-6 text-gray-800">Admin List</h2>
        {loading && <p className="text-gray-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {admins.map((admin) => (
                  <tr key={admin.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{admin.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{admin.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-medium rounded-full ${
                          admin.role === 'superadmin' ? 'bg-red-50 text-red-700 border border-red-100' : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                      }`}>
                          {admin.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button onClick={() => handleDeleteAdmin(admin.id)} className="text-red-600 hover:text-red-900 transition">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminManagement;