import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import announcements from "../data/announcements.json";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

export default function Announcement() {
  const [data, setData] = useState<{ date: string; text: string }[]>([]);

  useEffect(() => {
    const itteratedData = Object.entries(announcements).map(([date, text]) => ({
      date,
      text,
    }));

    setData(itteratedData);
  }, []);

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Ogłoszenia</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.date}
          renderItem={({ item }) => (
            <View style={styles.tile}>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.tileText}>{item.text}</Text>
            </View>
          )}
        />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4FF",
    padding: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1E4F91",
    textAlign: "center",
    marginBottom: 20,
  },
  tile: {
    backgroundColor: "#1E4F91",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E6007E",
    shadowColor: "#E6007E",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 5,
  },
  tileText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  date: {
    color: "#FFD700",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
});
