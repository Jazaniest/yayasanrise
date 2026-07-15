import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api/v1';

const apiClient = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export const getAdmins = async () => {
  const response = await apiClient.get('/superadmin/admins');
  return response.data;
};

export const createAdmin = async (adminData) => {
  const response = await apiClient.post('/superadmin/admins', adminData);
  return response.data;
};

export const deleteAdmin = async (id) => {
  const response = await apiClient.delete(`/superadmin/admins/${id}`);
  return response.data;
};
