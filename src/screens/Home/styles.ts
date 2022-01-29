import {StyleSheet} from "react-native";
import {getStatusBarHeight} from "react-native-iphone-x-helper";

import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        paddingTop: getStatusBarHeight(),
        backgroundColor: theme.colors.gray20
    },
    content: {
        paddingHorizontal: 30,
        paddingTop: 10
    },
    title: {
        fontSize: 34,
        color: theme.colors.black,
        fontFamily: theme.fonts.rounded800,
        lineHeight: 40,
        marginBottom: 20
    },
    flatList: {
        marginTop: 25,
    },
})
