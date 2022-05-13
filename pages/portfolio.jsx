import Head from 'next/head';
import React from 'react';
import { Card, Col, Container, Row, Stack } from 'react-bootstrap';
import withWebLayout from '../component/layout/web/withWebLayout';
import { PageHeader } from '../component/modules/header/pageHeader';
import { PortfolioData } from '../component/data/portfoliodata';

const PortFolio = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Codetown - Technologies</title>
      </Head>
      <div className='contact-position'>
        <PageHeader
          title='Projects that speak about our versatility'
          subtitle='We’re passionate about what we do! Our portfolio is a sheer presentation about 20+ years of industry experience, collaboration, expertise, and quality deliverables.'
          bgImage='/images/contact/background.png'
          classNames='contact-header-image'
        />
      </div>
      <Container>
        <Row>
          {PortfolioData && PortfolioData.map((item, index) => {
            return (
              <>
                <Col xxl={3} lg={4} md={6} sm={12} xs={12} key={`portfolio${index}`}>
                  <Card className='portfolio-card'>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body className='portfolio-card-body'>
                      <Card.Text className='portfolio-card-subheading'>
                        {item.subheading}
                      </Card.Text>
                      <Card.Title className='portfolio-card-title'>{item.title}</Card.Title>
                      <Card.Text className='portfolio-card-subtitle'>
                        {item.subtitle}
                      </Card.Text>
                      <Stack direction='horizontal' gap={3}>
                        <div>
                          <Card.Text className='portfolio-card-technology'>
                            {item.technology}
                          </Card.Text>
                        </div>
                        <div>
                          <Card.Text className='portfolio-card-technology_2'>
                            {item.technology_2}
                          </Card.Text>
                        </div>
                      </Stack>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default withWebLayout(PortFolio);