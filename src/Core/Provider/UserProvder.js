import React, { useState } from 'react';
import UserContext from '../Context/UserContext'

const UserProvider = ({ children }) => {
    const [User, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (input) => {
        setIsLoggedIn(input)
        console.log('isLoggedIn', isLoggedIn);

    }
    return (
        <UserContext.Provider
            value={{
                User: User,
                IsLoggedIn: isLoggedIn,
                setUser: User => setUser(User),
                setIsLoggedIn: login
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;