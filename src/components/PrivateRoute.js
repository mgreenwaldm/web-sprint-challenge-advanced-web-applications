import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {

    const isLogin = () => {

        return window.localStorage.getItem('authToken') !== null && window.localStorage.getItem('authToken') !== undefined;
    };

    console.log('isLogin', isLogin());

    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
                : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;
