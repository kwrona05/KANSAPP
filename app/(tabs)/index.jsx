import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  ScrollView,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "../styles/index_styles";

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
        <Pressable
          onPress={toggleMenu}
          style={({ pressed }) => [
            styles.menuButton,
            pressed && styles.pressedMenu,
          ]}
        >
          {/* <Text style={styles.menuButton}>☰</Text> */}
          <Ionicons name={"menu-sharp"} color={"#FFFF"} size={40} />
        </Pressable>
        <Text style={styles.headerTitle}>KANS</Text>
        <Pressable
          style={({ pressed }) => [
            styles.profileButton,
            pressed && styles.pressedProfile,
          ]}
          onPress={() => navigation.navigate("Login")}
        >
          <Ionicons name={"person-circle-outline"} color={"#FFFF"} size={40} />
        </Pressable>
      </View>

      <Animated.View
        style={[styles.menu, { transform: [{ translateY: slideAnimation }] }]}
      >
        <TouchableOpacity onPress={toggleMenu}>
          <Text style={styles.closeButton}>✖</Text>
        </TouchableOpacity>
        <Pressable onPress={() => navigation.navigate("lessonsPlan")}>
          <Text style={styles.menuItem}>Plan zajęć</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("map")}>
          <Text style={styles.menuItem}>Mapa KANS</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("announcement")}>
          <Text style={styles.menuItem}>Ogłoszenia</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("contact")}>
          <Text style={styles.menuItem}>Kontakt</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Teachers")}>
          <Text style={styles.menuItem}>Koła naukowe</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("WeeklyEvents")}>
          <Text style={styles.menuItem}>Wydarzenia</Text>
        </Pressable>
      </Animated.View>

      <ScrollView contentContainerStyle={styles.body}>
        <Pressable
          style={({ pressed }) => [styles.tile, pressed && styles.pressedTile]}
          onPress={() => navigation.navigate("announcement")}
        >
          <View>
            <Text style={styles.tileText}>Ogłoszenia</Text>
          </View>
        </Pressable>
        <Pressable
          style={({ pressed }) => [styles.tile, pressed && styles.pressedTile]}
          onPress={() => navigation.navigate("WeeklyEvents")}
        >
          <View>
            <Text style={styles.tileText}>Wydarzenia</Text>
          </View>
        </Pressable>
        <Pressable
          style={({ pressed }) => [styles.tile, pressed && styles.pressedTile]}
          onPress={() => navigation.navigate("contact")}
        >
          <View>
            <Text style={styles.tileText}>Kontakt</Text>
          </View>
        </Pressable>
        <Pressable
          style={({ pressed }) => [styles.tile, pressed && styles.pressedTile]}
          onPress={() => navigation.navigate("map")}
        >
          <View>
            <Text style={styles.tileText}>Mapa</Text>
          </View>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
