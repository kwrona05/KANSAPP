import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import dayjs from "dayjs";
import "dayjs/locale/pl";

dayjs.locale("pl");

export default function WeeklyEvents({ events = [] }) {
  const today = dayjs();
  const weekDays = Array.from({ length: 7 }, (_, i) => today.add(i, "day"));

  const eventsByDate = weekDays.map((day) => {
    const formatted = day.format("YYYY-MM-DD");
    return {
      date: day,
      events: events.filter((e) => dayjs(e.date).isSame(formatted, "day")),
    };
  });

  return (
    <FlatList
      data={eventsByDate}
      keyExtractor={(item) => item.date.format("YYYY-MM-DD")}
      renderItem={({ item }) => (
        <View style={styles.dayContainer}>
          <Text style={styles.dayTitle}>
            {item.date.format("dddd, DD MMMM")}
          </Text>
          {item.events.length > 0 ? (
            item.events.map((event, idx) => (
              <View key={idx} style={styles.eventCard}>
                <Text style={styles.eventTitle}>{event.title}</Text>
                {event.time && (
                  <Text style={styles.eventTime}>{event.time}</Text>
                )}
              </View>
            ))
          ) : (
            <Text style={styles.noEvents}>Brak wydarzeń</Text>
          )}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  dayContainer: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E6007E",
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    color: "#1E4F91",
  },
  eventCard: {
    padding: 8,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    marginBottom: 6,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  eventTime: {
    fontSize: 14,
    color: "#666",
  },
  noEvents: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#aaa",
  },
});
