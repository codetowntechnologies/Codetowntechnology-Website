import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { ProcessData } from './processData';

const Process = () => {
  return (
    <Card className='process-card'>
      <Container>
        <div className='process-container'>
          <Card.Text className='h3 mx-auto'>
            Simplify process
          </Card.Text>
          <div className='mx-auto process-hr' />
          <Card.Title className='h1'>
            We Simplify Software Development Process
          </Card.Title>
          <Row>
            {ProcessData && ProcessData.map((value, index) => {
              return (
                <>
                  <Col lg={3} md={6} sm={12} xs={12} key={`process${index}`}>
                    <Card className='process-card-1'>
                      <div className='process-border'>
                        <div className='process-img' style={{ backgroundColor: value.color }}>
                          <Card.Img src={value.image} className='process-image' alt={value.title} />
                        </div>
                        {value.id !== 4 && <span className='process-border-hr' />}
                      </div>
                      <Card.Title className='process-card-title'>
                        {value.title}
                      </Card.Title>
                      <Card.Text className='process-card-text'>
                        {value.description}
                      </Card.Text>
                    </Card>
                  </Col>
                </>
              );
            })}

          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default Process;