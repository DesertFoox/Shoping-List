import { Icon } from "react-native-elements";
import { Input } from "react-native-elements";
import React from "react";

const InputField = ({ placeHolder, onChangeText, type, errorMessage }) => {
  return (
    <Input
      inputStyle={{
        color: "#fff",
        width: 0,
        backgroundColor: "#534F4F",
        borderRadius: 7,
        padding: 10,
      }}
      keyboardType={type}
      errorMessage={errorMessage}
      placeholder={placeHolder}
      errorStyle={{ color: "red" }}
      onChangeText={onChangeText}
    />
  );
};

export default InputField;
