import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import userData from "./data/user.json";
import {
  GestureHandlerRootView,
  NativeViewGestureHandler,
  Pressable,
  TextInput,
} from "react-native-gesture-handler";
import { useNavigation } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigation = useNavigation();

  const loginAuth = () => {
    if (email === userData.email && password === userData.password) {
      navigation.navigate("Profile");
    } else {
      setError("Wystąpił błąd podczas logowania");
    }
  };

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>Zaloguj się</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            placeholder="Email"
            value={email}
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            placeholder="Hasło"
            secureTextEntry
            value={password}
          />
          <Pressable style={styles.button} onPress={loginAuth}>
            <Text style={styles.buttonText}>Zaloguj się</Text>
          </Pressable>
          {error !== "" && <Text style={styles.error}>{error}</Text>}
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#F0F4FF", // Tło w stylu podobnym do Profile
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1E4F91",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#1E4F91",
    backgroundColor: "#ffffff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: "#E6007E",
    paddingVertical: 15,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginTop: 15,
    textAlign: "center",
    fontSize: 16,
  },
});
