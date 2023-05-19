import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className='mt-5 pt-5'>
        <Container className="my-5 py-5">
            <h1 style={{color:'#ef005d'}}>Terms of Service</h1>
            <p style={{fontSize: '20px'}}>
                By accessing and using our services, you acknowledge and agree to be bound by our comprehensive terms and conditions. It is essential to review them thoroughly to ensure a clear understanding of your rights and obligations.
            </p>
            <p style={{fontSize: '20px'}}>
                Our terms and conditions govern your use of our platform and establish the rules and guidelines for a secure and fair user experience. Please read them carefully to protect your rights and make informed decisions.
            </p>
            <p>Go back to <Link className='text-decoration-none' style={{color: "#ef005d"}} to="/register">Register</Link></p>
        </Container>
    </div>
  );
};

export default Terms;
