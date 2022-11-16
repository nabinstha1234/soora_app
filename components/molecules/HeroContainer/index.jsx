import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const HeroContainer = ({
  subHeaderText,
  mainHeaderTextFirst,
  mainHeaderTextSecond,
  hasImages,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.dashIcon} />
        <Text style={styles.subHeaderText}>{subHeaderText}</Text>
      </View>
      <Text style={styles.mainHeaderText}>{mainHeaderTextFirst}</Text>
      <Text style={styles.mainHeaderText}>{mainHeaderTextSecond}</Text>
      {hasImages && (
        <View style={styles.imageContainer}>
          <TouchableOpacity>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={require("../../../assets/images/google-play.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={require("../../../assets/images/apple-store.png")}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default HeroContainer;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 30,
    width: "100%",
  },
  subHeaderText: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 15,
  },
  mainHeaderText: {
    marginTop: 10,
    fontSize: 38,
    fontWeight: "800",
  },
  imageContainer: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 160,
    height: 50,
  },
  dashIcon: {
    borderBottomWidth: 2,
    height: 10,
    width: 20,
    borderColor: "#000",
    marginRight: 5,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    marginRight: 10,
  },
});
