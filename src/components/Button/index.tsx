import React from "react";
import {Text} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';

import {styles} from './styles';
import {theme} from "../../global/styles/theme";

type Props = RectButtonProps & {
    title: string;
    isWhite?: boolean
}

export function Button({title, isWhite, ...rest}: Props) {
    return (
        <RectButton
            style={[styles.container,
                isWhite ? {
                    backgroundColor: theme.colors.white
                } : {}
            ]}
            {...rest}
        >
            <Text style={[styles.title,
                isWhite ? {
                    color: theme.colors.primary
                } : {}
            ]}>
                {title}
            </Text>
        </RectButton>
    );
}
