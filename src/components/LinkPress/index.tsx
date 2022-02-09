import React from "react";
import {Text} from 'react-native';
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
            rippleColor={theme.colors.white}
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
