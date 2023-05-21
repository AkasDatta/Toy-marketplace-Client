import { useContext, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";

const AddToys = () => {
  const [validated, setValidated] = useState(false);
  const { user } = useContext(AuthContext);
  useTitle('Add Toys');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const toyname = form.toyname.value;
    const subcategory = form.subcategory.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const addtoys = {
      sellerName: name,
      sellerEmail: email,
      photo: photo,
      price: price,
      toyname: toyname,
      subcategory: subcategory,
      rating: rating,
      quantity: quantity,
      description: description,
    };

    console.log(addtoys);

    fetch("http://localhost:5000/addtoys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addtoys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
            Swal.fire(
                'Thank you!',
                'Add a toys auccessfully',
                'success'
              )
        }
      });


    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setValidated(true);
    }
  };

  return (
    <div className="container my-5 py-5">
      <h1 className="text-center my-5 fw-bold" style={{ color: "#ef005d" }}>
        Add Your Toys
      </h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="my-5">
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Seller name</Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              placeholder="Seller name"
              defaultValue={user?.displayName || ""}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Seller email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Email"
              name="email"
              defaultValue={user?.email || ""}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group controlId="validationCustom07" className="mb-3">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name="photo" placeholder="Photo URL" required />
                <Form.Control.Feedback type="invalid">
                Please provide a valid photo URL.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Toy name</Form.Label>
                <Form.Control
                required
                type="text"
                name="toyname"
                placeholder="Toy name"
                onChange={(e) => {
                
                }}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                Please provide a toy name.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Sub Category</Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Sub Category"
                name="subcategory"
                onChange={(e) => {
                
                }}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Price" name="price" required />
                <Form.Control.Feedback type="invalid">
                Please provide your product price.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                name="rating"
                type="number"
                placeholder="Rating"
                required
                onChange={(e) => {
                
                }}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                Please provide a valid rating.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" as={Col} md="3" controlId="validationCustom05">
                <Form.Label>Available Quantity</Form.Label>
                <Form.Control
                name="quantity"
                type="number"
                placeholder="Available Quantity"
                required
                onChange={(e) => {
                
                }}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                Please provide a valid quantity.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group required className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Detail Description</Form.Label>
                <Form.Control name="description" as="textarea" rows={3} />
            </Form.Group>
        </Row>

        <Form.Group controlId="validationCustom06" className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <div className="text-center">
          <Button className="btn btn-danger px-4" type="submit">
            Add Toy
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddToys;
