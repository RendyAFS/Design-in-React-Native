import React from "react";
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider, View } from "@gluestack-ui/themed";

const FlexBasic = () => {
  return (
    <GluestackUIProvider config={config}>
      <View flex={1} padding={20} flexDirection="column">
        <View flex={1} backgroundColor="red" />
        <View flex={2} backgroundColor="green" />
        <View flex={3} backgroundColor="blue" />
      </View>
    </GluestackUIProvider>
  );
};

export default FlexBasic;
