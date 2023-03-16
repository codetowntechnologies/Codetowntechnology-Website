import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { CustomButton } from '../component/button/button';
import withWebLayout from '../component/layout/web/withWebLayout';
import { PageHeader } from '../component/modules/header/pageHeader';

const Services = () => {
  const router = useRouter();
  return (
    <React.Fragment>
      <Head>
        <title>Codetown - Technologies</title>
      </Head>
      <div className='contact-position'>
        <PageHeader
          title='Web and Mobile Software Development Services'
          subtitle='A successful offshare software application development company since 2020, providing a full range of website and mobile app development, games development, IoT, AR-VR and other IT Services and solutions globally.'
          bgImage='/images/team/team-banner.png'
          classNames='services-text'
        />
      </div>
      <Container className='mt-4 mb-4'>
        <Row>
          <Col md={6} lg={6} className='services-page-col'>
            <Card className='services-card-content'>
              <Card.Title className='services-header'>
                Mobile Apps Development
              </Card.Title>
              <Card.Text className='services-page-text'>
                From B2B or B2E apps for enterprises, small businesses, and startups, we have a proven track record of offering high-impact, result driven and engaging mobile application development services. IndiaNIC is a top mobile app development company that is renowned for delivering native Android app development, native iOS app development, hybrid and cross-platform app development services to build next-gen mobile applications using the latest technology stack.
              </Card.Text>
              <Row>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/apple.png' alt='apple' />
                  </div>
                </Col>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/android.png' alt='apple' />
                  </div>
                </Col>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/react.png' alt='apple' />
                  </div>
                </Col>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/titanium.png' alt='apple' />
                  </div>
                </Col>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/xamarin.png' alt='apple' />
                  </div>
                </Col>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/phone.png' alt='apple' />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <ul>
                    <li className='services-page-text-li'>
                      Native iOS App Development.
                    </li>
                    <li className='services-page-text-li'>
                      Cross-platform App Development
                    </li>
                    <li className='services-page-text-li'>
                      Wearable App Development
                    </li>
                    <li className='services-page-text-li'>
                      Xamarin App Development
                    </li>
                  </ul>
                </Col>
                <Col lg={6}>
                  <ul>
                    <li className='services-page-text-li'>
                      Native AndroidApp Development
                    </li>
                    <li className='services-page-text-li'>
                      Hybrid App Development
                    </li>
                    <li className='services-page-text-li'>
                      React Native App Development
                    </li>
                    <li className='services-page-text-li'>
                      Flutter App Development
                    </li>
                  </ul>
                </Col>
              </Row>
              <Col>
                <CustomButton
                  onClick={() => router.push('/portfolio')}
                  title='LEARN MORE'
                  className='services-page-btn'
                />
              </Col>
            </Card>
          </Col>
          <Col md={6} lg={6} className='services-page-col'>
            <Card className='services-card-image-1'>
              <Card.Body className='serices-body-part'>
                <Image src='/images/service-page/service-1.png' fluid />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={6} className='services-page-col' >
            <Card className='services-card-image-2'>
              <Card.Body className='serices-body-part'>
                <Image src='/images/service-page/service-2.png' fluid />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={6} className='services-page-col'>
            <Card className='services-card-content'>
              <Card.Title className='services-header'>
                Web Development
              </Card.Title>
              <Card.Text className='services-page-text'>
                Being a leading website application development company, our certified developers have unparalleled expertise in working with the latest web technologies to deliver custom web solutions. Whether creating a web presence for your company, an information hub for your business or empowering your apps/IoT devices through backend- IndiaNIC does it all by covering a wide spectrum of web solutions and framework.
              </Card.Text>
              <Row>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/php.png' alt='php' />
                  </div>
                </Col>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/n.png' alt='n' />
                  </div>
                </Col>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/java.png' alt='java' />
                  </div>
                </Col>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/wordpress.png' alt='wordpress' />
                  </div>
                </Col>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/ic-technology.png' alt='ic' />
                  </div>
                </Col>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/joomla.png' alt='joomla' />
                  </div>
                </Col>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/ze.png' alt='ze' />
                  </div>
                </Col>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/cake-php.png' alt='cake-php' />
                  </div>
                </Col>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/a.png' alt='a' />
                  </div>
                </Col>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/steal.png' alt='steal' />
                  </div>
                </Col>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/u.png' alt='u' />
                  </div>
                </Col>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/shopify.png' alt='shopify' />
                  </div>
                </Col>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/html.png' alt='html' />
                  </div>
                </Col>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/sql.png' alt='sql' />
                  </div>
                </Col>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/leaf.png' alt='leaf' />
                  </div>
                </Col>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/node.png' alt='node' />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <ul>
                    <li className='services-page-text-li'>
                      Custom Website Development.
                    </li>
                    <li className='services-page-text-li'>
                      eCommerce Store Development
                    </li>
                    <li className='services-page-text-li'>
                      Full-Stack Development
                    </li>
                    <li className='services-page-text-li'>
                      Progressive Web Apps
                    </li>
                  </ul>
                </Col>
                <Col lg={6}>
                  <ul>
                    <li className='services-page-text-li'>
                      Web Application Development
                    </li>
                    <li className='services-page-text-li'>
                      Custom CRM/ERP Software Apps
                    </li>
                    <li className='services-page-text-li'>
                      Responsive Web Apps
                    </li>
                    <li className='services-page-text-li'>
                      Bespoke CMS Development
                    </li>
                  </ul>
                </Col>
              </Row>
              <Col>
                <CustomButton
                  onClick={() => router.push('/portfolio')}
                  title='LEARN MORE'
                  className='services-page-btn'
                />
              </Col>
            </Card>
          </Col>
          <Col md={6} lg={6} className='services-page-col'>
            <Card className='services-card-content'>
              <Card.Title className='services-header'>
                UI/UX Design
              </Card.Title>
              <Card.Text className='services-page-text'>
                UI/UX design is the catalyst behind the success of any web or mobile app. IndiaNIC is a leading web design and mobile app design agency with a knack of turning great ideas into meaningful interactions. Starting from conceptualization, information architecture, visual identity, and UX design; hire UI/UX designers from IndiaNIC for timely delivery of appealing websites and mobile apps resulting maximum user engagement.
              </Card.Text>
              <Row>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/axure.png' alt='apple' />
                  </div>
                </Col>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/xd.png' alt='apple' />
                  </div>
                </Col>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/figma.png' alt='apple' />
                  </div>
                </Col>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/ai.png' alt='apple' />
                  </div>
                </Col>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/ps.png' alt='apple' />
                  </div>
                </Col>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/sketch.png' alt='apple' />
                  </div>
                </Col>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/in.png' alt='apple' />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <ul>
                    <li className='services-page-text-li'>
                      Wireframes Designing
                    </li>
                    <li className='services-page-text-li'>
                      High/Low fidelity Prototype
                    </li>
                    <li className='services-page-text-li'>
                      Responsive Web Design
                    </li>
                    <li className='services-page-text-li'>
                      UX Analysis
                    </li>
                  </ul>
                </Col>
                <Col lg={6}>
                  <ul>
                    <li className='services-page-text-li'>
                      Strategic Design Consulting
                    </li>
                    <li className='services-page-text-li'>
                      Mobile App Design
                    </li>
                    <li className='services-page-text-li'>
                      Information Architecture
                    </li>
                    <li className='services-page-text-li'>
                      UI Design
                    </li>
                  </ul>
                </Col>
              </Row>
              <Col>
                <CustomButton
                  onClick={() => router.push('/portfolio')}
                  title='LEARN MORE'
                  className='services-page-btn'
                />
              </Col>
            </Card>
          </Col>
          <Col md={6} lg={6} className='services-page-col'>
            <Card className='services-card-image-3'>
              <Card.Body className='serices-body-part'>
                <Image src='/images/service-page/service-3.png' fluid />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={6} className='services-page-col' >
            <Card className='services-card-image-4'>
              <Card.Body className='serices-body-part'>
                <Image src='/images/service-page/service-4.png' fluid />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={6} className='services-page-col'>
            <Card className='services-card-content'>
              <Card.Title className='services-header'>
                IoT Solutions
              </Card.Title>
              <Card.Text className='services-page-text'>
                Leveraging the power of Internet of Things (IoT), the network of “Connected Devices”, IndiaNIC is the best IoT service provider in developing innovative IoT solutions. Our IoT experts develop bespoke and innovative IoT solutions to simplify and automate complex business processes. Together we can create amazing wireless experiences with the modern IoT hardware to collect information. Hire the best IoT programmers from IndiaNIC who help startups and enterprises to build an IoT platform and connect it with other cloud, onsite applications or multiple IoT platforms.
              </Card.Text>
              <Row>
                <Col lg={6}>
                  <ul>
                    <li className='services-page-text-li'>
                      Smart Home Automation
                    </li>
                    <li className='services-page-text-li'>
                      IoT Application Development
                    </li>
                    <li className='services-page-text-li'>
                      APIs & Backend
                    </li>
                    <li className='services-page-text-li'>
                      IoT System Integration
                    </li>
                    <li className='services-page-text-li'>
                      IoT Solution Testing
                    </li>
                  </ul>
                </Col>
                <Col lg={6}>
                  <ul>
                    <li className='services-page-text-li'>
                      Implementation and Support
                    </li>
                    <li className='services-page-text-li'>
                      Industrial IoT Automation
                    </li>
                    <li className='services-page-text-li'>
                      iBeacon Solutions
                    </li>
                    <li className='services-page-text-li'>
                      IoT Cloud Integration
                    </li>
                    <li className='services-page-text-li'>
                      Industry-grade IoT Consultation
                    </li>
                  </ul>
                </Col>
              </Row>
              <Col>
                <CustomButton
                  onClick={() => router.push('/portfolio')}
                  title='LEARN MORE'
                  className='services-page-btn'
                />
              </Col>
            </Card>
          </Col>
          <Col md={6} lg={6} className='services-page-col'>
            <Card className='services-card-content'>
              <Card.Title className='services-header'>
                Wearables App Development
              </Card.Title>
              <Card.Text className='services-page-text'>
                Smart wearable devices have become a new fashion statement today. You will certainly want to tap on the extremely exclusive market of the apps that run on these smart accessories. Being a leading wearable app development company, we have hands-on experience in delivering robust, innovative, interactive and high performing wearable apps for various wearable devices like Google Glass, Android Wear, Samsung Gear, Fitbit, AR-VR based wearables, etc. Wearables app development experts from IndiaNIC are here to transcend your business idea into small screens for best-in-class digital experiences.
              </Card.Text>
              <Row>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/watch.png' alt='apple' />
                  </div>
                </Col>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/tracking.png' alt='apple' />
                  </div>
                </Col>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/android-watch.png' alt='apple' />
                  </div>
                </Col>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/google-glass.png' alt='apple' />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <ul>
                    <li className='services-page-text-li'>
                      Apple Watch Apps
                    </li>
                    <li className='services-page-text-li'>
                      Google Glass Apps
                    </li>
                    <li className='services-page-text-li'>
                      Fitness Tracking Apps like Fitbit
                    </li>
                  </ul>
                </Col>
                <Col lg={6}>
                  <ul>
                    <li className='services-page-text-li'>
                      Android Wear Apps
                    </li>
                    <li className='services-page-text-li'>
                      Wearable Healthcare Apps
                    </li>
                    <li className='services-page-text-li'>
                      Apps for VR headsets
                    </li>
                  </ul>
                </Col>
              </Row>
              <Col>
                <CustomButton
                  onClick={() => router.push('/portfolio')}
                  title='LEARN MORE'
                  className='services-page-btn'
                />
              </Col>
            </Card>
          </Col>
          <Col md={6} lg={6} className='services-page-col'>
            <Card className='services-card-image-5'>
              <Card.Body className='serices-body-part'>
                <Image src='/images/service-page/service-5.png' fluid />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={6} className='services-page-col'>
            <Card className='services-card-image-6'>
              <Card.Body className='serices-body-part'>
                <Image src='/images/service-page/service-6.png' fluid />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={6} className='services-page-col'>
            <Card className='services-card-content'>
              <Card.Title className='services-header'>
                AI - ML App Development
              </Card.Title>
              <Card.Text className='services-page-text'>
                Looking to add intelligence to your existing business application or want to develop a new one? You are in the right place. Our AI-ML engineers will help you do that. We build AI-ML solutions that will save upto 30% cost on your overall business operations. We have expertise in working with tools, frameworks and technologies like TensorFlow, Apache SystemML, Caffe, Apache Mahout, OpenNN, Torch, Neuroph, Mycroft AI, etc. to foster business intelligence to diverse industry verticals.
              </Card.Text>
              <Row>
                <Col lg={6}>
                  <ul>
                    <li className='services-page-text-li'>
                      Product Recommendation Engine
                    </li>
                    <li className='services-page-text-li'>
                      Image Processing & Recognition
                    </li>
                    <li className='services-page-text-li'>
                      Virtual Try-on
                    </li>
                    <li className='services-page-text-li'>
                      Predictive Analysis
                    </li>
                  </ul>
                </Col>
                <Col lg={6}>
                  <ul>
                    <li className='services-page-text-li'>
                      AI-ML Consultation
                    </li>
                    <li className='services-page-text-li'>
                      Chatbots / Conversational AI
                    </li>
                    <li className='services-page-text-li'>
                      Robotic Process Automation (RPA)
                    </li>
                    <li className='services-page-text-li'>
                      Behavior Analytics
                    </li>
                    <li className='services-page-text-li'>
                      Emotion Learning
                    </li>
                  </ul>
                </Col>
              </Row>
              <Col>
                <CustomButton
                  onClick={() => router.push('/portfolio')}
                  title='LEARN MORE'
                  className='services-page-btn'
                />
              </Col>
            </Card>
          </Col>
          <Col md={6} lg={6} className='services-page-col'>
            <Card className='services-card-content'>
              <Card.Title className='services-header'>
                Quality Assurance (QA)
              </Card.Title>
              <Card.Text className='services-page-text'>
                We keep Quality Assurance (QA) and software testing services at the core of our ecosystem. IndiaNIC has proven testing experts whose confidence helps in faster releases with uncompromised quality. We perform various tests such as Functional, GUI, Usability, Security, Database testing, Cross-platform, Cross-browser, Accessibility, etc. Our QA experts work with DevOps tools and automated build testing techniques for faster delivery. With us, you will have full access to QA reports to stay updated about test results having all the details.
              </Card.Text>
              <Row>
                <Col lg={6}>
                  <ul>
                    <li className='services-page-text-li'>
                      QA Documentation
                    </li>
                    <li className='services-page-text-li'>
                      Web Testing Automation
                    </li>
                    <li className='services-page-text-li'>
                      Mobile Testing Automation
                    </li>
                    <li className='services-page-text-li'>
                      API Testing Automation
                    </li>
                  </ul>
                </Col>
                <Col lg={6}>
                  <ul>
                    <li className='services-page-text-li'>
                      Manual QA Testing
                    </li>
                    <li className='services-page-text-li'>
                      Mobile App Testing
                    </li>
                    <li className='services-page-text-li'>
                      Performance Testing
                    </li>
                    <li className='services-page-text-li'>
                      Expert QA Consultation
                    </li>
                  </ul>
                </Col>
              </Row>
              <Col>
                <CustomButton
                  onClick={() => router.push('/portfolio')}
                  title='LEARN MORE'
                  className='services-page-btn'
                />
              </Col>
            </Card>
          </Col>
          <Col md={6} lg={6} className='services-page-col'>
            <Card className='services-card-image-7'>
              <Card.Body className='serices-body-part'>
                <Image src='/images/service-page/service-7.png' fluid />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={6} className='services-page-col'>
            <Card className='services-card-image-8'>
              <Card.Body className='serices-body-part'>
                <Image src='/images/service-page/service-8.png' fluid />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={6} className='services-page-col'>
            <Card className='services-card-content'>
              <Card.Title className='services-header'>
                Hire Dedicated Developers
              </Card.Title>
              <Card.Text className='services-page-text'>
                Create your own software development team on your time and terms by handpicking the best developers from IndiaNIC. We offer flexible engagement models to hire developers on a short term, long term or permanent basis to ideally suit your business needs. Scale up your development team within 48 hours with ready-to-kick-off experts. We follow a consultative approach to prepare a roadmap that describes the skill set and experience you need based on your project idea.
              </Card.Text>
              <Row>
                <Col lg={6}>
                  <ul>
                    <li className='services-page-text-li'>
                      Onsite Hiring
                    </li>
                    <li className='services-page-text-li'>
                      Fixed Rate Hiring
                    </li>
                    <li className='services-page-text-li'>
                      Dedicated Hiring
                    </li>
                    <li className='services-page-text-li'>
                      Predictive Analysis
                    </li>
                  </ul>
                </Col>
                <Col lg={6}>
                  <ul>
                    <li className='services-page-text-li'>
                      Offsite Hiring
                    </li>
                    <li className='services-page-text-li'>
                      Hourly Hiring
                    </li>
                  </ul>
                </Col>
              </Row>
              <Col>
                <CustomButton
                  onClick={() => router.push('/dedicatedDeveloper')}
                  title='LEARN MORE'
                  className='services-page-btn'
                />
              </Col>
            </Card>
          </Col>
          <Col md={6} lg={6} className='services-page-col'>
            <Card className='services-card-content'>
              <Card.Title className='services-header'>
                Virtual Reality Apps Development
              </Card.Title>
              <Card.Text className='services-page-text'>
                VR world is growing fast and IndiaNIC, being a top VR app development company in India & USA, offers realistic experiences for Virtual Reality headsets. Our VR app solutions are a perfect fit for industrial use cases, enterprises, and entertainment. We have proven expertise in delivering VR app development services to build captivating 3D environments and interactive VR apps for diverse industry verticals.
              </Card.Text>
              <Row>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/vive.png' alt='apple' />
                  </div>
                </Col>
                <Col lg={4} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/samsung.png' alt='apple' />
                  </div>
                </Col>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/o.png' alt='apple' />
                  </div>
                </Col>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/google-glass.png' alt='apple' />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <ul>
                    <li className='services-page-text-li'>
                      HTV Vive Apps
                    </li>
                    <li className='services-page-text-li'>
                      Oculus Rift + Touch
                    </li>
                    <li className='services-page-text-li'>
                      VR Cardboard & Oculus Apps
                    </li>
                    <li className='services-page-text-li'>
                      VR Instructional Diagrams
                    </li>
                  </ul>
                </Col>
                <Col lg={6}>
                  <ul>
                    <li className='services-page-text-li'>
                      Samsung Gear Apps
                    </li>
                    <li className='services-page-text-li'>
                      Microsoft HoloLens Apps
                    </li>
                    <li className='services-page-text-li'>
                      Strategic VR Consultation
                    </li>
                    <li className='services-page-text-li'>
                      Industry-grade VR Solutions
                    </li>
                  </ul>
                </Col>
              </Row>
              <Col>
                <CustomButton
                  onClick={() => router.push('/portfolio')}
                  title='LEARN MORE'
                  className='services-page-btn'
                />
              </Col>
            </Card>
          </Col>
          <Col md={6} lg={6} className='services-page-col'>
            <Card className='services-card-image-9'>
              <Card.Body className='serices-body-part'>
                <Image src='/images/service-page/service-9.png' fluid />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={6} className='services-page-col' >
            <Card className='services-card-image-10'>
              <Card.Body className='serices-body-part'>
                <Image src='/images/service-page/service-10.png' fluid />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={6} className='services-page-col'>
            <Card className='services-card-content'>
              <Card.Title className='services-header'>
                Mobile Game Development
              </Card.Title>
              <Card.Text className='services-page-text'>
                Creating games is the most energetic part of our business. Our skilled mobile game development team can handle projects from scratch or from any development stage. We’ve been successfully involved in the delivery of highly interactive and exciting gaming experience on Mobile, Console, and Virtual Reality platforms. We turn your idea into an addictive Android or iOS game application while making sure we create out of the box gaming solutions.
              </Card.Text>
              <Row>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/box.png' alt='php' />
                  </div>
                </Col>
                <Col lg={2} xs={3} sm={3} md={4}>
                  <div className='services-page-image'>
                    <img src='/images/service-page/technologies/brand.png' alt='n' />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <ul>
                    <li className='services-page-text-li'>
                      3D / 2D Games
                    </li>
                    <li className='services-page-text-li'>
                      Character Design
                    </li>
                    <li className='services-page-text-li'>
                      3D Modeling
                    </li>
                  </ul>
                </Col>
                <Col lg={6}>
                  <ul>
                    <li className='services-page-text-li'>
                      Unity 3D plugins
                    </li>
                    <li className='services-page-text-li'>
                      Monetization Strategy
                    </li>
                    <li className='services-page-text-li'>
                      Mobile Games Publishing
                    </li>
                  </ul>
                </Col>
              </Row>
              <Col>
                <CustomButton
                  onClick={() => router.push('/portfolio')}
                  title='LEARN MORE'
                  className='services-page-btn'
                />
              </Col>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default withWebLayout(Services);