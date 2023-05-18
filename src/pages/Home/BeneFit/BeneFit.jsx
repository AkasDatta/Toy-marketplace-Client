import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaCar, FaRegClock, FaDollarSign } from 'react-icons/fa';
import './BeneFit.css';

const BeneFit = () => {
  return (
    <div className='container'>
      <h1 className="text-center my-5 fw-bold" style={{ color: '#7fa7e4' }}>Our Benefits</h1>
        <Row className="row-cols-1 row-cols-md-3 g-4 text-center mb-5">
            <Col>
                <Card className='h-100 py-5 benefit-card'>
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <div className='text-center fas'>
                            <FaCar size={40}></FaCar>
                        </div>
                        <Card.Body>
                            <Card.Title className='title'>Free Shipping</Card.Title>
                            <Card.Text>
                            Enjoy free shipping on all orders within the country.
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Card>
            </Col>
            <Col>
                <Card className="h-100 py-5 benefit-card">
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div className='text-center fas'>
                            <FaRegClock size={40}></FaRegClock>
                        </div>
                        <Card.Body>
                            <Card.Title className='title'>Support 24/7</Card.Title>
                            <Card.Text>
                            Our dedicated support team is available 24/7 to assist you with any inquiries or issues you may have.
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Card>
            </Col>
            <Col>
                <Card className="h-100 py-5 benefit-card">
                    <div data-aos="fade-left" data-aos-duration="1000">
                        <div className='text-center fas'>
                            <FaDollarSign size={40}></FaDollarSign>
                        </div>
                        <Card.Body>
                            <Card.Title className='title'>Money Return</Card.Title>
                            <Card.Text>
                            We offer a hassle-free money return policy within 30 days of purchase.
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
  );
};

export default BeneFit;
