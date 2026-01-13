import { useFonts } from "expo-font";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginInput from "../../components/LoginInput";

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
      <Text style={styles.Form}>
        Email: <Text />
      </Text>

      <LoginInput />
      <Text style={styles.Form}>
        Password: <Text />
      </Text>
      <LoginInput />
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
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
  Form: {
    fontFamily: "BungeeInline",
  },
  forgotPassword: {
    fontFamily: "BungeeInline",
    color: "blue",
    marginTop: 10,
  },
});
