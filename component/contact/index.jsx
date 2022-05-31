import { useRouter } from 'next/router';
import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Contact = () => {
  const router = useRouter();
  return (
    <Card className='contact-card'>
      <Container>
        <div className='contact-container'>
          <Card.Text className='contact-card-h2 mx-auto'>
            Like what you see?
          </Card.Text>
          <Card.Title onClick={() => router.push('/contact')} className='contact-comp-h1'>
            Say hello!
          </Card.Title>
          <div className='me-auto contact-hr' />
        </div>
      </Container>
    </Card>
  );
};

export default Contact;