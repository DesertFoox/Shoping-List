import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ShopingList from "../Screens/ShopingList";

const Stack = createNativeStackNavigator();

const AuthenticationApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ShopingList">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="ShopingList"
          component={ShopingList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AuthenticationApp;
