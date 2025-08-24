import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import contact from "../data/contact.json";

export default function Contact() {
  const [data, setData] = useState<
    Record<string, { emails?: string[]; phoneNumbers?: string[] }>
  >({});

  useEffect(() => {
    setData(contact);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Kontakt</Text>

        {Object.entries(data).map(([department, values], index) => (
          <View key={index} style={styles.contactItem}>
            <Text style={styles.departmentName}>{department}</Text>

            {values.emails?.length > 0 && (
              <View style={styles.contactDetails}>
                <Text style={styles.contactType}>Email:</Text>
                {values.emails.map((email, emailIndex) => (
                  <TouchableOpacity
                    key={emailIndex}
                    onPress={() =>
                      Linking.openURL(`mailto:${email}`).catch(() =>
                        Alert.alert("Nie udało się otworzyć poczty")
                      )
                    }
                  >
                    <Text style={styles.contactLink}>{email}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            {values.phoneNumbers?.length > 0 && (
              <View style={styles.contactDetails}>
                <Text style={styles.contactType}>Numery telefonów:</Text>
                {values.phoneNumbers.map((phone, phoneIndex) => (
                  <TouchableOpacity
                    key={phoneIndex}
                    onPress={() =>
                      Linking.openURL(`tel:${phone}`).catch(() =>
                        Alert.alert("Nie udało się otworzyć telefonu")
                      )
                    }
                  >
                    <Text style={styles.contactLink}>{phone}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        ))}
      </ScrollView>
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
  contactItem: {
    backgroundColor: "#f2f2f2",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  departmentName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1E4F91",
    marginBottom: 10,
  },
  contactDetails: {
    marginBottom: 10,
  },
  contactType: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
    marginBottom: 4,
  },
  contactLink: {
    fontSize: 16,
    color: "#E6007E",
    marginBottom: 4,
  },
});
