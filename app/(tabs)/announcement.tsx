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
    backgroundColor: "#fff",
    padding: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1E4F91",
    marginBottom: 20,
    textAlign: "center",
  },
  announcementContainer: {
    backgroundColor: "#f2f2f2",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  date: {
    fontSize: 14,
    fontWeight: "600",
    color: "#E6007E",
    marginBottom: 6,
  },
  announcementText: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
  },
});
