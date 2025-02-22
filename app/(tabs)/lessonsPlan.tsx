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
        <Text>Plan lekcji</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.day}
          renderItem={({ item }) => (
            <View style={styles.dayContainer}>
              <Text>{item.day.toUpperCase()}</Text>
              <FlatList
                data={item.lessons}
                keyExtractor={(lessons, index) => index.toString()}
                renderItem={({ item: lesson }) => (
                  <View>
                    {lesson.subject === "WOLNE" ? (
                      <Text>Dzień wolny !!!</Text>
                    ) : (
                      <>
                        <Text>{lesson.subject}</Text>
                        <Text>
                          {lesson.time} | {lesson.category}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#E6007E",
  },
  dayContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E6007E",
    shadowColor: "#E6007E",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 6,
    padding: 10,
  },
});
