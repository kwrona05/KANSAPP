import { View, Text, StyleSheet } from "react-native";

export default function Map() {
  return (
    <View>
      <Text>Here will be the map of the campus</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
  },
});
