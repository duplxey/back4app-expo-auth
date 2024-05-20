import React, {useEffect} from "react";
import {ActivityIndicator} from "react-native-paper";
import {useRouter} from "expo-router";
import {View} from "react-native";

export default function IndexScreen() {

  const router = useRouter();
  const isAuthenticated = true;

  useEffect(() => {
    setTimeout(() => {
      if (isAuthenticated) {
        router.push("profile");
      } else {
        router.push("login");
      }
    }, 1000);
  }, []);

  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <ActivityIndicator
        size="large"
        animating={true}
      />
    </View>
  );
}