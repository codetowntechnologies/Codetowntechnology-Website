import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Technologies = () => {
  return (
    <Card className='technologies-card'>
      <Container>
        <div className='technologies-container'>
          <Card.Text className='h3 mx-auto'>
                        we are Code Town Technologies
          </Card.Text>
          <div className='mx-auto technologies-hr' />
          <Card.Title className='h1'>
                        Web, Mobile & Software Development Company
          </Card.Title>
          <Card.Text className='p'>
                        Code Town Technologies is a leading software, web and mobile app development company that has been delivering a peerless set of technology services to various businesses over an eclectic domain. We at Code Town Technologies , have a well-established team of adroit professionals who have expertise in the latest innovative technologies and are capable of delivering state of the art solutions for your every business-specific need. Owing to our optimized and result-oriented IT solutions we have helped many organizations as their valuable technology partners, to scale up the ladder of success.  With 12+ years in the industry, we boast a team of well-grounded developers, designers, and professionals that is what makes us superior. We have successfully executed over 400+ projects globally across 100+ clients.

          </Card.Text>
        </div>
      </Container>
    </Card>
  );
};

export default Technologies;