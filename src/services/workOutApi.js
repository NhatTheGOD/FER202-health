import axios from 'axios';


const API_URL = 'http://localhost:9999'; // Thay đổi nếu bạn sử dụng port khác hoặc domain khác

const getWorkouts = async () => {
  try {
    const response = await axios.get(`${API_URL}/workouts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blood data:', error);
    throw error;
  }
};

const getTodayWorkouts = async () => {
    try {
      const response = await axios.get(`${API_URL}/todayWorkouts`);
      return response.data;
    } catch (error) {
      console.error('Error fetching today workouts:', error);
      throw error;
    }
  };

  const addWorkoutToToday = async (workout) => {
    try {
      const today = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
      const newWorkout = { ...workout, date: today };
      const response = await axios.post(`${API_URL}/todayWorkouts`, newWorkout);
      return response.data;
    } catch (error) {
      console.error('Error adding workout to today:', error);
      throw error;
    }
  }

export { getWorkouts,getTodayWorkouts,addWorkoutToToday };
