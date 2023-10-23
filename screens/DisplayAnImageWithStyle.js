import React from "react";
import { Separator } from "../components";
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider, View, Image, Text, ScrollView } from "@gluestack-ui/themed";

const DisplayAnImageWithStyle = () => {
    return (
        <GluestackUIProvider config={config}>
            <ScrollView>
                <View justifyContent="center" alignItems="center" padding={30}>
                    <View>
                        <Image
                            alt="#" role="image"
                            resizeMode="cover" height={100} width={200} backgroundColor="grey"
                            source={require("../assets/js.png")}
                        />
                        <Text>resizeMode : cover</Text>
                    </View>

                    <Separator height={30} />

                    <View>
                        <Image
                            alt="#" role="image"
                            resizeMode="contain" height={100} width={200} backgroundColor="grey"
                            source={require("../assets/js.png")}
                        />
                        <Text>resizeMode : contain</Text>
                    </View>

                    <Separator height={30} />

                    <View>
                        <Image
                            alt="#" role="image"
                            resizeMode="stretch" height={100} width={200} backgroundColor="grey"
                            source={require("../assets/js.png")}
                        />
                        <Text>resizeMode : stretch</Text>
                    </View>

                    <Separator height={30} />

                    <View>
                        <Image
                            alt="#" role="image"
                            resizeMode="repeat" height={100} width={200} backgroundColor="grey"
                            source={require("../assets/js.png")}
                        />
                        <Text>resizeMode : repeat</Text>
                    </View>

                    <Separator height={30} />

                    <View>
                        <Image
                            alt="#" role="image"
                            resizeMode="center" height={100} width={200} backgroundColor="grey"
                            source={require("../assets/js.png")}
                        />
                        <Text>resizeMode : center</Text>
                    </View>
                </View>
            </ScrollView>
        </GluestackUIProvider>
    );
};

export default DisplayAnImageWithStyle;
