import React from "react";
import {View} from "react-native";
import {Avatar, Button, Text, TextInput} from "react-native-paper";

import {Container} from "@/components/Container";
import {useRouter} from "expo-router";

export default function IndexScreen() {

  const router = useRouter();

  const [bio, setBio] = React.useState<string>("");
  const [success, setSuccess] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const onSave = async () => {
    // TODO: save bio
  }

  const onLogout = async () => {
    // TODO: logout
  }

  return (
    <Container>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            <Avatar.Image
              source={require('@/assets/images/avatar.png')}
              size={100}
            />
            <View style={{marginLeft: 12}}>
              <Text variant="headlineLarge">
                TODO: username
              </Text>
              <Text variant="headlineSmall">
                TODO: email
              </Text>
            </View>
          </View>
          <TextInput
            mode="outlined"
            multiline
            numberOfLines={4}
            label="Bio"
            value={bio}
            onChangeText={value => setBio(value)}
            style={{marginBottom: 12}}
          />
          {success && <Text style={{marginBottom: 12, color: "green"}}>{success}</Text>}
          {error && <Text style={{marginBottom: 12, color: "red"}}>{error}</Text>}
          <Button
            mode="contained"
            icon="floppy"
            onPress={onSave}
          >
            Save
          </Button>
          <Button
            mode="outlined"
            icon="logout"
            onPress={onLogout}
            style={{marginTop: 12}}
          >
            Log out
          </Button>
    </Container>
  );
}