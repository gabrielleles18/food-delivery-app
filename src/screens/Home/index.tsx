import React, {useState} from "react";
import {FlatList, Text, View} from "react-native";

import {Header} from "../../components/Header";
import {Category} from "../../components/Category";
import {Search} from "../../components/Search";
import {theme} from "../../global/styles/theme";

import {styles} from "./styles";
import {EnviromentButton} from "../../../../plant-manager/src/components/EnviromentButton";

export function Home() {


    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];

    return (
        <View style={styles.container}>
            <Header
                iconLeft='align-left'
                iconRight='basket'
                color={theme.colors.gray50}
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Deliciouss {'\n'}Food for you
                </Text>
                <Search />
                <FlatList
                    data={DATA}
                    renderItem={({item}) => (
                        <Category
                            title={item.title}
                        />
                    )}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}
