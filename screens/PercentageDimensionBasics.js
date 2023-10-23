import React from "react";
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider, View } from "@gluestack-ui/themed";

const PercentageDimensionsBasics = () => {
    return (
        <GluestackUIProvider config={config}>
            <View height={"100%"}>
                <View
                    height={"15%"}
                    backgroundColor="red"
                />
                <View
                    width={"65%"}
                    height={"35%"}
                    backgroundColor="green"
                />
                <View
                    width={"33%"}
                    height={"50%"}
                    backgroundColor="blue"
                />
            </View>
        </GluestackUIProvider>
    );
};

export default PercentageDimensionsBasics;
