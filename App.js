import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MenuItem from "./components/MenuItem";

export default function App() {
  // let name = 'Salmon Sashimi';
  // let price = 22.00;
  // let imageSource = '../assets/kazunori.jpeg'
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Snap Eating Account</Text>
      <MenuItem name={'Salmon Sashimi'} price={22.00} imageSource={'../assets/kazunori.jpeg'} />
      <MenuItem name={'Yellowtail'} price={19.00} imageSource={'../assets/kazunori-1.jpeg'} />
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
