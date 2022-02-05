import {Platform, StyleSheet} from "react-native";
import {theme} from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.gray20
    },
    title: {
        fontSize: 28,
        color: theme.colors.black,
        marginVertical: 10,
        fontFamily: theme.fonts.rounded700
    },
    subTitle: {
        width: 270,
        fontSize: 16,
        color: '#4B4B50',
        textAlign: 'center',
        fontFamily: theme.fonts.rounded600
    }
});
