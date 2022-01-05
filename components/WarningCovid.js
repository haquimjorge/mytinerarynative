import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

const logoWarning = { uri: "https://i.postimg.cc/VkJKK1yz/covid-warning.jpg" };

export const WarningCovid = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heroText}>
        <Image source={logoWarning} style={styles.logo} />
      </View>
      <Text style={styles.subTitle}>
        From MyTinerary, we are aware of the current situation caused by the
        pandemic produced by COVID-19. We urge travelers to take care of
        themselves, and to maintain the necessary protocols.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 400,
    backgroundColor: "#000",
    alignItems: "center",
  },
  heroBanner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subTitle: {
    alignSelf: "center",
    color: "white",
    fontSize: 16,
    marginTop: 10,
    paddingHorizontal: 15,
    textAlign: 'center'
  },

  subTitleContainer: {
    marginTop: 50,
  },
  logo: {
    flex: 1,
    justifyContent: "center",
    height: 130,
    width: 140,
    marginTop: 10,
  },
});
