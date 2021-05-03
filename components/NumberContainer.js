import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const NumberContainer = (props) => {
  return (
    <View style={styles.numBox}>
      <Text>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  numBox: {
    alignItems: "center",
    borderWidth: 2,
    justifyContent: "center",
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderColor: Colors.primary,
  },
});

export default NumberContainer;
