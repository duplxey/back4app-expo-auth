import React from "react";
import {ActivityIndicator, Button, Text, TextInput} from "react-native-paper";

import {Container} from "@/components/Container";

export default function TabTwoScreen() {

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const onLogin = () => {
    // TODO: login
  }

  return (
    <Container>
      {loading ? (
        <ActivityIndicator
          size="large"
          animating={true}
        />
      ) : (
        <>
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
        </>
      )}
    </Container>
  );
}