import { Container, Row, Col } from 'react-bootstrap';
import { Nav } from 'react-bootstrap/esm';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css'
import toysLogo from '../../assets/toys_logo.png';
import useTitle from '../../hooks/useTitle';

const Footer = () => {
    useTitle('Home');
    return (
        <div>
            <footer style={{backgroundColor: '#5C5C5C', color:'#FFFFFF'}}>
                <div className="footer-top pt-5">
                    <Container>
                    <Row>
                        <Col md={2} sm={12} xs={12} className="segment-one md-mb-30 sm-mb-30">
                        <h2 className='fw-bold'>
                        <a className='text-decoration-none' href="#home">
                        <img src={toysLogo} alt="" className="logo-image-footer" />
                            <span style={{ color: '#F379A7' }}>Verse</span>
                        </a>
                        </h2>
                        <p>
                        Discover a menagerie of captivating animal toys at <span style={{ color: '#F379A7' }}>ToyVerse</span>,
                        where imagination meets playtime.
                        </p>
                        </Col>

                        <Col md={2} sm={12} xs={12} className="segment-two md-mb-30 sm-mb-30">
                        <h5 className='fw-bold mb-3'>Quick Links</h5>
                        <ul>
                            <li>
                            <Nav.Link as={Link} to="/" className='text-decoration-none text-white'>Home</Nav.Link>
                            </li>
                            <li>
                            <Nav.Link as={Link} to="/blogs" className='text-decoration-none text-white'>Blog</Nav.Link>
                            </li>
                            <li>
                            <Nav.Link as={Link} to="#create-main-section" className='text-decoration-none text-white'>Support</Nav.Link>
                            </li>
                            <li>
                            <Nav.Link as={Link} to="#client" className='text-decoration-none text-white'>Client</Nav.Link>
                            </li>
                            <li>
                            <Nav.Link as={Link} to="/register" className='text-decoration-none text-white'>Contact</Nav.Link>
                            </li>
                        </ul>
                        </Col>


                        <Col md={2} sm={12} xs={12} className="segment-two md-mb-30 sm-mb-30">
                        <h5 className='fw-bold mb-3'>Other Page</h5>
                        <ul>
                            <li>
                            <Nav.Link className='text-decoration-none text-white' to="/blogs">All Toys</Nav.Link>
                            </li>
                            <li>
                            <Nav.Link className='text-decoration-none text-white' to="/blogs">My Toys</Nav.Link>
                            </li>
                            <li>
                            <Nav.Link className='text-decoration-none text-white' to="/blogs">Add A Toy</Nav.Link>
                            </li>
                            <li>
                            <Nav.Link className='text-decoration-none text-white' to="/blogs">Blogs</Nav.Link>
                            </li>
                        </ul>
                        </Col>


                        <Col md={3} sm={12} xs={12} className="segment-three sm-mb-30">
                        <h5 className='fw-bold mb-3'>Contact Us</h5>
                        <p>1203 Gulshan, Dhaka, Bangladesh <br />
                        Email: info@toyverse.com <br />Phone: +880 123 456 7890</p>
                        <h5 className='fw-bold mb-3'>Follow Us</h5>
                        <div className='mb-3'>
                            <a href="https://www.facebook.com/" target="_blank"><FaFacebook className='fash' size={20} /></a>
                            <a href="https://twitter.com/" target="_blank"><FaTwitter className='fa' size={20} /></a>
                            <a href="https://www.linkedin.com/" target="_blank"><FaLinkedin className='fa' size={20} /></a>
                            <a href="https://www.instagram.com/" target="_blank"><FaInstagram className='fa' size={20} /></a>
                        </div>
                        </Col> 

                        <Col md={3} sm={12} xs={12} className="segment-four sm-mb-30">
                        <h5 className='fw-bold mb-3'>Get in Touch</h5>
                        <p>  If you're looking to get in touch with someone, there are many ways to do so. You can send an email, make a phone call. Ifare many ways to do so. You can send an email, make a phone call.</p>
                        <form>
                            <input type="letter" />
                            <input type="submit" className='text-danger mb-4' value="Subscribe" />
                        </form>
                        </Col>
                    </Row>
                    </Container>
                </div>
                <div className='text-center footer-down'>
                    <p className="pt-3">Copyright © 2023 <a className='text-decoration-none' style={{color: '#f379a7'}} href="https://medium.com/@akasdatta">Akas Datta</a> </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;