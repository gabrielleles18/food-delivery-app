import {StyleSheet} from "react-native";
import {getStatusBarHeight} from "react-native-iphone-x-helper";

import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: getStatusBarHeight(),
        backgroundColor: theme.colors.gray20,
        paddingHorizontal: 30,
        paddingBottom: 30
    },
    containerDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 35,
        marginBottom: 10
    },
    boxUser: {
        backgroundColor: theme.colors.white,
        paddingHorizontal: 30,
        paddingVertical: 25,
        borderRadius: 20,
        marginBottom: 40
    },
    title: {
        color: theme.colors.black,
        fontSize: 16,
        fontFamily: theme.fonts.rounded700,
        marginBottom: 5,
    },
    text: {
        color: theme.colors.black,
        fontSize: 15,
        fontFamily: theme.fonts.rounded600,
        lineHeight: 17,
    },
    devider: {
        height: 1,
        backgroundColor: theme.colors.gray40,
        marginVertical: 8
    },
    details: {
        fontSize: 18,
        fontFamily: theme.fonts.rounded700,
        color: theme.colors.black
    },
    change: {
        color: theme.colors.primary,
        fontSize: 15,
        fontFamily: theme.fonts.rounded600,
    },
    total:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30
    },
    textH6:{
        fontSize: 15,
        fontFamily: theme.fonts.rounded600
    },
    value:{
        fontSize: 17,
        fontFamily: theme.fonts.rounded700
    }
})
