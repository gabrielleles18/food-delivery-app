import React from "react";
import {Text, View} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {SimpleLineIcons} from '@expo/vector-icons';
import {BorderlessButton} from "react-native-gesture-handler";

import {styles} from './styles';
import {theme} from "../../global/styles/theme";

type Props = {
    title?: string,
    iconLeft: any,
    iconRight?: any,
    color?: string,
    screenPress: string,
    navigation: any
}

export function Header(
    {
        title,
        iconLeft,
        iconRight,
        screenPress,
        color = theme.colors.black,
        navigation
    }: Props) {
    return (
        <View style={styles.container}>
            <BorderlessButton>
                <Feather
                    name={iconLeft}
                    color={theme.colors.black}
                    size={24}
                    style={styles.icons}
                />
            </BorderlessButton>

            <Text>{title}</Text>

            <BorderlessButton
                onPress={() => navigation.navigate(screenPress)}
            >
                <SimpleLineIcons
                    name={iconRight}
                    color={color}
                    size={24}
                    style={styles.icons}
                />
            </BorderlessButton>
        </View>
    );
}
