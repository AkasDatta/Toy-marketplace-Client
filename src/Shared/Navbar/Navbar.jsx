import { useEffect, useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import './Navbar.css';
import toysLogo from '../../assets/toys_logo.jpg';

const NavBar = () => {
  const [navbarShadow, setNavbarShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarShadow(true);
      } else {
        setNavbarShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      style={{ backgroundColor: '#fff' }}
      expand="lg"
      fixed="top"
      className={navbarShadow ? 'navbar-shadow' : ''}
    >
      <Container>
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img src={toysLogo} alt="" className="logo-image" />
          <span className="fw-bold" style={{ color: '#F379A7' }}>
            Verse
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0">
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
          </Nav>
          <Button className="custom-button">Free</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
