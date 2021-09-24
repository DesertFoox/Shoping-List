import React, { useState, useContext } from "react";
import { Button, Text } from "react-native-elements";
import { View } from "react-native";

import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";

import SafeAreaView from "../Components/SafeAreaView/SafeAreaView";
import Input from "../Components/Input/Input";
import { ErrorToast, SuccessToast } from "../Components/Toast/Toast";
import http from "../Core/Interceptor/Interceptor";
import UserContext from "../Core/Context/UserContext";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [iConnected, setIConnected] = useState(null);
  const userContext = useContext(UserContext);

  const login = () => {
    NetInfo.fetch().then((netInfo) => {
      setIConnected(netInfo.isConnected);
    });

    if (setIConnected) {
      if (email === "" || password === "") {
        ErrorToast("لطفا فیلد ها را پر کنید");
      } else {
        userContext.setIsLoggedIn(true);
        AsyncStorage.setItem("accessToken", "blablabla");
        SuccessToast("کاربر عزیز با موفقیت وارد شدید");
        setTimeout(() => {
          navigation.navigate("ShopingList");
        }, 2000);
      }
    }

    if (!setIConnected) {
      ErrorToast("برای استفاده از برنامه باید به اینترنت متصل باشید");
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
