import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import appColors from "../assets/Styles/appColors";
import { NavigationContext } from "@react-navigation/native";
import { userDataContext } from "../contexts/DataContext";

const WelcomeScreen = () => {
  const navigation = React.useContext(NavigationContext);
  const userData = React.useContext(userDataContext);

  return (
    <View style={styles.mainView}>
      {!userData.isLogged ? (
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
          <Text style={styles.mainText}>Welcome, {userData.name}</Text>
          <View style={styles.portFolioContainer}>
            <Image
              style={styles.image}
              source={require("../assets/SaulEn20Anos.jpg")}
            ></Image>
            <Text style={styles.loginText}>
              Welcome to the app, you can use the options in the drawer section
            </Text>
            <Pressable
              style={styles.logInButton}
              onPress={() => navigation?.navigate("Portfolio")}
            >
              <Text style={styles.logInButtonText}>Portfolio</Text>
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: appColors.secondary,
  },
  container: {
    alignContent: "center",
  },
  mainText: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 50,
  },
  image: {
    width: 120,
    height: 120,
    marginTop: 15,
    alignSelf: "center",
    borderRadius: 50,
  },
  loginContainer: {
    backgroundColor: appColors.grey,
    width: 350,
    height: 400,
    marginTop: 20,
    alignItems: "center",
    paddingTop: 80,
    alignSelf: "center",
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  portFolioContainer: {
    backgroundColor: appColors.grey,
    width: 350,
    height: 400,
    marginTop: 20,
    paddingTop: 20,
    alignItems: "center",
    alignSelf: "center",
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  loginText: {
    fontSize: 25,
    marginLeft: 20,
    marginRight: 20,
  },
  logInButton: {
    marginTop: 25,
    borderRadius: 50,
    backgroundColor: appColors.buttonColor,
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
