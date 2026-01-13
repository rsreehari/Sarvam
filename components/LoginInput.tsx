import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const LoginInput = () => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter text here"
        value={text}
        onChangeText={setText}
      />
    </View>
  );
};

export default LoginInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#000000",
    color: "white",
  },
});
