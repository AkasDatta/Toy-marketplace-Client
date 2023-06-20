import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const MyToysRow = ({ addtoy, handleDelete, handleConfirm }) => {
  const {
    _id,
    sellerName,
    sellerEmail,
    photo,
    price,
    toyname,
    subcategory,
    rating,
    quantity,
    description,
    status,
  } = addtoy;

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleConfirmUpdate = () => {
    handleConfirm(_id);
    setShowModal(false);
  };

  return (
    <tr>
      <td>
        {photo ? (
          <img style={{ width: "45px", height: "45px" }} src={photo} alt="Toy" />
        ) : (
          <p>Image not found</p>
        )}
      </td>
      <td>{toyname}</td>
      <td>{sellerName}</td>
      <td>{sellerEmail}</td>
      <td>{subcategory}</td>
      <td>{price}</td>
      <td>{rating}</td>
      <td>{quantity}</td>
      <td>{description}</td>
      <td>
        {status === "confirm" ? (
          <span className="font-bold text-primary">Confirmed</span>
        ) : (
          <Button onClick={handleOpenModal} className="btn btn-secondary">
            Update
          </Button>
        )}

        {/* modal  */}
        <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Toy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formPrice">
              <Form.Label>Product Price</Form.Label>
              <Form.Control type="number" defaultValue={price} />
            </Form.Group>
            <Form.Group controlId="formQuantity">
              <Form.Label>Product Quantity</Form.Label>
              <Form.Control type="number" defaultValue={quantity} />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} defaultValue={description} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleConfirmUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      </td>
      <td>
        <Button onClick={() => handleDelete(_id)} className="btn btn-secondary">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default MyToysRow;
