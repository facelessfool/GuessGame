import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";
import MyButton from "../components/MyButton";

const StartScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [selectedNumber, setSelectedNumber] = useState();
  const [confirm, setConfirm] = useState(false);

  const enteredValueHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, "")); //g is for global
  };

  const resetInput = () => {
    setEnteredValue("");
  };

  const confirmHandler = () => {
    const chosenNum = parseInt(enteredValue);

    if (isNaN(chosenNum) || chosenNum <= 0) {
      Alert.alert(
        "Invalid number",
        "Number has to be a number between 1 and 99.",
        [{ text: "okay", style: "destructive", onPress: resetInput }]
      );
      return;
    }

    setConfirm(true);
    setSelectedNumber(chosenNum);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (confirm) {
    confirmedOutput = (
      <Card style={styles.summary}>
        <Text style={{ fontSize: 16 }}>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MyButton onClick={() => props.onStart(selectedNumber)}>START</MyButton>
        {/* <Button
          title="START GAME"
          color={Colors.purple}
          onPress={() => props.onStart(selectedNumber)}
        /> */}
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new Game</Text>

        <Card style={styles.inputbox}>
          <BodyText>Select a number</BodyText>
          <Input
            style={styles.inpBottom}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={enteredValueHandler}
            value={enteredValue}
          />
          <View style={styles.btnsContainer}>
            <View style={styles.btn}>
              <Button
                title="Confirm"
                color={Colors.pos}
                onPress={confirmHandler}
              />
            </View>
            <View style={styles.btn}>
              <Button
                title="Reset"
                color={Colors.negative}
                onPress={resetInput}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
  },
  title: {
    fontSize: 18,
    marginVertical: 10,
    fontFamily: "open-sans-bold",
  },
  inputbox: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  btnsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 5,

    width: "100%",

    marginVertical: 25,
  },
  btn: {
    width: 100,
  },
  inpBottom: {
    width: 40,
    textAlign: "center",
  },
  summary: {
    marginVertical: 40,
    alignItems: "center",
  },
});

export default StartScreen;
