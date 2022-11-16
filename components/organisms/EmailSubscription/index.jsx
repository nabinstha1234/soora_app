import { View, StyleSheet } from "react-native";
import { useState } from "react";

import { TextInput } from "../../atoms";

const EmailSubscription = () => {
  const [text, onChangeText] = useState("");

  const handleOnChangedText = (text) => {
    onChangeText(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        text={text}
        onChangeText={handleOnChangedText}
        buttonTitle="Notify Me"
      />
    </View>
  );
};

export default EmailSubscription;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
