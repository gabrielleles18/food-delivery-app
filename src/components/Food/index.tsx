import React from "react";
import {Image, Text, View} from "react-native";
import {RectButton, RectButtonProps} from "react-native-gesture-handler";

import {styles} from "./styles";

export type FoodProps = {
    id: string,
    title: string,
    image: string,
    price: string
}

type Props = RectButtonProps & {
    data: FoodProps
}

export function Food({data, ...rest}: Props) {

    return (
        <View style={styles.container}>
            <Image
                source={{uri: data.image}}
                style={styles.image}
            />
            <View style={styles.content}>
                <RectButton {...rest}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.price}>{data.price}</Text>
                </RectButton>
            </View>
        </View>
    )
}
