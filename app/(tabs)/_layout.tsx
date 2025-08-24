import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={"#E6007E"}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="announcement"
        options={{
          title: "Ogłoszenia",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "megaphone-sharp" : "megaphone-outline"}
              color={"#E6007E"}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Mapa KANS",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "map-sharp" : "map-outline"}
              color={"#E6007E"}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="lessonsPlan"
        options={{
          title: "Plan zajęć",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "calendar-sharp" : "calendar-outline"}
              color={"#E6007E"}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Kontakt",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "phone-portrait-sharp" : "phone-portrait-outline"}
              color={"#E6007E"}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "Wydarzenia",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "list-sharp" : "list-outline"}
              color={"#E6007E"}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
