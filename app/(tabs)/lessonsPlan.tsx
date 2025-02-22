import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import lessons from "../data/lessons.json";
import { StyleSheet } from "react-native";
import { wrap } from "module";

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
          style={styles.flatlist}
          data={data}
          keyExtractor={(item) => item.day}
          renderItem={({ item }) => (
            <View style={styles.dayContainer}>
              <Text style={styles.dayTitle}>{item.day.toUpperCase()}</Text>
              <FlatList
                data={item.lessons}
                keyExtractor={(lessons, index) => index.toString()}
                renderItem={({ item: lesson }) => (
                  <View style={styles.subjectContainer}>
                    {lesson.subject === "WOLNE" ? (
                      <Text style={styles.subject}>Dzień wolny !!!</Text>
                    ) : (
                      <>
                        <Text style={styles.subject}>
                          {lesson.subject} | {lesson.time} | {lesson.category}
                        </Text>
                      </>
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     gap: 10,
//     borderWidth: 1,
//     borderRadius: 10,
//     borderColor: "#E6007E",
//     backgroundColor: "#163A6D",
//   },
//   flatlist: {
//     flex: 0,
//     flexDirection: "column",
//     gap: 10,
//   },
//   dayContainer: {
//     flex: 1,
//     flexDirection: "column",
//     gap: 10,
//     backgroundColor: "lightgray",
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: "#E6007E",
//     shadowColor: "#E6007E",
//     shadowOpacity: 0.3,
//     shadowOffset: { width: 0, height: 5 },
//     shadowRadius: 6,
//     padding: 10,
//   },
//   title: {
//     flex: 1,
//     justifyContent: "center",
//     color: "#E6007E",
//     fontSize: 28,
//   },
//   dayTitle: {
//     flex: 1,
//     justifyContent: "center",
//     color: "#E6007E",
//     fontSize: 14,
//   },
// });
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
    backgroundColor: "#1E4F91",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  dayTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 10,
  },
  subjectContainer: {
    backgroundColor: "#EAEAF5",
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
  subject: {
    color: "#1E4F91",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
