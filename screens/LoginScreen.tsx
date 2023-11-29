import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import appColors from "../assets/Styles/appColors";

const LoginScreen = () => {
  return (
    <View>
      <Text style={styles.mainText}>Welcome, anon</Text>
      <View style={styles.loginContainer}></View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
  },
  mainText: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 50,
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 15,
    alignSelf: "center",
  },
  loginContainer: {
    backgroundColor: appColors.grey,
    width: 350,
    height: 360,
    marginTop: 20,
    alignSelf: "center",
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  loginText: {
    fontSize: 25,
    marginLeft: 20,
    marginRight: 20,
    alignSelf: "center",
    marginTop: 80,
  },
  logInButton: {
    marginTop: 40,
    borderRadius: 50,
    backgroundColor: appColors.buttonColor,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 150,
  },
});
