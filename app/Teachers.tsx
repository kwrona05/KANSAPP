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
    backgroundColor: "#F0F4FF", // Light background color
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1E4F91", // Dark blue color for title
    textAlign: "center",
    marginBottom: 20,
  },
  facultyContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#ffffff", // White background for faculty container
    borderRadius: 12, // Rounded corners
    shadowColor: "#000", // Shadow for depth
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  facultyName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1E4F91", // Dark blue for faculty name
    marginBottom: 10,
  },
  groupContainer: {
    marginLeft: 10,
    marginTop: 10,
  },
  groupName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#E6007E", // Dark blue for group name
  },
  lecturerName: {
    fontSize: 16,
    color: "#1E4F91", // Dark blue for lecturer name
    marginLeft: 10,
    marginBottom: 5,
  },
});
