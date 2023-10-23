import React, { useState } from "react";
import {
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider, View, Text, } from "@gluestack-ui/themed";

const WidthHeightBasics = () => {
    const [widthType, setWidthType] = useState("auto");
    const [heightType, setHeightType] = useState("auto");

    return (
        <GluestackUIProvider config={config}>

            <PreviewLayout
                widthType={widthType}
                heightType={heightType}
                widthValues={["auto", 200, "80%"]}
                heightValues={["auto", 200, "60%"]}
                setWidthType={setWidthType}
                setHeightType={setHeightType}
            >
                <View
                    style={{
                        alignSelf: "flex-start",
                        backgroundColor: "pink",
                        height: heightType,
                        width: widthType,
                        padding: 15,
                    }}
                >
                    <View width={50} height={50} backgroundColor="red" />
                    <View width={50} height={50} backgroundColor="green" />
                    <View width={50} height={50} backgroundColor="blue" />
                </View>
            </PreviewLayout>
        </GluestackUIProvider>
    );
};

const PreviewLayout = ({
    children,
    widthType,
    heightType,
    widthValues,
    heightValues,
    setWidthType,
    setHeightType,
}) => (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
        <GluestackUIProvider config={config}>
            <View flexDirection="row" flexWrap="wrap">
                <Text textAlign="center" marginBottom={10} fontSize={24} paddingVertical={10}>width </Text>
                {widthValues.map((value) => (
                    <TouchableOpacity
                        key={value}
                        onPress={() => setWidthType(value)}
                        style={[styles.button, widthType === value && styles.selected]}
                    >
                        <Text
                            style={[
                                styles.buttonLabel,
                                widthType === value && styles.selectedLabel,
                            ]}
                        >
                            {value}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View flexDirection="row" flexWrap="wrap">
                <Text textAlign="center" marginBottom={10} fontSize={24} paddingVertical={10}>height </Text>
                {heightValues.map((value) => (
                    <TouchableOpacity
                        key={value}
                        onPress={() => setHeightType(value)}
                        style={[styles.button, heightType === value && styles.selected]}
                    >
                        <Text
                            style={[
                                styles.buttonLabel,
                                heightType === value && styles.selectedLabel,
                            ]}
                        >
                            {value}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            {children}
        </GluestackUIProvider >
    </SafeAreaView>
);

const styles = StyleSheet.create({
    button: {
        padding: 8,
        borderRadius: 4,
        backgroundColor: "oldlace",
        alignSelf: "flex-start",
        marginRight: 10,
        marginBottom: 10,
    },
    selected: {
        backgroundColor: "coral",
        shadowOpacity: 0,
        borderWidth: 0,
    },
    buttonLabel: {
        fontSize: 12,
        fontWeight: "500",
        color: "coral",
    },
    selectedLabel: {
        color: "white",
    },
});

export default WidthHeightBasics;