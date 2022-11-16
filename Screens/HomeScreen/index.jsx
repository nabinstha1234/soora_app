import { StyleSheet, SafeAreaView } from "react-native";
import React from "react";

import { Header, Footer } from "../../components/organisms";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Footer />
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
});
