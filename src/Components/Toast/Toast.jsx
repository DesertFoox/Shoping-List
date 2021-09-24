import Toast from "react-native-toast-message";
import React from "react";

export const SuccessToast = (message) => {
  return Toast.show({
    type: "success",
    text1: message,
  });
};

export const InfoToast = (message) => {
  return Toast.show({
    type: "info",
    text1: message,
  });
};

export const ErrorToast = (message) => {
  return Toast.show({
    type: "error ",
    text1: message,
  });
};
