import React from 'react';
import { Card, CardGroup, Col, Container, Form, Image, ListGroup, Row, Stack } from 'react-bootstrap';
import withWebLayout from '../component/layout/web/withWebLayout';
import { about } from '../component/data/about';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { SubmitButton } from '../component/button/submit';
import { PageHeader } from '../component/modules/header/pageHeader';
import { TextBox } from '../component/formik/index';
import Head from 'next/head';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import { ContactData } from '../component/data/contactdata';
import SelectBox from '../component/formik/selectbox';

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
  phone: Yup.string().required('Phone number is required'),
});

const Contact = () => {
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
      <div className='contact-position'>
        <PageHeader
          title='Connect with us'
          subtitle='Get in touch with our experts today.'
          bgImage='/images/contact/background.png'
          classNames='contact-header-image'
        />
        <Container>
          <Row>
            <Col lg={6}>
              <div className='contact-background-color contact-position-form'>
                <Card style={{ backgroundColor: 'transparent', border: '0px' }}>
                  <Form onSubmit={formik.handleSubmit}>
                    <Row>
                      <Col lg={12}>
                        <Form.Label className='contact-form-label'>
                          Name
                        </Form.Label>
                      </Col>
                      <Col lg={6}>
                        <TextBox
                          placeholder='First Name*'
                          name="first_name"
                          label={false}
                          value={formik.values.first_name}
                          handleChange={formik.handleChange}
                          error={formik.touched.first_name && formik.errors.first_name}
                        />
                      </Col>
                      <Col lg={6}>
                        <TextBox
                          placeholder='Last Name*'
                          name="last_name"
                          label={false}
                          value={formik.values.last_name}
                          handleChange={formik.handleChange}
                          error={formik.touched.last_name && formik.errors.last_name}
                        />
                      </Col>
                      <Col lg={6}>
                        <TextBox
                          className='contact-form-label'
                          placeholder='Enter Email'
                          name="email"
                          label="Email"
                          value={formik.values.email}
                          handleChange={formik.handleChange}
                          error={formik.touched.email && formik.errors.email}
                        />
                      </Col>
                      <Col lg={6}>
                        <TextBox
                          className='contact-form-label'
                          placeholder='Enter Contact Number'
                          name="phone"
                          label="Phone Number"
                          value={formik.values.phone}
                          handleChange={formik.handleChange}
                          error={formik.touched.phone && formik.errors.phone}
                        />
                      </Col>
                      <Col lg={12}>
                        <SelectBox
                          option='Select'
                          className='contact-form-label'
                          label="Select a Service"
                        />
                      </Col>
                      <Col lg={6}>
                        <SelectBox
                          option='Select'
                          className='contact-form-label'
                          label="Budget"
                        />
                      </Col>
                      <Col lg={6}>
                        <SelectBox
                          option='Select'
                          className='contact-form-label'
                          name="company"
                          label="How soon you want to start?"
                        />
                      </Col>
                      <Col lg={12}>
                        <SelectBox
                          option='Select'
                          className='contact-form-label'
                          label="Requirment"
                        />
                      </Col>
                      <Col lg={12}>
                        <TextBox
                          className='contact-form-label'
                          name="description"
                          label="Brief about the project"
                          value={formik.values.description}
                          handleChange={formik.handleChange}
                          as="textarea"
                          rows={3}
                          error={formik.touched.description && formik.errors.description}
                        />
                      </Col>
                      <Col lg={12}>
                        <TextBox
                          className='contact-form-label'
                          placeholder='Select or Drop your file here'
                          name="company"
                          label="Have a file to share?"
                          value={formik.values.company}
                          handleChange={formik.handleChange}
                          error={formik.touched.company && formik.errors.company}
                          formtext="Only Document, Image or ZIP file. Max size 8MB"
                        />
                      </Col>
                    </Row>
                    <SubmitButton
                      title='GET STARTED'
                      variant='primary'
                      className='about-contact-btn'
                    />
                  </Form>
                </Card>
              </div>
            </Col>
            <Col lg={6}>
              <Container>
                <Card className='contact-container'>
                  <Card.Body className='contact-body'>
                    <Card.Text className='contact-h1 mx-auto'>
                      Trusted by
                    </Card.Text>
                    <Image src='/images/contact/clients-1.png' className='contact-logo' fluid />
                  </Card.Body>
                </Card>
                <div>
                  <Swiper
                    modules={[FreeMode, Pagination, Autoplay]}
                    freeMode={true}
                    autoplay={{
                      delay: 1500,
                      disableOnInteraction: false
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                      },
                      768: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                      },
                      1280: {
                        slidesPerView: 1,
                        spaceBetween: 15
                      }
                    }}
                    className="contact-swiper-container"
                  >
                    {ContactData && ContactData.map((service, index) => {
                      return (
                        <SwiperSlide key={`services${index}`}>
                          <Card className='contact-card-1' style={{ backgroundColor: service.color }}>
                            <Card.Body>
                              <Card.Img className='contact-card-img-1' src={service.vector} />
                              <Card.Title className='contact-card-title'>
                                {service.title}
                              </Card.Title>
                              <Card.Text className='contact-card-text'>
                                {service.description}
                              </Card.Text>
                              <Card.Footer className='contact-footer'>
                                <Stack direction='horizontal' gap={2}>
                                  <Card.Img width={100} height={220} className='contact-card-img' src={service.image} />
                                  <div className='mt-0'>
                                    <Card.Title className='contact-card-title-1'>
                                      {service.title}
                                    </Card.Title>
                                    <Card.Text className='contact-card-subtitle'>
                                      {service.subtitle}
                                    </Card.Text>
                                  </div>
                                </Stack>
                              </Card.Footer>
                            </Card.Body>
                          </Card>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withWebLayout(Contact);