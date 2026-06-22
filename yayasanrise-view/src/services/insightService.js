import api from './api';

export const getInsights = async () => {
  try {
    const response = await api.get('/insight?status=published');
    return response.data.data;
  } catch (error) {
    console.error("Error fetching insights:", error);
    throw error;
  }
};
