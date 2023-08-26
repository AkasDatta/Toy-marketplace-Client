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

  const renderCard = (toys) => {
    return (
      <Row xs={1} md={4} className="g-4">
        {toys.slice(0, 4).map((toy, index) => (
          <Col key={index}>
            <Card className="w-100">
              <div className="card-image-container">
                <Card.Img data-aos="zoom-in" variant="top" src={toy.picture} className="card-image mb-0 pb-0" />
              </div>
              <Card.Body className="pt-0">
                <Card.Title>{toy.toyName}</Card.Title>
                <b>Price:</b> ${toy.price} <br />
                <p>
                  <b>Ratings: </b>{' '}
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
                  <Button className="shopbutton mb-3" variant="primary">
                    View Details <FaArrowRight />
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mt-5 fw-bold" style={{ color: '#F379A7' }}>
        Shop Category
      </h1>
      <p className="text-center mb-5 mt-3">
        Explore a variety of high-quality animal toys designed to entertain and engage your pets. Find interactive
        playthings and cozy companions for dogs, cats, and bears.
      </p>
      <Tabs>
        <div className="text-center mb-5">
          <TabList>
            <Tab>Bear Toys</Tab>
            <Tab>Dog Toys</Tab>
            <Tab>Cat Toys</Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="container">{renderCard(bearToys)}</div>
        </TabPanel>
        
        <TabPanel>
          <div className="container">{renderCard(dogToys)}</div>
        </TabPanel>

        <TabPanel>
          <div className="container">{renderCard(catToys)}</div>
        </TabPanel>

      </Tabs>
    </div>
  );
};

export default ShopByCategory;
