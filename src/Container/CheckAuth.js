import UnAuthenticationApp from '../App/UnAuthenticationApp'
import AuthenticationApp from '../App/AuthenticationApp'
import UserContext from '../Core/Context/UserContext';
import React, { Fragment, useContext, useState } from 'react';

const CheckAuth = () => {
    const userContext = useContext(UserContext)

    console.log("show", userContext.IsLoggedIn);
    return (
        <Fragment>
            {userContext.IsLoggedIn ? <AuthenticationApp /> : <UnAuthenticationApp />}
        </Fragment>
    );

}
export default CheckAuth;