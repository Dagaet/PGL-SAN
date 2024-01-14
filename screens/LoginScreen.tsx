import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import appColors from "../assets/Styles/appColors";
import { NavigationContext } from "@react-navigation/native";
import { isLoggedContext } from "../contexts/DataContext";
import { defaultUserData } from "../data/Data";
import { loginUser } from "../services/loginService";

const LoginScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigation = React.useContext(NavigationContext);
  const isLogged = React.useContext(isLoggedContext);

  function fetchLoginUser() {
    const fetchData = async () => {
      const results = await loginUser(name, password);
      if (results == null) {
        window.alert("No se pudo iniciar sesión");
      }
    };

    fetchData();
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
          secureTextEntry={true}
          onChangeText={setPassword}
        ></TextInput>
        <Pressable style={styles.logInButton} onPress={() => fetchLoginUser()}>
          <Text style={styles.logInButtonText}>Click to login</Text>
        </Pressable>
        <Pressable
          style={styles.logInButton}
          onPress={() => navigation?.navigate("Register")}
        >
          <Text style={styles.logInButtonText}>Click to register</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 120,
    alignItems: "center",
    backgroundColor: appColors.secondary,
  },
  loginContainer: {
    backgroundColor: appColors.grey,
    width: 350,
    height: 370,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    paddingTop: 30,
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
