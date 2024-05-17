import React from "react";
import {View} from "react-native";
import {ActivityIndicator, Avatar, Button, Text, TextInput} from "react-native-paper";

import {Container} from "@/components/Container";

export default function IndexScreen() {

  const [user, setUser] = React.useState({
    username: "duplxey",
    email: "info@duplxey.com",
    bio: "I am a full-stack developer. I like Django, React, and Docker.",
  });
  const [bio, setBio] = React.useState(user.bio);

  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  const onSave = () => {
    // TODO: save user bio
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
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            <Avatar.Image
              source={{uri: "https://i.ibb.co/4WdL9qC/avatar.png"}}
              size={100}
            />
            <View style={{marginLeft: 12}}>
              <Text variant="headlineLarge">
                {user.username}
              </Text>
              <Text variant="headlineSmall">
                {user.email}
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
          {error && <Text style={{marginBottom: 12, color: "red"}}>{error}</Text>}
          <Button
            mode="contained"
            icon="floppy"
            onPress={onSave}
          >
            Save
          </Button>
        </>
      )}
    </Container>
  );
}