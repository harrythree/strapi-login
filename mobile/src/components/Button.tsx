import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const pressableStyle = ({ pressed }) => [
  {
    backgroundColor: pressed ? "#4fd1a6" : "#44bd94",
    ...styles.container,
  },
];

const Button = ({ onPress, title }) => {
  return (
    <Pressable style={pressableStyle} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    margin: 12,
    borderRadius: 8,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Button;
