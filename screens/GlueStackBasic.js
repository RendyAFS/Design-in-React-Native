import React from "react";
import { GluestackUIProvider, View, Text } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
const GlueStackUIBasic = () => {
    return (
        <GluestackUIProvider config={config}>
            <View flex={1} flexDirection="column" >
                <Text flex={1} backgroundColor="red">
                    
                </Text>
                <Text flex={1} backgroundColor="blue">
                    
                </Text>
            </View>
        </GluestackUIProvider>
    );
};
export default GlueStackUIBasic;