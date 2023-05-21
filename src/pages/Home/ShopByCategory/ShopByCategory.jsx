import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button, Card, Col, Row } from 'react-bootstrap';
import 'react-tabs/style/react-tabs.css';
import './ShopByCategory.css';
import { FaArrowRight, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const ShopByCategory = () => {
  const [dogToys, setDogToys] = useState([]);
  const [catToys, setCatToys] = useState([]);
  const [bearToys, setBearToys] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://toy-marketplace-server-pink.vercel.app/category');
        const data = await response.json();
        setDogToys(data.filter((item) => item.subcategory === 'Dog Toys'));
        setCatToys(data.filter((item) => item.subcategory === 'Cat Toys'));
        setBearToys(data.filter((item) => item.subcategory === 'Bear Toys'));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center my-5 fw-bold" style={{ color: '#F379A7' }}>
        Shop By Category
      </h1>

      <Tabs>
        <div className="text-center mb-5">
          <TabList>
            <Tab>Dog Toys</Tab>
            <Tab>Cat Toys</Tab>
            <Tab>Bear Toys</Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="container">
            <Row xs={1} md={2} className="g-4">
              {dogToys.slice(0, 2).map((toy, index) => (
                <Col key={index}>
                  <Card className="w-100">
                    <Card.Img data-aos="zoom-in" variant="top" src={toy.picture} />
                    <Card.Body>
                      <Card.Title>{toy.toyName}</Card.Title>
                      <b>Price:</b> ${toy.price} <br />
                      <p>
                        <b>Ratings:</b>{' '}
                        <Rating
                          placeholderRating={toy.rating}
                          readonly
                          emptySymbol={<FaRegStar></FaRegStar>}
                          placeholderSymbol={<FaStar className="text-danger"></FaStar>}
                          fullSymbol={<FaStar></FaStar>}
                        ></Rating>{' '}
                        {toy.rating}
                      </p>
                      <Link to={`/category/${toy._id}`}>
                        <Button className="shopbutton" variant="primary">
                          View Details <FaArrowRight />
                        </Button>
                      </Link>
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
              {catToys.slice(0, 2).map((toy, index) => (
                <Col key={index}>
                  <Card className="w-100">
                    <Card.Img data-aos="zoom-in" variant="top" src={toy.picture} />
                    <Card.Body>
                      <Card.Title>{toy.toyName}</Card.Title>
                      <b>Price:</b> ${toy.price} <br />
                      <p>
                        <b>Ratings:</b>{' '}
                        <Rating
                          placeholderRating={toy.rating}
                          readonly
                          emptySymbol={<FaRegStar></FaRegStar>}
                          placeholderSymbol={<FaStar className="text-danger"></FaStar>}
                          fullSymbol={<FaStar></FaStar>}
                        ></Rating>{' '}
                        {toy.rating}
                      </p>
                      <Link to={`/category/${toy._id}`}>
                        <Button className="shopbutton" variant="primary">
                          View Details <FaArrowRight />
                        </Button>
                      </Link>
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
              {bearToys.slice(0, 2).map((toy, index) => (
                <Col key={index}>
                  <Card className="w-100">
                    <Card.Img data-aos="zoom-in" variant="top" src={toy.picture} />
                    <Card.Body>
                      <Card.Title>{toy.toyName}</Card.Title>
                      <b>Price:</b> ${toy.price} <br />
                      <p>
                        <b>Ratings:</b>{' '}
                        <Rating
                          placeholderRating={toy.rating}
                          readonly
                          emptySymbol={<FaRegStar></FaRegStar>}
                          placeholderSymbol={<FaStar className="text-danger"></FaStar>}
                          fullSymbol={<FaStar></FaStar>}
                        ></Rating>{' '}
                        {toy.rating}
                      </p>
                      <Link to={`/category/${toy._id}`}>
                        <Button className="shopbutton" variant="primary">
                          View Details <FaArrowRight />
                        </Button>
                      </Link>
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
