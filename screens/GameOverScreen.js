import React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import MyButton from "../components/MyButton";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
const GameOverScreen = (props) => {
  return (
    <View style={styles.gameover}>
      <TitleText>Game Over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          // fadeDuration={300} for fade animation
          source={require("../assets/success.png")}
          //   source={{
          //     uri:
          //       "https://www.pandotrip.com/wp-content/uploads/2013/09/Untitled-23-980x552.jpg",
          //   }}

          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultText}>
        <TitleText>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.numRounds} </Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </TitleText>
      </View>

      <View style={{ marginVertical: 10 }}>
        {/* <Button
          title="Start New Game"
          onPress={props.newGame}
          color={Colors.primary}
        /> */}
        <MyButton onClick={props.newGame}>New Game</MyButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gameover: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  highlight: {
    color: Colors.primary,
  },
  resultText: {
    width: "80%",
    marginHorizontal: 30,
    textAlign: "center",
  },
});
export default GameOverScreen;
