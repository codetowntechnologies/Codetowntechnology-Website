import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';

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
  return (
    <>
      <Navbar fixed='top' className={isScrolled ? 'header-navbar-1' : 'header-navbar'} expand="lg">
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand><Image src='/images/Logo.png' width={150} alt='logo' /> </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="ml-auto">
              <Link href="/about" passHref>
                <Nav.Link className={router.pathname == '/about' ? 'header-nav-link-active' : 'header-nav-link'}>About</Nav.Link>
              </Link>
              <Link href="services" passHref>
                <Nav.Link className={router.pathname == '/services' ? 'header-nav-link-active' : 'header-nav-link'}>Services</Nav.Link>
              </Link>
              <Link href="portfolio" passHref>
                <Nav.Link className={router.pathname == '/portfolio' ? 'header-nav-link-active' : 'header-nav-link'}>Portfolio</Nav.Link>
              </Link>
              {/* <Link href="#" passHref>
                <Nav.Link className={router.pathname == '#' ? 'header-nav-link-active' : 'header-nav-link'}>Technology</Nav.Link>
              </Link>
              <Link href="#" passHref>
                <Nav.Link className={router.pathname == '#' ? 'header-nav-link-active' : 'header-nav-link'}>Process</Nav.Link>
              </Link>
              <Link href="#" passHref>
                <Nav.Link className={router.pathname == '#' ? 'header-nav-link-active' : 'header-nav-link'}>Career</Nav.Link>
              </Link> */}
              <Link href="/contact" passHref>
                <Nav.Link className={router.pathname == '/contact' ? 'header-nav-link-contact-1' : router.pathname == '/portfolio' ? 'header-nav-link-contact-1' : router.pathname == '/services' ? 'header-nav-link-contact-1' : 'header-nav-link-contact'}>Contact Us</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;  