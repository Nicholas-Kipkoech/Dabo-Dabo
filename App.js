import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Homepage from "./src/screens/Home";
import SpinAndWin from "./src/screens/Spin";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Homepage />
       */}
      <SpinAndWin />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 30,
  },
});
