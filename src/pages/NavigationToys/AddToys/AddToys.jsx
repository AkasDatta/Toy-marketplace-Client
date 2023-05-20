import { useContext, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { AuthContext } from "../../../providers/AuthProvider";

const AddToys = () => {
    const [validated, setValidated] = useState(false);
    const { user } = useContext(AuthContext);
    const handleSubmit = (event) => {
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
  
      const order = {
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
      console.log(order);
  
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        setValidated(true);
      }
    };

  return (
    <div className="container my-5 py-5">
      <h1 className="text-center my-5 fw-bold" style={{ color: '#ef005d' }}>Add Your Toys</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="my-5">
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Seller name</Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              placeholder="Seller name"
              defaultValue={user?.displayName || ''}
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
              defaultValue={user?.email || ''}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group controlId="validationCustom07" className="mb-3">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name='photo' placeholder="Photo URL" required/>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Toy name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    name="toyname"
                    placeholder="Toy name">
                    </Form.Control>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>                <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Sub Category</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Sub Category"
                    name="subcategory">
                   </Form.Control>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Price" name="price" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide your product price.
                    </Form.Control.Feedback>
            </Form.Group>                
            <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>Rating</Form.Label>
                <Form.Control name="rating" type="text" placeholder="Rating" required />
                    <Form.Control.Feedback type="invalid">
                        Please give me rating.
                    </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" as={Col} md="3" controlId="validationCustom05">
                <Form.Label>Available Quantity</Form.Label>
                <Form.Control name="quantity" type="text" placeholder="Available Quantity" required />
                    <Form.Control.Feedback type="invalid">
                        How much do you need?
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
                    feedbackType="invalid">
                </Form.Check>
            </Form.Group>
            <Button type="submit">Submit form</Button>
      </Form>
    </div>
  );
};

export default AddToys;
