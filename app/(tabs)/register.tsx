import React from "react";
import {ActivityIndicator, Button, Text, TextInput} from "react-native-paper";

import {Container} from "@/components/Container";

export default function TabTwoScreen() {

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const onRegister = () => {
    // TODO: register
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
            onChangeText={value => setUsername(value)}
            style={{marginBottom: 12}}
          />
          <TextInput
            mode="outlined"
            label="Password"
            value={password}
            onChangeText={value => setPassword(value)}
            style={{marginBottom: 12}}
          />
          <TextInput
            mode="outlined"
            label="Confirm Password"
            value={confirmPassword}
            onChangeText={value => setConfirmPassword(value)}
            style={{marginBottom: 12}}
          />
          {error && <Text style={{marginBottom: 12, color: "red"}}>{error}</Text>}
          <Button
            icon="plus"
            mode="contained"
            onPress={onRegister}
          >
            Register
          </Button>
        </>
      )}
    </Container>
  );
}