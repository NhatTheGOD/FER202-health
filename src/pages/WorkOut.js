import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { getWorkouts, getTodayWorkouts, addWorkoutToToday } from '../services/workOutApi';
import WorkoutDetail from '../components/workout/WorkoutDetail';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [todayWorkouts, setTodayWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const data = await getWorkouts();
        setWorkouts(data);
      } catch (error) {
        console.error('Error fetching workouts:', error);
      }
    };

    const fetchTodayWorkouts = async () => {
      try {
        const data = await getTodayWorkouts();
        setTodayWorkouts(data);
      } catch (error) {
        console.error('Error fetching today workouts:', error);
      }
    };

    fetchWorkouts();
    fetchTodayWorkouts();
  }, []);

  const handleWorkoutClick = (workout) => {
    setSelectedWorkout(workout);
  };

  const addToToday = async (workout) => {
    try {
      const newWorkout = await addWorkoutToToday(workout);
      setTodayWorkouts([...todayWorkouts, newWorkout]);
    } catch (error) {
      console.error('Error adding workout to today:', error);
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={4}>
          <h2>Workouts</h2>
          {workouts.map(workout => (
            <Card key={workout.id} className="mb-3" onClick={() => handleWorkoutClick(workout)}>
              <Card.Body>
                <Card.Title>{workout.name}</Card.Title>
                <Card.Text>{workout.shortDescription}</Card.Text>
                <Card.Text><strong>Calories:</strong> {workout.calories} kcal</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col md={8}>
          {selectedWorkout && <WorkoutDetail workout={selectedWorkout} addToToday={addToToday} />}
          <h3>Today's Workout</h3>
          <ul>
            {todayWorkouts.map((workout, index) => (
              <li key={index}>{workout.name} - {workout.calories} kcal - {workout.date}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Workouts;
