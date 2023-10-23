import React from "react";
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider, View } from "@gluestack-ui/themed";

const FixedDimensionsBasics = () => {
    return (
        <GluestackUIProvider config={config}>
            <View>
                <View
                    width={50}
                    height={50}
                    backgroundColor="red"
                />
                <View
                    width={100}
                    height={100}
                    backgroundColor="green"
                />
                <View
                    width={150}
                    height={150}
                    backgroundColor="blue"
                />
            </View>
        </GluestackUIProvider>
    );
};

export default FixedDimensionsBasics;
