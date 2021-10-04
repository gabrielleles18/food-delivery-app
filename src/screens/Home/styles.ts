import {StyleSheet} from "react-native";
import {getStatusBarHeight} from "react-native-iphone-x-helper";

import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        paddingTop: getStatusBarHeight() + 30,
        backgroundColor: theme.colors.gray20,
        paddingHorizontal: 30
    }
})
