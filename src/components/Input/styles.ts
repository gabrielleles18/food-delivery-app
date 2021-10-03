import {StyleSheet} from "react-native";

import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 40
    },
    title: {
        color: theme.colors.gray60,
        fontFamily: theme.fonts.rounded700,
        fontSize: 12
    },
    input: {
        borderBottomWidth: 1,
        borderColor: theme.colors.black,
        fontSize: 16,
        paddingTop: 2,
        paddingBottom: 5,
        fontFamily: theme.fonts.rounded700
    }
})
