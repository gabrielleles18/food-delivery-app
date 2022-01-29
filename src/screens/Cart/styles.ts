import {StyleSheet} from "react-native";
import {getStatusBarHeight} from "react-native-iphone-x-helper";

import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        paddingTop: getStatusBarHeight(),
        paddingHorizontal: 30,
        paddingBottom: 25,
    },
    top:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image:{
        width: 15,
        height: 15
    },
    textSwipe:{
        fontFamily: theme.fonts.rounded600,
        color: theme.colors.black,
        fontSize: 10
    }
})
