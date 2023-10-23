import React from "react";
import { GluestackUIProvider, Text, View,  } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";


const LotsOfStyles = () => {
    return (
        <GluestackUIProvider config={config}>
            <View padding={15}>
                <Text color="red">just red</Text>
                <Text color="blue" fontWeight="bold" fontSize={30} paddingVertical={10}>just bigBlue</Text>
                <Text color="red" fontWeight="bold" fontSize={30} paddingVertical={10}>bigBlue, then red</Text>
                <Text color="blue" fontWeight="bold" fontSize={30} paddingVertical={8}>red, then bigBlue</Text>
            </View>
        </GluestackUIProvider>
    );
};

export default LotsOfStyles;
