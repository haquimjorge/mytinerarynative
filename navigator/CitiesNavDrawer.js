import { createDrawerNavigator, CustomDrawerContent } from "@react-navigation/drawer";
import { connect } from "react-redux";
import authActions from "../redux/actions/authActions";
import HomeScreen from "../screens/HomeScreen";
import CitiesScreen from "../screens/CitiesScreen";
import CitiesNavStack from "./CitiesNav"

const CitiesNav = createDrawerNavigator();

const Navigator = (props) => {
  console.log(props);
  return (
    <CitiesNav.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#212529",
        },
        headerTintColor: "#ffffff",
      }}
    >
    
      <CitiesNav.Screen
        name="Home"
        component={CitiesNavStack}
        options={{
          title: "MyTinerary",
          headerShown: false,
        }}
      />
      <CitiesNav.Screen name="Cities" component={CitiesScreen} />
    </CitiesNav.Navigator>
  );
};

// const mapDispatchToProps = {
//   logIn: userActions.logIn,
//   signUp: userActions.signUp,
// };

// const mapStateToProps = (state) => {
//   return {
//     token: state.userReducer.token,
//     firstName: state.userReducer.firstName,
//     photo: state.userReducer.photo,
//   };
// };
export default connect(null, null)(Navigator);