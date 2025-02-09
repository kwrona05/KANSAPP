import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  ScrollView,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
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
        <TouchableOpacity onPress={toggleMenu}>
          <Text style={styles.menuButton}>☰</Text>
        </TouchableOpacity>
      </View>

      <Animated.View
        style={[styles.menu, { transform: [{ translateY: slideAnimation }] }]}
      >
        <TouchableOpacity onPress={toggleMenu}>
          <Text style={styles.closeButton}>✖</Text>
        </TouchableOpacity>
        <Text style={styles.menuItem}>Plan zajęć</Text>
        <Text style={styles.menuItem}>Mapa KANS</Text>
        <Text style={styles.menuItem}>Ogłoszenia</Text>

        <Pressable onPress={() => navigation.navigate("Contact")}>
          <Text style={styles.menuItem}>Kontakt</Text>
        </Pressable>

        <Text style={styles.menuItem}>Wykładowcy</Text>
        <Pressable onPress={() => navigation.navigate("About")}>
          <Text style={styles.menuItem}>About Us</Text>
        </Pressable>
      </Animated.View>

      <ScrollView contentContainerStyle={styles.body}>
        <Pressable
          style={styles.tile}
          onPress={() => navigation.navigate("Announcement")}
        >
          <View>
            <Text style={styles.tileText}>Ogłoszenia</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.tile}
          onPress={() => navigation.navigate("Teachers")}
        >
          <View>
            <Text style={styles.tileText}>Wykładowcy</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.tile}
          onPress={() => navigation.navigate("Contact")}
        >
          <View>
            <Text>Kontakt</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.tile}
          onPress={() => navigation.navigate("Map")}
        >
          <View>
            <Text style={styles.tileText}>Mapa</Text>
          </View>
        </Pressable>
      </ScrollView>
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
  menuButton: { fontSize: 24, color: "#fff" },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  menu: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 5,
  },
  closeButton: { fontSize: 24, color: "#fff", marginBottom: 20 },
  menuItem: { fontSize: 20, color: "#fff", marginVertical: 10 },
  tile: {
    width: "90%",
    height: "20%",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1,
  },
  tileText: { textAlign: "center" },
});

export default HomeScreen;
