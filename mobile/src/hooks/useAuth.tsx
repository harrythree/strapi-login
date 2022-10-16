import * as React from "react";
import { deleteItemAsync, getItemAsync, setItemAsync } from "expo-secure-store";
import { Alert } from "react-native";

import login from "../utils/login";

const AuthContext = React.createContext(undefined);

const reducer = (prevState, action) => {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...prevState,
        userToken: action.userToken,
        username: action.username,
        isLoading: false,
      };
    case "SIGN_IN":
      return {
        ...prevState,
        userToken: action.userToken,
        username: action.username,
      };
    case "SIGN_OUT":
      return {
        ...prevState,
        userToken: null,
        username: null,
      };
  }
};

const defaultState = {
  isLoading: true,
  userToken: null,
  username: null,
};

function AuthProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, defaultState);

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await getItemAsync("token");
      } catch (e) {
        Alert.alert("Error", "Failed retrieving token");
      }

      dispatch({ type: "RESTORE_TOKEN", userToken });
    };

    bootstrapAsync();
  }, []);

  const signUp = async (data) => {
    dispatch({ type: "SIGN_IN", userToken: "dummy-auth-token" });
  };

  const signOut = async () => {
    await deleteItemAsync("token");
    dispatch({ type: "SIGN_OUT" });
  };

  const signIn = async (data) => {
    try {
      const body = {
        identifier: data.identifier,
        password: data.password,
      };

      const res = await login(body);

      console.log(res.user);

      await setItemAsync("token", res.jwt);
      dispatch({
        type: "SIGN_IN",
        userToken: res.jwt,
        username: res.user.username,
      });
    } catch (err) {
      Alert.alert("Error", err.message);
    }
  };

  const value = { state, signIn, signOut, signUp };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = React.useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
