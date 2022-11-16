import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const footerIcons = [
  {
    title: "Facebook",
    image: require("../../../assets/images/facebook.png"),
  },
  {
    title: "Twitter",
    image: require("../../../assets/images/twitter.png"),
  },
  {
    title: "Instagram",
    image: require("../../../assets/images/instagram.png"),
  },
  {
    title: "TikTok",
    image: require("../../../assets/images/tiktok.png"),
  },
  {
    title: "Youtube",
    image: require("../../../assets/images/youtube.png"),
  },
];

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        {footerIcons.map((icon, index) => {
          return (
            <TouchableOpacity style={styles.iconContainer}>
              <Image
                key={index}
                style={styles.footerIcon}
                source={icon.image}
              />
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.lineStyle} />
      <Text style={styles.copyRightText}>
        Copyright © 2022 Soora. All rights reserved
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  lineStyle: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  footerIcon: {
    width: 20,
    height: 20,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    borderRadius: "50%",
    marginLeft: 8,
    marginRight: 8,
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  copyRightText: {
    marginTop: 15,
    marginBottom: 15,
    textAlign: "center",
    fontFamily: "Inter",
  },
});
