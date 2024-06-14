import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getTodayWorkouts } from '../../services/workOutApi';

const WorkoutChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchTodayWorkouts = async () => {
      try {
        const data = await getTodayWorkouts();
        setChartData(data);
      } catch (error) {
        console.error('Error fetching today workouts:', error);
      }
    };

    fetchTodayWorkouts();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <h2>WorkOut Records</h2>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="calories" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WorkoutChart;
