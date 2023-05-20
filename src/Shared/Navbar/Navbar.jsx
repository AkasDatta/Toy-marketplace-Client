import { useContext, useEffect, useState } from 'react';
import { Navbar, Container, Nav, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './Navbar.css';
import toysLogo from '../../assets/toys_logo.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const NavBar = () => {
  const [navbarShadow, setNavbarShadow] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [photoLoading, setPhotoLoading] = useState(true);
  const [photoError, setPhotoError] = useState(false);

  const handleLogout = () => {
    logOut()
      .then()
      .catch(error => console.log(error))
  }

  const renderTooltip = () => {
    return (
      <Tooltip id="username-tooltip" style={{ color: 'red' }}>
        {user.displayName}
      </Tooltip>
    );
  };

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

  useEffect(() => {
    if (user && user.photoURL) {
      const img = new Image();
      img.src = user.photoURL;
      img.onload = () => {
        setPhotoLoading(false);
      };
      img.onerror = () => {
        setPhotoLoading(false);
        setPhotoError(true);
      };
    } else {
      setPhotoLoading(false);
    }
  }, [user]);

  return (
    <Navbar
      style={{ backgroundColor: '#fff', borderBottom: '1px solid #DBDBDB' }}
      expand="lg"
      fixed="top"
      className={navbarShadow ? 'navbar-shadow' : ''}
    >
      <Container>
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <Link as={Link} to="/" className='no-underline'>
            <img src={toysLogo} alt="" className="logo-image mb-2" />
            <span className="fw-bold" style={{ color: '#F379A7' }}>
              Verse
            </span>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0">
            <Nav.Item>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/alltoys">All Toys</Nav.Link>
            </Nav.Item>
            {user && (
              <>
                <Nav.Item>
                  <Nav.Link as={Link} to="/mytoys">My Toys</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/addtoys">Add Toys</Nav.Link>
                </Nav.Item>
              </>
            )}
            <Nav.Item>
              <Nav.Link as={Link} to="/blogs">Blog</Nav.Link>
            </Nav.Item>
          </Nav>
          {user && (
            <Nav.Item>
              {photoLoading ? (
                <span>Loading...</span>
              ) : photoError ? (
                <span>Error loading photo</span>
              ) : (
                <OverlayTrigger placement="bottom" overlay={renderTooltip()}>
                  <img className="navbar-img m-2" src={user.photoURL} alt="" />
                </OverlayTrigger>
              )}
            </Nav.Item>
          )}

          {user ?
            <Button onClick={handleLogout} className="custom-button btn-danger">Logout</Button> :
            <Link to="/login">
              <Button className="custom-button btn-danger">Login</Button>
            </Link>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
