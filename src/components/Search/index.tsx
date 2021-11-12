import React from "react";
import {BorderlessButton} from 'react-native-gesture-handler';
import {View, TextInput} from "react-native";
import {Feather} from "@expo/vector-icons";

import {styles} from './styles';
import {theme} from "../../global/styles/theme";

export function Search() {
    return (
        <View style={styles.container}>
            <BorderlessButton>
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
