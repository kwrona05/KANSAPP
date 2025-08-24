import { View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import studentsData from "./data/studentsData.json";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil Studenta</Text>
      <View style={styles.iconContainer}>
        <Ionicons name="people-circle-sharp" size={80} color="#1E4F91" />
      </View>
      <View style={styles.infoCard}>
        <Text style={styles.label}>Imię:</Text>
        <Text style={styles.value}>{studentsData.name}</Text>

        <Text style={styles.label}>Nazwisko:</Text>
        <Text style={styles.value}>{studentsData.surname}</Text>

        <Text style={styles.label}>Kierunek:</Text>
        <Text style={styles.value}>
          {studentsData.program} {studentsData.year}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1E4F91",
    textAlign: "center",
    marginBottom: 20,
  },
  iconContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  infoCard: {
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    padding: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#E6007E",
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: "#333",
    marginBottom: 6,
  },
});
