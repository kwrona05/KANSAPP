import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

export default function Map() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/Unknown.jpg")}
        style={styles.image}
      />
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 200,
    resizeMode: "contain",
  },
});
