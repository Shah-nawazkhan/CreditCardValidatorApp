import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import validator from "validator";

const App = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const validateCreditCard = (value) => {
    if (validator.isCreditCard(value)) {
      setErrorMessage("Credit Card Number is Valid");
    } else {
      setErrorMessage("Enter valid Credit Card Number!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Text style={styles.logo}> React native </Text>
      </View>
      <Text style={styles.header}>Credit Card Validator</Text>
      <Text>Enter Credit Card:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => validateCreditCard(text)}
      />
      <Text style={styles.errorText}>{errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
  },
  image: {
    alignItems: "center",
  },
  logo: {
    fontSize: 30,
    margin: 40,
    marginTop: 60,
    backgroundColor: "lightgreen",
    borderRadius: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    margin: 10,
  },
  errorText: {
    fontWeight: "bold",
    color: "red",
    backgroundColor: "yellow",
  },
});

export default App;
