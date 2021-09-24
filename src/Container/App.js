import React, { Fragment, useContext, useState } from 'react';

import Toast from 'react-native-toast-message';

import UserProvider from '../Core/Provider/UserProvder';
import CheckAuth from './CheckAuth'
export default function App() {
  return (
    <UserProvider>
      <CheckAuth />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </UserProvider>
  );
}


