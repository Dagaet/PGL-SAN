import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./ProfileScreen";
import QrScreen from "./QrScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import appColors from "../assets/Styles/appColors";

const Tab = createBottomTabNavigator();

export default function PortfolioScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Profile") {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "QR") {
            return (
              <Ionicons
                name={focused ? "qr-code" : "qr-code-outline"}
                size={size}
                color={color}
              />
            );
          }
          // return <Ionicons name={focused ? "qr-code" : "qr-code-outline"} size={size} color={color} />;
        },
        tabBarActiveTintColor: appColors.headerColor,
        tabBarInactiveTintColor: "gray",
        tabBarLabelPosition: "beside-icon",
        tabBarLabelStyle: {
          fontSize: 20,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="QR" component={QrScreen} />
    </Tab.Navigator>
  );
}
