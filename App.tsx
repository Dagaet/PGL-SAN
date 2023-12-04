import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyDrawer from "./components/MyDrawer";
import { ContextsProvider } from "./providers/ContextsProvider";

export default function App() {
  return (
    <ContextsProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <MyDrawer />
        </NavigationContainer>
      </View>
    </ContextsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
