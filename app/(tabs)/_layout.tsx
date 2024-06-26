import React from "react";
import {Tabs} from "expo-router";

import {TabBarIcon} from "@/components/navigation/TabBarIcon";
import {useColorScheme} from "@/hooks/useColorScheme";
import {Colors} from "@/constants/Colors";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
      }}>
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon name={focused ? "person" : "person-outline"} color={color}/>
          ),
        }}
      />
    </Tabs>
  );
}
