import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { Accordion, Card, Col, Container, Image, Nav, Row, Stack, Tab } from 'react-bootstrap';
import { TeamData } from '../component/data/teamData';
import withWebLayout from '../component/layout/web/withWebLayout';
import { PageHeader } from '../component/modules/header/pageHeader';

const Team = () => {
  const router = useRouter();
  return (
    <React.Fragment>
      <Head>
        <title>Codetown - Technologies</title>
      </Head>
      <div className='contact-position'>
        <PageHeader
          title='Our Team'
          subtitle='Just like any other business, we are proud of our team. They help us provide
          our clients with the human connection that is missing in so many other web-design firms.'
          bgImage='/images/team/team-banner.png'
          classNames={false}
          classtitle='banner-team-title'
          classsubtitle='banner-team-subtitle'
        />
      </div>
      <Container>
        {/* <Card className={'team-card'}>
          <Row xs={1} sm={1}>
            {TeamData && TeamData.map((item, index) => {
              return (
                <Col lg={12} key={`TeamData${index}`}>
                  <Card className={'team-card'}>
                    <Card.Title className={'team-card-header'}>
                      {item.title}
                    </Card.Title>
                    <Row xs={1} sm={1} md={item.Details.length == 2 ? 2 : item.Details.length == 3 ? 3 : 3}>
                      {item && item.Details.map((detail, index) => {
                        return (
                          <Col key={`TeamDataDetails${index}`}>
                            <Card className='team-data-card'>
                              <Card.Body className={'item-data-body'}>
                                <Card.Img className={item.id == 3 ? 'team-data-img-1' : 'team-data-img'} src={detail.image} />
                                <Card.Title className='team-data-title'>
                                  {detail.name}
                                </Card.Title>
                                <Card.Text className='team-data-profession'>
                                  {detail.profession}
                                </Card.Text>
                                <Card.Text className='team-data-link' onClick={() => router.push(detail.link)}>
                                  <FontAwesomeIcon icon={faLinkedinIn} />
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                        )
                      })}
                    </Row>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Card> */}

        <div className='team_accordian'>
          {TeamData && TeamData.map((item, index) => {
              return (
                <Accordion defaultActiveKey={`TeamData0`}>
                  <Accordion.Item eventKey={`TeamData${index}`}>
                    <Accordion.Header>{item.title}</Accordion.Header>
                    <Accordion.Body>
                      <Row xs={1} sm={1} md={item.Details.length == 2 ? 2 : item.Details.length == 3 ? 3 : 3}>
                        {item && item.Details.map((detail, index) => {
                          return (
                            <Col key={`TeamDataDetails${index}`}>
                              <Card className='team-data-card'>
                                <Card.Body className={'item-data-body'}>
                                  <Card.Img className={item.id == 3 ? 'team-data-img-1' : 'team-data-img'} src={detail.image} />
                                  <Card.Title className='team-data-title'>
                                    {detail.name}
                                  </Card.Title>
                                  <Card.Text className='team-data-profession'>
                                    {detail.profession}
                                  </Card.Text>
                                  {/* <Card.Text className='team-data-link' onClick={() => router.push(detail.link)}>
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                  </Card.Text> */}
                                </Card.Body>
                              </Card>
                            </Col>
                          )
                        })}
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              )
          })}
        </div>

      </Container>

    </React.Fragment >
  );
};

export default withWebLayout(Team);