import React from "react";
import { View, Text, FlatList } from "react-native";
import { Calendar } from "react-native-calendars";
import dayjs from "dayjs";

const events = [
    {id: 1, title:"Kwadrat", date: "2025-08-20"}
]

export default function Calendar() {
    const today = dayjs()
    const weekEvents = events.filter(event => dayjs(event.date).isAfter(today.substract(1, "day")) && dayjs(event.date).isBefore(today.add(7, "day")))
}