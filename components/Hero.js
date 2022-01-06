import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity
} from "react-native";


const imageBanner = {uri: 'https://wallpapercave.com/uwp/uwp1594744.jpeg'};
const logoMyTinerary = {uri: 'https://i.postimg.cc/Bv1PLJYz/mt-logo.png'};

export const Hero = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={imageBanner}
        style={styles.heroBanner}
        resizeMode="cover"
      >
        <View style={styles.heroText}>
          <Image source={logoMyTinerary} style={styles.logo} />

          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>Find your perfect trip,</Text>
            <Text style={styles.subTitle}>designed by insiders who know</Text>
            <Text style={styles.subTitle}> and love their cities!</Text>
          </View>
          
        </View>
        
      </ImageBackground>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heroBanner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heroText: {
    paddingBottom: 170,
  },
  subTitle: {
    alignSelf: "center",
    color: "white",
    fontSize: 25,
    
  },
 
  subTitleContainer: {
    marginTop: 50,
  },
  logo: {
    flex: 1,
    justifyContent: "center",
    height: 250,
    width: 520,
  },
});
