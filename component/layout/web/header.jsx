import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Container, Image, Nav, Navbar, Offcanvas } from 'react-bootstrap';

const Header = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = React.useState(false);
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
      };
    }
  }, [isScrolled]);
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);
  return (
    <>
      <div>
        <Navbar fixed='top' className={isScrolled ? 'header-navbar-1' : 'header-navbar'} expand='lg'>
          <Container>
            <Link href="/" passHref>
              <Navbar.Brand><Image src='/images/Logo.png' width={150} alt='logo' /> </Navbar.Brand>
            </Link>
            <Navbar.Toggle onClick={handleOpen} aria-controls='offcanvasNavbar-expand-lg' />
            <Navbar.Offcanvas
              id='offcanvasNavbar-expand-lg'
              aria-labelledby='offcanvasNavbarLabel-expand-lg'
              placement="end"
              show={show}
              onHide={handleClose}
            >
              <Offcanvas.Header closeButton>
                <Link href="/" passHref>
                  <Offcanvas.Title id='offcanvasNavbarLabel-expand-lg'>
                    <Navbar.Brand><Image src='/images/Logo.png' width={150} alt='logo' /> </Navbar.Brand>
                  </Offcanvas.Title>
                </Link>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link href="/about" passHref>
                    <Nav.Link onClick={handleClose} className={router.pathname == '/about' ? 'header-nav-link-active' : 'header-nav-link'}>About</Nav.Link>
                  </Link>
                  <Link href="services" passHref>
                    <Nav.Link onClick={handleClose} className={router.pathname == '/services' ? 'header-nav-link-active' : 'header-nav-link'}>Services</Nav.Link>
                  </Link>
                  <Link href="portfolio" passHref>
                    <Nav.Link onClick={handleClose} className={router.pathname == '/portfolio' ? 'header-nav-link-active' : 'header-nav-link'}>Portfolio</Nav.Link>
                  </Link>
                  <Link href="/team" passHref>
                    <Nav.Link onClick={handleClose} className={router.pathname == '/team' ? 'header-nav-link-active' : 'header-nav-link'}>Our Team</Nav.Link>
                  </Link>
                  <Link href="/github" passHref>
                    <Nav.Link onClick={handleClose} className={router.pathname == '/github' ? 'header-nav-link-active' : 'header-nav-link'}>Github</Nav.Link>
                  </Link>
                  <Link href="/contact" passHref>
                    <Nav.Link onClick={handleClose} className={router.pathname == '/contact' ? 'header-nav-link-contact-1' : router.pathname == '/portfolio' ? 'header-nav-link-contact-1' : router.pathname == '/services' ? 'header-nav-link-contact-1' : 'header-nav-link-contact'}>Contact Us</Nav.Link>
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;  