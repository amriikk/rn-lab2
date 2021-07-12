import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MenuItem from "./components/MenuItem";

export default function App() {
  // let name = 'Salmon Sashimi';
  // let price = 22.00;
  // let imageSource = './assets/kazunori.jpeg'
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Snap Eating Account</Text>
      {/* TODO (part 1): update these props with your favorite food item */}
      <MenuItem name={'Salmon Sashimi'} price={22.00} imageSource={'../assets/kazunori.jpeg'} />
      {/* TODO (part 2): add another MenuItem! */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "slategrey",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
});
