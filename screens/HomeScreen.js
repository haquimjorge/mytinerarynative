import React from "react";
import { ScrollView } from "react-native";
import { Cards } from "../components/Cards";
import { Hero } from "../components/Hero";

const HomeScreen = () => {
  return (
    <ScrollView>
      <Hero />
      <Cards/>
    </ScrollView>
  );
};

export default HomeScreen;
