import {StyleSheet} from "react-native";

import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        backgroundColor: theme.colors.gray30,
        borderRadius: 30,
        paddingHorizontal: 30,
        alignItems: 'center',
    },
    icon: {
        padding: 5
    },
    input:{
        marginLeft: 10,
        fontFamily: theme.fonts.rounded600,
        flex: 1,
        fontSize: 17
    }
})
