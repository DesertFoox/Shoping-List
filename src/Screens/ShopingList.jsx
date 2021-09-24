import React, { useState, useContext } from "react";
import { Button, Text } from "react-native-elements";
import { View } from "react-native";

import SafeAreaView from "../Components/SafeAreaView/SafeAreaView";
import Input from "../Components/Input/Input";

const ShopingList = () => {
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

export default ShopingList;
