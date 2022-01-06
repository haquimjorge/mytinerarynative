import React from "react";
import { ScrollView } from "react-native";
import { Cards } from "../components/Cards";
import { Hero } from "../components/Hero";
import Carouselcities from "../components/Carouselcities";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomeScreen = (props) => {
  console.log(props)
  return (
    <ScrollView>
      <Hero />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("Cities", { screen: "Cities"});
        }}
      >
        
        <Text style={styles.textButton}>DISCOVER NOW!</Text>
        
      </TouchableOpacity>
      <Cards/>
      <Carouselcities/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  textButton: {
    fontSize: 25,
    color: "white",
    backgroundColor: "#ff9240",
    textAlign: 'center',
    padding: 50
  },
});

export default HomeScreen;
