import { View, Text, StyleSheet } from "react-native";
import additionalLessons from "./data/additionalLessons.json";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";

export default function Teachers() {
  const data = Object.entries(additionalLessons).map(([faculty, groups]) => ({
    faculty,
    groups: Object.entries(groups).map(([groupName, lecturers]) => ({
      groupName,
      lecturers,
    })),
  }));

  return (
    <GestureHandlerRootView style={styles.container}>
      <Text style={styles.title}>Koła</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.faculty}
        renderItem={({ item }) => (
          <View style={styles.facultyContainer}>
            <Text style={styles.facultyName}>{item.faculty.toUpperCase()}</Text>
            {item.groups.map((group) => (
              <View key={group.groupName} style={styles.groupContainer}>
                <Text style={styles.groupName}>{group.groupName}</Text>
                {group.lecturers.map((lecturer, index) => (
                  <Text key={index} style={styles.lecturerName}>
                    - {lecturer}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        )}
      />
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
  facultyContainer: {
    marginBottom: 20,
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: "#E6007E",
  },
  facultyName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E4F91",
    marginBottom: 12,
  },
  groupContainer: {
    backgroundColor: "#f2f2f2",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  groupName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 6,
  },
  lecturerName: {
    fontSize: 15,
    color: "#555",
    marginLeft: 6,
    marginBottom: 4,
  },
});
