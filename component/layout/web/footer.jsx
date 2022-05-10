import Link from 'next/link';
import React from 'react';
import { Card, Col, Container, Image, Nav, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <Card className='footer-card'>
      <Container>
        <Nav className="ml-auto">
          <Link href="#" passHref>
            <Nav.Link>
              <img src='/images/footer/1.png' alt='linkedin' />
            </Nav.Link>
          </Link>
          <Link href="#" passHref>
            <Nav.Link><img src='/images/footer/2.png' alt='linkedin' /></Nav.Link>
          </Link>
          <Link href="#" passHref>
            <Nav.Link><img src='/images/footer/3.png' alt='linkedin' /></Nav.Link>
          </Link>         
        </Nav>

        <Nav className="ml-auto">
          <Link href="/about" passHref>
            <Nav.Link className='footer-nav-link'>About</Nav.Link>
          </Link>
          {/* <Link href="services" passHref>
            <Nav.Link className='footer-nav-link'>Services</Nav.Link>
          </Link>
          <Link href="/technology" passHref>
            <Nav.Link className='footer-nav-link'>Technology</Nav.Link>
          </Link>
          <Link href="/portfolio" passHref>
            <Nav.Link className='footer-nav-link'>Portfolio</Nav.Link>
          </Link>
          <Link href="/process" passHref>
            <Nav.Link className='footer-nav-link'>Process</Nav.Link>
          </Link>
          <Link href="/career" passHref>
            <Nav.Link className='footer-nav-link'>Career</Nav.Link>
          </Link> */}
        </Nav>
        <div className="mt-5 pb-2">
          <Row>
            <Col lg={2}>
              <Image src='/images/Logo.png' width={140} alt='logo' />
            </Col>
            <Col lg={5}>
              <span className='footer-span'>2022-2023 ©codetowntechnologies - All Rights Reserved</span>
            </Col>
            <Col lg={5}>
              <div className='footer-detail'>
                {/* <span className='footer-contacts-1'><Image src='/images/footer/mobile.png' /> +91 76270 37613</span> */}
                <span className='footer-contacts'><Image src='/images/footer/email.png' /> hr@codeTownTechnologies.com</span>
              </div>
            </Col>
          </Row>
        </div>
        {/* <Nav className="ml-auto mt-4">
          <Nav.Item className='footer-codetown'>
            <span>2020-2022 ©codetowntechnologies - All Rights Reserved</span>
          </Nav.Item>
          <Nav.Item className='footer-codetown'>
            <span>2020-2022 ©codetowntechnologies - All Rights Reserved</span>
          </Nav.Item>
        </Nav> */}
      </Container>
    </Card>
  );
};

export default Footer;