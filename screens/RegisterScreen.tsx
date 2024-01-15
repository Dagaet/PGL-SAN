import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import appColors from "../assets/Styles/appColors";
import { NavigationContext } from "@react-navigation/native";
import { registerUser } from "../services/registerApiServices";
import { userDataContext } from "../contexts/DataContext";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigation = React.useContext(NavigationContext);
  const userData = React.useContext(userDataContext);

  function register() {
    const registerNewUser = async () => {
      const results = await registerUser(name, email, password);
      if (results == null || results == "Error") {
        window.alert("No se pudo registrar usuario");
      } else {
        window.alert("Usuario registrado correctamente");
        userData.userIsLogged();
        userData.setUser(results);
        navigation?.navigate("Welcome Page");
      }
    };
    registerNewUser();
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
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        ></TextInput>
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          secureTextEntry={true}
          onChangeText={setPassword}
        ></TextInput>
        <Pressable style={styles.logInButton} onPress={register}>
          <Text style={styles.logInButtonText}>Click to register</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RegisterScreen;

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
