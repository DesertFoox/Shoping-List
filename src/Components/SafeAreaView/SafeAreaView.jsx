import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SafeAreaView = ({ children, justify }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#22272E",
      padding: 40,
      color: "#fff",
      alignItems: "center",
      justifyContent: justify === false ? "flex-start" : "center",
    },
  });

  return <View style={styles.container}>{children}</View>;
};

export default SafeAreaView;
