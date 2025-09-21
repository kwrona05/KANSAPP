import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {
  GestureHandlerRootView,
  Pressable,
  TextInput,
} from "react-native-gesture-handler";
import { useRouter, Link } from "expo-router";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleRegister = () => {
    if (!email || !password || !confirmPassword) {
      setError("Wszystkie pola są wymagane");
      return;
    }
    if (password !== confirmPassword) {
      setError("Hasła muszą być identyczne");
      return;
    }
    // 🔐 tu dodaj logikę np. zapisania użytkownika lub wysłania do API
    console.log("Rejestracja:", email, password);

    // Po rejestracji przekieruj do logowania
    router.push("./login");
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>Zarejestruj się</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            placeholder="Hasło"
            secureTextEntry
            value={password}
          />
          <TextInput
            style={styles.input}
            onChangeText={setConfirmPassword}
            placeholder="Powtórz hasło"
            secureTextEntry
            value={confirmPassword}
          />
          <Pressable style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Zarejestruj się</Text>
          </Pressable>
          {error !== "" && <Text style={styles.error}>{error}</Text>}
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Masz już konto?</Text>
            <Link href="/Login" style={styles.loginLink}>
              Zaloguj się
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
    color: "#1E4F91",
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
  loginContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  loginText: {
    fontSize: 14,
    color: "#333",
    marginRight: 5,
  },
  loginLink: {
    fontSize: 14,
    color: "#1E4F91",
    fontWeight: "600",
  },
});
