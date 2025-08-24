import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WeeklyEvents from "./(tabs)/calendar";
import Profile from "./Profile";
import Home from "./(tabs)/index";
import Login from "./Login";
import Teachers from "./Teachers";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="WeeklyEvents" component={WeeklyEvents} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Teachers" component={Teachers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
