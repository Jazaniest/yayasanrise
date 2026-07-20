import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../api/client';

const Profile = () => {
  const { admin, setAdmin } = useAuth(); // Assuming setAdmin is provided by AuthContext
  const [formData, setFormData] = useState({
    name: admin?.name || '',
    email: admin?.email || '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const payload = {
      name: formData.name,
      email: formData.email,
    };
    if (formData.password) {
      payload.password = formData.password;
    }

    try {
      const res = await api.put('/auth/me', payload);
      // We need a way to update the admin object in the context
      // Let's assume AuthContext provides a setAdmin function for this
      if (typeof setAdmin === 'function') {
        setAdmin(res.data.data);
      }
      setMessage('Profile updated successfully!');
      setFormData({ ...formData, password: '' }); // Clear password field
    } catch (err) {
      setMessage(err.response?.data?.message || 'Failed to update profile.');
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4 md:p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">My Profile</h2>
      {message && <p className="mb-4 text-sm text-gray-600">{message}</p>}
      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 md:p-6 space-y-4 overflow-x-auto">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">New Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="Leave blank to keep current password" />
        </div>
        <div className="pt-2">
          <button type="submit" className="w-full md:w-auto bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition">
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
