import React from "react";
import {Text, View} from 'react-native';
import {RectButton, RectButtonProps} from "react-native-gesture-handler";

import {styles} from './styles';
import {theme} from "../../global/styles/theme";

type Props = RectButtonProps & {
    title: string;
    checked?: boolean,
    hasCheckBox?: boolean
}

export function Category({title, checked, ...rest}: Props) {
    return (
        <View style={styles.container}>
            <RectButton {...rest} rippleColor={theme.colors.gray20}>
                <Text style={[styles.item,
                    checked ? {
                        color: theme.colors.segondary85,
                        borderBottomWidth: 3,
                        borderBottomColor: theme.colors.primary
                    } : {}
                ]}>
                    {title}
                </Text>
            </RectButton>
        </View>
    );
}
