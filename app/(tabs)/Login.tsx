import { useFonts } from "expo-font";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Login = () => {
  const [fontsLoaded] = useFonts({
    BungeeInline: require("../../assets/Fonts/BungeeInline-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.Welcome}>Welcome</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 5,
    borderColor: "#b41a1a",
  },
  Welcome: {
    color: "#FF00BB",
    fontFamily: "BungeeInline",
    fontSize: 48,
  },
});
