// File: services/bloodApi.js

import axios from 'axios';

const API_URL = 'http://localhost:9999'; // Thay đổi nếu bạn sử dụng port khác hoặc domain khác

const getBloodData = async () => {
  try {
    const response = await axios.get(`${API_URL}/blood`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blood data:', error);
    throw error;
  }
};

const addBloodRecord = async (record) => {
  try {
    const response = await axios.post(`${API_URL}/blood`, record);
    return response.data;
  } catch (error) {
    console.error('Error adding blood record:', error);
    throw error;
  }
};

// Các hàm API khác như update, delete sẽ được thêm vào tùy theo yêu cầu

export { getBloodData, addBloodRecord };
