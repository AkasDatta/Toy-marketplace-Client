import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";


const AddToys = () => {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    return (
        <div className="container my-5 py-5">
             <Form noValidate validated={validated} onSubmit={handleSubmit} className="my-5">
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
                            placeholder="Toy name"
                            defaultValue="Mark"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Sub Category</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Sub Category"
                            defaultValue="Otto"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="Price" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide your product price.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control type="text" placeholder="Rating" required />
                        <Form.Control.Feedback type="invalid">
                            Please give me rating.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" as={Col} md="3" controlId="validationCustom05">
                        <Form.Label>Available Quantity</Form.Label>
                        <Form.Control type="text" placeholder="Available Quantity" required />
                        <Form.Control.Feedback type="invalid">
                            How much do you need?
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group required className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Detail Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
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
                <Button type="submit">Submit form</Button>
            </Form>
        </div>
    );
};

export default AddToys;