import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Alert } from "react-native";

import Button from "../components/Button";

const Login = () => {
  const [identifier, onChangeIdentifier] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeIdentifier}
        value={identifier}
        placeholder="Identifier"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      <Button title="Login" onPress={() => Alert.alert(identifier, password)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 8,
    padding: 12,
  },
});

export default Login;
