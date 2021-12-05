import {StyleSheet} from "react-native";
import {getStatusBarHeight} from "react-native-iphone-x-helper";

import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        paddingTop: getStatusBarHeight()
    },
    swiper: {
        width: '100%',
        height: 290,
        marginTop: 15
    },
    swiperItem: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    image: {
        width: 220,
        height: 220,
        borderRadius: 220
    }
})
