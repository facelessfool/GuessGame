import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const Header = (props) => {
  return (
    <View style={styles.titleStyle}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    marginTop: 0,
    paddingTop: 30,

    width: "100%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
});

export default Header;
