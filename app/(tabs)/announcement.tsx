import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import announcements from "../data/announcements.json";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

export default function Announcement() {
  const [data, setData] = useState<{ date: string; text: string }[]>([]);

  useEffect(() => {
    const iteratedData = Object.entries(announcements).map(([date, text]) => ({
      date,
      text,
    }));

    setData(iteratedData);
  }, []);

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Ogłoszenia</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.date}
          renderItem={({ item }) => (
            <View style={styles.announcementContainer}>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.announcementText}>{item.text}</Text>
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
  announcementContainer: {
    backgroundColor: "#ffffff",
    padding: 20,
    marginBottom: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  announcementText: {
    color: "#1E4F91",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  date: {
    color: "#E6007E",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
});
