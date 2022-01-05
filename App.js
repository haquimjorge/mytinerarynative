import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import CitiesScreen from "./screens/CitiesScreen";
// import { createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import rootReducer from "./redux/reducers/rootReducer";
// import thunk from "redux-thunk";

const Drawer = createDrawerNavigator();
// const globalStore = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    // <Provider store={globalStore}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Cities" component={CitiesScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    // </Provider>
  );
};

export default App;
