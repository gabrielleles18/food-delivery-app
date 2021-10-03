import {StyleSheet} from "react-native";

import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.primary
    },
    backgroundWhite: {
        backgroundColor: theme.colors.white
    },
    title: {
        fontSize: 17,
        fontWeight: '600',
        color: theme.colors.white,
        fontFamily: theme.fonts.rounded600
    }
})
