import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Progress = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Progress Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1C1C1E",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 20,
  },
});

export default Progress;
