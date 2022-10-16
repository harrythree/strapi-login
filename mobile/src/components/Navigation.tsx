import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useAuth } from "../hooks/useAuth";
import Login from "../screens/Login";
import Splash from "../screens/Splash";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { state } = useAuth();

  const StackNavigator = () => {
    if (state.isLoading) {
      return (
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} />
        </Stack.Navigator>
      );
    }

    if (state.userToken === null) {
      return (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: "Login",
              animationTypeForReplace: state.userToken ? "push" : "pop",
            }}
          />
        </Stack.Navigator>
      );
    }

    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
