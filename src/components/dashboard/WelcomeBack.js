import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const WelcomeBack = ({ username }) => {
  return (
    <Container className="welcome-back m-4">
      <Row>
        <Col>
          <h1>Welcome Back, <span>{username}!</span></h1>
          <p>We're glad to see you again. Here are your latest updates and insights.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomeBack;
