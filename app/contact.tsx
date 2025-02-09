import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";

const contactData = [
  { id: "1", name: "Kacper", number: "881 696 905" },
  { id: "2", name: "Kowalski", number: "444 555 666" },
  { id: "3", name: "Nowak", number: "555 666 777" },
];
const contact = () => {
  return <FlatList data={contactData} keyExtractor={item}></FlatList>;
};

export default contact;

const styles = StyleSheet.create({
  container: {
    width: "auto",
    height: "auto",
  },
});
