import { useContext, useState } from 'react';
import { Col, Container, Image, Button, Form } from 'react-bootstrap';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import googleImage from '../../../assets/google.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Login = () => {
    const [show, setShow] = useState(false);
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Login');
  
    const from = location.state?.from?.pathname || '/';
  
    const handleLogin = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
  
      // validate
      if (!/(?=.*[A-Z])/.test(password)) {
        setError('Please add at least one uppercase letter.');
        return;
      } else if (password.length < 6) {
        setError('Please add at least 6 characters in your password.');
        return;
      }
  
      signIn(email, password)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          navigate(from, { replace: true });
          setError('');
          setSuccess('User has been logged in successfully.');
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    const handleGoogleSignIn = () => {
      signInWithGoogle()
        .then((result) => {
          const loggedUser = result.user;
          navigate(from, { replace: true });
          console.log(loggedUser);
          setError('');
          setSuccess('User has been logged in successfully.');
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    return (
      <div className='login'>
        <div className='login-center'>
          <Col md={6} className='col-2'>
            <div style={{ backgroundColor: '#f2f8f9' }}>
              <div className='p-5'>
                <h3 className='fw-bold text-center' style={{ color: '#4D3333' }}>
                  Welcome <br />
                  To the website
                </h3>
                <p className='text-center'>
                  The login page is a secure gateway where users can enter their credentials to <br /> access the system and authenticate their identity.
                </p>
              </div>
              <h6 className='text-center p-3'>ACCOUNT LOGIN</h6>
            </div>
            <Container className='p-5'>
              <h2 className='text-center'>USER LOGIN</h2>
              <span>
                Don't Have an Account? <Link to='/register'>Register</Link>{' '}
              </span>
              <a onClick={handleGoogleSignIn} href='#' className='google-link'>
                <Image src={googleImage} alt='Google' />
                Continue with Google
              </a>
              <h4>or</h4>
              <Form onSubmit={handleLogin}>
                <label>Email Address</label>
                <Form.Control type='email' name='email' placeholder='Enter your email' className='input-field' required />
  
                <label>Set Password</label>
                <Form.Control type={show ? 'text' : 'password'} name='password' placeholder='Enter Password' className='input-field' required />
  
                <p onClick={() => setShow(!show)}>
                  {show ? (
                    <span>
                      <FaEye className='FaEye mb-2'></FaEye>
                    </span>
                  ) : (
                    <span>
                      <FaEyeSlash className='FaEye mb-2'></FaEyeSlash>
                    </span>
                  )}
                </p>
  
                <Button className='custom-button btn-danger' type='submit'>
                  Login Now
                </Button>{' '}
                <br />
  
                <Form.Text className='text-success'>{success}</Form.Text> <br />
                <Form.Text className='text-danger'>{error}</Form.Text>
              </Form>
            </Container>
          </Col>
        </div>
      </div>
    );
  };

export default Login;
