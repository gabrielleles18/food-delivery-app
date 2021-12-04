import {StyleSheet} from "react-native";
import {theme} from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {},
    image: {
        width: 128,
        height: 128,
        borderRadius: 128,
        marginBottom: -80,
        alignSelf: 'center',
        zIndex: 99,
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,
    },
    content: {
        width: 156,
        borderRadius: 30,
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        overflow: 'hidden'
    },
    title: {
        fontFamily: theme.fonts.rounded700,
        color: theme.colors.black,
        fontSize: 18,
        textAlign: 'center',
        marginTop: 100,
        marginBottom: 10,
        paddingHorizontal: 20
    },
    price: {
        color: theme.colors.segondary85,
        fontSize: 14,
        textAlign: 'center',
        fontFamily: theme.fonts.rounded700,
        paddingHorizontal: 20,
        paddingBottom: 20,
    }
});
