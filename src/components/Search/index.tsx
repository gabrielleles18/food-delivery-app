import React from "react";
import {BorderlessButton} from 'react-native-gesture-handler';
import {View, TextInput} from "react-native";
import {Feather} from "@expo/vector-icons";
import {NativeStackHeaderProps} from "@react-navigation/native-stack";

import {styles} from './styles';
import {theme} from "../../global/styles/theme";

export function Search({navigation}: NativeStackHeaderProps) {
    return (
        <View style={styles.container}>
            <BorderlessButton onPress={()=>navigation.navigate('Search')}>
                <Feather
                    name='search'
                    color={theme.colors.black}
                    size={22}
                    style={styles.icon}
                />
            </BorderlessButton>
            <TextInput
                style={styles.input}
                placeholder='Search'
            />
        </View>
    );
}
