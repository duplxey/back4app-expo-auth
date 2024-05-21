import React, {useEffect} from "react";
import {View} from "react-native";
import {ActivityIndicator, Avatar, Button, Text, TextInput} from "react-native-paper";

import {Container} from "@/components/Container";
import {useRouter} from "expo-router";
import {useParse} from "@/hooks/useParse";

export default function IndexScreen() {

  const router = useRouter();
  const {parse, parseUser, isParseLoaded} = useParse();

  const [bio, setBio] = React.useState<string>("");
  const [success, setSuccess] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    if (!parseUser) return;
    setBio(parseUser.get("bio") || "");
  }, [parseUser]);

  const onSave = async () => {
    if (!parseUser) return;
    parseUser.set("bio", bio);
    try {
      await parseUser.save();
      setSuccess("Bio saved successfully.");
    } catch (error: any) {
      setError(error.message);
    }
  }

  const onLogout = async () => {
    router.replace("/(auth)/login");
    await parse.User.logOut();
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
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            <Avatar.Image
              source={require("@/assets/images/splash.png")}
              size={100}
            />
            <View style={{marginLeft: 12}}>
              <Text variant="headlineLarge">
                {parseUser!.getUsername()}
              </Text>
              <Text variant="headlineSmall">
                {parseUser!.getEmail()}
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
        </>
      )}
    </Container>
  );
}