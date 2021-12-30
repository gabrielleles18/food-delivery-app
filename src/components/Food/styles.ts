import {Platform, StyleSheet} from "react-native";
import {theme} from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        padding: 5,
        paddingBottom: 10
    },
    content: {
        width: 156,
        borderRadius: 30,
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        overflow: 'hidden',
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
            },
            android: {
                elevation: 5
            },
            default: {
                elevation: 5
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
        // elevation: 5,
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
