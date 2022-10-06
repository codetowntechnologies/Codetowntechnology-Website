import Head from 'next/head';
import React from 'react';
import { Card, Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import withWebLayout from '../component/layout/web/withWebLayout';
import { PageHeader } from '../component/modules/header/pageHeader';
import { GitHubData, GitHubTabs } from '../component/data/githubData';

const GitHub = () => {
  const [key, setKey] = React.useState(2);

  const handleSelect = (eventKey) => {
    console.log('eventKey', eventKey)
    setKey(eventKey);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Codetown - Technologies</title>
      </Head>
      <div className='contact-position'>
        <PageHeader
          title='Github Link'
          subtitle='We’re passionate about what we do! Our portfolio is a sheer presentation about 20+ years of industry experience, collaboration, expertise, and quality deliverables.'
          bgImage='/images/github/github.png'
          classNames='contact-header-image'
          open={true}
        />
      </div>
      <Container>
        <Tab.Container onSelect={handleSelect} id="noanim-tab-example" defaultActiveKey={key}>
          <Row>
            <Col md={12} className='portfolio-tab-container'>
              <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <Nav className='portfolio-nav-items-1 flex-1 border-0 nav-tabs me-auto' variant="tabs">
                    {GitHubTabs && GitHubTabs.map((tech, index) => {
                      return (
                        <Nav.Item key={`portfolionavTab${index}`}>
                          <Nav.Link className={key == tech.id ? 'portfolio-technology-tab nav-tabs' : 'portfolio-technology-tab-1 nav-tabs'} eventKey={tech.id}>{tech.name}</Nav.Link>
                        </Nav.Item>
                      );
                    })}
                  </Nav>
                </Col>
              </Row>
            </Col>
            <Col md={12}>
              <Tab.Content className='portfolio-technology-tab-content'>
                {GitHubData && GitHubData.map((tech, index) => {
                  return (
                    <Tab.Pane key={`Tab${index}`} eventKey={tech.id}>
                      <Container>
                        <Row>
                          {tech.Details && tech.Details.map((item, index) => {
                            return (
                              <Col lg={12} key={`tacchDetails${index}`}>
                                <Card style={{ boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.1)', borderRadius: '8px', border: '1px solid #F9F9F9', gap: '10px', marginTop: '15px' }}>
                                  <a style={{ textDecoration: 'none' }} href={item.link} target='_blank' rel="noreferrer">
                                    <Card.Body>
                                      <Card.Text style={{
                                        fontSize: "16px", fontWeight: '400', color: '#1A1A1A'
                                      }}>{item?.link}</Card.Text>
                                    </Card.Body>
                                  </a>
                                </Card>
                              </Col>
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
    </React.Fragment>
  );
};

export default withWebLayout(GitHub);