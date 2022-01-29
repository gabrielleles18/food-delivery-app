import {StyleSheet} from "react-native";

import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        fontFamily: theme.fonts.rounded600,
        fontSize: 17,
        color: theme.colors.gray55,
        marginHorizontal: 12,
        paddingHorizontal: 12,
        paddingBottom: 5,
    }
})
