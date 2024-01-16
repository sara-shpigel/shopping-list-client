import axios from 'axios';

export const getCategories = async () => {
  try {
    const response = await axios.get('http://localhost:3003/categories', { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
};