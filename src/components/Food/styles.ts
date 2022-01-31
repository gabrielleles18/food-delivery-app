import {Platform, StyleSheet} from "react-native";
import {theme} from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        padding: 5,
        paddingBottom: 40
    },
    content: {
        width: 156,
        borderRadius: 30,
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        overflow: 'hidden',
        ...Platform.select({
            ios: {
                shadowColor: theme.colors.gray20,
                shadowOffset: {
                    width: 0,
                    height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.00,
            },
            android: {
                elevation: 24
            },
            default: {
                elevation: 24
            }
        })
    },
    containerImg:{
        ...Platform.select({
            ios: {
                shadowColor: theme.colors.gray20,
                shadowOffset: {
                    width: 0,
                    height: 13,
                },
                shadowOpacity: 0.68,
                shadowRadius: 17.00,
            },
            android: {
                elevation: 30
            },
            default: {
                elevation: 30
            }
        })
    },
    image: {
        width: 128,
        height: 128,
        borderRadius: 128,
        marginBottom: -80,
        alignSelf: 'center',
        zIndex: 99,
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
