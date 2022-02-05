import {Platform, StyleSheet} from "react-native";
import {theme} from "../../global/styles/theme";

export const styles = StyleSheet.create({
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
        paddingHorizontal: 30,
        paddingVertical: 25,
        borderRadius: 20,
        marginBottom: 40
    },
    devider: {
        height: 1,
        backgroundColor: theme.colors.gray40,
        marginVertical: 8
    },
    radio:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    textH6:{
        fontSize: 15,
        fontFamily: theme.fonts.rounded600
    },
    titleRadio:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    miniBox:{
        width: 40,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
        marginLeft: 5
    }
});
