import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import Carousel from "react-native-snap-carousel";
const dimensions = Dimensions.get("screen");

const Carouselcities = () => {
  const arrayCountries = [
    {
      name: "Paris",
      country: "France",
      photo:  { uri : "https://i.postimg.cc/8c3Dhjbv/paris.jpg"},
    },
    {
      name: "Madrid",
      country: "Spain",
      photo: {uri:"https://i.postimg.cc/HL2g6S2d/madrid.jpg"},
    },
    {
      name: "Amsterdam",
      country: "Netherlands",
      photo: {uri:"https://i.postimg.cc/8csNJhLD/amsterdam.jpg"},
    },
    {
      name: "El Chaltén",
      country: "Argentina",
      photo: {uri:"https://i.postimg.cc/yYg77yVy/chalten.jpg"},
    },
    {
      name: "Cancún",
      country: "Mexico",
      photo: {uri:"https://i.postimg.cc/2jXzpKf5/cancun.jpg"},
    },
    {
      name: "Arkhale",
      country: "Nepal",
      photo: {uri:"https://live.staticflickr.com/1844/44107677581_8ac5b5782c_b.jpg"},
    },
    {
      name: "Java",
      country: "Indonesia",
      photo: {uri:"https://i.postimg.cc/Hsqdn8nD/java.jpg"},
    },
    {
      name: "Machu Picchu",
      country: "Perú",
      photo: {uri:"https://i.postimg.cc/85XVSj9Y/machupicchu.jpg"},
    },
    {
      name: "Tokyo",
      country: "Japan",
      photo: {uri:"https://i.postimg.cc/t4GGp0v9/tokio.jpg"},
    },
    {
      name: "New York",
      country: "United States",
      photo: {uri:"https://i.postimg.cc/zGT5gDHL/newyork.jpg"},
    },
    {
      name: "Tequendama",
      country: "Colombia",
      photo: {uri:"https://i.postimg.cc/5NCWh93P/tequendama.jpg"},
    },
    {
      name: "Rome",
      country: "Italy",
      photo: {uri:"https://i.postimg.cc/Y04BqtwC/rome.jpg"},
    },
  ];
  const renderItem = ({ item }) => {
    return (
      <ImageBackground style={styles.cityImage} source={item.photo}>
        <Text style={styles.cityName}>{item.name}</Text>
      </ImageBackground>
    );
  };
  return (
    <View style={{ alignItems: "center" }}>
      <Carousel
        data={arrayCountries}
        loop={true}
        autoplay={true}
        layout={"default"}
        renderItem={renderItem}
        sliderWidth={900}
        itemWidth={450}
      />
    </View>
  );
};

export default Carouselcities;

const styles = StyleSheet.create({
  cityName: {
    backgroundColor: "rgba(0,0,0,0.3)",
    width: "100%",
    textAlign: "center",
    color: "white",
    fontSize: 20,
    paddingVertical: 10,
  },
  cityImage: {
    width: "100%",
    height: Dimensions.get("screen").height * 0.4,
    borderRadius: 7,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
});
