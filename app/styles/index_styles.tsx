import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f8f8" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#007AFF",
  },
  menuButton: { fontSize: 24, color: "#fff" },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  menu: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 5,
  },
  closeButton: { fontSize: 24, color: "#fff", marginBottom: 20 },
  menuItem: { fontSize: 20, color: "#fff", marginVertical: 10 },
  tile: {
    width: "90%",
    height: "20%",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1,
  },
  tileText: { textAlign: "center" },
});
