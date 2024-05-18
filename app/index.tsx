import React, {useEffect} from "react";
import {ActivityIndicator} from "react-native-paper";
import {useRouter} from "expo-router";
import {useParse} from "@/hooks/useParse";
import {View} from "react-native";

export default function IndexScreen() {

  const router = useRouter();
  const {parse, parseUser, isParseLoaded} = useParse();

  useEffect(() => {
    if (!isParseLoaded) return;
    (async () => {
      if (parseUser) {
        console.log("User is authenticated!");
        console.log(parseUser.toJSON());
        router.replace("/profile");
      } else {
        console.log("User is not authenticated.");
        console.log({});
        router.replace("/(auth)/login");
      }
    })();
  }, [isParseLoaded]);

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