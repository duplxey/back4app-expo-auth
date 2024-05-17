import React from 'react';
import {View} from "react-native";

export type ContainerProps = {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <View style={{
      margin: 12,
    }}>
      {children}
    </View>
  );
}
