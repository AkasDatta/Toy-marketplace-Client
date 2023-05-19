import { useContext, useState } from 'react';
import { Col, Container, Image, Button, Form, Row } from 'react-bootstrap';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import googleImage from '../../../assets/google.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const {createUser, signInWithGoogle} = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const from = location.state?.from?.pathname || '/';

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        //validate
        if(!/(?=.*[A-Z])/.test(password)){
            setError('Please add at least one uppercase');
            return;
        }
        else if( password.length<6){
            setError('Please add at least 6 characters in your password')
            return;
        }

        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser)
            setError('');
            setSuccess('User has been created successfully');
            updateUserData(createdUser, name, photo); // pass createdUser object instead of createUser function
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.log(error)
            setError(error.message)
        })
    }

    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
          displayName: name,
          photoURL: `${photo}?t=${Date.now()}`
        })
        .then(() => {
          // handle success
        })
        .catch(error => {
          setError(error.message);
        })
      }

      const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            setError('');
            setSuccess('User has been created successfully');
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    return (
        <div className='register'>
            <div className="register-center">
                <Col  md={6} xs={12} className="col-2">
                <div className='d-none d-lg-block' style={{backgroundColor: '#f2f8f9'}}>
                    <div className='p-5'>
                        <h3 className='fw-bold text-center' style={{color: '#4D3333'}}>Welcome <br />
                        To the website</h3>
                        <p className='text-center '>Welcome to our platform! Register now to create an account and unlock a world of possibilities. <br /> Gain access to exclusive features, personalized recommendations, and a seamless user experience. Join <br /> our growing community of users and embark on a journey towards exploration and discovery. <br /> Sign up today to start enjoying all the benefits and opportunities our platform has to offer.</p>
                    </div>
                    <h6 className='text-center p-3'>CREATE ACCOUNT</h6>
                </div>
                <Container className='p-5'>
                    <h2 className='text-center'>USER REGISTER</h2>
                    <span>Already Have an Account? <Link to="/login">Login</Link> </span>
                    <a onClick={handleGoogleSignIn} href="#" className="google-link">
                        <Image src={googleImage} alt="Google" />Continue with Google
                    </a>
                    <h4>or</h4>
                    <Form onSubmit={handleRegister}>
                        <label>Name</label>
                        <Form.Control type="text" name='name' placeholder="Enter your name" className="input-field" required/>

                        <label>Photo URL</label>
                        <Form.Control type="text" name='photo' placeholder="Photo URL" className="input-field" required/>

                        <label>Email Address</label>
                        <Form.Control type="email" name='email' placeholder="Enter your email" className="input-field" required/>

                        <label>Set Password</label>
                        <Form.Control type={show ? "text" : "password"} name='password' placeholder="Enter Password" className="input-field" required/>

                        <p onClick={() => setShow(!show)}>
                        {
                            show ? <span><FaEye className="FaEye mb-2"></FaEye></span>: <span><FaEyeSlash className="FaEye mb-2"></FaEyeSlash></span>
                        }
                        </p>

                        <Row>
                            <div className='d-flex' name='accept'>
                                <input onClick={handleAccepted} type="checkbox" defaultChecked />
                                <span>I Agree to the <Link to="/terms">terms and conditions</Link></span>
                            </div>
                        </Row>

                        <Button disabled={!accepted} className="custom-button btn-danger" type="submit">Register Now</Button> <br />

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

export default Register;