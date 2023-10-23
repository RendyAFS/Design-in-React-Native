import React, { useState } from "react";
import {
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider, View, Text, } from "@gluestack-ui/themed";

const PositionLayout = () => {
    const [position, setPosition] = useState("relative");

    return (
        <GluestackUIProvider config={config}>
            <PreviewLayout
                label="position"
                selectedValue={position}
                values={["relative", "absolute"]}
                setSelectedValue={setPosition}
            >
                <View width={50} height={50} top={25} left={25} backgroundColor="red" style={{ position, }} />
                <View width={50} height={50} top={50} left={50} backgroundColor="green" style={{ position, }} />
                <View width={50} height={50} top={75} left={75} backgroundColor="blue" style={{ position, }} />

            </PreviewLayout>
        </GluestackUIProvider>
    );
};

const PreviewLayout = ({
    label,
    children,
    values,
    selectedValue,
    setSelectedValue,
}) => (
    <GluestackUIProvider config={config}>
        <View padding={10}>
            <Text textAlign="center" marginBottom={10} fontSize={24} paddingVertical={10}>{label}</Text>
            <View flexDirection="row" flexWrap="wrap">
                {values.map((value) => (
                    <TouchableOpacity
                        key={value}
                        onPress={() => setSelectedValue(value)}
                        style={[styles.button, selectedValue === value && styles.selected]}
                    >
                        <Text
                            style={[
                                styles.buttonLabel,
                                selectedValue === value && styles.selectedLabel,
                            ]}
                        >
                            {value}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View flex={1} marginTop={8} backgroundColor="pink" minHeight={200}>{children}</View>
        </View>
    </GluestackUIProvider>
);

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: "oldlace",
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "48%",
        textAlign: "center",
    },
    selected: {
        backgroundColor: "coral",
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

export default PositionLayout;
