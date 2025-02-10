import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contact from "./Contact";
import Map from "./Map";
import Announcement from "./Announcement";
import Teachers from "./Teachers";
import Profile from "./Profile";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Announcement" component={Announcement} />
        <Stack.Screen name="Teachers" component={Teachers} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
