import { Text, View, StyleSheet } from "react-native";

export default function aboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Us</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    width: 400,
    height: 400,
  },

  text: {
    fontSize: 28,
    fontWeight: "bold",
    color: "green",
  },
});
