import Head from 'next/head';
import React from 'react';
import { Button, Card, Col, Container, Image, Modal, Nav, Row, Stack, Tab } from 'react-bootstrap';
import withWebLayout from '../component/layout/web/withWebLayout';
import { PageHeader } from '../component/modules/header/pageHeader';
import { PortfolioData, PortfolioTabs } from '../component/data/portfoliodata';
import ModelBox from '../component/modules/modal';

const PortFolio = () => {
  const [key, setKey] = React.useState(2);
  const [modalShow, setModalShow] = React.useState(false);
  const [show, setShow] = React.useState(false);

  const handleClose = () => {
    setShow(false);
  }
  const handleShow = (e) => {
  if(e === "invictus"){
    setShow(true);
  }else{
    setShow(false);
  }
  }

  const handleSelect = (eventKey) => {
    setKey(eventKey);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Codetown - Technologies</title>
      </Head>
      <div className='contact-position'>
        <PageHeader
          title='Projects that speak about our versatility'
          subtitle='We’re passionate about what we do! Our portfolio is a sheer presentation about 12+ years of industry experience, collaboration, expertise, and quality deliverables.'
          bgImage='/images/portfolio/portfolio_banner.png'
          classNames='contact-header-image'
        />
      </div>
      <Container>
        <Tab.Container onSelect={handleSelect} id="noanim-tab-example" defaultActiveKey={key}>
          <Row>
            <Col md={12} className='portfolio-tab-container'>
              <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <Nav className='portfolio-nav-items-1 flex-1 border-0 nav-tabs me-auto' variant="tabs">
                    {PortfolioTabs && PortfolioTabs.map((tech, index) => {
                      return (
                        <Nav.Item key={`portfolionavTab${index}`}>
                          <Nav.Link className={key == tech.id ? 'portfolio-technology-tab nav-tabs' : 'portfolio-technology-tab-1 nav-tabs'} eventKey={tech.id}>{tech.name}</Nav.Link>
                        </Nav.Item>
                      );
                    })}
                  </Nav>
                </Col>
                {/* <Col lg={6} md={6} sm={12} xs={12}>
                  <Nav className="portfolio-nav-items" activeKey="/home">
                    <Nav.Item onClick={() => window.location.reload()}>
                      <Nav.Link className='portfolio-nav-refresh'><Image src='images/portfolio/refresh.png' /> </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col> */}
              </Row>
            </Col>
            <Col md={12}>
              <Tab.Content className='portfolio-technology-tab-content'>
                {PortfolioData && PortfolioData.map((tech, index) => {
                  return (
                    <Tab.Pane key={`Tab${index}`} eventKey={tech.id}>
                      <Container>
                        <Row>
                          {tech.Details && tech.Details.map((item, index) => {
                            return (
                              <>
                                <Col xxl={3} lg={4} md={6} sm={12} xs={12} key={`portfolio${index}`}>
                                  <Card className='portfolio-card'>
                                    <Card.Img className='portfolio-img' variant="top" src={item.image} />
                                    <Card.Body className='portfolio-card-body'>
                                      <Card.Text className='portfolio-card-subheading'>
                                        {item.subheading}
                                      </Card.Text>
                                      <Card.Title className='portfolio-card-title'>{item.title}</Card.Title>
                                      <Stack direction='horizontal' gap={3}>
                                        {item.technology && <div onClick={() => handleShow(item.android_link)}>
                                          {item.android_link === "invictus" ? 
                                          <Card.Text className='portfolio-card-technology'>
                                              {item.technology}
                                            </Card.Text> : 
                                            <a style={{ textDecoration: 'none'}} href={item.android_link} target='_blank' rel='noopener noreferrer'>
                                              <Card.Text className='portfolio-card-technology'>
                                                {item.technology}
                                              </Card.Text>
                                            </a>
                                            }
                                        </div>}
                                          {item.technology_2 && <div onClick={() => handleShow(item.iphone_link)}>
                                            {item.iphone_link === "invictus" ?
                                                <Card.Text className='portfolio-card-technology_2'>
                                                  {item.technology_2}
                                                </Card.Text>:
                                                <a style={{ textDecoration: 'none' }} href={item.iphone_link} target='_blank' rel='noopener noreferrer'>
                                                  <Card.Text className='portfolio-card-technology_2'>
                                                    {item.technology_2}
                                                  </Card.Text>
                                              </a>
                                            }
                                        </div>}
                                        
                                        {item.technology_3 && <div onClick={() => handleShow(item.web_link)}>
                                          {item.web_link === "invictus" ?
                                            <Card.Text className='portfolio-card-technology_2'>
                                              {item.technology_3}
                                            </Card.Text>:
                                            <a style={{ textDecoration: 'none' }} href={item.web_link} target='_blank' rel='noopener noreferrer'>
                                              <Card.Text className='portfolio-card-technology_2'>
                                                {item.technology_3}
                                              </Card.Text>
                                            </a>
                                            }
                                        </div>}
                                      </Stack>
                                    </Card.Body>
                                  </Card>
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
      </Container>
      {/* This is modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Scan the QR code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{textAlign: "center"}}>
           <img src='/images/portfolio/qr-code.png' alt='QR-code' />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <ModelBox
        show={modalShow}
        onHide={() => setModalShow(false)}
        fullscreen="xxl-down"
        src='/images/portfolio-details/logo.png'
      >
        <Card.Body>
          <Card.Title className='portfolio-details-head'>
            bilstein
          </Card.Title>
          <Card.Text className='portfolio-detail-subhead'>
            photography, photo app
          </Card.Text>
          <Row>
            <Col lg={2}>
              <div className='portfolio-detail-chips-border'>
                <Card.Text className='portfolio-detail-chips'>
                  BACKEND
                </Card.Text>
              </div>
            </Col>
            <Col lg={2}>
              <div className='portfolio-detail-chips-border'>
                <Card.Text className='portfolio-detail-chips'>
                  DATABASE
                </Card.Text>
              </div>
            </Col>
            <Col lg={2}>
              <div className='portfolio-detail-chips-border'>
                <Card.Text className='portfolio-detail-chips'>
                  FRONTEND
                </Card.Text>
              </div>
            </Col>
            <Col lg={2}>
              <div className='portfolio-detail-chips-border'>
                <Card.Text className='portfolio-detail-chips'>
                  SOFTWARE TESTING
                </Card.Text>
              </div>
            </Col>
            <Col lg={2}>
              <div className='portfolio-detail-chips-border'>
                <Card.Text className='portfolio-detail-chips'>
                  STRATEGY
                </Card.Text>
              </div>
            </Col>
            <Col lg={2}>
              <div className='portfolio-detail-chips-border'>
                <Card.Text className='portfolio-detail-chips'>
                  UX/UI
                </Card.Text>
              </div>
            </Col>
          </Row>
          <div>
            <Image src='/images/portfolio-details/Group.png' />
          </div>
          <div>
            <Image src='/images/portfolio-details/app-icon.png' className='mb-2' />
          </div>
          <Card.Title className='portfolio-details-head'>
            bilstein OVERVIEW
          </Card.Title>
          <Card.Text className='portfolio-details-paragraph'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Card.Text>
          <Row className='mb-5'>
            <Col lg={4}>
              <Image src='/images/portfolio-details/iphone.png' />
            </Col>
            <Col lg={4}>
              <Image src='/images/portfolio-details/android.png' />
            </Col>
            <Col lg={4}>
              <Image src='/images/portfolio-details/web.png' />
            </Col>
          </Row>
          <Image src='/images/portfolio-details/love.png' />
        </Card.Body>
        <Card.Text className='portfolio-detail-footer'>
          IF YOU LIKE WHAT YOU SEE, SHOW SOME LOVE
        </Card.Text>
      </ModelBox>
    </React.Fragment>
  );
};

export default withWebLayout(PortFolio);