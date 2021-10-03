import {StyleSheet} from "react-native";
import {getStatusBarHeight} from "react-native-iphone-x-helper";

import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.gray20
    },
    header: {
        width: '100%',
        height: 300,
        flex: 1,
        backgroundColor: theme.colors.white,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',

        // shadowOffset: { height: 3, width: 6 },
        // shadowRadius: 30,
        // shadowColor: '#000',
        // shadowOpacity: 0.3,
    },
    image: {
        width: 120,
        height: 120
    },
    links: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        position: 'absolute',
        bottom: 0,
    },
    footer: {
        width: '100%',
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 40,
        paddingBottom: 30,
    },
    forgot: {
        color: theme.colors.primary,
        fontSize: 17,
        fontFamily: theme.fonts.rounded600,
        marginTop: -18,
        marginBottom: 25
    }
})
