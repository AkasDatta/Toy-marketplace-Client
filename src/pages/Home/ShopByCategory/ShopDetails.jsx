import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { Card, Col, Row } from 'react-bootstrap';
import useTitle from '../../../hooks/useTitle';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

const ShopDetails = () => {
  const { id } = useParams();
  const [toy, setToy] = useState(null);
  const { user } = useContext(AuthContext);
  useTitle('ShopDetails')

  useEffect(() => {
    const fetchToy = async () => {
      try {
        const response = await fetch(`https://toy-marketplace-server-pink.vercel.app/category/${id}`);
        const data = await response.json();
        setToy(data);
      } catch (error) {
        console.error('Error fetching toy data:', error);
      }
    };

    fetchToy();
  }, [id]);

  if (!toy) {
    return <div>Loading...</div>;
  }

  return (
    <Row className="justify-content-center mt-5 pt-5 mb-5">
      <Col xs={12} md={8} lg={6}>
        <Card>
          <Card.Img variant="top" src={toy.picture} />
          <Card.Body>
            <Card.Title> <h2><b>{toy.toyName}</b></h2> </Card.Title>
            <Card.Text>
              <h6><b>Seller Name:</b> {user.displayName}</h6>
              <h6><b>Seller Email:</b> {user.email}</h6>
              <p><b>Price:</b> ${toy.price}</p>
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
              <p><b>Available Quantity:</b> {toy.quantity}</p>
              <p><b>Description:</b> {toy.description}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ShopDetails;
