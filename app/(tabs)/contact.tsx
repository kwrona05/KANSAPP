import { View, Text, StyleSheet } from "react-native";
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
    <GestureHandlerRootView>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Kontakt</Text>

        {Object.keys(data).map((department, index) => (
          <View key={index} style={styles.contactItem}>
            <Text style={styles.departmentName}>{department}</Text>

            {data[department].emails && data[department].emails.length > 0 && (
              <View style={styles.contactDetails}>
                <Text style={styles.contactType}>Email:</Text>

                {data[department].emails.map((email, emailIndex) => (
                  <Text key={emailIndex} style={styles.contactInfo}>
                    {email}
                  </Text>
                ))}
              </View>
            )}

            {data[department].phoneNumbers &&
              data[department].phoneNumbers.length > 0 && (
                <View style={styles.contactDetails}>
                  <Text style={styles.contactType}>Numery telefonów:</Text>

                  {data[department].phoneNumbers.map((phone, phoneIndex) => (
                    <Text key={phoneIndex} style={styles.contactInfo}>
                      {phone}
                    </Text>
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
  contactItem: {
    backgroundColor: "#ffffff", // White background for contact items
    padding: 20,
    marginBottom: 20,
    borderRadius: 12, // Rounded corners
    shadowColor: "#000", // Shadow for depth
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  departmentName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1E4F91", // Dark blue for department name
    marginBottom: 10,
  },
  contactDetails: {
    marginTop: 10,
  },
  contactType: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#E6007E", // Pink color for labels
    marginBottom: 5,
  },
  contactInfo: {
    fontSize: 16,
    color: "#1E4F91", // Dark blue for contact details
    marginLeft: 10,
    marginBottom: 5,
  },
});
