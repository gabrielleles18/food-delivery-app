import {StyleSheet} from "react-native";

import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '45%'
    },
    title: {
        fontSize: 18,
        fontFamily: theme.fonts.rounded600,
        textAlign: 'center',
        padding: 8,
        paddingBottom: 8,
        borderBottomWidth: 3,
        borderColor: theme.colors.white
    }
})
