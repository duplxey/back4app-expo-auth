import "react-native-get-random-values";
import {DarkTheme, DefaultTheme, ThemeProvider} from "@react-navigation/native";
import {useFonts} from "expo-font";
import {Stack} from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import {useEffect} from "react";
import "react-native-reanimated";
import Parse from "parse/react-native.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {useColorScheme} from "@/hooks/useColorScheme";
import {PaperProvider} from "react-native-paper";
import ParseContext from "@/context/parseContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(
  process.env.EXPO_PUBLIC_APPLICATION_ID ?? "",
  process.env.EXPO_PUBLIC_JAVASCRIPT_KEY ?? "",
)
Parse.serverURL = "https://parseapi.back4app.com/";

async function testParse() {
  try {
    const testMessage = new Parse.Object("TestMessage");
    testMessage.set("message", "Hello, World!");
    await testMessage.save();
  } catch (error) {
    console.log("Error saving the test message: ", error);
  }
}
// testParse().then(() => console.log("Successfully connected to Parse!"));

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ParseContext.Provider value={Parse}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <PaperProvider>
          <Stack>
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="(auth)" options={{headerShown: false}}/>
            <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
            <Stack.Screen name="+not-found"/>
          </Stack>
        </PaperProvider>
      </ThemeProvider>
    </ParseContext.Provider>
  );
}
