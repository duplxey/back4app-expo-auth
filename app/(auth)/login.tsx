import React from "react";
import {Button, Text, TextInput} from "react-native-paper";

import {Container} from "@/components/Container";
import {useRouter} from "expo-router";

export default function LoginScreen() {

  const router = useRouter();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);

  const onLogin = async () => {
    if (!username || !password) {
      setError("Please enter your username and password.");
      return;
    }
    setError("");
    // TODO: login
  }

  return (
    <Container>
      <TextInput
        mode="outlined"
        label="Username"
        value={username}
        onChangeText={setUsername}
        style={{marginBottom: 12}}
      />
      <TextInput
        mode="outlined"
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        style={{marginBottom: 12}}
      />
      {error && <Text style={{marginBottom: 12, color: "red"}}>{error}</Text>}
      <Button
        mode="contained"
        icon="login"
        onPress={onLogin}
      >
        Login
      </Button>
    </Container>
  );
}