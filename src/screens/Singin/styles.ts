import {StyleSheet} from "react-native";
import {getStatusBarHeight} from "react-native-iphone-x-helper";

import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: getStatusBarHeight() + 20,
        backgroundColor: theme.colors.segondary80,
        color: 'red'
    },
    logo: {
        width: 73,
        height: 73,
        borderRadius: 73,
        backgroundColor: theme.colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30
    },
    img: {
        width: 40,
        height: 40
    },
    title: {
        fontSize: 55,
        lineHeight: 60,
        color: theme.colors.white,
        marginTop: 20,
        fontFamily: theme.fonts.rounded800,
        letterSpacing: -0.83,
        paddingHorizontal: 30
    },
    users: {
        width: '100%',
        flex: 1
    },
    contentImageButton: {
        position: 'relative'
    },
    containerButton: {
        width: '100%',
        paddingHorizontal: 30,
        position: 'absolute',
        bottom: 36
    }
})
