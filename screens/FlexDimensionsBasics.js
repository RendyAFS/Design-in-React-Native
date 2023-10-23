import React from "react";
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider, View } from "@gluestack-ui/themed";


const FlexDimensionsBasics = () => {
    return (
        <GluestackUIProvider config={config}>
            <View flex={1}>
                <View flex={1} backgroundColor="red"/>
                <View flex={5} backgroundColor="green" />
                <View flex={1} backgroundColor="blue" />
            </View>
        </GluestackUIProvider>
    );
};

export default FlexDimensionsBasics;
