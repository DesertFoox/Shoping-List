import React, { useState } from "react";
import { Button, Text } from "react-native-elements";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SafeAreaView from "../Components/SafeAreaView/SafeAreaView";
import Input from "../Components/Input/Input";
import { View } from "react-native";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView>
      <Input placeHolder="ایمیل" onChangeText={(e) => setEmail(e)} />
      <Input placeHolder="رمز عبور" onChangeText={(e) => setPassword(e)} />
      <Button
        title="ورود"
        loading={false}
        loadingProps={{ size: "small", color: "white" }}
        buttonStyle={{
          backgroundColor: "green",
          borderRadius: 3,
        }}
        onPress={() => console.log("aye")}
      />
      <View style={{marginTop:30}}>
        <Text
          style={{ color: "#fff" }}
          onPress={() => navigation.push("Register")}
        >
          حساب کاربری ندارید ؟
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
