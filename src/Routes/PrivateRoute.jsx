import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import Swal from 'sweetalert2';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log('User in privateroute', user);

    if(loading){
        return ( 
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Spinner animation="border" variant="success" />
            </div>
        );
    }

    if(user?.email){
        return children;
    }
    Swal.fire('You have to log in first to view details')
    return (
        
    <div >
        <Navigate state={{from: location}} to="/login" replace></Navigate>
    </div> )
};

export default PrivateRoute;