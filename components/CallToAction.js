import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const CallToAction = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("Cities");
        }}
      >
        <View style={styles.button}>
          <Text style={styles.textButton}>DISCOVER NOW!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50
  },
  button: {
    backgroundColor: "#ff9240",
    borderRadius: 50,
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginVertical: 40,
  },
  textButton: {
    fontSize: 25,
    color: "white",
  },
});
