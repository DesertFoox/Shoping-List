import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

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

  return (
    <ScrollView style={{ backgroundColor: "#22272E" }}>
      <View style={styles.container}>{children}</View>
    </ScrollView>
  );
};

export default SafeAreaView;
