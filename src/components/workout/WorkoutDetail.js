import React from 'react';
import { Card, Button } from 'react-bootstrap';

const WorkoutDetail = ({ workout, addToToday }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{workout.name}</Card.Title>
        <Card.Text>
          {workout.description}
        </Card.Text>
        <Card.Text>
          <strong>Duration:</strong> {workout.duration} minutes
        </Card.Text>
        <Card.Text>
          <strong>Calories:</strong> {workout.calories} kcal
        </Card.Text>
        {workout.videoUrl && (
          <div>
            <h4>Instructional Video:</h4>
            <video width="100%" controls>
              <source src={workout.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        <Button onClick={() => addToToday(workout)}>Add to Today's Workout</Button>
      </Card.Body>
    </Card>
  );
};

export default WorkoutDetail;
