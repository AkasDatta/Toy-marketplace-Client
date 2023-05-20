import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button, Card, Col, Row } from 'react-bootstrap';
import 'react-tabs/style/react-tabs.css';
import './ShopByCategory.css';

const ShopByCategory = () => {
    const [dogCategory, setDogCategory] = useState([]);
    const [catCategory, setCatCategory] = useState([]);
    const [bearCategory, setBearCategory] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/category/dogtoys')
          .then((res) => res.json())
          .then((data) => setDogCategory(data));
    }, []);
    useEffect(() => {
        fetch('http://localhost:5000/category/cattoys')
          .then((res) => res.json())
          .then((data) => setCatCategory(data));
    }, []);
    useEffect(() => {
        fetch('http://localhost:5000/category/beartoys')
          .then((res) => res.json())
          .then((data) => setBearCategory(data));
    }, []);

    return (
        <div className="container">
            <h1 className="text-center my-5 fw-bold" style={{ color: '#F379A7' }}>Shop By Category</h1>

            <Tabs>
                <div className='text-center mb-5'>
                    <TabList>
                        <Tab>Cat Toys</Tab>
                        <Tab>Dog Toys</Tab>
                        <Tab>Bear Toys</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <div className="container">
                        <Row xs={1} md={2} className="g-4">
                        {catCategory.slice(0, 2).map((category, index) => (
                            <Col key={category.id}>
                            <Card className="w-100">
                                <Card.Img data-aos="zoom-in" variant="top" src={category.picture} />
                                <Card.Body>
                                <Card.Title> <h2><b>{category.toyName}</b></h2>
                                </Card.Title>
                                <Card.Text>
                                    <h5><b>Price: </b>{category.price}</h5>
                                </Card.Text>
                                <Card.Text>
                                    <h5><b>Rating:</b> {category.rating}</h5>
                                </Card.Text>
                                <Button variant="primary" className='shopbutton btn btn-light mb-5'>View Details</Button>
                                </Card.Body>
                            </Card>
                            </Col>
                        ))}
                        </Row>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="container">
                        <Row xs={1} md={2} className="g-4">
                        {dogCategory.slice(0, 2).map((category, index) => (
                            <Col key={category.id}>
                            <Card className="w-100">
                                <Card.Img data-aos="zoom-in" variant="top" src={category.picture} />
                                <Card.Body>
                                <Card.Title> <h2><b>{category.toyName}</b></h2>
                                </Card.Title>
                                <Card.Text>
                                    <h5><b>Price: </b>{category.price}</h5>
                                </Card.Text>
                                <Card.Text>
                                    <h5><b>Rating:</b> {category.rating}</h5>
                                </Card.Text>
                                <Button variant="primary" className='shopbutton btn btn-light mb-5'>View Details</Button>
                                </Card.Body>
                            </Card>
                            </Col>
                        ))}
                        </Row>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="container">
                        <Row xs={1} md={2} className="g-4">
                        {bearCategory.slice(0, 2).map((category, index) => (
                            <Col key={category.id}>
                            <Card className="w-100">
                                <Card.Img data-aos="zoom-in" variant="top" src={category.picture} />
                                <Card.Body>
                                <Card.Title> <h2><b>{category.toyName}</b></h2>
                                </Card.Title>
                                <Card.Text>
                                    <h5><b>Price: </b>{category.price}</h5>
                                </Card.Text>
                                <Card.Text>
                                    <h5><b>Rating:</b> {category.rating}</h5>
                                </Card.Text>
                                <Button variant="primary" className='shopbutton btn btn-light mb-5'>View Details</Button>
                                </Card.Body>
                            </Card>
                            </Col>
                        ))}
                        </Row>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;
