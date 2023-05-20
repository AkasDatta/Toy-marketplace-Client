import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../../../assets/img1.jpg'
import img2 from '../../../assets/img2.jpg'
import img3 from '../../../assets/img3.jpg'
import './Testimonial.css';

const Testimonial = () => {
    return (
        <section id='testimonial'>
            <div className='py-5 container'>
                <div className='pb-4'>
                    <h1 className="text-center fw-bold">Testimonial</h1>
                    <p className='text-center'>Unleashing the Unprecedented Potential Within: Illuminating Paths, Inspiring Minds, and <br /> Catalyzing a Phenomenal Journey of Limitless Growth and Profound Transformation.</p>
                </div>

                <Row className="row-cols-1 row-cols-md-3 g-4 mb-5" data-aos="fade-up"
                data-aos-duration="500">
                    <Col>
                        <Card className='py-3'>
                            <Card.Body className='text-center'>
                                <Card.Text data-aos="zoom-in-right">
                                    "I love your toys! They're super fun and always bring a smile to my face. Thank you for making playtime exciting and filled with joy!"
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <div className='d-flex container my-4'>
                                <div className='mx-5'>
                                    <img className='babyImage' src={img1} alt="" />
                                </div>
                                <div>
                                    <p className='pt-2'>Jacob Karnoyal</p>
                                    <p>Customer</p>
                                </div>
                        </div>
                    </Col>
                    <Col>
                        <Card className="py-3">
                            <Card.Body>
                                <Card.Text className='text-center' data-aos="zoom-in-down">
                                    "Your toys are the best! I can play with them for hours and never get bored. Thank you for creating such awesome toys that make me happy!"
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <div className='d-flex container my-4'>
                                <div className='mx-5'>
                                    <img className='babyImage' src={img2} alt="" />
                                </div>
                                <div>
                                    <p className='pt-2'>Emily Purtoriko</p>
                                    <p>Customer</p>
                                </div>
                        </div>
                    </Col>
                    <Col>
                        <Card className="py-3">
                            <Card.Body>
                                <Card.Text className='text-center' data-aos="zoom-in-left">
                                    "Playing with your toys is like entering a world of magic and adventure. Thank you for making my childhood so amazing and full of imagination!"
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <div className='d-flex container my-4'>
                                    <div className='mx-5'>
                                        <img className='babyImage' src={img3} alt="" />
                                    </div>
                                    <div>
                                        <p className='pt-2'>Sophia Silva</p>
                                        <p>Customer</p>
                                    </div>
                                </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Testimonial;