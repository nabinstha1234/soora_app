import { View, Image, StyleSheet } from "react-native";
import React from "react";

import { IconButton } from "../../atoms";

const Header = () => {
  const onButtonPress = () => {
    console.log("Button pressed");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.headerIcon}
        source={require("../../../assets/images/logo1.png")}
      />
      <IconButton
        title="Contact Us"
        image={require("../../../assets/images/contact-icon.png")}
        onPress={onButtonPress}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  headerIcon: {
    width: 100,
    height: 20,
  },
});
