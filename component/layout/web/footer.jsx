import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Card, Col, Container, Image, Nav, Row } from 'react-bootstrap';

const Footer = () => {
  const router = useRouter();
  return (
    <Card className='footer-card'>
      <Container>
        <Nav className="ml-auto">
          <Card.Body>
            <a href='https://www.linkedin.com/company/code-town-technologies/mycompany/?viewAsMember=true' target={'_blank'} rel="noreferrer">
              <img src='/images/footer/1.png' alt='linkedin' />
            </a>
          </Card.Body>
          {/* <Link href="https://www.linkedin.com/company/code-town-technologies/mycompany/?viewAsMember=true" target='_blank' passHref>
            <Nav.Link>
              <img src='/images/footer/1.png' alt='linkedin' />
            </Nav.Link>
          </Link> */}
          {/* <Link href="#" passHref>
            <Nav.Link><img src='/images/footer/2.png' alt='linkedin' /></Nav.Link>
          </Link>
          <Link href="#" passHref>
            <Nav.Link><img src='/images/footer/3.png' alt='linkedin' /></Nav.Link>
          </Link> */}
        </Nav>

        <Nav className="ml-auto">
          <Link href="/about" passHref>
            <Nav.Link href="/about" className={router.pathname == '/about' ? 'footer-nav-link-active' : 'footer-nav-link'}>About</Nav.Link>
          </Link>
          <Link href="/services" passHref>
            <Nav.Link href="/services" className={router.pathname == '/services' ? 'footer-nav-link-active' : 'footer-nav-link'}>Services</Nav.Link>
          </Link>
          <Link href="/portfolio" passHref>
            <Nav.Link href="/portfolio" className={router.pathname == '/portfolio' ? 'footer-nav-link-active' : 'footer-nav-link'}>Portfolios</Nav.Link>
          </Link>
          <Link href="/team" passHref>
            <Nav.Link href="/team" className={router.pathname == '/team' ? 'footer-nav-link-active' : 'footer-nav-link'}>Our Team</Nav.Link>
          </Link>
          <Link href="/dedicatedDeveloper" passHref>
            <Nav.Link href="/dedicatedDeveloper" className={router.pathname == '/dedicatedDeveloper' ? 'footer-nav-link-active' : 'footer-nav-link'}>Dedicated Developers</Nav.Link>
          </Link>
          <Link href="/github" passHref>
            <Nav.Link href="/github" className={router.pathname == '/github' ? 'footer-nav-link-active' : 'footer-nav-link'}>Github</Nav.Link>
          </Link>
          {/* <Link href="/technology" passHref>
            <Nav.Link className='footer-nav-link'>Technology</Nav.Link>
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
            <Col className='responsive' lg={2} md={5} sm={12} xs={12}>
              <Image src='/images/Logo.png' width={140} alt='logo' />
            </Col>
            <Col className='responsive' lg={5} md={5} sm={12} xs={12}>
              <span className='footer-span'>2022-2023 ©codetowntechnologies - All Rights Reserved</span>
            </Col>
            <Col className='responsive' lg={5} md={5} sm={12} xs={12}>
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