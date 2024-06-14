
import axios from 'axios';

const API_URL = 'http://localhost:9999'; // Thay đổi nếu bạn sử dụng port khác hoặc domain khác

const getHealthArticles = async () => {
  try {
    const response = await axios.get(`${API_URL}/healthArticles`);
    return response.data;
  } catch (error) {
    console.error('Error fetching getHealthArticles data:', error);
    throw error;
  }
};


// Các hàm API khác như update, delete sẽ được thêm vào tùy theo yêu cầu

export { getHealthArticles };
