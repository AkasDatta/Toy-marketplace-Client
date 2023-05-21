import { Link } from 'react-router-dom';
import './ErrorPage.css'
import error from '../../assets/oops.avif'
import useTitle from '../../hooks/useTitle';


const ErrorPage = () => {
    useTitle('Error')
    return (
        <div className='text-center error'>
            <img className='errorImg' src={error} alt="" />
            <h2>Something went wrong.</h2>
            <h1 className='text-danger fw-bold'>404 error</h1>
            <p>We're sorry, but the page you're looking for could not be found.</p>
            <button className='rounded p-3 bg-danger'><Link className='no-decoration'
                to='/'
            >
                <h5 className='text-light fw-bold pt-2'>Back to homepage</h5>
          </Link></button> 
        </div>
    );
};

export default ErrorPage;