import { View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import contact from "../data/contact.json";

export default function Contact() {
  const [data, setData] = useState();
  return (
    <GestureHandlerRootView>
      <View>
        <Text>Kontakt</Text>
      </View>
    </GestureHandlerRootView>
  );
}
