import { StyleSheet, Text, View } from "react-native";
import React from "react";

const WelcomeScreen = () => {
  return (
    <View>
      <Text style={styles.mainText}>Welcome, annon</Text>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
  },
  mainText: {
    textAlign: "center",
    fontSize: 30,
  },
});
