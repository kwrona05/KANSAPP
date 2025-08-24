import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import lessons from "../data/lessons.json";
import { StyleSheet } from "react-native";

export default function Calendar() {
  const [data, setData] = useState<{ day: string; lessons: any[] }[]>([]);

  useEffect(() => {
    const iteratedData = Object.entries(lessons).map(([day, lessons]) => ({
      day,
      lessons,
    }));

    setData(iteratedData);
  }, []);

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <Text style={styles.title}>Plan lekcji</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.day}
          renderItem={({ item }) => (
            <View style={styles.dayContainer}>
              <Text style={styles.dayTitle}>{item.day.toUpperCase()}</Text>
              <FlatList
                data={item.lessons}
                keyExtractor={(lesson, index) => index.toString()}
                renderItem={({ item: lesson }) => (
                  <View style={styles.lessonContainer}>
                    {lesson.subject === "WOLNE" ? (
                      <Text style={styles.lessonFree}>Dzień wolny !!!</Text>
                    ) : (
                      <Text style={styles.lessonText}>
                        {lesson.subject} | {lesson.time} | {lesson.category}
                      </Text>
                    )}
                  </View>
                )}
              />
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
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1E4F91",
    textAlign: "center",
    marginBottom: 20,
  },
  dayContainer: {
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: "#E6007E",
    marginBottom: 16,
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E4F91",
    marginBottom: 12,
  },
  lessonContainer: {
    backgroundColor: "#f2f2f2",
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  lessonText: {
    fontSize: 15,
    color: "#333",
  },
  lessonFree: {
    fontSize: 15,
    fontStyle: "italic",
    color: "#E6007E",
    fontWeight: "600",
  },
});
