import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyDrawer from "./components/MyDrawer";
import { LoginProvider } from "./providers/LoginProvider";

export default function App() {
  return (
    <LoginProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <MyDrawer></MyDrawer>
        </NavigationContainer>
      </View>
    </LoginProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
