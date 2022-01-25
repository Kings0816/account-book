import React from 'react';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const AuthRoute = ({ children }) => {
    const userJwt = sessionStorage.getItem('userJwt');
    return userJwt ? children : <Navigate replace to="/login" />;
};

export default AuthRoute;
