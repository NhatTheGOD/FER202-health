import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getBloodData } from '../../services/bloodApi';

const BloodRecords = () => {
  const [bloodData, setBloodData] = useState([]);

  useEffect(() => {
    const fetchBloodRecords = async () => {
      try {
        const data = await getBloodData();
        setBloodData(data);
      } catch (error) {
        console.error('Error fetching blood records:', error);
      }
    };

    fetchBloodRecords();
  }, []);

  const formattedData = bloodData.map(entry => ({
    date: entry.date,
    level: entry.level,
    notes: entry.notes
  }));

  return (
    <Container>
      <h2>Blood Sugar Records</h2>
      <div style={{ height: '400px', marginBottom: '20px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={formattedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="level" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Container>
  );
};

export default BloodRecords;
