import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import appColors from "../assets/Styles/appColors";
import { NavigationContext } from "@react-navigation/native";
import { defaultUserContext, isLoggedContext } from "../contexts/LoginContext";
const WelcomeScreen = () => {
  const navigation = React.useContext(NavigationContext);
  const isLogged = React.useContext(isLoggedContext);
  const user = React.useContext(defaultUserContext);

  return (
    <View>
      {isLogged.isLogged ? (
        <>
          <Text style={styles.mainText}>Welcome, anon</Text>
          <Image
            source={require("../assets/arch.png")}
            style={styles.image}
          ></Image>
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>You need to login to continue</Text>
            <Pressable
              style={styles.logInButton}
              onPress={() => navigation?.navigate("Login")}
            >
              <Text style={styles.logInButtonText}>Click to login</Text>
            </Pressable>
          </View>
        </>
      ) : (
        <>
          <Text style={styles.mainText}>Welcome, {user.userName}</Text>
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>
              Welcome to the app, you can use the options in the drawer section
            </Text>
          </View>
        </>
      )}
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
    width: 210,
  },
  logInButtonText: {
    fontSize: 20,
    fontWeight: "700",
  },
});
