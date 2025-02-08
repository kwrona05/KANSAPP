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
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      <Tabs.Screen name="map" options={{ title: "Mapa KANS" }} />
      <Tabs.Screen name="lessons" options={{ title: "Plan zajęć" }} />
    </Tabs>
  );
}
