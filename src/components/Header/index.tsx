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
    color?: string
}

export function Header({title, iconLeft, iconRight, color = theme.colors.black}: Props) {
    return (
        <View style={styles.container}>
            <BorderlessButton>
                <Feather
                    name={iconLeft}
                    color={theme.colors.black}
                    size={24}
                />
            </BorderlessButton>

            <Text>{title}</Text>

            <BorderlessButton>
                <SimpleLineIcons
                    name={iconRight}
                    // name='basket'
                    color={color}
                    size={24}
                />
            </BorderlessButton>
        </View>
    );
}
