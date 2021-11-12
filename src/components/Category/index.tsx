import React from "react";
import {Text, View} from 'react-native';

import {styles} from './styles';
import {theme} from "../../global/styles/theme";

type Props = {
    title?: string;
    isWhite?: boolean
}

export function Category({title, isWhite}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
    );
}
