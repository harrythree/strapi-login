import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Alert } from "react-native";

import Button from "../components/Button";
import login from "../utils/login";

const Login = () => {
  const [identifier, onChangeIdentifier] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  const onPress = async () => {
    try {
      const body = {
        identifier,
        password,
      };

      const res = await login(body);
      Alert.alert(JSON.stringify(res));
    } catch (err) {
      Alert.alert("Error", err.message);
    }
  };

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
      <Button title="Login" onPress={onPress} />
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
