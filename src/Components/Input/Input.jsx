import { Icon } from "react-native-elements";
import { Input } from "react-native-elements";
import React from "react";

const InputField = ({ placeHolder, onChangeText }) => {
  return <Input inputStyle={{color:"#fff"}} placeholder={placeHolder} onChangeText={onChangeText} />;
};

export default InputField;
