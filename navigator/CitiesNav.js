import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import CitiesScreen from "../screens/CitiesScreen";

const CitiesNav = createNativeStackNavigator();

const Navigator = (props) => {
  return (
    <CitiesNav.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#000",
        },
        headerTintColor: "#ffffff",
      }}
    >
      <CitiesNav.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "MyTinerary",
          headerRight: () => (
            <Button
              onPress={() => props.navigation.openDrawer()}
              title="Menu"
              color="#000000"
            />
          ),
        }}
      />
      <CitiesNav.Screen name="Cities" component={CitiesScreen} />
    </CitiesNav.Navigator>
  );
};

export default Navigator;
