import React, { useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider, View, Text } from "@gluestack-ui/themed";

const AlignItemsLayout = () => {
    const [alignItems, setAlignItems] = useState("stretch");

    return (
        <GluestackUIProvider config={config}>
            <PreviewLayout
                label="alignItems"
                selectedValue={alignItems}
                values={["stretch", "flex-start", "flex-end", "center", "baseline"]}
                setSelectedValue={setAlignItems}
            >
                <View width={50} height={50} backgroundColor="red" />
                <View width={50} height={50} backgroundColor="green" />
                <View width={"auto"} height={50} minWidth={50} backgroundColor="blue" />
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
        <View padding={10} flex={1}>
            <Text textAlign="center" marginBottom={10} fontSize={24} paddingVertical={20}>{label}</Text>
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
            <View flex={1} marginTop={8} backgroundColor="aliceblue" style={{ [label]: selectedValue }}>
                {children}
            </View>
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

export default AlignItemsLayout;
