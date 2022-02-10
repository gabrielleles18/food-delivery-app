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
    data: FoodProps,
    widthContent?: number
}

export function Food({data, widthContent, ...rest}: Props) {

    return (
        <View style={styles.container}>
            <View style={styles.containerImg}>
                <Image
                    source={{uri: data.image}}
                    style={styles.image}
                />
            </View>
            <View style={[styles.content, {width: widthContent ? widthContent : 156}]}>
                <RectButton {...rest} style={{width: '100%'}}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.price}>{data.price}</Text>
                </RectButton>
            </View>
        </View>
    )
}
