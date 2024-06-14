import React, { useState, useEffect } from 'react';
import { getHealthArticles } from '../../services/healthArticle';
import { Card } from 'react-bootstrap';

const HealthArticle = () => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchHealthArticles = async () => {
      try {
        const articles = await getHealthArticles();
        const randomArticle = articles[Math.floor(Math.random() * articles.length)];
        setArticle(randomArticle);
      } catch (error) {
        console.error('Error fetching health articles:', error);
      }
    };

    fetchHealthArticles();
  }, []);

  return (
    article && (
      <Card style={{ position: 'fixed', bottom: '80px', right: '80px', width: '300px', zIndex: 1000 }}>
        <Card.Body>
          <Card.Text>Tips for a better Health everyday</Card.Text>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>{article.content}</Card.Text>
        </Card.Body>
      </Card>
    )
  );
};

export default HealthArticle;
