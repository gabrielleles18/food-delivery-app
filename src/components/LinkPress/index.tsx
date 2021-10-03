import React from "react";
import {Text, View} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';

import {styles} from './styles';
import {theme} from "../../global/styles/theme";

type Props = RectButtonProps & {
    title: string,
    isChecked?: boolean
}

export function LinkPress({title, isChecked, ...rest}: Props) {
    return (
        <RectButton
            style={styles.container}
            {...rest}
        >
            <Text style={[styles.title,
                isChecked ? {
                    borderColor: theme.colors.segondary80
                } : {}
            ]}>
                {title}
            </Text>
        </RectButton>
    );
}
