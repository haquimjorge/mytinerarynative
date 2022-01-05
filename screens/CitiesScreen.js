import React, { useEffect } from "react";
import { ScrollView } from "react-native";
// import  Cities  from "../components/Cities";
import { HeroCities } from "../components/HeroCities";
import { WarningCovid } from "../components/WarningCovid";
// import citiesActions from "../redux/actions/citiesActions";

const CitiesScreen = () => {

  

  return (
    <ScrollView>
      <HeroCities/>
      <WarningCovid/>
      {/* <Cities/> */}
    </ScrollView>
  );
};

// const mapDispatchToProps = {
//   getCities: citiesActions.getCities
// }

// const mapStateToProps = {
//   cities: state.citiesReducer.cities
// }



export default CitiesScreen;
