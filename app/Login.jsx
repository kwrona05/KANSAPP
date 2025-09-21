import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import userData from "./data/user.json";
import {
  GestureHandlerRootView,
  Pressable,
  TextInput,
} from "react-native-gesture-handler";
import { Link, useNavigation } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigation = useNavigation();

  const loginAuth = () => {
    if (email === userData.email && password === userData.password) {
      navigation.navigate("Profile"); // upewnij się, że masz taki ekran w routes
    } else {
      setError("Wystąpił błąd podczas logowania");
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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

          {/* 🔽 Link do rejestracji */}
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Nie masz konta?</Text>
            <Link href="/Register" style={styles.registerLink}>
              Zarejestruj się
            </Link>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1E4F91",
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    color: "#E6007E",
    backgroundColor: "#f9f9f9",
  },
  button: {
    backgroundColor: "#1E4F91",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  error: {
    marginTop: 16,
    fontSize: 14,
    color: "#E6007E",
    textAlign: "center",
  },
  registerContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  registerText: {
    fontSize: 14,
    color: "#333",
    marginRight: 5,
  },
  registerLink: {
    fontSize: 14,
    color: "#1E4F91",
    fontWeight: "600",
  },
});
