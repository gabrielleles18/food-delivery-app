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
    menu: {
        flexGrow: 1,
        backgroundColor: theme.colors.primary,
        paddingHorizontal: 20,
        paddingVertical: 30,
        justifyContent: 'space-between'
    },
    itens: {
        width: 180,
    },
    row: {
        flexDirection: 'row'
    },
    menuIcons: {
        color: theme.colors.white
    },
    menuTitle:{
        color: theme.colors.white,
        fontSize: 17,
        fontFamily: theme.fonts.rounded700,
        marginLeft: 10
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: theme.colors.segondary20,
        marginLeft: 34,
        marginVertical: 16
    },
    logoff:{
      flexDirection: 'row'
    },
    header: {
        flexGrow: 1,
        width: '100%',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25
    },
    icons: {
        padding: 5
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
        flex: 1
    }
})
