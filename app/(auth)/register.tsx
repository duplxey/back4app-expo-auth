import React, {useContext} from "react";
import {ActivityIndicator, Button, Text, TextInput} from "react-native-paper";

import {Container} from "@/components/Container";
import ParseContext from "@/context/parseContext";
import {useRouter} from "expo-router";
import {useParse} from "@/hooks/useParse";

export default function RegisterScreen() {

  const router = useRouter();
  const {parse, parseUser, isParseLoaded} = useParse();

  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);

  const onRegister = async () => {
    if (!username || !email || !password || !confirmPassword) {
      setError("Please fill out all the fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    try {
      const user = await parse.User.signUp(username, password, undefined, undefined);
      user.setEmail(email);
      await user.save();
      router.replace("/(tabs)/profile")
    } catch (error: any) {
      setError(error.message);
    }
  }

  return (
    <Container>
      {!isParseLoaded ? (
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
            label="Email"
            value={email}
            onChangeText={value => setEmail(value)}
            style={{marginBottom: 12}}
          />
          <TextInput
            mode="outlined"
            label="Password"
            secureTextEntry
            value={password}
            onChangeText={value => setPassword(value)}
            style={{marginBottom: 12}}
          />
          <TextInput
            mode="outlined"
            label="Confirm Password"
            secureTextEntry
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