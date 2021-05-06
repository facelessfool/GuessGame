import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
} from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import MyButton from "../components/MyButton";
import { Ionicons } from "@expo/vector-icons";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const randNum = Math.floor(Math.random() * (max - min)) + min;
  if (randNum == exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randNum;
  }
};

const GameScreen = (props) => {
  // console.log("props in gamescreen", props);

  const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);

  //object destructuring froms the props sent by App.js
  const { userChoice, onGameOver } = props;
  useEffect(() => {
    if (currentGuess === props.userChoice) {
      //fire a game is over msg
      const n = pastGuesses.length;
      onGameOver(n);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "higher" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie ", "you know this is wrong", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else if (direction === "higher") {
      currentLow.current = currentGuess + 1;
    }

    const nextNum = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNum);
    setPastGuesses((curPastGuesses) => [nextNum, ...curPastGuesses]);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.container}>
        <MyButton onClick={nextGuessHandler.bind(this, "lower")}>
          <Ionicons name="remove" size={24} color="white" />
        </MyButton>
        <MyButton onClick={nextGuessHandler.bind(this, "higher")}>
          <Ionicons name="add" size={24} color="white" />
        </MyButton>
        {/* <Button title="LOWER" onPress={nextGuessHandler.bind(this, "lower")} />
        <Button
          title="HIGHER"
          onPress={nextGuessHandler.bind(this, "higher")}
        /> */}
      </Card>
      <ScrollView>
        {pastGuesses.map((guess) => (
          <View key={guess}>
            <Text>{guess}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "90%",
  },
});

export default GameScreen;
