import React, {useState} from "react";
import {Image, ScrollView, Text, TextInput, View} from "react-native";
import {styles} from "./styles";
import {Header} from "../../components/Header";
import {theme} from "../../global/styles/theme";

export function Home() {

    return (
        <View style={styles.container}>
            <Header
                iconLeft='align-left'
                iconRight='basket'
                color={theme.colors.gray50}
            />
        </View>
    )
}
