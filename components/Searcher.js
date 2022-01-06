import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const Searcher = (props) => {
  return (
    <View>
      <View >
        <Text style={styles.citiesText}>YOR NEXT TRIP IS HERE!</Text>
        {
          <TextInput
          style={styles.citiesText}
            placeholder="Enter your destination..."
            onChange={props.handleChange}
          />
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    citiesText: {
      textAlign: 'center',
      paddingTop: 10,
      fontSize: 30
    },
  });

export default Searcher;