import React from "react";
import {Text, View} from "react-native";

import {styles} from "./styles";
import {Feather} from "@expo/vector-icons";

export type Props = {
    title: string,
    subTitle: string,
    icon: string
}

export function NotFound({title, subTitle, icon}: Props) {

    return (
        <View style={styles.container}>
            <Feather
                name={icon}
                color='#C7C7C7'
                size={90}
            />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
    )
}
