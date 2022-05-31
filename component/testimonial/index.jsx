import React from 'react';
import { Card, Container, Stack } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import { TestimonialData } from './testimonialData';
const Testimonials = () => {
  return (
    <Card className='testimonial-card'>
      <Container>
        <div className='testimonial-container'>
          <Card.Text className='h3 mx-auto'>
                        TESTIMONIALS
          </Card.Text>
          <div className='mx-auto testimonial-hr' />
          <Card.Title className='h1'>
                        What Our Clients Say
          </Card.Title>
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
                  slidesPerView: 2,
                  spaceBetween: 15
                }
              }}
              className="testimonial-swiper-container"
            >
              {TestimonialData && TestimonialData.map((service, index) => {
                return (
                  <SwiperSlide key={`services${index}`}>
                    <Card className='testimonial-card-1' style={{ backgroundColor: service.color }}>
                      <Card.Body>
                        <Card.Img className='testimonial-card-img-1' src={service.vector} />
                        {/* <Card.Title className='testimonial-card-title'>
                          {service.title}
                        </Card.Title> */}
                        <Card.Text className='testimonial-card-text'>
                          {service.description}
                        </Card.Text>
                        <Card.Footer className='testimonial-footer'>
                          <Stack direction='horizontal' gap={0}>
                            <div className='mt-0'>
                              <Card.Title className='testimonial-card-title-1'>
                                {service.title}
                              </Card.Title>
                              <Card.Text className='testimonial-card-subtitle'>
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
        </div>
      </Container>
    </Card>
  );
};

export default Testimonials;