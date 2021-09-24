import React, { useState } from "react";
import { Button, Text } from "react-native-elements";
import { View } from "react-native";

import NetInfo from "@react-native-community/netinfo";
import axios from "axios";

import SafeAreaView from "../Components/SafeAreaView/SafeAreaView";
import Input from "../Components/Input/Input";
import {InfoToast} from '../Components/Toast/Toast'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [iConnected, setIConnected] = useState(null);
  const login = () => {
    NetInfo.fetch().then((netInfo) => {
      setIConnected(netInfo.isConnected);
    });
    if (setIConnected) {
      InfoToast('internet');
    }
  };
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
        onPress={() => login()}
      />
      <View style={{ marginTop: 30 }}>
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
