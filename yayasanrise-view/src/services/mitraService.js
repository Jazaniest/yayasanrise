import api from './api';

export const getMitra = async () => {
  try {
    const response = await api.get('/mitra?status=published');
    // Sort by tipe, then urutan
    const sorted = response.data.data.sort((a, b) => {
      if (a.tipe < b.tipe) return -1;
      if (a.tipe > b.tipe) return 1;
      return a.urutan - b.urutan;
    });
    return sorted;
  } catch (error) {
    console.error("Error fetching mitra:", error);
    throw error;
  }
};
