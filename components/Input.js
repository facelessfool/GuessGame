import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    height: 30,
    borderBottomColor: "grey",
  },
});

export default Input;
