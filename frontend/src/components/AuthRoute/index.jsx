import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../../components/Header';

const AuthRoute = ({ children, ...rest }) => {
    const userJwt = sessionStorage.getItem('userJwt');
    return userJwt ? (
        <>
            <Header {...rest} />
            {children}
        </>
    ) : (
        <Navigate replace to="/login" />
    );
};

AuthRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthRoute;
