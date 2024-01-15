import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import appColors from "../assets/Styles/appColors";
import { NavigationContext } from "@react-navigation/native";
import { logoutUser } from "../services/registerApiServices";
import { userDataContext } from "../contexts/DataContext";

const LogoutScreen = () => {
  const navigation = React.useContext(NavigationContext);
  const userData = React.useContext(userDataContext);

  function fetchLogout() {
    const fetchData = async () => {
      const results = await logoutUser();
      if (results == null || results == "Error") {
        window.alert("Error when log out");
      } else {
        navigation?.navigate("Welcome Page");
        userData.userIsLogged();
        userData.setUser("");
      }
    };
    fetchData();
  }

  return (
    <View style={styles.mainView}>
      <View style={styles.logoutContainer}>
        <Text style={styles.logoutText}>See you next time</Text>
        <Pressable style={styles.logOutButton} onPress={() => fetchLogout()}>
          <Text style={styles.logOutButtonText}>Click to logout</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LogoutScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: appColors.secondary,
  },
  logoutContainer: {
    backgroundColor: appColors.grey,
    width: 350,
    height: 200,
    marginTop: "50%",
    alignItems: "center",
    paddingTop: 40,
    alignSelf: "center",
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  logoutText: {
    fontSize: 25,
    marginLeft: 20,
    marginRight: 20,
  },
  logOutButton: {
    marginTop: 25,
    borderRadius: 50,
    backgroundColor: appColors.buttonColor,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 210,
  },
  logOutButtonText: {
    fontSize: 20,
    fontWeight: "700",
  },
});
