import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const imageBanner = {
  uri: "https://i.postimg.cc/k4KDn2kf/modern-metropoly.jpg",
};
const logoMyTinerary = { uri: "https://i.postimg.cc/Bv1PLJYz/mt-logo.png" };

export const HeroCities = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={imageBanner}
        style={styles.heroBanner}
        resizeMode="cover"
      >
        <View style={styles.heroText}>
          <Image source={logoMyTinerary} style={styles.logo} />
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
