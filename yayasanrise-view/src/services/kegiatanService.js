import api from './api';

export const getAllKegiatan = async () => {
  try {
    const response = await api.get('/kegiatan?status=published');
    return response.data.data;
  } catch (error) {
    console.error("Error fetching kegiatan:", error);
    throw error;
  }
};
