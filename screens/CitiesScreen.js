import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { HeroCities } from "../components/HeroCities";
import { WarningCovid } from "../components/WarningCovid";
import Searcher from "../components/Searcher";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";

class CitiesScreen extends React.Component {
  componentDidMount() {
    console.log(this.props.getCities());
  }

  render() {
    const { cities, filteredCities } = this.props;

    return (
      <ScrollView>
        <HeroCities />
        <WarningCovid />

        <View>
          <View>
            <Searcher
              handleChange={(e) =>
                this.props.getFiltered(cities, e.nativeEvent.text)
              }
            />

            {filteredCities.length > 0 ? (
              filteredCities.map((city) => {
                return (
                  <View key={city.id}>
                    {/* <NavLink className="cities-link" to={`/city/${city._id}`}> */}
                    <View>
                      <ImageBackground
                        source={{uri: city.image}}
                        style={{ height: 200 }}
                        imageStyle={{opacity: 0.9}}
                        resizeMode="cover"
                      >
                        
                          <Text style={styles.citiesText}>{city.cityName}</Text>
                        
                      </ImageBackground>
                    </View>
                    {/* </NavLink> */}
                  </View>
                );
              })
            ) : (
              <View>
                
                <Text> OOPS! NO CITIES FOUND!</Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  citiesText: {
    textAlign: 'center',
    paddingTop: 100,
    color: "white",
    fontSize: 30
  },
});

const mapDispatchToProps = {
  getCities: citiesActions.getCities,
  getFiltered: citiesActions.getFiltered,
};

const mapStateToProps = (state) => {
  return {
    cities: state.cities.allCities,
    filteredCities: state.cities.filteredCities,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesScreen);
