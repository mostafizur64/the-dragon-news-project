import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    console.log(location)
    const {user,loader} = useContext(AuthContext);
    if(loader){
        return   <Spinner animation="border" variant="danger" />
    }
    if(user){
        return children
    }
    return <Navigate state={{from:location}} to='/login' replace></Navigate>
};

export default PrivateRoute;


/**
 * STEPS 
 *   check user is logged in or not
 *      if the user is logged in, then allow them to visit the route
 * else redirect the user to the login page
 * setup the private route
 * handle loader function
 */