import {StyleSheet} from "react-native";

import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 10
    },
    flatList: {
        flex: 1,
        flexWrap: 'wrap',
        paddingVertical: 30
    }
})
