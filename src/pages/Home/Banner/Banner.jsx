import { Container, Row, Col } from 'react-bootstrap';
import './Banner.css';
import smallGirl from '../../../assets/banner.png';

const Banner = () => {
  return (
    <div>
      <section id="banner">
        <Container>
          <Row>
            <Col lg={6} md={12} className="pt-5">
                <img src={smallGirl} className="img-fluid mt-5 d-none d-lg-block" alt="Create Your Passion" />
            </Col>
            <Col lg={6} md={12} className='text-center mb-5'>
              <div className="banner-text">
                <h4 className="mt-5 fw-bold pt-5">New Arrivals</h4>
                <h1 className="fw-bold text-dark">Best Kids Store<br />& Online Shop</h1>
                <div className='text-center'>
                  <button className='btn btn-light py-3'>Discover Now</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Banner;
