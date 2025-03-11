import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useState, useRef } from "react";

export default function Map() {
  const [legendVisible, setLegendVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(800)).current;

  const toggleLegend = () => {
    Animated.timing(slideAnim, {
      toValue: legendVisible ? 800 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setLegendVisible(!legendVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Nasz Kampus</Text>
      </View>
      <View>
        <Image
          source={require("../../assets/images/Unknown.jpg")}
          style={styles.image}
        />
      </View>
      <TouchableOpacity style={styles.legendButton} onPress={toggleLegend}>
        <Text style={styles.legendButtonText}>
          {legendVisible ? "Zamknij" : "Legenda"}
        </Text>
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.legendContainer,
          { transform: [{ translateY: slideAnim }] },
        ]}
      >
        <Text style={styles.legendItem}>1. Rektorat</Text>
        <Text style={styles.legendItem}>
          2. Wydział nauk medycznych i technicznych
        </Text>
        <Text style={styles.legendItem}>
          3. Wydział nauk medycznych i technicznych
        </Text>
        <Text style={styles.legendItem}>4. Parking dla studentów</Text>
        <Text style={styles.legendItem}>5. Strefa imprez</Text>
        <Text style={styles.legendItem}>9. Pływalnia</Text>
        <Text style={styles.legendItem}>
          11. Wydział Nauk Humanistycznych i Społecznych
        </Text>
        <Text style={styles.legendItem}>12. Administracja</Text>
        <Text style={styles.legendItem}>
          13. Bibliotek i Centrum Informacji Naukowej
        </Text>
        <Text style={styles.legendItem}>22. Hala sportowa</Text>
        <Text style={styles.legendItem}>A. Akademik "POD JELENIEM"</Text>
        <Text style={styles.legendItem}>B. Akademik "POD JELONKIEM"</Text>
        <Text style={styles.legendItem}>
          C. Kantyna Studencka "Pełna Micha"
        </Text>
        <Text style={styles.legendItem}>D. Przedszkole "Mali Odkrywcy"</Text>
      </Animated.View>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#102137",
  },
  headerContainer: {
    position: "absolute",
    top: 20,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  image: {
    width: width,
    height: height,
    resizeMode: "contain",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#E6007E",
    textAlign: "center",
    backgroundColor: "rgba(16, 33, 55, 0.8)",
    borderRadius: 10,
  },
  legendButton: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "#E6007E",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  legendButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  legendContainer: {
    position: "absolute",
    bottom: 100,
    width: "90%",
    left: "5%",
    backgroundColor: "rgba(16, 33, 55, 0.9)",
    borderRadius: 15,
  },
  legendItem: {
    color: "#fff",
    fontSize: 14,
    paddingVertical: 10,
    textAlign: "center",
  },
});
