import React from 'react';
import { Card, CardGroup, Col, Container, Form, Image, ListGroup, Row, Stack } from 'react-bootstrap';
import withWebLayout from '../component/layout/web/withWebLayout';
import { PageHeader } from '../component/modules/header/pageHeader';
import { about } from '../component/data/about';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { SubmitButton } from '../component/button/submit';
import FloatTextBox from '../component/formik/floatTextBox';
import Head from 'next/head';



const ValidationSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('First name is required'),
  last_name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Contact number is required'),
  company: Yup.string()
    .min(10, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Company is required')
});

const About = () => {
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      company: '',
      phone: '',
      description: '',
    },
    validationSchema: ValidationSchema,
    onSubmit: async (values) => {
      console.log('values', values);
    },
  });
  return (
    <React.Fragment>
      <Head>
        <title>Codetown - Technologies</title>
      </Head>
      <PageHeader
        title='Specialists that deliver.'
        subtitle='We know the process, and empower a multidisciplinary team to collaborate with you and deliver delightful solutions.'
        bgImage='/images/about/header.png'
        classNames='about-subtext'
      />
      <Container>
        <Row>
          <Col lg={6} sm={12}>
            <Card className='about-card'>
              <Card.Text className='about-h3'>
                Your implementation partner of choice
              </Card.Text>
              <Card.Title className='about-h1'>
                Excellence is a Habit
              </Card.Title>
              <Card.Text className='about-p'>
                We believe that the future is digital. We also believe that using right technology solutions, whether for personal or corporate needs, enhances the progress. Hence, Code Town Technologies offers an optimised suite of software consulting services that enable businesses to develop business strategy, organizational capability, build brands, find customers, win tenders and achieve sustained growth.
              </Card.Text>
              <ListGroup style={{ position: 'relative' }} className='about-listgroup'>
                <div className='responsive-images' style={{ position: 'relative', width: '20px' }}>
                  <div className='aboutlistgroupitem'>
                  </div>
                </div>
                <ListGroup.Item className='about-listgroup-item' as="li">
                  <Stack direction='horizontal' gap={3}>
                    <Image src='/images/about/about-dot.png' className='about-dot' fluid />
                    <span className='about-p-1'>Create Customer focussed Interaction Models</span>
                  </Stack>
                </ListGroup.Item>
                <ListGroup.Item className='about-listgroup-item' as="li">
                  <Stack direction='horizontal' gap={3}>
                    <Image src='/images/about/about-dot.png' className='about-dot' fluid />
                    <span className='about-p-1'>Build an effective Fault-tolerant, Time-tested Business Continuity Plan</span>
                  </Stack>
                </ListGroup.Item>
                <ListGroup.Item className='about-listgroup-item' as="li">
                  <Stack direction='horizontal' gap={3}>
                    <Image src='/images/about/about-dot.png' className='about-dot' fluid />
                    <span className='about-p-1'>Embrace Service Delivery Mechanisms that Can Be Measured</span>
                  </Stack>
                </ListGroup.Item>
                <ListGroup.Item className='about-listgroup-item' as="li">
                  <Stack direction='horizontal' gap={3}>
                    <Image src='/images/about/about-dot.png' className='about-dot' fluid />
                    <span className='about-p-1'>Indulge in Transparent Business Engagement</span>
                  </Stack>
                </ListGroup.Item>
                <ListGroup.Item className='about-listgroup-item' as="li">
                  <Stack direction='horizontal' gap={3}>
                    <Image src='/images/about/about-dot.png' className='about-dot' fluid />
                    <span className='about-p-1'>Deliver Effective and Efficient Solutions to maximize ROI</span>
                  </Stack>
                </ListGroup.Item>
              </ListGroup>
              <Card.Text className='about-p about-top'>
                With a metric-driven approach, we help companies build intelligent and real-time customer relationships. We enable this by leveraging the power of software technology through proprietary and best in-class digital marketing automation and data analytics platform. We provide integrated solutions that reduce costs and improve business agility through the combination of infrastructure and consulting services.
              </Card.Text>
            </Card>
          </Col>
          <Col lg={6} sm={12}>
            <Card className='about-card card-image'>
              <Image src='/images/about/group.png' fluid />
            </Card>
          </Col>
        </Row>
      </Container>
      <div className='about-background-color'>
        <Container>
          <Row>
            <Col lg={4} style={{ position: 'relative' }}>
              <Card className='about-card card-image'>
                <Image className='about-position-card-1' src='/images/about/walk.png' fluid />
                <Image className='about-position-card' src='/images/about/Cover.png' fluid />
              </Card>
            </Col>
            <Col lg={8}>
              <Card className='about-card-1'>
                <Card.Title className='about-h1 about-section'>
                  Our ethos are our foundation
                </Card.Title>
                <ListGroup className='about-listgroup'>
                  <ListGroup.Item className='about-listgroup-item' as="li">
                    <Stack direction='horizontal' gap={3}>
                      <Image src='/images/about/1.png' className='about-image' fluid />
                      <div>
                        <Card.Text className='about-p-2'>You care about more than just code</Card.Text>
                        <p className='about-head'>
                          WE CREATE VALUE
                        </p>
                      </div>
                    </Stack>
                  </ListGroup.Item>
                  <ListGroup.Item className='about-listgroup-item' as="li">
                    <Stack direction='horizontal' gap={3}>
                      <Image src='/images/about/2.png' className='about-image' fluid />
                      <div>
                        <Card.Text className='about-p-2'>You expect proactiveness</Card.Text>
                        <p className='about-head'>
                          WE SHARE OUR EXPERIENCES
                        </p>
                      </div>
                    </Stack>
                  </ListGroup.Item>
                  <ListGroup.Item className='about-listgroup-item' as="li">
                    <Stack direction='horizontal' gap={3}>
                      <Image src='/images/about/3.png' className='about-image' fluid />
                      <div>
                        <Card.Text className='about-p-2'>You want us to look beyond a deadline</Card.Text>
                        <p className='about-head'>
                          WE AIM TO START A GROWTH JOURNEY
                        </p>
                      </div>
                    </Stack>
                  </ListGroup.Item>
                  <ListGroup.Item className='about-listgroup-item' as="li">
                    <Stack direction='horizontal' gap={3}>
                      <Image src='/images/about/4.png' className='about-image' fluid />
                      <div>
                        <Card.Text className='about-p-2'>We align our success with yours</Card.Text>
                        <p className='about-head'>
                          WE STAND BY YOU WHILE YOU BASK IN YOUR SUCCESS
                        </p>
                      </div>
                    </Stack>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Card.Title className='about-h1-1'>
          Core values
        </Card.Title>
        <Card.Text className='about-h3-1'>
          Code Town heart and soul revolves around its key values
        </Card.Text>
        <CardGroup className='about-cardgroup'>
          {about && about.map((item, index) => {
            return (
              <>
                <Col key={`contact${index}`} lg={4} md={6} sm={12}>
                  <Card className="about-core-card">
                    <div className='about-core-background'>
                      <Card.Img className="about-core-image" src={item.image} alt={item.title} />
                      <Card.ImgOverlay className="about-core-imageoverlay">
                        <div className='about-core-overlay'>
                          <Card.Title className='about-core-h1'>{item.title}</Card.Title>
                          <Card.Text className='about-core-h3'>
                            {item.subtitle}
                          </Card.Text>
                        </div>
                      </Card.ImgOverlay>
                    </div>
                  </Card>
                </Col>
              </>
            );
          })}
        </CardGroup>
      </Container>
      <div className='about-background-color'>
        <Container>
          <Row>
            <Col lg={6} sm={12}>
              <div className='services-container'>
                <Card.Text className='about-h3 mx-auto'>
                  CONTACT US
                </Card.Text>
                <div className='me-auto about-hr' />
                <Card.Title className='about-contact-h1'>
                  Time to break the ice?
                </Card.Title>
                <Card.Text className='about-contact-text'>
                  We would love to hear from you.
                </Card.Text>
                <Card.Text className='about-contact-text-1'>
                  Please fill the form or send us an email
                </Card.Text>
                <Card.Text className='about-contact-text-2' >
                  sales@codetowntechnologies.com
                </Card.Text>
              </div>
            </Col>
            <Col lg={6} sm={12}>
              <Card style={{ backgroundColor: 'transparent', border: '0px' }}>
                <Form onSubmit={formik.handleSubmit}>
                  <Row>
                    <Col lg={6}>
                      <FloatTextBox
                        placeholder='Enter First Name'
                        name="first_name"
                        label="First Name*"
                        value={formik.values.first_name}
                        onChange={formik.handleChange}
                        error={formik.touched.first_name && formik.errors.first_name}
                      />
                    </Col>
                    <Col lg={6}>
                      <FloatTextBox
                        placeholder='Enter Last Name'
                        name="last_name"
                        label="Last Name*"
                        value={formik.values.last_name}
                        onChange={formik.handleChange}
                        error={formik.touched.last_name && formik.errors.last_name}
                      />
                    </Col>
                    <Col lg={6}>
                      <FloatTextBox
                        placeholder='Enter Email'
                        name="email"
                        label="Company Email*"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && formik.errors.email}
                      />
                    </Col>
                    <Col lg={6}>
                      <FloatTextBox
                        placeholder='Enter Contact Number'
                        name="phone"
                        type='text'
                        label="Contact Number*"
                        value={formik.values.phone}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '');
                          formik.setFieldValue('phone', value);
                        }}
                        error={formik.touched.phone && formik.errors.phone}
                      />
                    </Col>
                    <Col lg={12}>
                      <FloatTextBox
                        placeholder='Enter Company'
                        name="company"
                        label="Company*"
                        value={formik.values.company}
                        onChange={formik.handleChange}
                        error={formik.touched.company && formik.errors.company}
                      />
                    </Col>
                    <Col lg={12}>
                      <FloatTextBox
                        placeholder='Description'
                        name="description"
                        label="Please send a message to get the conversation started"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        as="textarea"
                        styles={{ height: '100px' }}
                        error={formik.touched.description && formik.errors.description}
                      />
                    </Col>
                  </Row>
                  <SubmitButton
                    title='SUBMIT'
                    variant='warning'
                    className='about-contact-btn'
                  />
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment >
  );
};

export default withWebLayout(About);