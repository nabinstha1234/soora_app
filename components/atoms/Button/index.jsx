import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const IconButton = ({ title, onPress, image }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
        {image && <Image style={styles.image} source={image} />}
      </View>
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 5,
    width: 130,
    height: 45,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonText: {
    color: "#fff",
    alignSelf: "center",
    fontSize: 14,
  },
  image: {
    width: 12,
    height: 12,
  },
});
