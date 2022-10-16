// import React, { useEffect } from "react";
// import { SafeAreaView, StyleSheet, TextInput, Alert } from "react-native";

// import Button from "../components/Button";
// import login from "../utils/login";

// import { setItemAsync, getItemAsync } from "expo-secure-store";

// async function getValueFor(key) {
//   let result = await getItemAsync(key);
//   if (result) {
//     alert("🔐 Here's your value 🔐 \n" + result);
//   } else {
//     alert("No values stored under that key.");
//   }
// }

// const Login = () => {
//   const [identifier, onChangeIdentifier] = React.useState("");
//   const [password, onChangePassword] = React.useState("");

//   useEffect(() => {
//     const getToken = async () => {
//       const result = await getItemAsync("token");

//       console.log("result", result);
//     };

//     getToken();
//   }, []);

//   const onPress = async () => {
//     try {
//       const body = {
//         identifier,
//         password,
//       };

//       const res = await login(body);

//       await setItemAsync("token", res.jwt);
//     } catch (err) {
//       Alert.alert("Error", err.message);
//     }
//   };

//   return (
//     <SafeAreaView>
//       <TextInput
//         style={styles.input}
//         onChangeText={onChangeIdentifier}
//         value={identifier}
//         placeholder="Identifier"
//       />
//       <TextInput
//         style={styles.input}
//         onChangeText={onChangePassword}
//         value={password}
//         placeholder="Password"
//         secureTextEntry
//       />
//       <Button title="Login" onPress={onPress} />
//     </SafeAreaView>
//   );
// };

import * as React from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const [identifier, setIdentifier] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { signIn } = useAuth();

  return (
    <View>
      <TextInput
        placeholder="Identifier"
        style={styles.input}
        value={identifier}
        onChangeText={setIdentifier}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Sign in"
        onPress={() => signIn({ identifier, password })}
      />
    </View>
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
