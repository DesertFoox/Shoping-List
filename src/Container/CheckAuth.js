import UnAuthenticationApp from '../App/UnAuthenticationApp'
import AuthenticationApp from '../App/AuthenticationApp'
import UserContext from '../Core/Context/UserContext';
import React, { Fragment, useContext, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

const CheckAuth = () => {
    const userContext = useContext(UserContext)
    const token = AsyncStorage.getItem("accessToken");
    console.log("show", userContext.IsLoggedIn);
    return (
        <Fragment>
            {userContext.IsLoggedIn || AsyncStorage.getItem("accessToken") ? <AuthenticationApp /> : <UnAuthenticationApp />}
        </Fragment>
    );

}
export default CheckAuth;