import * as React from "react";
import { Button, Text, View } from "react-native";

import { useAuth } from "../hooks/useAuth";

const Home = () => {
  const { signOut, state } = useAuth();

  return (
    <View>
      <Text>{state.username}</Text>
      <Button title="Sign out" onPress={signOut} />
    </View>
  );
};

export default Home;
