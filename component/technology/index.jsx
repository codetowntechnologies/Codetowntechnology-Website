import React from 'react';
import { Card, Col, Container, Nav, Row, Tab, Tabs } from 'react-bootstrap';
import { TechnologyData } from './technologyData';
const Technology = () => {
  const [key, setKey] = React.useState('1');

  const handleSelect = (eventKey) => {
    setKey(eventKey);
  };


  return (
    <Card className='technology-card'>
      <Container>
        <div className='technology-container'>
          <Card.Title className='h1'>
            Technologies we work with
          </Card.Title>
          <Tab.Container onSelect={handleSelect} id="noanim-tab-example" defaultActiveKey={key}>
            <Row>
              <Col md={12}>
                <Nav className='justify-content-center border-0 nav-tabs' variant="tabs">
                  {TechnologyData && TechnologyData.map((tech, index) => {
                    return (
                      <Nav.Item key={`navTab${index}`}>
                        <Nav.Link className={key == tech.id ? 'technology-tab nav-tabs' : 'technology-tab-1 nav-tabs'} eventKey={tech.id}>{tech.name}</Nav.Link>
                      </Nav.Item>
                    );
                  })}
                </Nav>
              </Col>
              <Col md={12}>
                <Tab.Content className='technology-tab-content'>
                  {TechnologyData && TechnologyData.map((tech, index) => {
                    return (
                      <Tab.Pane key={`Tab${index}`} eventKey={tech.id}>
                        <Container>
                          <Row className='technology-body'>
                            {tech.image && tech.image.map((img, index) => {
                              return (
                                <>
                                  <Col key={`img${index}`} className='mt-4' lg={2} md={3} sm={4} xs={6}>
                                    <Card.Body className='technology-card-body'>
                                      <div className='technology-image'>
                                        <img src={img.image} alt={img.title} />
                                      </div>
                                      <Card.Text className='technology-text'>
                                        {img.title}
                                      </Card.Text>
                                    </Card.Body>
                                  </Col>
                                </>
                              );
                            })}
                          </Row>
                        </Container>

                      </Tab.Pane>
                    );
                  })}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </Container>
    </Card >
  );
};

export default Technology;