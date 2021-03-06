import {StyleSheet} from "react-native";
import {getStatusBarHeight} from "react-native-iphone-x-helper";

import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        paddingTop: getStatusBarHeight(),
        paddingBottom: 25,
        flex: 1,
    },
    head: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
        marginBottom: 20
    },
    image: {
        width: 15,
        height: 15
    },
    textSwipe: {
        fontFamily: theme.fonts.rounded600,
        color: theme.colors.black,
        fontSize: 10
    },
    containerItem: {
        paddingHorizontal: 30,
    },
    item: {
        backgroundColor: '#fff',
        marginBottom: 15,
        borderRadius: 20,
        paddingHorizontal: 17,
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageItem: {
        width: 69,
        height: 69,
        borderRadius: 69,
        marginRight: 16
    },
    content: {
        flex: 1
    },
    title: {
        fontSize: 17,
        color: theme.colors.black,
        fontFamily: theme.fonts.rounded700,
        marginBottom: 5
    },
    priceAmount: {
        width: 181,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    price: {
        fontSize: 15,
        color: theme.colors.primary,
        fontFamily: theme.fonts.rounded600,
    },
    hiddenItem: {
        flex: 1,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    touchItem: {
        width: 45,
        height: 45,
        borderRadius: 45,
        backgroundColor: theme.colors.segondary90,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerButton:{
        paddingHorizontal: 30
    }
})
