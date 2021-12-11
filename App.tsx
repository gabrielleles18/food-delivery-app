import React from 'react';
import {View, StatusBar} from 'react-native';
import {useFonts} from "expo-font";
import {Login} from "./src/screens/Login";
import {Singin} from "./src/screens/Singin";
import {Profile} from "./src/screens/Profile";
import AppLoading from "expo-app-loading";
import {MPLUSRounded1c_800ExtraBold} from '@expo-google-fonts/m-plus-rounded-1c';
import {MPLUSRounded1c_500Medium} from '@expo-google-fonts/m-plus-rounded-1c';
import {MPLUSRounded1c_700Bold} from '@expo-google-fonts/m-plus-rounded-1c';

import {styles} from "./styles";
import {theme} from './src/global/styles/theme';
import {Home} from "./src/screens/Home";

export default function App() {

    const [fontsLoaded] = useFonts({
        MPLUSRounded1c_800ExtraBold,
        MPLUSRounded1c_500Medium,
        MPLUSRounded1c_700Bold
    });

    if (!fontsLoaded) {
        return <AppLoading/>
    }

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle='light-content'
                backgroundColor={theme.colors.segondary80}
                translucent
            />
            <Profile/>
        </View>
    );
}
