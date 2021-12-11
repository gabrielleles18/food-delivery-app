import React from "react";
import {Text, View} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';

import {styles} from './styles';
import {theme} from "../../global/styles/theme";
import {Feather} from "@expo/vector-icons";

type Props = RectButtonProps & {
    title: string;
    icon?: any
}

export function ButtonNavigator({title, icon = 'chevron-right', ...rest}: Props) {
    return (
        <RectButton style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Feather
                name={icon}
                color={theme.colors.black}
                size={24}
            />
        </RectButton>
    );
}
