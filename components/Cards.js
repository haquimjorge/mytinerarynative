import React from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";

const imgCardOne = { uri: "https://i.postimg.cc/yx5w308q/traveller-1.jpg" };
const imgCardTwo = { uri: "https://i.postimg.cc/4xbsqF3m/traveller-2.jpg" };
const imgCardThree = { uri: "https://i.postimg.cc/6QWtXL7z/traveller-5.jpg" };

export const Cards = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cards}>
        <ImageBackground
          source={imgCardOne}
          style={styles.imgCards}
          resizeMode="cover"
          imageStyle={{borderRadius: 50, opacity: 0.5}}
        >
          <Text style={styles.titleCards}>Freedom</Text>
          <Text style={styles.textCards}>
            “And then there is the most dangerous risk of all – the risk of
            spending your life not doing what you want on the bet you can buy
            yourself the freedom to do it later.”
          </Text>
        </ImageBackground>
      </View>
      <View style={styles.cards}>
        <ImageBackground
          source={imgCardTwo}
          style={styles.imgCards}
          resizeMode="cover"
          imageStyle={{borderRadius: 50, opacity: 0.5}}
        >
         
            <Text style={styles.titleCards}>Curiosity</Text>
            <Text style={styles.textCards}>
              "Do not always run away from the darkness! Remember the beautiful
              lakes which are hidden inside the dark caves! In the least
              expected places, there exist the most beautiful treasures!"
            </Text>
          
        </ImageBackground>
      </View>
      <View style={styles.cards}>
        <ImageBackground
          source={imgCardThree}
          style={styles.imgCards}
          resizeMode="cover"
          imageStyle={{borderRadius: 50, opacity: 0.5}}
        >
          <Text style={styles.titleCards}>Love</Text>
          <Text style={styles.textCards}>
            “And if travel is like love, it is, in the end, mostly because it’s
            a heightened state of awareness, in which we are mindful, receptive,
            undimmed by familiarity and ready to be transformed. That is why the
            best trips, like the best love affairs, never really end.”
          </Text>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 1400,
    backgroundColor: "#000",
    alignItems: "center",
  },
  cards: {
    height: 450,
    width: 350,
    marginTop: 10,
    borderTopLeftRadius: 25
  },
  imgCards: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 25
  },
  titleCards: {
    color: "white",
    fontSize: 40,
  },
  textCards: {
    color: "white",
    fontSize: 15,
    paddingHorizontal: 10,
  },
});
