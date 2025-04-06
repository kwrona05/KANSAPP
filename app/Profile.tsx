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
    backgroundColor: "#F0F4FF",
    padding: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1E4F91",
    marginBottom: 20,
    textAlign: "center",
  },
  iconContainer: {
    marginBottom: 20,
  },
  infoCard: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 12,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#E6007E",
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
});
