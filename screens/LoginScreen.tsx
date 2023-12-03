import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import appColors from "../assets/Styles/appColors";
import { NavigationContext } from "@react-navigation/native";
import { defaultUserContext, isLoggedContext } from "../contexts/LoginContext";

const LoginScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigation = React.useContext(NavigationContext);
  const defaultLoginUser = React.useContext(defaultUserContext);
  const isLogged = React.useContext(isLoggedContext);

  function checkUser() {
    if (
      defaultLoginUser.userName == name &&
      defaultLoginUser.userPassword == password
    ) {
      navigation?.navigate("Welcome Page");
      isLogged.userIsLogged();
    } else {
      alert("Incorrect Login");
    }
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.loginContainer}>
        <TextInput
          placeholder="Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        ></TextInput>
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        ></TextInput>
        <Pressable style={styles.logInButton} onPress={checkUser}>
          <Text style={styles.logInButtonText}>Click to login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  loginContainer: {
    backgroundColor: appColors.grey,
    width: "90%",
    height: "70%",
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  loginSubContainer: {
    justifyContent: "space-evenly",
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
  input: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: appColors.secondary,
    borderRadius: 50,
    padding: 10,
    height: 40,
    width: 230,
  },
  logInButtonText: {
    fontSize: 20,
    fontWeight: "700",
  },
});
