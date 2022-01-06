import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import CitiesScreen from "./screens/CitiesScreen";
// import SignUpScreen from "./screens/SignUpScreen";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";
import Navigator from "./navigator/CitiesNavDrawer";

// const Drawer = createDrawerNavigator();
const globalStore = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={globalStore}>
      <NavigationContainer>
        {/* <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Cities" component={CitiesScreen} /> */}
          {/* <Drawer.Screen name="Sign Up" component={SignUpScreen} /> */}
        {/* </Drawer.Navigator> */}
        <Navigator/>
      </NavigationContainer>
     </Provider>
  );
};

export default App;
