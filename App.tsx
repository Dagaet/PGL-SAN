import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyDrawer from "./components/MyDrawer";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MyDrawer></MyDrawer>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
