import { useState } from 'react';
import { Col, Container, Image, Button, Form } from 'react-bootstrap';
import './Login.css';
import { Link } from 'react-router-dom';
import googleImage from '../../../assets/google.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

         //validate
        if(!/(?=.*[A-Z])/.test(password)){
            setError('Please add at least one uppercase');
            return;
        }
        else if( password.length<6){
            setError('Please add at least 6 characters in your password')
            return;
        }

    };

    return (
        <div className='login'>
            <div className="login-center">
                <Col md={6} className="col-2">
                    <div style={{backgroundColor: '#f2f8f9'}}>
                        <div className='p-5'>
                            <h3 className='fw-bold text-center' style={{color: '#4D3333'}}>Welcome <br />
                            To the website</h3>
                            <p className='text-center'>The login page is a secure gateway where users can enter their credentials to <br /> access the system and authenticate their identity.</p>
                        </div>
                        <h6 className='text-center p-3'>ACCOUNT LOGIN</h6>
                    </div>
                    <Container className='p-5'>
                        <h2 className='text-center'>USER LOGIN</h2>
                        <span>Don't Have an Account? <Link to="/register">Register</Link> </span>
                        <a href="#" className="google-link">
                            <Image src={googleImage} alt="Google" />Continue with Google
                        </a>
                        <h4>or</h4>
                        <Form onSubmit={handleLogin}>
                            <label>Email Address</label>
                            <Form.Control type="email" name='email' placeholder="Enter your email" className="input-field" required/>

                            <label>Set Password</label>
                            <Form.Control type={show ? "text" : "password"} name='password' placeholder="Enter Password" className="input-field" required/>

                            <p onClick={() => setShow(!show)}>
                            {
                                show ? <span><FaEye className="FaEye mb-2"></FaEye></span>: <span><FaEyeSlash className="FaEye mb-2"></FaEyeSlash></span>
                            }
                            </p>

                            <Button className="custom-button btn-danger" type="submit">Login Now</Button> <br />

                            <Form.Text className="text-success">
                                {success}
                            </Form.Text> <br />
                            <Form.Text className="text-danger">
                                {error}
                            </Form.Text>
                        </Form>
                    </Container> 
                </Col>
            </div>
        </div>
    );
};

export default Login;
