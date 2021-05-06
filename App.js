import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const fetchFonts = () => {
  //loadAsync return a promise
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRound, setGuessRound] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      //start async points at the operation when this apploading is first loaded, it has to be a function and it should return a promis
      //onFinish executes when startasync is done
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  //when dataloaded is true it will continue with the next code
  const configureNewGame = () => {
    setGuessRound(0);
    setUserNumber(null);
  };
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRound(0);
  };

  const gameOverHandler = (numOfrounds) => {
    setGuessRound(numOfrounds);
  };

  //we want to show the game over screen if guessround >0

  let content = <StartScreen onStart={startGameHandler} />;

  if (userNumber && guessRound <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRound > 0) {
    content = (
      <GameOverScreen
        userNumber={userNumber}
        numRounds={guessRound}
        newGame={configureNewGame}
      />
    );
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess Game" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
