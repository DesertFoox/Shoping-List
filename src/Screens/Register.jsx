import React, { useState } from "react";
import { View } from "react-native";

import { Button, ButtonGroup, withTheme, Text } from "react-native-elements";
import SafeAreaView from "../Components/SafeAreaView/SafeAreaView";
import Input from "../Components/Input/Input";
const Register = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView>
      <Input placeHolder="ایمیل" onChangeText={(e) => setEmail(e)} />
      <Input placeHolder="رمز عبور" onChangeText={(e) => setPassword(e)} />
      <Button
        title="ثبت نام"
        loading={false}
        loadingProps={{ size: "small", color: "white" }}
        buttonStyle={{
          backgroundColor: "green",
          borderRadius: 3,
        }}
        onPress={() => console.log("aye")}
      />
      <View style={{ marginTop: 30 }}>
        <Text
          style={{ color: "#fff" }}
          onPress={() => navigation.push("Login")}
        >
          حساب کاربری دارید ؟
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Register;
