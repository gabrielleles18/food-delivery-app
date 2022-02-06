import {StyleSheet} from "react-native";
import {getStatusBarHeight} from "react-native-iphone-x-helper";

import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: getStatusBarHeight() + 15,
        paddingHorizontal: 30,
        backgroundColor: theme.colors.gray20,
    },
    containerDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 35,
        marginBottom: 10
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
    boxUser: {
        backgroundColor: theme.colors.white,
        padding: 18,
        borderRadius: 20,
        flexDirection: 'row'
    },
    handles:{
        flex: 1,
        marginTop: 13,
        paddingBottom: 50,
    },
    content: {
        flex: 1
    },
    image: {
        width: 91,
        height: 100,
        borderRadius: 10,
        marginRight: 15
    },
    title: {
        color: theme.colors.black,
        fontSize: 18,
        fontFamily: theme.fonts.rounded700,
        marginBottom: 5,
        marginTop: 5
    },
    text: {
        color: theme.colors.gray60,
        fontSize: 15,
        fontFamily: theme.fonts.rounded600,
        lineHeight: 17,
    },
    devider: {
        height: 1,
        backgroundColor: theme.colors.gray40,
        marginVertical: 8
    }
})
