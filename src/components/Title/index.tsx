import React from "react";
import {Text} from "react-native";

import {styles} from './styles';

type Props = {
    title: string,
    size?: number
}

export function Title({title, size = 34}: Props) {
    return (
        <Text style={[styles.title, {fontSize: size}]}>
            {title}
        </Text>
    )
}
