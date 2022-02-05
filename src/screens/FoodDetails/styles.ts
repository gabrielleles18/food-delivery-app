import {StyleSheet} from "react-native";
import {getStatusBarHeight} from "react-native-iphone-x-helper";

import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        paddingTop: getStatusBarHeight(),
        flex: 1,
    },
    swiper: {
        width: '100%',
        height: 270,
        marginTop: 15
    },
    swiperItem: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    image: {
        width: 220,
        height: 220,
        borderRadius: 220
    },
    title: {
        fontFamily: theme.fonts.rounded700,
        fontSize: 28,
        color: theme.colors.black,
        textAlign: 'center'
    },
    price: {
        fontFamily: theme.fonts.rounded700,
        fontSize: 22,
        color: theme.colors.primary,
        textAlign: 'center'
    },
    content: {
        paddingHorizontal: 30,
        marginTop: 15,
        marginBottom: 30
    },
    info: {
        marginTop: 35,
        paddingBottom: 30
    },
    infoTitle: {
        fontFamily: theme.fonts.rounded700,
        fontSize: 17,
        color: theme.colors.black,
        marginBottom: 5
    },
    text: {
        fontFamily: theme.fonts.rounded600,
        fontSize: 15,
        color: theme.colors.gray55,
        marginBottom: 30
    }
})
