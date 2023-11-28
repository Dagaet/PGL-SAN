import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import appColors from "../assets/Styles/appColors";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  const drawerNavigationScreenOptions: DrawerNavigationOptions = {
    headerTitle: "PGL App SAINT",
    headerTitleAlign: "center",
    headerShown: true,
    headerStyle: {
      backgroundColor: appColors.headerColor,
      height: 100,
    },
    headerTintColor: appColors.white,
    drawerItemStyle: {
      width: "90%",
      borderRadius: 50,
      alignSelf: "center",
    },
    drawerLabelStyle: {
      marginLeft: 30,
    },
    drawerActiveTintColor: appColors.white,
    drawerActiveBackgroundColor: appColors.headerColor,
    drawerInactiveTintColor: "lightgray",
    drawerInactiveBackgroundColor: appColors.primary,
    drawerType: "front",

    drawerStyle: {
      marginTop: 100,
    },
  };
  return (
    <Drawer.Navigator
      initialRouteName="Welcome Page"
      screenOptions={drawerNavigationScreenOptions}
    >
      <Drawer.Screen
        name="Welcome Page"
        component={WelcomeScreen}
      ></Drawer.Screen>
      <Drawer.Screen name="Login" component={LoginScreen}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default MyDrawer;

const styles = StyleSheet.create({});
