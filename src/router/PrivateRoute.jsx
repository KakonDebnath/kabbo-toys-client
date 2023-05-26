import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading} = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className='flex justify-center my-5'>
            <h2 className='flex justify-center items-center font-bold text-3xl'>L <img src="https://i.ibb.co/jbTRfQd/Hourglass.gif" alt="" /> ding........</h2>
        </div>
    }
    if (user) {
        return children;
    }else{
        return <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
    }
};

export default PrivateRoute;