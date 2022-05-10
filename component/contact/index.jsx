import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Contact = () => {
  return (
    <Card className='contact-card'>
      <Container>
        <div className='contact-container'>
          <Card.Text className='contact-card-h2 mx-auto'>
          Like what you see?
          </Card.Text>
          <Card.Title className='contact-comp-h1'>
                        Say hello!
          </Card.Title>
          <div className='me-auto contact-hr' />
        </div>
      </Container>
    </Card>
  );
};

export default Contact;