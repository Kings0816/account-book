import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthRoute = ({ children }) => {
    const userJwt = sessionStorage.getItem('userJwt');
    return userJwt ? children : <Navigate replace to="/login" />;
};

AuthRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthRoute;
