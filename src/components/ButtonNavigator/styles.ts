import {StyleSheet} from "react-native";

import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        height: 60,
        borderRadius: 20,
        backgroundColor: theme.colors.white,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 13
    },
    title: {
        fontSize: 18,
        fontFamily: theme.fonts.rounded600
    }
})
