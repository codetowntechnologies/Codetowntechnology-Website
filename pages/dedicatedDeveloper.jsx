import React from 'react';
import Head from 'next/head';
import withWebLayout from '../component/layout/web/withWebLayout';
import { PageHeader } from '../component/modules/header/pageHeader';
import { Accordion, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { CustomButton } from '../component/button/button';

const DedicatedDeveloper = () => {
  return (
    <React.Fragment>
        <Head>
        <title>Codetown - Technologies</title>
      </Head>
      <div className='contact-position'>
        <PageHeader
          title='Hire Dedicated Developers'
          subtitle='Our dedicated developers employ cutting-edge technologies and client-centric business approach to deliver high-quality software development services for a wide range of industries in a time-efficient manner.'
          bgImage='/images/team/team-banner.png'
          classNames={false}
          classtitle='banner-team-title'
          classsubtitle='banner-team-subtitle'
        />
      </div>
      <Container className='mt-4 mb-4'>
        <Row>
            <Col md={8} lg={8} className='services-page-col'>
                <Card className='services-card-content'>
                    <Card.Title>
                      Looking to hire dedicated developers for 
                      <span className='services-header'> your project?</span> 
                    </Card.Title>
                    <Card.Text className='services-page-text'>
                      Hire experienced developers that can design and develop high-quality solutions in a cost-effective and timely manner based on your project requirements.
                    </Card.Text>
                    <Col>
                       <CustomButton
                         onClick={() => router.push('/dedicatedDeveloper')}
                         title='HIRE FOR PROJECT'
                         className='services-page-btn'
                        />
                    </Col>
                </Card>
            </Col>

            <Col md={4} lg={4} className='services-page-col'>
            <Card className='services-card-image-1'>
              <Card.Body className='serices-body-part'>
                <Image src='/images/hire-developer/Hire-Developer.png' alt='Hire-Developer' fluid />
              </Card.Body>
            </Card>
            </Col>

            <Col md={4} lg={4} className='services-page-col'>
            <Card className='services-card-image-1'>
              <Card.Body className='serices-body-part'>
                <Image src='/images/service-page/service-1.png' fluid />
              </Card.Body>
            </Card>
            </Col>

            <Col md={8} lg={8} className='services-page-col'>
                <Card className='services-card-content'>
                    <Card.Title>
                      Want to hire developers to 
                      <span className='services-header'> scale up your team?</span> 
                    </Card.Title>
                    <Card.Text className='services-page-text'>
                      Whether you're a startup or a Fortune 500 company, Matellio can help businesses enhance their development teams and plug their talent gaps.
                    </Card.Text>
                    <Col>
                       <CustomButton
                         onClick={() => router.push('/dedicatedDeveloper')}
                         title='HIRE A TEAM MEMBER'
                         className='services-page-btn'
                        />
                    </Col>
                </Card>
            </Col>
        </Row>
      </Container>
      <div style={{backgroundColor: "#f8f8fe", padding: "40px 0"}}>
        <Container>
            <div>
                <h2 className='dedicated_developer_heading'>Hire Dedicated Developers for Diverse Technology Requirements</h2>
                <h4 className='dedicated_developer_heading_two'>Mobility Solutions</h4>
                <p className='dadicated_developer_subtitle'>Our expert mobile app developers deliver feature-rich and well-designed mobility solutions.</p>
                <Row>
                    <Col md={3} lg={3}>
                        <div className='dedicated_developer_box_item'>
                            <img src="/images/hire-developer/icon/React-JS.png" alt='React Native' />
                            <h6>React Native Developers</h6>
                        </div>
                    </Col>
                    <Col md={3} lg={3}>
                        <div className='dedicated_developer_box_item'>
                            <img src="/images/hire-developer/icon/Apple.png" alt='Apple' />
                            <h6>iOS Developers</h6>
                        </div>
                    </Col>
                    <Col md={3} lg={3}>
                        <div className='dedicated_developer_box_item'>
                            <img src="/images/hire-developer/icon/Android.png" alt='Android' />
                            <h6>Android Developers</h6>
                        </div>
                    </Col>
                    <Col md={3} lg={3}>
                        <div className='dedicated_developer_box_item'>
                            <img src="/images/hire-developer/icon/flutter.png" alt='flutter' />
                            <h6>Flutter Developers</h6>
                        </div>
                    </Col>
                    <Col md={3} lg={3}>
                        <div className='dedicated_developer_box_item'>
                            <img src="/images/hire-developer/icon/Swift.png" alt='Swift' />
                            <h6>Swift Developers</h6>
                        </div>
                    </Col>
                    <Col md={3} lg={3}>
                        <div className='dedicated_developer_box_item'>
                            <img src="/images/hire-developer/icon/kotlin.png" alt='kotlin' />
                            <h6>Kotlin Developers</h6>
                        </div>
                    </Col>
                </Row>

                  <div style={{marginTop: "40px"}}>
                    <h4 className='dedicated_developer_heading_two'>Hire for Backend</h4>
                    <p className='dadicated_developer_subtitle'>Matellio’s backend developers deliver a sound and fault-tolerant backbone for the most elaborate of software solutions.</p>
                    <Row>
                    <Col md={3} lg={3}>
                        <div className='dedicated_developer_box_item'>
                            <img src="/images/hire-developer/icon/ror.png" alt='ROR Developer' />
                            <h6>ROR Developers</h6>
                        </div>
                    </Col>
                    <Col md={3} lg={3}>
                        <div className='dedicated_developer_box_item'>
                            <img src="/images/hire-developer/icon/Java.png" alt='Java' />
                            <h6>Java Developers</h6>
                        </div>
                    </Col>
                    <Col md={3} lg={3}>
                        <div className='dedicated_developer_box_item'>
                            <img src="/images/hire-developer/icon/Laravel.png" alt='Laravel' />
                            <h6>Laravel Developers</h6>
                        </div>
                    </Col>
                    <Col md={3} lg={3}>
                        <div className='dedicated_developer_box_item'>
                            <img src="/images/hire-developer/icon/Python.png" alt='Python' />
                            <h6>Python Developers</h6>
                        </div>
                    </Col>
                    <Col md={3} lg={3}>
                        <div className='dedicated_developer_box_item'>
                            <img src="/images/hire-developer/icon/Full-Stack.png" alt='Full-Stack' />
                            <h6>Full Stack Developers</h6>
                        </div>
                    </Col>
                    <Col md={3} lg={3}>
                        <div className='dedicated_developer_box_item'>
                            <img src="/images/hire-developer/icon/ASP-net.png" alt='ASP-net' />
                            <h6>ASP.NET Developers</h6>
                        </div>
                    </Col>
                    <Col md={3} lg={3}>
                        <div className='dedicated_developer_box_item'>
                            <img src="/images/hire-developer/icon/Full-Stack.png" alt='Full-Stack' />
                            <h6>Mean Stack Developers</h6>
                        </div>
                    </Col>
                    </Row>
                  </div>

                  <div style={{marginTop: "40px"}}>
                    <h4 className='dedicated_developer_heading_two'>Hire for Frontend</h4>
                    <p className='dadicated_developer_subtitle'>Our frontend developers and designers excel at creating rich and vibrant UIs with focus on user friendly experiences.</p>
                    <Row>
                    <Col md={3} lg={3}>
                        <div className='dedicated_developer_box_item'>
                            <img src="/images/hire-developer/icon/Angular.png" alt='Angular' />
                            <h6>Angular Developers</h6>
                        </div>
                    </Col>
                    <Col md={3} lg={3}>
                        <div className='dedicated_developer_box_item'>
                            <img src="/images/hire-developer/icon/Vue-JS.png" alt='Vue-JS' />
                            <h6>Vue JS Developers</h6>
                        </div>
                    </Col>
                    <Col md={3} lg={3}>
                        <div className='dedicated_developer_box_item'>
                            <img src="/images/hire-developer/icon/React-JS.png" alt='React-JS' />
                            <h6>React JS Developers</h6>
                        </div>
                    </Col>
                    <Col md={3} lg={3}>
                        <div className='dedicated_developer_box_item'>
                            <img src="/images/hire-developer/icon/next.png" alt='Next js' />
                            <h6>Next JS Developers</h6>
                        </div>
                    </Col>
                    </Row>
                  </div>

                  <div style={{marginTop: "40px"}}>
                    <h4 className='dedicated_developer_heading_two'>Emerging Tech Solutions</h4>
                    <p className='dadicated_developer_subtitle'>Using their skills and immense experience, Matellio’s team of emerging tech developers helps you build the software solutions of tomorrow.</p>
                    <Row>
                    <Col md={3} lg={3}>
                        <div className='dedicated_developer_box_item'>
                            <img src="/images/hire-developer/icon/Chatbot.png" alt='Chatbot' />
                            <h6>Chatbot Developers</h6>
                        </div>
                    </Col>
                    <Col md={3} lg={3}>
                        <div className='dedicated_developer_box_item'>
                            <img src="/images/hire-developer/icon/AR-VR.png" alt='AR-VR' />
                            <h6>AR & VR Developers</h6>
                        </div>
                    </Col>
                    <Col md={3} lg={3}>
                        <div className='dedicated_developer_box_item'>
                            <img src="/images/hire-developer/icon/Machine-Learning.png" alt='Machine-Learning' />
                            <h6>ML Developers</h6>
                        </div>
                    </Col>
                    <Col md={3} lg={3}>
                        <div className='dedicated_developer_box_item'>
                            <img src="/images/hire-developer/icon/salesforce.png" alt='salesforce' />
                            <h6>Salesforce</h6>
                        </div>
                    </Col>
                    <Col md={3} lg={3}>
                        <div className='dedicated_developer_box_item'>
                            <img src="/images/hire-developer/icon/Tensor-Flow.png" alt='Tensor-Flow' />
                            <h6>Tensor Flow</h6>
                        </div>
                    </Col>
                    <Col md={3} lg={3}>
                        <div className='dedicated_developer_box_item'>
                            <img src="/images/hire-developer/icon/Hyperledger.png" alt='Hyperledger' />
                            <h6>Hyperledger</h6>
                        </div>
                    </Col>
                    <Col md={3} lg={3}>
                        <div className='dedicated_developer_box_item'>
                            <img src="/images/hire-developer/icon/Blockchain.png" alt='Blockchain' />
                            <h6>Blockchain</h6>
                        </div>
                    </Col>
                    <Col md={3} lg={3}>
                        <div className='dedicated_developer_box_item'>
                            <img src="/images/hire-developer/icon/Graph-QL.png" alt='Graph-QL' />
                            <h6>Graph QL</h6>
                        </div>
                    </Col>
                    <Col md={3} lg={3}>
                        <div className='dedicated_developer_box_item'>
                            <img src="/images/hire-developer/icon/Crypto.png" alt='Crypto' />
                            <h6>Crypto Currency</h6>
                        </div>
                    </Col>
                    <Col md={3} lg={3}>
                        <div className='dedicated_developer_box_item'>
                            <img src="/images/hire-developer/icon/Flask-Framework.png" alt='Flask-Framework' />
                            <h6>Flask Framework</h6>
                        </div>
                    </Col>
                    <Col md={3} lg={3}>
                        <div className='dedicated_developer_box_item'>
                            <img src="/images/hire-developer/icon/ICO-Platform.png" alt='ICO-Platform' />
                            <h6>ICO Platform</h6>
                        </div>
                    </Col>
                    <Col md={3} lg={3}>
                        <div className='dedicated_developer_box_item'>
                            <img src="/images/hire-developer/icon/AWS.png" alt='AWS' />
                            <h6>AWS</h6>
                        </div>
                    </Col>
                    </Row>
                  </div>
            </div>
        </Container>
      </div>

      <div style={{backgroundColor: "#fff", padding: "40px 0"}} className="dedicated_developer_questions">
        <Container>
        <h4 className='dedicated_developer_heading_two'>Frequently Asked Questions</h4>
        <Row style={{marginTop: "20px"}}>
          <Col md={6} lg={6}>
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>1. How much does it cost to hire dedicated developers?</Accordion.Header>
                <Accordion.Body>
                The cost of hiring the developers for your project depends on many factors. The number of developers hired, technologies they are working upon, and time duration are just a few to list. However, you can leverage our flexible engagement models to reduce your hiring cost. With our cost-effective models, you can easily get talented resources for your project on an hourly, weekly, or even monthly basis. 
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>2. How can we communicate with the hired developers?</Accordion.Header>
                <Accordion.Body>
                At Codetown, we always try to enhance our communication process to help you seamlessly connect with your team. You can easily connect with your hired project managers through a reliable online communication platform. Be it Skype or Microsoft Teams; our developers will offer you weekly or monthly project reports at your convenience. 
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col md={6} lg={6}>
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>3. Can I hire more developers when needed in the middle of the project?</Accordion.Header>
                <Accordion.Body>
                Yes, you can hire more resources per your project requirements with Matellio. We offer need-based scaling capabilities to our clients to help them scale up and down their team as per their project needs. 
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>4. Can I change the engagement model at a later stage?</Accordion.Header>
                <Accordion.Body>
                Yes, you can easily select any engagement models even later in your project. We offer four types of engagement models, and you can choose any of them according to your business and project needs.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default withWebLayout(DedicatedDeveloper);
