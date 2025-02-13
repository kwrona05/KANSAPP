import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4FF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1E4F91",
    paddingVertical: 15,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  menuButton: {
    fontSize: 24,
    color: "#E6007E",
    fontWeight: "bold",
    padding: 10,
    borderRadius: 10,
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#EAEAF5",
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
    backgroundColor: "#1E4F91",
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E6007E",
    shadowColor: "#E6007E",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 5,
    width: "95%",
    height: "20%",
  },
  tileText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 20,
  },
  pressedTile: {
    backgroundColor: "#163A6D",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  profileButton: {
    borderRadius: 20,
  },
  pressedProfile: {
    opacity: 0.7,
  },
  pressedMenu: {
    opacity: 0.7,
  },
});
