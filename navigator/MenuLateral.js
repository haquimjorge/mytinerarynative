import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CitiesScreen from "../screens/CitiesScreen";
import HomeScreen from "../screens/HomeScreen";

const Drawer = createDrawerNavigator();


export const MenuLateral = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="HomeScreen" component={HomeScreen}/>
            <Drawer.Screen name="CitiesScreen" component={CitiesScreen}/>
        </Drawer.Navigator>
    )
}
