import { TextInput, StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";

const CustomTextInput = ({ onChangeText, text, handlePress, buttonTitle }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      {buttonTitle && (
        <Pressable style={styles.button} onPress={handlePress}>
          <Text style={styles.text}>{buttonTitle}</Text>
        </Pressable>
      )}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderColor: "#0B0B0B",
    borderWidth: 1,
    borderRadius: 25,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    paddingLeft: 20,
    width: "65%",
  },
  button: {
    width: "30%",
    borderRadius: 15,
    height: 40,
    color: "#FFFFFF",
    backgroundColor: "#0B0B0B",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    elevation: 3,
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    // letterSpacing: 0.25,
    color: "white",
  },
});
