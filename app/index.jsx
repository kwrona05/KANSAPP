import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnimation = useRef(new Animated.Value(-1000)).current;

  useEffect(() => {
    Animated.timing(slideAnimation, {
      toValue: menuVisible ? 0 : -1000,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [menuVisible]);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./assets/logo.png")} style={styles.logo} />
        <TouchableOpacity onPress={toggleMenu}>
          <Text style={styles.menuButton}>☰</Text>
        </TouchableOpacity>
      </View>

      <Animated.View
        style={[styles.menu, { transform: [{ translateY: slideAnim }] }]}
      >
        <TouchableOpacity onPress={toggleMenu}>
          <Text style={styles.closeButton}>✖</Text>
        </TouchableOpacity>
        <Text style={styles.menuItem}>Plan zajęć</Text>
        <Text style={styles.menuItem}>Mapa KANS</Text>
        <Text style={styles.menuItem}>Ogłoszenia</Text>
        <Text style={styles.menuItem}>Kontakt</Text>
        <Text style={styles.menuItem}>Wykładowcy</Text>
      </Animated.View>

      <View style={styles.body}>
        <TouchableOpacity
          style={styles.tile}
          onPress={() => navigation.navigate("Screen1")}
        >
          <Text>Go to Screen 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tile}
          onPress={() => navigation.navigate("Screen2")}
        >
          <Text>Go to Screen 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f8f8" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#007AFF",
  },
  logo: { width: 100, height: 40, resizeMode: "contain" },
  menuButton: { fontSize: 24, color: "#fff" },
  body: { flex: 1, justifyContent: "center", alignItems: "center" },
  tile: { padding: 20, backgroundColor: "#ddd", margin: 10, borderRadius: 10 },
  menu: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: { fontSize: 24, color: "#fff", marginBottom: 20 },
  menuItem: { fontSize: 20, color: "#fff", marginVertical: 10 },
});

export default HomeScreen;
