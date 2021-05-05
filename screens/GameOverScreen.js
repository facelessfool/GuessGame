import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.gameover}>
      <Text>Game Over</Text>
      <Text>Number of rounds: {props.numRounds}</Text>
      <Text>Number guessed: {props.userNumber}</Text>
      <Button title="Start New Game" onPress={props.newGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  gameover: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default GameOverScreen;
