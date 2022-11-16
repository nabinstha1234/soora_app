import { StyleSheet, Image, SafeAreaView, ScrollView } from "react-native";
import React from "react";

import { Header, Footer } from "../../components/organisms";
import { HeroContainer } from "../../components/molecules";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <HeroContainer
          subHeaderText="Coming Soon"
          mainHeaderTextFirst="Bringing"
          mainHeaderTextSecond="Muslims Together"
          hasImages
        />
        <Image
          style={styles.mainImage}
          source={require("../../assets/images/landing-image-2.png")}
        />
        <HeroContainer
          subHeaderText="Coming Soon"
          mainHeaderTextFirst="Get Notified"
          mainHeaderTextSecond="When we Launch"
        />
        <Image
          style={styles.mainImage}
          source={require("../../assets/images/landing-image-1.png")}
        />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: "100%",
    flex: 1,
  },
  mainImage: {
    width: "100%",
    height: 400,
  },
});
