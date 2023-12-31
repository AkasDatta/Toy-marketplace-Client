import { Table, Button, Form, Modal } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import './AllToys.css';
import useTitle from '../../../hooks/useTitle';
import Swal from 'sweetalert2';

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [selectedToy, setSelectedToy] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation(); 
  useTitle('All Toys');

  const { user } = useContext(AuthContext); 

  useEffect(() => {
    fetch('https://toy-marketplace-server-pink.vercel.app/category')
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  const handleDetailsClick = (toy) => {
    if (user) {
      setSelectedToy(toy);
      setShowModal(true);
    } else {
      Swal.fire({
        title: 'Please Log In',
        text: 'You need to be logged in to view toy details.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Log In',
        cancelButtonText: 'Cancel',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location.pathname } }); 
        }
      });
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // Perform search logic on the client-side
    const filteredToys = allToys.filter((toy) =>
      toy.toyName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setAllToys(filteredToys);
  };


  const displayedToys = allToys.slice(0, 20);

  return (
    <div className='my-5 py-5'>
      
      <h1 className="text-center my-5 fw-bold" style={{ color: '#7fa7e4' }}>All Toys Here</h1>
      <div className='d-flex justify-content-end container mb-4'>
        <Form onSubmit={handleSearch} className='d-flex'>
          <div>
            <input
              className='input-field-alltoys'
              type="text"
              name="query"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div>
            <Button className='btn btn-secondary mx-2 py-2' type="submit">Search</Button>
          </div>
        </Form>
      </div>
      <Table striped bordered hover size="sm" className='container'>
        <thead>
          <tr>
            <th>SELLER NAME</th>
            <th>TOY NAME</th>
            <th>SUB CATEGORY</th>
            <th>PRICE</th>
            <th>AVAILABLE QUANTITY</th>
            <th>VIEW DETAILS</th>
          </tr>
        </thead>
        <tbody>
          {displayedToys.map((toy, id) => (
            <tr key={id}>
              <td>{toy.sellerName}</td>
              <td>{toy.toyName}</td>
              <td>{toy.subcategory}</td>
              <td>{toy.price}</td>
              <td>{toy.quantity}</td>
              <td className='text-center'>
                <button className='btn btn-secondary px-3 py-1' onClick={() => handleDetailsClick(toy)}>Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Toy Details</Modal.Title>
        
        </Modal.Header>
        <Modal.Body>
          {selectedToy && (
            <div>
                <img className='rounded' src={selectedToy.picture} alt="" />
                <h5 className='mt-5'>{selectedToy.toyName}</h5>
                {user && <p>Seller Name:   {user.displayName} </p>}
                <p>Seller Email: {user.email} </p>
                <p>Price: {selectedToy.price}</p>
                <p>Rating: {selectedToy.rating}</p>
                <p>Available Quantity: {selectedToy.quantity}</p>
                <p>Description: {selectedToy.description}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AllToys;
