import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import appColors from "../assets/Styles/appColors";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import Portfolio from "../screens/PortfolioScreen";
import { isLoggedContext } from "../contexts/DataContext";
import PortfolioScreen from "../screens/PortfolioScreen";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  const isLogged = React.useContext(isLoggedContext);
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
      backgroundColor: appColors.secondary,
    },
  };
  return (
    <Drawer.Navigator
      initialRouteName="Welcome Page"
      screenOptions={drawerNavigationScreenOptions}
    >
      <Drawer.Screen name="Welcome Page" component={WelcomeScreen} />
      {!isLogged.isLogged ? (
        <Drawer.Screen name="Login" component={LoginScreen} />
      ) : (
        <Drawer.Screen name="Portfolio" component={PortfolioScreen} />
      )}
    </Drawer.Navigator>
  );
};

export default MyDrawer;

const styles = StyleSheet.create({});
