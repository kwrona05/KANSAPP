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
    backgroundColor: "#F0F4FF",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1E4F91",
    textAlign: "center",
    marginBottom: 20,
  },
  dayContainer: {
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
  dayTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1E4F91",
    marginBottom: 10,
  },
  lessonContainer: {
    backgroundColor: "#EAEAF5",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E6007E",
    shadowColor: "#E6007E",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  lessonText: {
    color: "#1E4F91",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  lessonFree: {
    color: "#E6007E",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
