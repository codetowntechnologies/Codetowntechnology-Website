import React from 'react';
import { Card, Container, Image } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay, Pagination } from 'swiper';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import { serviceData } from './servicedata';
const Services = () => {
  return (
    <Card className='services-card'>
      <Container>
        <div className='services-container'>
          <Card.Text className='h3 mx-auto'>
            OUR OFFERINGS
          </Card.Text>
          <div className='mx-auto services-hr' />
          <Card.Title className='h1'>
            Our Core Services
          </Card.Title>
        </div>
      </Container>
      <div style={{ height: '500px' }}>
        <Swiper
          modules={[FreeMode, Pagination, Autoplay]}
          freeMode={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 15
            }
          }}
          className="services-swiper-container"
        >
          {serviceData && serviceData.map((service, index) => {
            return (
              <SwiperSlide key={`services${index}`}>
                <Card className='services-card-style' style={{ backgroundColor: service.color, height: '100%' }}>
                  <Card.Body>
                    <div className='service-comp-img'>
                      <Image src={service.img} fluid />
                    </div>
                  </Card.Body>
                  <Card.Body className='service-card-bodys'>
                    <Card.Title className='services-card-title'>
                      {service.title}
                    </Card.Title>
                    <Card.Text className='services-card-text'>
                      {service.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Card>
  );
};

export default Services;