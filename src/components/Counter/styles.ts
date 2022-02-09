import {StyleSheet} from "react-native";

import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        alignItems: 'center',
    },
    button: {
        color: theme.colors.white,
        paddingHorizontal: 8,
    },
    text: {
        paddingHorizontal: 4,
        color: theme.colors.white
    },
})
